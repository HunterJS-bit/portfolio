import { promises as fs, existsSync } from "fs";
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
    if (!existsSync(BLOG_DIR)) {
        return [];
    }

    const files = await fs.readdir(BLOG_DIR);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
        mdxFiles.map(async (file) => {
            const id = file.replace(/\.mdx$/, "");
            const fullPath = path.join(BLOG_DIR, file);
            const fileContents = await fs.readFile(fullPath, "utf8");
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
    );

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
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
    if (!existsSync(fullPath)) {
        return null;
    }

    const fileContents = await fs.readFile(fullPath, "utf8");
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
