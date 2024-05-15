import React from "react";
import './section8.css'
import trackSver from '../img/track_icon/Group 4949.png'
import arrow_ap from '../img/vector_icon/up_vector.png'
import cube from '../img/vector_icon/cube.png'
import upArrow from '../img/vector_icon/up_info_graph.png'
import rem from '../img/vector_icon/bold.png'

const TrackChar = () => {
    return (
        <div className="grid_nas_grid">
            <div className="gridTrackSver">
                <div className="text_char_track">Возможности автобетононасоса</div>
                <img className="trackSver" src={trackSver}/>
            </div>
            <div>
                <div className="grid_horizont_info">
                    <div className="grid_info_text_char"><img className="iconUpArrow" src={arrow_ap}/> <div className="text_char_2">Развертка стрелы до 70 метров</div> <div className="pod_text_char_2">Удобно для труднодоступных мест и быстрое перемещение</div> <hr className="line_horizont_rem" /> </div>
                    <div className="grid_info_text_char"><img className="iconUpArrow" src={cube}/> <div className="text_char_2">Развертка стрелы до 70 метров</div> <div className="pod_text_char_2">Удобно для труднодоступных мест и быстрое перемещение</div> <hr className="line_horizont_rem" /> </div>
                    <div className="grid_info_text_char"><img className="iconUpArrow" src={upArrow}/> <div className="text_char_2">Развертка стрелы до 70 метров</div> <div className="pod_text_char_2">Удобно для труднодоступных мест и быстрое перемещение</div> <hr className="line_horizont_rem" /> </div>
                    <div className="grid_info_text_char"><img className="iconUpArrow" src={rem}/> <div className="text_char_2">Развертка стрелы до 70 метров</div> <div className="pod_text_char_2">Удобно для труднодоступных мест и быстрое перемещение</div> <hr className="line_horizont_rem" /> </div>
                </div>
            </div>
        </div>
    )
}

export default TrackChar