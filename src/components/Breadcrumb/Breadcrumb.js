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
  
        // this is not recomennded better go with context or render prop
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

/**
 * Newer implementation
 * 
 function Breadcrumb({ seperator, className, lists=[], renderItem }) {
  const prefixClass = "appbreadcrumb";
  const classes = [prefixClass, className].filter(Boolean).join(" ");
  const lastSpan = lists.length
  return (
    <div className={classes}>
      {lists.map((list) => {
        const lastSpan = !lists.length || lists.length === list.id;
        return (
          <SeperatorContext.Provider key={list.id} value={{ seperator, prefixClass, lastSpan }}>
            {renderItem(list)}
          </SeperatorContext.Provider>
        );
      })}
    </div>
  );
}

function BreadcrumbItem({ title }) {
  const { seperator, prefixClass, lastSpan } = useContext(SeperatorContext);
  return (
    <div className={`${prefixClass}-item`}>
      {title} {!lastSpan && <span>{seperator}</span>}
    </div>
  );
}

 */