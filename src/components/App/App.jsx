import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Container from '../Container/Container';
import Navigation from '../Navigation';
import s from './App.module.css';
const HomePage = lazy(() => import('../../views/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className={s.suspense}>Wait...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div className={s.suspense}>Wait...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={<div className={s.suspense}>Wait...</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
