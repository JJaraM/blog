/**
 *
 * Date
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DateField(props) {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const { value } = props;
  let Component = () => (<div>Hi</div>);

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

  //const date = new Date(props.value);

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
