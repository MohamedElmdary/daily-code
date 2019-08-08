const fetch = require('node-fetch');

module.exports = {
  links: [
    {
      icon: 'fas fa-chart-pie',
      name: 'overview'
    },
    {
      icon: 'fas fa-user-alt',
      name: 'fans data'
    },
    {
      icon: 'fas fa-money-check-alt',
      name: 'income'
    },
    {
      icon: 'far fa-image',
      name: 'works'
    },
    {
      icon: 'far fa-comment-dots',
      name: 'messages'
    }
  ],
  durations: [
    'Today',
    'Last 7 days',
    'Last 30 days',
    'Last 90 days',
    'All time'
  ],
  cards: [
    {
      name: 'fans data',
      icon: 'fas fa-user-alt',
      value: '2387'
    },
    {
      icon: 'fas fa-money-check-alt',
      name: 'income',
      value: '3920'
    },
    {
      icon: 'far fa-image',
      name: 'works',
      value: '12'
    },
    {
      icon: 'far fa-comment-dots',
      name: 'messages',
      value: '893'
    }
  ],
  incomes: [
    {
      name: 'ads',
      value: 7126.49
    },
    {
      name: 'rewards',
      value: 5017.79
    },
    {
      name: 'base pay',
      value: 3247.72
    }
  ],
  tableHeaders: ['id', 'name', 'username', 'email', 'phone', 'website'],
  users: () =>
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json()
    )
};
