/**
 *
 * DeletePost
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { selectDisable } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { disable } from './actions';
import Container from 'components/Container';
import ContainerCenter from 'components/ContainerCenter';
import PrincipalTitle from 'components/PrincipalTitle';
import Button from 'components/Button';

import './style.scss';

export function DeletePost({
  render,
  onClose,
  title,
  onChange,
  disable,
  onCopy
}) {
  useInjectReducer({ key: 'deletePost', reducer });
  useInjectSaga({ key: 'deletePost', saga });

  if (render) {
    return (
      <div className="search-container">
  
        <Container>
          <div className="btn-close">
            <button className="btn-search fa fa-close" onClick={ onClose }></button>
          </div>
        </Container>
  
        <div class="row h-100">
          <div class="col-sm-12 my-auto">
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
                      onClick={() => console.log('Hi')}>
                      
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
};

const mapStateToProps = createStructuredSelector({
  disable: selectDisable(), 
});

function mapDispatchToProps(dispatch) {
  return {
    onChange:(evt, title) => dispatch(disable(!(evt.target.value === title))),
    onCopy: (title) => {
      //Requires secure origin HTTPS
      if (navigator.clipboard !== undefined) {
        navigator.clipboard.writeText(title);
      }
    },
    onDelete:() => {
      console.log('');
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
