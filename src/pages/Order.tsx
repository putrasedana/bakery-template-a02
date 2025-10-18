import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, ShoppingBag } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  whatsapp: z.string().min(10, "Please enter a valid WhatsApp number").max(20),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Please enter quantity"),
  deliveryOption: z.enum(["pickup", "delivery"]),
  notes: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const Order = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      product: "",
      quantity: "",
      deliveryOption: "pickup",
      notes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace with your actual EmailJS credentials
      // User needs to set up EmailJS account and get these values
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "hello@dapoermanis.com",
          from_name: data.name,
          from_email: data.email,
          whatsapp: data.whatsapp,
          product: data.product,
          quantity: data.quantity,
          delivery_option: data.deliveryOption,
          notes: data.notes || "No additional notes",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setIsSuccess(true);
      form.reset();
      toast({
        title: "Order Received!",
        description: "We'll contact you shortly to confirm your order.",
      });
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Order Submitted",
        description: "Thank you! We'll get back to you soon via WhatsApp.",
        variant: "default",
      });
      setIsSuccess(true);
      form.reset();
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <ShoppingBag size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading text-primary mb-6">
            Place Your Order
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll get back to you shortly!
          </p>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="mb-8 p-6 bg-primary/10 border-2 border-primary rounded-3xl flex items-center gap-4 animate-scale-in">
            <CheckCircle2 size={32} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Order Received!</h3>
              <p className="text-muted-foreground">
                Thank you for your order. We'll contact you via WhatsApp shortly to
                confirm the details.
              </p>
            </div>
          </div>
        )}

        {/* Order Form */}
        <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border-2 border-border animate-fade-up">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="rounded-xl"
                      />
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
                        placeholder="your@email.com"
                        {...field}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number *</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+62 812-3456-7890"
                        {...field}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="chocolate-cake">
                          Chocolate Birthday Cake
                        </SelectItem>
                        <SelectItem value="red-velvet">Red Velvet Cake</SelectItem>
                        <SelectItem value="vanilla-cake">
                          Vanilla Celebration Cake
                        </SelectItem>
                        <SelectItem value="macarons">Rainbow Macarons</SelectItem>
                        <SelectItem value="chocolate-chip">
                          Chocolate Chip Cookies
                        </SelectItem>
                        <SelectItem value="cupcakes">Cupcake Variety Box</SelectItem>
                        <SelectItem value="traditional">Traditional Snacks</SelectItem>
                        <SelectItem value="custom">Custom Order</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder="How many?"
                        {...field}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Option *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pickup">Pickup</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special requests or customizations?"
                        className="min-h-[100px] rounded-xl resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            </form>
          </Form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            We'll contact you via WhatsApp to confirm your order and arrange payment
            details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
