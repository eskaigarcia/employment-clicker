export interface GameState {
  applications: number,
    multiplier: number,
    cps: number,
    interviewChance: number,
    offerChance: number,
    timePlayed: number,
    prestige: {
      multiplier: number,
      count: number
    },
    upgradeCounts: Record<string, number>, 
    settings: {
      language: string,
      fps: number,
    }
}

export interface UpgradeObject {
  id: string,
  basePrice: number,
  priceIncrement?: number,
  type: 'unlock' | 'multiple' | 'temporal',
  requires?: string,
  effects: {
    cps?: number,
    multiplier?: number,
    interviewChance?: number,
    offerChance?: number,
  }
}

export interface Dictionaries {
  [key: string] : Record<string, string>
}

export interface GameAction {
  trigger: 'click' | 'tick' | 'buy',
  cost?: number,
  effects?: object,
}
