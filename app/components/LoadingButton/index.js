import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/LatestPostSection/messages';
import Button from 'ui/Button';
import { isInfitiveLoading } from '../../configuration/config';

function LoadingButton(props) {
  let button;

  let loading = props.loading;

  if (!loading) {
    loading = isInfitiveLoading();
  }

  if (loading) {
    button = (
      <Button onClick={props.onClick} center disable>
        <FormattedMessage {...messages.loading} />
      </Button>
    );
  } else {
    button = (
      <Button onClick={props.onClick} center>
        { props.children }
      </Button>
    )
  }

  return button
}

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(LoadingButton);
