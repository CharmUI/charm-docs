import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function MainLink({
  path,
  name,
  exact,
}) {
  return (
    <li className="list-item--style-none">
      <Link
        to={path}
        exact={exact || false}
        className="link_main"
        activeClassName="is-active"
      >
        { name }
      </Link>
    </li>
  );
}

function HashLink({
  path,
  name,
}) {
  return (
    <li>
      <Link
        to={path}
        className="link_main link_small"
        activeClassName="is-active"
      >
        { name }
      </Link>
    </li>
  );
}

HashLink.defaultProps = {
  path: null,
  name: null,
};

HashLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

MainLink.defaultProps = {
  path: null,
  name: null,
  exact: false,
};

MainLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  exact: PropTypes.bool,
};

export default function (isHashed = false) {
  return isHashed
    ? memo(HashLink)
    : memo(MainLink);
}
