import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articlesPage, {}, [className])}>
      ARTICLE PAGE
    </div>
  );
};

export default memo(ArticlesPage);