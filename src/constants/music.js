import eb_cover from '../pages/beats/assets/beats/8_Bit.png';
import ar_cover from '../pages/beats/assets/beats/Argentina.png';
import bi_cover from '../pages/beats/assets/beats/Birds.png';
import cr_cover from '../pages/beats/assets/beats/Crispy.png';
import de_cover from '../pages/beats/assets/beats/Dexter.png';
import di_cover from '../pages/beats/assets/beats/Discover.png';
import gs_cover from '../pages/beats/assets/beats/Gangsta_Symphony.png';
import gu_cover from '../pages/beats/assets/beats/Gunslinger.png';
import la_cover from '../pages/beats/assets/beats/Laughter.png';
import lc_cover from '../pages/beats/assets/beats/Luke_Cage.png';
import mb_cover from '../pages/beats/assets/beats/MakeBelieve.png';
import pm_cover from '../pages/beats/assets/beats/Pacman.png';
import pt_cover from '../pages/beats/assets/beats/Primetime.png';
import ta_cover from '../pages/beats/assets/beats/Tattoos.png';
import tm_cover from '../pages/beats/assets/beats/TMNT.png';
import vi_cover from '../pages/beats/assets/beats/Virtuoso.jpg';
import hj_cover from '../pages/beats/assets/beatTapes/HollyJolly.png';
import ma_cover from '../pages/projects/assets/Maestro.PNG';
import zr_cover from '../pages/projects/assets/Zaes_Room.PNG';
import bt_cover from '../pages/projects/assets/Big_Thangs2.JPG';
import ep_cover from '../pages/projects/assets/Evil_Plan2.png';
import fl_cover from '../pages/projects/assets/Fast_Lane.png';

const KEY_SIGS = {
  AMAJOR: 'A Major',
  AMINOR: 'A Minor',
  ASHARPMAJOR: 'A#/Bb Major',
  ASHARPMINOR: 'A#/Bb Minor',
  BMAJOR: 'B Major',
  BMINOR: 'B Minor',
  CMAJOR: 'C Major',
  CMINOR: 'C Minor',
  CSHARPMAJOR: 'C#/Db Major',
  CSHARPMINOR: 'C#/Db Minor',
  DMAJOR: 'D Major',
  DMINOR: 'D Minor',
  DSHARPMAJOR: 'D#/Eb Major',
  DSHARPMINOR: 'D#/Eb Minor',
  EMAJOR: 'E Major',
  EMINOR: 'E Minor',
  FMAJOR: 'F Major',
  FMINOR: 'F Minor',
  FSHARPMAJOR: 'F#/Gb Major',
  FSHARPMINOR: 'F#/Gb Minor',
  GMAJOR: 'G Major',
  GMINOR: 'G Minor',
  GSHARPMAJOR: 'G#/Ab Major',
  GSHARPMINOR: 'G#/Ab Minor',
}

export const albums = [
  {
    title: "Maestro",
    cover: ma_cover,
  },
  {
    title: "Zae's Room",
    cover: zr_cover,
  },
];

export const beats = [
  {
    title: "8-Bit",
    cover: eb_cover,
    id: "8-bit",
    youtube: 'qTwnXDdWcSw',
    keySignature: KEY_SIGS.DSHARPMINOR,
  },
  {
    title: "Argentina",
    cover: ar_cover,
    id: "argentina",
    youtube: 'uJfq9FYBjKw',
    keySignature: KEY_SIGS.FSHARPMAJOR,
  },
  {
    title: "Birds",
    cover: bi_cover,
    id: "birds",
    youtube: 'K0z40_Pm3uw',
    keySignature: KEY_SIGS.FSHARPMINOR,
  },
  {
    title: "Crispy",
    cover: cr_cover,
    id: "crispy",
    youtube: 'H6KaS-izPIc',
    keySignature: KEY_SIGS.DSHARPMINOR,
  },
  {
    title: "Dexter",
    cover: de_cover,
    id: "dexter",
    youtube: 'TCnoe1IIqL4',
    keySignature: KEY_SIGS.FSHARPMINOR,
  },
  {
    title: "Discover",
    cover: di_cover,
    id: "discover",
    youtube: 'e-66HcQUZYM',
    keySignature: KEY_SIGS.GMINOR,
  },
  {
    title: "Gangsta Symphony",
    cover: gs_cover,
    id: "gangsta-symphony",
    youtube: 'qdNes5V1UEQ',
    keySignature: KEY_SIGS.DMINOR,
  },
  {
    title: "Gunslinger",
    cover: gu_cover,
    id: "gunslinger",
    youtube: '_V-SCWio3ao',
    keySignature: KEY_SIGS.GMINOR,
  },
  {
    title: "Laughter",
    cover: la_cover,
    id: "laughter",
    youtube: 'AbMocRL-RsA',
    keySignature: KEY_SIGS.FMAJOR,
  },
  {
    title: "Luke Cage",
    cover: lc_cover,
    id: "luke-cage",
    youtube: 'sqtcQOwGFzY',
    keySignature: KEY_SIGS.ASHARPMINOR,
  },
  {
    title: "Make Believe",
    cover: mb_cover,
    id: "make-believe",
    youtube: 'N1VzywunJAA',
    keySignature: KEY_SIGS.AMAJOR,
  },
  {
    title: "Pacman",
    cover: pm_cover,
    id: "pacman",
    youtube: 'OTKCNJH9_ig',
    keySignature: KEY_SIGS.DMINOR,
  },
  {
    title: "Primetime",
    cover: pt_cover,
    id: "primetime",
    youtube: 'EqJCc4jFvhg',
    keySignature: KEY_SIGS.EMINOR,
  },
  {
    title: "Tattoos",
    cover: ta_cover,
    id: "tattoos",
    youtube: 'P3nTHd8IOSM',
    keySignature: KEY_SIGS.FMINOR,
  },
  {
    title: "TMNT",
    cover: tm_cover,
    id: "tmnt",
    youtube: 'duhUAWe79rg',
    keySignature: KEY_SIGS.DSHARPMINOR,
  },
  {
    title: "Virtuoso",
    cover: vi_cover,
    id: "virtuoso",
    youtube: 'A1jwLZbWVBQ',
    keySignature: KEY_SIGS.CMINOR,
  },
];

export const beatTapes = [
  {
    title: "The Holly Jolly Tape",
    cover: hj_cover,
  },
];

export const credits = [
  {
    title: "Safari",
    artist: "FUZE",
    link: "https://soundcloud.com/igotwoezz/safari-feat-subzero-prod",
  },
  {
    title: "Toonami",
    artist: "Community Service",
    link: "https://soundcloud.com/community-service/toonami",
  },
];

export const singles = [
  {
    title: "Fast Lane",
    cover: fl_cover,
    color: '#F4750E',
    features: ["CoreyArnell", "FUZE"],
    description: "No microphones were burned in the making of this recording. Please leave this type of rapping to the professionals and do not try this at home.",
    releaseDate: "03.01.2019",
    spotify: "0zZMvZ0BBAILDipQln4i8O",
    apple: "fast-lane-supersonic-freestyle-feat-coreyarnell-fuze/1476867846",
    bandcamp: "389561544",
    soundcloud: "659974718",
    songLink: "1476867847",
    id: "fast-lane",
  },
  {
    title: "Big Thangs",
    cover: bt_cover,
    color: '#FF0008',
    features: ["CoreyArnell", "May"],
    description: "The first single from Zae's Room. A banger if there ever was one. CoreyArnell is Wes Clinton. May is...well, May. If you're looking for that song to have your girl twerk to, you've come to the right place.",
    releaseDate: "03.06.2020",
    spotify: "1X6m8uL9AoGdFEMHtaUnso",
    apple: "big-thangs-feat-coreyarnell-may/1502027667",
    bandcamp: "1119170738",
    soundcloud: "771594130",
    songLink: "1502027668",
    id: "big-thangs",
  },
  {
    title: "Evil Plan",
    cover: ep_cover,
    color: '#30FFB9',
    features: ["LouieV T", "FUZE"],
    description: "The second single from Zae's Room. This beat took 20 minutes to make, and it's still the hardest song you might hear in your life. Trust me, this will get the party going.",
    releaseDate: "04.10.2020",
    spotify: "1fZHvbksavmt5XEtAmTBCR",
    apple: "evil-plan-feat-louiev-t-fuze-single/1506525081",
    bandcamp: "2329859596",
    soundcloud: "795101182",
    songLink: "1506525082",
    id: "evil-plan",
  },
];