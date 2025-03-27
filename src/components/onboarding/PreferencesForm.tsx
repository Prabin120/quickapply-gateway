
import { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface PreferencesProps {
  formData: {
    jobTypes: string[];
    industries: string[];
    salary: string;
    remotePreference: string;
  };
  updateFormData: (data: any) => void;
}

const JOB_TYPES = [
  { id: 'fullTime', label: 'Full-time' },
  { id: 'partTime', label: 'Part-time' },
  { id: 'contract', label: 'Contract' },
  { id: 'freelance', label: 'Freelance' },
  { id: 'internship', label: 'Internship' },
];

const INDUSTRIES = [
  { id: 'technology', label: 'Technology' },
  { id: 'finance', label: 'Finance' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'education', label: 'Education' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' },
];

const preferencesSchema = z.object({
  jobTypes: z.array(z.string()).min(1, { message: 'Select at least one job type' }),
  industries: z.array(z.string()).min(1, { message: 'Select at least one industry' }),
  salary: z.string().optional(),
  remotePreference: z.string().min(1, { message: 'Please select your remote work preference' }),
});

const PreferencesForm = ({ formData, updateFormData }: PreferencesProps) => {
  const form = useForm<z.infer<typeof preferencesSchema>>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: formData,
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
        <h2 className="text-2xl font-semibold tracking-tight">Job Preferences</h2>
        <p className="text-muted-foreground">Tell us what you're looking for in your next role</p>
      </div>

      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="jobTypes"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Job Types</FormLabel>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {JOB_TYPES.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="jobTypes"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="industries"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Industries</FormLabel>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {INDUSTRIES.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="industries"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Salary Range (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., $60,000 - $80,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remotePreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Remote Work Preference</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="onsite" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        On-site only
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="hybrid" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Hybrid (some remote, some on-site)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="remote" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Fully remote
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="flexible" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Flexible (open to any arrangement)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
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

export default PreferencesForm;
