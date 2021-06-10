import React, { useState, useEffect } from 'react';
import { API, TOKEN } from './utils/vars';
import { connectApi } from './utils/callApi';
import { useCalculatePrice } from './hooks/useCalculatePrice';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OrderList from './components/ordersList';
import FormAdd from './components/formAdd'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles/app.css';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [data, obtainPrice] = useCalculatePrice();


  const connect = async () => {
    const data = await connectApi(API, TOKEN);
    let items = [];
    items = data.orders.map(({ items }) => {
      obtainPrice(items[0].quantity, items[0].price);
      return {  sku: items[0].sku, name: items[0].name, quantity: items[0].quantity, price: items[0].price }
    });
    setOrders(items);
  }

  const addOrder = (data) => {
    setOrders([
      ...orders,
      data
    ]);

    obtainPrice(data.quantity, data.price);
  }
  
  useEffect(() => {
    connect();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed className="position">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <OrderList orders={orders} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Paper className='paper'>
                  <FormAdd add={addOrder} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12}>
                <Paper className='paper'>
                  <Typography variant="h6" gutterBottom>
                    Total a pagar: {`$${data.toFixed(2)}`}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}

export default App;
