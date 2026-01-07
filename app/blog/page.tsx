import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Pagination } from "../components/Pagination";
import { getPaginatedPosts } from "@/lib/blog";
import { Section } from "../components/Section";

type Props = {
    searchParams: Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 5;

export default async function BlogPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);

    const { posts, totalPages } = await getPaginatedPosts(currentPage, POSTS_PER_PAGE);

    return (
        <div className="max-w-4xl mx-auto px-6">
            <Section>
                <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to home
                </Link>

                <h1 className="text-4xl md:text-5xl font-medium mb-4">Blog</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
                    Thoughts on web development, technology, and building great products.
                </p>

                <div className="space-y-12">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                                <article className="space-y-4">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-medium group-hover:text-muted-foreground transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <p className="text-muted-foreground">No posts found on this page.</p>
                    )}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    baseUrl="/blog"
                />
            </Section>
        </div>
    );
}