import { Icon, Layout } from 'antd';
import React, { Fragment } from 'react';

import GlobalFooter from './GlobalFooter';

const { Footer } = Layout;

const defaultLinks = [
  {
    key: '黎曦 blog',
    title: '黎曦 blog',
    href: 'https://pro.ant.design',
    blankTarget: true,
  },
  {
    key: 'github',
    title: <Icon type="github" />,
    href: 'https://github.com/panhonghang',
    blankTarget: true,
  },
  {
    key: 'Ant Design',
    title: 'Ant Design',
    href: 'https://ant.design',
    blankTarget: true,
  },
];

const defaultCopyright = '2019 黎曦出品';

export interface FooterProps {
  links?: {
    key?: string;
    title: React.ReactNode;
    href: string;
    blankTarget?: boolean;
  }[];
  copyright?: string;
}

const FooterView: React.FC<FooterProps> = ({ links, copyright }: FooterProps) => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={links || defaultLinks}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> {copyright || defaultCopyright}
        </Fragment>
      }
    />
  </Footer>
);

export default FooterView;
