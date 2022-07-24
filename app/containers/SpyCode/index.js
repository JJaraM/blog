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
import { connect } from 'react-redux';
import Container from 'components/Container';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ContainerCenter from 'components/ContainerCenter';
import PrincipalTitle from 'components/PrincipalTitle';
import ButtonClose from 'ui/Button/ButtonClose';
import CardDivider from '../../ui/CardItem/CardDivider';
import CardImage from '../../ui/CardItem/CardImage';
import CardImageTag from '../../ui/CardItem/CardImageTag';
import CardInfoContainer from '../../ui/CardItem/CardInfoContainer';
import CardInfoTitle from '../../ui/CardItem/CardInfoTitle';
import CardInfoDescription from '../../ui/CardItem/CardInfoDescription';
import CardContainer from '../../ui/CardItem';

export function SpyCode({ render, close, isAuthenticated }) {
  //Close the window if the user was able to do the authentication
  if (isAuthenticated) {
    close();
  }

  if (render) {
    const element = document.getElementsByClassName('fontLoaded')[0];
    if (element) {
      element.style.overflow = 'hidden';
    }

    const style = {
      'overflow-y': 'auto',
      'overflow-x': 'none',
      'padding-left': '20px',
      'padding-right': '20px',
      // 'width': '25rem',
      'height': '470px',
    };

    return (
      <div className="search-container">
        <ButtonClose onClick={close} />

        <div className="row">
          <div className="col-sm-12 my-auto">
            <Container>
              <ContainerCenter>
                <PrincipalTitle
                  center={true}
                  title={'Spying this code?'}
                  divider={true}
                  bottomDescription={"These are the technologies involved in this site"}
                />
              </ContainerCenter>
            </Container>

            <div className="pb-30" style={style}>
              <ContainerCenter>
                <CardContainer className="card-item-spy">
                  <CardDivider>
                    <CardImage
                      href="https://github.com/JJaraM/blog-eureka-server"
                      image="https://i.postimg.cc/0ycFc1yy/Eurekassss.png"
                    >
                      <CardImageTag tag={'Spring Cloud'} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle
                        title="Eureka Netflix"
                        href="https://github.com/JJaraM/blog-eureka-server"
                      />
                      <CardInfoDescription description="Use for discovery all the services involved" />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>

                <CardContainer className="card-item-spy">
                  <CardDivider>
                    <CardImage
                      href="https://github.com/JJaraM/blog-microservice-api-gateway"
                      image="https://www.brighttalk.com/communication/345709/preview1548863010277.png"
                    >
                      <CardImageTag tag={'Spring Cloud'} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle
                        title="Spring Gateway"
                        href="https://github.com/JJaraM/blog-microservice-api-gateway"
                      />
                      <CardInfoDescription description="Use to load balancing and routing requests" />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>

                <CardContainer className="card-item-spy">
                  <CardDivider>
                    <CardImage
                      href="https://app.redislabs.com/"
                      image="https://www.digitalocean.com/_next/static/media/redis-simply.1e9b4391.svg"
                    >
                      <CardImageTag tag={'Redis'} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle title="Redis" href="https://app.redislabs.com/" />
                      <CardInfoDescription description="Use for notify changes between the post and tag service" />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>
              </ContainerCenter>

              {/**/}
              <ContainerCenter>
                <CardContainer className="card-item-spy">
                  <CardDivider>
                    <CardImage
                      href="https://cloud.mongodb.com/"
                      image="https://www.fosslinux.com/wp-content/uploads/2022/01/what-is-mongoDB.png"
                    >
                      <CardImageTag tag={'Mongo'} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle title="Mongo" href="https://cloud.mongodb.com/" />
                      <CardInfoDescription description="Use to storage the data for the blog site" />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>

                <CardContainer className="card-item-spy">
                  <CardDivider>
                    <CardImage
                      href="https://github.com/JJaraM/blog"
                      image="https://patterns.dev/img/reactjs/react-logo@3x.svg"
                    >
                      <CardImageTag tag={'React + Redux'} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle title="React + Redux" href="https://github.com/JJaraM/blog" />
                      <CardInfoDescription description="Frontend technology used in this site" />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>

                <CardContainer className="card-item-spy">
                  <CardDivider>
                    <CardImage
                      href="https://git-scm.com/"
                      image="https://miro.medium.com/max/1400/1*oMC83-7fB27k1tTMxDfRaQ.png"
                    >
                      <CardImageTag tag={'Git'} />
                    </CardImage>
                  </CardDivider>
                  <CardDivider>
                    <CardInfoContainer>
                      <CardInfoTitle title="Git" href="https://git-scm.com/" />
                      <CardInfoDescription description="Control Version System to keep the changes" />
                    </CardInfoContainer>
                  </CardDivider>
                </CardContainer>

              </ContainerCenter>
            {/*  */}

            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
}

SpyCode.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: () => console.log('click'),
    onChangePassword: () => console.log('click'),
    onSignIn: () => {
      console.log('click');
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
)(SpyCode);
