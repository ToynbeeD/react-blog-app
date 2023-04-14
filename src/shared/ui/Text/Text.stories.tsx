import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Description description description description description description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description description description description description description',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description description description description description description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Description description description description description description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description description description description description description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  size: TextSize.L,
  title: 'Title',
  text: 'Description description description description description description',
};
