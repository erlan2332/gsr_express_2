import React from "react";
import './section7.css'
import monic from '../img/vector_icon/monic.png'
import kube from '../img/vector_icon/cube.png'
import arrow from '../img/vector_icon/arrow_bottom.png'
import list from '../img/vector_icon/list_layout.png'

const BgScreen = () => {
    return(
        <div>
            <div>
                <div className="ScreenBg">
                    <div className="text_bgScreen">Преимущество автобетононасосов</div>
                    <div className="greed_horisont_bg">
                        <div className="rectangle_bg">
                            <div className="greed_bg_screen">
                                <img className="monic iconmonicicon" src={monic} />
                                <div className="text_char_bg_screen">Быстро завершается проект</div>
                                <div className="text_char_bg_screen_pod">После завершения проекта можно быстро переместить на другую площадку</div>
                        </div>
                        </div>
                        <div className="greed_bg_screen">
                            <img className="kube iconmonicicon" src={kube} />
                            <div className="text_char_bg_screen">Работа в суровых условиях</div>
                            <div className="text_char_bg_screen_pod">Автобетононасос способен работать в любой среде и в любое время</div>
                        </div>
                        <div className="greed_bg_screen">
                            <img className="monic iconmonicicon" src={arrow} />
                            <div className="text_char_bg_screen">Низкий уровень отказов</div>
                            <div className="text_char_bg_screen_pod">И длительный срок службы</div>
                        </div>
                        <div className="greed_bg_screen">
                            <img className="monic iconmonicicon" src={list} />
                            <div className="text_char_bg_screen">Простое и удобное обслуживание</div>
                            <div className="text_char_bg_screen_pod">Низкая стоимость обслуживания</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgScreen