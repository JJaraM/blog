import React, { memo } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

import LoadingLine from '../LoadingLine';
import { isLoadingComplete } from 'configuration/config';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-git';

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
            records.push(<LoadingLine  randomWidthMin={70}  randomWidthMax={100} height={15}/>);
        }

        if (isLoadingComplete(this.props.loading)) {
            return (
                <div className="text-content" contentEditable={this.props.contentEditable}>
                    { this.props.children }
                </div>
            );
        }
        return (
            <div className="post-text">
                { records }
            </div>
        )
    }
}

Content.propTypes = {
    loading: PropTypes.bool,
    contentEditable: PropTypes.bool,
};


export default memo(Content);