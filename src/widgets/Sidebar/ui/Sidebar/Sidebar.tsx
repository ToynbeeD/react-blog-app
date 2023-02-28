import { classNames } from 'shared/lib';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.main} className={cls.item}>
          <MainIcon className={cls.icon} />

          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />

          <span className={cls.link}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
