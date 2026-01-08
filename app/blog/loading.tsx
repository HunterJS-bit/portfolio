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

                {/* Blog posts skeleton */}
                <div className="space-y-16">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="space-y-4">
                            {/* Date and read time */}
                            <div className="flex items-center gap-6">
                                <div className="h-4 bg-muted animate-pulse rounded w-32" />
                                <div className="h-4 bg-muted animate-pulse rounded w-20" />
                            </div>

                            {/* Title */}
                            <div className="h-10 bg-muted animate-pulse rounded w-2/3" />

                            {/* Excerpt */}
                            <div className="space-y-2">
                                <div className="h-5 bg-muted animate-pulse rounded w-full" />
                                <div className="h-5 bg-muted animate-pulse rounded w-5/6" />
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2 pt-2">
                                <div className="h-6 bg-muted animate-pulse rounded-full w-16" />
                                <div className="h-6 bg-muted animate-pulse rounded-full w-20" />
                                <div className="h-6 bg-muted animate-pulse rounded-full w-14" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination skeleton */}
                <div className="mt-20 pt-10 border-t border-border/40">
                    <div className="flex justify-center gap-2">
                        <div className="h-10 w-10 bg-muted animate-pulse rounded" />
                        <div className="h-10 w-10 bg-muted animate-pulse rounded" />
                        <div className="h-10 w-10 bg-muted animate-pulse rounded" />
                    </div>
                </div>
            </div>
        </main>
    );
}
