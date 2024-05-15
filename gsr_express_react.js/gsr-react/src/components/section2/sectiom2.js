import React from "react";
import arrow from '../img/icon/3D Стрела.png'
import china from '../img/flags/china.png'
import kyrgyz from '../img/flags/Kyrgyzstan.png'
import korea from '../img/flags/North_Korea.png'
import turkey from '../img/flags/turkey.png'
import './section2.css'



const Text_arrow = () => {
    return (
        <div>
            <div className="flag_arrow">
                <div className="grid_arrow">
                    <img className="arrow" src={arrow} />
                    <div className="arrow_text">GSR Group — группа компаний, <br /> предоставляющая услуги в сфере <br /> логистики, консалтинга и брокерских <br /> услуг для международной торговли, а <br /> также услуги по легализации в <br /> разных странах.</div>
                </div>
                <div>
                    <img className="flags" src={china} />
                    <img className="flags" src={kyrgyz} />
                    <img className="flags" src={korea} />
                    <img className="flags" src={turkey} />
                    <div className="text_flags">У нас имеются юридические лица в Китае, Южной Корее, Турции на которые мы можем выкупать и обходить некоторые ограничения из-за которых цена техники увеличивается.</div>
                </div>
            </div>
            <hr className="line_1" />
        </div>
    )
}


export default Text_arrow