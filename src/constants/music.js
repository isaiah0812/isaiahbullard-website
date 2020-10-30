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
import ma_cover from '../pages/projects/assets/albums/Maestro.png';
import zr_cover from '../pages/projects/assets/albums/Zaes_Room.png';
import bt_cover from '../pages/projects/assets/singles/Big_Thangs.jpg';
import ep_cover from '../pages/projects/assets/singles/Evil_Plan.png';
import fl_cover from '../pages/projects/assets/singles/Fast_Lane.png';

/**
 * All available key signatures for beats.
 * @constant
 * @name KEY_SIGS
 * @type {object}
 */
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

/**
 * Beats that are not available on a beat tape.
 * @constant
 * @name beats
 * @type {object[]}
 */
export const beats = [
  {
    title: "8-Bit",
    cover: eb_cover,
    id: "8-bit",
    youtube: 'qTwnXDdWcSw',
    keySignature: KEY_SIGS.DSHARPMINOR,
    tempo: 87,
    sold: false,
  },
  {
    title: "Argentina",
    cover: ar_cover,
    id: "argentina",
    youtube: 'uJfq9FYBjKw',
    keySignature: KEY_SIGS.FSHARPMAJOR,
    tempo: 140,
    sold: false,
  },
  {
    title: "Birds",
    cover: bi_cover,
    id: "birds",
    youtube: 'K0z40_Pm3uw',
    keySignature: KEY_SIGS.FSHARPMINOR,
    tempo: 141,
    sold: false,
  },
  {
    title: "Crispy",
    cover: cr_cover,
    id: "crispy",
    youtube: 'H6KaS-izPIc',
    keySignature: KEY_SIGS.DSHARPMINOR,
    tempo: 160,
    sold: false,
  },
  {
    title: "Dexter",
    cover: de_cover,
    id: "dexter",
    youtube: 'TCnoe1IIqL4',
    keySignature: KEY_SIGS.FSHARPMINOR,
    tempo: 149,
    sold: false,
  },
  {
    title: "Discover",
    cover: di_cover,
    id: "discover",
    youtube: 'e-66HcQUZYM',
    keySignature: KEY_SIGS.GMINOR,
    tempo: 140,
    sold: false,
  },
  {
    title: "Gangsta Symphony",
    cover: gs_cover,
    id: "gangsta-symphony",
    youtube: 'qdNes5V1UEQ',
    keySignature: KEY_SIGS.DMINOR,
    tempo: 82,
    sold: false,
  },
  {
    title: "Gunslinger",
    cover: gu_cover,
    id: "gunslinger",
    youtube: '_V-SCWio3ao',
    keySignature: KEY_SIGS.GMINOR,
    tempo: 81,
    sold: false,
  },
  {
    title: "Laughter",
    cover: la_cover,
    id: "laughter",
    youtube: 'AbMocRL-RsA',
    keySignature: KEY_SIGS.FMAJOR,
    tempo: 92,
    sold: false,
  },
  {
    title: "Luke Cage",
    cover: lc_cover,
    id: "luke-cage",
    youtube: 'sqtcQOwGFzY',
    keySignature: KEY_SIGS.ASHARPMINOR,
    tempo: 86,
    sold: false,
  },
  {
    title: "Make Believe",
    cover: mb_cover,
    id: "make-believe",
    youtube: 'N1VzywunJAA',
    keySignature: KEY_SIGS.AMAJOR,
    tempo: 161,
    sold: false,
  },
  {
    title: "Pacman",
    cover: pm_cover,
    id: "pacman",
    youtube: 'OTKCNJH9_ig',
    keySignature: KEY_SIGS.DMINOR,
    tempo: 182,
    sold: false,
  },
  {
    title: "Primetime",
    cover: pt_cover,
    id: "primetime",
    youtube: 'EqJCc4jFvhg',
    keySignature: KEY_SIGS.EMINOR,
    tempo: 97,
    sold: false,
  },
  {
    title: "Tattoos",
    cover: ta_cover,
    id: "tattoos",
    youtube: 'P3nTHd8IOSM',
    keySignature: KEY_SIGS.FMINOR,
    tempo: 85,
    sold: false,
  },
  {
    title: "TMNT",
    cover: tm_cover,
    id: "tmnt",
    youtube: 'duhUAWe79rg',
    keySignature: KEY_SIGS.DSHARPMINOR,
    tempo: 96,
    sold: false,
  },
  {
    title: "Virtuoso",
    cover: vi_cover,
    id: "virtuoso",
    youtube: 'A1jwLZbWVBQ',
    keySignature: KEY_SIGS.CMINOR,
    tempo: 124,
    sold: false,
  },
];

/**
 * All song production credits for the Projects page
 * @constant
 * @name credits
 * @type {object[]}
 */
export const credits = [
  {
    id: "toonami-communityservice",
    title: "Toonami",
    artist: "Community Service",
    link: "https://soundcloud.com/community-service/toonami",
  },
];

/**
 * Albums and beat tapes.
 * @constant
 * @name projects
 * @type {object[]}
 */
export const projects = [
  {
    title: "Maestro",
    cover: ma_cover,
    id: "maestro",
    releaseDate: "08.10.2018",
    beatTape: false,
    songList: [
      'Fantasies and Fedoras',
      'Ding-Dong',
      'Sneakin Around in A Harmonic',
      'Auxiliary',
      'One in the Same',
      'Gametime',
      'Monroe',
      'Sunday (Interlude)',
      'S.A.M.',
      'Prom Date',
      'To Be Different',
      'Gilleland'
    ],
    description: '/descriptions/Maestro.txt',
    albumCredits: {
      albumId: 'maestro',
      producedBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      mixedBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      masteredBy: [{name: 'CoreyArnell', username: 'arnellcorey', instagram: true}],
      artworkBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      songwriters: [
        'Isaiah Solomon Bullard',
        'Bobby Bullard',
        'Jason Allen Link'
      ],
      specialThanks: [
        {name: 'Jason Link'},
        {name: 'Bobby Bullard'},
      ]
    },
    spotify: '3vbvMwip1WpplVodTHHOrb',
    apple: 'maestro/1422921065',
    bandcamp: '2239082049',
    soundCloud: '580055703',
    songLink: '1422921065',
  },
  {
    title: "The Holly Jolly Tape",
    cover: hj_cover,
    id: "the-holly-jolly-tape",
    releaseDate: '12.27.2019',
    beatTape: true,
    songList: [
      'Dreamers',
      'Mean',
      'Tina',
      'Grandma',
      'Take a Look At Me',
      'Slip \'N Slide',
      'Snitch',
      'Tingly',
      'Lullaby',
      'Be'
    ],
    description: '/descriptions/The_Holly_Jolly_Tape.txt',
    albumCredits: {
      albumId: 'the-holly-jolly-tape',
      samples: [
        'I\'ll Be Home For Christmas - Michael Bublé',
        'You\'re A Mean One, Mr. Grinch - Thurl Ravenscroft',
        'Feliz Navidad - José Feliciano',
        'Grandma Got Run Over By a Reindeer - Elmo & Patsy',
        'It\'s Beginning to Look A Lot Like Christmas - Bing Crosby',
        'It\'s Beginning to Look A Lot Like Christmas - Perry Como & The Fontane Sisters',
        'Santa Baby - Ariana Grande',
        'I Saw Mommy Kissing Santa Claus - The Jackson 5',
        'Sleigh Ride - Ella Fitzgerald',
        'Merry Christmas, Darling - The Carpenters',
        'This Christmas - Donny Hathaway'
      ],
      producedBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      mixedBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      masteredBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      artworkBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
    },
    bandcamp: '402273398',
    soundCloud: '662403879',
    youTube: 'OLAK5uy_lHvgQeq70ANHH58v9aFgQ_aKPF85iPLrw',
    beats: [
      {
        title: "Dreamers",
        beatTapeId: 'the-holly-jolly-tape',
        id: "dreamers",
        keySignature: KEY_SIGS.FMAJOR,
        tempo: 93,
        sold: false,
      },
      {
        title: "Mean",
        beatTapeId: 'the-holly-jolly-tape',
        id: "mean",
        keySignature: KEY_SIGS.GMINOR,
        tempo: 95,
        sold: false,
      },
      {
        title: "Tina",
        beatTapeId: 'the-holly-jolly-tape',
        id: "tina",
        keySignature: KEY_SIGS.CMINOR,
        tempo: 120,
        sold: false,
      },
      {
        title: "Grandma",
        beatTapeId: 'the-holly-jolly-tape',
        id: "grandma",
        keySignature: KEY_SIGS.EMINOR,
        tempo: 142,
        sold: false,
      },
      {
        title: "Take A Look At Me",
        beatTapeId: 'the-holly-jolly-tape',
        id: "take-a-look-at-me",
        keySignature: KEY_SIGS.EMAJOR,
        tempo: 88,
        sold: false,
      },
      {
        title: "Slip 'N Slide",
        beatTapeId: 'the-holly-jolly-tape',
        id: "slip-n-slide",
        keySignature: KEY_SIGS.CSHARPMAJOR,
        tempo: 98,
        sold: false,
      },
      {
        title: "Snitch",
        beatTapeId: 'the-holly-jolly-tape',
        id: "snitch",
        keySignature: KEY_SIGS.DMAJOR,
        tempo: 116,
        sold: false,
      },
      {
        title: "Tingly",
        beatTapeId: 'the-holly-jolly-tape',
        id: "tingly",
        keySignature: KEY_SIGS.BMAJOR,
        tempo: 97,
        sold: false,
      },
      {
        title: "Lullaby",
        beatTapeId: 'the-holly-jolly-tape',
        id: "lullaby",
        keySignature: KEY_SIGS.AMAJOR,
        tempo: 90,
        sold: false,
      },
      {
        title: "Be",
        beatTapeId: 'the-holly-jolly-tape',
        id: "be",
        keySignature: KEY_SIGS.GMAJOR,
        tempo: 89,
        sold: false,
      },
    ],
  },
  {
    title: "Zae's Room",
    cover: zr_cover,
    id: "zaes-room",
    releaseDate: "11.20.2020",
    beatTape: false,
    songList: [
      'Welcome To the Show (feat. FUZE)',
      'Toy Box (feat. Mark Pheonix, CoreyArnell & Phri)',
      'Big Thangs (feat. CoreyArnell & May)',
      'Supervillain (feat. 101 & CoreyArnell)',
      'Evil Plan (feat. LouieV T & FUZE)',
      'Brainstorm (feat. De\'John Linward & FUZE)',
      'KKK (feat. CoreyArnell)',
      'Life Update (Skit)',
      'Famous Friends (feat. May, Chris Winston & De\'John Linward)',
      'Smoove (feat. Bluu Suede & Rell Gibson)',
      'Good Luck Charm (feat. FUZE)',
      'By Design (feat. Community Service)'
    ],
    description: '/descriptions/Zaes_Room.txt',
    albumCredits: {
      albumId: 'zaes-room',
      features: [
        {name: 'FUZE', username: 'igotwoezz', instagram: true},
        {name: 'Mark Pheonix', username: 'markpheonix', instagram: true},
        {name: 'CoreyArnell', username: 'arnellcorey', instagram: true},
        {name: 'Phri', username: 'aintshitphri', instagram: true},
        {name: 'May'},
        {name: '101', username: '_blessyasoul', instagram: true},
        {name: 'LouieV T', username: 'louiev.t', instagram: true},
        {name: 'De\'John Linward', username: 'dejohnlinward', instagram: true},
        {name: 'Chris Winston', username: 'chriswinston', instagram: true},
        {name: 'Bluu Suede', username: 'bluusuede', instagram: true},
        {name: 'Rell Gibson', username: 'Kingdoughmane', instagram: false},
        {name: 'Community Service', username: 'communtyservce', instagram: true}
      ],
      songwriters: [
        'Bobby Terrell Bullard',
        'Corey Arnell Bullard',
        'Isaiah Solomon Bullard',
        'Jerry "JC" Connerly III',
        'Larell Gibson',
        'Mason Nooks',
        'Mark Pheonix',
        'Scott Phri',
        'De\'John Linward Tinsley',
        'Terrance Ari Walker',
        'Zachary Alexander Washington',
        'Uriel Christopher Winston',
      ],
      producedBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      mixedBy: [
        {name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}, 
        {name: 'Lucky Genius', username: 'lucky777genius', instagram: true}, 
        {name: 'Bluu Suede', username: 'bluusuede', instagram: true}
      ],
      masteredBy: [{name: 'Isaiah Bullard', username: 'zaemadethis', instagram: true}],
      artworkBy: [{name: 'SHOKKA', username: 'shokkayo', instagram: true}],
      specialThanks: [
        {name: 'Isaac Bullard', username: 'ibullyy', instagram: true},
        {name: 'Sabrina Bell', username: 'slbell1129', instagram: true},
        {name: 'Isabella Valenzuela-Huefner', username: 'bbella_v', instagram: true},
        {name: 'Ryan Hill', username: 'literally_ryanhill', instagram: true},
        {name: 'Joshua Pane', username: 'joshua.pane', instagram: true},
        {name: 'Michael Coffey', username: 'michael_coffey70', instagram: true},
        {name: 'Schaeffer Duncan', username: 'kingschaeffer', instagram: true},
        {name: 'Troy Robb', username: 'troyrobb25', instagram: true},
      ]
    },
    spotify: '6VdEQ3Hb9JLlFoM5mGMOCz',
    apple: 'superb-ep/1475852445',
    bandcamp: '1413079885',
    soundCloud: '662403879',
    songLink: '1475852445',
  },
];

/**
 * All available singles for the projects page
 * @constant
 * @name singles
 * @type {object[]}
 */
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