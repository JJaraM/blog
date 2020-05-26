import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import BigLeftContent from '../BigLeftContent';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import './style.scss';

function RecomendationsPostList(props) {
  const { items, status, error } =  props;
  
  return (
    <Container>
      <BigLeftContent>
        <LeftPanel items={ items } status={ status } error={ error } />
      </BigLeftContent>
      <div className="col-lg-4 sublist">
        <RightPanel items={ items } status={ status } error={ error } /> 
      </div>
    </Container>
  );
}

RecomendationsPostList.propTypes = {
  status: PropTypes.number,
  error: PropTypes.any,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


export default memo(RecomendationsPostList);
