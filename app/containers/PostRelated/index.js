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
import CardDivider from '../../ui/CardItem/CardDivider';
import CardImage from '../../ui/CardItem/CardImage';
import CardImageTag from '../../ui/CardItem/CardImageTag';
import CardInfoContainer from '../../ui/CardItem/CardInfoContainer';
import CardInfoTitle from '../../ui/CardItem/CardInfoTitle';
import CardInfoMetadata from '../../ui/CardItem/CardInfoMetadata';
import CardInfoDescription from '../../ui/CardItem/CardInfoDescription';
import CardContainer from '../../ui/CardItem';
import Pagination from '../../ui/Pagination';
import LoadingLine from '../../components/LoadingLine';

export function PostRelated({
  tags,
  items,
  isMinimized,
  onLoadPage,
  onNext,
  onPrevious,
  onMinimize,
  isLoading,
}) {
  useInjectReducer({ key: 'postRelated', reducer });
  useInjectSaga({ key: 'postRelated', saga });

  useEffect(() => {
    onLoadPage(tags);
  }, []);

  if (items.length > 0) {
    let subList = items.map(item => {
      item = Object.assign({}, item, { description: '' });
      return (
        <div className="sublist">
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
      );
    });

    return (
      <PostPanelLeftSide onMinimize={onMinimize} isMinimized={isMinimized}>
        <Pagination onNext={onNext} onPrevious={onPrevious} />
        <div>{subList}</div>
      </PostPanelLeftSide>
    );
  }

  if (isLoading) {
    const style = {
      width: '330px',
    };

    return (
      <div className="post-text" style={style}>
        <div className="loading-enter" />
        <LoadingLine widthUnit="%" width={48} height={100} />
        <LoadingLine
          widthUnit="%"
          width={48}
          height={60}
          primaryBgColor="jjara-loading-primary-date-metadata-bg-color"
          secondaryBgColor="jjara-loading-primary-date-metadata-bg-color"
        />
        <LoadingLine widthUnit="%" width={48} height={35} />

        <LoadingLine widthUnit="%" width={48} height={100} />
        <LoadingLine
          widthUnit="%"
          width={48}
          height={60}
          primaryBgColor="jjara-loading-primary-date-metadata-bg-color"
          secondaryBgColor="jjara-loading-primary-date-metadata-bg-color"
        />
        <LoadingLine widthUnit="%" width={48} height={35} />

        <LoadingLine widthUnit="%" width={48} height={100} />
        <LoadingLine
          widthUnit="%"
          width={48}
          height={60}
          primaryBgColor="jjara-loading-primary-date-metadata-bg-color"
          secondaryBgColor="jjara-loading-primary-date-metadata-bg-color"
        />
        <LoadingLine widthUnit="%" width={48} height={35} />
      </div>
    );
  }

  return <div />;
}

PostRelated.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  onLoadPage: PropTypes.func,
  items: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  items: makeItemsTags(),
  loaded: makeLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: tags => dispatch(retrieve(tags)),
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
