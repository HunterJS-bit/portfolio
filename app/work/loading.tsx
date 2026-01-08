import { ArrowLeft } from "lucide-react";

export default function Loading() {
    return (
        <main className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back button skeleton */}
                <div className="inline-flex items-center mb-12">
                    <ArrowLeft className="w-4 h-4 mr-2 text-muted-foreground/50" />
                    <div className="h-4 bg-muted animate-pulse rounded w-24" />
                </div>

                {/* Title skeleton */}
                <div className="h-16 bg-muted animate-pulse rounded mb-6 w-32" />

                {/* Description skeleton */}
                <div className="h-6 bg-muted animate-pulse rounded mb-20 w-3/4" />

                {/* Project cards skeleton */}
                <div className="grid gap-24">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Project image skeleton */}
                            <div className="aspect-[16/10] bg-muted animate-pulse rounded-2xl" />

                            {/* Project details skeleton */}
                            <div className="flex flex-col justify-center space-y-4">
                                {/* Company and year */}
                                <div className="flex items-center gap-3">
                                    <div className="h-4 bg-muted animate-pulse rounded w-24" />
                                    <div className="h-1 w-1 bg-muted rounded-full" />
                                    <div className="h-4 bg-muted animate-pulse rounded w-16" />
                                </div>

                                {/* Title */}
                                <div className="h-10 bg-muted animate-pulse rounded w-4/5" />

                                {/* Description */}
                                <div className="space-y-2">
                                    <div className="h-5 bg-muted animate-pulse rounded w-full" />
                                    <div className="h-5 bg-muted animate-pulse rounded w-11/12" />
                                    <div className="h-5 bg-muted animate-pulse rounded w-4/5" />
                                </div>

                                {/* CTA link */}
                                <div className="h-4 bg-muted animate-pulse rounded w-32 mt-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
