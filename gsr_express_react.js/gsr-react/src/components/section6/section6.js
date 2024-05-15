import React from "react";
import './section6.css'
import track_icon from '../img/track_icon/MEA_AP_Concrete_M63_01_1000x500 1.png'


const BtnRec = () => {
    return(
        <div>
            <div className="rectangle_button">
                <div className="grid_btn_info">
                    <img className="track_icon_bok" src={track_icon} />
                    <div className="btn_rec_info" >Оставьте заявку и получите бесплатную консультацию</div>
                    <div className="btn_grid">
                        <div className="btnr ert red1"><a className="link_text_btn" href="#">Запросить цены на б/у автобетононасосы</a></div>
                        <div className="btnr ert red2"><a className="link_text_btn_2" href="#">Запросить цены на новые автобетононасосы</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtnRec