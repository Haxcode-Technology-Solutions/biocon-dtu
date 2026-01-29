import { createContext, useContext, useState, ReactNode } from "react";

interface RegistrationContextType {
  isOpen: boolean;
  defaultTab: "register" | "abstract";
  openRegistration: (tab?: "register" | "abstract") => void;
  closeRegistration: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState<"register" | "abstract">("register");

  const openRegistration = (tab: "register" | "abstract" = "register") => {
    setDefaultTab(tab);
    setIsOpen(true);
  };

  const closeRegistration = () => {
    setIsOpen(false);
  };

  return (
    <RegistrationContext.Provider
      value={{ isOpen, defaultTab, openRegistration, closeRegistration }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegistration must be used within RegistrationProvider");
  }
  return context;
};
