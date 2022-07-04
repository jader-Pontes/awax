import './style.sass'

export const ContactComponent = () => {
    return (
        <section className="default light">
            <div className="section-title">Contact Us</div>
            <div className="section-desc">Our Agency Located in Melbourne, Australia</div>
            <div className="section-body">
                <div className="section-contact">
                    <form method="POST">
                        <div className="section-contact--split">
                            <input type="text" name="name" placeholder="NAME" />
                            <input type="text" name="name" placeholder="EMAIL" />
                        </div>
                        <input type="text" name="name" placeholder="SUBJECT" />
                        <textarea name="message" placeholder="MESSAGE"></textarea>
                        <input type="submit" value="Send Message" className="button" />
                    </form>
                </div>
            </div>
        </section>
    )
}
