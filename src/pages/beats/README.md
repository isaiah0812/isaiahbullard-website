# Beats Page (zaemadethis.com/beats)
## Overview
The Beats Page displays a catalog of available [Beats](https://github.com/isaiah0812/isaiahbullard-website#beat) for sale from Isaiah Bullard, along with [Beat Tapes](https://github.com/isaiah0812/isaiahbullard-website#beat-tape) that are available for free listening. Each beat that is not in a Beat Tape is displayed with a [BeatDisplay](#beat-display) component and should have a YouTube video uploaded to Isaiah Bullard's YouTube channel.

### Beats
A beat can be defined [here](https://github.com/isaiah0812/isaiahbullard-website#beat). Beats are loaded from the `beats` array in [`../../constants/music.js](../../constants/music.js). An example `Beat` object can be found below.

```js
{
  title: "Beat Title",
  cover: "beat_cover.png",
  id: "beat-title",
  youtube: 'ERgjE4IoApr',
  keySignature: "Bb Minor",
  tempo: 120,
  sold: false,
}
```
```js
{
  title: "Beat From Beat Tape",
  beatTapeId: 'beat-tape-id',
  id: "beat-from-beat-tape",
  keySignature: "C Major",
  tempo: 90,
  sold: true,
}
```

`title` - The of the Beat.

`cover` - A URI to the cover art for the Beat. This is not included within a Beat on an Beat Tape, as the `cover` of the Beat Tape is used where necessary.

`beatTapeId` - The id of the Beat Tape that a beat is a part of the track listing. Only needed if a BEat is a part of a Beat Tape.

`id` - The id of the Beat object. The format for this id is the lowercase `title` with hyphens in the place of spaces (i.e. if `title` === "To Be Different", then `id` === "to-be-different").

`youtube` - The unique identifier of the YouTube video where the beat is uploaded on Isaiah Bullard's YouTube channel. See ["Finding a Beat on YouTube"](#finding-a-beat-on-youtube) for more information on how to find this value. This is not included within a beat on a Beat Tape.

`keySignature` - The key signature of the beat. All possible key signatures are kept as constants in the `KEYSIGS` array in [`../../constants/music.js`](../../constants/music.js). 

`tempo` - The numerical value of the tempo of the beat.

`sold` - A boolean value determining whether or not the beat has been sold.

### Beat Tape
A Beat Tape is a [Project](https://github.com/isaiah0812/isaiahbullard-website#project) that is released for free listening. These projects contain only Beats, and these Beats are listed for sale on the site, just as any other beat from the Beats Page. Beat Tapes are loaded from the `projects` array in [../../constants/music.js](../../constants/music.js). An example `BeatTape` object can be found below, where a `BeatTape` object is an extension of a `Project` object.

```js
{
  title: "Beat Tape Title",
  cover: "beatTape_cover.png",
  id: "beat-tape-title",
  releaseDate: 'mm.dd.yyyy',
  beatTape: true,
  songList: [
    'Beat 1',
    'Beat 2',
    'Beat 3',
    'Beat 4',
    'Beat 5',
    'Beat 6',
    'Beat 7',
    'Beat 8',
    'Beat 9',
    'Beat 10'
  ],
  description: '/descriptions/Beat_Tape_Title.txt',
  albumCredits: {
    albumId: 'beat-tape-id',
    samples: [
      'Sample 1 - Artist 1',
      'Sample 2 - Artist 2',
      'Sample 3 - Artist 3',
      'Sample 4 - Artist 4',
      'Sample 5 - Artist 5',
      'Sample 6 - Artist 6',
      'Sample 7 - Artist 7',
      'Sample 8 - Artist 8',
      'Sample 9 - Artist 9',
      'Sample 10 - Artist 10',
    ],
    producedBy: [{name: 'Producer 1', username: 'producer1Username', instagram: true}],
    mixedBy: [{name: 'Engineer 1', username: 'engineer1Username', instagram: false}],
    masteredBy: [{name: 'Engineer 2'}],
    artworkBy: [{name: 'Artist 1', username: 'artist1Username', instagram: true}],
  },
  bandcamp: '123456789',
  soundCloud: '987654321',
  youTube: 'OGBJ567_thisIsASuperLongIDThatHasA_LotOfStuff',
  beats: [
    {
      title: "Beat 1",
      beatTapeId: 'beat-tape-title',
      id: "beat-1",
      keySignature: "F Major",
      tempo: 160,
      sold: false,
    },
    {
      title: "Beat 2",
      beatTapeId: 'beat-tape-title',
      id: "beat-2",
      keySignature: "F Major",
      tempo: 160,
      sold: true,
    },
    {
      title: "Beat 3",
      beatTapeId: 'beat-tape-title',
      id: "beat-3",
      keySignature: "F Major",
      tempo: 160,
      sold: false,
    },
    {
      title: "Beat 4",
      beatTapeId: 'beat-tape-title',
      id: "beat-4",
      keySignature: "F Major",
      tempo: 160,
      sold: true,
    },
    {
      title: "Beat 5",
      beatTapeId: 'beat-tape-title',
      id: "beat-5",
      keySignature: "F Major",
      tempo: 160,
      sold: false,
    },
    {
      title: "Beat 6",
      beatTapeId: 'beat-tape-title',
      id: "beat-6",
      keySignature: "F Major",
      tempo: 160,
      sold: true,
    },
    {
      title: "Beat 7",
      beatTapeId: 'beat-tape-title',
      id: "beat-7",
      keySignature: "F Major",
      tempo: 160,
      sold: false,
    },
    {
      title: "Beat 8",
      beatTapeId: 'beat-tape-title',
      id: "beat-8",
      keySignature: "F Major",
      tempo: 160,
      sold: true,
    },
    {
      title: "Beat 9",
      beatTapeId: 'beat-tape-title',
      id: "beat-9",
      keySignature: "F Major",
      tempo: 160,
      sold: false,
    },
    {
      title: "Beat 10",
      beatTapeId: 'beat-tape-title',
      id: "beat-10",
      keySignature: "F Major",
      tempo: 160,
      sold: true,
    },
  ],
}
```

`title` - The title of the Project.

`cover` - A URI leading to the cover art for the Project.

`id` - The id of the `Project` object. The format for this id is the lowercase `title` with hyphens in the place of spaces (i.e. if `title` === "The Holly Jolly Tape", then `id` === "the-holly-jolly-tape").

`releaseDate` - A `string` with the release date of the project. The format for a `releaseDate` is `mm.dd.yyyy`.

`beatTape` - A `boolean` value indicating if a `Project` object is a `BeatTape` or not. If `true` the project is a `BeatTape` object. The object is an `Album` object otherwise.

`songList` - An array of `string` values with the track listing of the Project.

`description` - A URI leading to the a `.txt` file where the description of the Project is located.

`albumCredits` - See the [Album Credits subsection](#album-credits) in the [Project Page section](#project-page)

`bandcamp` - The unique identifier of the Bandcamp entry where the Beat Tape is uploaded on Isaiah Bullard's Bandcamp page. See ["Finding a Beat Tape"](#finding-a-beat-tape) for more information on how to find this value.

`soundcloud` - The unique identifier of the SoundCloud entry where the Beat Tape is uploaded on Isaiah Bullard's Soundcloud account. See ["Finding a Beat Tape"](#finding-a-beat-tape) for more information on how to find this value.

`youtube` - The unique identifier of the YouTube playlist where the Beat Tape is uploaded on Isaiah Bullard's YouTube channel. See ["Finding a Beat Tape"](#finding-a-beat-tape) for more information on how to find this value.

`beats` - An array of `Beat` objects corresponding with the track listing of the Beat Tape. This array is the same length as the `songList` array, and each `Beat` object's `title` property should correspond to each entry, at the object's index, in the `songList` array.

---
## Finding a Beat on YouTube
Each Beat object contains a `youtube` property, where the value is the id of the YouTube video for the Beat. This value is used in for the `iframe` in the [`BeatDisplay`](#beat-display) component. To find the id of a beat, follow these steps:
1. Go to [Isaiah Bullard's YouTube Channel](https://www.youtube.com/channel/UCMMDfi3G5xXLj7vVqq9yr9w/videos).
1. Go to the "Videos" tab.
1. Find the video with the Beat name and click the video.
1. Copy the id from the URL, located after the `v=` in the url. In the URL below, the **bold** text is the id.
    * _https://www.youtube.com/watch?v=**TCnoe1IIqL4**_
1. Paste the value of the id into the `youtube` property of the Beat object.

---
## Finding a Beat Tape
Each Beat Tape object contains the `bandcamp`, `soundcloud`, and `youtube` properties. Each property is used with the `iframe` located in the `BeatTapePlayer` component.

### Bandcamp
The `bandcamp` property's value is the id of the `iframe` provided by bandcamp.com. To find the `bandcamp` property value, follow these steps:
1. Visit [Isaiah Bullard's Bandcamp Page](https://isaiahbullard.bandcamp.com)
1. Select the desired Beat Tape.
1. Under the cover art on the page, select the button that says "Share/Embed".
1. Select "Embed this album".
1. Select any size displayed. It doesn't matter because there's only one used in the implementation of the `BeatTapePlayer` component.
1. At the top left of the display, click the `iframe` code provided by Bandcamp. Then, copy the code (`Ctrl+C` for Windows, `Cmd+C` for MacOS).
1. Paste the embed code any where you'd like. You only need it to copy the id from the code.
1. Copy the id found after `album=` in the `src` attribute of the `iframe`. In the URL below, the **bold** text is the id.
    * _https://bandcamp.com/EmbeddedPlayer/album=**402273398**/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/_
1. Paste the id from the URL to the `bandcamp` property of the desired `BeatTape` object.

### SoundCloud
The `soundcloud` property's value is the id of the `iframe` provided by soundcloud.com.
1. Visit [Isaiah Bullard's SoundCloud Page](https://soundcloud.com/isaiah_bullard).
1. Select the "Playlists" tab.
1. Select the "Share" Button under the desired Beat Tape.
1. Select the "Embed" tab.
1. Click the `iframe` code provided by SoundCloud in the "Code" section. Then, copy the code (`Ctrl+C` for Windows, `Cmd+C` for MacOS).
1. Paste the embed code any where you'd like. You only need it to copy the id from the code.
1. Copy the id found after `playlists/` in the `src` attribute of the `iframe`. In the URL below, the **bold** text is the id.
    * _https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/**580055703**&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true_
1. Paste the id from the URL to the `soundcloud` property of the desired `BeatTape` object.

### YouTube
The `youtube` property's value is the id of the playlist from YouTube, where the Beat Tape is uploaded.
1. Visit [Isaiah Bullard's YouTube Channel](https://www.youtube.com/channel/UCMMDfi3G5xXLj7vVqq9yr9w).
1. Select the "Playlists" tab.
1. Select the "View Full Playlist" Button under the desired Beat Tape.
1. Copy the id found after `list=` in the URL for that page. In the URL below, the **bold** text is the id.
    * _https://www.youtube.com/playlist?list=**PLFzSU3ciTsEdcdV4b1BQs2YlmdVb8g39h**_
1. Paste the id from the URL to the `youtube` property of the desired `BeatTape` object.

---
## Beat Display
The `BeatDisplay` component displays the [React Bootstrap](https://github.com/isaiah0812/isaiahbullard-website#react-bootstrap) `Accordion` item that contains information on each Beat and a YouTube video for each Beat. Each item includes a Tab with the cover art and title. The hidden `Accordion.Toggle` includes the YouTube video corresponding to each Beat, and the following information about the Beat:
* Title
* Tempo
* Key Signature

Each `BeatDisplay` includes a `Button` leading to the Contact Page, where the user can purchas one or more of the beats.

The `BeatDisplay` component is not used for Beats on a Beat Tape, as the beat tape is already provided with a [Project Page](#project-page) that includes a player where the user can listen to each beat.

---
## Project Page (zaemadethis.com/beats/{beatTape_id})
A [Project Page](https://github.com/isaiah0812/isaiahbullard-website#project-page) displays information regarding a full length Project, which can either be an Album or a Beat Tape. These pages also provide a section to play the project via a selection of [Streaming Platforms](https://github.com/isaiah0812/isaiahbullard-website#streaming-platforms).

[Beat Tapes](https://github.com/isaiah0812/isaiahbullard-website#beat-tape) are released for free listening. Their project pages are loaded via `BeatTape` objects, provided by the `projects` array in [`../../constants/music.js`](../../constants/music.js). Users can stream Beat Tapes as many times as they want, and are free for download via Bandcamp. All of the [Beats](https://github.com/isaiah0812/isaiahbullard-website#beats) on Beat Tapes are for sale as well, and each Beat Tape's Project Page contains a `Button` below the player that leads the user to the [Contact Page](https://github.com/isaiah0812/isaiahbullard-website#contact-page), where they can opt to purchase the individual Beats for commercial use.

### Album Credits
The `albumCredits` property of a `Project` object contains credited individuals for their various contributions to a Project. This object is known as a `AlbumCredits` object.

Beat Tapes may contain the following credits:
* Features
    * A list of artists who appeared alongside Isaiah Bullard
* Samples
    * A list of the [sampled songs](https://github.com/isaiah0812/isaiahbullard-website#sample) used in a Project.
* Producers
    * A list of the music producers who contributed to the project through providing beats or adding to existing beats.
* Mixing Engineers
    * A list of audio engineers that took part in the mixing process of one or more of the entries on the track listing.
* Mastering Engineers
    * A list of audio engineers that took part in the mastering process of one or more of the entries on the track listing.
* Artwork Artist
    * One or more individuals that contributed to the creation of a Project's cover art.

An example `AlbumCredits` object can be found below, where this object would be used in a `BeatTape` object.
```javascript
{
  albumId: 'beat-tape-id',
  samples: [
    'Sample 1 - Artist 1',
    'Sample 2 - Artist 2',
    'Sample 3 - Artist 3',
    'Sample 4 - Artist 4',
    'Sample 5 - Artist 5',
    'Sample 6 - Artist 6',
    'Sample 7 - Artist 7',
    'Sample 8 - Artist 8',
    'Sample 9 - Artist 9',
    'Sample 10 - Artist 10',
  ],
  producedBy: [{name: 'Producer 1', username: 'producer1Username', instagram: true}],
  mixedBy: [{name: 'Engineer 1', username: 'engineer1Username', instagram: false}],
  masteredBy: [{name: 'Engineer 2'}],
  artworkBy: [{name: 'Artist 1', username: 'artist1Username', instagram: true}],
}
```

`albumId` - The `id` property of the parent `Project` object

`samples` - A string array containing the list of samples used a Beat Tape.

`producedBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the producer(s) of a Project.

`mixedBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the mixing engineer(s) of a Project.

`masteredBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the mastering engineer(s) of a Project.

`artworkBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the artist(s) who made the cover art of a Project.