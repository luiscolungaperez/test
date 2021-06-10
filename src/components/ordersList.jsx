import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../styles/orderList.css';

const OrderList = ({ orders, getPrice }) => {
  return (
    <TableContainer component={Paper}>
      <Table className='table' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { orders && orders.map((order) => (
            <TableRow key={ `${order.sku}${order.name}` }>
              <TableCell component="th" scope="row">{ order.sku }</TableCell>
              <TableCell>{ order.name }</TableCell>
              <TableCell>{ order.quantity }</TableCell>
              <TableCell>{ order.price }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderList