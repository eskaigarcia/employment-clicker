// React
import { useReducer, useEffect } from "react"

// Typescript 
import type { GameAction, GameState, Dictionaries, UpgradeObject } from '../types/types'

// Components
import Upgrade from "./Upgrade"

// Data
import { upgrades } from '../data/upgrades'
import initialGameState from '../data/initialGameState'

// Translations
import englishDict from '../dictionaries/english.json'
import spanishDict from '../dictionaries/spanish.json'
import imagesDict from '../dictionaries/images.json'

// CSS
import './Game.css'

// ==================================================

export default function Game() {

  const dictionaries : Dictionaries = {
    English: englishDict,
    Spanish: spanishDict,
    Images: imagesDict,
  }

  const renderUpgrade = (key: string, type: string, upgrade: UpgradeObject) => {
    const hidden = (type !== 'active') && (
      (upgrade.type === "unlock" && state.upgradeCounts[upgrade.id] > 0) ||
      (upgrade.type !== "unlock" && state.upgradeCounts[upgrade.requires!] === undefined)
    );

    const price =
      upgrade.basePrice *
      (upgrade.priceIncrement ?? 1.2) **
        (state.upgradeCounts[upgrade.id] ?? 0);

    const notAffordable = price > state.applications;

    return (
      <Upgrade
        key={key + upgrade.id}
        src={icon(upgrade.id)}
        title={text(upgrade.id)}
        price={`${price.toFixed(0)} ${text('ma006')}`}
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
  const icon = (key: string) => `/assets/icons/${state.settings.theme}/${dictionaries.Images[key]}.webp`;

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

      const price =
        upgrade.basePrice *
        (upgrade.priceIncrement ?? 1.2) **
          (1 + (state.upgradeCounts[upgrade.id] ?? 0));

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
          <p className="cps">{state.cps.toFixed(1)} {text('ma001')}</p>
          <h1>{state.applications.toFixed(0)}</h1>
          <p>{text('ma000')}</p>
          <button onClick={() => dispatch({ trigger: 'click' })}>{text('ma002')}</button>
        </div>
        <div id="upgradeSwitch">
          <button onClick={() => displayUpgradePath('active')}>{text('ma003')}</button>
          <button onClick={() => displayUpgradePath('pasive')}>{text('ma004')}</button>
          <button disabled>{text('ma005')}</button>
          {/* <button>x1</button> */}
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