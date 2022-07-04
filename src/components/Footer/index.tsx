import './style.sass'


export const Footer = () => {

    return (

        <footer>
            <div className="footer--area">
                <div className="footer--item area1">
                    <div className="footer-social">
                        <a href='/#'><img alt='#' src="media/Twitter.png" /></a>
                        <a href="/#"><img alt='#' src="media/linkedin.png" /></a>
                        <a href="/#"><img alt='#' src="media/facebook.png" /></a>
                        <a href="/#"><img alt='#' src="media/googleplus.png" /></a>
                        <a href="/#"><img alt="#" src="media/pinterest.png" /></a>
                    </div>
                </div>
                <div className="footer--item area2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus. Maecenas eros lectus, rhoncus vel dictum vel, dignissim eget ligula. Vestibulum id tempus quam, sed pellentesque quam. Vestibulum porta aliquet risus, ac rhoncus sem aliquet ac. Donec tincidunt cursus elit vitae euismod.
                </div>
                <div className="footer--item area3">
                    <form method="POST">
                        <input type="email" name="email" placeholder="EMAIL TO SUBSCRIBE" />
                        <button className="button">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>




    )
}
