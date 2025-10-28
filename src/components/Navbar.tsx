import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Store, User, LayoutDashboard, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Store className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Libertas<span className="text-primary">Affiliate</span>
          </span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Button variant="ghost" asChild>
                  <Link to="/products">Products</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/about">How It Works</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/login" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Login
                  </Link>
                </Button>
                <Button variant="accent" asChild>
                  <Link to="/register" className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/products">Products</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about">How It Works</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Login
              </Link>
            </Button>
            <Button variant="accent" asChild>
              <Link to="/register" className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
