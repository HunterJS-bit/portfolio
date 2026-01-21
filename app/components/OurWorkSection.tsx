import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/projects";

interface WorkProps {
    delay?: number;
}

export const Work = ({ delay = 0 }: WorkProps) => {
    return (
        <section id="work" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection delay={delay}>
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight mb-2">Selected Work</h2>
                            <p className="text-muted-foreground">A collection of projects I&apos;ve worked on over the years.</p>
                        </div>
                    </div>

                    <div className="grid gap-16">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                href={`/work/${project.id}`}
                                className="group block relative"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted border border-border/50">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                quality={90}
                                            />
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>
                                        <p className="text-[10px] text-muted-foreground/60 mt-2 text-right uppercase tracking-widest font-mono">
                                            * Image does not represent actual project
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3 font-mono">
                                            <span className="font-medium text-foreground/80">{project.company}</span>
                                            <span>•</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                            {project.title}
                                            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}