import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Container from '../Container/Container';
import Navigation from '../Navigation';
const HomePage = lazy(() => import('../../views/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage'));
const PageNotFound = lazy(() => import('../../views/PageNotFound'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={<div>Wait...</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
