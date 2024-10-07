import React from 'react';
import cls from '../styles/Header.module.css';

function Header() {
  return (
    <div className={cls.container}>
            <div className={cls.inner}>
                <div className={cls.nav}>
                    <div className={cls.nav_items}>
                        <a href={'/'} className={cls.nav_items_title_big}><img src={'src/assets/logo.png'} width="60px" height={'60px'} alt="4" /></a> 
                        <a href={'/'} className={cls.nav_items_title}>Zaira Stroy</a>
                    </div>
                    <div className={cls.nav}>
                        <a href={'/about'} className={cls.nav_items_title}>О нас</a>
                        {/* <a href={'/'} className={cls.nav_items_title}>Сотрудники</a> */}
                        <a href={'/contact'} className={cls.nav_items_title}>Контакты</a>
                        <a href={'/login'} className={cls.nav_items_title}>Войти</a>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;