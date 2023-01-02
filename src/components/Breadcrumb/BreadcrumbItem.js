import React from 'react';

const BreadcrumbItem = ({
  className,
  style,
  children,
  separator = '/',
  href,
  ...restProps
}) => {

  const prefixCls = 'breadcrumb'
  let link;
  if (href) {
    link = (
      <a className={`${prefixCls}-link`} {...restProps}>
        {children}
      </a>
    );
  } else {
    link = (
      <span className={`${prefixCls}-link`} {...restProps}>
        {children}
      </span>
    );
  }
  if (children) {
    return (
      <li>
        {link}
        {separator && <span className={`${prefixCls}-separator`}>{separator}</span>}
      </li>
    );
  }
  return null;
};

BreadcrumbItem.__MY_BREADCRUMB_ITEM = true;

export default BreadcrumbItem;