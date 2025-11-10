/**
 * @typedef {object} Message
 * @description Defines the structure for a single message object within a chat conversation.
 *
 * Each message contains its content, source information (user or bot), and metadata
 * such as ID and timestamp.
 *
 * @property {number} id A unique identifier for the message.
 * @property {string} text The actual text content of the message.
 * @property {'user' | 'bot'} sender The source of the message, indicating whether it originated from the **user** or the **bot**.
 * @property {string} timestamp A string representation of the time the message was sent (e.g., ISO 8601 format).
 * @property {boolean} isStatus A boolean indicator that, if true, suggests this message is a **status notification** or system event, rather than a traditional chat message.
 * @property {string[] | undefined} [suggestions] An **optional** list of strings representing reply suggestions or actions related to this message.
 */
type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isStatus: boolean;
  suggestions?: string[];
};

export type { Message };
