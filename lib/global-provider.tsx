import { createContext, useContext } from "react";
import { getCurrentUser } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  reFetch: (newParams?: Record<string, string | undefined>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: user,
    loading,
    reFetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  const isLoggedIn = !!user;

  console.log(JSON.stringify(user, null, 2));

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        loading,
        reFetch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }

  return context;
};

export default GlobalProvider;
