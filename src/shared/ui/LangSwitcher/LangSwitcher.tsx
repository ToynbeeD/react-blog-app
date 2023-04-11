import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '../Button';
import { ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Короткая язык' : 'Язык')}
    </Button>
  );
});
