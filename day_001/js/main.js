'use strict';

function sidenav() {
  const $ = document.querySelector.bind(document);
  const { offsetHeight, scrollHeight } = $('#dashboard > aside');
  const bottom = $('#dashboard .bottom');
  const h = (scrollHeight || 0) > offsetHeight ? scrollHeight : offsetHeight;
  bottom.style.top = `calc(${h - bottom.offsetHeight}px
     - 3rem)`;

  const active = $('#dashboard  > aside nav ul li.active');
  // console.log(active);
}

function dropDownList() {
  const lists = Array.from(document.querySelectorAll('[data-drop]'));
  const drops = [];
  lists.forEach(list => {
    const drop = document.getElementById(list.getAttribute('data-drop'));
    drops.push(drop);
    const p = list.querySelector('p');
    p.addEventListener(
      'click',
      function(e) {
        e.stopPropagation();
        drop.classList.toggle('active');
        drops.forEach(d => {
          if (d !== drop) d.classList.remove('active');
        });
      },
      false
    );
    Array.from(drop.querySelectorAll('li')).forEach(li => {
      li.addEventListener(
        'click',
        function(e) {
          e.stopPropagation();
          li.classList.add('active');
          siblings(li, function(el) {
            el.classList.remove('active');
          });
          p.querySelector('span').textContent = li.textContent;
          drop.classList.remove('active');
        },
        false
      );
    });
  });
  document.addEventListener(
    'click',
    function() {
      drops.forEach(drop => drop.classList.remove('active'));
    },
    false
  );
}

function main() {
  sidenav();
  dropDownList();
  Circle('cirlce-chart');
}

window.onload = main;
