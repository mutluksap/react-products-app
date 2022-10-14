import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/Main';
import { Container, Flex } from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [basket, setBasket] = useState([]);
  const [selecCategory, setSelecCategory] = useState({
    "id": 1,
    "categoryName": "Beverages",
    "seoUrl": "beverages"
});

  useEffect(() => {
    axios.get('http://localhost:3001/categories').then(response => setCategories(response.data));
    axios.get('http://localhost:3001/products').then(response => setProducts(response.data));
  }, [])

  const selectedCategory = (category) => {
    setSelecCategory(category);
  }

  const emptyBasket = () => {
    setBasket([]);
  }

  const addBasket = (product) => {
    const basketedProduct = basket.filter(basketProduct => product.id === basketProduct.id);
    if(basketedProduct.length !== 0){
      basketedProduct[0].productCount += 1;
      setBasket([...basket.find(item => item.id === basketedProduct[0].id, basketedProduct[0])])
    }else {
      setBasket([...basket, {...product, 'productCount': 1}]);
    }
  }

  if(products !== null && categories !== null)
  return (
      <Container margin='0 auto' maxW='6xl' color='white'>
        <Flex flexDirection='column' alignItems='center'>
        <Header basket={basket} emptyBasket={emptyBasket}/>
        <Main 
        addBasket={addBasket}
        products={products}
        selecCategory={selecCategory} 
        selectedCategory={selectedCategory} 
        categories={categories}/>
        <Footer/>
        </Flex>
      </Container>
  );
}

export default App;
