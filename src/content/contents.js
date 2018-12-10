const contents = [
  {
    bullet: '1',
    exact: true,
    path: '/',
    name: 'Getting started',
    description: 'Get started with Charm UI library',
    content: [
      {
        bullet: '1.1',
        path: '/#introduction',
        name: 'Introduction',
        content: [
          {
            bullet: '1.1.1',
            path: '/#installation',
            name: 'Installation',
          },
          {
            bullet: '1.1.2',
            path: '/#css',
            name: 'CSS',
          },
          {
            bullet: '1.1.3',
            path: '/#js',
            name: 'JS',
          },
        ],
      },
    ],
  },
  {
    bullet: '2',
    path: '/usage/',
    name: 'Usage',
    description: 'Learn how to use Charm with different libraries',
    content: [
      {
        bullet: '2.1',
        path: '/usage/gatsby',
        name: 'Gatsby JS',
      },
      {
        bullet: '2.2',
        path: '/usage/next',
        name: 'Next JS',
      },
    ],
  },
  {
    bullet: '3',
    path: '/about/',
    name: 'About',
    description: 'Other lead'
  },
];

export default contents;
