/**
 * Principal Title used for the web site
 * @author Jonathan Jara Morales
 * @since 2020-05-03
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ContainerCenter from 'components/ContainerCenter';
import DividerLine from 'components/DividerLine';
import PrincipalTitleBottom  from 'components/PrincipalTitleBottom';
import IconEdit from 'components/IconEdit';
import IconContainer from 'components/IconContainer';
import IconClose from 'components/IconClose';
import IconSave from 'components/IconSave';
import LoadingLine from 'components/LoadingLine';
import LoadingContainer from 'components/LoadingContainer';

import './style.scss';

function PrincipalTitle(props) {
  const { center, divider, bottomDescription, title, editable, editableMode, onChange, 
    onEdit, onClose, onSave, loading, onSaveStatus } = props;

  let CenterComponent  = (subProps) => (
    <>
      { subProps.children } 
    </>
  );

  let DividerComponent = () => (<></>);

  let BottomDescription = () => (<></>);

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
      <PrincipalTitleBottom center={ center }>
        { bottomDescription }
      </PrincipalTitleBottom>
    )
  }
  
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingLine 
          randomWidthMax={500} 
          randomWidthMin={125} 
          height={40}
          primaryBgColor="fifth-bg-color" 
          secondaryBgColor="sixth-bg-color" 
        />
      </LoadingContainer>
    )
  }

  if (editable === undefined || editable) {
    return (
      <div className="principal-title pb-30 pt-30">
        <CenterComponent>
          <h1>
            { title }
            <IconEdit 
              render={ editableMode} 
              onClick={ onEdit } 
            />
          </h1>
        </CenterComponent>
        <DividerComponent />
        <BottomDescription />
      </div>
    );
  } else if (editableMode) {
    return (
      <div className="principal-title-editable">
        <IconContainer>

          <IconSave
            status = { onSaveStatus }
            render={ editableMode } 
            onClick={ onSave } 
          />

          <IconClose 
            render={ editableMode } 
            onClick={ onClose } 
          />

        </IconContainer>
        
        <textarea className="search" value={ props.title } onChange={ onChange } />
      </div>
    )
  }
}

PrincipalTitle.propTypes = {
  center: PropTypes.bool,
  divider: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  bottomDescription: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  topDescription: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onSaveStatus: PropTypes.number,
  loading: PropTypes.bool,
};

PrincipalTitle.defaultProps = {
  center: false,
  divider: false,
  loading: false,
  onSaveStatus: 0,
}

export default memo(PrincipalTitle);
