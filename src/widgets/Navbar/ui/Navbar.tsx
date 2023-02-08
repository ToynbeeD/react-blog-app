import { classNames } from "shared/lib"
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'} className={cls.link}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'} className={cls.link}>О сайте</AppLink>
            </div>
        </div>
    )
}