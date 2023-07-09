import './App.css';

import Header from './Layout/Header';
import Content from './Layout/Content';
import { useState } from 'react';

function App() {

  const [wishList, setWishList] = useState([]);

  const addToWishList = (item) => {
    setWishList([...wishList, item]);
  }

  const removeFromWishList = (item) => {
    setWishList(wishList.filter(i => i.id !== item.id));
  };

  return (
    <div className="App">
      <Header title={wishList.map(movie => movie.title).join(', ')} wishCount={wishList.length} />
      <Content addToWishList={addToWishList} removeFromWishList={removeFromWishList} />
    </div>
  );
}

export default App;
