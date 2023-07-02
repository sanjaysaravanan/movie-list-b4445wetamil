import './App.css';

import Header from './Layout/Header';
import Content from './Layout/Content';
import { useState } from 'react';

function App() {

  const [wishlist, setWishlist] = useState([]);

  // function to added to the wishlist
  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  // function to remove from the wishlist
  const removeFromWishlist = (item) => {
    setWishlist(wishlist.filter((wishItem) => wishItem !== item));
  };

  return (
    <div className="App">
      <Header wishCount={wishlist.length} />
      <Content
        // passing function as property value
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
    </div>
  );
}

export default App;
