
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-8 fade-in">
            <span className="text-xs font-medium">Simplify Your Job Search</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground fade-up animate-delay-100">
            <span className="block leading-tight">Automate Your Job</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 leading-tight">Application Process</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground fade-up animate-delay-200 max-w-2xl mx-auto text-balance leading-relaxed">
            Stop wasting hours on repetitive applications. Our intelligent platform helps you apply to multiple jobs with just a few clicks, track your progress, and land interviews faster.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up animate-delay-300">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-16 fade-up animate-delay-400">
            <p className="text-sm text-muted-foreground mb-4">Trusted by job seekers from leading companies</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
              <div className="h-8">
                <img src="https://placehold.co/120x32/DDDDDD/999999?text=Company" alt="Company Logo" className="h-full" />
              </div>
              <div className="h-8">
                <img src="https://placehold.co/120x32/DDDDDD/999999?text=Company" alt="Company Logo" className="h-full" />
              </div>
              <div className="h-8">
                <img src="https://placehold.co/120x32/DDDDDD/999999?text=Company" alt="Company Logo" className="h-full" />
              </div>
              <div className="h-8">
                <img src="https://placehold.co/120x32/DDDDDD/999999?text=Company" alt="Company Logo" className="h-full" />
              </div>
              <div className="h-8">
                <img src="https://placehold.co/120x32/DDDDDD/999999?text=Company" alt="Company Logo" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
