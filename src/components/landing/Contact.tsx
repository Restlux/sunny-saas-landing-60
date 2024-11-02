import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Ready to Get Started?</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Join thousands of satisfied customers using our platform
          </p>
          
          <div className="mt-8 sm:mt-10">
            <form className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="gradient-bg whitespace-nowrap w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            14-day free trial · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;