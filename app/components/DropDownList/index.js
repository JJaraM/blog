import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ComboBoxItem from '../ComboBoxItem';

function DropDownList(props) {

  let items = props.items;

  if (items.length == 0) {
    items = <ComboBoxItem id="0" value="No Data" />
  }

  return (
    <>
      <button className="tag-button dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More
      </button>
      <div className="dropdown-menu" autoClose="nonInput" auto-close="disabled" >
        { props.children }
        <div className="pre-scrollable-tags">
          { items }
        </div>
      </div>
    </>
  );

}

DropDownList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  label: PropTypes.string.isRequired,
};

export default memo(DropDownList);
