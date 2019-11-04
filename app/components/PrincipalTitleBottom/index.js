import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ContainerCenter from '../ContainerCenter';

function PrincipalTitleBottom(props) {
  const { center } = props;

  let { CenterComponent }  = (subProps) => (
    <>
      { subProps.children } 
    </>
  );

  if (center) {
    CenterComponent = (subProps) => (
      <ContainerCenter>
       { subProps.children }
      </ContainerCenter>
    )
  }

  return (
    <CenterComponent>
      <div className="brief-description">
        { props.children }
      </div>
    </CenterComponent>
  );
}

PrincipalTitleBottom.propTypes = {
  center: PropTypes.bool,
};

export default memo(PrincipalTitleBottom);
