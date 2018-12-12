const contents = [
  {
    exact: true,
    path: '/',
    name: 'Getting started',
    description: 'Get started with Charm UI library',
    content: [
      {
        path: '/#installation',
        name: 'Installation',
        content: [
          {
            path: '/#css',
            name: 'CSS',
          },
          {
            path: '/#js',
            name: 'JS',
          },
        ],
      },
    ],
  },
  {
    path: '/usage/',
    name: 'Usage',
    description: 'Learn how to use Charm with different libraries',
    content: [
      {
        path: '/usage/gatsby',
        name: 'Gatsby JS',
      },
      {
        path: '/usage/next',
        name: 'Next JS',
      },
    ],
  },
  {
    path: '/about/',
    name: 'About',
    description: 'Other lead'
  },
];

export default contents;
