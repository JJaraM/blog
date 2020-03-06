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
import { createGlobalStyle } from 'styled-components';

import './style.scss';
import './tableOfContent.scss';

import PrincipalTitle from 'components/PrincipalTitle';
import PostHeader from 'components/PostHeader';
import ThirdSection from 'components/ThirdSection';
import BigLeftContainerFluid from 'components/BigLeftContainerFluid';
import SmallRightContainerFluid from 'components/SmallRightContainerFluid';
import ContainerFluid from 'components/ContainerFluid';
import EditableText from 'components/EditableText';
import TagContainer from '../TagContainer';
import PostRelated from '../PostRelated';

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
        <PostRelated tags={ props.tags } />
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
  let image = '';
  let tags = [];

  if (item) {
    content = item.content;
    title = item.title;
    image = item.image;
    tags = item.tags;
  }

  const CustomStyle = createGlobalStyle`

    .bg-img {
      height: 40vh;
      overflow: hidden;
      border-radius: 5px;
      top: 10px;
      bottom: 10px;
    }

   .bg-img::before {
     content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      /* filter: blur(25px); */
      z-index: 2;
      transform: scale(1.05);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url(${image});
   }

   .home_slider_content_container {
     width: 100%;
     padding-top: 0% !important;
   }

   .parent {
    height: 100% !important;
    padding-bottom: 10px;
   }

   .big-left-container-fluid {
    background: var(--main-bg-color) !important;
    background-image: linear-gradient(200deg,#292929 0%,var(--main-bg-color) 100%) !important;
    color: #FFF !important;
   }

   .big-left-container-fluid {
     background: var(--secondary-bg-color) !important;
   }

   .small-right-container-fluid {
    background: var(--main-bg-color) !important;
    background-image: linear-gradient(200deg,#292929 0%,var(--main-bg-color) 100%) !important;
    color: var(--main-title-color) !important;
    height: 100%;
   }

   .third-section {
    background: var(--secondary-bg-color) !important;
   }
 
   .text-content h1+ul {
    background: var(--main-bg-color) !important;
    background-image: linear-gradient(200deg,#292929 0%,var(--main-bg-color) 100%)  !important;
    border: transparent !important;
   }

   .text-content ul li:before {
    color: #FFF !important;
   }

 `;

  return (
    <>
      {/*<PostImage>
        <Field obj={item} property="image" />
        <PostHeader>
          <Title title={ title } editable={ editable } onChangeTitle={ onChangeTitle }/>
          <TagContainer item={item} usePost={true} />
        </PostHeader>
      </PostImage>

      <img src={item.image}/>
 */}
      
        <ThirdSection>
          <div className="bg-img col-md-10 offset-md-1 col-md-pull-1 "></div>
          <PostHeader>
              <Title title={ title } editable={ editable } onChangeTitle={ onChangeTitle }/>
              <TagContainer item={item} usePost={true} />
          </PostHeader>  
        </ThirdSection>
        <ThirdSection>
          <ContainerFluid>
              <div className="row">
                <Content editable={editable} content={content} onChangeContent={onChangeContent} tags={tags} />
              </div>
          </ContainerFluid>
        </ThirdSection>
      <CustomStyle />
       
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
