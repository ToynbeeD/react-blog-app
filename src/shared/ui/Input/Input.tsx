import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib';
import { Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}

      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
        {!readonly && <span className={cls.caret} style={{ left: `${caretPosition * 8.8}px` }} />}
      </div>
    </div>
  );
});
