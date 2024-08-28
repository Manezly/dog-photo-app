import { useItemContext } from '../../lib/hooks';

function ImageContainer() {
  const { loading, dogPhoto, generateDogImageTab, favouritePhoto, setLoading } =
    useItemContext();
  return (
    <section>
      <div className='relative h-auto'>
        {loading && (
          <div
            className={`flex justify-center items-center absolute w-full h-full ${
              !dogPhoto ? 'bg-white h-[400px]' : 'bg-black/80'
            }`}
          >
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500'></div>
          </div>
        )}

        {dogPhoto && (
          <img
            src={generateDogImageTab ? dogPhoto : favouritePhoto || ''}
            alt='Random Dog'
            className={`w-full h-auto object-cover`}
            onLoad={() => setLoading(false)} // Loading state false only when image rendered
          />
        )}
      </div>
    </section>
  );
}

export default ImageContainer;
