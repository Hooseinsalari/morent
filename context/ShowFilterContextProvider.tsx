import { useState, createContext, useContext, ReactNode } from "react";

interface ShowFilterContext {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const showFilterContext = createContext<ShowFilterContext>(
  {} as ShowFilterContext
);

const ShowFilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <showFilterContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </showFilterContext.Provider>
  );
};

export default ShowFilterContextProvider;

export const useIsShow = () => {
  const { isShow, setIsShow } = useContext(showFilterContext);
  return { isShow, setIsShow };
};
