import React from 'react';
import { Book } from '../types';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onTradeClick?: () => void;
  showTradeButton?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onTradeClick,
  showTradeButton = true
}) => {
  const conditionColor = () => {
    switch (book.condition.toLowerCase()) {
      case 'new': return 'bg-green-100 text-green-800';
      case 'like new': return 'bg-green-100 text-green-800';
      case 'very good': return 'bg-blue-100 text-blue-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'acceptable': return 'bg-yellow-100 text-yellow-800';
      case 'poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{book.title}</h3>
            <p className="text-gray-600 mb-2">by {book.author}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${conditionColor()}`}>
            {book.condition}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4">Edition: {book.edition}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/books/${book.id}`}
            className="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <BookOpen size={16} className="mr-1" />
            View Details
          </Link>
          
          {showTradeButton && onTradeClick && (
            <button
              onClick={onTradeClick}
              className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors"
            >
              Request Trade
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;