import React, { memo } from 'react';
import PropTypes from 'prop-types';
import EditorItem from 'components/EditorItem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

let TEXT_TABLE_OF_CONTENT = '```bash' + '\n';
    TEXT_TABLE_OF_CONTENT += '.' + '\n';
    TEXT_TABLE_OF_CONTENT += '.gitignore' + '\n';
    TEXT_TABLE_OF_CONTENT += '|-- src' + '\n';
    TEXT_TABLE_OF_CONTENT += '    |-- main' + '\n';
    TEXT_TABLE_OF_CONTENT += '        |-- java' + '\n';
    TEXT_TABLE_OF_CONTENT += '    |-- test' + '\n';
    TEXT_TABLE_OF_CONTENT += '|-- resources' + '\n';
    TEXT_TABLE_OF_CONTENT += '```' + '\n';

const EVENT_TABLE_OF_CONTENT = 1;

function EditorItemFileTree(props) {
  return (
    <EditorItem className="fa fa-sitemap"
      onChange={ props.onChange }
      text={ TEXT_TABLE_OF_CONTENT }
      event={ EVENT_TABLE_OF_CONTENT }>
      <FormattedMessage {...messages.label} />
    </EditorItem>
  );
}

EditorItemFileTree.propTypes = {
  onChange: PropTypes.func
};

export default memo(EditorItemFileTree);
