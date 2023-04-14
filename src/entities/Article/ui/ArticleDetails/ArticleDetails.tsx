/* eslint-disable indent */
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.skeleton} width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            className={cls.avatar}
          />
        </div>

        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />

        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>

        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removaAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
