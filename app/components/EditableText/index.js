import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Markdown from 'react-markdown';
import Content from 'components/Content';
import EditableMetadata from 'components/EditableMetadata';

const FinalText = (props) => (
  <Content loading={ false }>
      <Markdown source={ props.content } escapeHtml={ false } editable={ true }/>
  </Content>
);

const TextArea = (props) => (
  <textarea value={ props.content } onChange={ props.onChangeContent}  />
);

function EditableText(props) {
  if (props.editable) {
    return (
      <>
        <EditableMetadata onSave={ props.onSave } onClose={ props.onClose }/>
        <TextArea content={ props.content } onChangeContent={ props.onChangeContent }/>
      </>
    )
  }

  return (
    <FinalText content={props.content} />
  );
}

EditableText.propTypes = {
  editable: PropTypes.bool,
  onSave: PropTypes.func,
  onClose: PropTypes.func,
};

export default memo(EditableText);
