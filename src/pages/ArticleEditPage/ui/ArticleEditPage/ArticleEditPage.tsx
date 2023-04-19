import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? t('Редактирование статьи с ID:') + id : t('Создание статьи')}
    </Page>
  );
});

export default ArticleEditPage;
