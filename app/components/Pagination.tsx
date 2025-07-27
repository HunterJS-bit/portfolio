import { ChevronRight, ChevronLeft } from "lucide-react";
export const Pagination = () => {

    return (
        <nav className="flex items-center gap-x-1" aria-label="Pagination">
            <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous" disabled="">
                <ChevronLeft />
                <span>Previous</span>
            </button>
            <div className="flex items-center gap-x-1">
                <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center ext-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</button>
                <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none">2</button>
                <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-hidden  disabled:opacity-50 disabled:pointer-events-none">3</button>
            </div>
            <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next">
                <span>Next</span>
                <ChevronRight />
            </button>
        </nav>
    )
};