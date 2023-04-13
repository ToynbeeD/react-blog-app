import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
// import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const AvatarImg = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg.webp';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args: any) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Иван',
    lastname: 'Пупкин',
    age: 45,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
