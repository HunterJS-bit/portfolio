import { getAllPosts } from "@/lib/blog";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface LatestPostsSectionProps {
    delay?: number;
}

export const LatestPostsSection = async ({ delay = 0 }: LatestPostsSectionProps) => {
    const allPosts = await getAllPosts();
    const latestPosts = allPosts.slice(0, 3);

    return (
        <section id="latest-posts" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <AnimatedSection delay={delay}>
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight mb-2">Latest Posts</h2>
                            <p className="text-muted-foreground">Thoughts on software, design, and building products.</p>
                        </div>
                        <Link
                            href="/blog"
                            className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors group"
                        >
                            View all posts
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    <div className="grid gap-8">
                        {latestPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group block p-6 rounded-2xl border border-border/50 bg-card hover:bg-accent/50 transition-all duration-300"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
