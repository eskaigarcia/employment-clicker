import { useReducer, useEffect } from "react"
import Upgrade from "./Upgrade"
import { upgrades } from '../data/upgrades.ts'

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
    upgrades: object, 
    settings: {
      language: string,
      fps: number,
    }
}

interface UpgradeObject {
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
  subupgrades?: UpgradeObject
}

interface GameAction {
  trigger: 'click' | 'tick' | 'buy',
  cost?: number,
  effects?: object,
}


export default function Game() {
  
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

  const initialGameState = {
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
    upgrades: {},                 // This object needs to be built on new-game
    settings: {
      language: 'English',
      fps: 8,
    }
  };

  const [state, dispatch] = useReducer(gameReducer, initialGameState)

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch({ trigger: 'tick' })
    }, (1000 / state.settings.fps))

    return () => clearInterval(ticker)
  }, [state.settings.fps])

  useEffect(() => {
    console.log(upgrades);
  }, [])

  return (
    <div id="game">
      <div id="screen">

      </div>
      <main id="panel">
        <div id="stats">
          <h4>{state.cps.toFixed(1)} applications per second</h4>
          <h1>{state.applications.toFixed(0)}</h1>
          <p>job applications</p>
          <button onClick={() => dispatch({ trigger: 'click' })}>Send job application</button>
        </div>
        {/* <div id="upgrades">
          <button onClick={() => dispatch({ trigger: 'buy' })}>Buy a passive click</button>
          <Upgrade />
        </div> */}
        <div id="upgrades">
          {Object.entries({ ...upgrades.active, ...upgrades.passive }).map(([key, upgrade]) => (
            <Upgrade 
              key={key + upgrade.id}
            />
          ))}
        </div>
      </main>
    </div>
  )
}