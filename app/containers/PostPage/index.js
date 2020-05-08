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
  makeEditTitle, 
  makeEditContent, 
  makeRenderDeleteModal,
  makeUpdateTitleStatus,
  makeUpdateContentStatus
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import { 
  retrieve, 
  editContent, 
  changeContent, 
  changeTitle, 
  editTitle, 
  renderDeleteModal,
  updateTitle,
  updateContent
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
import Col6 from 'components/Col6';
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
        <Col6>
          <EditableText 
            editable={ false } 
            content={ props.content } 
            onChangeContent={ props.onChangeContent } 
          />
        </Col6>

        <Col6>
          <EditableText 
            editable={ props.editable } 
            content={ props.content } 
            onChangeContent={ props.onChangeContent } 
            onSave = { props.onSave } 
            onSaveStatus = { props.onSaveStatus }
            onClose = {() => props.canEditContent(false)} 
          />
        </Col6>
      </Container>
    );
  }

  return <Component />
};

export function PostPage({
  match,
  item,
  onLoadPage,
  onChangeContent,
  onChangeTitle,
  onRenderDeleteModal,
  onUpdateTitle,
  onUpdateContent,

  canEditTitle,
  canEditContent,
  canRenderDeleteModal,

  editTitle,
  editContent,
  isAuthenticated,

  updateTitleStatus,
  updateContentStatus,
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

  return (
    <>
      <DeletePost 
        render={ canRenderDeleteModal }
        onClose= { () => onRenderDeleteModal(false) } 
        title = { title }
      />

      <PostImage>
        <Img src={image}/>
        <PostHeader>
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
  editTitle: makeEditTitle(),
  editContent: makeEditContent(),
  isAuthenticated: makeIsAuthenticated(),
  canRenderDeleteModal: makeRenderDeleteModal(),
  updateTitleStatus: makeUpdateTitleStatus(),
  updateContentStatus: makeUpdateContentStatus(),
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
