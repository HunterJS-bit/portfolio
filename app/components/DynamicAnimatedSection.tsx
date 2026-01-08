import dynamic from "next/dynamic";

// Dynamically import AnimatedSection with a fallback
export const DynamicAnimatedSection = dynamic(
    () => import("./AnimatedSection").then((mod) => ({ default: mod.AnimatedSection })),
    {
        loading: () => <div className="opacity-0" />,
        ssr: true, // Keep SSR enabled for SEO
    }
);
