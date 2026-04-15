import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Pagination } from "../components/Pagination";
import { getPaginatedPosts } from "@/lib/blog";
import { DynamicAnimatedSection as AnimatedSection } from "../components/DynamicAnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "My thoughts on web development, technology, and products.",
    alternates: { canonical: '/blog' },
};

type Props = {
    searchParams: Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 5;

export default async function BlogPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);

    const { posts, totalPages } = await getPaginatedPosts(currentPage, POSTS_PER_PAGE);

    return (
        <main className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection>
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to home
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-medium mb-6 tracking-tight text-gradient">Blog</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mb-20 leading-relaxed">
                        Thoughts on web development, technology, and building great products.
                    </p>
                </AnimatedSection>

                <div className="space-y-16">
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <AnimatedSection key={post.id} delay={index * 0.1}>
                                <Link href={`/blog/${post.id}`} className="block group">
                                    <article className="space-y-4">
                                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-medium group-hover:text-primary transition-colors tracking-tight">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted-foreground leading-relaxed max-w-3xl text-lg">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-muted rounded-full text-muted-foreground border border-border/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                Read more <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </AnimatedSection>
                        ))
                    ) : (
                        <p className="text-muted-foreground">No posts found on this page.</p>
                    )}
                </div>

                <AnimatedSection delay={0.4}>
                    <div className="mt-20 pt-10 border-t border-border/40">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            baseUrl="/blog"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}