import { useEffect, useState } from 'react';

function MainContainer() {
  const [dogPhoto, setDogPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Toggles loading state

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
    } finally {
      setLoading(false);
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
            <button
              onClick={fetchDogPhoto}
              className={`${
                loading ? 'bg-black/70' : ''
              } px-4 py-2 text-white bg-black rounded-t-lg hover:bg-black/70`}
              disabled={loading}
            >
              Generate Dog Photo
            </button>

            <div className='relative'>
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
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default MainContainer;
