import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReplaceFavouriteDialog from './replace-favourite-dialog';
import AppController from './app-controller';
import ImageContainer from './image-container';
import { useItemContext } from '../../lib/hooks';
import AppHeading from './app-heading';

function MainContainer() {
  const { isDialogOpen } = useItemContext();

  return (
    <main>
      <div className='flex h-full justify-center pt-10'>
        <div className='flex max-w-[1020px] w-full flex-col lg-px-0 px-4'>
          <AppHeading />

          <AppController />

          <ImageContainer />
        </div>
      </div>

      <ToastContainer />

      {isDialogOpen && <ReplaceFavouriteDialog />}
    </main>
  );
}

export default MainContainer;
