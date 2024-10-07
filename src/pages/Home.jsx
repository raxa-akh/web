import React from 'react';
import cls from '../styles/Home.module.css';
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className={cls.container}>
       <div className={cls.inner}>
        <div className={cls.intro}>
          <span className={cls.title}>ZAIRA STROY</span>
          <span className={cls.sub_title}>Мы создаем будущее</span>
          <a href={'/about'}><button className={cls.about}>Подробнее</button></a>
        </div>
        <div className={cls.projects}>
          <div className={cls.project_title}>Наши проекты</div>
          <div className={cls.cards}>
            <div className={cls.card}>
              <div className={cls.card_img}><img width={'250px'} height={'180px'} src={'src/assets/11.jpg'} alt=""/></div>
              <div className={cls.card_title}>Moscow City</div>
            </div>
            <div className={cls.card}>
              <div className={cls.card_img}><img width={'250px'} height={'180px'} src={'src/assets/22.png'} alt=""/></div>
              <div className={cls.card_title}>Empire State Building</div>
            </div>
            <div className={cls.card}>
              <div className={cls.card_img}><img width={'250px'} height={'180px'} src={'src/assets/3.jpg'} alt=""/></div>
              <div className={cls.card_title}>Chun Gun</div>
            </div> 
          </div>  
            
          </div>
       </div>
    </div>
  );
}

export default Home;