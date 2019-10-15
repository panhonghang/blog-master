import './index.less';
import React from 'react';

export interface GlobalFooterProps {
  links?: {
    key?: string;
    title: React.ReactNode;
    href: string;
    blankTarget?: boolean;
  }[];
  copyright?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
declare const _default: ({ className, links, copyright }: GlobalFooterProps) => JSX.Element;
export default _default;
