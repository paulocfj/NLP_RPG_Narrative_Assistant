import type { ThematicScenarioCollection } from '../../../types';
import { ClassicScenario } from './classic-scenario';
import { EpicJourneyScenario } from './epic-jorney-scenario';

const MedievalTheme: ThematicScenarioCollection = [
  ClassicScenario,
  EpicJourneyScenario,
];

export { MedievalTheme };
