import React from 'react';
import classNames from 'classnames';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import './Button.css'

const availableSizes = { large: 'lg', small: 'sm' };

const Button = (props) => {
    const {
        type,
        size,
        children,
        className,
        icon,
        loading,
        block,
        disabled
    } = props;

    function getLoadingIcon() {
        if (loading) {
            return <span className={`${prefixClass}-loading-icon`}>
                <LoadingOutlined />
            </span>
        }
        return icon;
    }
    const prefixClass = 'btn';
    const buttonSize = availableSizes[size];
    const iconNode = getLoadingIcon();

    const classes = classNames(
        prefixClass,
        {
            [`${prefixClass}-${type}`]: type,
            [`${prefixClass}-${buttonSize}`]: buttonSize,
            [`${prefixClass}-block`]: block,
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    );
    return (
        <button
            className={classes}
            role='button'>
            {iconNode}
            <span>{children}</span>
        </button>
    );
};

export default Button;