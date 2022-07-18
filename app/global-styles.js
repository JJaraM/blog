import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.main-bg-color {
  background: var(--main-bg-color);
  //background-image: linear-gradient(200deg, #292929 0%, var(--main-bg-color) 100%);
}

.favourite-selected {
  color: #FCAC34;
}

.console {
 p, label {
  margin-bottom: 0rem;
 }
}
.favourite-blog {

  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: 0.5rem;

  &:hover {
   color: #FCAC34;
 }
}


.main-title-color {
  color: var(--main-title-color);
}

.description {
  font-size: 14px;
}

.loading-enter {
  width: 100%;
  height: 20px;
  display: flex;
}

.loading-line-code {
 background: #e83e8c;
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

table {
  tr, th, td {
    border: 1px solid #303030 !important;
    th {
      padding: 5.5px;
    }
  }
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
  padding: 30px;
  border-radius: 16px;
  background: #17151e;


-webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
}


table {
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    /* display: inline-block; */
    padding: 1rem;
    background: var(--main-bg-color) !important;
    background-image: linear-gradient(200deg, #292929 0%, var(--main-bg-color) 100%) !important;
    border: 1px solid #303030;
}

.post-head__box {
  margin-left: 16px;
  padding-top: 20%;
}

.jjara-max-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.7;
}

.post__author {
    float: left;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.post__author-image {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    padding: 3px;
    margin-right: 8px;
    border: 2px solid #ff7b7b;
    border-radius: 50%;
    overflow: hidden;
}

.post__bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 13px;
    line-height: 30px;
    font-weight: 500;
    color: #fff;
}

.post__author-link {
    font-size: 13px;
    color: #fff;
}

.image-box {
    position: relative;
    padding-top: 90%;
    min-height: 280px;
    border-radius: 16px;
    overflow: hidden;
    -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
    background-color: #09080f;
}

.case-of-study {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1, h2, h3, h4, h5 {
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
  }
}

.post__date {
    color: #aaa;
    padding-left: 0.1rem;
}

.jjara-col {
    padding-left: 32px;
    padding-right: 16px;
}
.jjara-col6-image {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    -o-object-fit: cover;
    object-fit: cover;

}

text {
  font-family: var(--primary-font-family);
  font-size: 12px;
}

.Text.cls {
  text {
    margin-left: 2x;
  }
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
  .testimonial-item {
    background: var(--main-bg-color);
  }
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

        &:hover {
          cursor: pointer;
          background: #353535;
        }
      }

      &:hover {
        cursor: pointer;
        background: #353535;
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
