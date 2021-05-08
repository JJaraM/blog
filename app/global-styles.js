import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.main-bg-color {
  background: var(--main-bg-color);
  //background-image: linear-gradient(200deg, #292929 0%, var(--main-bg-color) 100%);
}



.secondary-bg-color {
  background: var(--secondary-bg-color);
  width: 100%;
}

.main-title-color {
  color: var(--main-title-color);
}



.img-elementor {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
}

.views {
  padding-top: 10px;
  float: right;
  &.tags {
    span {
      background: var(--jjara-tag-bg-color) !important;
      color: #000;
    }
  }
}

.img-elementor > img {
  height: auto;
  width: 100%;
  border-radius: 5px;
}

.element-container {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}

.post-text {
  padding: 25px 0px 0px 0px;
  text-align: inherit;
  display: block;
}

h1, h2, h3, h4, h5 {
  font-family: "Steelfish", fantasy;
}

h2 {
  font-size: 40px;
}

.left-text {
  text-aligment: left;
}

.center-text {
  text-aligment: center;
}

h3 {
  font-size: 23px;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.tags span, .tag-item  {
  border-style: none;
  border-width: 1px 1px 1px 1px;
  background: var(--third-bg-color);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-flex;
  border-radius: 3px 3px 3px 3px;
  padding: 7px;
  color: var(--main-title-color);
  margin-bottom: 5px;
  font-family: "Montserrat", Sans-serif;
  color: #fdf7f2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 10px;

  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.5);
  }
}




.h1 {
  font-size: 60px;
}

.elementor-divider {

  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.elementor-divider-separator {
  border-top-style: solid;
  border-top-width: 3px;
  border-top-color: var(--fourth-bg-color);
  width: 100px;
}

.brief-description {
  font-size: 0.7rem;
  padding: 15px 0px 0px 0px;
}







.section_tags_loading {
  background: transparent !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.tag-button {
  border: none;
  background: transparent;
  display: block;
  line-height: 28px;
  font-family: "Montserrat", Sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0,0,0,0.4);
  text-transform: uppercase;
  letter-spacing: 0.025em;

  &:active, &:focus {
    box-shadow: none !important;
    outline: none;
  }
}


.latest-posts {

  &:hover {
    background: var(--main-bg-color) !important;
    display: block;
    height: 100%;
    width: 100%;
  }

}

.pre-scrollable {
  overflow: hidden;
}

.pre-scrollable-tags::-webkit-scrollbar-track {
  background: #FFF;
}

.pre-scrollable-tags::-webkit-scrollbar-thumb {
  background-color: var(--fifth-bg-color);
}

.pre-scrollable-tags {
  max-height: 300px;
  overflow-y: scroll;
}

.dropdown-menu.show {
    left: -50px !important;
}

.jjara-diagram-container {
  background: #687DA8;
  padding: 30px;
  border-radius: 5px;
}


/*
#stp1{
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  -webkit-animation: draw2 10s linear 0s infinite normal; //backwards
  animation: draw2 10s linear 0s infinite normal;
}


@-webkit-keyframes draw2{

  to {
    stroke-dashoffset: 0;
  }

  from {
    stroke-dashoffset: 822;
  }

}

@keyframes draw2 {

   0%{fill:#ff0000}
    50%{fill:#000}
    100%{fill: #ff0000}

  from {
    stroke-dashoffset: 0;
  }

  to {
     stroke-dashoffset: 100;
     stroke: red;
  }

  10%  {
    motion-offset: 100%;
    offset-distance: 100%;
    .path {
      stroke: red
    }
   }


}
*/

.jjara-unavailable {
  background: #ff5a6e;
}

.sublist {

  .row {
    .pb-30 {
      padding: 0;
    }
  }

  .post-text {
    padding: 0px;
  }

  .pb-30 {
    padding-bottom: 10px;
  }

  h2 {
      font-size: 14px !important;
      font-weight: 700;
      line-height: 1.2em;
      margin: 0px 0px 2px 0px;
      text-align: left;
      order: 1;
      font-family: "Montserrat", Sans-serif;
  }

}

@media only screen and (max-width: 959px) {

  .img-elementor {
    height: 140px;
  }

  .post-text {
    padding-top: 1.25rem;
  }

  .sublist {
    .post-text {
      padding: 1.25rem !important;
    }
  }

  .container {
    flex-wrap: wrap;

    &.testimonial-section {
      &.d-flex {
        display: inline !important;
      }
    }

  }




  .card {
    max-width: 100% !important;

    .card-body {
      .post-text {
        background: var(--main-bg-color);
      }

      &:hover {
        cursor: pointer;
        background: var(--main-bg-color);
      }

    }
  }


  .container {
    height: auto !important;
    display: inline-block;
    width: 100%;

    .card {
      width: 100%;
      display: contents;

      .card-body {
        margin-bottom: 30px;
      }
    }

  }

  .testimonials {

    .card {
      width: 100%;
      display: flex;
    }

    .post-text {
      background: var(--main-bg-color);
    }

  }

  .post-text {
    padding: 25px 0px 0px 0px;
    flex: 1 1 auto;
    padding: 1.25rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: var(--secondary-bg-color);
  }
}

.card {
  border: none;
  border-radius: 3px;
}

.card-body {
  background: var(--main-bg-color);
}

.lastest-post .col-lg-4 {
  padding-bottom: 15px;
}

`;

export default GlobalStyle;
