import './LogoStrip.css';

type LogoStripProps = {
  logos: Array<{
    label: string;
    className?: string;
    src?: string;
    enabled?: boolean;
  }>;
};

export function LogoStrip({ logos }: LogoStripProps) {
  const visibleLogos = logos.filter((logo) => logo.enabled !== false);

  return (
    <div className="logo-strip" aria-label="Trusted organizations">
      <div className="logo-strip__track">
        {[0, 1, 2].map((groupIndex) => (
          <div className="logo-strip__group" aria-hidden={groupIndex === 1} key={groupIndex}>
            {visibleLogos.map((logo) => (
              <div className={`logo-strip__item ${logo.className ?? ''}`.trim()} key={`${logo.label}-${groupIndex}`}>
                {logo.src ? <img src={logo.src} alt={logo.label} /> : logo.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
