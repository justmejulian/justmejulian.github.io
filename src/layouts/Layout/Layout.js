import React from 'react';
import PropTypes from 'prop-types';
import './Layout.sass';

export default function Layout({ children }) {
  return (
    <div id="layout">
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with love by Julian Visser
      </footer>
    </div>
  );
}
