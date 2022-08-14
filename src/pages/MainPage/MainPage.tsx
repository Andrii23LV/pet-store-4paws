import { useEffect, useState } from 'react';
import { Title } from '../../components/Title';
import { Products } from '../../components/Products';
import '../MainPage/mainpage.css';

export function MainPage() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem());
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  return (
    <>
      <Title />
      <Products />
    </>
  )
}
