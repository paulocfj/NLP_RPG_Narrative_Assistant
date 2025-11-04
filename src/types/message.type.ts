/**
 * Defines the structure for a single message object within a chat conversation.
 */
type Message = {
  /** A unique identifier for the message. */
  id: string;
  /** The actual text content of the message. */
  text: string;
  /** The source of the message, indicating whether it came from the user or the bot. */
  sender: 'user' | 'bot';
  /** A string representation of the time the message was sent (e.g., ISO 8601 format). */
  timestamp: string;
};

export type { Message };
