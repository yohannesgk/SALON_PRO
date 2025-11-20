import { ReactNode } from "react";
import { CustomerHeader } from "../components/CustomerHeader";

interface CustomerLayoutProps {
  children: ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export const CustomerLayout = ({ children, user }: CustomerLayoutProps) => {
  return (
    <div className="min-h-screen bg-muted/30">
      <CustomerHeader user={user} />
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};
