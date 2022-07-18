import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ComboBoxItem from '../ComboBoxItem';

function DropDownList(props) {
  let { items } = props;
  let More = () => <></>;

  if (items && items.length == 0) {
    items = <ComboBoxItem key="jjara-combo-box-item-no-data" value="No Data" />;
  } else {
    More = () => (
      <button
        className="tag-button dropdown-toggle"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        More
      </button>
    );
  }

  return (
    <>
      <More />
      <div className="dropdown-menu dropdown">
        {props.children}
        <div className="pre-scrollable-tags">{items}</div>
      </div>
    </>
  );
}

DropDownList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default memo(DropDownList);
