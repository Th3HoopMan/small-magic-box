import React from 'react';
import * as styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <ul>
                    <li>
                        Articles
                    </li>
                    <li>
                        Reviews
                    </li>
                    <li>
                        About Me
                    </li>
                </ul>
            </div>
            <div className={styles.branding}>
                <h1>Small Magic Box</h1>
                <div className={styles.socialIcons}>
                    <img src={"https://www.seekpng.com/png/detail/1-19750_instagram-white-logo-instagram-logo-png-white-outline.png"}/>
                    <img src={"https://www.seekpng.com/png/detail/1-19750_instagram-white-logo-instagram-logo-png-white-outline.png" }/>
                    <img src={"https://www.seekpng.com/png/detail/1-19750_instagram-white-logo-instagram-logo-png-white-outline.png"}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;