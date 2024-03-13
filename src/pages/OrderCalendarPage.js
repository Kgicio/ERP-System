// OrderCalendarPage.js
import React, { useEffect, useState } from 'react';
import OrderCalendar from '../components/OrderCalendar/OrderCalendar';

const OrderCalendarPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch mock order data
    const fetchOrders = async () => {
      // Mock orders data
      const mockOrders = [
        { id: 1, customerName: 'Customer A', expectedDeliveryDate: '2024-03-15' },
        { id: 2, customerName: 'Customer B', expectedDeliveryDate: '2024-03-16' },
        { id: 3, customerName: 'Customer C', expectedDeliveryDate: '2024-03-16' },
        { id: 4, customerName: 'Customer D', expectedDeliveryDate: '2024-03-17' },
      ];
      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  const handleDateClick = (date) => {
    console.log('Clicked on date:', date);
    // Implement logic to filter orders for the clicked date
    // For now, just log the clicked date
  };

  return (
    <div>
      <h1>Order Calendar Management</h1>
      <OrderCalendar orders={orders} onDateClick={handleDateClick} />
    </div>
  );
};

export default OrderCalendarPage;
