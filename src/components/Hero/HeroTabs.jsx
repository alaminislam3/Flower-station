export default function HeroTabs({ active, setActive }) {
  const tabs = ["AUTUMN", "GIFTING", "CHRISTMAS","SALE FLOWERS"];

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20 whitespace-nowrap">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`text-white text-[16px] tracking-wide transition-all 
            ${active === index ? "underline underline-offset-4" : "font-medium"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
