import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

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

                <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                    <AnimatedSection delay={0.1}>
                        <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted border border-border/50">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="John Doe"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="space-y-6">
                        <h2 className="text-3xl font-medium tracking-tight">Empowering Each Other to Succeed</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Every project we&apos;ve undertaken has been a collaborative effort, where every person
                            involved has left their mark. Together, we&apos;ve not only constructed buildings but also
                            built enduring connections that define our success story.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I focus on designing tools for thought and building scalable frontend architectures. My goal is to create interfaces that feel invisible yet powerful.
                        </p>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.3}>
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
                        <p>
                            Maecenas dictum molestie urna, at auctor urna laoreet nec. Fusce vel eros dui. Maecenas at nibh blandit, hendrerit est eget, laoreet nisi.
                            Integer quis viverra nunc. Fusce ut urna varius, laoreet quam non, lacinia nisl. Sed sed egestas nisl. Mauris interdum, nulla vel pulvinar semper, est est porttitor diam,
                            vitae tincidunt felis neque vitae turpis. Donec blandit nisi est, pellentesque consectetur purus dapibus sed.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}

export default AboutPage;