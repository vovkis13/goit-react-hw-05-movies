import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Navigation from '../Navigation';
const HomePage = lazy(() => import('../../views/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage'));
const PageNotFound = lazy(() => import('../../views/PageNotFound'));
// import s from './App.module.css';

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
        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <PageNotFound />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}
