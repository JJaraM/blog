import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeItem } from './selectors';
import reducer from './reducer';
import messages from './messages';
import saga from './saga';
import { retrieve } from './actions';
import * as Markdown from 'react-markdown';
import Content from 'components/Content';
import { createGlobalStyle } from 'styled-components';
import './style.scss';
import PostTagList from 'components/PostTagList';
import { makeTagItems } from '../TagContainer/selectors';

export function PostPage({
  match,
  item,
  tags,
  onLoadPage
}) {
  
  useInjectReducer({ key: 'postPage', reducer });
  useInjectSaga({ key: 'postPage', saga });

  const id = match.params.id;

  useEffect(() => {    
    onLoadPage(id);
  }, []);

  if (!item) {
    return (<div>Hi</div>);
  }

  const CustomStyle = createGlobalStyle`
    .parent::before {
      content: '';
      position: absolute;
      height: 70%;
      width: 100%;
      top:0;
      left: 0;
      background-image: url(${item.image});
      filter: blur(25px);
      z-index: 2;
      transform:scale(1.05); 
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  `;

  return (
    <>
      
      <div class="grand-parent">
        
        <div class="parent" >
          <div className="container">
            <div className="img-background-overlay"></div>
            <div className="home_slider_content_container">
              <div className="principal-title mb-30 mt-30">
                <h1>
                  {item.title}
                </h1>
              </div>
              <PostTagList ids={item.tags} items={tags}/>
            </div>
           
          </div>
        </div>
    
      </div>

      <div className="main-bg-color">
          <div className="container">
            <div className="col-lg-8">
              
              <div className="container">
                <Content>
                  <Markdown source={item.content} escapeHtml={false}/>
                </Content>
              </div>
            </div>
          </div>
      </div>
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
  tags: makeTagItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: (id) => {
      dispatch(retrieve(id));
    },
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
