import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/popups.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom-right',
    label,
  } = props;

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}

      <HListBox
        as="div"
        disabled={readonly}
        className={classNames('', {}, [className, popupsCls.container])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as="div" className={popupsCls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>

        <HListBox.Options className={classNames(cls.options, {}, [popupsCls.content, cls[direction]])}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [popupsCls.disabled]: item.disabled,
                    },
                  )}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
