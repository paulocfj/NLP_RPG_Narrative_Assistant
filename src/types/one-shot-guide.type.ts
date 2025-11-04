/**
 * Type for the complex suggestions related to the Structure Question (ID 7),
 * where each suggestion includes a challenge and an associated NPC.
 */
export type FlexibleSuggestion = {
  /** Description of the flexible challenge/scene. Ex: "Social: A nervous farmer needs to be persuaded..." */
  challenge: string;
  /** The NPC associated with the challenge (Ally/Neutral/Enemy). Ex: "Farmer Baruk (Neutral)" */
  npc: string;
};

/**
 * Base type for all suggestions that are simple strings (used for most questions).
 */
export type SimpleSuggestions = string[];

/**
 * Type for the list of suggestions, which can be an array of simple strings (SimpleSuggestions) or
 * an array of complex objects (FlexibleSuggestion[]), depending on the question's 'type' field.
 */
export type SuggestionList = SimpleSuggestions | FlexibleSuggestion[];

/**
 * Defines the main structure for a single Guide Question object within the array.
 */
export type GuideQuestion = {
  id: number;
  /** The main pillar of the one-shot design process. */
  pillar: 'INTRO' | 'PICK ONE GOAL' | 'PACE' | 'STRUCTURE' | 'STREAMLINE';
  /** The detailed focus of the pillar. */
  mainFocus: string;
  /** The key question to be answered by the DM. */
  question: string;
  /** The expected input type for the form/interface. */
  type: 'text_area' | 'text_input' | 'object_list';
  /** The theme this data belongs to. Ex: "medieval" */
  theme: string;

  /** The list of suggestions for this specific question. */
  suggestions: SuggestionList;
};

/**
 * The final type for the complete one-shot guide (an array, or list, of GuideQuestion objects).
 */
export type OneShotGuide = GuideQuestion[];
