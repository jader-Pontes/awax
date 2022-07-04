//style
import './style.sass'



export const SectionDark = () => {


    return (
        <section className="default dark">
            <div className="section-title">Services</div>
            <div className="section-desc">Services that we provide</div>
            <div className="section-body">
                <div className="section-services">
                    <div className="section-service">
                        <img alt='#' src="media/medalha.png" />
                        <h4>High Quality Design</h4>
                        <p>Donec tincidunt cursus</p>
                    </div>
                    <div className="section-service">
                        <img alt="#" src="media/estrela.png" />
                        <h4>Modern Design</h4>
                        <p>Morbi ex felis, tincidunt sed hendrerit</p>
                    </div>
                    <div className="section-service">
                        <img alt='#' src="media/relogio.png" />
                        <h4>Regular Updates</h4>
                        <p>Donec tincidunt cursus</p>
                    </div>
                    <div className="section-service">
                        <img alt="#" src="media/balao.png" />
                        <h4>Fast and free support</h4>
                        <p>Morbi ex felis, tincidunt sed</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
