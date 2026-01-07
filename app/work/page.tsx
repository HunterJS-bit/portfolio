import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const projects = [
    {
        title: "Found Money",
        year: "2016",
        company: "Acorns",
        image: "/found_money.png",
        description: "A premium mobile app interface for a financial savings app. Built tools for automated savings and investment tracking.",
        link: "/work/found-money"
    },
    {
        title: "Foundry",
        year: "2017 - 2019",
        company: "Palantir",
        image: "/foundry.png",
        description: "Sophisticated enterprise data analytics platform. Designed complex data visualizations and network graphs for global operations.",
        link: "/work/foundry"
    },
    {
        title: "Data Visualization",
        year: "2020",
        company: "Notion",
        image: "/data_viz.png",
        description: "Minimalist data visualization tool integrated into a Notion-like workspace. Focused on elegant charts and clean typography.",
        link: "/work/data-visualization"
    }
];

const WorkPage = () => {
    return (
        <main className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection>
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to home
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-medium mb-6 tracking-tight text-gradient">Work</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mb-20 leading-relaxed">
                        A selection of projects I&apos;ve worked on over the years, ranging from financial tools to enterprise data platforms.
                    </p>
                </AnimatedSection>

                <div className="grid gap-24">
                    {projects.map((project, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group grid md:grid-cols-2 gap-12 items-center">
                                <div className="aspect-[16/10] bg-muted rounded-2xl overflow-hidden border border-border/50 relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                                        <span className="font-medium text-foreground/80">{project.company}</span>
                                        <span>•</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h2 className="text-3xl font-medium mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                                    >
                                        View Case Study
                                        <span className="ml-2 h-px w-8 bg-foreground group-hover/link:w-12 group-hover/link:bg-primary transition-all duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default WorkPage;