import React from 'react';

function Footer({
  prevRoute,
  nextRoute,
  onFooterLinkClick,
}) {
  return (
    <div className="footer__inner">
      { prevRoute
        ? (
          <button
            className="button"
            type="button"
            onClick={() => onFooterLinkClick(prevRoute.path)}
          >
            Previous
            <br />
            <span className="text--color--blue">
              —&nbsp;
              { prevRoute.name }
            </span>
          </button>
        )
        : <div />
      }

      { nextRoute
        ? (
          <button
            className="button text--right"
            type="button"
            onClick={() => onFooterLinkClick(nextRoute.path)}
          >
            Next
            <br />
            <span className="text--color--blue">
              { nextRoute.name }
              &nbsp;—
            </span>
          </button>
        )
        : <div />
      }
    </div>
  );
}

Footer.defaultProps = {
  prevRoute: null,
  nextRoute: null,
  onFooterLinkClick: () => {},
};

export default Footer;
