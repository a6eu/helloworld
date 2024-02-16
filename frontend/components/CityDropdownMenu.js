import React from 'react';
import styles from "../styles/Home.module.css";
import Image from "next/image";


const CityDropdownMenu = ({ selectedCity, onCityChange }) => {
  const citiesOfKazakhstan = [
    'Астана',
    'Алматы',
    'Шымкент',
    'Орал',
    'Атырау',
    'Актау',
    'Павлодар',
    'Костанай',
    'Тараз',
    'Туркестан',
    'Оскемен',
    'Семей',
    'Усть-Каменогорск',
    'Кызылорда',
    'Актобе',
    'Талдыкорган',
    'Кокшетау',
    'Темиртау',
    'Казалинск',
];

  const handleCityChange = (e) => {
    const selected = e.target.value;
    onCityChange(selected);
  };

  return (
    <div className='flex items-center min-[320px]:max-sm:hidden'>
      <Image src="/images/location.svg" height={24} width={24} alt="location"/>
      <select className="bg-white pl-1 select-none outline-0 appearance-none underline tracking-widest underline-offset-4 cursor-pointer" value={selectedCity} onChange={handleCityChange}>
        {citiesOfKazakhstan.map((city, index) => (
          <option className='border-b-[2px] border-black' key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdownMenu;
