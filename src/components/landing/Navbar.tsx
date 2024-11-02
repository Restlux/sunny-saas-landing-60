import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">SaaSLogo</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-foreground/70 hover:text-foreground px-3 py-2">Features</a>
              <a href="#testimonials" className="text-foreground/70 hover:text-foreground px-3 py-2">Testimonials</a>
              <a href="#pricing" className="text-foreground/70 hover:text-foreground px-3 py-2">Pricing</a>
              <ThemeToggle />
              <Button variant="ghost">Sign in</Button>
              <Button className="gradient-bg">Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <a href="#features" className="block px-3 py-2 text-foreground/70">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground/70">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 text-foreground/70">Pricing</a>
            <Button variant="ghost" className="w-full justify-start">Sign in</Button>
            <Button className="w-full gradient-bg">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;