/**
 * @typedef {'INTRO' | 'PICK ONE GOAL' | 'PACE' | 'STRUCTURE' | 'STREAMLINE'} GuidePillar
 * @description Defines the type for the guide's pillars/sections.
 */
type GuidePillar =
  | 'INTRO'
  | 'PICK ONE GOAL'
  | 'PACE'
  | 'STRUCTURE'
  | 'STREAMLINE';

/**
 * @typedef {object} OneShotGuideQuestion
 * @description Interface for the Neutral Question Structure (Scaffolding).
 * Used within 'CoreQuestionsGuide'.
 *
 * @property {number} id A unique identifier for the question.
 * @property {GuidePillar} pillar The pillar or section of the guide this question belongs to.
 * @property {string} mainFocus The main focus of the question (Ex: 'Immediate Action', 'Objective Clarity').
 * @property {string} question The actual text content of the question.
 */
type OneShotGuideQuestion = {
  id: number;
  pillar: GuidePillar;
  mainFocus: string; // Ex: 'Immediate Action', 'Objective Clarity'
  question: string;
};

/**
 * @typedef {OneShotGuideQuestion[]} CoreQuestionsGuide
 * @description The neutral OneShotGuide is an array of these questions.
 */
type CoreQuestionsGuide = OneShotGuideQuestion[];

/**
 * @typedef {'medieval' | string} GuideTheme
 * @description Defines the type for the guide's theme. Can be 'medieval' or any other theme string.
 */
type GuideTheme = 'medieval' | string;

/**
 * @typedef {object} NpcChallenge
 * @description Sub-interface for 'object_list' suggestions (Question 7 - NPCs and Obstacles).
 *
 * @property {string} challenge The suggested challenge or obstacle.
 * @property {string} npc The suggested Non-Player Character (NPC) (Ex: 'Farmer Baruk (Neutral)').
 */
type NpcChallenge = {
  challenge: string;
  npc: string; // Ex: 'Farmer Baruk (Neutral)'
};

/**
 * @typedef {object} SimplifiedThematicSuggestionItem
 * @description Interface for the Thematic Suggestion Items within a Scenario.
 * Each scenario should provide only ONE specific suggestion per question ID.
 *
 * @property {number} id Must match the question ID in 'OneShotGuideQuestion'.
 * @property {string[] | NpcChallenge[]} suggestion A single suggestion, which can be an array of strings (for text/input) or 'NpcChallenge[]' (for 'object_list', usually 3-5 items).
 */
type SimplifiedThematicSuggestionItem = {
  id: number; // Must match the question ID in OneShotGuideQuestion
  /** A single suggestion, which can be a string (for text/input) or NpcChallenge[] (for object_list, usually 3-5 items). */
  suggestion: string[] | NpcChallenge[];
};

/**
 * @typedef {object} ThematicScenario
 * @description Interface to group a complete set of specific suggestions into a named Scenario/Subtheme.
 *
 * @property {number} id A unique identifier for the scenario.
 * @property {GuideTheme} guideTheme The overall theme this scenario belongs to.
 * @property {string} name The name of the Scenario (Ex: 'The Castle of Valgor', 'The Lake of Veldora').
 * @property {SimplifiedThematicSuggestionItem[]} themeSuggestions An array containing the specific suggestions for all guide questions.
 */
type ThematicScenario = {
  id: number;
  guideTheme: GuideTheme;
  name: string; // Ex: 'The Castle of Valgor', 'The Lake of Veldora'
  themeSuggestions: SimplifiedThematicSuggestionItem[]; // Array of the 9 specific suggestions
};

/**
 * @typedef {ThematicScenario[]} ThematicScenarioCollection
 * @description The main thematic suggestions object is an array of Scenarios.
 */
type ThematicScenarioCollection = ThematicScenario[];

/**
 * @typedef {OneShotGuideQuestion & { userResponse: string }} GuideQuestion
 * @description Extends 'OneShotGuideQuestion' by adding the response provided by the user.
 *
 * @property {string} userResponse The text response provided by the user for this question.
 */
type GuideQuestion = OneShotGuideQuestion & {
  userResponse: string;
};

/**
 * @typedef {GuideQuestion[]} CompleteGuide
 * @description The complete guide, consisting of an array of guide questions with the user's responses filled in.
 */
type CompleteGuide = GuideQuestion[];

export type {
  CompleteGuide,
  CoreQuestionsGuide,
  GuidePillar,
  GuideQuestion,
  GuideTheme,
  NpcChallenge,
  OneShotGuideQuestion,
  SimplifiedThematicSuggestionItem,
  ThematicScenario,
  ThematicScenarioCollection,
};
