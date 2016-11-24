import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LinkToInbox, { template } from '..';

storiesOf('LinkToInbox', module)
  .add('simple example', () => (
    <LinkToInbox email={'douglas.b.wade@gmail.com'}/>
  ))
  .add('with some emoji', () => (
    <LinkToInbox
        email={email}
        subject={'Confirm your account'}
        sender={'noreply@dougwade.io'}
        tag={'a'}
        template={template`Open email to ${email} from ${sender} in ${domain}`}
      />
  ));
