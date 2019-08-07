'use strict';

(function(d, w) {
  const $ = d.querySelector.bind(d);

  /* start fix navbar bottom */
  const { offsetHeight, scrollHeight } = $('#dashboard > aside');
  const bottom = $('#dashboard .bottom');
  bottom.style.top = `calc(${
    scrollHeight && scrollHeight > offsetHeight ? scrollHeight : offsetHeight
  }px - 5rem)`;
  /* end fix navbar bottom */
})(document, window);
