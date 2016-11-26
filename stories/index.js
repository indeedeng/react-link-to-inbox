import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LinkToInbox, { styled } from '..';

storiesOf('LinkToInbox', module)
  .add('simple example', () => (
    <LinkToInbox email={'example@gmail.com'}/>
  ))
  .add('Add search terms to reduce distraction', () => (
    <LinkToInbox
        email={'example@hotmail.com'}
        subject={'Confirm your account'}
        sender={'noreply@dougwade.io'}
      />
  ))
  .add('Customize the styles with classes and tags', () => (
    <LinkToInbox
        email={'example@outlook.com'}
        tag={'button'}
        className={'primary'}
      />
  ))
  .add('Add custom button text with templating', () => (
    styled(
      <LinkToInbox
          email={'example@live.com'}
          subject={'Confirm your account'}
          template={() => `Open email with subject ${subject} from sender ${sender} in provider ${provider}`}
        />
      )
  ))
  .add('Comes with themeable styles', () => (
    styled(<LinkToInbox email={'example@googlemail.com'}/>)
  ))
  .add('full example with default values', () => (
    styled(<LinkToInbox
        email={'example@gmail.com'}
        subject={'Confirm your account'}
        sender={'noreply@dougwade.io'}
        tag={'a'}
        className={'link-to-inbox'}
        template={() => `Open email in ${provider}`}
      />)
  ));
