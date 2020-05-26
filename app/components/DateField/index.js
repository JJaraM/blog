import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

function DateField(props) {

  const monthNames = [
    <FormattedMessage {...messages.january } />, 
    <FormattedMessage {...messages.february } />,  
    <FormattedMessage {...messages.march } />, 
    <FormattedMessage {...messages.april } />, 
    <FormattedMessage {...messages.may } />, 
    <FormattedMessage {...messages.june } />, 
    <FormattedMessage {...messages.july } />, 
    <FormattedMessage {...messages.august } />, 
    <FormattedMessage {...messages.september } />, 
    <FormattedMessage {...messages.october } />, 
    <FormattedMessage {...messages.november } />, 
    <FormattedMessage {...messages.december } />, 
  ];

  const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }

  const { value } = props;
  let Component = () => (<div>N/A</div>);

  if (value) {
    const today = new Date();
    const date = new Date(value);
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const afterMinutes = today.getMinutes();
    const beforeMinutes = date.getMinutes();

    const afterHour = today.getHours();
    const beforeHour = date.getHours();

    const afterDay = today.getDate();
    const beforeDay = date.getDate();

    const afterYear = today.getFullYear();
    const beforeYear = date.getFullYear();

    const difference = today.getTime() - date.getTime(); // This will give difference in milliseconds
    const resultInMinutes = Math.round(difference / 60000);

    const diffInDays = afterDay - beforeDay;

    if (isToday(date)) {
      if (resultInMinutes <= 60) {
        Component = () => (
          <div>
            { resultInMinutes } minutes ago
          </div>
        );
      }
    } else if (diffInDays === 1 && afterYear === beforeYear) {
      Component = () => (
        <div>
          Yesterday
        </div>
      );
    } else {
      Component = () => (
        <div>
          { month } {day}, {year}
        </div>
      )
    }

  
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
