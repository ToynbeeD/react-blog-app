import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'blablalba',
      user: { id: '1', username: 'admin' },
    },
    {
      id: '2',
      text: 'test',
      user: { id: '2', username: 'user' },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comments: [],
};
