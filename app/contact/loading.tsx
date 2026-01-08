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

                <div className="max-w-2xl">
                    {/* Title skeleton */}
                    <div className="h-12 bg-muted animate-pulse rounded mb-4 w-48" />

                    {/* Description skeleton */}
                    <div className="space-y-2 mb-12">
                        <div className="h-6 bg-muted animate-pulse rounded w-full" />
                        <div className="h-6 bg-muted animate-pulse rounded w-3/4" />
                    </div>

                    {/* Form skeleton */}
                    <div className="space-y-8">
                        {/* First and last name */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <div className="h-4 bg-muted animate-pulse rounded w-20" />
                                <div className="h-12 bg-muted animate-pulse rounded-lg w-full" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 bg-muted animate-pulse rounded w-20" />
                                <div className="h-12 bg-muted animate-pulse rounded-lg w-full" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <div className="h-4 bg-muted animate-pulse rounded w-24" />
                            <div className="h-12 bg-muted animate-pulse rounded-lg w-full" />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <div className="h-4 bg-muted animate-pulse rounded w-16" />
                            <div className="h-32 bg-muted animate-pulse rounded-lg w-full" />
                        </div>

                        {/* Submit button */}
                        <div className="h-14 bg-muted animate-pulse rounded-lg w-full md:w-40" />
                    </div>
                </div>
            </div>
        </main>
    );
}
