import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Maintenance() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-yellow-50 text-yellow-600 p-4 rounded-full mb-6 relative">
        <div className="absolute inset-0 bg-yellow-200 animate-ping opacity-20 rounded-full"></div>
        <ShieldAlert className="w-12 h-12 relative z-10" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">UNDER MAINTENANCE</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        âï¸ Feature upgrading. Our premium system is coming soon. Please check back later.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
}
