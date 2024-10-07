import cls from "../styles/Footer.module.css"




function Footer(){
    return(
        <div className={cls.container}>
            <div className={cls.inner}>
                <div className={cls.footer_inner}>
                    <div className={cls.first_section}>
                        <div className={cls.logo}>
                            <img src={'src/assets/logo.png'} alt="3" width={'60px'} height={'60px'} /> Zaira Stroy
                        </div>
                    </div>  
                    <div className={cls.third_section}>
                        <span className={cls.copy_right}>Copyright © 2000-2024 Все права защищены.</span>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Footer;