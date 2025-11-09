import "./Upgrade.css";

interface UpgradeProps {
  src: string,
  title: string,
  price: number,
  count: number,
  hidden: boolean,
  notAffordable: boolean,
  // onClick: (effects: Record<string, number>) => void
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Upgrade({ src, title, price, count, hidden, notAffordable, onClick } : UpgradeProps) {
  return (
    <button
      className={
        "upgrade " +
        (hidden ? "hidden " : "") +
        (notAffordable ? "not-affordable" : "")
      }
      onClick={!notAffordable ? onClick : undefined}
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
