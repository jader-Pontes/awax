
//style
import './style.sass';

export const FactsComponent = () => {

    return (
        <section className="default dark">
            <div className="section-title">Some Facts</div>
            <div className="section-desc">About our work</div>
            <div className="section-body">
                <div className="section-facts">
                    <div className="section-fact">
                        <h3>1000</h3>
                        <div className="section-fact-line"></div>
                        <h4>Design Projects Released</h4>
                        <p>Donec tincidunt cursus</p>
                    </div>
                    <div className="section-fact">
                        <h3>900</h3>
                        <div className="section-fact-line"></div>
                        <h4>Photos</h4>
                        <p>Morbi ex felis, tincidunt sed hendrerit</p>
                    </div>
                    <div className="section-fact">
                        <h3>500</h3>
                        <div className="section-fact-line"></div>
                        <h4>Marketing Ideas</h4>
                        <p>Donec tincidunt cursus</p>
                    </div>
                    <div className="section-fact">
                        <h3>100</h3>
                        <div className="section-fact-line"></div>
                        <h4>Exhibitions</h4>
                        <p>Morbi ex felis, tincidunt sed</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
