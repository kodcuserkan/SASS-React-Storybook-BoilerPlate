import React from 'react'

import { Meta } from '@storybook/react';

import Footer from './Footer';

export default {
  component: Footer,
  title: 'components/Footer/Footer',
} as Meta;

export const FooterComponent: React.VFC<{}> = () => <Footer/>;