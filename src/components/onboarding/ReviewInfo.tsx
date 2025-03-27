
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ReviewInfoProps {
  formData: {
    personal: {
      fullName: string;
      email: string;
      phone: string;
      location: string;
    };
    professional: {
      title: string;
      experience: string;
      education: string;
      skills: string[];
    };
    preferences: {
      jobTypes: string[];
      industries: string[];
      salary: string;
      remotePreference: string;
    };
  };
}

const formatArrayToString = (arr: string[]): string => {
  if (!arr || arr.length === 0) return 'None selected';
  return arr.join(', ');
};

// Map ID values to readable labels
const jobTypeLabels: Record<string, string> = {
  fullTime: 'Full-time',
  partTime: 'Part-time',
  contract: 'Contract',
  freelance: 'Freelance',
  internship: 'Internship',
};

const industryLabels: Record<string, string> = {
  technology: 'Technology',
  finance: 'Finance',
  healthcare: 'Healthcare',
  education: 'Education',
  retail: 'Retail',
  manufacturing: 'Manufacturing',
};

const remotePreferenceLabels: Record<string, string> = {
  onsite: 'On-site only',
  hybrid: 'Hybrid (some remote, some on-site)',
  remote: 'Fully remote',
  flexible: 'Flexible (open to any arrangement)',
};

const ReviewInfo = ({ formData }: ReviewInfoProps) => {
  const { personal, professional, preferences } = formData;

  const formatJobTypes = (types: string[]): string => {
    if (!types || types.length === 0) return 'None selected';
    return types.map(type => jobTypeLabels[type] || type).join(', ');
  };

  const formatIndustries = (inds: string[]): string => {
    if (!inds || inds.length === 0) return 'None selected';
    return inds.map(ind => industryLabels[ind] || ind).join(', ');
  };

  const formatRemotePreference = (pref: string): string => {
    return remotePreferenceLabels[pref] || pref || 'Not specified';
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Review Your Information</h2>
        <p className="text-muted-foreground">Please review your profile information before submitting</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-y-2">
              <p className="text-muted-foreground">Full Name:</p>
              <p>{personal.fullName || 'Not provided'}</p>
              
              <p className="text-muted-foreground">Email:</p>
              <p>{personal.email || 'Not provided'}</p>
              
              <p className="text-muted-foreground">Phone:</p>
              <p>{personal.phone || 'Not provided'}</p>
              
              <p className="text-muted-foreground">Location:</p>
              <p>{personal.location || 'Not provided'}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-y-2">
              <p className="text-muted-foreground">Job Title:</p>
              <p>{professional.title || 'Not provided'}</p>
              
              <p className="text-muted-foreground">Experience:</p>
              <p className="whitespace-pre-line">{professional.experience || 'Not provided'}</p>
              
              <p className="text-muted-foreground">Education:</p>
              <p className="whitespace-pre-line">{professional.education || 'Not provided'}</p>
              
              <p className="text-muted-foreground">Skills:</p>
              <p>{formatArrayToString(professional.skills)}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-y-2">
              <p className="text-muted-foreground">Job Types:</p>
              <p>{formatJobTypes(preferences.jobTypes)}</p>
              
              <p className="text-muted-foreground">Industries:</p>
              <p>{formatIndustries(preferences.industries)}</p>
              
              <p className="text-muted-foreground">Expected Salary:</p>
              <p>{preferences.salary || 'Not specified'}</p>
              
              <p className="text-muted-foreground">Remote Preference:</p>
              <p>{formatRemotePreference(preferences.remotePreference)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewInfo;
