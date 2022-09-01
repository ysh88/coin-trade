import React from 'react';

const FlexBoxComponent = () => (
  <div>
    <h4>flexDirection: 'row'</h4>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
    </div>
    <h4>flexDirection: 'column'</h4>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
    </div>
  </div>
);

export default {
  title: 'Common-ui/Flex',
  component: FlexBoxComponent,
};

const Template = args => <FlexBoxComponent {...args} />;
export const Basic = Template.bind({});
Basic.storyName = 'flex direction 예제';
