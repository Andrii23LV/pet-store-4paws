import { useEffect, useState } from 'react';
import { Title } from '../../components/Main/Title';
import { Products } from '../../components/Card/Products';
import '../MainPage/mainpage.css';

export function MainPage() {
  return (
    <>
      <Title />
      <Products />
    </>
  )
}
