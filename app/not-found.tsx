'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-6xl font-bold text-amber-500 mb-4">404</div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Property Not Found
          </h1>
          <p className="text-lg text-slate-600">
            Sorry, the property you're looking for doesn't exist or has been removed.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full justify-center"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          
          <Link
            href="/listings"
            className="inline-flex items-center space-x-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors w-full justify-center"
          >
            <Search className="h-5 w-5" />
            <span>Browse Properties</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-800 font-medium w-full justify-center pt-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}