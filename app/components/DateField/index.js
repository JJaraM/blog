import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function DateField(props) {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const { value } = props;
  let Component = () => (<div>N/A</div>);

  if (value) {
    const date = new Date(value);
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    Component = () => (
      <div>
        { month } {day}, {year}
      </div>
    )
  }

  return (
    <>
      <Component />
    </>
  );
}

Date.propTypes = {
  value: PropTypes.any.isRequired,
};

export default memo(DateField);
