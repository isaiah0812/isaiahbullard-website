# Isaiah Bullard's Website (zaemadethis.com)

## Overview
This app is the informational website for Isaiah Bullard. It contains information on his projects including, but not limited to, albums, beat tapes, and production credits. It also contains information on beat the beats that he currently has for sale, available for purchase through the contact page of the site. The merchandise page is meant to display any available merchandise for the "Isaiah Bullard" brand, or any other brands affiliated with Isaiah Bullard.

---
## NOTICE
This project is no longer in development. While the [domain](https://www.zaemadethis.com) is still being used, this repository does not reflect the current deployment of code.

---
## Features

### Pages

#### `Home`
The landing page for the site. Contains a carousel previewing the most recent projects, an "About Me" section that links to the contact page, and short descriptions of each page, with buttons that link to their respective pages. See the [Home Page README](./src/pages/home/README.md) for more information.

#### `Projects`
A list of all released albums, singles, production credits, and other placements. Each album card links to a [Project Page](#project-page). See the [Projects Page README](./src/pages/projects/README.md) for more information.

#### `Project Page`
A project showcase page for any released album or beat tape, showing a description of the project, credits, and an interface for listening to the project on streaming platforms. See the ["Project Page" section in the Projects Page README](./src/pages/projects/README.md#project-page) for more information.

#### `Beats`
A list of all individual beats for sale and all beat tapes. Each individual beat contains information on that beat, as well each one's respective YouTube `iframe`. Each beat tape card links to a [Project Page](#project-page). See the [Beats Page README](./src/pages/beats/README.md) for more information.

#### `Merchandise`
An online shop for all merchandise. To be implemented.

#### `Contact`
Contains a form to send an email to Isaiah Bullard. The form includes a Google ReCAPTCHA verification step that is necessary in order to send the form. See the [Contact Page README](./src/pages/contact/README.md) for more information.

### Packages

#### `React Router`
The routing in this app is handled by React Router's `BrowserRouter` component. Some of the links in the app use the `Link` component to navigate to other pages within the app.

#### `React Bootstrap`
This app uses React Bootstrap as its primary User Interface library. The [documentation](https://react-bootstrap.github.io/getting-started/introduction) recommends importing the individual components to the project as opposed to the full package in each usage.
```js
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
...
```

#### `EmailJS`
In order to send emails, the contact form uses EmailJS, a free javascript library that allows users to send emails through SMTP. To use the contact page in a development environment, the ids for the service, template, and user are required.

*Note: Use of the contact form in a development environment should be limited, as there is a limit to how many emails can be sent per month.*

---
## Glossary
A few terms to help with the business logic of the app.

#### `Album`
A [Project](#project) that is monetized on all streaming platforms. Albums are available on all streaming platforms including:
* Spotify
* Apple Music
* Bandcamp
* SoundCloud

Albums also contain a [Song Link](#song-link).

#### `Album Credit`
See [Credit](#credit).

#### `Beat`
An single instrumental that can be sold individually or in a [Beat Tape](#beat-tape). Beats that are not included on a beat tape are released on the following platforms:
* SoundCloud
* YouTube

#### `Beat Tape`
A [Project](#project) that is released for free listening. Beat Tapes are released on the following platforms:
* Bandcamp
* Soundcloud
* Youtube

#### `Credit`
In reference to a [Project](#project), a credit refers to a person who contributes to a Project's completion. Credits include:
* Features
* Songwriters
* Samples
* Producers
* Mixing Engineers
* Mastering Engineers
* Artwork Artist
* Special Thanks

#### `Music Video`
A visual companion to one or more [Singles](#single).

#### `Page`
A component that utilizes a path in the [Router](#router).

Each individual beat from a Beat Tape is available for purchase through the [Contact Page](#contact-page).

#### `Production Credit`
A [Single](#single) or [Project](#project) that is produced in part or as a whole by Isaiah Bullard. Listed under the `Credits` section on the [Projects Page](#projects-page).

#### `Project`
A collection of released songs. Classified as an [Album](#album) or a [Beat Tape](#beat-tape).

#### `Sample`
A previously existing musical work or sound that is used in the creation of another musical work. Samples must be cleared before the musical work that it is used in can be sold for commercial profit.

_Note: [Beat Tapes](#beat-tape) are free, and listeners can donate via Bandcamp along with their purchase, but if an artist purchases a [Beat](#beat) from a beat tape, then it is the purchasing artist's job to clear the sample prior to releasing their musical work for commercial use._

#### `Single`
A monetized song released on the following platforms:
* Spotify
* Apple Music
* Bandcamp
* SoundCloud

Singles also contain a [Song Link](#song-link).

#### `Song Link`
A single page containing all available platforms for listening to a release, provided by [Odesli](https://odesli.co/).

#### `Streaming Platform`
An on-demand, online source for streaming music or videos.

_Note: This entire project is written in plain React.js, so there are no **actual** object names. The ones that are used are merely for reference, as it is planned to migrate this entire site to a TypeScript Create React App template. I'll try to be less of an idiot next time and use TypeScript if we can for some type-safety and all that jazz lol._