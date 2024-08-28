import ItemContextProvider from '../contexts/ItemsContextProvider';
import MainContainer from './layout/main-container';

function App() {
  return (
    <ItemContextProvider>
      <MainContainer />
    </ItemContextProvider>
  );
}

export default App;
