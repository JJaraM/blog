import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeItem, makeEditable } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { retrieve, editable, changeContent, changeTitle } from './actions';

import './style.scss';
import './tableOfContent.scss';

import PrincipalTitle from 'components/PrincipalTitle';
import Field from 'components/Field';
import PostHeader from 'components/PostHeader';
import PostImage from 'components/PostImage';
import ThirdSection from 'components/ThirdSection';
import BigLeftContainerFluid from 'components/BigLeftContainerFluid';
import SmallRightContainerFluid from 'components/SmallRightContainerFluid';
import ContainerFluid from 'components/ContainerFluid';
import EditableText from 'components/EditableText';
import TagContainer from '../TagContainer';

const Content = (props) => {
  if (props.editable) {
    return (
      <>
        <div className="col-lg-6">
          <EditableText editable={props.editable} content={props.content} onChangeContent={props.onChangeContent} />
        </div>

        <div className="col-lg-6">
          <EditableText editable={false} content={props.content} onChangeContent={props.onChangeContent} />
        </div>
      </>
    )
  }

  return (
    <>
      <BigLeftContainerFluid className='big-left-container-fluid'>
        <EditableText editable={props.editable} content={props.content} onChangeContent={props.onChangeContent} />
      </BigLeftContainerFluid> 
      <SmallRightContainerFluid className='small-right-container-fluid '>
        <EditableText editable={props.editable} content={props.content} onChangeContent={props.onChangeContent} />
      </SmallRightContainerFluid>
    </>     
  )
};

const Title = (props) => {
  if (props.editable) {
    return (
      <>
        <PrincipalTitle 
          title={ props.title } 
          center={ true } 
          divider={ false }
        />
        <div className="title-editable">
          <input className="search title" value={props.title} onChange={ props.onChangeTitle } />
        </div>
      </>
    );
  }

  return (
    <PrincipalTitle 
      title={ props.title } 
      center={ true } 
      divider={ false }
    />
  );
};	

export function PostPage({
  match,
  item,
  onLoadPage,
  onEdit,
  onChangeContent,
  onChangeTitle,
  editable
}) {
  
  useInjectReducer({ key: 'postPage', reducer });
  useInjectSaga({ key: 'postPage', saga });

  const id = match.params.id;
  window.addEventListener('keydown', onEdit);

  if (item && item.id != id) {
    onLoadPage(id);
  }

  useEffect(() => {    
    onLoadPage(id);
  }, []);

  let content = '';
  let title = '';

  if (item) {
    content = item.content;
    title = item.title;
  }

  return (
    <>
      <PostImage>
        <Field obj={item} property="image" />
        <PostHeader>
          <Title title={ title } editable={ editable } onChangeTitle={ onChangeTitle }/>
          <TagContainer item={item} usePost={true} />
        </PostHeader>
      </PostImage>

      <ThirdSection>
          <ContainerFluid>
              <div className="row">
                <Content editable={editable} content={content} onChangeContent={onChangeContent} />
              </div>
          </ContainerFluid>
      </ThirdSection>
       
    </>
  );
}

PostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  item: makeItem(),
  editable: makeEditable(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: (id) => dispatch(retrieve(id)),
    onEdit: (zEvent) => {
      if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "e") {  // case sensitive
        dispatch(editable())
      }
    },
    onChangeContent: (evt) => dispatch(changeContent(evt.target.value)),
    onChangeTitle: (evt) => dispatch(changeTitle(evt.target.value)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostPage);
