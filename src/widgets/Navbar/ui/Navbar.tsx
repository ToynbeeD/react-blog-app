import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to="/" className={cls.link}>
          {t('Главная')}
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED} to="/about" className={cls.link}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
