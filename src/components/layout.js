import 'charm-ui/dist/charm.tagged.css';
import 'highlight.js/styles/tomorrow-night.css';
import '../css/all.css';

import { MDXProvider } from "@mdx-js/tag";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Layout } from 'charm-ui/dist/esm/layout';

import Logo from '../static/logo.png';
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

class App extends Component {
  state = {
    showAside: false,
  }

  toggleAside = () => {
    this.setState({ showAside: !this.state.showAside });
  }

  render() {
    const { children, location } = this.props;
    const { showAside } = this.state;

    const currentContentIndex = getCurrentContentIndex(contents, location);
    const currentRoute = getCurrentRoute(contents, location);
    const prevRoute = contents[currentContentIndex - 1];
    const nextRoute = contents[currentContentIndex + 1];

    return (
      <MDXProvider
        components={rewritedComponents}  
      >
        <Layout
          asideProps={{
            logo: (<img data-logo style={{ maxWidth: 85 }} src={Logo} alt="logo" />),
            isShown: showAside,
            listProps: {
              LinkComponent: Link,
              listContents: getUpdatedContent(contents, location),
              onLinkClick: this.toggleAside,
            }
          }}
          navProps={{
            title: currentRoute.name,
            version: '0.5.5',
            onButtonClick: this.toggleAside,
            buttonName: 'Menu'
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
