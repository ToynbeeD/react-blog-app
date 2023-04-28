import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;
const testFunc = (text: string) => {
  console.log(text);
};

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: testFunc,
};
Normal.decorators = [
  StoreDecorator({}),
];
