import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/LatestPostSection/messages';
import Button from 'ui/Button';
import { isInfitiveLoading } from '../../configuration/config';

function LoadingButton(props) {
  let LoadingButton = () => <></>;

  let loading = props.loading;
  let render = props.render;

  if (render) {
    if (!loading) {
      loading = isInfitiveLoading();
    }

    if (loading) {
      LoadingButton = () => (
        <Button onClick={props.onClick} center disable>
          <FormattedMessage {...messages.loading} />
        </Button>
      );
    } else {
      LoadingButton = () => (
        <Button onClick={props.onClick} center>
          { props.children }
        </Button>
      )
    }
  }

  return <LoadingButton />
}

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  render: PropTypes.bool,
  onClick: PropTypes.func,
};

LoadingButton.defaultProps = {
  render: true
}

export default memo(LoadingButton);
