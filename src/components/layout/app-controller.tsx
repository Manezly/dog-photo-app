import { useItemContext } from '../../lib/hooks';
import Button from './button';

function AppController() {
  const {
    fetchDogPhoto,
    loading,
    generateDogImageTab,
    addFavouritePhoto,
    setToGenerateDogPhotoTab,
    setToFavouriteDogPhotoTab,
  } = useItemContext();
  return (
    <section className='flex flex-col items-center gap-4'>
      <div className='flex'>
        <Button
          onClickFunction={fetchDogPhoto}
          loading={loading}
          buttonText='Click to Generate Dog Photo'
          generateDogImageTab={!generateDogImageTab}
          buttonStyling='rounded-l-lg'
        />

        <div className='h-auto w-[1px] bg-white' />

        <Button
          onClickFunction={addFavouritePhoto}
          loading={loading}
          buttonText='Add Photo to Favourites'
          generateDogImageTab={!generateDogImageTab}
          buttonStyling='rounded-r-lg'
        />
      </div>

      <p className='text-lg'>
        {generateDogImageTab
          ? 'Generate and favourite a random dog image'
          : 'Your favourite dog image'}
      </p>

      <div className='flex '>
        <Button
          onClickFunction={setToGenerateDogPhotoTab}
          loading={loading}
          buttonText='Generate Image Tab'
          generateDogImageTab={generateDogImageTab}
          buttonStyling='rounded-tl-lg'
        />
        <div className='h-auto w-[1px] bg-white' />
        <Button
          onClickFunction={setToFavouriteDogPhotoTab}
          loading={loading}
          buttonText='Favourite Image Tab'
          generateDogImageTab={!generateDogImageTab}
          buttonStyling='rounded-tr-lg'
        />
      </div>
    </section>
  );
}

export default AppController;
