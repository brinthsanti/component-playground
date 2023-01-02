import classNames from 'classnames';
import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './index.css';

const Breadcrumb = (
    {
        className,
        style,
        children,
        separator = '/',
    }
) => {
    const prefixClass = 'breadcrumb';
    const classNameString = classNames([
        prefixClass,
        className
    ])
    const crumbs = children && children.map((element, index) => {
        if (!element) {
          return element;
        }
  
        console.warn(
          element.type &&
            (element.type.__MY_BREADCRUMB_ITEM === true ||
              element.type.__ANT_BREADCRUMB_SEPARATOR === true),
          'Breadcrumb',
          "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
        );
  
        return React.cloneElement(element, {
          separator,
          key: index,
        });
      });

    return (
        <nav
        className={classNameString}
        style={style}
        >
           <ol>{crumbs}</ol> 
        </nav>
    );
};

Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;