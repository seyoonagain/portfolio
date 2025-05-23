import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';

const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
};

export default markdownToHtml;
