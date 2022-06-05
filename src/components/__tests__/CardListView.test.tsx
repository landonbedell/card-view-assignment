import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardListView from '../CardListView';
import IListItem from '../../shared-types/IListItem';

const MOCK_CONTROL_FUNC = jest.fn();
const MOCK_SHOW_MORE_CB = jest.fn();

const MOCK_ITEMS: IListItem[] = [
  {
    id: 1,
    title: 'mock title 1',
    description: 'mock description string',
    href: 'https://www.example.com',
    imageSrc: 'https://www.example.com/example1',
  },
  {
    id: 2,
    title: 'mock title 2',
    description: <p>element description</p>,
    href: 'https://www.example.com',
    imageSrc: 'https://www.example.com/example2',
    controls: [
      <button key='test' onClick={MOCK_CONTROL_FUNC}>Control</button>
    ]
  },
]

const renderCardListView = () => {
  render(
    <CardListView 
      items={MOCK_ITEMS} 
      showMoreCallback={MOCK_SHOW_MORE_CB}
    />
  );
}

test('renders a list element for each item', () => {
  renderCardListView();
  const listElements = screen.getAllByRole('listitem');
  expect(listElements).toHaveLength(2);
});

test('renders a heading with the title for each item', () => {
  renderCardListView();
  const headings = screen.getAllByRole('heading');
  expect(headings[0]).toHaveTextContent('mock title 1');
  expect(headings[1]).toHaveTextContent('mock title 2');
});

test('renders a string or element description for an item', () => {
  renderCardListView();
  const stringDesc = screen.getByText('mock description string');
  expect(stringDesc).toBeInTheDocument();

  const elementDesc = screen.getByText('element description');
  expect(elementDesc).toBeInTheDocument();
});

test('renders an image with the src set to item\'s imageSrc', () => {
  renderCardListView();
  const images = screen.getAllByRole('img');
  expect(images[0]).toHaveAttribute('src', 'https://www.example.com/example1');
});

test('calls control button callback when it is clicked', () => {
  renderCardListView();
  fireEvent(
    screen.getByText(/control/i),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(MOCK_CONTROL_FUNC).toHaveBeenCalled();
});

test('calls show more callback when show more button is clicked', () => {
  renderCardListView();
  fireEvent(
    screen.getByText(/show more/i),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(MOCK_SHOW_MORE_CB).toHaveBeenCalled();
});