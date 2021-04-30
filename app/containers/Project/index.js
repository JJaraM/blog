import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PrincipalTitle from 'components/PrincipalTitle';
import { selectItems } from '../RecommendationPostSection/selectors';
import RecomendationsPostList from '../../components/RecommendationPostList';

export function Project({ items }) {
  items = [
    {
      id: 0,
      title: 'React Dashboard',
      description: 'Example of a custom dashboard site to explore the benefits of react + reflux.',
      views: 0,
      updateDate: null,
      image: 'https://i.pinimg.com/originals/1e/83/1b/1e831bd9f9e5ceb53b51756c78072133.png',
    },
    {
      id: 0,
      title: 'Title',
      description: 'Descritpion',
      views: '',
      updateDate: null,
      image: 'https://github.com/JJaraM/Chameleon/raw/master/logo.png',
    },
    {
      id: 0,
      title: 'Title',
      description: 'Descritpion',
      views: '',
      updateDate: null,
      image: 'https://github.com/JJaraM/trip-mobile/raw/master/img/login.png',
    },
    {
      id: 0,
      title: 'Title',
      description: 'Descritpion',
      views: '',
      updateDate: null,
    },
    {
      id: 0,
      title: 'Title',
      description: 'Descritpion',
      views: '',
      updateDate: null,
    },
    {
      id: 0,
      title: 'Title',
      description: 'Descritpion',
      views: '',
      updateDate: null,
    },
  ];

  return (
    <div className="main-bg-color pt-30 pb-30">
      <PrincipalTitle
        center
        divider
        title="Projects"
        topDescription=""
        bottomDescription="What about my projects?"
      />
      {/*
      <RecommendationPostList items={items} status={1} />
      */}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
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
)(Project);
