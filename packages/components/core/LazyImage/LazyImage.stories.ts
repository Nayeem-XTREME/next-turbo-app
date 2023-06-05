import LazyImage from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LazyImage> = {
  title: 'Lazy Image',
  component: LazyImage,
  argTypes: {
    src: {
      type: {
        name: 'string',
        required: true,
      },
      control: 'text',
      description: 'The `src` of the image.',
    },
    alt: {
      type: {
        name: 'string',
        required: true,
      },
      control: 'text',
      description: 'The `alt` tag of the image.',
    },
    blur: {
      type: {
        name: 'boolean',
      },
      control: 'boolean',
      description: 'If `true`, enables a `blur` transition on image load.',
    },
    className: {
      type: {
        name: 'string',
      },
      control: 'text',
      description: 'Add `css` classes.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LazyImage>;

export const LazyImageStory: Story = {
  args: {
    src: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    alt: 'thumbnail',
    width: 400,
    height: 300,
  },
  argTypes: {
    width: {
      type: {
        name: 'number',
        required: true,
      },
      control: 'number',
      description: 'The `width` of the image',
    },
    height: {
      type: {
        name: 'number',
        required: true,
      },
      control: 'number',
      description: 'The `height` of the image',
    },
  },
};

export const FilledLazyImageStory: Story = {
  args: {
    src: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    alt: 'thumbnail',
    fill: true,
  },
  argTypes: {
    fill: {
      type: {
        name: 'boolean',
        required: true,
      },
      control: 'boolean',
      description:
        'If `true`, the image will cover the entire wrapping element. Both `width` & `height` will be overwritten',
      table: {
        disable: true,
      },
    },
  },
};
