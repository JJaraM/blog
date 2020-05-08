import React, { memo } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

import LoadingLine from '../LoadingLine';
import { isLoadingComplete } from 'configuration/config';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';
import './prism-okaida.scss';
import './style.scss';
import './prism.scss';
import './prism-comment.js';
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
                <p className="text-content" contenteditable={this.props.contenteditable}>
                    { this.props.children }
                </p>
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
    loading: PropTypes.boolean,
    contenteditable: PropTypes.boolean,
};

export default memo(Content);