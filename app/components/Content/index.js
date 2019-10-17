import React, { memo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';

import './prism-okaida.scss';

class Content extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        return (
            <p className="text-content">
                { this.props.children }
            </p>
        )
    }
}

export default memo(Content);