import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Domain
import Login from "./domains/auth/pages/Login";
import Register from "./domains/auth/pages/Register";

// Salon Domain
import { SalonLayout } from "./domains/salon/layout/SalonLayout";
import SalonDashboard from "./domains/salon/pages/Dashboard";
import Appointments from "./domains/salon/pages/Appointments";
import Clients from "./domains/salon/pages/Clients";
import Staff from "./domains/salon/pages/Staff";
import Services from "./domains/salon/pages/Services";
import Inventory from "./domains/salon/pages/Inventory";
import Payments from "./domains/salon/pages/Payments";
import Analytics from "./domains/salon/pages/Analytics";

// Customer Domain
import { CustomerLayout } from "./domains/customer/layout/CustomerLayout";
import CustomerDashboard from "./domains/customer/pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          
          {/* Salon Admin Routes */}
          <Route path="/salon/dashboard" element={<SalonLayout><SalonDashboard /></SalonLayout>} />
          <Route path="/salon/appointments" element={<SalonLayout><Appointments /></SalonLayout>} />
          <Route path="/salon/clients" element={<SalonLayout><Clients /></SalonLayout>} />
          <Route path="/salon/staff" element={<SalonLayout><Staff /></SalonLayout>} />
          <Route path="/salon/services" element={<SalonLayout><Services /></SalonLayout>} />
          <Route path="/salon/inventory" element={<SalonLayout><Inventory /></SalonLayout>} />
          <Route path="/salon/payments" element={<SalonLayout><Payments /></SalonLayout>} />
          <Route path="/salon/analytics" element={<SalonLayout><Analytics /></SalonLayout>} />
          
          {/* Customer Routes */}
          <Route path="/customer/dashboard" element={<CustomerLayout><CustomerDashboard /></CustomerLayout>} />
          
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
