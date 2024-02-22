import { Route, Redirect } from 'react-router';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';

const PrivateRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <Route {...routeProps}>{children}</Route>
    </div>
  );
};

export default PrivateRoute;
