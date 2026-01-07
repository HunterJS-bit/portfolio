import Image from "next/image";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const moreWork = [
    {
        title: "Found Money",
        year: "2016",
        company: "Acorns",
        image: "/found_money.png",
        link: "/work/found-money",
        description: "A micro-investing platform that helps people save for their future."
    },
    {
        title: "Foundry",
        year: "2017 - 2019",
        company: "Palantir",
        image: "/foundry.png",
        link: "/work/foundry",
        description: "An enterprise data platform for integrating, managing, and securing data."
    },
    {
        title: "Data Visualization",
        year: "2020",
        company: "Notion",
        image: "/data_viz.png",
        link: "/work/data-visualization",
        description: "Interactive tools for visualizing complex data sets within Notion."
    }
];

export const Work = () => {
    return (
        <section id="work" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <Section>
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight mb-2">Selected Work</h2>
                            <p className="text-muted-foreground">A collection of projects I&apos;ve worked on over the years.</p>
                        </div>
                    </div>

                    <div className="grid gap-16">
                        {moreWork.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                className="group block relative"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted border border-border/50">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
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
                </Section>
            </div>
        </section>
    )
}