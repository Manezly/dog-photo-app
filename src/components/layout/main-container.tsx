import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './button';
import ReplaceFavouriteDialog from './replace-favourite-dialog';

function MainContainer() {
  const [dogPhoto, setDogPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Toggles loading state
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); // Dialog for replacing favourite dog image

  const fetchDogPhoto = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?limit=${
          import.meta.env.VITE_THE_DOG_API_PHOTO_COUNT
        }&api_key=${import.meta.env.VITE_THE_DOG_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch dog photo');
      }

      const data = await response.json();
      setDogPhoto(data[0].url);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    if (!dogPhoto && !loading) {
      // Fetch image on mount and not loading
      fetchDogPhoto();
    }
  }, []);

  const addFavouritePhoto = () => {
    if (dogPhoto) {
      const existingFavourite = localStorage.getItem('favourite');

      if (existingFavourite) {
        setIsDialogOpen(true);
      } else {
        localStorage.setItem('favourite', dogPhoto);
        toast.success('Dog photo added to favorites!');
      }
    }
  };

  const confirmReplaceFavorite = () => {
    if (dogPhoto) {
      localStorage.setItem('favourite', dogPhoto);
      setIsDialogOpen(false);
      toast.success('Dog photo replaced previous favourite!');
    }
  };

  return (
    <main className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
      <div className='flex h-full justify-center pt-20'>
        <div className='flex max-w-[1020px] w-full flex-col lg-px-0 px-4'>
          <header className='pb-6 text-center'>
            <h1 className='text-6xl font-bold'>Dog Photo App</h1>
          </header>

          <section>
            <Button
              onClickFunction={fetchDogPhoto}
              loading={loading}
              buttonText='Click to Generate Dog Photo'
            />

            <Button
              onClickFunction={addFavouritePhoto}
              loading={loading}
              buttonText='Add Photo to Favourites'
            />
          </section>

          <section>
            <div className='relative h-auto'>
              {loading && (
                <div className='flex justify-center items-center absolute w-full h-full bg-black/80'>
                  <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500'></div>
                </div>
              )}

              {dogPhoto && (
                <img
                  src={dogPhoto}
                  alt='Random Dog'
                  className={`w-full h-auto object-cover`}
                  onLoad={() => setLoading(false)} // Loading state false only when image rendered
                />
              )}
            </div>
          </section>
        </div>
      </div>

      <ToastContainer />

      {isDialogOpen && (
        <ReplaceFavouriteDialog
          confirmReplaceFavorite={confirmReplaceFavorite}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </main>
  );
}

export default MainContainer;
