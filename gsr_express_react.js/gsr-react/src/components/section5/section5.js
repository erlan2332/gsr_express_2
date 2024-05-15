import React from "react";
import './section.css'
import arrow from '../img/icon/3D Стрела.png'
import asiaBg from '../img/photo/russia_map.png'
import copy from '../img/patterns/copy-dynamic-color.png'
import card from '../img/patterns/Group 4955.png'
import calendar from '../img/patterns/calender-dynamic-color.png'
import ihlas from '../img/logo/ihlas_logo.png'
import avangard from '../img/logo/Avangardlogo 1.png'

const BlackBg = () => {
    return(
        <div>
            <div className="blackBg">
                <div>
                    <div className="grid_black_bg">
                        <div className="text_blackBg">Мы охватываем СНГ и ближний запад</div>
                        <img className="arrow_icon" src={arrow} />
                    </div>
                    <img className="asiaBg" src={asiaBg} />
                </div>
                <div className="blackBg_rect">
                <div className="rec_black_bg">
                    <div className="rec_black_bg">
                        <div className="text_heaeder_blackBg">Логистика и растаможка в Киргизии или по  предпочтениям.</div>
                        <div className="text_blackBg_pod">Мы обеспечиваем оперативную логистику и растаможку в Киргизию.</div>
                        <img className="copy_dinamic icontre" src={copy} />
                    </div>
                    </div>
                    <div className="rec_black_bg">
                    <div className="rec_black_bg">
                        <div className="text_heaeder_blackBg">Мы работаем с Ближним Востоком,Африкой и Турцией.</div>
                        <div className="text_blackBg_pod">Мы уже работаем с клиентами из ближнего Востока, Африки, и Турции, что подтверждает нашу готовность сотрудничать.</div>
                        <img className="card_dinamic icontre" src={card} />
                    </div>
                    </div>
                    <div className="rec_black_bg">
                    <div className="rec_black_bg">
                        <div className="text_heaeder_blackBg">Логистика из Киргизиив любую точку СНГ</div>
                        <div className="text_blackBg_pod">Мы обеспечиваем доставку вашего заказа в любую точку СНГ.</div>
                    </div>
                    </div>
                    <div className="rec_black_bg">
                    <div className="rec_black_bg">
                        <div className="text_heaeder_blackBg">Логистика в среднем от 2 недель*</div>
                        <div className="text_blackBg_pod">Мы доставим ваш заказ в любую точку СНГ. Вам не придется ждать долго!</div>
                        <img className="calendar_dinamic icontre" src={calendar} />
                    </div>
                    </div>
                </div>
                <div className="grid_text_partners">
                    <div className="partners_blackBg">Нам доверяют крупные компании в СНГ</div>
                    <img className="patnners" src={ihlas} />
                    <img className="patnners" src={avangard} />
                </div>
            </div>
        </div>
    )
}


export default BlackBg