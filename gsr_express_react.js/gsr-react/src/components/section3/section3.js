import React from "react";
import './section3.css'
import key from '../img/patterns/key-dynamic-color.png'
import target from '../img/patterns/target-dynamic-color.png'
import boy from '../img/patterns/boy-dynamic-color.png'
import folder from '../img/patterns/folder-dynamic-color.png'
import flag from '../img/patterns/flag-dynamic-color.png'

const Rect_card = () => {
    return(
        <div>
            <div className="rect_text">Процесс работы</div>
            <div className="grid_rect_card">
                <div className="rect1 tre"><div className="key_text kuma">Мы работаем под ключ</div> <div className="pod_text_card kuma_ert">Мы берем на себя всю работу от начала до конца. Вам не нужно беспокоиться о деталях - мы заботимся обо всем. <div className="rec_num1 recNum">01</div> </div> 
                    <img className="key ert_tre" src={key} />  </div>
                <div className="rect2 tre"><div className="key_text_2 kuma">Подбор модели по потребностям (б/у)</div> <div className="pod_text_card kuma_ert">Каждый клиент уникален, поэтому предлагаем широкий выбор моделей спецтехники, как новой, так и б/у, учитывая потребности и бюджет.<div className="rec_num2 recNum">02</div> </div> 
                    <img className="key tre2 ert_tre" src={target} /></div>
                <div className="rect3 tre"><div className="key_text_3 kuma">Работаем с физическими и с юридическими лицами</div> <div className="pod_text_card_2 kuma_ert">Мы предлагаем гибкие условия для всех - от частных предпринимателей до крупных компаний.<div className="rec_num3 recNum">03</div> </div> 
                    <img className="key_boy ert_tre" src={boy} /></div>
                <div className="rect4 tre"><div className="key_text_4 kuma">Сервисное и гарантийное обслуживание</div> <div className="pod_text_card kuma_ert">Мы предоставляем не только технику, но и полный сервис и гарантию на нее.<div className="rec_num4 recNum">04</div> </div> 
                    <img className="key ert_tre" src={folder} /></div>
                <div className="rect5 tre"><div className="key_text_5 kuma">Постпродажная помощь в эксплуатации</div> <div className="pod_text_card kuma_ert">Наша забота не заканчивается с момента продажи. Мы всегда готовы помочь вам с использованием и обслуживанием техники.<div className="rec_num5 recNum">05</div> </div> 
                    <img className="key_flags ert_tre" src={flag} /></div>
            </div>
        </div>
    )
}

export default Rect_card