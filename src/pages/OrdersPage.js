// OrdersPage.js
import React, { useState } from 'react';
import OrderList from '../components/Orders/OrderList';
import OrderDetails from '../components/Orders/OrderDetails';
import OrderEdit from '../components/Orders/OrderEdit';
import OrderDelete from '../components/Orders/OrderDelete';

const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer A', orderDate: '2024-03-13', status: 'Pending' },
    { id: 2, customerName: 'Customer B', orderDate: '2024-03-14', status: 'Shipped' },
    { id: 3, customerName: 'Customer C', orderDate: '2024-03-20', status: 'Delivered' },
    { id: 3, customerName: 'Customer D', orderDate: '2024-03-21', status: 'Delivered' },
    // Add more mock orders as needed
  ]);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    // Update the status of the order with the provided orderId
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    // Clear the selectedOrder state
    setSelectedOrder(null);
  };

  const handleDeleteOrder = (orderId) => {
    // Delete the order with the provided orderId
    setOrders(prevOrders =>
      prevOrders.filter(order => order.id !== orderId)
    );
    // Clear the selectedOrder state
    setSelectedOrder(null);
  };

  return (
    <div>
      {selectedOrder ? (
        <div>
          <OrderDetails order={selectedOrder} />
          <OrderEdit order={selectedOrder} onUpdateStatus={handleUpdateStatus} />
          <OrderDelete orderId={selectedOrder.id} onDelete={handleDeleteOrder} />
        </div>
      ) : (
        <OrderList orders={orders} onViewDetails={handleViewDetails} />
      )}
    </div>
  );
};

export default OrdersPage;
