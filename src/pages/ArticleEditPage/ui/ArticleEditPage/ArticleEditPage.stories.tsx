import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleEditPage from './ArticleEditPage';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPage>;

// const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage />;

// export const Light = Template.bind({});
// Light.args = {};

// export const Dark = Template.bind({});
// Dark.args = {};

// Dark.decorators = [ThemeDecorator(Theme.DARK)];