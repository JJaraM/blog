import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { isLoadingComplete } from 'configuration/config';
import ContainerCenter from 'components/ContainerCenter';

function ButtonViewMore(props) {
  const { status, onClick } = props;
  
  let ViewMore = () => (
    <ContainerCenter>
      <Button>
        Loading...
      </Button>
    </ContainerCenter>
  );

  if (isLoadingComplete(status === 2)) {
    ViewMore = () => (
      <ContainerCenter>
        <Button onClick={ onClick }>
          View More
        </Button>
      </ContainerCenter>
    )
  }

  if (status === 2) {
    ViewMore = () => <></>
  }

  return <ViewMore />;
}

ButtonViewMore.propTypes = {
  status: PropTypes.number,
  onClick: PropTypes.func,
};

export default memo(ButtonViewMore);
