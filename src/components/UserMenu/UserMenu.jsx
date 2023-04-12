import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Text, WrapUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handelLogOut = () => {
    dispatch(logOut());
  };

  return (
    <WrapUserMenu>
      <Text>{`Welcome, ${user.name}!`}</Text>
      <Button type="button" onClick={handelLogOut}>
        Logout
      </Button>
    </WrapUserMenu>
  );
};
