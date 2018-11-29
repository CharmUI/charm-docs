function getPath(location) {
  const isDev = process.env.NODE_ENV === 'development';

  return isDev
    ? location.pathname
    : location.pathname.split('/charm-docs')[1];
}
export function getUpdatedContent(contents, location) {
  return contents.map(content => Object.assign({}, content, {
    isCurrentPath: getPath(location) === content.path,
  }));
}

export function getCurrentRoute(contents, location) {
  return contents.reduce((acc, content) => {
    if (content.path === getPath(location)) return Object.assign({}, acc, content);
    return acc;
  }, {});
}

export function getCurrentContentIndex(contents, location) {
  return contents.reduce((acc, content, i) => {
    if (content.path === getPath(location)) return i;
    return acc;
  }, null);
}
