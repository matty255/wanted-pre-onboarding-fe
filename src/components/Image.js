import React from 'react';
import styled from 'styled-components';

function Image(props) {
  const { url, loading, setLoading } = props;
  const onLoad = () => {
    setLoading(false);
  };
  const [add, setAdd] = React.useState(false);
  const pRef = React.useRef(null);
  const cRef = React.useRef(null);
  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (pRef.current === null || cRef.current === null) {
        return;
      }
      if (pRef.current.clientHeight > 344) {
        pRef.current.style.height = '344px';
      } else {
        pRef.current.style.height = `${cRef.current.clientHeight}px`;
      }
      setAdd(!add);
    },
    [add]
  );

  return (
    <>
      <ContentsWrapper ref={pRef}>
        <img src={url} onLoad={onLoad} className="main-pic" ref={cRef} />
      </ContentsWrapper>
      <div
        className="button"
        onClick={handleButtonClick}
        style={
          cRef?.current?.clientHeight < 300
            ? { opacity: '0', transition: 'height 1s ease' }
            : {}
        }
      >
        더보기 버튼
      </div>
    </>
  );
}
export default Image;

const ContentsWrapper = styled.div`
  height: 20rem;
  width: 100vh;
  overflow: hidden;
  object-fit: cover;
  transition: height 0.35s ease;
  & > img {
    object-fit: cover;
    width: 100vh;
  }
`;
