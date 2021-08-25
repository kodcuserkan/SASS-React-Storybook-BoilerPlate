// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta } from '@storybook/react';

import SecondaryBtn from './Secondary';

export default {
  component: SecondaryBtn,
  title: 'components/buttons',
} as Meta;

export const Secondary: React.VFC<{}> = () => <SecondaryBtn name="test" onClickFunc={() => console.log("Test SecondaryBtn")}/>;