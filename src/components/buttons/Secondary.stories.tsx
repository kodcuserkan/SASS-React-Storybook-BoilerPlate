// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta } from '@storybook/react';

import SecondaryBtn from './Secondary';

export default {
  component: SecondaryBtn,
  title: 'Components/SecondaryBtn',
} as Meta;

export const Primary: React.VFC<{}> = () => <SecondaryBtn name="test" onClickFunc={() => console.log("TEst click")}/>;