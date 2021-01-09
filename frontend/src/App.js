import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import MyOrdersScreen from './screens/MyOrdersScreen'
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import UserEditScreen from './screens/UserEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/profile' component={ProfileScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
          <Route exact path='/shipping' component={ShippingScreen} />
          <Route exact path='/payment' component={PaymentScreen} />
          <Route exact path='/placeorder' component={PlaceOrderScreen} />
          <Route exact path='/order/:id' component={OrderScreen} />
          <Route exact path='/my-order' component={MyOrdersScreen} />
          <Route exact path='/admin/userlist' component={UserListScreen} />
          <Route exact path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            exact
            path='/admin/productlist'
            component={ProductListScreen}
          />
          <Route
            exact
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
          />
          <Route
            exact
            path='/admin/product/:id/edit'
            component={ProductEditScreen}
          />
          <Route exact path='/admin/orderlist' component={OrderListScreen} />
          <Route exact path='/search/:keyword' component={HomeScreen} />
          <Route exact path='/page/:pageNumber' component={HomeScreen} />
          <Route
            exact
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
