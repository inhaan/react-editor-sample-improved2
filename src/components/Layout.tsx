import { useCallback } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const menus = [
  { url: "/react-editor-sample-improved2", name: "홈" },
  { url: "/react-editor-sample-improved2/PostWrite", name: "글작성" },
];

const Header = styled.div`
  padding: 1.5rem;
  background-color: #ccc;
`;

const NavContainer = styled.ul`
  display: flex;
  gap: 1rem;
`;

const MenuLink = styled(Link)`
  font-size: 1.1rem;

  &:hover {
    color: #333;
  }
  &.active {
    color: green;

    &:hover {
      color: #015c01;
    }
  }
`;

const Main = styled.main`
  padding: 1rem;
`;

const Layout = () => {
  const { pathname } = useLocation();

  const isActive = useCallback((currentUrl: string, checkUrl: string) => {
    return [checkUrl, checkUrl + "/"].includes(currentUrl);
  }, []);

  return (
    <div>
      <Header>
        <NavContainer>
          {menus.map((menu) => (
            <li key={menu.url}>
              <MenuLink
                to={menu.url}
                className={isActive(pathname, menu.url) ? "active" : ""}
              >
                {menu.name}
              </MenuLink>
            </li>
          ))}
        </NavContainer>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
