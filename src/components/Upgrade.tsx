import "./Upgrade.css";

interface UpgradeProps {
  src: string,
  title: string,
  price: number,
  count: number,
  hidden: boolean,
  affordable: boolean
}

export default function Upgrade({ src, title, price, count } : UpgradeProps) {
  return (
    <button className="upgrade">
      <img src={src} />
      <div>
        <p className="upgradeName">{ title }</p>
        <p className="upgradePrice">{ price }</p>
        <span>{ count }</span>
      </div>
    </button>
  );
}
