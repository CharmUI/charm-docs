import 'charm-ui/dist/charm.tagged.css';
import 'highlight.js/styles/tomorrow-night.css';
import '../css/all.css';

import { MDXProvider } from "@mdx-js/tag";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Layout } from 'charm-ui/dist/esm/layout';

import Logo from '../static/logo.png';
import LogoLight from '../static/logo-light.png';
import Link from './Link';
import contents from '../content/contents';

import {
  getUpdatedContent,
  getCurrentRoute,
  getCurrentContentIndex,
} from '../helpers';

const rewritedComponents = {
  h1: (props) => {
    const { children } = props;

    return (
      <h1 {...props}>
        { children }
        <p className="lead text--light margin-top--1">
          This page is an overview of the React documentation and related resources.
        </p>
      </h1>
    );
  },
};

const storage = window.localStorage;

class App extends Component {
  state = {
    showAside: false,
    theme: storage.getItem('theme') || 'light',
  }

  toggleAside = () => {
    this.setState({ showAside: !this.state.showAside });
  }

  toggleTheme = () => {
    if (storage.getItem('theme') === 'light') {
      this.setState({ 'theme': 'dark' });
      storage.setItem('theme', 'dark');

      document.documentElement.style.setProperty('--color-fontBlack', 'rgba(255, 255, 255, 1)');
      document.documentElement.style.setProperty('--color-fontMain', 'rgba(247, 247, 247, 1)');
      document.documentElement.style.setProperty('--color-bgMain', 'rgba(32, 32, 32, 1)');
      document.documentElement.style.setProperty('--color-bgMain-99', 'rgba(32, 32, 32, 1)');
      document.documentElement.style.setProperty('--color-bgYellow', 'rgba(45, 45, 45, 1)');
      document.documentElement.style.setProperty('--color-fontSecondary', 'rgba(170, 170, 170, 1)');
      document.documentElement.style.setProperty('--color-fontSecondary-70', 'rgba(170, 170, 170, 0.7)');
      document.documentElement.style.setProperty('--color-blue', 'rgba(74, 144, 226, 1)');
      document.documentElement.style.setProperty('--color-blue-20', 'rgba(74, 144, 226, 0.2)');
    } else {
      this.setState({ 'theme': 'light' });
      storage.setItem('theme', 'light');

      document.documentElement.style.setProperty('--color-fontBlack', 'rgba(33, 33, 33, 1)');
      document.documentElement.style.setProperty('--color-fontMain', 'rgba(51, 51, 51, 1)');
      document.documentElement.style.setProperty('--color-bgMain', 'rgba(253, 253, 253, 1)');
      document.documentElement.style.setProperty('--color-bgMain-99', 'rgba(253, 253, 253, 0.99)');
      document.documentElement.style.setProperty('--color-bgYellow', 'rgba(255, 224, 102, 0.1)');
      document.documentElement.style.setProperty('--color-fontSecondary', 'rgba(74, 74, 74, 1)');
      document.documentElement.style.setProperty('--color-fontSecondary-70', 'rgba(74, 74, 74, 0.7)');
      document.documentElement.style.setProperty('--color-blue', 'rgba(0, 82, 155, 1)');
      document.documentElement.style.setProperty('--color-blue-20', 'rgba(0, 82, 155, 0.7)');
    }
  }

  render() {
    const isDesktop = window.matchMedia('(min-width: 576px)').matches;
    const { children, location } = this.props;
    const { showAside } = this.state;
    console.log(storage.getItem('theme'))

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
        name: 'Dark',
        type: 'button',
        onClick: this.toggleTheme,
      },
    ];

    return (
      <MDXProvider
        components={rewritedComponents}  
      >
        <Layout
          asideProps={{
            logo: (<img
              style={{ maxWidth: 85 }}
              src={storage.getItem('theme') === 'light' ? Logo : LogoLight}
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
