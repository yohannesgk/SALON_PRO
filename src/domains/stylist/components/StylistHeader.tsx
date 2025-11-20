import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Calendar, TrendingUp } from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const StylistHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Stylist Portal
          </h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/stylist/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              <Calendar className="w-4 h-4 inline-block mr-2" />
              My Schedule
            </NavLink>
            <NavLink
              to="/stylist/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              <TrendingUp className="w-4 h-4 inline-block mr-2" />
              Performance
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Stylist Account</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
