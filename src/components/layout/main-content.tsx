import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReplaceFavouriteDialog from './replace-favourite-dialog';
import AppController from './app-controller';
import ImageContainer from './image-container';
import { useItemContext } from '../../lib/hooks';
import AppHeading from './app-heading';
import ContentContainer from './content-container';

function MainContent() {
  const { isDialogOpen } = useItemContext();

  return (
    <>
      <ContentContainer>
        <AppHeading />
        <AppController />
        <ImageContainer />
      </ContentContainer>

      <ToastContainer />

      {isDialogOpen && <ReplaceFavouriteDialog />}
    </>
  );
}

export default MainContent;
