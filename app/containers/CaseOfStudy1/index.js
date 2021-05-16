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
import Col6 from '../../components/Col6';
import PrimarySection from '../../components/PrimarySection';
import Container from '../../components/Container';
import Metadata from '../../components/Metadata';
import DateField from '../../components/DateField';
import Me1 from 'images/Me1.jpg';

export function CaseOfStudy1({

}) {
  const date = new Date();

  return (
    <div className="case-of-study pb-30 ">
      <EditableText />


     <div className="pt-30 pb-30">
       <div className="jjara-max-container">
         <Row>
           <div className="jjara-col col-6 col-t-12">
             <div className="image-box ">
               <img className="img-fluid jjara-col6-image"
                    data-ll-status="loaded"
                    src="https://www.stratospherenetworks.com/blog/wp-content/uploads/2020/01/cloud-illustration-2.jpg" />
             </div>
           </div>

           <Col6>
             <div className="post-head__box">
               <span className="post__minutes">
                  2 min read
               </span>
               <time className="post__date" dateTime="2020-11-11">Nov 11, 2020</time>
               <PrincipalTitle title={"How to create a spring cloud architecture"} />
               <Metadata>
                 <div className="post__bottom">
                   <div className="post__author">
                     <a href="#" aria-label="">
                       <img className="post__author-image lazy loaded" src={Me1}/></a>
                   </div>
                   <div className="post__bottom-meta">
                     <a href="#" className="post__author-link">By Jonathan Jara Morales</a>
                   </div>
                 </div>
               </Metadata>
             </div>
           </Col6>
         </Row>
       </div>
     </div>


      <div className="jjara-max-container">
          <>

            <Row>
              <div className="offset-md-1 col-md-11 col-md-pull-1">
                <br />
              </div>
            </Row>

            <Row>
              <div className="col-md-2"/>
              <div className="col-md-8">
                <div className="justify-content-center">
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

                </div>
              </div>
              <div className="col-md-2"/>
            </Row>

            <Row>
              <div className="col-md-2"/>
              <div className="col-md-10">
                <h2>Architecture Design</h2>
                <p>
                  In the following section you will see a brief description of the application workflow:
                </p>
              </div>
              <div className="col-md-2"/>
            </Row>

            <Row>
              <div className="col-md-12">
                <div className="jjara-diagram-container">
                  <ContainerCenter>
                    <ArchitectureModel throwIfNamespace={false} />
                  </ContainerCenter>
                </div>
              </div>


            </Row>

            <Row>

            </Row>
          </>
        </div>


    </div>
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
