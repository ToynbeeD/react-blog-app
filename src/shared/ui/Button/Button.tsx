import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib';
import { Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
