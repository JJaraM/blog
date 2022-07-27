import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

function LoadingLine(props) {
  const {
    width,
    height,
    randomWidthMin,
    randomWidthMax,
    randomHeightMin,
    randomHeightMax,
    unit,
    primaryBgColor,
    secondaryBgColor,
    widthUnit,
  } = props;

  const id = _.uniqueId('prefix-');

  let loadingWidth = width;
  let loadingHeight = height;
  let loadingPrimaryBgColor = 'primary-loading-bg-color';
  let loadingSecondaryBgColor = 'secondary-loading-bg-color';

  if (randomWidthMax) {
    loadingWidth = getRandomSize(randomWidthMax, randomWidthMin);
  }

  if (randomHeightMax) {
    loadingHeight = getRandomSize(randomHeightMax, randomHeightMin);
  }

  if (primaryBgColor) {
    loadingPrimaryBgColor = primaryBgColor;
  }

  if (secondaryBgColor) {
    loadingSecondaryBgColor = secondaryBgColor;
  }

  const CustomStyle = createGlobalStyle`

  .img-elementor {

    .loading {
      .${id} {
        .line {
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
          border-top-right-radius: 7px;
          border-top-left-radius: 7px;
        }
      }
    }
  }

  /*
    .${id} {
      .line {
        width: ${loadingWidth}${widthUnit};
        height: ${loadingHeight}${unit};
        animation: loading-${id} 1.6s infinite linear;
        float: left;
        border-radius: 7px;
        background-image: linear-gradient(90deg, var(--${loadingPrimaryBgColor}) 0px, var(--${loadingSecondaryBgColor})40px, var(--${loadingPrimaryBgColor}) 80px);
        background-size: 600px;
      }
    }

    @keyframes loading-${id} {
      0% {
        background-position: -100px;
      }

      40%, 100% {
        background-position: ${loadingWidth}${widthUnit};
      }
    }
*/
    .post-text {
      .line {
        margin-bottom: 5px;
      }
    }



    //
    .${id} {
      .line {
        width: ${loadingWidth}${widthUnit};
        height: ${loadingHeight}${unit};
        float: left;
        border-radius: 7px;
        animation-duration: 1.6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        background: linear-gradient(to right, var(--${loadingPrimaryBgColor}) 8%, var(--${loadingSecondaryBgColor}) 50%, var(--${loadingPrimaryBgColor}) 54%);
        background-size: 1000px 140px;
        position: relative;
      }
    }
    @keyframes placeHolderShimmer{
        0%{
            background-position: -500px 0
        }
        100%{
            background-position: 500px 0
        }
    }
    .post-text {
      .line {
        margin-bottom: 5px;
      }
    }

    @keyframes loading-${id} {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }



    @media only screen and (max-width: 959px) {


      .sublist {

        .pb-30 {
          padding-bottom: 30px;
        }

        .post-text {
          .line {
            margin-bottom: 5px;
          }
        }

        .img-elementor {
          display: grid;
          .loading {
            .${id} {
              .line {
                height: 100% !important;
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <div id={id} className={`p-line ${id}`}>
        <div className="line" />
      </div>
      <CustomStyle />
    </>
  );
}

function getRandomSize(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

LoadingLine.propTypes = {
  width: PropTypes.number,
  widthUnit: PropTypes.string,
  randomWidthMin: PropTypes.number,
  randomWidthMax: PropTypes.number,
  height: PropTypes.number,
  randomHeightMin: PropTypes.number,
  randomHeightMax: PropTypes.number,
  unit: PropTypes.string,
  primaryBgColor: PropTypes.string,
  secondaryBgColor: PropTypes.string,
};

LoadingLine.defaultProps = {
  randomWidthMin: 0,
  randomHeightMin: 0,
  widthUnit: 'px',
  unit: 'px',
};

export default memo(LoadingLine);
