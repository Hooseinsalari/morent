import { UserData } from "@/types";
import React, { createContext, useContext, useState } from "react";

// context value interface
interface UserContextValue {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
}

// create context
const userContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  // ** state
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

export const useUser = () => {
  return useContext(userContext);
};
