BLUE ANCHOR — WEBSITE
=====================

A responsive multi-page site: full-screen photography, editorial serif type,
deep navy + brass. No frameworks; open any .html file in a browser.

PAGES (same tabs as blueanchorjc.com)
  index.html           Home
  menu.html            Menu
  reservations.html    Reservations
  about.html           About Us
  (Online Order/Pickup opens the restaurant's Toast ordering page, as it does today)
  gift-cards.html      Gift Cards
  captains-club.html   The Captain's Club

PHOTOS & LOGO
  The site currently loads the restaurant's real logo and three photos directly from
  the existing blueanchorjc.com site, so it looks right the moment you open it.
  To make it self-contained (recommended before going live), save these next to index.html:
    logo.png       the white Blue Anchor logo
    hero.jpg       home hero + About header      (currently their IMG_2632)
    together.jpg   "Eat together" band, Menu & Captain's Club headers (IMG_1921)
    about.jpg      Visit section, About photo, Reservations header (their 005.jpg)
  Once a local file exists it is used automatically. Landscape, ~2400px wide, compressed.
  Swap in any photo you like — the file names are what matter.

FILES
  styles.css           all styles; colors + fonts are variables at the top (--brass etc.)
  main.js              header behaviour, mobile menu, scroll reveals
  (Flat layout — every file sits at the top level so it can be uploaded from a phone.)

PUT IT ONLINE
  Drag the whole folder onto app.netlify.com/drop for a live link in about a minute.

TO FILL IN (search for [BRACKETS])
  - Happy Hour days & times (menu.html)
  - Reservation policy + booking widget embed code (reservations.html)
  - Captain's Club points / reward tiers (captains-club.html)
  - Gift card and rewards buttons point to the restaurant's Toast pages; confirm the URLs.
