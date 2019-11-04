/**
 *
 * EditableText
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as Markdown from 'react-markdown';
import Content from 'components/Content';

const FinalText = (props) => (
  <Content loading={false}>
      <Markdown source={props.content} escapeHtml={false} editable={true}/>
  </Content>
);

const TextArea = (props) => (
  <textarea value={props.content} onChange={props.onChangeContent} />
);

function EditableText(props) {
  if (props.editable) {
    return <TextArea content={props.content} onChangeContent={props.onChangeContent}/>
  }

  return (
    <FinalText content={props.content} />
  );
}

EditableText.propTypes = {};

export default memo(EditableText);
