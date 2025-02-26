import React, { useState } from 'react';
import { BookReview } from '../types';
import { useAuth } from '../context/AuthContext';
import { Star } from 'lucide-react';

interface ReviewFormProps {
  bookId: number;
  onSubmit: (review: BookReview) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ bookId, onSubmit }) => {
  const { user } = useAuth();
  
  const [review, setReview] = useState<BookReview>({
    bookId,
    userId: user?.id || 0,
    rating: 0,
    comment: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (review.rating === 0) newErrors.rating = 'Please select a rating';
    if (!review.comment.trim()) newErrors.comment = 'Please write a review';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRatingChange = (newRating: number) => {
    setReview(prev => ({ ...prev, rating: newRating }));
    if (errors.rating) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.rating;
        return newErrors;
      });
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(prev => ({ ...prev, comment: e.target.value }));
    if (errors.comment) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.comment;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit({
        ...review,
        userId: user?.id || 0
      });
      
      // Reset form
      setReview({
        bookId,
        userId: user?.id || 0,
        rating: 0,
        comment: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900">Write a Review</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange(star)}
              className="focus:outline-none"
            >
              <Star
                size={24}
                fill={star <= review.rating ? "#FBBF24" : "none"}
                stroke={star <= review.rating ? "#FBBF24" : "#9CA3AF"}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </button>
          ))}
        </div>
        {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          Your Review
        </label>
        <textarea
          id="comment"
          rows={4}
          value={review.comment}
          onChange={handleCommentChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            errors.comment ? 'border-red-500' : ''
          }`}
          placeholder="Share your thoughts about this book..."
        />
        {errors.comment && <p className="mt-1 text-sm text-red-600">{errors.comment}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;