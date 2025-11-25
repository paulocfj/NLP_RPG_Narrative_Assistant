/**
 * Removes the Markdown code block header and footer ('```markdown', '```')
 * if they are present in the story string.
 * This ensures that only the pure Markdown content is rendered.
 *
 * @param markdown The raw string potentially containing the code block delimiters.
 * @returns The cleaned string with delimiters removed, trimmed of extra whitespace.
 */
export const cleanStoryContent = (markdown: string): string => {
  // 1. Regex for the start: /^\s*```[a-zA-Z]*\s*\n/
  const startRegex = /^\s*```[a-zA-Z]*\s*\n/;

  // 2. Regex for the end: /\n\s*```\s*$/
  const endRegex = /\n\s*```\s*$/;

  let cleaned = markdown.replace(startRegex, '');
  cleaned = cleaned.replace(endRegex, '');

  return cleaned.trim();
};
