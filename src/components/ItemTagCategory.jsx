import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const ItemTagCategory = ({ category, path, title, date, timeToRead, excerpt }) => (

  <Link className="post-block__item" to={path}>

    <article className="post-block__bordered">

      <div className="post-block__content">
        <h2 className="post-block__title">
          {title}
        </h2>
        <p className="post-block__date">
          {date} &mdash; Time to Read: {timeToRead} Min
        </p>
        <p className="post-block__text">
          {excerpt}
        </p>
      </div>

    </article>

  </Link>

);

export default ItemTagCategory;

ItemTagCategory.propTypes = {
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string.isRequired,
};
