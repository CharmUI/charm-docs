import 'charm-ui/dist/charm.tagged.css';
import 'highlight.js/styles/tomorrow-night.css';
import '../css/all.css';

import { MDXProvider } from "@mdx-js/tag";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Layout } from 'charm-ui/dist/esm/layout';

import Link from './Link';
import Logo from '../static/logo.png';
import contents from '../content/contents';

import {
  getUpdatedContent,
  getCurrentRoute,
  getCurrentContentIndex,
  setDarkTheme,
  setLightTheme,
  getRewritedComponents,
} from '../helpers';

let storage;
let isDesktop;

if (typeof window !== 'undefined') {
  storage = window.localStorage;
  isDesktop = window.matchMedia('(min-width: 576px)').matches;
}

class App extends Component {
  state = {
    showAside: false,
    theme: (storage && storage.getItem('theme')) || 'Light',
  }

  componentDidMount() {
    if (this.state.theme === 'Dark') {
      setDarkTheme();
    }
  }

  toggleAside = () => {
    this.setState({ showAside: !this.state.showAside });
  }

  toggleTheme = () => {
    if (this.state.theme === 'Light') {
      this.setState({ 'theme': 'Dark' });
      storage.setItem('theme', 'Dark');
      setDarkTheme();
    } else {
      this.setState({ 'theme': 'Light' });
      storage.setItem('theme', 'Light');
      setLightTheme();
    }
  }

  render() {
    const { children, location } = this.props;
    const { showAside, theme } = this.state;

    const currentContentIndex = getCurrentContentIndex(contents, location);
    const currentRoute = getCurrentRoute(contents, location);
    const prevRoute = contents[currentContentIndex - 1];
    const nextRoute = contents[currentContentIndex + 1];

    const content = [
      isDesktop
        ? undefined
        : {
          name: 'Menu',
          className: 'text--blue',
          type: 'button',
          onClick: this.toggleAside,
        },
      {
        name: currentRoute.name,
      },
      {
        name: theme === 'Light' ? 'Dark' : 'Light',
        type: 'button',
        onClick: this.toggleTheme,
      },
    ];

    return (
      <MDXProvider
        components={getRewritedComponents(currentRoute.description)}  
      >
        <Layout
          asideProps={{
            logo: (<img
              style={{ maxWidth: 60 }}
              src={Logo}
              alt="logo" />
            ),
            isShown: showAside,
            listProps: {
              LinkComponent: Link,
              listContents: getUpdatedContent(contents, location),
              onLinkClick: this.toggleAside,
            }
          }}
          navProps={{
            content: content.filter(item => item),
          }}
          footerProps={{
            nextRoute: nextRoute,
            prevRoute: prevRoute,
            onFooterLinkClick: path => navigate(path),
          }}
        >
          { children }
        </Layout>
      </MDXProvider>
    );
  }
}

App.defaultProps = {
  location: null,
};

App.propTypes = {
  location: PropTypes.shape(),
};

export default App;
