import React from "react";
import './section12.css'
import russiaMap from '../img/photo/Blank_map_of_Russia-gray 1.png'
import trackSbock from '../img/track_icon/MEA_AP_Concrete_M63_01_1000x500 2.png'
import calendar32 from '../img/vector_icon/data_icon.png'
import maxWith from '../img/vector_icon/with_icon.png'
import track8x4 from '../img/vector_icon/8x4_icon.png'

const CardRussiaTrack = () => {
    return(
        <div>
            <div className="rectangle12Card">
                <div className="rectangle1Card">
                    <div className="rectangle1CardText">Обеспечим доставку по всей России*</div>
                    <img className="russiaMap" src={russiaMap} />
                </div>
                <div className="rectangle2Card">
                    <div className="gridDataCal">
                        <div className="logisticText">Процесс доставки</div>
                        <div className="gridVectorText"><img className="gridIconVector" src={calendar32} />Доставка 12-40 дней</div>
                        <div className="gridVectorText"><img className="gridIconVector" src={maxWith} />Оформление документов</div>
                        <div className="gridVectorText"><img className="gridIconVector" src={track8x4} />Особое внимание каждому клиенту</div>
                    </div>
                    <img className="trackSbock" src={trackSbock}/>
                </div>
            </div>
        </div>
    )
}

export default CardRussiaTrack