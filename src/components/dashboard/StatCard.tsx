
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: ReactNode;
  trend: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  animationDelay?: string;
}

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  className,
  animationDelay = '0ms' 
}: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6" style={{ animationDelay }}>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className="rounded-full bg-primary/10 p-2.5 text-primary">
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium",
            trend.isPositive ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
          )}>
            {trend.isPositive ? (
              <ArrowUpIcon className="h-3 w-3" />
            ) : (
              <ArrowDownIcon className="h-3 w-3" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
          <p className="ml-2 text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
