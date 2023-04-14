import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>

      <code>
        {text}
      </code>
    </pre>
  );
});
