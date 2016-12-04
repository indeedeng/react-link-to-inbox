import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LinkToInbox, { StyledInboxButton, StyledInboxLink, StyledInboxInput } from '..';
import createStory from './create-story';

storiesOf('LinkToInbox', module)
  .add('simple example', createStory(
    `
    import LinkToInbox from 'react-link-to-inbox';
    <LinkToInbox email='example@gmail.com'/>`,
    <LinkToInbox email='example@gmail.com'/>
  ))
  .add('Add search terms to reduce distraction', createStory(
    `
    import LinkToInbox from 'react-link-to-inbox';
    <LinkToInbox
        email='example@hotmail.com'
        tag='input'
        subject='Confirm your account'
        sender='noreply@dougwade.io'
      />`,
    <LinkToInbox
        email='example@hotmail.com'
        tag='input'
        subject='Confirm your account'
        sender='noreply@dougwade.io'
      />
  ))
  .add('Customize the styles with classes and tags', createStory(
    `
    import LinkToInbox from 'react-link-to-inbox';
    <LinkToInbox
        email='example@outlook.com'
        tag='button'
        className='primary'
      />`,
    <LinkToInbox
        email='example@outlook.com'
        tag='button'
        className='primary'
      />
  ))
  .add('Comes with themeable styles', createStory(
    `
    import { StyledInboxInput } from 'react-link-to-inbox';
    <StyledInboxInput email="example@googlemail.com"/>`,
    <StyledInboxInput email='example@googlemail.com'/>
  ))
  .add('Add custom text with templating', createStory(
    `
    import { StyledInboxLink } from 'react-link-to-inbox';
    <StyledInboxLink
        email={'example@live.com'
        subject='Confirm your account'
        template='Open email on domain <%- domain %> in provider <%- name %>'
      />`,
      <StyledInboxLink
          email='example@live.com'
          subject='Confirm your account'
          template='Open email on domain <%- domain %> in provider <%- name %>'
        />
  ))
  .add('Putting it all together', createStory(
    `
    import { StyledInboxButton } from 'react-link-to-inbox';
    <StyledInboxButton
        email='example@gmail.com'
        subject='Confirm your account'
        sender='noreply@dougwade.io'
        className='link-to-inbox'
        template='Open email in <%- name %>'
      />`,
    <StyledInboxButton
        email='example@gmail.com'
        subject='Confirm your account'
        sender='noreply@dougwade.io'
        className='link-to-inbox'
        template='Open email in <%- name %>'
      />
  ));
