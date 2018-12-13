import 'charm-ui/dist/charm.tagged.css';
import 'highlight.js/styles/tomorrow-night.css';
import '../css/all.css';

import { MDXProvider } from "@mdx-js/tag";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Layout, Aside, Nav } from 'charm-ui/dist/esm/layout';

import Link from './Link';
import List from './List';
import Footer from './Footer';
import Logo from '../static/logo.png';
import contents from '../content/contents';

import {
  getUpdatedContent,
  getCurrentRoute,
  setDarkTheme,
  setLightTheme,
  getRewritedComponents,
  createContentStructure,
  getRoute,
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

    const content = createContentStructure(contents);
    const currentRoute = getCurrentRoute(content, location);
    const nextRoute = getRoute(content, currentRoute.bullet, false);
    const prevRoute = getRoute(content, currentRoute.bullet, true);

    const navContent = [
      isDesktop
        ? undefined
        : (
          <button
            type="button"
            className="button text--small"
            onClick={this.toggleAside}
          >
            <small className="small">Menu</small>
          </button>
        ),
      ( <small className="small">{ currentRoute.name }</small> ),
      (
        <button
          type="button"
          className="button text--small"
          onClick={this.toggleTheme}
        >
          <small className="small">{ theme === 'Light' ? 'Dark' : 'Light' }</small>
        </button>
      ),
    ];

    return (
      <MDXProvider
        components={getRewritedComponents(currentRoute.description)}  
      >
        <Layout
          isAsideShown={showAside}
          aside={(
            <Aside
              logo={(
                <img
                  style={{ maxWidth: 60 }}
                  src={Logo}
                  alt="logo"
                />
              )}
            >
              <List
                LinkComponent={ Link }
                listContents={ getUpdatedContent(content, location) }
                onLinkClick={ this.toggleAside }
              />
            </Aside>
          )}
          nav={(
            <Nav content={ navContent.filter(item => item) } />
          )}
          footer={(
            <Footer 
              nextRoute={ nextRoute }
              prevRoute={ prevRoute }
              onFooterLinkClick={ path => navigate(path) }
            />
          )}
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
