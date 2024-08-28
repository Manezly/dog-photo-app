import ItemContextProvider from '../contexts/ItemsContextProvider';
import MainContent from './layout/main-content';

function App() {
  return (
    <ItemContextProvider>
      <MainContent />
    </ItemContextProvider>
  );
}

export default App;
