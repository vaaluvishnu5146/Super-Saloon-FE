import React, { useState, useEffect } from 'react';
import CategoryBubble from '../Components/CategoryBubble/Bubble';
import ScrollableGrid from '../Components/ScrollableGrid/ScrollableGrid';
import BasicCta from '../Elements/Button/BasicCta';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../Components/Header/AppHeader';

function Home() {
  const [categories, setCategories] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    fetch('https://supersaloon.onrender.com/api/categories/')
      .then((response) => response.json())
      .then((res) => {
        if (res.result) {
          setCategories(res.result);
        }
      })
      .catch((err) => console.log('ERROR', err));
    fetch('https://supersaloon.onrender.com/api/specialists/')
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.result) {
          setSpecialists(res.result);
        }
      })
      .catch((err) => console.log('ERROR', err));
  }, []);

  return (
    <section>
      <AppHeader />
      <div className="categories-listing-section">
        {categories.map((category, index) => (
          <CategoryBubble
            key={`categories-bubble-${index}`}
            background="#FEF1E0"
            data={category}
          />
        ))}
      </div>
      <div className="content-container">
        <ScrollableGrid
          heading="Hair Specialists"
          data={specialists.filter((d) =>
            d.professionalDetails.specializations.includes('Haircut')
          )}
        />
        <ScrollableGrid
          heading="Facial Specialists"
          data={specialists.filter((d) =>
            d.professionalDetails.specializations.includes('Facial')
          )}
        />
      </div>
      <div
        style={{
          width: '100%',
          height: '50px',
        }}
      ></div>
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
          onClick={() => navigator('/bookings')}
        />
      </div>
    </section>
  );
}

export default Home;
