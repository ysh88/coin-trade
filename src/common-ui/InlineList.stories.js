import React from 'react';
import InlineList from './InlineList';
import { css } from './withStyles';

export default {
  title: 'Common-UI/InlineList',
  component: InlineList,
};

const Template = args => (
  <InlineList {...args}>
    <RedBox>1</RedBox>
    <RedBox>2</RedBox>
    <RedBox>3</RedBox>
  </InlineList>
);

function RedBox({ children }) {
  return (
    <div
      {...css({
        backgroundColor: 'red',
        padding: 30,
        height: Math.random() * 100,
      })}
    >
      {children}
    </div>
  );
}

export const Story = Template.bind({});
Story.storyName = '기본 설정';
export const Story2 = Template.bind({});
Story2.storyName = 'align=center';
Story2.args = {
  align: 'center',
};
export const Story3 = Template.bind({});
Story3.storyName = 'align=right';
Story3.args = {
  align: 'right',
};
export const Story4 = Template.bind({});
Story4.storyName = 'verticalAlign=top';
Story4.args = {
  verticalAlign: 'top',
};
export const Story5 = Template.bind({});
Story5.storyName = 'verticalAlign=bottom';
Story5.args = {
  verticalAlign: 'bottom',
};
