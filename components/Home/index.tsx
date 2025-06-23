'use client'
import { useState, useEffect, useRef } from 'react';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Projects from "@/components/projects";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats/Stats";
import Image from "next/image";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const loaderShownRef = useRef(false);

  useEffect(() => {
    // Check if loader has been shown before in this session
    const loaderShown = sessionStorage.getItem('loaderShown');
    
    if (loaderShown) {
      setIsLoading(false);
      setShowLoader(false);
      return;
    }

    // Set a maximum timeout (5 seconds) as fallback
    const maxTimer = setTimeout(() => {
      if (loaderShownRef.current) return;
      finishLoading();
    }, 5000);

    // Function to complete loading
    const finishLoading = () => {
      loaderShownRef.current = true;
      setIsLoading(false);
      setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('loaderShown', 'true');
      }, 500);
      clearTimeout(maxTimer);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      finishLoading();
      return;
    }

    // Wait for all page resources to load
    window.addEventListener('load', finishLoading);
    
    return () => {
      window.removeEventListener('load', finishLoading);
      clearTimeout(maxTimer);
    };
  }, []);

  return (
    <>
      {/* Loader overlay - only shown on initial visit */}
      {showLoader && (
        <div className={`
          fixed top-0 left-0 w-full h-full bg-white z-[9999] 
          flex flex-col items-center justify-center gap-6
          transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}
        `}>
          {/* Logo container with animation */}
          <div className="relative">
            {/* Animated gradient ring */}
            <div className="absolute -inset-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse blur-[2px] opacity-20"></div>
            </div>
            
            {/* Rotating border */}
            <div className="absolute -inset-2 border-[3px] border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            
            {/* Your logo */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image 
                src="/images/logo/logo_light.png" 
                alt="Website Logo" 
                fill
                className="w-16 h-16 animate-soft-bounce"
              />
            </div>
          </div>
          
          {/* Animated text */}
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
      )}

      {/* Main page content */}
      <div className={showLoader ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        <ScrollUp />
        <Hero />
        <Stats />
        <Services />
        <Brands />
        <Projects />
        <AboutSectionOne value="true"/>
        <AboutSectionTwo />
        <Testimonials />
        <Contact />
      </div>
      
      {/* Global styles for animations */}
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