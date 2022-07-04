import React from 'react';

//style
import './style.sass';



export const SectionLight = () => {


    return (

        <section className="default light">
            <div className="section-title">About us</div>
            <div className="section-desc">Who we are?</div>
            <div className="section-body">
                <div className="section-aboutus">
                    <div className="section-aboutus--left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus. Maecenas eros lectus, rhoncus vel dictum vel, dignissim eget ligula. Vestibulum id tempus quam, sed pellentesque quam. Vestibulum porta aliquet risus, ac rhoncus sem aliquet ac. Donec tincidunt cursus elit vitae euismod. Morbi ex felis, tincidunt sed hendrerit finibus, malesuada eu urna. Sed rutrum sodales mi a varius.</p>
                        <br />
                        <a href="/#" className="button">Learn More</a>
                    </div>
                    <div className="section-aboutus--right">
                        <img alt='#' src='foto9.jpg' />
                    </div>
                </div>
            </div>
        </section>

    )
}
