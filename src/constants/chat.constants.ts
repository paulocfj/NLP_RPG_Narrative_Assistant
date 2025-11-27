/**
 * Defines the identity used for messages sent by the AI or system.
 * @type {string}
 */
const SENDER_BOT = 'bot';
/**
 * Defines the identity used for messages sent by the user.
 * @type {string}
 */
const SENDER_USER = 'user';
/**
 * Maximum character limit for the user input.
 * This limit prevents users from accidentally creating excessively long prompts.
 */
const MAX_LENGTH = 500;

export { SENDER_BOT, SENDER_USER, MAX_LENGTH };
