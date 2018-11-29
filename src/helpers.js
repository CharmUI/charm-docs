export function getUpdatedContent(contents, location, prefix = '/charm-docs') {
  return contents.map(content => Object.assign({}, content, {
    isCurrentPath: location.pathname.split(prefix)[1] === content.path,
  }));
}

export function getCurrentRoute(contents, location, prefix = '/charm-docs') {
  return contents.reduce((acc, content) => {
    if (content.path === location.pathname.split(prefix)[1]) return Object.assign({}, acc, content);
    return acc;
  }, {});
}

export function getCurrentContentIndex(contents, location, prefix = '/charm-docs') {
  return contents.reduce((acc, content, i) => {
    if (content.path === location.pathname.split(prefix)[1]) return i;
    return acc;
  }, null);
}
