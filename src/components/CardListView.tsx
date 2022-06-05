import React from 'react';
import IListItem from '../shared-types/IListItem';
import '../styles/CardListView.css';

interface IProps {
  items: IListItem[];
  showMoreCallback?: () => void;
}

const CardListView = ({ items, showMoreCallback }: IProps) => (
  <div>
    <ul className='card-list'>
      {items.map(item => (
        <li key={item.id} className='card-list__item'>
          <a href={item.href}>
            <div className='card-list__item-image'>
              <img
                src={item.imageSrc} 
                alt={item.title}
              />
            </div>
            <div className='card-list__item-info'>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          </a>
          {item.controls && (
            <div className='card-list__item-controls'>
              {item.controls}
            </div>
          )}
        </li>
      ))}
    </ul>
    {showMoreCallback && (
      <button className='card-list__show-more' onClick={showMoreCallback}>
        Show More
      </button>
    )}
  </div>
);

export default CardListView;
