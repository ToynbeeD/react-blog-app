import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentFrom: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, onCommentTextChange, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify="between" max className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />

        <Button onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
