import React from 'react';
import IListItem from '../shared-types/IListItem';
import '../styles/CardListView.css';

interface IProps {
  items: IListItem[];
}

const CardListView = ({ items }: IProps) => {

  return (
    <ul className='card-list'>
      {items.map(({ id, title, description, imageSrc }) => (
        <li key={id} className='card-list__item'>
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
