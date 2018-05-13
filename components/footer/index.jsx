import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import styles from './styles.module.css';
import imgSrc from './img/cute-cat.gif';

export default class Footer extends Component {

  render() {

    return (
      <footer className={styles.footer}>
        <div className="page-inner">
          <div className={styles.inner}>
            <p>
              <img src={imgSrc} alt="Cat" width="30" /> Crafted by Emily Young
            </p>
            <p>
              <a href="https://github.com/livingincircuits/portfolio">View Source Code</a> &middot; <a href="https://www.linkedin.com/in/emily-jane-young/">LinkedIn</a> &middot; <a href="https://github.com/livingincircuits">Github</a> &middot; <a href="https://dribbble.com/livingincircuits">Dribbble</a> &middot; <a href="https://www.instagram.com/livingincircuits/">Instagram</a> &middot; <a href="mailto:emily@emily-young.com?subject=Hello">Email Me</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
