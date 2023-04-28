import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole, getUserAuthData, getUserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, roles: routeRoles } = props;
  const location = useLocation();
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRole = useMemo(() => {
    if (!routeRoles) {
      return true;
    }

    return routeRoles.some((routeRole) => userRoles?.includes(routeRole));
  }, [routeRoles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
}
