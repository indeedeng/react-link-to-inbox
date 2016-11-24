import React from 'react';
import {shallow} from 'enzyme';
import LinkToInbox from '.';

it('renders with only an email', () => {
  const rendered = shallow(
    <LinkToInbox email={'douglas.b.wade@gmail.com'}/>
  );
  expect(rendered.text()).to.equal('open in gmail');
});
