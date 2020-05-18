import React, { memo } from 'react';
import PropTypes from 'prop-types';
import EditorItem from 'components/EditorItem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

let TEXT_TABLE_OF_CONTENT = '# Table Of Contents' + '\n';
    TEXT_TABLE_OF_CONTENT += '* [Title 1] (#1)' + '\n';
    TEXT_TABLE_OF_CONTENT += '   * [Title 1.1] (#1.1)' + '\n';
    TEXT_TABLE_OF_CONTENT += '   * [Title 1.2] (#1.2)' + '\n';
    TEXT_TABLE_OF_CONTENT += '     * [Title 1.2.1] (#1.2.1)' + '\n';
    TEXT_TABLE_OF_CONTENT += '     * [Title 1.2.2] (#1.2.2)' + '\n';
    TEXT_TABLE_OF_CONTENT += '* [Title 2] (#2)' + '\n';

const EVENT_TABLE_OF_CONTENT = 1;

function EditorItemTableOfContent(props) {
  return (
    <EditorItem className="fa fa-bars"
      onChange={ props.onChange }
      text={ TEXT_TABLE_OF_CONTENT }
      event={ EVENT_TABLE_OF_CONTENT }>
      <FormattedMessage {...messages.tableOfContents} />
    </EditorItem>
  );
}

EditorItemTableOfContent.propTypes = {
  onChange: PropTypes.func
};

export default memo(EditorItemTableOfContent);
