import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.png';
import item5 from '../assets/item5.png';
import item6 from '../assets/item6.png';
import blueIcon1 from '../assets/blueIcon1.png';
import blueIcon2 from '../assets/blueIcon2.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onCompanies = location.pathname === '/companies';
  const onDashboard = location.pathname === '/dashboard';

  const imgArray = [
    item5,
    onCompanies ? item4 : blueIcon1,   
    onCompanies ? blueIcon2 : item1,
    item2,
    item3,
  ];

  const redirect = (ind) => {
    if (ind === 1) {
      navigate('/dashboard');
    } else if (ind === 2) {
      navigate('/companies');
    }
  };

  return (
    <div className="bg-black flex flex-col justify-between items-center min-h-screen">
      <div>
        {imgArray.map((img, ind) => (
          <div key={ind} onClick={() => redirect(ind)}>
            <img src={img} alt={`icon-${ind}`} />
          </div>
        ))}
      </div>
      <div>
        <img src={item6} alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
