import InputField from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputField> = {
  title: 'Input Field',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const InputStory: Story = {
  args: {
    type: 'text',
    fullWidth: true,
    color: 'primary',
    label: 'Text Field',
    placeholder: 'Write something',
  },
};
