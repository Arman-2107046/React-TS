import { createContext, FC, ReactNode, useState } from "react";

interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
