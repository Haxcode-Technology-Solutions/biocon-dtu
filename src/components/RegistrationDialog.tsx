import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  affiliation: z
    .string()
    .trim()
    .min(2, "Affiliation is required")
    .max(200, "Affiliation must be less than 200 characters"),
  designation: z
    .string()
    .trim()
    .min(2, "Designation is required")
    .max(100, "Designation must be less than 100 characters"),
  participantType: z.enum(
    ["faculty", "scientist", "phd_scholar", "postgraduate", "undergraduate", "industry"],
    { required_error: "Please select a participant type" }
  ),
  presentationType: z.enum(["oral", "poster", "attendee_only"], {
    required_error: "Please select a presentation type",
  }),
  abstractTitle: z
    .string()
    .trim()
    .max(300, "Abstract title must be less than 300 characters")
    .optional(),
  abstractText: z
    .string()
    .trim()
    .max(3000, "Abstract must be less than 3000 characters")
    .optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "register" | "abstract";
}

const RegistrationDialog = ({
  open,
  onOpenChange,
  defaultTab = "register",
}: RegistrationDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      affiliation: "",
      designation: "",
      participantType: undefined,
      presentationType: "attendee_only",
      abstractTitle: "",
      abstractText: "",
      agreeToTerms: false,
    },
  });

  const presentationType = form.watch("presentationType");

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Registration submitted:", data);

    toast({
      title: "Registration Successful!",
      description:
        "Thank you for registering. You will receive a confirmation email shortly.",
    });

    setIsSubmitting(false);
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {defaultTab === "abstract"
              ? "Submit Abstract"
              : "Conference Registration"}
          </DialogTitle>
          <DialogDescription>
            Register for the 1st National Conference on Biotechnology &
            Bioinformatics (March 18-19, 2026)
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground border-b pb-2">
                Personal Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Dr. John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@university.edu"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation *</FormLabel>
                      <FormControl>
                        <Input placeholder="Professor / Researcher" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="affiliation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution / Organization *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Delhi Technological University"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Participation Details */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground border-b pb-2">
                Participation Details
              </h3>

              <FormField
                control={form.control}
                name="participantType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Participant Category *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="faculty">Faculty Member</SelectItem>
                        <SelectItem value="scientist">
                          Scientist / Researcher
                        </SelectItem>
                        <SelectItem value="phd_scholar">PhD Scholar</SelectItem>
                        <SelectItem value="postgraduate">
                          Postgraduate Student
                        </SelectItem>
                        <SelectItem value="undergraduate">
                          Undergraduate Student
                        </SelectItem>
                        <SelectItem value="industry">
                          Industry Professional
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presentationType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Presentation Type *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oral" id="oral" />
                          <label htmlFor="oral" className="text-sm cursor-pointer">
                            Oral Presentation
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="poster" id="poster" />
                          <label htmlFor="poster" className="text-sm cursor-pointer">
                            Poster Presentation
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="attendee_only" id="attendee_only" />
                          <label
                            htmlFor="attendee_only"
                            className="text-sm cursor-pointer"
                          >
                            Attendee Only
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Abstract Submission - only show if presenting */}
            {(presentationType === "oral" || presentationType === "poster") && (
              <div className="space-y-4">
                <h3 className="font-medium text-foreground border-b pb-2">
                  Abstract Submission
                </h3>

                <FormField
                  control={form.control}
                  name="abstractTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Abstract Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your research abstract title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="abstractText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Abstract (max 300 words)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your research abstract..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Terms */}
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal cursor-pointer">
                      I agree to the terms and conditions and confirm that the
                      information provided is accurate. *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="gold"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
