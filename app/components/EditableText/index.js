import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Markdown from 'react-markdown';
import Content from 'components/Content';
import EditableMetadata from 'components/EditableMetadata';
import Col6 from 'components/Col6';
import Row from 'components/Row';
import EditorItemTableOfContent from 'components/EditorItemTableOfContent';
import EditorItemFileTree from 'components/EditorItemFileTree';
import EditorOpenFullScreen from 'components/EditorOpenFullScreen';
import EditorCloseFullScreen from 'components/EditorCloseFullScreen';
import './tooltipHref.scss';

const onHrefHover = (id, keepStatic) => {
  const tooltip = document.getElementById("#tooltip-text-span-" + id); //tooltip
  const text = document.getElementById("#text-" + id);//text
  const tooltipContainer = document.getElementById("#tooltip-text-" + id);
  if (tooltip) {
    tooltip.innerHTML = text.innerText;
  }
  if (tooltipContainer && keepStatic) {
    tooltipContainer.classList.add('tooltip-ref-static');
  }
}

const closeTooltip = (id) => {
  const tooltipContainer = document.getElementById("#tooltip-text-" + id);
  if (tooltipContainer) {
    tooltipContainer.classList.remove('tooltip-ref-static');
  }
}

const renderPCode = props => {
  const content = props.children.map(children => {
    let value = children.props.value;
    if (value.includes("<<") && (value.includes(">>"))) {
      value = value.replace("<<", "");
      value = value.replace(">>", "");

      return (
        <span className="token bullet bullet-fix">
          { value }
        </span>
      )
    }
    return children ;
  });

  /*return (
    <pre className={`language-${props.language}`}>
      <code className={`language-${props.language}`}>
        { props.value }
      </code>
    </pre>
  );
  */
  return (<p>{ content } </p>);
}

const renderImage = props => {

  if (props.href && props.href.includes("ref")) {
    return ( 
      <div className="tooltip-href">
        <span className="internal-nav" id={props.href} href={props.href} 
          onMouseEnter={() => onHrefHover(props.href, false)}
          onClick={() => onHrefHover(props.href, true)}
        >
          {props.children}
        </span>
        <div id={`#tooltip-text-${props.href}`} className="tooltip-href-text">
          <div className="tooltip-text-i-container">
            <i className="fa fa-times" aria-hidden="true" onClick={() => closeTooltip(props.href)}></i>
          </div>
          <span id={`#tooltip-text-span-${props.href}`}></span>
        </div>
      </div>
    )
  }

  return <a href={props.href}>{props.children}</a>
}

const FinalText = (props) => (
  <Content loading={ false }>
      <Markdown 
        source={ props.content } 
        escapeHtml={ false } 
        editable={ true }
        renderers={
          {link: renderImage}
          ,{paragraph: renderPCode}
        } 
      />
  </Content>
);

const TextArea = (props) => (
  <textarea id = {props.id} value={ props.content } onChange={ props.onChangeContent}  />
);

function EditableText(props) {
  if (props.editable) {
    return (
      <Row className="full-width-row">
        <EditableMetadata 
          onSave={ props.onSave } 
          onClose={ props.onClose } 
          onSaveStatus={ props.onSaveStatus }
        />
      
        <Row className="text-editor" id="fullscreen">
          <div className="col-lg-12">
            <div id="id-button-options-container" className="button-options-container">
              <EditorItemTableOfContent onChange = { props.onChangeContent } />
              <EditorItemFileTree onChange = { props.onChangeContent } />
              <i className="fa fa-github" aria-hidden="true"></i>  
              <EditorOpenFullScreen containerClassName="right" open="fullscreen" />
              <EditorCloseFullScreen containerClassName="right" close="fullscreen" />
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
