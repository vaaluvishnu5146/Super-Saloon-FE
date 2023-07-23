import React, { useState } from 'react';
import BasicCta from '../Elements/Button/BasicCta';
import AppHeader from '../Components/Header/AppHeader';
import AppointmentRadio from '../Components/CustomCheckbox/AppointmentRadio';

const APPOINTMENT_OPTIONS = [
  {
    id: 1,
    label: '09:30 to 10:30 AM',
  },
  {
    id: 2,
    label: '10:30 to 11:15 AM',
  },
];

function Bookings() {
  const [bookingSlot, setBookingSlot] = useState(null);
  return (
    <section id="bookings-page">
      <AppHeader
        pageName="Book Appointment"
        headerColor="#F1768A"
        textColor="#FFFFFF"
      />
      <div
        className="page-header"
        style={{
          background: '#F1768A',
        }}
      ></div>
      <div className="content-container">
        <AppointmentRadio
          options={APPOINTMENT_OPTIONS}
          selectedId={bookingSlot}
          onSelect={setBookingSlot}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <BasicCta
            text="Book Appointment"
            overrides={{
              background: '#F1768A',
              borderRadius: '20px',
              width: '50%',
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}
            onClick={() => console.log('Book Appointment')}
          />
        </div>
      </div>
    </section>
  );
}

export default Bookings;
