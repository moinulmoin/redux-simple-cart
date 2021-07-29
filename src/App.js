import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'

function App() {
  const isShowing = useSelector(state => state.cartList.isShowing)
  return (
    <Layout>
      {isShowing && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
