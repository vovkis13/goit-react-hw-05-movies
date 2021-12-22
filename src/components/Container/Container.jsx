import React from 'react';
import s from './Container.module.css';

export default function Container({ children }) {
  return <section className={s.container}>{children}</section>;
}
