import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
    target,
  } = props;
  const { t } = useTranslation('articles');

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>

          <Text title={article.title} className={cls.title} />

          {types}

          <div className={cls.imageWrapper}>
            <img src={article.img} className={cls.image} alt={article.title} />
          </div>

          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}

          <div className={cls.footer}>
            <AppLink to={RoutePath.article_details + article.id}>
              <Button>
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.image} alt={article.title} />
          <Text text={article.createdAt} className={cls.date} />
        </div>

        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>

        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
