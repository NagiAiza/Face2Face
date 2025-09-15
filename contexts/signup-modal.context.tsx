import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface SignUpModalContextProps {
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const SignUpModalContext = React.createContext<SignUpModalContextProps | null>(null);

export function SignUpModalContextProvider<T>({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <SignUpModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </SignUpModalContext.Provider>
  );
}

export function useSignUpModalContext() {
  const context = useContext(SignUpModalContext);
  if (!context) {
    throw new Error('useSignUpModalContext can only be used inside SignUpModalContextProvider');
  }
  return context;
}
