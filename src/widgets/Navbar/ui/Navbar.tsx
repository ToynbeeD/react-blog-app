import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [])}>
        <Text
          className={cls.appName}
          title="My blog app"
          theme={TextTheme.INVERTED}
        />

        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.INVERTED}
        >
          {t('Создать статью')}
        </AppLink>

        <Dropdown
          className={cls.dropdown}
          direction="bottom-left"
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('Админка'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
          ]}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [])}>
      <Text
        className={cls.appName}
        title="My blog app"
        theme={TextTheme.INVERTED}
      />

      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
