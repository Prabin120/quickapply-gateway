
import { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';

interface ProfessionalInfoProps {
  formData: {
    title: string;
    experience: string;
    education: string;
    skills: string[];
  };
  updateFormData: (data: any) => void;
}

const professionalInfoSchema = z.object({
  title: z.string().min(2, { message: 'Job title must be at least 2 characters long' }),
  experience: z.string().min(2, { message: 'Please provide some details about your experience' }),
  education: z.string().min(2, { message: 'Please provide some details about your education' }),
  skills: z.array(z.string()).or(z.string().transform(val => val.split(',').map(v => v.trim()))),
});

const ProfessionalInfoForm = ({ formData, updateFormData }: ProfessionalInfoProps) => {
  const form = useForm<z.infer<typeof professionalInfoSchema>>({
    resolver: zodResolver(professionalInfoSchema),
    defaultValues: {
      ...formData,
      skills: formData.skills.length > 0 ? formData.skills : [],
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      updateFormData(value);
    });
    return () => subscription.unsubscribe();
  }, [form, updateFormData]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Professional Information</h2>
        <p className="text-muted-foreground">Tell us about your career and experience</p>
      </div>

      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current/Last Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Software Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Experience</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Briefly describe your relevant work experience" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="education"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Education</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Briefly describe your educational background" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter skills separated by commas (e.g., React, JavaScript, UI Design)" 
                    value={Array.isArray(field.value) ? field.value.join(', ') : field.value}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value.split(',').map(skill => skill.trim()));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ProfessionalInfoForm;
