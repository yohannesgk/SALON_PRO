import { Outlet } from "react-router-dom";
import { CustomerHeader } from "../components/CustomerHeader";

export const CustomerLayout = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <CustomerHeader />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};
