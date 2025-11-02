import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { href: "/clients", label: "Clients" },
    { href: "/opportunities", label: "Opportunities" },
    { href: "/emails", label: "Emails" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="font-heading font-bold text-foreground text-lg">
              Logically AirSquared Intelligent Sales
            </div>
            <div className="flex gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 font-heading font-medium rounded-lg transition-all",
                    location.pathname === item.href
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
};
