
import { CheckCircle2, Clock, LineChart, Search, PenTool, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'One-Click Apply',
    description: 'Apply to multiple jobs simultaneously with a single click, saving hours of repetitive form filling.'
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: 'Application Tracking',
    description: 'Monitor all your applications in one place with real-time status updates and reminders.'
  },
  {
    icon: <PenTool className="h-6 w-6 text-primary" />,
    title: 'Resume Tailoring',
    description: 'Our AI automatically tailors your resume to match job descriptions, increasing your chances of getting noticed.'
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: 'Job Discovery',
    description: 'Find relevant job opportunities across multiple platforms based on your skills and preferences.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    title: 'Insights & Analytics',
    description: 'Get detailed analytics on your job search performance and actionable recommendations.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Interview Scheduling',
    description: 'Manage interview invitations and schedule them directly through our platform with calendar integration.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 fade-in">
            <span className="text-xs font-medium">Key Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-up animate-delay-100">
            Everything you need to streamline your job search
          </h2>
          <p className="mt-4 text-lg text-muted-foreground fade-up animate-delay-200">
            Our comprehensive platform helps you manage every aspect of your job application process, so you can focus on preparing for interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover-card fade-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="rounded-lg bg-primary/5 p-3 w-fit mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
