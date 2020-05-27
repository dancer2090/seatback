/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'frontity';

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  'aria-current': ariaCurrent,
}) => {
  const onClick = (event) => {
    // Do nothing if it's an external link
    if (link.startsWith(state.frontity.url)) {
      event.preventDefault();
      actions.router.set(link.replace(state.frontity.url, ''));
    } else if (link.startsWith(state.frontity.adminUrl)) {
      event.preventDefault();
      actions.router.set(link.replace(state.frontity.adminUrl, ''));
    } else {
      if (link.startsWith('http')) return;
      event.preventDefault();
      // Set the router to the new url.
      actions.router.set(link);
      // Scroll the page to the top
    }
    window.scrollTo(0, 0);
    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
};

export default connect(Link);
