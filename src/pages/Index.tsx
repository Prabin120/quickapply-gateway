
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, GraduationCap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* How It Works Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 fade-in">
                <span className="text-xs font-medium">How It Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-up animate-delay-100">
                Simplify your job search in three easy steps
              </h2>
              <p className="mt-4 text-lg text-muted-foreground fade-up animate-delay-200">
                Our platform makes it easy to manage your job search from start to finish
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              <div className="flex flex-col items-center text-center fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BriefcaseBusiness className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Create Your Profile</h3>
                <p className="text-muted-foreground mb-4">Upload your resume, set your preferences, and let our system match you with the right opportunities.</p>
              </div>
              
              <div className="flex flex-col items-center text-center fade-up" style={{ animationDelay: '300ms' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Apply with One Click</h3>
                <p className="text-muted-foreground mb-4">Our platform auto-fills applications across job boards, saving you hours of repetitive work.</p>
              </div>
              
              <div className="flex flex-col items-center text-center fade-up" style={{ animationDelay: '400ms' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Track Your Progress</h3>
                <p className="text-muted-foreground mb-4">Monitor application status, receive interview reminders, and get insights to improve your success rate.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-100/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 fade-up">
                Ready to transform your job search?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 fade-up animate-delay-100">
                Join thousands of job seekers who have simplified their application process and landed their dream jobs faster.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 fade-up animate-delay-200">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link to="/dashboard">
                    View Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
