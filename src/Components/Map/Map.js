import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div id="col_inner_46d9c8ad628b9795e60e3b893e0f3fd4" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                    <div class="lmpixels-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.916572856253!2d90.378068108224!3d23.75332875114199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ac20cff015%3A0xff2b5ccc3b603741!2sShukrabad%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1619940234398!5m2!1sen!2sbd" width="100%" height="600" style={{ border: '0', padding: '0 1rem' }} allowfullscreen="" loading="lazy" className="map_size"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;