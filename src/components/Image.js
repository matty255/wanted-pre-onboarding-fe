import React from 'react';
import styled from 'styled-components';

function Image(props) {
  const { url, loading, setLoading } = props;
  const onLoad = () => {
    setLoading(false);
  };

  const [showBtn, setShowBtn] = React.useState(false);
  const outerRef = React.useRef(null);
  const innerRef = React.useRef(null);

  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (outerRef.current === null || innerRef.current === null) {
        return;
      }
      if (outerRef.current.clientHeight > 384) {
        outerRef.current.style.height = '384px';
      } else {
        outerRef.current.style.height = `${innerRef.current.clientHeight}px`;
      }
      setShowBtn((state) => !showBtn);
    },
    [showBtn]
  );

  return (
    <>
      <ContentsWrapper ref={outerRef}>
        <img
          src={url}
          onLoad={onLoad}
          className="main-pic"
          ref={innerRef}
          id="image"
        />
      </ContentsWrapper>
      <AccordionButton
        onClick={handleButtonClick}
        style={
          innerRef.current?.clientHeight < 384
            ? { display: 'none' }
            : { display: 'flex' }
        }
        tabIndex="-1"
      >
        더보기 버튼
      </AccordionButton>
    </>
  );
}
export default Image;

const ContentsWrapper = styled.div`
  height: 24rem;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  transition: height 1s ease;
  & > img {
    object-fit: cover;
    width: 100%;
  }
`;

const AccordionButton = styled.div`
  width: 100%;
  height: 2.5rem;
  text-align: center;
  z-index: 10;
  position: relative;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 1px solid #dbdbdb;
  color: #139ef2;
`;
