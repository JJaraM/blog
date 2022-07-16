/*
 *  Copyright 2022-present Jonathan Jara Morales
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ContainerCenter from 'components/ContainerCenter';
import DividerLine from 'components/DividerLine';
import PrincipalTitleBottom from 'components/PrincipalTitleBottom';
import IconEdit from 'components/IconEdit';
import IconContainer from 'components/IconContainer';
import IconClose from 'components/IconClose';
import IconSave from 'components/IconSave';
import LoadingLine from 'components/LoadingLine';
import LoadingContainer from 'components/LoadingContainer';

import './style.scss';

function PrincipalTitle(props) {
  const {
    center,
    divider,
    bottomDescription,
    title,
    editable,
    editableMode,
    onChange,
    onEdit,
    onClose,
    onSave,
    loading,
    onSaveStatus,
    topDescription,
  } = props;

  let CenterComponent = subProps => <>{subProps.children}</>;

  let DividerComponent = () => <></>;
  let BottomDescription = () => <></>;
  let TopDescription = () => <></>;

  if (center) {
    CenterComponent = subProps => <ContainerCenter>{subProps.children}</ContainerCenter>;
  }

  if (divider) {
    DividerComponent = () => <DividerLine />;
  }

  if (bottomDescription) {
    BottomDescription = () => (
      <PrincipalTitleBottom center={center}>{bottomDescription}</PrincipalTitleBottom>
    );
  }

  if (topDescription) {
    TopDescription = () => (
      <ContainerCenter>
        <div className="jjara-principal-title-brief-description">
          <span>{topDescription}</span>
        </div>
      </ContainerCenter>
    );
  }

  if (loading) {
    const style = {
      "display": "flex"
    }

    return (
      <LoadingContainer>
        <LoadingLine
          randomWidthMax={500}
          randomWidthMin={125}
          height={40}
          primaryBgColor="fifth-bg-color"
          secondaryBgColor="sixth-bg-color"
        />
        <div style={ style }>
          <LoadingLine
            width={60}
            height={20}
            primaryBgColor="jjara-loading-primary-code-bg-color"
            secondaryBgColor="jjara-loading-secondary-code-bg-color"
          />
          <LoadingLine
            width={100}
            height={20}
            primaryBgColor="jjara-loading-primary-code-bg-color"
            secondaryBgColor="jjara-loading-secondary-code-bg-color"
          />
        </div>
      </LoadingContainer>
    );
  }

  if (editable === undefined || editable) {
    return (
      <div className="principal-title">
        <TopDescription />
        <CenterComponent>
          <h1>
            {title}
            <IconEdit render={editableMode} onClick={onEdit} />
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
          <IconSave status={onSaveStatus} render={editableMode} onClick={onSave} />
          <IconClose render={editableMode} onClick={onClose} />
        </IconContainer>
        <textarea className="search" value={props.title} onChange={onChange} />
      </div>
    );
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
  center: true,
  divider: true,
  loading: false,
  onSaveStatus: 0,
};

export default memo(PrincipalTitle);
