// React
import { useReducer, useEffect } from "react"

// Typescript 
import type { GameAction, GameState, Dictionaries, UpgradeObject } from '../types/types'

// Components
import Upgrade from "./Upgrade"

// Data
import { upgrades } from '../data/upgrades'

// Translations
import englishDict from '../dictionaries/english.json'
import spanishDict from '../dictionaries/english.json' // Update to spanishDict once available  

// CSS
import './Game.css'

// ==================================================

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

  const renderUpgrade = (key: string, type: string, upgrade: UpgradeObject) => {
    const hidden = (type !== 'active') && (
      (upgrade.type === "unlock" && state.upgradeCounts[upgrade.id] > 0) ||
      (upgrade.type !== "unlock" && state.upgradeCounts[upgrade.requires!] === undefined)
    );

    const price = upgrade.basePrice *
          (1 + (upgrade.priceIncrement ?? 1) * (state.upgradeCounts[upgrade.id] ?? 0));

    const notAffordable = price > state.applications;

    return (
      <Upgrade
        key={key + upgrade.id}
        src="_"
        title={text(upgrade.id)}
        price={price}
        count={state.upgradeCounts[upgrade.id]}
        hidden={hidden}
        notAffordable={notAffordable}
        onClick={() => {
          dispatch({ trigger: 'buy', upgrade: upgrade })
        }}
      />
    );
  };

  const text = (key: string) => dictionaries[state.settings.language][key];

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
    if(action.trigger === 'buy') {
      const upgrade = action.upgrade!;

      const price = upgrade.basePrice *
          (1 + (upgrade.priceIncrement ?? 1) * (state.upgradeCounts[upgrade.id] ?? 0));

      const updatedState = { ...state };
      Object.entries(upgrade.effects).forEach(([key, value]) => {
        (updatedState[key as keyof GameState] as number) = ((updatedState[key as keyof GameState] as number) ?? 0) + value;
      });
      
      return {
        ...updatedState,
        applications: state.applications - price!,
        upgradeCounts: {
          ...state.upgradeCounts,
          [upgrade.id]: (state.upgradeCounts[upgrade.id] ?? 0) + 1,
        }
      }
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
        <div id="desktop"></div>
        <div id="taskbar"></div>
      </div>
      <main id="panel">
        <div id="stats">
          <h4>{state.cps.toFixed(1)} {text('ma001')}</h4>
          <h1>{state.applications.toFixed(0)}</h1>
          <p>{text('ma000')}</p>
          <button onClick={() => dispatch({ trigger: 'click' })}>{text('ma002')}</button>
        </div>
        <div id="upgradeSwitch">
          <button onClick={() => displayUpgradePath('active')}>{text('ma003')}</button>
          <button onClick={() => displayUpgradePath('pasive')}>{text('ma004')}</button>
          <button>{text('ma005')}</button>
        </div>
        <div id="upgrades">
          <div id="activePath" className="upgradepath list selected">
            {Object.entries(upgrades.active).map(([key, upgrade]) => renderUpgrade(key, 'active', upgrade as UpgradeObject))}
          </div>
          <div id="pasivePath" className="upgradepath list">
            {Object.entries(upgrades.pasive).map(([key, upgrade]) => renderUpgrade(key, 'pasive', upgrade as UpgradeObject))}
          </div>
          {/* Prestige upgrades will go here */}
        </div>
        <div>
          <button>setting</button>
          <button>collapse</button>
          <button>expand</button>
        </div>
      </main>
    </div>
  )
}