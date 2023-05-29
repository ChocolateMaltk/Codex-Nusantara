import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'articles')

// Define the Article interface
export interface Article {
  id: string;
  title: string;
  date: string;
  flora: boolean;
  fauna: boolean;
  origin: string;
  vidLink: string;
}

// Get all sorted posts data
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  // Map the file names to the article data
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Create the article object
    const blogPost: Article = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      flora: matterResult.data.flora,
      fauna: matterResult.data.fauna,
      origin: matterResult.data.origin,
      vidLink: matterResult.data.vidLink
    }

    // Combine the data with the id
    return blogPost;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get post data for a specific id
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Process the content to HTML
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Create the article object with HTML content
  const articleWithHTML: Article & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    flora: matterResult.data.flora,
    fauna: matterResult.data.fauna,
    origin: matterResult.data.origin,
    vidLink: matterResult.data.vidLink,
    contentHtml,
  };

  // Return the article object
  return articleWithHTML;
}
