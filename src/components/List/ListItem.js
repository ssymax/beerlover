import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({image, image_url, name, link, description, }) => {

    const ImageTag = image_url ? 'img' : 'div';

    return (
        <li className={styles.wrapper}>
                {image_url && <ImageTag
                src={image_url}
                className={image_url ? styles.image : styles.imageNone}
                alt={name}
                />}
                <div className={styles.onlyText}>
                    <Title>{name}</Title>
                    <p className={styles.description}>{description}</p>
                    {link && <Button href={link}>more info</Button>}
                </div>
            </li>
    )
    
 };

ListItem.propTypes = {
    link: PropTypes.string,
    image_url: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

ListItem.defaultProps = {
    image_url: null,
    link: null,
    
};

export default ListItem;