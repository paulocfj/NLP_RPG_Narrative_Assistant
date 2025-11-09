/** Defines the type for the guide's pillars/sections */
export type GuidePillar =
  | 'INTRO'
  | 'PICK ONE GOAL'
  | 'PACE'
  | 'STRUCTURE'
  | 'STREAMLINE';

/**
 * Interface for the Neutral Question Structure (Scaffolding).
 * Used in 'CoreQuestionsGuide'.
 */
export type OneShotGuideQuestion = {
  id: number;
  pillar: GuidePillar;
  mainFocus: string; // Ex: 'Immediate Action', 'Objective Clarity'
  question: string;
};

/** The neutral OneShotGuide is an array of these questions */
export type CoreQuestionsGuide = OneShotGuideQuestion[];

/** Defines the type for the theme */
export type GuideTheme = 'medieval' | string;

/** Sub-interface for 'object_list' suggestions (Question 7 - NPCs and Obstacles) */
export type NpcChallenge = {
  challenge: string;
  npc: string; // Ex: 'Farmer Baruk (Neutral)'
};

/**
 * Interface for the Thematic Suggestion Items within a Scenario.
 * Each scenario should provide only ONE specific suggestion per question ID.
 */
export type SimplifiedThematicSuggestionItem = {
  id: number; // Must match the question ID in OneShotGuideQuestion
  /** A single suggestion, which can be a string (for text/input) or NpcChallenge[] (for object_list, usually 3-5 items). */
  suggestion: string[] | NpcChallenge[];
};

/**
 * Interface to group a complete set of 9 specific suggestions into a named Scenario/Subtheme.
 */
export type ThematicScenario = {
  id: number;
  guideTheme: GuideTheme;
  name: string; // Ex: 'The Castle of Valgor', 'The Lake of Veldora'
  themeSuggestions: SimplifiedThematicSuggestionItem[]; // Array of the 9 specific suggestions
};

/** The main thematic suggestions object is an array of Scenarios. */
export type ThematicScenarioCollection = ThematicScenario[];

export type GuideQuestion = {
  question: string;
  userResponse: string;
};

export type CompleteGuide = GuideQuestion[];
