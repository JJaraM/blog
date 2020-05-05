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
import EditableMetadata from 'components/EditableMetadata';

import './style.scss';

function PrincipalTitle(props) {
  const { center, divider, bottomDescription, title, editable, editableMode, onChange, onEdit, onClose, onSave } = props;

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
        <EditableMetadata onClose={ onClose } onSave = { onSave } />
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
};

PrincipalTitle.defaultProps = {
  center: false,
  divider: false,
}

export default memo(PrincipalTitle);
