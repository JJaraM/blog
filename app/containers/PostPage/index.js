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

import { 
  makeItem, 
  makeEditable, 
  makeRenderDeleteModal,

  // Title
  makeEditTitle, 
  makeUpdateTitleStatus,

  // Content
  makeEditContent, 
  makeUpdateContentStatus,

  // Image
  makeEditImage,
  makeUpdateImageStatus,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import { 
  retrieve, 
  renderDeleteModal,

  //Content
  editContent, 
  changeContent, 
  updateContent,

  //Title
  editTitle, 
  changeTitle, 
  updateTitle,

  //Image
  editImage, 
  changeImage, 
  updateImage,
} from './actions';

import { makeIsAuthenticated } from 'containers/SignIn/selectors';

import PostImage from 'components/PostImage';
import Img from 'components/Img';
import PrincipalTitle from 'components/PrincipalTitle';
import PostHeader from 'components/PostHeader';
import Container from 'components/Container';
import ThirdSection from 'components/ThirdSection';
import BigLeftContainerFluid from 'components/BigLeftContainerFluid';
import SmallRightContainerFluid from 'components/SmallRightContainerFluid';
import ContainerFluid from 'components/ContainerFluid';
import EditableText from 'components/EditableText';
import Row from 'components/Row';
import IconContainer from 'components/IconContainer';
import IconEdit from 'components/IconEdit';
import IconDelete from 'components/IconDelete';
import TagContainer from 'containers/TagContainer';
import PostRelated from 'containers/PostRelated';
import DeletePost from 'containers/DeletePost';

import './style.scss';
import './tableOfContent.scss';

const Content = (props) => {

  let Component = () => (
    <>
      <BigLeftContainerFluid>
       
        <IconContainer>
          <IconEdit 
            render={ props.isAuthenticated } 
            onClick={ () => props.canEditContent(true) } 
          />
          
          <IconDelete
            render={ props.isAuthenticated } 
            onClick={ () => props.renderDeleteModal(true) } 
          />
        </IconContainer>

        <EditableText content={ props.content } />
      </BigLeftContainerFluid> 

      <SmallRightContainerFluid>
        <PostRelated tags={ props.tags } />
      </SmallRightContainerFluid>

    </>
  );

  // Here I need to return the value in this way, because if I used the component 
  // the edit does not work.
  if (props.editable) {
    return (
      <Container>
        <EditableText 
            editable={ props.editable } 
            content={ props.content } 
            onChangeContent={ props.onChangeContent } 
            onSave = { props.onSave } 
            onSaveStatus = { props.onSaveStatus }
            onClose = {() => props.canEditContent(false)} 
          />
      </Container>
    );
  }

  return <Component />
};

export function PostPage({
  match,
  item,
  isAuthenticated,
  onLoadPage,
  canRenderDeleteModal,
  onRenderDeleteModal,
  
  //Title
  onChangeTitle,
  editTitle,
  canEditTitle,
  updateTitleStatus,
  onUpdateTitle,

  //Content
  onChangeContent,
  editContent,
  canEditContent,
  updateContentStatus,
  onUpdateContent,

  //Image
  onChangeImage,
  editImage,
  canEditImage,
  updateImageStatus,
  onUpdateImage,
  
}) {
  
  useInjectReducer({ key: 'postPage', reducer });
  useInjectSaga({ key: 'postPage', saga });
  
  const id = match.params.id;
  
  if (item && item.id != id) {
    onLoadPage(id);
  }

  useEffect(() => {    
    onLoadPage(id);
  }, []);

  let content = '';
  let title = '';
  let image = '';
  let tags = [];

  if (item) {
    content = item.content;
    title = item.title;
    image = item.image;
    tags = item.tags;
  }

  let ImageInput = () => (<></>);

  if (isAuthenticated) {
    ImageInput = () => (
      <PrincipalTitle 
        title={ editImage ? image : '' } 
        center={ true } 
        divider={ false }
        editable = { !editImage }
        editableMode = { isAuthenticated }

        onChange = { onChangeImage }
        onEdit={ () => canEditImage(true) }
        onClose = { () => canEditImage(false) }
        
        onSave = { onUpdateImage }
        onSaveStatus = { updateImageStatus }

        loading = { image === '' }
      />
    );
  }

  return (
    <>
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
            editable = { !editTitle }
            editableMode = { isAuthenticated }

            onChange = { onChangeTitle }
            onEdit={ () => canEditTitle(true) }
            onClose = { () => canEditTitle(false) }
            
            onSave = { onUpdateTitle }
            onSaveStatus = { updateTitleStatus }

            loading = { title === '' }
          />
          <TagContainer item={item} usePost={true} />
        </PostHeader>
      </PostImage>
      <ThirdSection>
        <ContainerFluid>
            <Row>
              <Content 
                editable={ editContent } 
                content={ content } 
                onChangeContent={ onChangeContent } 
                tags={ tags } 
                isAuthenticated = { isAuthenticated }
                canEditContent = { canEditContent }
                onSave = { onUpdateContent } 
                onSaveStatus = { updateContentStatus }
                renderDeleteModal = { onRenderDeleteModal }
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

  // Title
  editTitle: makeEditTitle(),
  updateTitleStatus: makeUpdateTitleStatus(),

  // Content
  editContent: makeEditContent(),
  updateContentStatus: makeUpdateContentStatus(),

  // Image
  editImage: makeEditImage(),
  updateImageStatus: makeUpdateImageStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: (id) => dispatch(retrieve(id)),
    
    onChangeTitle: (evt) => dispatch(changeTitle(evt.target.value)),
    onUpdateTitle: () => dispatch(updateTitle()),
    canEditTitle: (editable) => dispatch(editTitle(editable)),
    
    onChangeContent: (evt) => dispatch(changeContent(evt.target.value)),
    onUpdateContent: () => dispatch(updateContent()),
    canEditContent: (editable) => dispatch(editContent(editable)),

    onChangeImage: (evt) => dispatch(changeImage(evt.target.value)),
    onUpdateImage: () => dispatch(updateImage()),
    canEditImage: (editable) => dispatch(editImage(editable)),

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
