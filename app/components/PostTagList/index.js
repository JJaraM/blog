import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PostTag from 'components/PostTag';
import ContainerCenter from '../ContainerCenter';
import Autocomplete from '@celebryts/react-autocomplete-tags';

import './style.scss';

class PostTagList extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        suggestions: [],
        original: [],
        tags: [],
        loading: false,
      };
    }

    onChange = (value) => {
      const result = this.state.original.filter(item =>
        item.name.includes(value) && !this.state.tags.some(tag => tag.value == item.id)
      ).map( item => ({
        label: item.name,
        value: item.id
      }));
      this.setState( { suggestions : result } );
    }

    onDelete = (item) => {
      const id = item[0].value;
      this.props.onRemove(id);
    }

    onAdd = (item) => {
      const id = item.value;
      const text = item.label;

      this.setState(prevState => ({
        tags: [...prevState.tags, item]
      }))

      const isCreate = isNaN(id);
      if (isCreate) {
        this.props.onCreate(text);
      } else {
        this.props.onAdd(id);
      }
    }

    render() {
      const { items, item, isAuthenticated, loading } =  this.props;

      let Component = () => <div/>;

      if ((!items || !item) && !loading) {
        return <Component />
      }

      if (loading) {
        return (
          <ContainerCenter>
            <div className="tags">
              <PostTag loading={loading} />
            </div>
          </ContainerCenter>
        );
      }

      if (isAuthenticated) {
        if (this.state.tags && this.state.tags.length === 0) {
          this.state.original = items;
          this.state.tags = items.filter(subItem => item.tags && item.tags.includes(subItem.id)).map( item => ({
            label: item.name,
            value: item.id
          }));
        }

        return (
          <Autocomplete className="autocomplete-tags"
            tags= { this.state.tags }
            onChange = { this.onChange }
            onAdd={ this.onAdd }
            onDelete = { this.onDelete }
            suggestions={ this.state.suggestions }
          />
        );
      }

      const content = items.map(subItem => {
        if (item.tags && item.tags.includes(subItem.id)) {
          return <PostTag key={`tag-item-${subItem.id}`} item={subItem} loading={this.state.loading}/>;
        }
      });

      return (
        <ContainerCenter>
          <div className="tags">
            { content }
          </div>
        </ContainerCenter>
      );
    }
}

PostTagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onCreate: PropTypes.func,
};

export default memo(PostTagList);
