import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const defaultAvatar = 'https://dewcare.co.za/wp-content/uploads/2020/10/blank-avatar.png';

  const {
    className,
    src,
    alt = 'Аватар',
    size = 100,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src || defaultAvatar}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
};
