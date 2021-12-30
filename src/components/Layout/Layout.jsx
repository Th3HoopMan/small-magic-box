import React from 'react';
import * as styles from './Layout.module.css';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;