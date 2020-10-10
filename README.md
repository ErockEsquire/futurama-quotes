Built with React + Typescript + SASS
10/10/2020

## Futurama Quotes

A website dedicated to the nostalgia of an amazing show, Futurama. The application includes over 100 quotes and over 50 Futurama images.  
  
Built to immortalize my love of this show, and the first of a series of quotes sites..  

Simple Typescript for typing, and more importantly custom SASS.  
Includes a small object database of quotes with keys for speaker, the quote, and episode name & number.  

### Deployed to https://futuramaquotes.netlify.app

Users can access this URL to enjoy Futurama Quotes.  

## Features  

Intro upon entering the site is complete CSS/SASS, aside from the title image. Unfortunately, I didn't want to spend too much time making the title with CSS art.

Pressing the NEXT button at the bottom changes to quote to a random one, over 100 quotes included. Quotes uses Math.rand(), and a combination of useState and useEffect.  
  
Pressing the IMAGE button starts a slideshow of Futurama images, over 50 included. Also changes the FUTURAMA title to a smaller size. Slideshow uses setInterval, and a combination of useState and useEffect.   

Pressing the episode name tab will animate the planet express ship across the screen. This is done by useState , setTimeout() and CSS.  
  
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

There are two main files. 

Quotes.tsx is the layout for the quote, buttons, and episode tab.

Setting.tsx sets the intro, background, images, ship, and FUTURAMA title.
