import { Link } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';
import { HomeText, Wrapper } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <h1>Wellcome to Contacts App!</h1>
      {!isLoggedIn && (
        <HomeText>
          <Link to="/login">Log In</Link>
          if you have an account or
          <Link to="/register">Sign Up</Link>
          if you are a new user.
        </HomeText>
      )}
    </Wrapper>
  );
};

export default Home;
