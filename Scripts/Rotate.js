// ==UserScript==
// @name        Rotate
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       GM_getValue
// @version     1.0
// @author      Lyall
// @description funny rotation
// ==/UserScript==

let rotation = 0;
let increment = GM_getValue("increment", 1);
let interval = GM_getValue("interval", 50);

setInterval(() => {
  rotation += increment;
  document.body.style.rotate = `${rotation}deg`;
}, interval);
