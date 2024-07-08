'use client'

import React, { useEffect } from 'react';
import { useFlash } from '@/components/ui/FlashProvider';

export function FlashMessage(): JSX.Element | null {
  const { flashMessage, setFlashMessage } = useFlash();

  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => {
        setFlashMessage(null);
      }, 3000); // 3秒後にメッセージを消す
      return () => clearTimeout(timer);
    }
  }, [flashMessage, setFlashMessage]);

  if (!flashMessage) return null;

  return (
    <div className={`fixed top-0 right-0 m-4 p-4 rounded-md ${
      flashMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`}>
      {flashMessage.message}
    </div>
  );
}
