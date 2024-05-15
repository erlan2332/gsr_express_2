import React from "react";
import './section13.css'
import OsoKAma from '../img/certificates/TS_KAMA-2 1.jpg'

const ThankList = () => {
    return (
        <div>
            <div className="thankstreert">
                <div className="ThankText">Благодарности</div>
                <div className="ThankListOsoKAma">
                    <div className="textKama"><img className="OsoKAma" src={OsoKAma} />ОсОО ‘’Трансстрой-Кама’’</div>
                    <div className="textKama"><img className="OsoKAma" src={OsoKAma} />ОсОО ‘’Трансстрой-Кама’’</div>
                    <div className="textKama"><img className="OsoKAma" src={OsoKAma} />ОсОО ‘’Трансстрой-Кама’’</div>
                    <div className="textKama"><img className="OsoKAma" src={OsoKAma} />ОсОО ‘’Трансстрой-Кама’’</div>
                </div>
            </div>
        </div>
    )
}

export default ThankList