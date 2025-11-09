import "./Upgrade.css";

interface UpgradeProps {
  src: string,
  title: string,
  price: number,
  count: number,
  hidden: boolean,
  notAffordable: boolean
}

export default function Upgrade({ src, title, price, count, hidden, notAffordable } : UpgradeProps) {
  return (
    <button
      className={
        "upgrade " +
        (hidden ? "hidden " : "") +
        (notAffordable ? "not-affordable" : "")
      }
    >
      <img src={src} />
      <div>
        <p className="upgradeName">{title}</p>
        <p className="upgradePrice">{price}</p>
        <span>{count}</span>
      </div>
    </button>
  );
}
