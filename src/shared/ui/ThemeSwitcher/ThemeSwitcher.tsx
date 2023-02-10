import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from '../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
 );
}