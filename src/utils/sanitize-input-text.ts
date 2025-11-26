/**
 * @fileoverview Utility functions for client-side message validation and light sanitization.
 * * NOTE: This sanitization is for UX and local state control only.
 * Full security (XSS prevention) must be enforced on the Vercel API endpoint
 * using a robust server-side library (like DOMPurify).
 */

import { MAX_LENGTH } from '../constants';

/**
 * Performs light sanitization by removing potentially intrusive raw HTML tags.
 * This allows safe passage of Markdown syntax (e.g., *, #, [link]) while
 * cleaning up raw HTML elements that could disrupt the chat interface.
 * * @param text The raw input string from the user.
 * @returns The string with basic HTML tags removed.
 */
const sanitizeTextForFrontend = (text: string): string => {
  if (!text) return '';

  // 1. Completely removes common dangerous/intrusive tags.
  let cleanText = text
    .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, '')
    .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gim, '')
    .replace(/<iframe\b[^>]*>([\s\S]*?)<\/iframe>/gim, '');

  // 2. Removes other generic raw HTML tags (e.g., <div>, <span>, etc.)
  // to ensure only Markdown-like content remains.
  cleanText = cleanText.replace(/<\/?[a-z][\s\S]*?>/gim, '');

  return cleanText;
};

/**
 * Applies light sanitization and enforces the character limit on the input string.
 * This function should be used in the `onChange` and `useEffect` handlers of
 * the SendMessageForm component to control the local state.
 * * @param rawText The raw value from the input field.
 * @returns The sanitized and character-limited string for safe state storage.
 */
const sanitizeAndLimitInput = (rawText: string): string => {
  if (!rawText) return '';

  // 1. Apply light sanitization
  const sanitizedText = sanitizeTextForFrontend(rawText);

  // 2. Apply the character limit
  // Note: The conditional logic in the React handler prevents the state
  // from growing past MAX_LENGTH, but this ensures final truncation.
  return sanitizedText.substring(0, MAX_LENGTH);
};

export { sanitizeAndLimitInput };
