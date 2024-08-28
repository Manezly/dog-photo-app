import { useItemContext } from '../../lib/hooks';

function ReplaceFavouriteDialog() {
  const { confirmReplaceFavorite, setIsDialogOpen } = useItemContext();
  return (
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center'>
      <div className='bg-white p-4 rounded shadow-lg'>
        <h2 className='text-xl font-bold mb-4'>Replace Favorite?</h2>
        <p>
          There is already a favorite dog photo. Do you want to replace it with
          this new one?
        </p>
        <div className='mt-4 flex justify-end'>
          <button
            onClick={confirmReplaceFavorite}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            Yes, Replace
          </button>
          <button
            onClick={() => setIsDialogOpen(false)}
            className='px-4 py-2 bg-red-500 text-white rounded ml-2 hover:bg-red-600'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReplaceFavouriteDialog;
