import React from "react";
import './section10.css'
import cardBg from '../img/photo/Rectangle 8.jpg'
import iconBgData from '../img/vector_icon/data_icon.png'
import iconBgWith from '../img/vector_icon/with_icon.png'
import iconBgShass from '../img/vector_icon/8x4_icon.png'
import iconBgenginne from '../img/vector_icon/engine_time_icon.png'

function CardItemPrice() {
    return (
        <div>
                <div className="charGridTextZoom">
                    <img className="cardBgPrice" src={cardBg}/>
                    <div className="ZoomlionText">Zoomlion 24X 4Z</div>
                    <div className="NDSrub">12 000 000 руб с НДС</div>
                    <div className="iconDataText"><img className="iconBgData" src={iconBgData} />Год выпуска: 2024</div>
                    <div className="iconDataText"><img className="iconBgData" src={iconBgWith} />Макс. высота подачи 23,7 м</div>
                    <div className="iconDataText"><img className="iconBgData" src={iconBgShass} />Шасси 8Х4(Scania)</div>
                    <div className="iconDataText"><img className="iconBgData" src={iconBgenginne} />Пробег: 1000 моточасов</div>
                    <button className="buttonPodr">Узнать подробнее</button>
                </div>
        </div>
    )
}

const PriceCard = () => {
    return(
        <div>
            <div className="text_model">Модельный ряд</div>
            <div className="buttonGrid">
                <button className="button_grid_bg">Новые по предзаказу</button>
                <div className="nal_city">В наличии в Бишкеке</div>
                <div className="nal_city">В наличии в Китае</div>
            </div>
            <div className="gridCardItemCharPrice">
            <CardItemPrice />
            <CardItemPrice />
            <CardItemPrice />
            <CardItemPrice />
            </div>
        </div>
    )
}

export default PriceCard