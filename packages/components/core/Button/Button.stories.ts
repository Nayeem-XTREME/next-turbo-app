import Button from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    loading: false,
    disabled: false,
    disableElevation: false,
    disableRipple: false,
    children: 'Button',
  },
};
