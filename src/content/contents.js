const contents = [
  {
    bullet: '1',
    exact: true,
    path: '/',
    name: 'Getting started',
    description: 'This page is an overview of the React documentation and related resources.',
    content: [
      {
        bullet: '1.1',
        path: '/#try-react',
        name: 'Try React',
        content: [
          {
            bullet: '1.1.1',
            path: '/#more-on-react',
            name: 'More on react',
          },
          {
            bullet: '1.1.2',
            path: '/#learn-react',
            name: 'Learn React',
          },
        ],
      },
    ],
  },
  {
    bullet: '2',
    path: '/about/',
    name: 'About',
    description: 'Other lead',
    content: [
      {
        bullet: '1.1',
        path: '/about/#try-react',
        name: 'Try React',
        content: [
          {
            bullet: '1.1.1',
            path: '/about/#more-on-react',
            name: 'More on react',
          },
        ],
      },
    ],
  },
];

export default contents;
