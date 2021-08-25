// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta } from '@storybook/react';

import PrimaryBtn from './Primary';

export default {
  component: PrimaryBtn,
  title: 'Components/PrimaryBtn',
} as Meta;

export const Primary: React.VFC<{}> = () => <PrimaryBtn name="test" onClickFunc={() => console.log("TEst click")}/>;