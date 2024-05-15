import React from "react";
import './section4.css'
import arrow from '../img/icon/3D Стрела.png'
import track from '../img/track_icon/track.png'

const CharArr = () => {
    return(
        <div className="grid_track_bg">
            <div>
                <hr className="line_Char" />
                <div className="speed_grid">
                    <img className="arrow_2" src={arrow} />
                    <div className="speed_text"> Быстро. Надежно. Эффективно.</div>
                    <div className="gsr_text_group">GSR Group — эксперты по поставкам нового и б/у бетонного оборудования и кранов, включая насосы Sany, XCMG, Zoomlion.Перед продажей оборудование проходит тщательную проверку инженерами, обеспечивая его безупречную работу.</div>
                </div>
                <div>
                    <hr className="line_percent" />
                    <div className="what_per">Почему у нас дешевле?</div>
                    <div className="percent">
                        <div className="persent_char">10-15% <div className="per_text treert">Мы поставляем автобетононасосы ниже рынка</div></div>
                        <div className="persent_char">20+ <div className="per_text treert">Доставленной техники и довольных клиентов</div></div>
                        <div className="persent_char">60+ <div className="per_text treert">Более 60 штук новых автобетононасосов и б/у</div></div>
                        <div className="grid_per_char">
                            <div className="per_text ertert">Мы поставляем автобетононасосы ниже рынка</div>
                            <div className="per_text ertert">Доставленной техники и довольных клиентов</div>
                            <div className="per_text ertert">Более 60 штук новых автобетононасосов и б/у</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="track_ob" src={track} />
            </div>
        </div>
    )
}

export default CharArr