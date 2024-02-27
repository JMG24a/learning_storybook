import './card.css'

export const createdCard = ({
  size = 'small',
  title,
  description
}) => {
  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  const content = document.createElement("div");
  const avatar = document.createElement("div");
  const h3 = document.createElement("div");
  const p = document.createElement("div");

  wrapper.appendChild(card)
  card.appendChild(avatar);
  card.appendChild(content);
  content.appendChild(h3);
  content.appendChild(p);

  h3.innerHTML = title;
  p.innerHTML = description;

  card.className = [
    'card',
    `card--${size}`
  ].join(' ')

  wrapper.className = 'wrapper';
  content.className = 'card__content';
  avatar.className = 'card__avatar';

  return wrapper;
}
