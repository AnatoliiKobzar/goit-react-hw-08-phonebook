import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 8px 12px;
  margin: 0;

  font-weight: 600;
  font-size: 16px;
  line-height: calc(24 / 16);

  color: rgba(255, 255, 255, 0.55);
  background-color: transparent;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 transparent;
  transition: all 150ms ease-in-out;
  border: 2px solid transparent;
  border-radius: 8px;

  transition: all 200ms ease-in-out;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #fdf5ff;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #ff6e30 inset, 0 0 10px 4px #ff6e30;
    border: 2px solid #ff6e30;
  }

  &.active {
    color: #ff6e30;
  }
`;
