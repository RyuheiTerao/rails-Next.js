// app/providers/FlashProvider.tsx
'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

type FlashType = 'success' | 'error';

interface FlashMessage {
  type: FlashType;
  message: string;
}

interface FlashContextType {
  flashMessage: FlashMessage | null;
  setFlashMessage: (message: FlashMessage | null) => void;
}

const FlashContext = createContext<FlashContextType | undefined>(undefined);

export function FlashProvider({ children }: { children: ReactNode }) {
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);

  return (
    <FlashContext.Provider value={{ flashMessage, setFlashMessage }}>
      {children}
    </FlashContext.Provider>
  );
}

export function useFlash(): FlashContextType {
  const context = useContext(FlashContext);
  if (context === undefined) {
    throw new Error('useFlash must be used within a FlashProvider');
  }
  return context;
}
