import { Shield, Rocket, Users, ChartBar } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance that keeps your business moving at peak efficiency."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security ensures your data is protected with the latest encryption standards."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time, no matter where they are located."
  },
  {
    icon: <ChartBar className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics and reporting tools."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Features</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Everything you need to succeed in one powerful platform
          </p>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-card p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="gradient-bg absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              <div className="text-saas-primary mb-4 sm:mb-5">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;