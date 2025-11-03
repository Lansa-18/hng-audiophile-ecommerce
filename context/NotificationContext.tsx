import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface NotificationContextType {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  showNotification: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");

  const showNotification = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <NotificationContext.Provider
      value={{ message, setMessage, showNotification }}
    >
      {children}
      {message && (
        <div className="bg-brand-primary fixed right-4 bottom-4 rounded-lg px-6 py-4 text-white shadow-lg transition-all duration-300">
          {message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
}
