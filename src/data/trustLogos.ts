import anaLogo from '../assets/logos/trust/ana.svg';
import bancoCttLogo from '../assets/logos/trust/banco-ctt.png';
import brisaLogo from '../assets/logos/trust/brisa-autoestradas.svg';
import cgdLogo from '../assets/logos/trust/cgd.svg';
import edpLogo from '../assets/logos/trust/edp.svg';
import eRedesLogo from '../assets/logos/trust/e-redes.svg';
import fidelidadeLogo from '../assets/logos/trust/fidelidade.png';
import ipLogo from '../assets/logos/trust/infraestruturas-portugal.svg';
import luzSaudeLogo from '../assets/logos/trust/luz-saude.svg';
import santanderLogo from '../assets/logos/trust/santander.svg';

export const trustLogos = [
  { label: 'NOS', className: 'logo-strip__item--nos', enabled: false },
  { label: 'EDP', src: edpLogo, className: 'logo-strip__item--edp' },
  { label: 'E-REDES', src: eRedesLogo, className: 'logo-strip__item--eredes' },
  { label: 'Santander', src: santanderLogo, className: 'logo-strip__item--santander' },
  { label: 'CGD', src: cgdLogo, className: 'logo-strip__item--cgd' },
  { label: 'Fidelidade', src: fidelidadeLogo, className: 'logo-strip__item--fidelidade' },
  { label: 'Banco CTT', src: bancoCttLogo, className: 'logo-strip__item--ctt' },
  { label: 'Luz Saude', src: luzSaudeLogo, className: 'logo-strip__item--luz' },
  { label: 'ANA Aeroportos de Portugal', src: anaLogo, className: 'logo-strip__item--ana' },
  { label: 'Brisa', src: brisaLogo, className: 'logo-strip__item--brisa' },
  { label: 'Infraestruturas de Portugal', src: ipLogo, className: 'logo-strip__item--ip' },
];
