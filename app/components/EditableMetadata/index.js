import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import IconContainer from 'components/IconContainer';
import IconSave from 'components/IconSave';
import IconClose from 'components/IconClose';

import './style.scss';

function EditableMetadata(props) {
  const { onClose, onSave, onSaveStatus } = props;

  return (
    <div className="editable-metadata">
      <IconContainer>
          <IconSave
            status = { onSaveStatus }
            render={ true }
            onClick={ onSave }
          />

          <IconClose
            render={ true }
            onClick={ onClose }
          />
      </IconContainer>
    </div>
  );
}

EditableMetadata.propTypes = {
  onSave: PropTypes.func,
  onSaveStatus: PropTypes.number,
  onClose: PropTypes.func,
};

EditableMetadata.defaultProps = {
  onSaveStatus: 0,
}

export default memo(EditableMetadata);
