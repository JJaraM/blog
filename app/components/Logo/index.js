import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  const logo = '{JJARA}';
  return (
    <Link to={`/`} className="logo">
        { logo }
    </Link>
  );
}

Logo.propTypes = {};

export default memo(Logo);
