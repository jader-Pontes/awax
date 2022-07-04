import './style.sass'

export const Share = () => {

    return (
        <section className="section-share">
            <div className="section-share--legend">
                <img alt='compartilhar' src='media/share.png' />
                Tell About Us:
            </div>
            <div className="section-share--item">
                <div className="section-share--icon twitter">
                    <img src="media/twitter.png" />
                </div>
                152
            </div>
            <div className="section-share--item">
                <div className="section-share--icon linkedin">
                    <img src="media/linkedin.png" />
                </div>
                152
            </div>
            <div className="section-share--item">
                <div className="section-share--icon facebook">
                    <img src="media/facebook.png" />
                </div>
                152
            </div>
            <div className="section-share--item">
                <div className="section-share--icon googleplus">
                    <img src="media/googleplus.png" />
                </div>
                152
            </div>
            <div className="section-share--item">
                <div className="section-share--icon pinterest">
                    <img src="media/pinterest.png" />
                </div>
                152
            </div>
        </section>
    )
}
