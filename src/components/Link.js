import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function MainLink({
  path,
  name,
  exact,
  className,
}) {
  return (
    <Link
      to={path}
      exact={exact || false}
      className={ `link_main ${className}` }
      activeClassName="is-active"
    >
      { name }
    </Link>
  );
}

MainLink.defaultProps = {
  path: null,
  name: null,
  exact: false,
  className:'',
};

MainLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  exact: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(MainLink);
