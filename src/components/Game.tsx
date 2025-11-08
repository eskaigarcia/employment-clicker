import { useReducer, useEffect } from "react"
import Upgrade from "./Upgrade"
import { upgrades } from '../data/upgrades.ts'
import englishDict from '../dictionaries/english.json'
import spanishDict from '../dictionaries/english.json' // Update to spanishDict once available  
import './Game.css'

interface GameState {
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
  effects: {
    cps?: number,
    multiplier?: number,
    interviewChance?: number,
    offerChance?: number,
  },
  subupgrades?: Record<string, UpgradeObject>
}

interface Dictionaries {
  [key: string] : Record<string, string>
}

interface GameAction {
  trigger: 'click' | 'tick' | 'buy',
  cost?: number,
  effects?: object,
}


export default function Game() {

  const initialGameState : GameState = {
    applications: 0,
    multiplier: 1,
    cps: 0,
    interviewChance: 0,
    offerChance: 0,
    timePlayed: 0,
    prestige: {
      multiplier: 1,
      count: 0
    },
    upgradeCounts: {},                 // This object needs to be built on new-game
    settings: {
      language: 'English',
      fps: 8,
    }
  };

  const dictionaries : Dictionaries = {
    English: englishDict,
    Spanish: spanishDict,
  }

  const renderUpgrade = (key : string, upgrade : UpgradeObject) => {
    return (
      <Upgrade 
        key={key + upgrade.id}
        src='_'
        title={ dictionaries[state.settings.language][upgrade.id] }
        price={ upgrade.basePrice * (1 + ((upgrade.priceIncrement ?? 1) * state.upgradeCounts[upgrade.id])) }
        count={ state.upgradeCounts[upgrade.id] }
        // type={}
        // locked={}
        // affordable={}
        // hidden={}
        // onClick={}
      />
    )
  }

  const displayUpgradePath = (path : string) => {
    document.querySelectorAll('div.upgradepath').forEach(div => div.classList.remove('selected'));
    document.getElementById(`${path}Path`)?.classList.add('selected')
  }

  
  function gameReducer(state: GameState, action: GameAction) {
    if(action.trigger === 'click') return { 
      ...state,
      applications: state.applications + (1 * state.multiplier),
    }
    if(action.trigger === 'tick') return {
      ...state,
      applications: state.applications + (state.cps / state.settings.fps),
    }
    if(action.trigger === 'buy') return {
      ...state,
      cps: state.cps + 0.1,
    }
    throw Error ('Unknown action.')
  }

  const [state, dispatch] = useReducer(gameReducer, initialGameState)

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch({ trigger: 'tick' })
    }, (1000 / state.settings.fps))

    return () => clearInterval(ticker)
  }, [state.settings.fps])

  return (
    <div id="game">
      <div id="screen">

      </div>
      <main id="panel">
        <div id="stats">
          <h4>{state.cps.toFixed(1)} applications per second</h4>
          <h1>{state.applications.toFixed(0)}</h1>
          <p>job applications</p>
          <button onClick={() => dispatch({ trigger: 'click' })}>Apply for a job</button>
        </div>
        <div id="upgradeSwitch">
          <button onClick={() => displayUpgradePath('active')}>Click multiplier</button>
          <button onClick={() => displayUpgradePath('pasive')}>Passive clicks</button>
          <button>Prestige</button>
        </div>
        <div id="upgrades">
          <div id="activePath" className="upgradepath list selected">
            {Object.entries(upgrades.active).map(([key, upgrade]) => renderUpgrade(key, upgrade as UpgradeObject))}
          </div>
          <div id="pasivePath" className="upgradepath list">
            {Object.entries(upgrades.pasive).map(([key, upgrade]) => renderUpgrade(key, upgrade as UpgradeObject))}
          </div>
          {/* Prestige upgrades will go here */}
        </div>
        <div>
          <button>settings</button>
          <button>collapse</button>
        </div>
      </main>
    </div>
  )
}