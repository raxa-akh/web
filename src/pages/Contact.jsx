import React from 'react';
import cls from '../styles/Contact.module.css';

function Contact() {
  return (
    <div className={cls.container}>
       <div className={cls.inner}>
            <div className={cls.card}>
                <div className={cls.cardLeft}>
                    <div classNqme={cls.card_img}>
                        <img src={'src/assets/logo.png'} alt="1" width="150px" />
                    </div>
                    <div className={cls.card_references}>
                        <img alt="2" src={'src/assets/instagram.svg'} width="40px"/>
                        <img alt="2" src={'src/assets/telegram.svg'} width="40px"/>
                        <img alt="2" src={'src/assets/youtube.svg'} width="40px"/>
                    </div>
                </div>
                <div className={cls.cardRight}>
                    <div className={cls.card_title}>Директор</div>
                    <div className={cls.card_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed dolorem ut tempore distinctio excepturi atque omnis iusto laudantium libero neque voluptatem laboriosam fugit, aut, animi ad cum officiis reiciendis?</div>
                </div>
            </div>
       </div>
    </div>
  );
}

export default Contact;