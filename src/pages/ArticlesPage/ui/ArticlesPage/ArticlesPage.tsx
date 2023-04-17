import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList
        view={ArticleView.LIST}
        isLoading
        articles={[]}
      />
    </div>
  );
};

export default memo(ArticlesPage);
