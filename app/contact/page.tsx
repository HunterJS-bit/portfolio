"use client";

import { useActionState } from "react";
import { submitContactForm, ContactState } from "./actions";
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Section } from "../components/Section";

const initialState: ContactState = {};

const ContactPage = () => {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div className="max-w-4xl mx-auto px-6">
            <Section>
                <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to home
                </Link>

                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-medium mb-4">Let&apos;s talk</h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        Have a project in mind? I&apos;m always open to discussing new opportunities and interesting ideas.
                    </p>

                    {state.success ? (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-medium text-green-500 mb-2">Message sent!</h3>
                                <p className="text-green-500/80 leading-relaxed">
                                    {state.message}
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-6 text-sm font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="Jane"
                                        className={`w-full bg-muted/50 border ${state.errors?.firstName ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all`}
                                    />
                                    {state.errors?.firstName && (
                                        <p className="text-xs text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {state.errors.firstName[0]}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        className={`w-full bg-muted/50 border ${state.errors?.lastName ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all`}
                                    />
                                    {state.errors?.lastName && (
                                        <p className="text-xs text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {state.errors.lastName[0]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="jane@example.com"
                                    className={`w-full bg-muted/50 border ${state.errors?.email ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all`}
                                />
                                {state.errors?.email && (
                                    <p className="text-xs text-red-500 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {state.errors.email[0]}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    className={`w-full bg-muted/50 border ${state.errors?.message ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none`}
                                />
                                {state.errors?.message && (
                                    <p className="text-xs text-red-500 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {state.errors.message[0]}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full md:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isPending ? "Sending..." : "Send Message"}
                            </button>

                            {state.message && !state.success && (
                                <p className="text-sm text-red-500 text-center">{state.message}</p>
                            )}
                        </form>
                    )}
                </div>
            </Section>
        </div>
    );
}

export default ContactPage;