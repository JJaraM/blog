import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PostPanelLeftSide from 'components/PostPanelLeftSide';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { retrieve, next, previous, resize } from './actions';
import { makeLoading, makeItemsTags, makeResize } from './selectors';
import CardDivider from '../../ui/CardItem/ImageCardDivider';
import CardImage from '../../ui/CardItem/CardImage';
import CardImageTag from '../../ui/CardItem/CardImageTag';
import CardInfoContainer from '../../ui/CardItem/ImageCardInfoContainer';
import CardInfoTitle from '../../ui/CardItem/ImageCardInfoTitle';
import CardInfoMetadata from '../../ui/CardItem/ImageCardInfoMetadata';
import CardInfoDescription from '../../ui/CardItem/ImageCardInfoDescription';
import CardContainer from '../../ui/CardItem';

export function PostRelated({
  tags,
  items,
  isMinimized,
  onLoadPage,
  onNext,
  onPrevious,
  onMinimize
}) {
  useInjectReducer({ key: 'postRelated', reducer });
  useInjectSaga({ key: 'postRelated', saga });

  useEffect(() => {
    onLoadPage(tags);
  }, []);

  if (items.length > 0 ) {
    let subList = items.map(item => {
      item = Object.assign({}, item, {description: ''})
      return (
          <div className="sublist" >
            <div className="row pb-30" key={`post-related-${item.id}`}>
              <div className="col-lg-12">
                <CardContainer key={`jjara-recommendation-item-${item.id}`}>
                  <CardDivider>
                    <CardImage href={`/post/${item.id}`} image={item.image}>
                      <CardImageTag tag={item.views} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle title={item.title} href={`/post/${item.id}`} />
                      <CardInfoMetadata date={item.updateDate} />
                      <CardInfoDescription description={item.description} />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>
              </div>
            </div>
          </div>
      )
    });

    return (
      <PostPanelLeftSide onMinimize={onMinimize} isMinimized={isMinimized}>
        <div className="recomendations-container">
          <i onClick={ onPrevious } className="fa fa-arrow-left" aria-hidden="true"></i>
          <i onClick={ onNext } className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div>{subList}</div>
      </PostPanelLeftSide>
    );
  }

  return <div />;
}

PostRelated.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  onLoadPage: PropTypes.func,
  items: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  items: makeItemsTags(),
  loaded: makeLoading(),

});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: (tags) =>  dispatch(retrieve(tags)),
    onNext: () => dispatch(next()),
    onPrevious: () => dispatch(previous()),
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
)(PostRelated);
