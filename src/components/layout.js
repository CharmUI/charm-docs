import 'charm-ui/dist/charm.tagged.css';
import 'highlight.js/styles/tomorrow-night.css';
import '../css/all.css';

import { MDXProvider } from "@mdx-js/tag";
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import {
  Layout,
  Footer,
  Aside,
  Nav,
  List,
} from 'charm-ui/dist/esm/layout';

import getLink from './Link';

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

function App({ children, location = window.location }) {
  const currentContentIndex = getCurrentContentIndex(contents, location);
  const currentRoute = getCurrentRoute(contents, location);
  const prevRoute = contents[currentContentIndex - 1];
  const nextRoute = contents[currentContentIndex + 1];

  const LayoutAside = (
    <Aside
      logo={'Charm UI'}
      nav={(
        <List
          links={getUpdatedContent(contents, location)}
          LinkComponent={getLink()}
          HashLinkComponent={getLink(true)}
        />
      )}
    />
  );

  const LayoutNav = (
    <Nav
      title={currentRoute.name}
      lastUpdate={currentRoute.lastUpdate}
      version={'0.5.1'}
    />
  );

  const LayoutFooter = (
    <Footer
      prevRoute={prevRoute}
      nextRoute={nextRoute}
      onClickHandler={path => navigate(path)}
    />
  );
  return (
    <MDXProvider
      components={rewritedComponents}  
    >
      <Layout
        aside={LayoutAside}
        nav={LayoutNav}
        footer={LayoutFooter}
      >
        { children }
      </Layout>
    </MDXProvider>
  );
}

App.defaultProps = {
  location: null,
};

App.propTypes = {
  location: PropTypes.shape(),
};

export default App;
