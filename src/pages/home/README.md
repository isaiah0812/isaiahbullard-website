# Home Page (zaemadethis.com/ | zaemadethis.com/home)

## Overview
This is the landing page of the site containing a Carousel displaying the most recent [Projects](https://github.com/isaiah0812/isaiahbullard-website#project), an "About Me" section that links to the [Contact Page](https://github.com/isaiah0812/isaiahbullard-website#contact-page), and a short description of the other pages on the site with a button that links to said pages.

---
## Carousel
The Carousel is a [React Bootstrap](https://github.com/isaiah0812/isaiahbullard-website#react-bootstrap) Carousel populated via the array in [../../constants/carousel.json](../../constants/carousel.json). It will display the 5 most recent projects from Isaiah Bullard, and include links to their respective [Project Pages](https://github.com/isaiah0812/isaiahbullard-website#project-page). Example `CarouselItem` objects can be found below.

```js
{
  name: "Project 1",
  backdrop: "Project1_cover.png",
  logo: "Project1_logo.png",
  description: "A very short description. Name of project follows.",
  link: "/projects/{project-id}"
}
```
```js
{
  name: "Project 2",
  backdrop: "Project2_cover.png",
  logo: "Project2_logo.png",
  description: "This shouldn't be too long. Release status can follow here, too.",
  link: "/beats/{project-id}"
}
```

`name` - The title of the project on the Carousel.

`backdrop` - An image that serves as the background of the Carousel slide. This should be the project's cover art.

`logo` - An image that is displayed alongside the Carousel slide's `description`. This is usually an image of the title of the project in the font that it appears in on the site.

`description` - A short, two sentence description of the project, containing a mantra for the project, and a sentence declaring the project's release status (usually "Out Now").

`link` - A path to the [Project Page](https://github.com/isaiah0812/isaiahbullard-website#project-page) for the project displayed on the Carousel.

---
## Sections
Each section on the Home Page - everything except for the Carousel - is created with a `HomeSection` component. The component includes a title, a short description, and a `Button` linking to another page. The Home Page loads the sections from the `sections` array in [`../../constants/home.js`](../../constants/home.js). An example `Section` object can be found below.

```js
{
      title: 'Title',
      description: "A description of where the button in the HomeSection will take the user.",
      buttonText: 'Action',
      href: '/path',
    }
```

`title` - A title for the `HomeSection`, shown on the left of the component.

`description` - A short description of the page that the `Button` will lead to.

`buttonText` - An action that will lead the user to the page described in the `HomeSection`.

`href` - A URI or a path to the page that is described in the `HomeSection`.