import React from "react";
import './section9.css'
import zoomlion from '../img/logo/zoomlion.png'
import sany from '../img/logo/sany.png'
import xcmg from '../img/logo/XCMG_logo 1.png'
import putz from '../img/logo/putzmeyster.png'
import junjin from '../img/logo/junjin.png'

const RectPartners = () => {
    return(
        <div>
            <div className="rect_partners">
                <div className="partnersText">Мы сотрудничаем с китайскими и корейскими производителями.</div>
                <div className="logoPartnersGrid">
                    <img className="logoPartnersInfo" src={zoomlion}/>
                    <img className="logoPartnersInfo" src={sany}/>
                    <img className="logoPartnersInfo" src={xcmg}/>
                    <img className="logoPartnersInfo" src={putz}/>
                    <img className="logoPartnersInfo" src={junjin}/>
                </div>
            </div>
        </div>
    )
}

export default RectPartners