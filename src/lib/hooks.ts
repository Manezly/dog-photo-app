import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemsContextProvider';

export function useItemContext() {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error('ItemsContext is not defined in Item component');
  }
  return context;
}
