import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogOut, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen size={24} />
            <span className="text-xl font-bold">BookSwap</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/books" className="hover:text-indigo-200 transition-colors">
              Browse Books
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/my-books" className="hover:text-indigo-200 transition-colors">
                  My Books
                </Link>
                <Link to="/trades" className="hover:text-indigo-200 transition-colors">
                  Trades
                </Link>
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>{user?.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-indigo-200 transition-colors"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="hover:text-indigo-200 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;