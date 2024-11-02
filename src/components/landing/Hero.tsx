import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)] opacity-[0.03] transform rotate-[-12deg] scale-150" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="animate-fade-up mx-auto max-w-4xl font-bold tracking-tight text-4xl sm:text-5xl md:text-7xl">
          Transform your workflow with our
          <span className="gradient-text"> powerful platform</span>
        </h1>
        
        <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-muted-foreground">
          Streamline your business operations, boost productivity, and achieve better results with our innovative SaaS solution.
        </p>
        
        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          <Button className="gradient-bg text-base sm:text-lg w-full sm:w-auto px-6 py-6">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Learn more
          </Button>
        </div>
        
        <div className="animate-fade-up animation-delay-500 mt-16 px-4 sm:px-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Platform Preview"
            className="rounded-xl shadow-2xl transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;