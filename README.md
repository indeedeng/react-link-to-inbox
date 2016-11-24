# react-link-to-inbox

A thin react wrapper around [link-to-inbox](http://npmjs.com/package/link-to-inbox)


## Installation

It's just an npm package

```sh
npm i -S react-link-to-inbox
```

Using yarn

```sh
yarn add react-link-to-inbox
```


## Full example

```javascript
import LinkToInbox, {template} from 'react-link-to-inbox';

export default (email) => {
  <LinkToInbox
      email={email}
      subject={'Confirm your account'}
      sender={'noreply@dougwade.io'}
      tag={'a'}
      template={template`Open email to ${email} from ${sender} in ${domain}`}
    />
}
```
