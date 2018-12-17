import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Example({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={ `example ${className}` }
      {...restProps}
    >
      { children }
    </div>
  );
}

Example.defaultProps = {
  className:'',
};

Example.propTypes = {
  className: PropTypes.string,
};

export default memo(Example);
