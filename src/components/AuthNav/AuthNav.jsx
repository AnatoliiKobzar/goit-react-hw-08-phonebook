import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};
