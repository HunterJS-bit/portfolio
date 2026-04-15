import { getPostById, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = await getPostById(id);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${id}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function SingleBlogPage({ params }: Props) {
    const { id } = await params;
    const post = await getPostById(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to blog
            </Link>

            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <header className="not-prose mb-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
                    <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <MDXRemote source={post.content} />
            </article>

            <footer className="mt-20 pt-8 border-t border-border">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        Thanks for reading!
                    </p>
                    <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
                        Read more posts
                    </Link>
                </div>
            </footer>
        </div>
    );
}