import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function MainLink({
  path,
  name,
  exact,
  className,
  onClick,
}) {
  return (
    <Link
      to={path}
      exact={exact.toString()}
      className={ `text--size--medium text--color--light text--weight--medium text--no-decoration ${className}` }
      activeClassName="is-active"
      onClick={onClick}
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
  onClick: () => {},
};

MainLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  exact: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(MainLink);
