# Team Red [!Team red app logo](https://github.com/SaraBlich/Cpn-true/blob/master/public/SB.png)

## Table of contents
* [Description](#description)
* [Technologies](#used-technologies)
* [Setup](#setup)
* [Site](#site)
* [Application architecture](#application-architecture)
* [To-do](#to-do)
* [Contact](#contact)

## Description
Basic website introducing Team Red - group of React enthusiastics. Feel free to take a look.

## Used technologies
Team Red was created in React.js environment. As it was decided not to use any librares, whole styling were made with simple css. Logo was provided with Photoshop graphical programme. As reduced weight of memory was required, .svg format was chosen to isplay the image.

- React 16.13.1,
- CSS3,
- Photoshop 21.1.2

## Setup

To run the Team Red (team-red-www) repository files to an empty chosen folder. Enter the folder via console (ex. 'Anaconda Prompt') by comand `cd ./foldername`, where foldername is the name of your new created folder and simply type `npm start`. 

## Site
The aplication is fully responsive - it works well with computers, tablets and mobiles. Responsitivity issue were solved with usual 'vw', 'vh' and also css media queries. 

1 viewport width (vw) is equal to 1% of the viewport’s width. The units differ from percentages because they are always relative to the viewport, whereas a percentage is relative to the element’s parent container.

Two viewport units are available within the css code:
- <b>vw:</b> viewport width,
- <b>vh:</b> viewport height.

## Application architecture
Team Red has the fundamental component App.js rendered in index.js. In the App component is rendered <b>Header.js</b> and <b>Footer.js</b> components. In the Header.js is rendered <b>ToggleMenu.js</b> and <b>ToggleList.js</b> component. ToggleMenu holds the state of header navigation within small devices and provides navigation bar for larger screens. Components are held in seperated folder to maintain application visuality. ToggleList provides visualisation of the list, when the state of ToggleMenu allows.

-index.js
  - App.js
    - Header:
      - ToggleMenu
      - ToggleList
    - Footer

## To-do
- styling of the page
- add <i>About</i> content

