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
                <div className="h-16 bg-muted animate-pulse rounded mb-12 w-40" />

                {/* Two column layout skeleton */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                    {/* Image skeleton */}
                    <div className="aspect-square bg-muted animate-pulse rounded-2xl" />

                    {/* Content skeleton */}
                    <div className="space-y-6">
                        <div className="h-10 bg-muted animate-pulse rounded w-4/5" />
                        <div className="space-y-3">
                            <div className="h-5 bg-muted animate-pulse rounded w-full" />
                            <div className="h-5 bg-muted animate-pulse rounded w-11/12" />
                            <div className="h-5 bg-muted animate-pulse rounded w-full" />
                            <div className="h-5 bg-muted animate-pulse rounded w-4/5" />
                        </div>
                        <div className="space-y-3 pt-4">
                            <div className="h-5 bg-muted animate-pulse rounded w-full" />
                            <div className="h-5 bg-muted animate-pulse rounded w-5/6" />
                        </div>
                    </div>
                </div>

                {/* Additional content skeleton */}
                <div className="space-y-3 mb-20">
                    <div className="h-5 bg-muted animate-pulse rounded w-full" />
                    <div className="h-5 bg-muted animate-pulse rounded w-11/12" />
                    <div className="h-5 bg-muted animate-pulse rounded w-full" />
                    <div className="h-5 bg-muted animate-pulse rounded w-10/12" />
                </div>
            </div>
        </main>
    );
}
