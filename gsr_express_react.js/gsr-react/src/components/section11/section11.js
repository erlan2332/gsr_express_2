import React from "react";
import './section11.css'
import sertif from '../img/certificates/palfinger_sany_truck_crane_certificate_Advers_Teplostar_russia_cis 1.jpg'

function SerticateTxt() {
    return(
        <div className="gridSerticateTxt">
            <img className="sertif" src={sertif}/>
                <div>
                    <div className="gridSerticateTxtGrid">Сертификат о прохождении курса Eberspacher</div>
                    <div className="gridSerticateTxtGridPod">Специалисты по сервису прошли курс обучения по монтажу, диагностике и ремонту систем отопления Eberspacher</div>
            </div>
    </div>
    )
}

const Sertifit = () => {
    return (
        <div className="SerticateTxt_gridColumn">
            <div className="SerticateTxt_grid">Сертификаты</div>
            <SerticateTxt />
            <SerticateTxt />
        </div>
    )
}

export default Sertifit