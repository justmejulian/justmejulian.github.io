import React from 'react';
import PropTypes from 'prop-types';
import './Layout.sass';
import Nav from '../../components/Nav/Nav';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with love by Julian Visser
      </footer>
    </div>
  );
}
