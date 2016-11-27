# react-link-to-inbox ![react-link-to-inbox travis build status](https://travis-ci.org/doug-wade/react-link-to-inbox.svg) ![react-link-to-inbox codecov status](https://img.shields.io/codecov/c/github/doug-wade/react-link-to-inbox.svg)

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
import LinkToInbox, {styled} from 'react-link-to-inbox';

export default (email) => {
  return styled(<LinkToInbox
      email={email}
      subject={'Confirm your account'}
      sender={'noreply@dougwade.io'}
      tag={'a'}
      template={() => `Open email to ${email} from ${sender} in ${domain}`}
    />);
}
```
