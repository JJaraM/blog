import React, { memo } from 'react';
import PropTypes from 'prop-types';
import EditorItem from 'components/EditorItem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { closeFullScreen } from 'common/editor';

const EVENT_TABLE_OF_CONTENT = 0;

function EditorCloseFullScreen(props) {
  return (
    <EditorItem className='fa fa-compress'
      containerClassName={ props.containerClassName }
      onClick={ () => closeFullScreen(props.close) }
      event={ EVENT_TABLE_OF_CONTENT }>
      <FormattedMessage {...messages.label} />
    </EditorItem>
  );
}

EditorCloseFullScreen.propTypes = {
  close: PropTypes.string,
  containerClassName: PropTypes.string
};

export default memo(EditorCloseFullScreen);
