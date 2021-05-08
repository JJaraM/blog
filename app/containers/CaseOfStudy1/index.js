/**
 * Page that displayed the post information.
 *
 * @author Jonathan Jara Morales
 * @since 20202-05-04
 */
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ArchitectureModel from './architecture';
import PostImage from '../../components/PostImage';
import Img from '../../components/Header/Img';
import PostHeader from '../../components/PostHeader';
import ContainerFluid from '../../components/ContainerFluid';
import ThirdSection from '../../components/ThirdSection';
import '../../containers/PostPage/style.scss';
import PrincipalTitle from '../../components/PrincipalTitle';
import Row from '../../components/Row';
import BigLeftContainerFluid from '../../components/BigLeftContainerFluid';
import ContainerCenter from '../../components/ContainerCenter';
import SmallRightContent from '../../components/SmallRightContent';
import * as Markdown from 'react-markdown';
import EditableText from '../../components/EditableText';
import '../../containers/PostPage/tableOfContent.scss';

export function CaseOfStudy1({

}) {

  return (
    <>
      <EditableText />

      <PostImage>
        <Img src="https://i2.wp.com/rixtrema.com/blog/wp-content/uploads/2018/08/Case_Study.png?fit=1537%2C562&ssl=1" />
        <PostHeader editable={false}>
          <PrincipalTitle title="How to create a spring cloud architecture."
                          center={ true }
                          divider={ true }
                          bottomDescription=""
          />
        </PostHeader>
      </PostImage>

      <ThirdSection>

          <ContainerFluid>
            <Row>
              <BigLeftContainerFluid isMinimized={false}>
                <p>
                  By: Jonathan Jara Morales
                  <br />
                  Software Engineer
                </p>
              </BigLeftContainerFluid>
            </Row>

            <Row>
              <BigLeftContainerFluid isMinimized={false}>
                <div className="text-content">
                  <Markdown source={
                    '# Table Of Content\n' +
                    '* Spring Cloud \n' +
                    '* Architecture Design'
                  } />
                </div>

              </BigLeftContainerFluid>

            </Row>
            <Row>
              <BigLeftContainerFluid isMinimized={false}>
                <br />
              </BigLeftContainerFluid>
            </Row>

            <Row>
              <BigLeftContainerFluid isMinimized={true}>
                <h2>Spring Cloud</h2>
                <p>
                  Spring Cloud is a set of tool provided to build some common patterns in distributed systems. Some of the features that
                  we are going to analyze in the following study are:
                </p>

                <ul>
                  <li>
                    Service Discovery: Is they way that the applications and microservices locate between them in different networks.
                  </li>
                  <li>
                    Gateway Routing: Is the way that we are going to re-route all requests to the correct service accessing one single resource.
                  </li>
                  <li>
                    Gateway Load Balance: With this feature we are going to re-route all requests to difference instances in the cluster member, with this
                    we can be sure that we are not going to overload a specific instance.
                  </li>
                  <li>
                    Reactive Microservices: Now we need to have a way to get the information for this we are going to work with a reactive web services
                    based on spring webFlux.
                  </li>
                  <li>
                    Event Notification with Redis: In this study we are going to allow the communication between the post microservice and the tag microservice
                    this communication is going to be executed by Redis, that is going to do the notification.
                  </li>
                  <li>
                    WebSockets: When something change in the post is going to notify all applications that are listening the event for the post.
                  </li>
                </ul>
              </BigLeftContainerFluid>
            </Row>

            <Row>
              <BigLeftContainerFluid isMinimized={false}>
                <h2>Architecture Design</h2>
                <p>
                  In the following section you will see a brief description of the application workflow:
                </p>
              </BigLeftContainerFluid>
            </Row>

            <Row>
              <BigLeftContainerFluid isMinimized={true}>
                <div className="jjara-diagram-container">
                  <ContainerCenter>
                    <ArchitectureModel throwIfNamespace={false} />
                  </ContainerCenter>
                </div>
              </BigLeftContainerFluid>


            </Row>

            <Row>

            </Row>
          </ContainerFluid>
        </ThirdSection>


    </>
  );
}

CaseOfStudy1.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
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
)(CaseOfStudy1);
