import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TestComponent from './assets/testcomponent';

function App() {

  // Değişkenler burada tanımlanır
  let a = "React"; // Bootcamp adını tutan string değişken
  const name = "Yusuf"; // Kullanıcı adını tutan sabit değişken
  let exam1 = 50; // İlk sınavın notu
  let exam2 = 60; // İkinci sınavın notu
  let result = true; // Ders geçme durumunu belirten boolean değişken

  // Return ile HTML kodları ve JSX ifadeleri render edilir
  return (
    <div>
      <h1>The first day of {a} bootcamp</h1> {/* Bootcamp adını dinamik olarak yazdırır */}
      <h5>my name is {name} welcome to my course</h5> {/* Kullanıcı adını dinamik olarak yazdırır */}

      <p> Average: {(exam1 + exam2) / 2} </p> {/* Ortalama hesaplar ve gösterir */}

      {/* Ternary Operator:
          Eğer result değişkeni true ise "you passed the course" mesajını gösterir,
          aksi halde "you are failed" mesajını gösterir */}
      {result ? <p> you passed the course</p> : <p>you are failed </p>}

      {
        (exam1+exam2)/2 >=70 ? <p>succesfull</p> : <p>fail</p>
      }

      <TestComponent /> {/* Başka bir bileşeni ekler */}
    </div>
  );
}

export default App;
