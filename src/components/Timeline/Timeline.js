import React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import './index.css';

const Timeline = ({ className, children, mode = 'left', prefixCls = 'timeline' }) => {
  const getPositionCls = (ele, idx) => {
    if (mode === 'alternate') {
      return idx % 2 === 0 ? `${prefixCls}-item-left` : `${prefixCls}-item-right`;
    }
    if (mode === 'left') return `${prefixCls}-item-left`;
    if (mode === 'right') return `${prefixCls}-item-right`;
    return '';
  };

    const items = React.Children.map(children, (ele, idx) => {
        return React.cloneElement(ele, {
          className: classNames([
            ele.props.className,
            getPositionCls(ele, idx),
          ]),
        });
      });

      const classString = classNames(
        prefixCls,
        {
          [`${prefixCls}-${mode}`]: !!mode,
        },
        className,
      );
    return (
        <div className={classString}>
            {items}
        </div>
    );
};

Timeline.Item = TimelineItem;
export default Timeline;