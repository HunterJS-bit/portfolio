import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DynamicAnimatedSection as AnimatedSection } from "../components/DynamicAnimatedSection";
import { Metadata } from "next";

import aboutMeImg from "@/public/about_me.png";

export const metadata: Metadata = {
    title: "About",
    description: "I build, maintain, and ship software. Currently working at Datadog, helping teams monitor and understand their systems.",
    alternates: { canonical: '/about' },
};

const AboutPage = () => {
    return (
        <main className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection>
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to home
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-medium mb-12 tracking-tight text-gradient">About</h1>
                </AnimatedSection>

                <div className="grid gap-12 items-start mb-20">
                    <AnimatedSection delay={0.2}>
                        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                            <p className="text-xl text-foreground leading-relaxed">
                                Hello, I&apos;m Marko. I&apos;m a software engineer at{" "}
                                <a
                                    href="https://www.datadoghq.com"
                                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Datadog
                                </a>
                                . This is my digital garden where I share what I&apos;m learning, building, and thinking about.
                            </p>
                            <div className="relative group rounded-2xl overflow-hidden border border-border/50 bg-muted h-[400px]">
                                <Image
                                    src={aboutMeImg}
                                    alt="Marko"
                                    fill
                                    placeholder="blur"
                                    className="object-cover transition-all"
                                    priority
                                />
                            </div>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                When I&apos;m not working, I might be hacking on{" "}
                                <a
                                    href="https://github.com"
                                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    open source
                                </a>
                                , reading tech books, playing guitar, drinking coffee (way too much ☕), exploring new frameworks, or just taking walks to clear my head.
                            </p>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                I&apos;m interested in distributed systems, cloud-native architectures, developer tools, and building things that make other developers&apos; lives easier. Feel free to{" "}
                                <Link
                                    href="/contact"
                                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
                                >
                                    reach out
                                </Link>
                                {" "}if you want to chat about any of that. 🙂
                            </p>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Previously worked at Nokia and OMV, helping teams ship better software faster. Along the way, I&apos;ve learned that the best code is often the code you don&apos;t write, and that empathy is just as important as technical skills when building great products.
                            </p>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                I&apos;m from Serbia, where I live with my girlfriend and our dog. You might find us walking our dog outside and trying to contain him :D, or me with my laptop, pretending to be those digital nomads you see in stock photos. 🌍
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;