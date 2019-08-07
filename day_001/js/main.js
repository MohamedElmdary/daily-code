'use strict';

function sidenavFooter($) {
  const { offsetHeight, scrollHeight } = $('#dashboard > aside');
  const bottom = $('#dashboard .bottom');
  const h = (scrollHeight || 0) > offsetHeight ? scrollHeight : offsetHeight;
  bottom.style.top = `calc(${h - bottom.offsetHeight}px
     - 3rem)`;
}

function main() {
  const $ = document.querySelector.bind(document);

  sidenavFooter($);
}

window.onload = main;
