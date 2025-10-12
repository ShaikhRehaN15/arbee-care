"use client";
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/Arbee - Logo - Reveal.json';

export default function LoadingScreen({ 
  isLoading = true, 
  onComplete,
  duration = 3000 // Default 3 seconds
}) {
  const [showLoading, setShowLoading] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      setShowLoading(false);
      if (onComplete) onComplete();
    }
  }, [isLoading, onComplete]);

  useEffect(() => {
    if (isLoading) {
      // Auto-hide after specified duration
      const timer = setTimeout(() => {
        setShowLoading(false);
        if (onComplete) onComplete();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, duration, onComplete]);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#161616] flex items-center justify-center">
      <div className="w-full max-w-[700px] h-[200px] flex items-center justify-center px-4">
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}