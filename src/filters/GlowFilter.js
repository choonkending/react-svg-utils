import React from 'react';

const GlowFilter = ({ id, stdDeviation, children }) => (
  <g>
    <filter id={id}>
      <feGaussianBlur in="SourceGraphic" stdDeviation={stdDeviation} result="colouredBlur"/>
      <feMerge>
        <feMergeNode in="colouredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    {
      React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          filter: `url(#${id})`
        });
      })
    }
  </g>
);

export default GlowFilter;

