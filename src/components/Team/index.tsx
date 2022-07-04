import './style.sass'

export const TeamComponent = () => {
    return (
        <section className="default dark bg-team">
            <div className="section-team-area">
                <div className="section-title">Our Team</div>
                <div className="section-desc">Our Co-Workers</div>
                <div className="section-body">
                    <div className="section-team">
                        <div className="sliders">
                            <div className="slide">
                                <div className="slidearea">
                                    <img className="section-team--avatar" alt='mulher' src="media/mulher1.png" />
                                    <div className="section-team--name">Jane Doe</div>
                                    <div className="section-team--role">Master mind</div>
                                    <div className="section-team--social">
                                        <a href="/#"><img alt='#' src="media/facebook.png" /></a>
                                        <a href="/#"><img alt='#' src="media/googleplus.png" /></a>
                                        <a href="/#"><img alt='#' src="media/linkedin.png" /></a>
                                        <a href="/#"><img alt='#' src="media/pinterest.png" /></a>
                                        <a href="/#"><img alt='#' src="media/twitter.png" /></a>
                                    </div>
                                </div>
                            </div><div className="slide">
                                <div className="slidearea">
                                    <img alt='#' className="section-team--avatar" src="media/homem1.png" />
                                    <div className="section-team--name">Mike Chiller</div>
                                    <div className="section-team--role">Creative Head</div>
                                    <div className="section-team--social">
                                        <a href="/#"><img alt='#' src="media/facebook.png" /></a>
                                        <a href="/#"><img alt='#' src="media/googleplus.png" /></a>
                                        <a href="/#"><img alt='#' src="media/linkedin.png" /></a>
                                        <a href="/#"><img alt='#' src="media/pinterest.png" /></a>
                                        <a href="/#"><img alt='#' src="media/twitter.png" /></a>
                                    </div>
                                </div>
                            </div><div className="slide">
                                <div className="slidearea">
                                    <img className="section-team--avatar" alt='mulher' src="media/mulher2.png" />
                                    <div className="section-team--name">Anna Jhons</div>
                                    <div className="section-team--role">Technical Lead</div>
                                    <div className="section-team--social">
                                        <a href="/#"><img alt='#' src="media/facebook.png" /></a>
                                        <a href="/#"><img alt='#' src="media/googleplus.png" /></a>
                                        <a href="/#"><img alt='#' src="media/linkedin.png" /></a>
                                        <a href="/#"><img alt='#' src="media/pinterest.png" /></a>
                                        <a href="/#"><img alt='#' src="media/twitter.png" /></a>
                                    </div>
                                </div>
                            </div><div className="slide">
                                <div className="slidearea">
                                    <img className="section-team--avatar" alt='#' src="../../../public/img/complementos/mulher1.png" />
                                    <div className="section-team--name">Jane Doe</div>
                                    <div className="section-team--role">Master mind</div>
                                    <div className="section-team--social">
                                        <a href="/#"><img alt='#' src="media/facebook.png" /></a>
                                        <a href="/#"><img alt='#' src="media/googleplus.png" /></a>
                                        <a href="/#"><img alt='#' src="media/linkedin.png" /></a>
                                        <a href="/#"><img alt="#" src="media/pinterest.png" /></a>
                                        <a href="/#"><img alt='#' src="media/twitter.png" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sliders-pointers">
                        <div className="pointer active"></div>
                        <div className="pointer"></div>
                        <div className="pointer"></div>
                    </div>
                </div>
            </div>
        </section >
    )
}
