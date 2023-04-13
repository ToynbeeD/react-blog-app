import { ComponentStory, ComponentMeta } from '@storybook/react';
// import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Avatar } from './Avatar';

const AvatarImg = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg.webp';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
};
