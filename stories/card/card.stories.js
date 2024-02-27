import {createdCard} from './card.js'

export default {
  title: 'Design System/Atoms/Card',
}

const Template = ({label, ...args}) => {
  return createdCard({label, ...args})
}

export const Default = Template.bind({})

Default.args = {
  title: 'title',
  description: 'description'
}
