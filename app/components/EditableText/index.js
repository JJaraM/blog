import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Markdown from 'react-markdown';
import Content from 'components/Content';
import EditableMetadata from 'components/EditableMetadata';
import Col6 from 'components/Col6';
import Row from 'components/Row';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const FinalText = (props) => (
  <Content loading={ false }>
      <Markdown source={ props.content } escapeHtml={ false } editable={ true }/>
  </Content>
);

const TextArea = (props) => (
  <textarea id = {props.id} value={ props.content } onChange={ props.onChangeContent}  />
);

let TEXT_TABLE_OF_CONTENT = '# Table Of Contents' + '\n';
    TEXT_TABLE_OF_CONTENT += '* [Title 1] (#1)' + '\n';
    TEXT_TABLE_OF_CONTENT += '   * [Title 1.1] (#1.1)' + '\n';
    TEXT_TABLE_OF_CONTENT += '   * [Title 1.2] (#1.2)' + '\n';
    TEXT_TABLE_OF_CONTENT += '     * [Title 1.2.1] (#1.2.1)' + '\n';
    TEXT_TABLE_OF_CONTENT += '     * [Title 1.2.2] (#1.2.2)' + '\n';
    TEXT_TABLE_OF_CONTENT += '* [Title 2] (#2)' + '\n';

const EVENT_TABLE_OF_CONTENT = 1;

const onClickMenuOption = (txt, event, onChange) => {
  const myField = document.getElementById('editable-text-id');
  const myValue = txt;

  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }

  //MOZILLA and others
  else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos)
          + myValue
          + myField.value.substring(endPos, myField.value.length);
      myField.selectionStart = startPos + myValue.length;
      myField.selectionEnd = startPos + myValue.length;
  } else {
      myField.value += myValue;
  }

  const txtEvent = {
    target : {
      value : myField.value
    }
  };

  onChange(txtEvent);
}

function EditableText(props) {
  if (props.editable) {
    return (
      <Row className="full-width-row">
        <EditableMetadata 
          onSave={ props.onSave } 
          onClose={ props.onClose } 
          onSaveStatus={ props.onSaveStatus }
        />
      
        <Row className="text-editor">
          <div className="col-lg-12">
          
            <div className="button-options-container">
              
              <div class="tooltip-editableText">
                
                <i className="fa fa-bars" 
                  aria-hidden="true" 
                  onClick = { () => 
                    onClickMenuOption(
                      TEXT_TABLE_OF_CONTENT, 
                      EVENT_TABLE_OF_CONTENT,
                      props.onChangeContent
                    ) 
                  }
                />   
                
                <span class="tooltiptext">
                  <FormattedMessage {...messages.tableOfContents} />
                </span>
              </div> 

              <i className="fa fa-github" aria-hidden="true"></i>        
            </div>
          </div>

         
          <Col6>
          
            <TextArea id='editable-text-id' content={ props.content } onChangeContent={ props.onChangeContent }/>
          </Col6>

          <Col6>
            <FinalText content={props.content} />
          </Col6>
        </Row>
      </Row>
    )
  }

  return (
    <FinalText content={props.content} />
  );
}

EditableText.propTypes = {
  editable: PropTypes.bool,
  onSave: PropTypes.func,
  onSaveStatus: PropTypes.number,
  onClose: PropTypes.func,
};

EditableText.defaultProps = {
  onSaveStatus: 0,
};

export default memo(EditableText);
