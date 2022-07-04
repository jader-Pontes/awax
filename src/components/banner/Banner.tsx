//style
import './style.sass'



export const Banner = () => {

    return (
        <div>
            <section className="banner">
                <div className="sliders" >
                    <div className="slide">
                        <div className="slidearea">
                            <h1>Design is about<br /><span>Communication</span></h1>
                            <h2>Call Us: +00 0 1234 5678</h2>
                            <a href="/#" className="button">Get in touch!</a>
                        </div>
                    </div><div className="slide">
                        <div className="slidearea">
                            <h1>Design is about<br /><span>Teste</span></h1>
                            <h2>Call Us: +00 0 1234 5678</h2>
                            <a href="/#" className="button">Get in touch!</a>
                        </div>
                    </div><div className="slide">
                        <div className="slidearea">
                            <h1>Design is about<br /><span>Algo</span></h1>
                            <h2>Call Us: +00 0 1234 5678</h2>
                            <a href="/#" className="button">Get in touch!</a>
                        </div>
                    </div>
                </div>
                <div className="sliders-pointers">
                    <div className="pointer active"></div>
                    <div className="pointer"></div>
                    <div className="pointer"></div>
                </div>
            </section>
        </div >
    )
}
