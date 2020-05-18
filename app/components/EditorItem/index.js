import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { onClick } from 'common/editor';

function EditorItem(props) {
  return (
    <div className={`tooltip-editableText ${props.containerClassName}`}>
      <i className={ props.className } 
        aria-hidden="true" 
        onClick = { () => {
            if (props.event === 0) {
              props.onClick();
            } else {
              onClick(
                props.text, 
                props.event,
                props.onChange
              ) 
            }
          }
        }
      />   
    
    <span className="tooltiptext">
      { props.children }
    </span>
  </div> 
  );
}

EditorItem.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
  event: PropTypes.number,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(EditorItem);
