import "./Upgrade.css";

interface UpgradeProps {
  src: string,
  title: string,
  price: string,
  count: number,
  hidden: boolean,
  notAffordable: boolean,
  // onClick: (effects: Record<string, number>) => void
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Upgrade({ src, title, price, count, hidden, notAffordable, onClick } : UpgradeProps) {
  let titleContent : React.ReactNode = title;
  if (title.includes('/')) {
    const [title0, title1] = title.split('/');
    titleContent = ( 
      <>
        <span className="title-count0">{title0}</span>
        <span className="title-count1">{title1}</span> 
      </>
    )
  } 

  return (
    <button
      className={
        "upgrade " +
        (count >= 1 ? '' : 'new ') +
        (hidden ? "hidden " : "") +
        (notAffordable ? "not-affordable" : "")
      }
      onClick={!notAffordable ? onClick : undefined}
    >
      <img src={src} />
      <div>
        <p className="upgradeName">{titleContent}</p>
        <p className="upgradePrice">{price}</p>
        {count !== undefined && <span className="count">{count}</span>}
      </div>
    </button>
  );
}
