import React from 'react';
import jest from 'jest';
import {shallow} from 'enzyme';
import LinkToInbox from '.';

it('renders with a gmail email', () => {
  const rendered = shallow(
    <LinkToInbox email={'example@gmail.com'}/>
  );
  expect(rendered.type()).toBe('a');
  expect(rendered.text()).toBe('Open in Gmail');
});

it('renders with a hotmail email', () => {
  const rendered = shallow(
    <LinkToInbox email={'example@hotmail.com'}/>
  );
  expect(rendered.type()).toBe('a');
  expect(rendered.text()).toBe('Open in Outlook');
});

it('renders with an unrecognized domain', () => {
  const rendered = shallow(
    <LinkToInbox email={'example@example.com'}/>
  );
  expect(rendered.type()).toBe('a');
  expect(rendered.text()).toBe('Open in example.com');
});

it('renders as a button', () => {
  const rendered = shallow(
    <LinkToInbox
        email={'example@live.com'}
        tag={'button'}
      />
  );
  expect(rendered.type()).toBe('button');
  expect(rendered.text()).toBe('Open in Outlook');
});

it('navigates on click', () => {
  const rendered = shallow(
    <LinkToInbox
        email={'example@gmail.com'}
        tag={'button'}
      />
  );
  rendered.find('button').simulate('click');
  expect(window.location.href).toBe('about:blank');
});

it('renders as an input type button', () => {
  const rendered = shallow(
    <LinkToInbox
        email={'example@outlook.com'}
        tag={'input'}
      />
  );
  expect(rendered.type()).toBe('input');
  expect(rendered.is('input[value="Open in Outlook"]')).toBe(true);
});

it('throws on unsupported tag types', () => {
  expect(() => shallow(<LinkToInbox
        email={'example@live.com'}
        tag={'div'}
      />)).toThrow(new Error(`unrecognized tag div`));
});
