import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const {
    className, Svg, inverted, ...otherProps
  } = props;
  const currentClass = inverted ? cls.inverted : cls.icon;

  return (
    <Svg className={classNames(currentClass, {}, [className])} {...otherProps} />
  );
});
