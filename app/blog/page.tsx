import Link from "next/link";
const blogPosts = [
    {
        id: 'building-scalable-react-apps',
        title: 'Building Scalable React Applications',
        excerpt: 'Learn the best practices and patterns for building React applications that can grow with your team and user base.',
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['React', 'JavaScript', 'Architecture'],
        published: true
    },
    {
        id: 'typescript-tips-tricks',
        title: 'TypeScript Tips and Tricks for Better Code',
        excerpt: 'Discover advanced TypeScript features and patterns that will make your code more robust and maintainable.',
        date: '2024-01-08',
        readTime: '6 min read',
        tags: ['TypeScript', 'JavaScript', 'Best Practices'],
        published: true
    },
    {
        id: 'nextjs-performance-optimization',
        title: 'Next.js Performance Optimization Guide',
        excerpt: 'A comprehensive guide to optimizing your Next.js applications for better performance and user experience.',
        date: '2024-01-01',
        readTime: '12 min read',
        tags: ['Next.js', 'Performance', 'Web Development'],
        published: true
    },
    {
        id: 'modern-css-techniques',
        title: 'Modern CSS Techniques Every Developer Should Know',
        excerpt: 'Explore the latest CSS features and techniques that will improve your styling workflow and create better user interfaces.',
        date: '2023-12-20',
        readTime: '10 min read',
        tags: ['CSS', 'Frontend', 'Design'],
        published: true
    },
    {
        id: 'api-design-best-practices',
        title: 'RESTful API Design Best Practices',
        excerpt: 'Learn how to design clean, maintainable, and scalable APIs that your team and users will love.',
        date: '2023-12-15',
        readTime: '9 min read',
        tags: ['API', 'Backend', 'Node.js'],
        published: true
    },
    {
        id: 'developer-productivity-tools',
        title: 'Essential Developer Productivity Tools in 2024',
        excerpt: 'A curated list of tools and extensions that will boost your productivity as a developer.',
        date: '2023-12-10',
        readTime: '7 min read',
        tags: ['Productivity', 'Tools', 'Development'],
        published: true
    }
];


const Page = () => {
    return (
        <div>
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 text-sm">
                        {/* <ArrowLeft className="w-4 h-4 mr-2" /> */}
                        Back to home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Thoughts on web development, technology, and building great products.
                    </p>
                </div>
            </section>
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {blogPosts.map((post, index) => (
                            <Link key={post.id} href={`/blog/${post.id}`}>
                                {/* <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-200 group cursor-pointer">
                <CardContent className="p-6"> */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                {/* <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} */}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {/* <Clock className="w-4 h-4" /> */}
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {/* {post.tags.map((tag, tagIndex) => (
                        //   <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs">
                        //     {tag}
                        //   </Badge>
                        ))} */}
                                        </div>
                                    </div>
                                </div>
                                {/* </CardContent>
              </Card> */}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Page;