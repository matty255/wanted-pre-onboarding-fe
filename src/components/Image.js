import React, { useContext, useEffect } from 'react';

function Image(props) {
  const { url, loading, setLoading } = props;
  const onLoad = () => {
    console.log('loaded');
    setLoading(false);
  };

  return <img src={url} onLoad={onLoad} className="main-pic" />;
}
export default Image;
