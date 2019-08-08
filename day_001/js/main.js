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

const requestTimeOut = cb => setTimeout(cb, 350);

function navBar() {
  const { innerWidth } = window;
  const dashboard = document.getElementById('dashboard');
  if (innerWidth > 1350) {
    dashboard.classList.remove('active-sidenav-mobile');
    dashboard.classList.add('active-sidenav');
  } else {
    dashboard.classList.remove('active-sidenav');
  }
}

function main() {
  navBar();
  sidenav();
  dropDownList();
  requestTimeOut(() => chart('canvas-chart'));
  requestTimeOut(() => Circle('cirlce-chart'));

  document.querySelector(
    '#content > nav ul > li:last-of-type'
  ).onclick = function() {
    const dashboard = document.getElementById('dashboard');
    if (
      dashboard.classList.contains('active-sidenav') ||
      dashboard.classList.contains('active-sidenav-mobile')
    ) {
      dashboard.classList = '';
    } else {
      const { innerWidth } = window;
      if (innerWidth < 1350) {
        dashboard.classList.add('active-sidenav-mobile');
      } else {
        dashboard.classList.toggle('active-sidenav');
      }
    }
  };

  document.querySelector('.sidenav-cover').onclick = function() {
    const dashboard = document.getElementById('dashboard');
    dashboard.classList = '';
  };

  Array.from(document.querySelectorAll('aside ul > li')).forEach(li => {
    const dashboard = document.getElementById('dashboard');
    li.onclick = function() {
      li.classList.add('active');
      siblings(li, function(el) {
        el.classList.remove('active');
        dashboard.classList.remove('active-sidenav-mobile');
      });
    };
  });

  window.addEventListener(
    'resize',
    function() {
      navBar();
    },
    false
  );
}

window.onload = main;
