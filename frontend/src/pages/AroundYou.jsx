import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
// import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  //   const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get('https://geo.ipify.org/api/v2/country?apiKey=at_5QNAeKw7tlfQMSsDRbSfau8J8CWXP')
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  console.log(country);
  return (
    <div>
      hi
    </div>
  );
};

export default CountryTracks;
