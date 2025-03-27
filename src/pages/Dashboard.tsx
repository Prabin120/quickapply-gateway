
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { BarChart, AreaChart, BadgePlus, Briefcase, CheckCircle, Clock, XCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ApplicationStats from '@/components/dashboard/ApplicationStats';
import ApplicationCard, { Application } from '@/components/dashboard/ApplicationCard';

// Mock data for demonstration
const recentApplications: Application[] = [
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
  }
];

const upcomingInterviews = [
  {
    id: '1',
    company: 'Globex Corporation',
    position: 'UX Designer',
    date: new Date(2023, 6, 25, 14, 0),
    type: 'Video Call',
  },
  {
    id: '2',
    company: 'Initech',
    position: 'Software Engineer',
    date: new Date(2023, 6, 27, 10, 30),
    type: 'On-site',
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground fade-in">Dashboard</h1>
              <p className="text-muted-foreground mt-1 fade-in animate-delay-100">
                Track and manage your job applications in one place
              </p>
            </div>
            <div className="mt-4 sm:mt-0 fade-in animate-delay-200">
              <Button>
                <BadgePlus className="h-4 w-4 mr-2" />
                New Application
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="fade-in animate-delay-200">
              <TabsTrigger value="overview">
                <BarChart className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="applications">
                <Briefcase className="h-4 w-4 mr-2" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="interviews">
                <Calendar className="h-4 w-4 mr-2" />
                Interviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6 space-y-8">
              <ApplicationStats />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <Card className="fade-in animate-delay-300">
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Your latest job applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentApplications.slice(0, 3).map((app, index) => (
                        <div key={app.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                          <div className="flex items-start">
                            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{app.position}</h4>
                              <div className="text-sm text-muted-foreground">
                                {app.company} • {app.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="text-xs text-muted-foreground">
                              {formatDistanceToNow(app.appliedDate, { addSuffix: true })}
                            </div>
                            <div className="flex items-center mt-1">
                              {app.status === 'applied' && <Clock className="h-4 w-4 text-blue-500 mr-1" />}
                              {app.status === 'interview' && <Calendar className="h-4 w-4 text-yellow-500 mr-1" />}
                              {app.status === 'offer' && <CheckCircle className="h-4 w-4 text-green-500 mr-1" />}
                              {app.status === 'rejected' && <XCircle className="h-4 w-4 text-red-500 mr-1" />}
                              <span className="text-xs capitalize">
                                {app.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4 w-full">
                      View all applications
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="fade-in animate-delay-400">
                  <CardHeader>
                    <CardTitle>Upcoming Interviews</CardTitle>
                    <CardDescription>Your scheduled interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingInterviews.map((interview) => (
                        <div key={interview.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                          <div className="flex items-start">
                            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                              <Calendar className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{interview.position}</h4>
                              <div className="text-sm text-muted-foreground">
                                {interview.company} • {interview.type}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {interview.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {interview.date.toLocaleDateString([], { month: 'short', day: 'numeric' })}
                            </div>
                          </div>
                        </div>
                      ))}
                      {upcomingInterviews.length === 0 && (
                        <div className="text-center py-6 text-muted-foreground">
                          No upcoming interviews
                        </div>
                      )}
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4 w-full">
                      View calendar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6">
              <Card className="fade-in">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>All Applications</CardTitle>
                      <CardDescription>Manage and track all your job applications</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <BadgePlus className="h-4 w-4 mr-2" />
                      Add New
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {recentApplications.map((application, index) => (
                      <ApplicationCard key={application.id} application={application} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="interviews" className="mt-6">
              <Card className="fade-in">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Interview Schedule</CardTitle>
                      <CardDescription>Manage your upcoming interviews</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Calendar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {upcomingInterviews.map((interview) => (
                      <Card key={interview.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-start">
                              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mr-4">
                                <Calendar className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-lg font-medium">{interview.position}</h3>
                                <p className="text-muted-foreground">{interview.company}</p>
                                <div className="mt-2 text-sm text-muted-foreground">
                                  {interview.type} Interview
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 md:text-right">
                              <div className="text-lg font-medium">
                                {interview.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                              <div className="text-muted-foreground">
                                {interview.date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                              </div>
                              <div className="mt-3 flex space-x-2 md:justify-end">
                                <Button size="sm" variant="outline">Reschedule</Button>
                                <Button size="sm">Prepare</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {upcomingInterviews.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                        <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                        <h3 className="text-lg font-medium mb-1">No interviews scheduled</h3>
                        <p>When you get interview invitations, they'll appear here.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
