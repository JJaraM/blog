import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.scss';

function EditableMetadata(props) {
  const { onClose, onSave } = props;

  return (
    <div className="editable-metadata">
      <i className="fa fa-times-circle" onClick={ onClose }></i>
      <i className="fa fa-hdd-o" onClick={ onSave }></i>
    </div>
  );
}

EditableMetadata.propTypes = {
  onSave: PropTypes.func,
  onClose: PropTypes.func,
};

export default memo(EditableMetadata);
