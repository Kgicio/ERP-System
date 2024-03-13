// OrderCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './OrderCalendar.css';

const OrderCalendar = ({ orders, onDateClick }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateClick(date);
  };

  const ordersForDate = orders.filter(order => {
    const orderDate = new Date(order.expectedDeliveryDate);
    return (
      orderDate.getDate() === selectedDate.getDate() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  return (
    <div className="order-calendar">
      <h2>Order Calendar</h2>
      <div className="calendar">
        <Calendar onChange={handleDateClick} value={selectedDate} />
      </div>
      <div className="orders-on-date">
        <h3>Orders for {selectedDate.toDateString()}</h3>
        <ul>
          {ordersForDate.map(order => (
            <li key={order.id}>
              {order.id} - {order.customerName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderCalendar;
