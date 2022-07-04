import './style.sass'

export const Testimonial = () => {
    return (
        <section className="default light testimonials">
            <div className="section-title">Happy Clients</div>
            <div className="section-desc">Client Reviews</div>
            <div className="section-body">
                <div className="section-testimonials">
                    <div className="sliders" style={{ marginLeft: 0 }}>
                        <div className="slide">
                            <div className="slidearea">
                                <img className="section-testimonials--avatar" alt='#' src="media/homem2.png" />
                                <div className="section-testimonials--name">John Doe</div>
                                <div className="section-testimonials--role">Head of PR Department</div>
                                <img className="section-testimonials--quoteimg" alt='#' src="media/quote.png" />
                                <div className="section-testimonials--quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus. Maecenas eros lectus, rhoncus vel dictum vel, dignissim eget ligula. Vestibulum id tempus quam, sed pellentesque quam.</div>
                            </div>
                        </div><div className="slide">
                            <div className="slidearea">
                                <img className="section-testimonials--avatar" alt='#' src="media/homem2.png" />
                                <div className="section-testimonials--name">John Doe</div>
                                <div className="section-testimonials--role">Head of PR Department</div>
                                <img className="section-testimonials--quoteimg" alt='#' src="media/quote.png" />
                                <div className="section-testimonials--quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus. Maecenas eros lectus, rhoncus vel dictum vel, dignissim eget ligula. Vestibulum id tempus quam, sed pellentesque quam.</div>
                            </div>
                        </div><div className="slide">
                            <div className="slidearea">
                                <img className="section-testimonials--avatar" alt='#' src="media/homem2.png" />
                                <div className="section-testimonials--name">John Doe</div>
                                <div className="section-testimonials--role">Head of PR Department</div>
                                <img className="section-testimonials--quoteimg" alt='#' src="media/quote.png" />
                                <div className="section-testimonials--quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus. Maecenas eros lectus, rhoncus vel dictum vel, dignissim eget ligula. Vestibulum id tempus quam, sed pellentesque quam.</div>
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
        </section>

    )
}
