"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useReCAPTCHA } from "../../hooks/useReCAPTCHA";

const MessageSchema = z.object({
  user_email: z.string().email(),
  message: z.string().min(2).max(99),
});

type MessageType = z.infer<typeof MessageSchema>;

const ContactContent = () => {
  const { toast } = useToast();
  const form = useForm<MessageType>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      user_email: "",
      message: "",
    },
  });
  const formRef = useRef<any>(null);
  const {
    captchaValue,
    recaptchaRef,
    handleCaptchaChange,
    resetCaptcha,
    handleCaptchaExpire,
  } = useReCAPTCHA();

  const handleSubmitMessage = async () => {
    try {
      const result = await emailjs.send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        {
          user_email: form.getValues("user_email"),
          message: form.getValues("message"),
          "g-recaptcha-response": captchaValue,
        },
        `${process.env.NEXT_PUBLIC_KEY}`
      );

      toast({
        title: `${result.text}`,
        description: (
          <span className="text-md">Your message has been sent.</span>
        ),
      });
      // CLEAN UP
      form.reset();
      resetCaptcha();
    } catch (error: any) {
      toast({
        description: `${error?.text}`,
      });
    }
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-center">Contact</h2>

      <Card className="w-[300px] md:w-[700px] lg:w-[800px]">
        <CardHeader>
          <CardTitle className="self-center md:self-start">
            Send me a message
          </CardTitle>
          <CardDescription>
            Let&apos;s work together or you can give comments and feedback to
            improve my portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmitMessage)}
              className="space-y-4"
              ref={formRef}
            >
              <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.isDirty && form.formState.isValid && (
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
                  onChange={handleCaptchaChange}
                  ref={recaptchaRef}
                  className="g-recaptcha"
                  onExpired={handleCaptchaExpire}
                />
              )}

              <Button
                type="submit"
                disabled={
                  !form.formState.isDirty ||
                  !form.formState.isValid ||
                  captchaValue === ""
                }
              >
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactContent;
