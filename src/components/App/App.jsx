import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
// import s from './App.module.css';
import Navigation from '../Navigation';
import HomePage from '../../views/HomePage';
import PageNotFound from '../../views/PageNotFound';
import MovieInfoPage from '../../views/MovieInfoPage';

// const HomePage = lazy(() => import('../../views/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage'));

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <MoviesPage />
            </Suspense>
          }
        ></Route>
        <Route path="/movies/:movieId/*" element={<MovieInfoPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}
