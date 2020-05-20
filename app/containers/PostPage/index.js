/**
 * Page that displayed the post information.
 * 
 * @author Jonathan Jara Morales
 * @since 20202-05-04 
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Helmet } from 'react-helmet';

import { 
  makeItem, 
  makeEditable, 
  makeRenderDeleteModal,
  makeEvents,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import { 
  retrieve, 
  renderDeleteModal,

  event,

  //Content
  changeContent, 
  updateContent,

  //Title
  changeTitle, 
  updateTitle,

  //Image
  changeImage, 
  updateImage,
} from './actions';

import { makeIsAuthenticated } from 'containers/SignIn/selectors';

import PostImage from 'components/PostImage';
import Img from 'components/Img';
import PrincipalTitle from 'components/PrincipalTitle';
import PostHeader from 'components/PostHeader';
import ThirdSection from 'components/ThirdSection';
import ContainerFluid from 'components/ContainerFluid';
import Row from 'components/Row';
import TagContainer from 'containers/TagContainer';
import DeletePost from 'containers/DeletePost';

import './style.scss';
import './tableOfContent.scss';

import PostEditableContent from 'components/PostEditableContent';

import { 
  EVENT_CHANGE_TITLE, 
  EVENT_CHANGE_IMAGE, 
  EVENT_CHANGE_CONTENT, 
  EVENT_CHANGE_TITLE_STATUS, 
  EVENT_CHANGE_IMAGE_STATUS, 
  EVENT_CHANGE_CONTENT_STATUS 
} from './constants';

function renderEditableComponent(eventValue, eventV) {
  let value = false;
  if (Array.isArray(eventValue)) {
    const array = eventValue.filter(event => event.event === eventV);
    if (array && array[0]) {
      value = array[0].value;
    }
  }
  return value;
}

function renderStatusComponent(eventValue, eventV) {
  let status = 0;
  if (Array.isArray(eventValue)) {
    const array = eventValue.filter(event => event.event === eventV);
    if (array && array[0]) {
      status = array[0].value === '' ? 0 : array[0].value;
    }
  }
  return status;
}

export function PostPage({
  match,
  item,
  isAuthenticated,
  onLoadPage,
  canRenderDeleteModal,
  onRenderDeleteModal,
  
  //Title
  onChangeTitle,
  onUpdateTitle,

  //Content
  onChangeContent,
  onUpdateContent,

  //Image
  onChangeImage,
  onUpdateImage,

  eventValue,
  canEdit
}) {
  
  useInjectReducer({ key: 'postPage', reducer });
  useInjectSaga({ key: 'postPage', saga });
  
  const id = match.params.id;

  const titleStatus = renderStatusComponent(eventValue, EVENT_CHANGE_TITLE_STATUS);
  const titleEditable = renderEditableComponent(eventValue, EVENT_CHANGE_TITLE);

  const imageEditable = renderEditableComponent(eventValue, EVENT_CHANGE_IMAGE);
  const imageStatus = renderStatusComponent(eventValue, EVENT_CHANGE_IMAGE_STATUS);
 
  const contentEditable = renderEditableComponent(eventValue, EVENT_CHANGE_CONTENT);
  const contentStatus = renderStatusComponent(eventValue, EVENT_CHANGE_CONTENT_STATUS);

  let content = item ? item.content : '';
  let title = item ? item.title : '';
  let image = item ? item.image : '';
  let tags = item ? item.tags : [];

  let ImageInput = () => (<></>);

  if (item && item.id != id) {
    onLoadPage(id);
  }

  useEffect(() => {    
    onLoadPage(id);
  }, []);

  if (isAuthenticated) {

    ImageInput = () => (
      <PrincipalTitle 
        title={ imageEditable ? image : '' } 
        center={ true } 
        divider={ false }
        editable = { !imageEditable }
        editableMode = { isAuthenticated }

        onChange = { onChangeImage }
        onEdit={ () => canEdit(EVENT_CHANGE_IMAGE, true) }
        onClose = { () => canEdit(EVENT_CHANGE_IMAGE, false) }
        
        onSave = { onUpdateImage }
        onSaveStatus = { imageStatus }

        loading = { image === '' }
      />
    );
  }

  return (
    <>
      <Helmet title={title} defaultTitle="Jonathan Jara Morales">
      </Helmet>

      <DeletePost 
        render={ canRenderDeleteModal }
        onClose= { () => onRenderDeleteModal(false) } 
        title = { title }
        id = { id }
      />

      <PostImage>
        <Img src={image}/>
        <PostHeader>
          <ImageInput />
          <PrincipalTitle 
            title={ title } 
            center={ true } 
            divider={ false }
            editable = { !titleEditable }
            editableMode = { isAuthenticated }
            onChange = { onChangeTitle }
            onEdit={ () => canEdit(EVENT_CHANGE_TITLE, true) }
            onClose = { () => canEdit(EVENT_CHANGE_TITLE, false) }
            onSave = { onUpdateTitle }
            onSaveStatus = { titleStatus }
            loading = { title === '' }
          />
          <TagContainer item={item} usePost={true} isAuthenticated = { isAuthenticated } />
        </PostHeader>
      </PostImage>
      <ThirdSection>
        <ContainerFluid>
            <Row>
              <PostEditableContent 
                editable={ contentEditable } 
                content={ content } 
                onChangeContent={ onChangeContent } 
                tags={ tags } 
                isAuthenticated = { isAuthenticated }
                canEdit = { canEdit }
                onSave = { onUpdateContent } 
                onSaveStatus = { contentStatus }
                renderDeleteModal = { onRenderDeleteModal }
                event = { EVENT_CHANGE_CONTENT }
              />
            </Row>
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
  isAuthenticated: makeIsAuthenticated(),
  canRenderDeleteModal: makeRenderDeleteModal(),
  eventValue: makeEvents(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: (id) => dispatch(retrieve(id)),
    
    onChangeTitle: (evt) => dispatch(changeTitle(evt.target.value)),
    onUpdateTitle: () => dispatch(updateTitle()),
   
    onChangeContent: (evt) => dispatch(changeContent(evt.target.value)),
    onUpdateContent: () => dispatch(updateContent()),
    
    onChangeImage: (evt) => dispatch(changeImage(evt.target.value)),
    onUpdateImage: () => dispatch(updateImage()),

    canEdit: (action, value) => dispatch(event(action, value)),

    onRenderDeleteModal: (render) => dispatch(renderDeleteModal(render)),
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
