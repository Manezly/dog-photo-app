import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type ItemContextProviderProps = {
  children: React.ReactNode;
};

type TItemContext = {
  dogPhoto: string | null;
  fetchDogPhoto: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateDogImageTab: boolean;
  addFavouritePhoto: () => void;
  setToGenerateDogPhotoTab: () => void;
  setToFavouriteDogPhotoTab: () => void;
  error: string | null;
  favouritePhoto: string | null;
  confirmReplaceFavorite: () => void;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDialogOpen: boolean;
};

export const ItemContext = createContext<TItemContext | null>(null);

export default function ItemContextProvider({
  children,
}: ItemContextProviderProps) {
  const [dogPhoto, setDogPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [generateDogImageTab, setGenerateDogImageTab] = useState<boolean>(true);

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
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (!dogPhoto && !loading) {
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

  const favouritePhoto = localStorage.getItem('favourite');

  const setToGenerateDogPhotoTab = () => {
    setGenerateDogImageTab(true);
  };

  const setToFavouriteDogPhotoTab = () => {
    setGenerateDogImageTab(false);
  };

  return (
    <ItemContext.Provider
      value={{
        dogPhoto,
        fetchDogPhoto,
        loading,
        setLoading,
        generateDogImageTab,
        addFavouritePhoto,
        setToGenerateDogPhotoTab,
        setToFavouriteDogPhotoTab,
        error,
        favouritePhoto,
        confirmReplaceFavorite,
        setIsDialogOpen,
        isDialogOpen,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
