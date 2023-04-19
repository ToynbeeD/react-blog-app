import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
  <ArticleListItemSkeleton key={index} view={view} />
));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading = true,
    view = ArticleView.GRID,
    target,
  } = props;

  const { t } = useTranslation('articles');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}

      {isLoading && getSkeletons(view)}
    </div>
  );
});
