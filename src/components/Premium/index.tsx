import './style.sass';

export const Premium = () => {
    return (
        <section className="default light premium">
            <div className="section-title">Premium</div>
            <div className="section-desc">Even More Features Available</div>
            <div className="section-body">
                <div className="section-premium">
                    <div className="sliders" style={{ marginLeft: 0 }}>
                        <div className="slide">
                            <div className="slidearea">
                                <div className="section-premium--left">
                                    <img alt='/#' src="media/livros.png" />
                                </div>
                                <div className="section-premium--right">
                                    <div className="section-premium--item">
                                        <img alt='/#' src="media/check.png" />
                                        <div>
                                            <h4>FIRST FEATURE</h4>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus.<br />
                                            -- FEATURE ONE<br />
                                            -- FEATURE TWO<br />
                                            -- FEATURE THREE
                                        </div>
                                    </div>
                                    <div className="section-premium--item">
                                        <img alt='/#' src="media/check.png" />
                                        <div>
                                            <h4>SECOND FEATURE</h4>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus.
                                        </div>
                                    </div>
                                    <div className="section-premium--item">
                                        <img alt='/#' src="media/check.png" />
                                        <div>
                                            <h4>THIRD FEATURE</h4>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className="slide">
                            <div className="slidearea">
                                ...
                            </div>
                        </div><div className="slide">
                            <div className="slidearea">
                                ...
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
