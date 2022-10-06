import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import NavLink from '../NavLink';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <Icon id='shopping-bag' />
            <Icon id='search' />
            <UnstyledButton>
              <Icon id='menu' onClick={() => setShowMobileMenu(true)} />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.tabletAndBelow} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndBelow} {
    padding: 16px 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 5rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    justify-content: right;
    gap: 40px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

export default Header;
