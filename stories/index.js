import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LinkToInbox, { styled } from '..';
import createStory from './create-story';

storiesOf('LinkToInbox', module)
  .add('simple example', createStory(
    '<LinkToInbox email={"example@gmail.com"}/>',
    <LinkToInbox email={'example@gmail.com'}/>
  ))
  .add('Add search terms to reduce distraction', createStory(
    `<LinkToInbox
        email={'example@hotmail.com'}
        tag={'input'}
        subject={'Confirm your account'}
        sender={'noreply@dougwade.io'}
      />`,
    <LinkToInbox
        email={'example@hotmail.com'}
        tag={'input'}
        subject={'Confirm your account'}
        sender={'noreply@dougwade.io'}
      />
  ))
  .add('Customize the styles with classes and tags', createStory(
    `<LinkToInbox
          email={'example@outlook.com'}
          tag={'button'}
          className={'primary'}
        />`,
    <LinkToInbox
        email={'example@outlook.com'}
        tag={'button'}
        className={'primary'}
      />
  ))
  .add('Add custom text with templating', createStory(
    `styled(<LinkToInbox
        email={'example@live.com'}
        subject={'Confirm your account'}
        template={'Open email on domain <%- domain %> in provider <%- name %>'}
      />)`,
    styled(
      <LinkToInbox
          email={'example@live.com'}
          subject={'Confirm your account'}
          template={'Open email on domain <%- domain %> in provider <%- name %>'}
        />
      )
  ))
  .add('Comes with themeable styles', createStory(
    'styled(<LinkToInbox email={"example@googlemail.com"}/>)',
    styled(<LinkToInbox email={'example@googlemail.com'}/>)
  ))
  .add('full example with default values', createStory(
    `styled(<LinkToInbox
          email={'example@gmail.com'}
          subject={'Confirm your account'}
          sender={'noreply@dougwade.io'}
          tag={'a'}
          className={'link-to-inbox'}
          template={'Open email in <%- name %>'}
        />)`,
    styled(<LinkToInbox
        email={'example@gmail.com'}
        subject={'Confirm your account'}
        sender={'noreply@dougwade.io'}
        tag={'a'}
        className={'link-to-inbox'}
        template={'Open email in <%- name %>'}
      />)
  ));
