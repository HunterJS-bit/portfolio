import { Section } from "./Section";

const moreWork = [
    {
        title: "Found Money",
        year: "2016",
        company: "Acorns",
        image: "/found_money.png",
        link: "/work/found-money"
    },
    {
        title: "Foundry",
        year: "2017 - 2019",
        company: "Palantir",
        image: "/foundry.png",
        link: "/work/foundry"
    },
    {
        title: "Data Visualization",
        year: "2020",
        company: "Notion",
        image: "/data_viz.png",
        link: "/work/data-visualization"
    }
];

export const Work = () => {

    return (
        <section id="work" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <Section>
                    <h2 className="text-2xl font-medium mb-12">more work</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {moreWork.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                className="block group"
                            >
                                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-medium">{project.title}</span>
                                    <span className="text-muted-foreground">—</span>
                                    <span className="text-muted-foreground">{project.year}</span>
                                    <span className="text-muted-foreground">{project.company}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </Section>
            </div>
        </section>
    )
}