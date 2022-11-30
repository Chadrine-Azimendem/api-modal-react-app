import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #424651;
  padding: 40px;
`;

export const NavItem = styled.a`
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
