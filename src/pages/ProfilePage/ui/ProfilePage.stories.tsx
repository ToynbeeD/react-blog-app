import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
// import AvatarImg from 'shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';

const AvatarImg = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg.webp';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Иван',
      lastname: 'Пупкин',
      age: 45,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: AvatarImg,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Иван',
      lastname: 'Пупкин',
      age: 45,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: AvatarImg,
    },
  },
})];
