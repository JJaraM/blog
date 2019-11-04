

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ContainerCenter from '../ContainerCenter';
import DividerLine from '../DividerLine';
import PrincipalTitleBottom  from '../PrincipalTitleBottom';

function PrincipalTitle(props) {
  const { center, divider, bottomDescription, title } = props;

  let CenterComponent  = (subProps) => (
    <>
      { subProps.children } 
    </>
  );

  let DividerComponent = (subProps) => (<></>);

  let BottomDescription = (subProps) => (<></>);

  if (center) {
    CenterComponent = (subProps) => (
      <ContainerCenter>
       { subProps.children }
      </ContainerCenter>
    )
  }
  
  if (divider) {
    DividerComponent = () => (
      <DividerLine />
    )
  }

  if (bottomDescription) {
    BottomDescription = () => (
      <PrincipalTitleBottom center={center}>
        { bottomDescription }
      </PrincipalTitleBottom>
    )
  }

  return (
    <div className="principal-title pb-30 pt-30">
      <CenterComponent>
        <h1>
          { title }
        </h1>
      </CenterComponent>
      <DividerComponent />
      <BottomDescription />
    </div>
  );
}

PrincipalTitle.propTypes = {
  center: PropTypes.bool,
  divider: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  bottomDescription: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  topDescription: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
};

PrincipalTitle.defaultProps = {
  center: false,
  divider: false,
}

export default memo(PrincipalTitle);
