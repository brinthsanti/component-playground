import classNames from 'classnames';
import React, { useContext } from 'react';
import CheckOutlined from '@ant-design/icons/CheckOutlined'
import { SelectContext } from './Select';

const Option = ({ children, value }) => {
    const { selectedLabels } = useContext(SelectContext);
    const isActive = selectedLabels.includes(value);
    const prefixCls = 'select-option';
    const classes = classNames(
        prefixCls,
        {
        [`${prefixCls}-isActive`]:isActive,
        }
    )
    return (
        <div className={classes}>
            <div>
            {children}
            </div>
            {isActive && <div><CheckOutlined/></div>}
        </div>
    );
};

export default Option;