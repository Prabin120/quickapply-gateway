
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import PersonalInfoForm from '@/components/onboarding/PersonalInfoForm';
import ProfessionalInfoForm from '@/components/onboarding/ProfessionalInfoForm';
import PreferencesForm from '@/components/onboarding/PreferencesForm';
import ReviewInfo from '@/components/onboarding/ReviewInfo';

const Onboarding = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
    },
    professional: {
      title: '',
      experience: '',
      education: '',
      skills: [],
    },
    preferences: {
      jobTypes: [],
      industries: [],
      salary: '',
      remotePreference: '',
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        ...data
      }
    }));
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const goToNextTab = () => {
    if (activeTab === 'personal') setActiveTab('professional');
    else if (activeTab === 'professional') setActiveTab('preferences');
    else if (activeTab === 'preferences') setActiveTab('review');
  };

  const goToPreviousTab = () => {
    if (activeTab === 'professional') setActiveTab('personal');
    else if (activeTab === 'preferences') setActiveTab('professional');
    else if (activeTab === 'review') setActiveTab('preferences');
  };

  const submitForm = () => {
    // Here you would normally submit the form data to your backend
    console.log('Submitting form data:', formData);
    // Redirect to dashboard after submission
    navigate('/dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-background/80 pt-20 pb-12"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to LazyApply</h1>
          <p className="text-muted-foreground mt-2">
            Let's set up your profile to help you find the perfect job opportunities
          </p>
        </div>

        <Card className="border shadow-lg">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger 
                  value="personal"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="professional"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Professional
                </TabsTrigger>
                <TabsTrigger 
                  value="preferences"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Preferences
                </TabsTrigger>
                <TabsTrigger 
                  value="review"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Review
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                <PersonalInfoForm 
                  formData={formData.personal} 
                  updateFormData={(data) => updateFormData('personal', data)} 
                />
                <div className="flex justify-end mt-6">
                  <Button onClick={goToNextTab}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="professional" className="space-y-4 mt-4">
                <ProfessionalInfoForm 
                  formData={formData.professional} 
                  updateFormData={(data) => updateFormData('professional', data)} 
                />
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={goToPreviousTab}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={goToNextTab}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4 mt-4">
                <PreferencesForm 
                  formData={formData.preferences} 
                  updateFormData={(data) => updateFormData('preferences', data)} 
                />
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={goToPreviousTab}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={goToNextTab}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="review" className="space-y-4 mt-4">
                <ReviewInfo formData={formData} />
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={goToPreviousTab}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={submitForm}>
                    Complete Profile <Check className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Onboarding;
