import React from 'react';

function getPath(location) {
  const isDev = process.env.NODE_ENV === 'development';

  return isDev
    ? location.pathname
    : location.pathname.split('/charm-docs')[1];
}

function isSamePath(location, path, hash) {
  if (location === path) {
    return true;
  }

  if (hash !== '') {
    return path.includes(hash);
  }

  if (path === '/') {
    return location === path;
  }

  return location.includes(path);
}

export function getUpdatedContent(contents, location) {
  return contents.map(content => Object.assign({}, content, {
    isCurrentPath: isSamePath(getPath(location), content.path, location.hash),
  }, content.content
    ? { content: getUpdatedContent(content.content, location) }
    : { content: content.content }
  ));
}

export function getCurrentRoute(contents, location) {
  return contents.reduce((acc, content) => {
    if (getPath(location) === content.path) return Object.assign({}, acc, content);
    else if (content.content) return Object.assign({}, acc, getCurrentRoute(content.content, location));
    return acc;
  }, {});
}

export function createContentStructure(contents, prevIndex = -1) {
  return contents.map((item, index, list) =>
    Object.assign({}, item, {
      bullet: prevIndex >= 0 ? `${prevIndex}.${index}` : `${index}`,
    }, item.content
        ? { content: createContentStructure(item.content, prevIndex >= 0 ? `${prevIndex}.${index}` : `${index}`) }
        : {})
  )
}

export function getRoute(contents, bullet, isPrev) {
  return contents.reduce((acc, item, index) => {
    if (item.bullet === bullet && (contents[index + 1] || contents[index - 1])) {
      acc = isPrev ? contents[index - 1] : contents[index + 1];
    }

    if (item.content && !acc) {
      return getRoute(item.content, bullet, isPrev);
    }

    return acc;
  }, null)
}

export function setDarkTheme() {
  document.documentElement.style.setProperty('--color-fontBlack', 'rgba(255, 255, 255, 1)');
  document.documentElement.style.setProperty('--color-fontMain', 'rgba(210, 210, 210, 1)');
  document.documentElement.style.setProperty('--color-bgMain', 'rgba(32, 32, 32, 1)');
  document.documentElement.style.setProperty('--color-bgMain-99', 'rgba(32, 32, 32, 1)');
  document.documentElement.style.setProperty('--color-bgYellow', 'rgba(45, 45, 45, 1)');
  document.documentElement.style.setProperty('--color-fontSecondary', 'rgba(170, 170, 170, 1)');
  document.documentElement.style.setProperty('--color-fontSecondary-70', 'rgba(170, 170, 170, 0.7)');
  document.documentElement.style.setProperty('--color-fontSecondary-light', 'rgba(100, 100, 100, 0.7)');
  document.documentElement.style.setProperty('--color-blue', 'rgba(74, 144, 226, 1)');
  document.documentElement.style.setProperty('--color-blue-20', 'rgba(74, 144, 226, 0.2)');
}

export function setLightTheme() {
  document.documentElement.style.setProperty('--color-fontBlack', 'rgba(46, 46, 46, 1)');
  document.documentElement.style.setProperty('--color-fontMain', 'rgba(51, 51, 51, 1)');
  document.documentElement.style.setProperty('--color-bgMain', 'rgba(253, 253, 253, 1)');
  document.documentElement.style.setProperty('--color-bgMain-99', 'rgba(253, 253, 253, 0.99)');
  document.documentElement.style.setProperty('--color-bgYellow', 'rgba(255, 224, 102, 0.1)');
  document.documentElement.style.setProperty('--color-fontSecondary', 'rgba(74, 74, 74, 1)');
  document.documentElement.style.setProperty('--color-fontSecondary-70', 'rgba(74, 74, 74, 0.7)');
  document.documentElement.style.setProperty('--color-fontSecondary-light', 'rgba(155, 155, 155, 0.7)');
  document.documentElement.style.setProperty('--color-blue', 'rgba(0, 82, 155, 1)');
  document.documentElement.style.setProperty('--color-blue-20', 'rgba(0, 82, 155, 0.7)');
}

export function getRewritedComponents(description) {
  return {
    h1: (props) => {
      const { children } = props;

      return (
        <h1 {...props}>
          { children }
          <p className="lead text--color--light margin-top--1">
            { description }
          </p>
        </h1>
      );
    },
  };
}
