import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DropDownList from '../DropDownList';
import { getFilterList } from '../../containers/TagComboBox/service';
import ComboBoxItem from '../ComboBoxItem';

import './style.scss';

/**
 * Component use to render a dropdown list with their elements,
 *
 * This component has the ability to clear the text automatically in the onClick event when
 * the close button is press it.
 *
 * @param items list of items that are going to be displayed inside of the dropdown list
 * @param label label of the dropdown list that will be visible for the user
 * @param onChange event that is going to be used when someone write something on the filter and is going to filter the elements
 * @param onClick event that is going to trigger when someone press a item in the dropdown list
 * @param value that will be displayed in each element for the dropdown list
 * @returns {JSX.Element|null} the component to be displayed or nothing
 */
function ComboBox(props) {
  const filterList = getFilterList(props.items, props.value);

  if (props.items.length > 0) {
    const more = filterList.map(item => {
      const key = _.uniqueId('jjara-combo-box-item-key-');
      return <ComboBoxItem id={item.id} key={key} value={item.name} onClick={props.onClick} />;
    });

    return (
      <DropDownList items={more} label={props.label}>
        <span className="jjara-comboBox-icon jjara-comboBox-icon-search">
          <i className="fa fa-search" />
        </span>
        <input
          type="text"
          value={props.value}
          className="search-filter-dropdown-list"
          onChange={props.onChange}
        />
        {/*
         * This is a hack because I was getting issues in the clear event when someone press the button,
         * because the dropdown list were closing automatically
         */}
        <span className="jjara-comboBox-icon jjara-comboBox-icon-clear">
          {/*
           * I need to set the value as empty so in that way the event takes this empty value and clear the value
           * that was set by reflux in the previous action.
           */}
          <input
            type="text"
            value=""
            className="jjara-fake-close-input"
            onClick={props.onChange}
            onChange={props.onChange}
          />
          <i className="fa fa-close" />
        </span>
      </DropDownList>
    );
  }
  return null;
}

ComboBox.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default memo(ComboBox);
