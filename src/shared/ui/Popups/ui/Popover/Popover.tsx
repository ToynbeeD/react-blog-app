import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import popupsCls from '../../styles/popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className,
    direction = 'bottom-right',
    trigger,
    children,
  } = props;

  return (
    <HPopover className={classNames(cls.popover, {}, [className, popupsCls.container])}>
      <HPopover.Button as="div" className={popupsCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, [popupsCls.content, popupsCls[direction]])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
