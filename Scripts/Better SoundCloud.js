// ==UserScript==
// @name        Better SoundCloud
// @namespace   Violentmonkey Scripts
// @match       https://soundcloud.com/*
// @grant       GM_getValue
// @version     1.0
// @author      Lyall
// @description
// ==/UserScript==

const config = {
  autoPlay: GM_getValue("autoPlay", false),
  darkMode: GM_getValue("darkMode", false),
  hidePaid: GM_getValue("hidePaid", false),
  repeat: GM_getValue("repeat", 0),
  shuffle: GM_getValue("shuffle", false)
};

if (config.autoPlay) {
  fromClass("playControl").click();
}

if (config.darkMode) {
  const style = document.createElement("style");
  style.innerHTML = `
  body, a.sc-link-dark, button, .sc-text, .g-tabs-link, .commentItem__body {
    color: #bbbbbb !important;
  }

  a.sc-link-light, .commentItem__usernameLink, .commentItem__replyButton {
    color: #7f7f7f !important;
  }

  .commentItem__timestampLink {
    background-color: #333333 !important;
  }

  body.sc-classic, .soundBadge__additional {
    background: #272727 !important;
  }

  .trackItem.hover, .trackItem:not(.m-disabled).active .trackItem__additional, .trackItem:not(.m-disabled).hover .trackItem__additional, .trackItem.active {
    background-color: #474747 !important;
    background: #474747 !important;
  }

  .sc-button {
    background-color: #3b3b3b !important;
  }

  .playControls__inner, .playControls__bg {
    background-color: #1e1e1e !important;
    border-top: 1px solid #494949 !important;
  }

  .g-dark input, .g-dark select, .g-dark textarea {
    background: #4b4b4b !important;
    color: #e1e1e1 !important;
  }

  .mixedSelectionModule, .sc-border-light-bottom {
    border-bottom: 1px solid #494949 !important;
  }

  .sc-border-light-top {
    border-top: 1px solid #494949 !important;
  }

  .sc-border-light-right {
    border-right: 1px solid #494949 !important;
  }
  `.trim();

  document.body.appendChild(style)
}

if (config.hidePaid) {
  const style = document.createElement("style");
  style.innerHTML = `
  .creatorSubscriptionsButton, .header__goUpsell_side_by_side_experience {
    display: none !important;
  }
  `.trim();

  document.body.appendChild(style);
}

if (config.repeat) {
  const repeatControl = fromClass("repeatControl");
  repeatControl.click();
  if (config.repeat == 2) repeatControl.click();
}

if (config.shuffle) {
  fromClass("shuffleControl").click();
}

function fromClass(c, m) { return m ? document.getElementsByClassName(c) : document.getElementsByClassName(c)[0] }
