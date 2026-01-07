import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
}

export const Pagination = ({ currentPage, totalPages, baseUrl }: PaginationProps) => {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex items-center justify-center gap-x-2 mt-16" aria-label="Pagination">
            <Link
                href={`${baseUrl}?page=${currentPage - 1}`}
                className={`min-h-10 min-w-10 py-2 px-3 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg border border-border hover:bg-muted transition-colors ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                    }`}
                aria-label="Previous"
            >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
            </Link>

            <div className="flex items-center gap-x-1">
                {pages.map((page) => (
                    <Link
                        key={page}
                        href={`${baseUrl}?page=${page}`}
                        className={`min-h-10 min-w-10 flex justify-center items-center py-2 px-3 text-sm rounded-lg border transition-colors ${currentPage === page
                                ? "bg-foreground text-background border-foreground"
                                : "border-border hover:bg-muted"
                            }`}
                        aria-current={currentPage === page ? "page" : undefined}
                    >
                        {page}
                    </Link>
                ))}
            </div>

            <Link
                href={`${baseUrl}?page=${currentPage + 1}`}
                className={`min-h-10 min-w-10 py-2 px-3 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg border border-border hover:bg-muted transition-colors ${currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
                    }`}
                aria-label="Next"
            >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
            </Link>
        </nav>
    );
};