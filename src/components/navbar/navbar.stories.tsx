import React from 'react'

import { Meta } from '@storybook/react';

import Navbar from './navbar';

export default {
  component: Navbar,
  title: 'components/navbar/navbar',
} as Meta;

export const NavbarComponent: React.VFC<{}> = () => <Navbar/>;