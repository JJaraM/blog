/**
 *
 * DeletePost
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { selectDisable } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { disable, deletePost } from './actions';
import Container from 'components/Container';
import ContainerCenter from 'components/ContainerCenter';
import PrincipalTitle from 'components/PrincipalTitle';
import Button from 'ui/Button';
import ButtonClose from 'ui/Button/ButtonClose'

import './style.scss';

export function DeletePost({
  render,
  onClose,
  title,
  id,
  onChange,
  onDelete,
  disable,
  onCopy
}) {
  useInjectReducer({ key: 'deletePost', reducer });
  useInjectSaga({ key: 'deletePost', saga });

  if (render) {
    return (
      <div className="search-container">
        <ButtonClose onClick={onClose} />

        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <Container>
              <ContainerCenter>
                <PrincipalTitle center={true}
                  title={
                    <FormattedMessage
                      {...messages.header}
                    />
                  }
                  divider={true}
                  bottomDescription={
                    <FormattedMessage
                      {...messages.description}
                      values={{
                        name: <b className="post-name" onClick={ onCopy(title) }>{ title }</b>,
                      }}
                    />
                  }
                />
              </ContainerCenter>
            </Container>

            <div className="pb-30">
              <Container>
                <ContainerCenter>
                  <div className="metadata-fields">
                    <input
                      id="btn-delete"
                      type="text"
                      className="search delete"
                      placeholder={ title }
                      onChange = { (evt) => onChange(evt, title) }
                    />
                    <Button
                      className="signIn-button"
                      containerClassName="signIn-button-container"
                      disable={ disable }
                      onClick={() => onDelete(id, disable) }>

                      <FormattedMessage {...messages.delete } />
                    </Button>
                  </div>
                </ContainerCenter>
              </Container>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <></>
  );

}

DeletePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  render: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  disable: selectDisable(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange:(evt, title) => dispatch(disable(!(evt.target.value === title))),
    onCopy: (title) => {
      if (navigator.clipboard !== undefined) {
        navigator.clipboard.writeText(title);
      }
    },
    onDelete:(id, disable) => {
      if (!disable) {
        dispatch(deletePost(id));
      }
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DeletePost);
