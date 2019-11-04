
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { makeText, makeItems } from './selectors';
import Container from 'components/Container';
import ContainerCenter from 'components/ContainerCenter'
import PrincipalTitle from 'components/PrincipalTitle';
import PostSearchItem from 'components/PostSearchItem';
import { search } from './actions';

import './style.scss';

export function SearchContainer({
  render,
  close,
  items,
  onChangeSearch,
  searchText,
}) {
  useInjectReducer({ key: 'searchContainer', reducer });
  useInjectSaga({ key: 'searchContainer', saga });

  if (render) {
    return (
      <div className="search-container">
        
        <Container>
          <div className="btn-close">
            <button className="btn-search fa fa-close" onClick={close}></button>
          </div>
        </Container>
       
        <div class="row h-100">
      
          <div class="col-sm-12 my-auto">
            <Container>
              <ContainerCenter>
                <PrincipalTitle center={true} title="search a post" divider={true} bottomDescription="Enter any word to fin the post"/>
              </ContainerCenter>
            </Container>
            <div className="pb-30">
              <Container>
                <ContainerCenter>
                  <input id="language" type="text" 
                    value={searchText} 
                    className="search" 
                    onChange={onChangeSearch} />
                </ContainerCenter>
              </Container>
            </div>
            <Container>
              <ContainerCenter>
                <PostSearchItem items={items} />
              </ContainerCenter>
            </Container>

            <Container>
              <div class="d-flex justify-content-center pb-30 z-index-999">
                <div class="button-container">
                  <span class="circle-button page-numbers">
                    <svg class="slinder-arrow-svg slinder-left-arrow" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 7 12">
                      <polyline fill="var(--main-title-color)" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "></polyline></svg></span></div><div class="button-container"><span class="circle-button page-numbers">
                        <svg class="slinder-arrow-svg slinder-right-arrow" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 7 12">
                        <polyline fill="var(--main-title-color)" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "></polyline></svg>
                   </span>
                 </div>
              </div>
            </Container>
          </div>

        </div>
      </div>
    );
  } 

  return (<div className="search-container-hide">

  </div>)
}

SearchContainer.propTypes = {
 
};

const mapStateToProps = createStructuredSelector({
  searchText: makeText(),
  items: makeItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (evt) => {
      dispatch(search(evt.target.value))
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
)(SearchContainer);
