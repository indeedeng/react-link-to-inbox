import React from 'react';
import {shallow} from 'enzyme';
import LinkToInbox from '.';

it('renders with only an email', () => {
  const rendered = shallow(
    <LinkToInbox email={'douglas.b.wade@gmail.com'}/>
  );
  expect(rendered.type()).toBe('a');
  expect(rendered.text()).toBe('Open in Gmail');
});
