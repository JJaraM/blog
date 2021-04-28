import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ContainerCenter from 'components/ContainerCenter';
import ButtonDisable from './ButtonDisable';
import NormalButton from './NormalButton';
import ButtonLegend from './ButtonLegend';
import ButtonContainer from './ButtonContainer';

import './style.scss';

function Button(props) {
  let button = <NormalButton onClick={props.onClick}> {props.children} </NormalButton>;

  if (props.disable) {
    button = <ButtonDisable> {props.children} </ButtonDisable>;
  }

  if (props.center) {
    button = <ContainerCenter> {button} </ContainerCenter>;
  }

  return (
    <ButtonContainer className={props.containerClassName}>
      {button}
      <ButtonLegend>{props.legend}</ButtonLegend>
    </ButtonContainer>
  );
}

Button.propTypes = {
  centerOnDiv: PropTypes.bool,
  disable: PropTypes.bool,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  legend: PropTypes.string,
  onClick: PropTypes.func,
  center: PropTypes.bool,
  id: PropTypes.string,
};

Button.defaultProps = {
  centerOnDiv: true,
  disable: false,
  className: '',
  containerClassName: '',
  id: '',
};

export default memo(Button);
