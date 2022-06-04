import React from 'react';
import IListItem from '../shared-types/IListItem';

interface IProps {
  items: IListItem[];
}

const CardListView = ({ items }: IProps) => {

  return (
    <ul>
      {items.map(({ title, description, imageSrc }) => (
        <li className='card-list__item'>
          <div className='card-list__item-image'>
            <img
              src={imageSrc} 
              alt={title}
            />
          </div>
          <div className='card-list__item-info'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardListView;
