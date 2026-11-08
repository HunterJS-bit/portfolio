import { getPostById, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johndoe.com';

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Marko'],
      tags: post.tags,
      url: `${siteUrl}/blog/${id}`,
      siteName: 'Marko Portfolio',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@markom',
      images: ['/og-image.png'],
    },
    keywords: post.tags.join(', '),
    other: {
      'article:reading_time': post.readTime,
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johndoe.com';

  // Get all posts for navigation
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Marko',
      url: siteUrl,
      jobTitle: 'Software Engineer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Marko Portfolio',
      url: siteUrl,
    },
    url: `${siteUrl}/blog/${id}`,
    keywords: post.tags.join(', '),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'Marko Blog',
      url: `${siteUrl}/blog`,
    },
    timeRequired: post.readTime,
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm"
      >
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
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeRaw],
            },
          }}
        />
      </article>

      {/* Prev/Next Navigation */}
      {(prevPost || nextPost) && (
        <nav className="mt-16 pt-8 border-t border-border" aria-label="Blog navigation">
          <div className="grid grid-cols-2 gap-4">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.id}`}
                className="flex flex-col items-start text-left group"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {prevPost.title}
                </h3>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.id}`}
                className="flex flex-col items-end text-right group"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </nav>
      )}

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Thanks for reading!</p>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
            Read more posts
          </Link>
        </div>
      </footer>
    </div>
  );
}
