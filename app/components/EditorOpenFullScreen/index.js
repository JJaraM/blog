import React, { memo } from 'react';
import PropTypes from 'prop-types';
import EditorItem from 'components/EditorItem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { fullScreen } from 'common/editor';

const EVENT_TABLE_OF_CONTENT = 0;

function EditorOpenFullScreen(props) {
  return (
    <EditorItem className='fa fa-expand'
      containerClassName={ props.containerClassName }
      onClick={ () => fullScreen(props.open) }
      event={ EVENT_TABLE_OF_CONTENT }>
      <FormattedMessage {...messages.label} />
    </EditorItem>
  );
}

EditorOpenFullScreen.propTypes = {
  open: PropTypes.string,
  containerClassName: PropTypes.string
};

export default memo(EditorOpenFullScreen);
