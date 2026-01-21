"use client";

import { Mail, Github, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border/40 pt-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-medium tracking-tight mb-6 text-gradient">Let&apos;s work together.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                I welcome conversations about projects, ideas, and opportunities where I can contribute to shared success.
              </p>

              <div className="space-y-6">

                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium"><Link href="mailto:markomiljkovic2@gmail.com" rel="noopener noreferrer" target="_blank">marko@gmail.com</Link></span>

                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Github size={18} />
                </div>
                <span className="text-sm font-medium"><Link href="https://github.com/HunterJS-bit" rel="noopener noreferrer" target="_blank">github.com/marko</Link></span>

                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin size={18} />
                </div>
                <span className="text-sm font-medium"><Link href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%BA%D0%BE-%D0%BC%D0%B8%D1%99%D0%BA%D0%BE%D0%B2%D0%B8%D1%9B-b34ab111a/" rel="noopener noreferrer" target="_blank">linkedin.com/marko</Link></span>

              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 bg-muted/30 rounded-2xl border border-border/50"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Send className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        {...register("email")}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}