import React, { useCallback, useEffect, useState } from 'react';
import IListItem from '../shared-types/IListItem';
import fetchMarsRoverImagery from '../services/apiService';
import CardListView from './CardListView';

const normalizeMarsImageData = (data: any): IListItem => ({
  id: data.id,
  title: `${data.rover.name} - ${data.camera.name}`,
  imageSrc: data.img_src,
  href: 'https://api.nasa.gov/',
  description: (
    <ul>
      <li>Rover: {data.rover.name} </li>
      <li>Camera: {data.camera.full_name}</li>
      <li>Date: {new Date(data.earth_date).toDateString()}</li>
      <li>SOL: {data.sol}</li>
    </ul>
  ),
  controls: [
    <button key='show-more' onClick={() => alert(`Clicked ${data.id}`)}>
      More
    </button>,
  ],

});

const useMarsImagery = (): [IListItem[], () => void] => {
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState<IListItem[]>([]);
  useEffect(() => {
    (async () => {  
      const images = await fetchMarsRoverImagery(page);
      setItems(curItems => [...curItems, ...images.map(normalizeMarsImageData)]);
    })();
  }, [page]);

  const nextPage = useCallback(() => setPage(page => page + 1), []);
  return [items, nextPage];
}

const MarsImageryView = () => {
  const [marsImagery, nextPage] = useMarsImagery();
  return (
    <CardListView items={marsImagery} showMoreCallback={nextPage}/>
  );
};

export default MarsImageryView;
