import React, { createContext, useContext, useState } from 'react';

// Create the context
export const ProgressContext = createContext();

// Create a provider component
export const ProgressProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  return (
    <ProgressContext.Provider value={{ step, setStep }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Custom hook for easy context consumption
export const useProgress = () => {
  return useContext(ProgressContext);
};
