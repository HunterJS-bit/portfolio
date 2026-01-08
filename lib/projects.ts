export interface Project {
    id: string;
    title: string;
    year: string;
    company: string;
    image: string;
    description: string;
    longDescription: string;
    techStack: string[];
    role: string;
    outcome: string;
}

export const projects: Project[] = [
    {
        id: "found-money",
        title: "Found Money",
        year: "2016",
        company: "Acorns",
        image: "/found_money.png",
        description: "A premium mobile app interface for a financial savings app. Built tools for automated savings and investment tracking.",
        longDescription: "Found Money was a revolutionary feature for Acorns that allowed users to earn investments from their favorite brands. I led the frontend development of the mobile interface, focusing on creating a seamless, rewarding experience that encouraged long-term financial habits.",
        techStack: ["React Native", "TypeScript", "Redux", "Node.js"],
        role: "Lead Frontend Engineer",
        outcome: "Increased user engagement by 40% and helped users save over $100M in the first year."
    },
    {
        id: "foundry",
        title: "Foundry",
        year: "2017 - 2019",
        company: "Palantir",
        image: "/foundry.png",
        description: "Sophisticated enterprise data analytics platform. Designed complex data visualizations and network graphs for global operations.",
        longDescription: "At Palantir, I worked on Foundry, a platform that reimagines how organizations interact with data. My focus was on the data visualization layer, building high-performance network graphs and interactive dashboards that could handle millions of data points in real-time.",
        techStack: ["React", "TypeScript", "D3.js", "WebGL", "Java"],
        role: "Senior Software Engineer",
        outcome: "Deployed to dozens of Fortune 500 companies, enabling faster decision-making across global supply chains."
    },
    {
        id: "data-visualization",
        title: "Data Visualization",
        year: "2020",
        company: "Notion",
        image: "/data_viz.png",
        description: "Minimalist data visualization tool integrated into a Notion-like workspace. Focused on elegant charts and clean typography.",
        longDescription: "I collaborated with Notion to explore how data visualization could be natively integrated into their workspace. The goal was to create charts that felt as natural and flexible as text blocks, maintaining Notion's signature minimalist aesthetic while providing powerful analytical capabilities.",
        techStack: ["React", "TypeScript", "SVG", "Canvas", "Rust (WASM)"],
        role: "Product Engineer",
        outcome: "Developed a prototype that influenced the core design of Notion's subsequent database visualization features."
    }
];

export async function getProjectById(id: string): Promise<Project | undefined> {
    return projects.find((p) => p.id === id);
}

export async function getAllProjects(): Promise<Project[]> {
    return projects;
}
