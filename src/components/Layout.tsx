import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Get current user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const allowedAdminEmails = ['henryb@binaryadvisers.com', 'hmc@howardmcohen.com'];
  const isAdmin = user?.email && allowedAdminEmails.includes(user.email);

  const navItems = [
    { href: "/clients", label: "Clients" },
    { href: "/opportunities", label: "Opportunities" },
    { href: "/strategize", label: "Strategize" },
    ...(isAdmin ? [{ href: "/users", label: "Admin" }] : []),
  ];

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Logout Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <Link to="/clients" className="font-heading font-bold text-foreground text-lg hover:text-primary transition-colors">
              AirSquared Intelligent Sales
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "px-4 py-2 font-heading font-medium rounded-lg transition-all",
                      location.pathname === item.href || (item.href === "/clients" && location.pathname === "/")
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-primary hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="ml-2"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {user?.email || "Logout"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
};
