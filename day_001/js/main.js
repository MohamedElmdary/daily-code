'use strict';

function sidenav($) {
  const { offsetHeight, scrollHeight } = $('#dashboard > aside');
  const bottom = $('#dashboard .bottom');
  const h = (scrollHeight || 0) > offsetHeight ? scrollHeight : offsetHeight;
  bottom.style.top = `calc(${h - bottom.offsetHeight}px
     - 3rem)`;

  const active = $('#dashboard  > aside nav ul li.active');
  console.log(active);
}

function main() {
  const $ = document.querySelector.bind(document);
  sidenav($);
}

window.onload = main;
