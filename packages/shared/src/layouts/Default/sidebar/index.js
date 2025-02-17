import React from 'react';
import Tree from './tree';
import styled from 'styled-components';
import Logo from '../../../components/Logo';
import Link from '../../../components/Link';
import { DEFAULT_MENU } from '../../Default/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from '@reach/router';

const Sidebar = styled.aside`
  min-width: 314px;
  height: 100%;
  background: #ffffff;
`;

const MenuWrap = styled.div`
  padding: 50px 0;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  position: sticky;
  background: #ffffff;
  top: 0;
  border-bottom: 1px solid #dedfe5;
  strong {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    margin-left: 6px;
    color: linear-gradient(340.87deg, #206cd1 11.36%, #2681fa 88.9%);
  }
`;

const Content = styled.div`
  border-right: 1px solid #dedfe5;
  height: calc(100% - 81px);
  overflow-y: auto;
  @media (max-width: 952px) {
    padding-bottom: 72px;
  }
`;

const Navbar = styled.div`
  display: none;
  @media (max-width: 952px) {
    display: block;
    position: absolute;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #DEDFE5;
    height: 72px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    padding: 15.5px 0;
    .navbar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      color: #9698a9;
    }

    a.isActive,
    a:hover {
      color: #206cd1;
    }
  }
`;

const SidebarLayout = ({
  menu,
  extraMenu,
  logoLocation = '/',
  subLogo = (
    <path
      d="M124.275 37.69C124.275 38.74 124.055 39.665 123.615 40.465C123.175 41.265 122.535 41.89 121.695 42.34C120.865 42.78 119.875 43 118.725 43H114.96V32.41H118.725C119.875 32.41 120.865 32.63 121.695 33.07C122.535 33.5 123.175 34.115 123.615 34.915C124.055 35.705 124.275 36.63 124.275 37.69ZM118.545 41.11C119.685 41.11 120.565 40.81 121.185 40.21C121.815 39.61 122.13 38.77 122.13 37.69C122.13 36.6 121.815 35.755 121.185 35.155C120.565 34.555 119.685 34.255 118.545 34.255H117.075V41.11H118.545ZM131.573 32.26C132.563 32.26 133.458 32.49 134.258 32.95C135.068 33.41 135.703 34.055 136.163 34.885C136.633 35.705 136.868 36.635 136.868 37.675C136.868 38.715 136.633 39.65 136.163 40.48C135.703 41.31 135.068 41.955 134.258 42.415C133.458 42.875 132.563 43.105 131.573 43.105C130.583 43.105 129.683 42.875 128.873 42.415C128.073 41.955 127.438 41.31 126.968 40.48C126.508 39.65 126.278 38.715 126.278 37.675C126.278 36.635 126.508 35.705 126.968 34.885C127.438 34.055 128.073 33.41 128.873 32.95C129.683 32.49 130.583 32.26 131.573 32.26ZM131.573 34.21C130.953 34.21 130.408 34.35 129.938 34.63C129.468 34.91 129.098 35.315 128.828 35.845C128.568 36.365 128.438 36.975 128.438 37.675C128.438 38.375 128.568 38.99 128.828 39.52C129.098 40.04 129.468 40.44 129.938 40.72C130.408 41 130.953 41.14 131.573 41.14C132.193 41.14 132.738 41 133.208 40.72C133.678 40.44 134.043 40.04 134.303 39.52C134.573 38.99 134.708 38.375 134.708 37.675C134.708 36.975 134.573 36.365 134.303 35.845C134.043 35.315 133.678 34.91 133.208 34.63C132.738 34.35 132.193 34.21 131.573 34.21ZM143.994 32.305C145.314 32.305 146.409 32.645 147.279 33.325C148.149 34.005 148.724 34.93 149.004 36.1H146.784C146.554 35.53 146.194 35.08 145.704 34.75C145.224 34.42 144.644 34.255 143.964 34.255C143.404 34.255 142.899 34.395 142.449 34.675C141.999 34.955 141.649 35.355 141.399 35.875C141.149 36.395 141.024 37.005 141.024 37.705C141.024 38.395 141.149 39 141.399 39.52C141.649 40.04 141.999 40.44 142.449 40.72C142.899 41 143.404 41.14 143.964 41.14C144.644 41.14 145.224 40.975 145.704 40.645C146.194 40.315 146.554 39.865 146.784 39.295H149.004C148.724 40.465 148.149 41.39 147.279 42.07C146.409 42.75 145.314 43.09 143.994 43.09C142.984 43.09 142.089 42.865 141.309 42.415C140.539 41.955 139.939 41.315 139.509 40.495C139.089 39.675 138.879 38.745 138.879 37.705C138.879 36.655 139.089 35.72 139.509 34.9C139.939 34.08 140.539 33.445 141.309 32.995C142.079 32.535 142.974 32.305 143.994 32.305ZM158.616 40.105C158.616 40.645 158.481 41.145 158.211 41.605C157.941 42.055 157.541 42.42 157.011 42.7C156.481 42.97 155.836 43.105 155.076 43.105C154.326 43.105 153.656 42.98 153.066 42.73C152.476 42.47 152.001 42.1 151.641 41.62C151.291 41.14 151.091 40.58 151.041 39.94H153.291C153.341 40.37 153.511 40.73 153.801 41.02C154.101 41.3 154.496 41.44 154.986 41.44C155.426 41.44 155.761 41.325 155.991 41.095C156.231 40.855 156.351 40.55 156.351 40.18C156.351 39.85 156.256 39.58 156.066 39.37C155.876 39.15 155.636 38.975 155.346 38.845C155.056 38.715 154.656 38.565 154.146 38.395C153.486 38.175 152.946 37.96 152.526 37.75C152.106 37.53 151.746 37.215 151.446 36.805C151.156 36.395 151.011 35.86 151.011 35.2C151.011 34.29 151.336 33.575 151.986 33.055C152.646 32.525 153.516 32.26 154.596 32.26C155.716 32.26 156.606 32.53 157.266 33.07C157.936 33.61 158.316 34.33 158.406 35.23H156.126C156.066 34.85 155.906 34.54 155.646 34.3C155.386 34.05 155.031 33.925 154.581 33.925C154.191 33.925 153.876 34.03 153.636 34.24C153.396 34.44 153.276 34.735 153.276 35.125C153.276 35.435 153.366 35.695 153.546 35.905C153.736 36.105 153.971 36.27 154.251 36.4C154.541 36.53 154.931 36.675 155.421 36.835C156.101 37.075 156.651 37.3 157.071 37.51C157.501 37.72 157.866 38.035 158.166 38.455C158.466 38.875 158.616 39.425 158.616 40.105Z"
      fill="url(#paint1_linear)"
    />
  ),
}) => {
  const location = useLocation();
  function renderMenuItem({ link, title, icon, isActive = () => false }) {
    return (
      <Link className={isActive(location) ? 'navbar isActive' : 'navbar'} to={link}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {title}
      </Link>
    );
  }

  return (
    <Sidebar>
      <LogoWrap>
        <Link to={logoLocation}>
          <Logo>{subLogo}</Logo>
        </Link>
      </LogoWrap>
      <Content>
        <MenuWrap>
          <Tree menu={menu} />
        </MenuWrap>
        {extraMenu}
      </Content>
      <Navbar>{DEFAULT_MENU.map(renderMenuItem)}</Navbar>
    </Sidebar>
  );
};

export default SidebarLayout;
