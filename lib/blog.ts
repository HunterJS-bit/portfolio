import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    readTime: string;
    tags: string[];
    content: string;
};

export async function getAllPosts(): Promise<BlogPost[]> {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR);
    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const id = file.replace(/\.mdx$/, "");
            const fullPath = path.join(BLOG_DIR, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                id,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                readTime: data.readTime,
                tags: data.tags,
                content,
            };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    return posts;
}

export async function getPaginatedPosts(page: number, limit: number): Promise<{ posts: BlogPost[], totalPages: number }> {
    const allPosts = await getAllPosts();
    const totalPages = Math.ceil(allPosts.length / limit);
    const offset = (page - 1) * limit;
    const posts = allPosts.slice(offset, offset + limit);

    return { posts, totalPages };
}

export async function getPostById(id: string): Promise<BlogPost | null> {
    const fullPath = path.join(BLOG_DIR, `${id}.mdx`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        id,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        readTime: data.readTime,
        tags: data.tags,
        content,
    };
}
