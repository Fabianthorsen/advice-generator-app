# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![https://pasteboard.co/UasOmOYmAyVU.png](./screenshot.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/advice-generator-app-aA2UGDtRaI)
- Live Site URL: [Live site](https://melodious-pudding-bec5d6.netlify.app/)

## My process

Choosing this project was mainly due to it having a simple UI, using a third-party API and using JS/TS.

I've used React in the past, but for something as simple as this, React felt overly large/complex. I've wanted to dabble with Svelte for a while so this felt like a perfect entry point. Also after working some with TS and SCSS, I chose to incorperate these as well.

I started learning the basics of Svelte by copying some boiler plate reactive code and then adding on top of that to cater for my own needs. Fetching from the API was fairly trivial, as it was only a single route and no query parameters.

Incorperating SCSS with Svelte was trivial and only required to change the style tag:

```html
<style lang="scss">
  ...
</style>
```

For a project this size Svelte felt very intuitive in the way you fetch and manage state, in contrast to the first time i had to learn React.

Hosting on Netlify was slightly more complicated than what I was used to when just hosting a simple HTML + CSS project. I realised when just getting `404` status codes that I had to include a `netlify.toml` file in order for the hosting to work properly.

### Built with

- Semantic HTML5 markup
- SCSS
- CSS Grid
- Mobile-first workflow
- [React](https://svelte.dev/) - JS library

## Author

- Frontend Mentor - [@Fabianthorsen](https://www.frontendmentor.io/profile/Fabianthorsen)
