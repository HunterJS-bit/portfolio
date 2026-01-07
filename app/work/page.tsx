import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        <div className="max-w-4xl mx-auto px-6 py-20">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
            </Link>

            <h1 className="text-4xl md:text-5xl font-medium mb-4">Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
                A selection of projects I've worked on over the years, ranging from financial tools to enterprise data platforms.
            </p>

            <div className="grid gap-16">
                {projects.map((project, index) => (
                    <div key={index} className="group">
                        <div className="aspect-[16/9] bg-muted rounded-xl mb-6 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="max-w-xl">
                                <h2 className="text-2xl font-medium mb-2">{project.title}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>{project.company}</span>
                                    <span>—</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                            <Link
                                href={project.link}
                                className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4"
                            >
                                View Case Study
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkPage;