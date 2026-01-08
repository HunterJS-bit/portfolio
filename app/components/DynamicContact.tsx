import dynamic from "next/dynamic";

// Dynamically import Contact component with a minimal loading fallback
export const DynamicContact = dynamic(
    () => import("./Contact").then((mod) => ({ default: mod.Contact })),
    {
        loading: () => (
            <section id="contact" className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="border-t border-border/40 pt-20">
                        <div className="h-64 bg-muted/30 animate-pulse rounded-2xl" />
                    </div>
                </div>
            </section>
        ),
        ssr: true, // Contact form doesn't need SSR
    }
);
