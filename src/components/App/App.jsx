import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
// import s from './App.module.css';
import Navigation from '../Navigation';
import PageNotFound from '../../views/PageNotFound';
import MovieDetailsPage from '../../views/MovieDetailsPage';

const HomePage = lazy(() => import('../../views/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage'));

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <MoviesPage />
            </Suspense>
          }
        ></Route>
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}
