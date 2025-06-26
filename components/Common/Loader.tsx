'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderShown = sessionStorage.getItem('loaderShown');
    
    if (loaderShown) {
      setIsLoading(false);
      setShowLoader(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowLoader(false), 500); // Fade out
      }, 2000);

      sessionStorage.setItem('loaderShown', 'true');
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <>
      <div className={`
        fixed top-0 left-0 w-full h-full bg-white z-[9999] 
        flex flex-col items-center justify-center gap-6
        transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="relative">
          <div className="absolute -inset-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse blur-[2px] opacity-20"></div>
          </div>
          <div className="absolute -inset-2 border-[3px] border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <Image 
              src="/images/logo/logo_light.png" 
              alt="Website Logo" 
              className="w-16 h-16 animate-soft-bounce"
              fill
            />
          </div>
        </div>
        <div className="flex space-x-1 mt-4">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((char, i) => (
            <span 
              key={i}
              className="text-gray-700 font-medium text-lg"
              style={{ 
                animation: `pulse 1.2s infinite ${i * 0.15}s`,
                animationFillMode: 'both' 
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes soft-bounce {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translateY(-8px) scale(1.05);
            opacity: 0.9;
          }
        }
        @keyframes pulse {
          0%, 100% { 
            transform: translateY(0);
            opacity: 1;
          }
          50% { 
            transform: translateY(-4px);
            opacity: 0.7;
          }
        }
        .animate-soft-bounce {
          animation: soft-bounce 1.8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
} 