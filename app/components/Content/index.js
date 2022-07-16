import React, { memo } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

import LoadingLine from '../LoadingLine';
import { isLoadingComplete } from 'configuration/config';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-groovy';
import 'prismjs/components/prism-properties';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-splunk-spl';
import 'prismjs/components/prism-sql';
import './prism-okaida.scss';
import './style.scss';
import './prism.scss';

import './prism-comment.js';
import './prism-references.js';

import './customPrism.js';

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    let records = [];
    for (let i = 0; i < 100; i++) {
      records.push(<LoadingLine randomWidthMin={70} randomWidthMax={100} height={15} />);
    }

    if (isLoadingComplete(this.props.loading)) {
      return (
        <div className="text-content" contentEditable={this.props.contentEditable}>
          {this.props.children}
        </div>
      );
    }
    return (
      <div className="post-text">
        <LoadingLine widthUnit="%" width={99} height={50} />
        <LoadingLine widthUnit="%" width={49} height={200} />
        <LoadingLine widthUnit="%" width={49} height={200} />
        <LoadingLine widthUnit="%" width={99} height={15} />
        <div className="loading-enter" />
        <LoadingLine widthUnit="%" width={99} height={25} />
        <LoadingLine widthUnit="%" width={99} height={25} />
        <LoadingLine widthUnit="%" width={99} height={25} />
        <LoadingLine widthUnit="%" width={30} height={25} />
        <LoadingLine
          widthUnit="%"
          width={20}
          height={25}
          primaryBgColor="jjara-loading-primary-code-bg-color"
          secondaryBgColor="jjara-loading-secondary-code-bg-color"
        />
        <LoadingLine widthUnit="%" width={30} height={25} />
        <LoadingLine widthUnit="%" width={16} height={25} />
        <div className="loading-enter" />
        <LoadingLine
          widthUnit="%"
          width={99}
          height={300}
          primaryBgColor="jjara-loading-primary-code-block-bg-color"
          secondaryBgColor="jjara-loading-secondary-code-block-bg-color"
        />
        <LoadingLine
          widthUnit="%"
          width={99}
          height={100}
          primaryBgColor="jjara-loading-primary-code-comments-bg-color"
          secondaryBgColor="jjara-loading-secondary-code-comments-bg-color"
        />
        <LoadingLine widthUnit="%" width={99} height={25} />
        <LoadingLine widthUnit="%" width={99} height={25} />
        <LoadingLine
          widthUnit="%"
          width={49}
          height={200}
          primaryBgColor="jjara-loading-primary-code-pagination-bg-color"
          secondaryBgColor="jjara-loading-secondary-code-pagination-bg-color"
        />
        <LoadingLine
          widthUnit="%"
          width={49}
          height={200}
          primaryBgColor="jjara-loading-primary-code-pagination-bg-color"
          secondaryBgColor="jjara-loading-secondary-code-pagination-bg-color"
        />
      </div>
    );
  }
}

Content.propTypes = {
  loading: PropTypes.bool,
  contentEditable: PropTypes.bool,
};

export default memo(Content);
