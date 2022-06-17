import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import {
  addCircleOutline,
  compassOutline,
  heartOutline,
  logoInstagram,
  paperPlaneOutline,
  personOutline,
  searchCircleOutline,
  home,
  search,
  searchOutline,
} from 'ionicons/icons';
import InstaLogo from '../static/insta.png';

import PostCard from '../components/PostCard';
import MainSideContentsCard from '../components/MainSideContentsCard';

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const AssignTwo = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () =>
      documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);
  return (
    <>
      <Header>
        <NavBar className={hide && 'hide'}>
          <LogoBox>
            <div className="icon">
              <IonIcon icon={logoInstagram}></IonIcon>
            </div>
            <img src={InstaLogo} alt="" className="logo" />
          </LogoBox>

          <input type="search" placeholder="검색" />
          {/* <IonIcon icon={searchOutline}></IonIcon> */}

          <NavBox>
            <IonIcon icon={home}></IonIcon>
            <IonIcon icon={paperPlaneOutline}></IonIcon>
            <IonIcon icon={addCircleOutline}></IonIcon>
            <IonIcon icon={compassOutline}></IonIcon>
            <IonIcon icon={heartOutline}></IonIcon>
            <IonIcon icon={personOutline}></IonIcon>
          </NavBox>
        </NavBar>

        <MobileBar className={hide && 'hide'}>
          <IonIcon icon={logoInstagram}></IonIcon>

          <img src={InstaLogo} alt="" className="logo" />
          <IonIcon icon={paperPlaneOutline}></IonIcon>
        </MobileBar>
      </Header>
      <FlexContainer>
        <MainContainer>
          <ContentBox>
            <PostCard img={'http://imgur.com/eQPPis3.gif'} />
            <PostCard
              img={
                'https://i.pinimg.com/originals/b6/5e/15/b65e155acbf5ebf5a2413b9081b558e3.gif'
              }
            />
            <PostCard
              img={
                'https://www.ddengle.com/files/attach/images/2920390/064/286/011/d9c64016d3800de2f94cca23f4e1dc0a.gif'
              }
            />
          </ContentBox>

          <UserSideBar>
            <MainSideContentsCard />
          </UserSideBar>
        </MainContainer>
      </FlexContainer>

      <MobileNavBox>
        <IonIcon icon={home}></IonIcon>
        <IonIcon icon={searchCircleOutline}></IonIcon>
        <IonIcon icon={addCircleOutline}></IonIcon>
        <IonIcon icon={heartOutline}></IonIcon>
        <IonIcon icon={personOutline}></IonIcon>
      </MobileNavBox>
    </>
  );
};

export default AssignTwo;

const Header = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: start;
  width: 100%;
`;

const NavBar = styled.div`
  position: fixed;
  top: 0;
  border-bottom: 1px solid #dbdbdb;

  border-width: 50%;
  display: flex;
  justify-content: space-between;
  width: 935px;
  max-width: 100%;
  height: 54px;
  transition: 0.4s ease;
  background-color: white;

  & > input {
    margin: auto 0;
    width: 215px;
    height: 28px;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    text-align: center;
    @media (max-width: 900px) {
      display: none;
    }
  }

  & > input:focus {
    text-align: left;
  }

  &.hide {
    transform: translateY(-80px);
    visibility: hidden;
  }

  @media (max-width: 614px) {
    display: none;
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.2rem;
  }

  .logo .icon {
    padding-right: 11px;
    margin-right: 11px;

    border-right: 1px solid #dbdbdb;
  }
`;

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  width: 12rem;
  height: 100%;
`;

const MobileBar = styled.div`
  display: none;
  @media (max-width: 614px) {
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;
    width: 935px;
    height: 54px;
    padding: 1rem 1.2rem;
    transition: 0.4s ease;

    &.hide {
      transform: translateY(-80px);
      visibility: hidden;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & .content {
    max-width: 614px;
  }
`;

const ContentBox = styled.div`
  max-width: 614px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserSideBar = styled.aside`
  /* Only for Safari compatibility */
  position: -webkit-sticky;
  position: sticky;
  transition: 0.4s ease;
  top: 0px;
  width: 293px;
  height: 300px;
  @media (max-width: 614px) {
    display: none;
  }
  background-color: white;
`;

const MobileNavBox = styled.nav`
  display: none;

  @media (max-width: 614px) {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    padding: 0 22px;
    width: 100%;
    height: 54px;
    border: 1px solid #dbdbdb;
  }
`;
