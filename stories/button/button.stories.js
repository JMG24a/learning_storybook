import {withActions} from '@storybook/addon-actions/decorator';
import {expect} from '@storybook/jest'
import {within} from '@storybook/testing-library';
import {createButton} from './button';
import ButtonDocumentation from './button.mdx';
import { userEvent } from '@storybook/test';

export default {
  title: 'Design System/Atoms/Button',
  decorators: [(story) => {
    const decorator = document.createElement('div');
    decorator.style.margin = '24px';
    decorator.appendChild(story());
    return decorator;
  },withActions,],
  parameters:{
    docs:{
      page: null,
      description:{
        component: ButtonDocumentation,
      }
    },
    actions: {
      handles: ['mouseover']
    },
    backgrounds:{
      default: 'default',
      values:[
        {
          name: 'blackfriday',
          value: '#000000'
        },
        {
          name: 'default',
          value: '#ffffff'
        },
      ],
    },
  },
  argTypes:{
    label:{
      name: 'label',
      control:{
        type: 'text'
      }
    },
    style:{
      name: 'style',
      options: ['filled', 'outlined'],
      control:{
        type: 'select'
      }
    },
    size:{
      name: 'size',
      options: ['small', 'medium', 'large'],
      control:{
        type: 'select'
      }
    },
    onclick:{
      description: 'event',
      action: 'clicked'
    }
  }
};

const Template = ({label, ...args}) => {
  return createButton({label, ...args})
}

export const Default = Template.bind({})

Default.args = {
  label: 'button'
}

Default.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('button')).toBeInTheDocument()
}
