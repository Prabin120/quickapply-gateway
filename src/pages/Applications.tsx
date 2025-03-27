
import { useEffect, useState } from 'react';
import { Search, Filter, Plus, ListFilter, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ApplicationCard, { Application } from '@/components/dashboard/ApplicationCard';

// Mock data for demonstration
const applications: Application[] = [
  {
    id: '1',
    company: 'Acme Inc',
    position: 'Frontend Developer',
    location: 'San Francisco, CA',
    status: 'applied',
    appliedDate: new Date(2023, 6, 15),
  },
  {
    id: '2',
    company: 'Globex Corporation',
    position: 'UX Designer',
    location: 'Remote',
    status: 'interview',
    appliedDate: new Date(2023, 6, 18),
  },
  {
    id: '3',
    company: 'Stark Industries',
    position: 'Product Manager',
    location: 'New York, NY',
    status: 'rejected',
    appliedDate: new Date(2023, 6, 10),
  },
  {
    id: '4',
    company: 'Wayne Enterprises',
    position: 'Full Stack Developer',
    location: 'Chicago, IL',
    status: 'offer',
    appliedDate: new Date(2023, 6, 20),
  },
  {
    id: '5',
    company: 'Pied Piper',
    position: 'Backend Developer',
    location: 'Austin, TX',
    status: 'applied',
    appliedDate: new Date(2023, 6, 12),
  },
  {
    id: '6',
    company: 'Hooli',
    position: 'Data Scientist',
    location: 'Seattle, WA',
    status: 'interview',
    appliedDate: new Date(2023, 6, 16),
  },
];

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [filteredApps, setFilteredApps] = useState(applications);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = [...applications];
    
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter) {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    if (sortBy === 'newest') {
      filtered.sort((a, b) => b.appliedDate.getTime() - a.appliedDate.getTime());
    } else if (sortBy === 'oldest') {
      filtered.sort((a, b) => a.appliedDate.getTime() - b.appliedDate.getTime());
    } else if (sortBy === 'company') {
      filtered.sort((a, b) => a.company.localeCompare(b.company));
    }
    
    setFilteredApps(filtered);
  }, [searchTerm, statusFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground fade-in">Applications</h1>
              <p className="text-muted-foreground mt-1 fade-in animate-delay-100">
                Manage and track all your job applications
              </p>
            </div>
            <div className="mt-4 sm:mt-0 fade-in animate-delay-200">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Application
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 fade-in animate-delay-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by company, position, or location"
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-10">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                      {statusFilter && <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">{statusFilter}</Badge>}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={statusFilter === null}
                      onCheckedChange={() => setStatusFilter(null)}
                    >
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter === 'applied'}
                      onCheckedChange={() => setStatusFilter('applied')}
                    >
                      Applied
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter === 'interview'}
                      onCheckedChange={() => setStatusFilter('interview')}
                    >
                      Interview
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter === 'offer'}
                      onCheckedChange={() => setStatusFilter('offer')}
                    >
                      Offer
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={statusFilter === 'rejected'}
                      onCheckedChange={() => setStatusFilter('rejected')}
                    >
                      Rejected
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] h-10">
                    <div className="flex items-center">
                      <ListFilter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="company">Company Name</SelectItem>
                  </SelectContent>
                </Select>
                
                {(searchTerm || statusFilter) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="fade-in animate-delay-400">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
              <TabsTrigger value="interview">Interview</TabsTrigger>
              <TabsTrigger value="offer">Offer</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredApps.map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-lg border">
                  <Briefcase className="h-12 w-12 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No applications found</h3>
                  <p className="mt-2 text-muted-foreground">Try adjusting your search or filters</p>
                  <Button className="mt-6" onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="applied" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications
                  .filter(app => app.status === 'applied')
                  .map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="interview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications
                  .filter(app => app.status === 'interview')
                  .map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="offer" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications
                  .filter(app => app.status === 'offer')
                  .map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rejected" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications
                  .filter(app => app.status === 'rejected')
                  .map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Applications;
