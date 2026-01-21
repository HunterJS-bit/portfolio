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
        id: "datadog-analytics",
        title: "Cloud Scale Analytics",
        year: "2023 - Present",
        company: "Datadog",
        image: "/data_viz.png",
        description: "High-scale serverless architecture handling massive data ingestion. Leveraging AWS Lambda and DocumentDB for real-time insights.",
        longDescription: "Architecting a high-performance analytics engine within current ecosystem. The system leverages a serverless architecture with AWS Lambdas to process high-throughput telemetry data, storing it efficiently in DocumentDB. My focus is on scalability, cost-optimization, and delivering sub-second query performance for complex datasets.",
        techStack: ["Not disclosed"],
        role: "Senior Software Engineer",
        outcome: "Optimized AWS infrastructure to handle peak loads with zero downtime, leveraging Lambda concurrency controls and efficient DocumentDB indexing."
    },
    {
        id: "nokia-hmd",
        title: "Global E-Commerce Platform",
        year: "2021 - 2023",
        company: "Nokia / HMD Global",
        image: "/foundry.png",
        description: "Senior Frontend Engineer for Nokia's global shop. Built extremely fast, multi-device UI logic for a worldwide audience.",
        longDescription: "As a Senior Frontend Engineer, I was part of a distributed team developing critical UI components for Nokia's global e-commerce platform. I collaborated closely with other engineers to build highly performant, accessible, and responsive interfaces. My focus was on ensuring a seamless experience across a fragmented device landscape, optimizing core web vitals and complex client-side logic.",
        techStack: ["Not disclosed"],
        role: "Senior Frontend Engineer",
        outcome: "Successfully launched the platform in 30+ new markets and significantly improved Core Web Vitals scores."
    },
    {
        id: "omv-els",
        title: "Emergency Location System",
        year: "2017 - 2021",
        company: "OMV",
        image: "/foundry.png",
        description: "High-availability GIS application for emergency response, asset tracking, and hazard management.",
        longDescription: "I worked as a Full Stack Engineer on a mission-critical Emergency Location System (ELS) for OMV Austria. The application was designed for a specialized 4-monitor desktop setup used in control centers. It renders complex GIS maps to locate oil wells, track fire hazards, and dispatch emergency vehicles in real-time. I handled the entire stack, from processing GIS data to building the complex frontend visualization tools.",
        techStack: ["Not disclosed"],
        role: "Full Stack Engineer",
        outcome: "Delivered a specialized multi-monitor desktop solution that enabled real-time vehicle tracking and efficient hazard management for emergency control centers."
    }
];

export async function getProjectById(id: string): Promise<Project | undefined> {
    return projects.find((p) => p.id === id);
}

export async function getAllProjects(): Promise<Project[]> {
    return projects;
}
