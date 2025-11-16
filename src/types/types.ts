export interface GameState {
  applications: number,
    multiplier: number,
    cps: number,
    interviewChance: number,
    offerChance: number,
    stats: Record<string, number>,
    prestige: Record<string, number>
    upgradeCounts: Record<string, number>, 
    settings: Record<string, any>
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
  upgrade?: UpgradeObject,
}
 