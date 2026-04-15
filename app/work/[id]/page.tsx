import { getProjectById } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = await getProjectById(id);
    return {
        title: project?.title || "Project",
        description: project?.description || "Project case study",
        alternates: { canonical: `/work/${id}` },
    };
}

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    const project = await getProjectById(id);

    if (!project) {
        notFound();
    }

    return (
        <main className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection>
                    <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to work
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                                <span className="font-medium text-foreground/80">{project.company}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gradient">
                                {project.title}
                            </h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-medium uppercase tracking-widest text-foreground/50">Role</span>
                            <span className="text-lg">{project.role}</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-muted border border-border/50 mb-20">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            quality={95}
                        />
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-16 mb-20">
                    <div className="md:col-span-2 space-y-8">
                        <AnimatedSection delay={0.2}>
                            <h2 className="text-2xl font-medium mb-4">Overview</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.longDescription}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <h2 className="text-2xl font-medium mb-4">Outcome</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.outcome}
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.4} className="space-y-8">
                        <div>
                            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/50 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm border border-border/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border/40">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                            >
                                View Live Project <ExternalLink size={14} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.5}>
                    <div className="pt-20 border-t border-border/40 text-center">
                        <p className="text-muted-foreground mb-8">Want to see more?</p>
                        <Link
                            href="/work"
                            className="text-3xl font-medium hover:text-primary transition-colors"
                        >
                            View all projects
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
