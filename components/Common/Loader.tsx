'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('loaderShown');
    if (alreadyShown) {
      setShowLoader(false);
    } else {
      const timeout = setTimeout(() => {
        sessionStorage.setItem('loaderShown', 'true');
        setShowLoader(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16 animate-spin-slow">
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-600 text-sm font-medium tracking-wide">Loading...</p>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
