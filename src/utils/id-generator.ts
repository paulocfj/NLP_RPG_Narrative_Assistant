/**
 * Module-scoped variable to maintain the unique counter.
 * In real production use, IDs should ideally come from a database or use UUIDs,
 * but this is safe for a simple front-end sequential counter.
 */
let messageIdCounter = 0;

/**
 * @function getNextMessageId
 * @description Generates and returns a unique sequential numeric ID for use in new messages or list items.
 * @returns {number} The next sequential message ID.
 */
const getNextMessageId = (): number => messageIdCounter++;

export { getNextMessageId };
