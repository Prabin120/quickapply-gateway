
import { formatDistanceToNow } from 'date-fns';
import { MoreHorizontal, Building, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardHover } from '@/components/ui/card-hover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ApplicationStatus = 'applied' | 'interview' | 'offer' | 'rejected';

const statusColors: Record<ApplicationStatus, string> = {
  applied: 'bg-blue-100 text-blue-800',
  interview: 'bg-yellow-100 text-yellow-800',
  offer: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
};

const statusLabels: Record<ApplicationStatus, string> = {
  applied: 'Applied',
  interview: 'Interview',
  offer: 'Offer',
  rejected: 'Rejected',
};

export type Application = {
  id: string;
  company: string;
  position: string;
  location: string;
  status: ApplicationStatus;
  appliedDate: Date;
  logo?: string;
};

interface ApplicationCardProps {
  application: Application;
}

const ApplicationCard = ({ application }: ApplicationCardProps) => {
  const { company, position, location, status, appliedDate, logo } = application;

  return (
    <CardHover className="h-full">
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mr-3 overflow-hidden">
              {logo ? (
                <img src={logo} alt={company} className="h-6 w-6 object-contain" />
              ) : (
                <Building className="h-5 w-5 text-primary" />
              )}
            </div>
            <div>
              <h3 className="font-medium text-foreground">{company}</h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>{formatDistanceToNow(appliedDate, { addSuffix: true })}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={statusColors[status]}>
              {statusLabels[status]}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View details</DropdownMenuItem>
                <DropdownMenuItem>Update status</DropdownMenuItem>
                <DropdownMenuItem>Add notes</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2 line-clamp-1">{position}</h4>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 flex justify-between items-center">
          <Button variant="outline" size="sm" className="w-full">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Job
          </Button>
        </div>
      </div>
    </CardHover>
  );
};

export default ApplicationCard;
