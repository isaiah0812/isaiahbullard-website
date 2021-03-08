# Projects Page (zaemadethis.com/projects)
## Overview
The Projects Page is a catalog of all [Albums](https://github.com/isaiah0812/isaiahbullard-website#album), [Singles](https://github.com/isaiah0812/isaiahbullard-website#single), and [Production Credits](https://github.com/isaiah0812/isaiahbullard-website#production-credit) from Isaiah Bullard. Each section contains a different user experience. Clicking on an [`AlbumCard`](#album-card) component leads to an Album's [Project Page](#project-page). Clicking on a [`SingleCard`](#single-card) component opens a `SingleDiv` component that displays information and a `SingleDivPlayer` component, where the user can listen to a Single. Clicking on a [`CreditCard`](#credit-card) component leads the user to another site where they can listen to the desired Production Credit.

### Albums
An Album can be defined [here](https://github.com/isaiah0812/isaiahbullard-website#beat). Albums are loaded from the array in [`../../constants/projects.json](../../constants/projects.json), where `Album` objects are an extension of a `Project` object, where the `beatTape` property is false. An example `Album` object can be found below.

```js
{
  title: "Album Title",
  cover: "album_cover.png",
  id: "album-title",
  releaseDate: "08.12.2020",
  beatTape: false,
  songList: [
    'Song 1 (feat. Feature 1 & Feature 2)',
    'Song 2 (feat. Feature 3)',
    'Song 3',
    'Song 4 (feat. Feature 1 & Feature 4)',
    'Song 5 (feat. Feature 4 & Feature 3)',
    'Song 6',
    'Song 7 (feat. Feature 1 & Feature 2)',
    'Song 8 (feat. Feature 3 & Feature 4)',
    'Song 9',
    'Song 10 (feat. Feature 1)',
    'Song 11 (Feature 2)',
    'Song 12 (Feature 4)',
  ],
  description: '/descriptions/Album_Title.txt',
  albumCredits: {
    albumId: 'album-title',
    features: [
      {name: 'Feature 1', username: 'feature1username', instagram: true},
      {name: 'Feature 2', username: 'feature_2_username', instagram: false},
      {name: 'Feature 3'},
      {name: 'Feature 4', username: '_feature1_username'},
    ],
    songwriters: [
      'Songwriter 1',
      'Songwriter 2',
      'Songwriter 3',
      'Songwriter 4',
      'Songwriter 5',
    ],
    producedBy: [{name: 'Producer 1', username: 'producer1Username', instagram: true}],
    mixedBy: [{name: 'Engineer 1', username: 'engineer1Username', instagram: false}],
    masteredBy: [{name: 'Engineer 2'}],
    artworkBy: [{name: 'Artist 1', username: 'artist1Username', instagram: true}],
    specialThanks: [
      {name: 'Thanks 1', username: 'thanks1username', instagram: true},
      {name: 'Thanks 2', username: 'thanks_2username', instagram: true}
    ]
  },
  spotify: '1A2b3c4D5E6f7g8H9i0J1k',
  apple: 'album-title/1234567890',
  bandcamp: '0987654321',
  soundCloud: '147258369',
  songLink: '9638527410',
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

`spotify` - The unique identifier of the Spotify entry where the Album is uploaded on [Spotify](https://www.spotify.com). See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`apple` - The unique identifier of the Apple Music entry where the Album is uploaded on [Apple Music](https://music.apple.com). See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`bandcamp` - The unique identifier of the Bandcamp entry where the Album is uploaded on Isaiah Bullard's Bandcamp page. See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`soundcloud` - The unique identifier of the SoundCloud entry where the Album is uploaded on Isaiah Bullard's Soundcloud account. See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`songLink` - The unique identifier of the SongLink entry where the Album is found on [Odesli](https://odesli.co/). See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

### Singles
A Single can be defined [here](https://github.com/isaiah0812/isaiahbullard-website#single). A single is available on the same streaming services that an [Album](#albums) is released on. Singles are loaded from the array in [../../constants/projects.json](../../constants/projects.json). An example `Single` object can be found below.

```js
{
  title: "Single Title",
  cover: "single_cover.png",
  color: '#ABCDEF',
  features: ["Feature 1", "Feature 2"],
  description: "Single Description with a lot of words in it.",
  releaseDate: "08.12.2019",
  spotify: '1A2b3c4D5E6f7g8H9i0J1k',
  apple: 'single-title/1234567890',
  bandcamp: '0987654321',
  soundCloud: '147258369',
  songLink: '9638527410',
  id: "single-title",
}
```

`title` - The title of a Single.

`cover` - A URI leading to the cover art for the Single.

`color` - A `string` hexadecimal value representing the background color of the Single's `SingleDiv` component.

`features` - An array of `string` values, representing the featured artists on a Single.

`description` - A short text description of the Single. This should just be a 2-3 sentences.

`releaseDate` - A `string` with the release date of the project. The format for a `releaseDate` is `mm.dd.yyyy`.

`spotify` - The unique identifier of the Spotify entry where the Album is uploaded on [Spotify](https://www.spotify.com). See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`apple` - The unique identifier of the Apple Music entry where the Album is uploaded on [Apple Music](https://music.apple.com). See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`bandcamp` - The unique identifier of the Bandcamp entry where the Album is uploaded on Isaiah Bullard's Bandcamp page. See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`soundcloud` - The unique identifier of the SoundCloud entry where the Album is uploaded on Isaiah Bullard's Soundcloud account. See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`songLink` - The unique identifier of the SongLink entry where the Album is found on [Odesli](https://odesli.co/). See ["Finding an Album"](#finding-an-album) for more information on how to find this value.

`id` - The id of the `Single` object. The format for this id is the lowercase `title` with hyphens in the place of spaces (i.e. if `title` === "The Holly Jolly Tape", then `id` === "the-holly-jolly-tape").

### Production Credits
A Production Credit can be defined [here](https://github.com/isaiah0812/isaiahbullard-website#production-credit). Clicking a `CreditCard` component leads to another page, where the user can listen to the Production Credit. Production Credits are loaded from the array in [`../../constants/credits.json](../../constants/credits.json). An example `Credit` object can be found below.

```js
{
  id: "productioncredittitle-artistname",
  title: "Production Credit Title",
  artist: "Artist Name",
  link: "https://example.com/path/to-credit",
}
```

`id` - The id of the `Credit` object. The format for this id is the lowercase `title` with the spaces removed, following a hyphen, and then the lowercase `artist` with the spaces removed (i.e. if `title` === "Toonami" and `artist` === "Community Service, then `id` === "toonami-communityservice").

`title` - The title of a Production Credit.

`artist` - The main artist of a Production Credit; the artist that owns the Single or Project of which Isaiah Bullard is credited for participation.

`link` - A URL leading to the [Streaming Platform](https://github.com/isaiah0812/isaiahbullard-website#streaming-platform) where the user can listen to or purchase the Production Credit.

_Note: Production Credits are not limited to where they can be uploaded, therefore, it's best to look at typical culprits, such as [Spotify](https://www.spotify.com), [Bandcamp](https://www.bandcamp.com), [SoundCloud](https://www.soundcloud.com), and [YouTube](https://www.youtube.com). However, any Streaming Platform or Online store can be used, so it may require some research._

### Music Videos
A Music Video can be defined [here](https://github.com/isaiah0812/isaiahbullard-website#music-video). Music Videos are loaded from the array in [`../../constants/videos.json](../../constants/videos.json). An example `Video` object can be found below.

```js
{
  "id": "single-name",
  "title": "Video Title",
  "youtube": "FIT_DhSPpyw"
}
```

`id` - The id of the `Video` object. There is no specific format for this id, but it's preferred if the id is similar to Single's name, for simplicity.

`title` - The title of the Music Video.

`youtube` - The unique identifier of the YouTube video where the music video is uploaded on Isaiah Bullard's YouTube channel. See ["Finding a Beat on YouTube"](#finding-a-beat-on-youtube) for more information on how to find this value. This is not included within a beat on a Beat Tape.

---
## Finding an Album
Each Album object contains the `spotify`, `apple`, `bandcamp`, `soundcloud`, and `songLink` properties. Each property is used with the `iframe` located in the `AlbumPlayer` component.

### Spotify
The `spotify` property's value is the uniqe id of an Album on spotify.com. To find the `spotify` property value, follow these steps:
1. Visit [Isaiah Bullard's Spotify Artist Profile](https://open.spotify.com/artist/0idP6NmikrVzi8j9fDPIo6).
    * _Note: You don't need a Spotify account to browse their site and search for the Album._
1. Scroll down to "Popular Releases" and Select the desired Album.
    * _Note: The album may not appear here. If it doesn't, click "See Discography" to find the Album._
1. Copy the id found after `album/` in the URL. In the URL below, the **bold** text is the id.
    * _https://open.spotify.com/album/**3vbvMwip1WpplVodTHHOrb**_
1. Paste the id from the URL to the `spotify` property of the desired `Album` object.

### Apple Music
The `apple` property's value is the uniqe id of an Album on [Apple Music](https://music.apple.com). To find the `apple` property value, follow these steps:
1. Visit [Isaiah Bullard's Apple Music Artist Profile](https://music.apple.com/us/artist/isaiah-bullard/1422919410).
    * _Note: You don't need an Apple Music account to browse their site and search for the Album._
1. Scroll down to "Albums" and Select the desired Album.
1. Copy the id found after `album/` in the URL. In the URL below, the **bold** text is the id.
    * _https://music.apple.com/us/album/**maestro/1422921065**_
1. Paste the id from the URL to the `apple` property of the desired `Album` object.

### Bandcamp
The `bandcamp` property's value is the id of the `iframe` provided by bandcamp.com. To find the `bandcamp` property value, follow these steps:
1. Visit [Isaiah Bullard's Bandcamp Page](https://isaiahbullard.bandcamp.com)
1. Select the desired Album.
1. Under the cover art on the page, select the button that says "Share/Embed".
1. Select "Embed this album".
1. Select any size displayed. It doesn't matter because there's only one used in the implementation of the `AlbumPlayer` component.
1. At the top left of the display, click the `iframe` code provided by Bandcamp. Then, copy the code (`Ctrl+C` for Windows, `Cmd+C` for MacOS).
1. Paste the embed code any where you'd like. You only need it to copy the id from the code.
1. Copy the id found after `album=` in the `src` attribute of the `iframe`. In the URL below, the **bold** text is the id.
    * _https://bandcamp.com/EmbeddedPlayer/album=**402273398**/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/_
1. Paste the id from the URL to the `bandcamp` property of the desired `Album` object.

### SoundCloud
The `soundcloud` property's value is the id of the `iframe` provided by soundcloud.com.
1. Visit [Isaiah Bullard's SoundCloud Page](https://soundcloud.com/isaiah_bullard).
1. Select the "Albums" tab.
1. Select the "Share" Button under the desired Album.
1. Select the "Embed" tab.
1. Click the `iframe` code provided by SoundCloud in the "Code" section. Then, copy the code (`Ctrl+C` for Windows, `Cmd+C` for MacOS).
1. Paste the embed code any where you'd like. You only need it to copy the id from the code.
1. Copy the id found after `playlists/` in the `src` attribute of the `iframe`. In the URL below, the **bold** text is the id.
    * _https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/**580055703**&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true_
1. Paste the id from the URL to the `soundcloud` property of the desired `Album` object.

### Song Link
The `songLink` property's value is the id of the [Song Link](https://github.com/isaiah0812/isaiahbullard-website#song-link) page from Odesli. To find the `songLink` property value, follow these steps:
1. Visit [Odesli](https://odesli.co/).
1. Search for the desired Album in the search bar at the top of the screen. Try to use the most specific search term, as there may be many entries with the same name.
    * _Example: "evil plan isaiah bullard"_
    * _Example: "isaiah bullard maestro"_
1. Click the "Albums" tab.
1. Select the "View" button on the desired Album.
1. Copy the id found after `i/` in the URL. In the URL below, the **bold** text is the id.
    * _https://album.link/us/i/**1422921065**_
1. Paste the id from the URL to the `songLink` property of the desired `Album` object.

---
## Finding a Single
Each Single object contains the `spotify`, `apple`, `bandcamp`, `soundcloud`, and `songLink` properties. Each property is used with the `iframe` located in the `SingleDivPlayer` component.

### Spotify
The `spotify` property's value is the uniqe id of an Single on spotify.com. To find the `spotify` property value, follow these steps:
1. Visit [Isaiah Bullard's Spotify Artist Profile](https://open.spotify.com/artist/0idP6NmikrVzi8j9fDPIo6).
    * _Note: You don't need a Spotify account to browse their site and search for the Album._
1. Scroll down to "Popular Releases" and Select the desired Single.
    * _Note: The album may not appear here. If it doesn't, click "See Discography" to find the Single._
1. Copy the id found after `album/` in the URL. In the URL below, the **bold** text is the id.
    * _https://open.spotify.com/album/**48Abax8tB9fYuzlviX0bUG**_
1. Paste the id from the URL to the `spotify` property of the desired `Single` object.

### Apple Music
The `apple` property's value is the uniqe id of an Album on [Apple Music](https://music.apple.com). To find the `apple` property value, follow these steps:
1. Visit [Isaiah Bullard's Apple Music Artist Profile](https://music.apple.com/us/artist/isaiah-bullard/1422919410).
    * _Note: You don't need an Apple Music account to browse their site and search for the Album._
1. Scroll down to "Singles & EPs" and Select the desired Single.
1. Copy the id found after `album/` in the URL. In the URL below, the **bold** text is the id.
    * _https://music.apple.com/us/album/**evil-plan-feat-louiev-t-fuze-single/1506525081**_
1. Paste the id from the URL to the `apple` property of the desired `Album` object.

### Bandcamp
The `bandcamp` property's value is the id of the `iframe` provided by bandcamp.com. To find the `bandcamp` property value, follow these steps:
1. Visit [Isaiah Bullard's Bandcamp Page](https://isaiahbullard.bandcamp.com)
1. Select the desired Album.
1. Under the cover art on the page, select the button that says "Share/Embed".
1. Select "Embed this album".
1. Select any size displayed. It doesn't matter because there's only one used in the implementation of the `AlbumPlayer` component.
1. At the top left of the display, click the `iframe` code provided by Bandcamp. Then, copy the code (`Ctrl+C` for Windows, `Cmd+C` for MacOS).
1. Paste the embed code any where you'd like. You only need it to copy the id from the code.
1. Copy the id found after `track=` in the `src` attribute of the `iframe`. In the URL below, the **bold** text is the id.
    * _https://bandcamp.com/EmbeddedPlayer/track=**2329859596**/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/_
1. Paste the id from the URL to the `bandcamp` property of the desired `Single` object.

### SoundCloud
The `soundcloud` property's value is the id of the `iframe` provided by soundcloud.com.
1. Visit [Isaiah Bullard's SoundCloud Page](https://soundcloud.com/isaiah_bullard).
1. Select the "Tracks" tab.
1. Select the "Share" Button under the desired Single.
1. Select the "Embed" tab.
1. Click the `iframe` code provided by SoundCloud in the "Code" section. Then, copy the code (`Ctrl+C` for Windows, `Cmd+C` for MacOS).
1. Paste the embed code any where you'd like. You only need it to copy the id from the code.
1. Copy the id found after `tracks/` in the `src` attribute of the `iframe`. In the URL below, the **bold** text is the id.
    * _https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/**795101182**&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true_
1. Paste the id from the URL to the `soundcloud` property of the desired `Single` object.

### Song Link
The `songLink` property's value is the id of the [Song Link](https://github.com/isaiah0812/isaiahbullard-website#song-link) page from Odesli. To find the `songLink` property value, follow these steps:
1. Visit [Odesli](https://odesli.co/).
1. Search for the desired Album in the search bar at the top of the screen. Try to use the most specific search term, as there may be many entries with the same name.
    * _Example: "evil plan isaiah bullard"_
    * _Example: "isaiah bullard maestro"_
1. Click the "Songs" tab.
1. Select the "View" button on the desired Album.
1. Copy the id found after `i/` in the URL. In the URL below, the **bold** text is the id.
    * _https://song.link/i/**1506525082**_
1. Paste the id from the URL to the `songLink` property of the desired `Single` object.

---
## Finding a Music Video
Each Video object contains a `youtube` property, where the value is the id of the YouTube video for the Music Video. This value is used in for the `iframe` in the `YoutubeCard` component. To find the id of a music video, follow these steps:
1. Go to [Isaiah Bullard's YouTube Channel](https://www.youtube.com/channel/UCMMDfi3G5xXLj7vVqq9yr9w/videos).
1. Go to the "Videos" tab.
1. Find the desired Music Video and click it.
1. Copy the id from the URL, located after the `v=` in the url. In the URL below, the **bold** text is the id.
    * _https://www.youtube.com/watch?v=**TCnoe1IIqL4**_
1. Paste the value of the id into the `youtube` property of the Beat object.

---
## Project Page (zaemadethis.com/projects/{project_id})
A [Project Page](https://github.com/isaiah0812/isaiahbullard-website#project-page) displays information regarding a full length Project, which can either be an Album or a Beat Tape. These pages also provide a section to play the project via a selection of [Streaming Platforms](https://github.com/isaiah0812/isaiahbullard-website#streaming-platforms).

Albums are released for paid listening. Their project pages are loaded via `Album` objects, provided by the array in [`../../constants/projects.json`](../../constants/projects.json). Users are able to stream Albums from Streaming Platforms, as long as they have a subscription to one or more of those platforms. Albums are also available for purchase on Bandcamp (which does not require an account for streaming), iTunes, Amazon Music, etc.

### Album Credits
The `albumCredits` property of a `Project` object contains credited individuals for their various contributions to a Project. This object is known as a `AlbumCredits` object.

Beat Tapes may contain the following credits:
* Features
    * A list of artists who appeared alongside Isaiah Bullard
* Songwriters
    * A list of the songwriters that contribute to the songwriting aspect of an Album.
    
        _Note: For this app, `Album` objects are the only `Project` objects that have `songwriters`, even though Beat Tapes have songwriters._
* Producers
    * A list of the music producers who contributed to the project through providing beats or adding to existing beats.
* Mixing Engineers
    * A list of audio engineers that took part in the mixing process of one or more of the entries on the track listing.
* Mastering Engineers
    * A list of audio engineers that took part in the mastering process of one or more of the entries on the track listing.
* Artwork Artist
    * One or more individuals that contributed to the creation of a Project's cover art.
* Special Thanks
    * One or more individuals that are given recognition for their participation on the project, such as extra vocals, consultation, etc.

An example `AlbumCredits` object can be found below, where this object would be used in a `BeatTape` object.
```javascript
{
  albumId: 'album-title',
    features: [
      {name: 'Feature 1', username: 'feature1username', instagram: true},
      {name: 'Feature 2', username: 'feature_2_username', instagram: false},
      {name: 'Feature 3'},
      {name: 'Feature 4', username: '_feature1_username'},
    ],
    songwriters: [
      'Songwriter 1',
      'Songwriter 2',
      'Songwriter 3',
      'Songwriter 4',
      'Songwriter 5',
    ],
    producedBy: [{name: 'Producer 1', username: 'producer1Username', instagram: true}],
    mixedBy: [{name: 'Engineer 1', username: 'engineer1Username', instagram: false}],
    masteredBy: [{name: 'Engineer 2'}],
    artworkBy: [{name: 'Artist 1', username: 'artist1Username', instagram: true}],
    specialThanks: [
      {name: 'Thanks 1', username: 'thanks1username', instagram: true},
      {name: 'Thanks 2', username: 'thanks_2username', instagram: true}
    ]
}
```

`albumId` - The `id` property of the parent `Project` object

`songwriter` - An array of `string` values representing the songwriter(s) of an Album.

`producedBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the producer(s) of a Project.

`mixedBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the mixing engineer(s) of a Project.

`masteredBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the mastering engineer(s) of a Project.

`artworkBy` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing the artist(s) who made the cover art of a Project.

`specialThanks` - An array of [`SocialMediaCredit`](../projects/README.md#social-media-credit) objects, containing people deserving special recognition for a Project.

### Social Media Credit
The `SocialMediaCredit` component is used to link credited people in the `albumCredits` section of a `Project` to their social media profiles. The component links to either [Instagram](https://www.instagram.com) or [Twitter](https://www.twitter.com), based on the value of the `instagram` property in a `ProjectCredit` object. An example `ProjectCredit` object can be found below:

```js
{
  name: 'Feature 4', 
  username: '_feature1_username', 
  instagram: true
}
```

`name` - The name of the credited person.

`username` - The username of the credited person's Instagram or Twitter account. This information will be given prior to a Project's release.

`instagram` - A boolean value indicating if the `username` property is for Instagram. If true, the Instagram URL is to be used for the `SocialMediaCredit` component. Otherwise, the compnent uses the Twitter URL.