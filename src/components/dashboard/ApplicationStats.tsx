
import { ArrowUp, ArrowDown, Users, Clock, CheckCheck, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
};

const StatCard = ({ title, value, description, icon, trend, className }: StatCardProps) => (
  <Card className={`overflow-hidden ${className}`}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="rounded-full bg-primary/10 p-2">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center text-xs text-muted-foreground mt-1">
        {trend && (
          <span className={`mr-1 ${trend.isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
            {trend.isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
            {trend.value}%
          </span>
        )}
        <span>{description}</span>
      </div>
    </CardContent>
  </Card>
);

const ApplicationStats = () => {
  const stats = [
    {
      title: 'Total Applications',
      value: 156,
      description: 'from last month',
      icon: <Users className="h-4 w-4 text-primary" />,
      trend: {
        value: 12,
        isPositive: true,
      },
    },
    {
      title: 'In Progress',
      value: 32,
      description: 'awaiting response',
      icon: <Clock className="h-4 w-4 text-primary" />,
      trend: {
        value: 5,
        isPositive: true,
      },
    },
    {
      title: 'Interviews',
      value: 7,
      description: 'this week',
      icon: <CheckCheck className="h-4 w-4 text-primary" />,
      trend: {
        value: 3,
        isPositive: true,
      },
    },
    {
      title: 'Rejected',
      value: 24,
      description: 'this month',
      icon: <X className="h-4 w-4 text-primary" />,
      trend: {
        value: 2,
        isPositive: false,
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} className="fade-in" style={{ animationDelay: `${index * 100}ms` }} />
      ))}
    </div>
  );
};

export default ApplicationStats;
