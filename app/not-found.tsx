import Link from "next/link";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <AnimatedSection>
                    <h1 className="text-7xl md:text-5xl font-medium mb-6">
                        404
                    </h1>
                    <div className="">
                        <p className="text-xl text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
                            The page you are looking for doesn&apos;t exist or has been moved to another URL.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
                        >
                            <ArrowLeft size={18} />
                            Back to home
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
