import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

const postsDirectory = path.join(process.cwd(), 'posts');
const errorPath = path.join(process.cwd(), 'error.md');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getIndividualPostData(id) {
  const fileContents = fs.readFileSync(path.join(postsDirectory, `${id}.md`), 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    ids: getPostIds(),
    id,
    contentHtml,
    ...matterResult.data,
  };
}