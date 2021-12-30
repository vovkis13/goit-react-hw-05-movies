import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';
import { fetchConfig } from 'api/fetchMovies';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import s from './App.module.css';
const HomePage = lazy(() => import('views/HomePage'));
const MoviesPage = lazy(() => import('views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));

export default function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        await fetchConfig();
      } catch (e) {
        console.error(e);
      } finally {
      }
    }
    fetchData();
  }, []);
  const fallback = <div className={s.suspense}>Please wait...</div>;
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={fallback}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={fallback}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={fallback}>
              <MovieDetailsPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
