import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DateField from 'components/DateField';
import './style.scss';

function PostSearchItem(props) {
  let content = <></>;

  if (props.items && props.items.length > 0) {
    content = props.items.map(item => (
      <div className="col-lg-12 separator">
        <div className="row">
          <div className="col-lg-2">
            <Link to={`/post/${item.id}`} onClick={props.onClick}>
              <img className="search-img" src={item.image} alt={item.image}/>
            </Link>
          </div>
          <div className="col-lg-10">
            <h3>
              <Link to={`/post/${item.id}`} onClick={props.onClick}>
                {item.title}
              </Link>
            </h3>
            <DateField value={item.updateDate} />
            <p className="p-search">
              <Link to={`/post/${item.id}`} onClick={props.onClick}>
                {item.description}
              </Link>
            </p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="row d-flex justify-content-center search-results">
      { content }
    </div>
  );
}

PostSearchItem.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onClick: PropTypes.func,
};

export default memo(PostSearchItem);
