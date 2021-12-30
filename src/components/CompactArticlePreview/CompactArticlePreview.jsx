import React from 'react';
import * as styles from './CompactArticlePreview.module.css';
import { iconMap } from '../utils';

const CompactArticlePreview = ({category, title}) => {

    return(
        <div className={styles.container}>
            <img src={iconMap[category.toLowerCase()]}/>
            <h2>{title}</h2>
        </div>
    );
}

export default CompactArticlePreview;