// React
import { useReducer, useEffect } from "react"

// Typescript 
import type { GameAction, GameState, Dictionaries, UpgradeObject } from '../types/types'

// Components
import Upgrade from "./Upgrade"
import Screen from "./Screen"
import optimizeNumber from "./optimizeNumber"

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
        price={`${oNum(price)} ${text('ma006')}`}
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
  const oNum = (num: number) => optimizeNumber(num, state.settings.scientificMode);

  const displayUpgradePath = (path : string) => {
    document.querySelectorAll('div.upgradepath').forEach(div => div.classList.remove('selected'));
    document.getElementById(`${path}Path`)?.classList.add('selected')
  }

  const handleMainClick = () => {
    const amount = 1 * state.multiplier;

    // Get button's position
    const rect = document
      .getElementById("mainClicker")!
      .getBoundingClientRect();

    // Position to the side of the button (with some randomness)
    const goingRight = Math.random() - 0.5 < 0 ? true : false;
    const randomOffsetA = Math.random() * 80 - 40;
    const randomOffsetB = Math.random() * 60 - 30;
    const y = rect.top + rect.height / 2 + randomOffsetA; // Middle of button ± random

    const x = goingRight
      ? rect.right + 10 + randomOffsetB
      : rect.left - 30 + randomOffsetB;

    // Create floating text element
    const floatingText = document.createElement("p");
    floatingText.textContent = `+${oNum(amount)}`;
    floatingText.className = goingRight
      ? "click-feedback going-right"
      : "click-feedback going-left";
    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;

    document.body.appendChild(floatingText);

    setTimeout(() => floatingText.remove(), 1000);

    dispatch({ trigger: "click" });
  };
  
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
          ((state.upgradeCounts[upgrade.id] ?? 0));

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
      <Screen />
      <main id="panel">
        <div id="stats">
          <p className="cps">{oNum(state.cps)} {text('ma001')}</p>
          <h1>{oNum(state.applications)}</h1>
          <p>{text('ma000')}</p>
          <button id="mainClicker" onClick={handleMainClick}>{text('ma002')}</button>
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