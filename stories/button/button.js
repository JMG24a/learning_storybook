import './button.css'

export const createButton = ({
  style = 'outlined',
  size = 'small',
  label,
  onclick
}) => {
  const button = document.createElement('button')
  button.type = 'submit'
  button.role = 'button'
  button.innerHTML = label
  button.className = [
    'button',
    `button--${style}`,
    `button--${size}`,
    `button--filled`
  ].join(' ')

  button.addEventListener('click', onclick)

  return button
}
