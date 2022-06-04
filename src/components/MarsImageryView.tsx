import React, { useCallback, useEffect, useState } from 'react';
import IListItem from '../shared-types/IListItem';
import fetchMarsRoverImagery from '../services/apiService';
import CardListView from './CardListView';

const normalizeMarsImageData = (data: any): IListItem => ({
  title: `${data.rover.name} - ${data.camera.full_name}`,
  description: `SOL: ${data.sol}`,
  imageSrc: data.img_src,
});

const useMarsImagery = (): [IListItem[], () => void] => {
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<IListItem[]>([]);
  useEffect(() => {
    (async () => {
      const images = await fetchMarsRoverImagery(page);
      setItems(items => [...items, ...images.map(normalizeMarsImageData)]);
    })();
  }, [page]);

  const nextPage = useCallback(() => setPage(page => page + 1), []);
  return [items, nextPage];
}

const MarsImageryView = () => {
  const [marsImagery, nextPage] = useMarsImagery();
  return (
    <CardListView items={marsImagery} />
  );
};

export default MarsImageryView;
