import React, { useEffect, useState } from 'react';
import { Book } from '../types';
import { getAllBooks } from '../api';
import BookCard from '../components/BookCard';
import { BookOpen, BookPlus, RefreshCw, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getAllBooks();
        setBooks(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to BookSwap</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Exchange your books with other readers and discover new stories. 
            Share your thoughts and build a community around reading.
          </p>
          {isAuthenticated ? (
            <Link 
              to="/my-books/add" 
              className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              <BookPlus size={20} className="mr-2" />
              Add Your Book
            </Link>
          ) : (
            <Link 
              to="/register" 
              className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              Join BookSwap Today
            </Link>
          )}
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <BookOpen size={24} className="mr-2" />
            Recently Added Books
          </h2>
          
          <Link 
            to="/books" 
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            View All Books
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <RefreshCw size={32} className="text-indigo-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-md text-center">
            {error}
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-12 bg-gray-100 rounded-lg">
            <p className="text-gray-600">No books available yet. Be the first to add one!</p>
            {isAuthenticated && (
              <Link 
                to="/my-books/add" 
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Add a Book
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.slice(0, 8).map(book => (
              <BookCard 
                key={book.id} 
                book={book} 
                showTradeButton={isAuthenticated}
                onTradeClick={() => {
                  // Will implement in the trade page
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How BookSwap Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookPlus size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. List Your Books</h3>
              <p className="text-gray-600">Add books you're willing to exchange with other readers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Request Trades</h3>
              <p className="text-gray-600">Find books you want and request to trade with their owners.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Share Reviews</h3>
              <p className="text-gray-600">After reading, share your thoughts to help other readers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;