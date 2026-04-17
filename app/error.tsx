"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main className="min-h-[80vh] flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-7xl md:text-5xl font-medium mb-6">
                    500
                </h1>
                <p className="text-xl text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
                    Something went wrong. The page encountered an unexpected error.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
                    >
                        <RefreshCw size={18} />
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-border font-medium rounded-full hover:bg-muted transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}
