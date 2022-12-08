import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
// import { selectGenreListId } from '../redux/features/playerSlice';
// import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  console.log(genres);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        {/* <select></select> */}
      </div>

    </div>
  );
};

export default Discover;
