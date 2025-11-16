import type { GameState } from '../types/types'


const initialGameState : GameState = {
    applications: 0,
    multiplier: 1,
    cps: 0,
    interviewChance: 0,
    offerChance: 0,
    stats: {
      timeplayed: 0,
      upgradesBought: 0,
      upgradesBoughtAllPrestiges: 0,
      applications: 0,
      applicationsAllTime: 0,
      interviewsReceived: 0,
      interviewsTaken: 0,
      offersReceived: 0,
    },
    prestige: {
      multiplier: 1,
      count: 0,
      currentLevel: 0,
      unlockedLevel: 1,
      prestigePoints: 0,
      totalPrestigePoints: 0,
    },
    upgradeCounts: {},                 // This object needs to be built on new-game
    settings: {
      language: 'English',
      fps: 15,
      theme: 'xp',
      scientificMode: false,
    }
  };
  
export default initialGameState;