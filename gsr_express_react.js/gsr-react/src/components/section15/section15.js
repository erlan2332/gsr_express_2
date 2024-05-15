import React from "react";
import './section15.css'
import logoGsr from '../img/logo/agrostroy.png'
import whatsapp from '../img/icon/whatsapp_icon.png'
import VK from '../img/icon/vk_icon.png'
import telegram from '../img/icon/telegram_icon.png'
import instagram from '../img/icon/instagram_icon.png'

const EndComponent = () => {
    return (
        <div>
            <div className="EndComponentInfo">
                <div>
                    <div className="textGsrEnd"><img className="textGsrEndPage" src={logoGsr} /> <br /> GSR Group - группа компаний, специализирующаяся в области логистики, консалтинга, брокерских услуг в международной торговле и легализации в различных странах.</div>
                    <div className="linkGridEndPage">
                        <div className="linkGridEnd"><a className="linkAboutKuma" href="#">О нас</a></div>
                        <div className="linkGridEnd"><a className="linkAboutKuma" href="#">Машина</a></div>
                        <div className="linkGridEnd"><a className="linkAboutKuma" href="#">Преимущества</a></div>
                        <div className="linkGridEnd"><a className="linkAboutKuma" href="#">Спец.техника</a></div>
                        <div className="linkGridEnd"><a className="linkAboutKuma" href="#">Доставка</a></div>
                        <div className="linkGridEnd"><a className="linkAboutKuma" href="#">Модели</a></div>
                    </div>
                    <div className="socMediaGridCol"> 
                        <a href="#"><img className="linkSocialMedia" src={whatsapp} /></a>
                        <a href="#"><img className="linkSocialMedia" src={VK} /></a>
                        <a href="#"><img className="linkSocialMedia" src={telegram} /></a>
                        <a href="#"><img className="linkSocialMedia" src={instagram} /></a>
                    </div>
                    <button className="button_call_rec">Заказать звонок</button>
                </div>
            </div>
        </div>
    )
}

export default EndComponent