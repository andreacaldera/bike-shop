import { Story, Meta } from '@storybook/react';
import { ComponentLibrary, ComponentLibraryProps } from './component-library';

export default {
  component: ComponentLibrary,
  title: 'ComponentLibrary',
} as Meta;

const Template: Story<ComponentLibraryProps> = (args) => (
  <ComponentLibrary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
