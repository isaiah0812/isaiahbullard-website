# Isaiah Bullard's Website (zaemadthis.com)

## Overview
This app is the informational website for Isaiah Bullard. It contains information on his projects including, but not limited to, albums, beat tapes, and production credits. It also contains information on beat the beats that he currently has for sale, available for purchase through the contact page of the site. The merchandise page is meant to display any available merchandise for the "Isaiah Bullard" brand, or any other brands affiliated with Isaiah Bullard.

## Installation

### Requirements
* [Node.js](https://nodejs.org/en/download/)
  1. Download Node.js from [here](https://nodejs.org/en/download/).
  1. Verify Node.js is downloaded by running the following commands:
      ```
      node -v
      npm -v
      ```
  _Note: you can use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) as a local dependency manager as well, but this project was built with Node.js and [create-react-app](https://create-react-app.dev/)._

### Developing
1. Open your Command Prompt or Terminal and clone the project from the [repository](https://github.com/isaiah0812/isaiahbullard-website/tree/master) using `git clone`.
    ```
    git clone https://github.com/isaiah0812/isaiahbullard-website.git
    ```
2. Download all dependencies in this project using the following command:
    ```
    npm install
    ```

3. The project uses environment variables. To add these environment variables, create a file in the root of the project called `.env.local` and copy the following contents to the file:
    ```
    REACT_APP_EMAILJS_ID=user_NhpX6mA3wYfbJ5YRxETqn
    REACT_APP_EMAILJS_SERVICE=service_22v4zop
    REACT_APP_EMAILJS_TEMPLATE_BEATS=template_bjrhf54
    REACT_APP_EMAILJS_TEMPLATE_CONTACT=template_fe1k1ey
    REACT_APP_RECAPTCHA_KEY=6LfuwswZAAAAAFoIl6kd7FIhSxyE9bPZTRPDuf15
    ```

### Running the Project
Run the project with the following command:
```
npm start
```

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