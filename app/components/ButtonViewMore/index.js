import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import ContainerCenter from 'components/ContainerCenter';

function ButtonViewMore(props) {
  const { loading, onClick } = props;

  let ViewMore = () => (
    <ContainerCenter>
      <Button> Loading... </Button>
    </ContainerCenter>
  );

  if (!loading) {
    ViewMore = () => (
      <ContainerCenter>
        <Button onClick={onClick}> View More </Button>
      </ContainerCenter>
    );
  }

  return <ViewMore />;
}

ButtonViewMore.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default memo(ButtonViewMore);
