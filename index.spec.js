import React from 'react';
import jest from 'jest';
import {shallow} from 'enzyme';
import LinkToInbox, { StyledInboxButton, StyledInboxLink, StyledInboxInput, InboxButton, InboxInput } from '.';

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

it('renders with an unrecognized domain if configured', () => {
  const rendered = shallow(
    <LinkToInbox email={'example@example.com'} guessUnknownDomain={true} />
  );
  expect(rendered.type()).toBe('a');
  expect(rendered.text()).toBe('Open in example.com');
});

it('renders nothing with an unrecognized domain by default', () => {
  const rendered = shallow(
    <LinkToInbox email={'example@example.com'} />
  );
  expect(rendered.type()).toBe(null);
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

it('includes passed classNames', () => {
  const className = 'test-class';
  const rendered = shallow(
    <LinkToInbox
        email={'example@live.com'}
        className={className}
      />
  );
  expect(rendered.hasClass(className)).toBe(true);
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

it('renders text from a template', () => {
  const rendered = shallow(
    <LinkToInbox
        email={'example@gmail.com'}
        template={'<%- name %> <%- protocol %> <%- domain %> <%- path %> <%- href %>'}
      />
  );
  expect(rendered.text()).toBe('Gmail https mail.google.com /mail/u/0/#search/in%3Aanywhere https://mail.google.com/mail/u/0/#search/in%3Aanywhere');
});

it('renders a InboxButton', () => {
  const rendered = shallow(
    <InboxButton email={'example@gmail.com'}/>
  );
  expect(rendered.type()).toBe(LinkToInbox);
  expect(rendered.text()).toBe('<LinkToInbox />');
});

it('renders a InboxInput', () => {
  const rendered = shallow(
    <InboxInput email={'example@gmail.com'}/>
  );
  expect(rendered.type()).toBe(LinkToInbox);
  expect(rendered.text()).toBe('<LinkToInbox />');
});

it('renders a StyledInboxButton', () => {
  const rendered = shallow(
    <StyledInboxButton email={'example@gmail.com'}/>
  );
  expect(rendered.type()).toBe(InboxButton);
  expect(rendered.text()).toBe('<InboxButton />');
});

it('renders a StyledInboxLink', () => {
  const rendered = shallow(
    <StyledInboxLink email={'example@gmail.com'}/>
  );
  expect(rendered.type()).toBe(LinkToInbox);
  expect(rendered.text()).toBe('<LinkToInbox />');
});

it('renders a StyledInboxInput', () => {
  const rendered = shallow(
    <StyledInboxInput email={'example@gmail.com'}/>
  );
  expect(rendered.type()).toBe(InboxInput);
  expect(rendered.text()).toBe('<InboxInput />');
});

it('throws on unsupported tag types', () => {
  expect(() => shallow(<LinkToInbox
        email={'example@live.com'}
        tag={'div'}
      />)).toThrow(new Error(`unrecognized tag div`));
});

it('throws on invalid email addresses', () => {
  expect(() => shallow(<LinkToInbox
        email={'example'}
      />)).toThrow(new Error(`Invalid email address example`));
});

it('throws on unprovided email addresses', () => {
  expect(() => shallow(<LinkToInbox/>)).toThrow(new Error(`email is required`));
});
