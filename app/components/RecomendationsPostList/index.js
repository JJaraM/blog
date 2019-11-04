import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RecomendationPostItem from 'containers/RecomendationPostItem';
import RecomendationPostItemLoading from '../RecomendationPostItemLoading';
import RecomendationSubListPostItemLoading from '../RecomendationSubListPostItemLoading';
import { isLoadingComplete } from 'configuration/config';
import Container from '../Container';
import BigLeftContent from '../BigLeftContent';
import './style.scss';

function RecomendationsPostList(props) {
  
  const { items } =  props;
  items.sort((a,b)=> b.views - a.views)

  const principalItems = items.splice(0, 2);
  const secondaryItems = items.splice(2);

  let content = [1, 2].map(item => (
    <RecomendationPostItemLoading key={`recommendation-item-${item}`} />
  ));

  let subList = [3, 4, 5, 6].map(item => (
    <RecomendationSubListPostItemLoading key={`recommendation-item-${item}`} />
  ));

  if (isLoadingComplete(props.loading)) {
    content = principalItems.map(item => (
      <RecomendationPostItem key={`recommendation-item-${item.id}`} item={item} />
    ));

    subList = secondaryItems.map(item => {
      item.description = '';
      return <RecomendationPostItem  key={`item-${item.id}`} item={item} />  
    });
  
  }

  return (
    <Container>
      <BigLeftContent>
        {content}
      </BigLeftContent>
      <div className="col-lg-4 sublist">
        {subList}
      </div>
    </Container>
  );
}

RecomendationsPostList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


export default memo(RecomendationsPostList);
