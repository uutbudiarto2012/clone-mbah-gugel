import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from './Loading';
import ResultError from './ResultError';
import ResultImage from './ResultImage';
import ResultNews from './ResultNews';
import ResultSearch from './ResultSearch';
import ResultVideo from './ResultVideo';


export const Results = () => {
  const {results,isLoading,getResults,searchTerm} = useResultContext()
  const location = useLocation();

  useEffect(() => {
    if(searchTerm){
      if(location.pathname === '/videos'){
        getResults(`/search/q=${searchTerm} videos`);
      }else{
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm,location.pathname])

  if(isLoading) return <Loading />
  
  switch (location.pathname) {
    case '/search':
      return <ResultSearch results={results} />
    case '/images':
      return <ResultImage results={results} />
    case '/videos':
      return <ResultVideo results={results} />
    case '/news':
      return <ResultNews results={results} />
    default:
      return <ResultError />
  }
}
