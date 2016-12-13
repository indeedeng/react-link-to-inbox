# react-link-to-inbox ![react-link-to-inbox travis build status](https://travis-ci.org/indeedeng/react-link-to-inbox.svg) ![react-link-to-inbox appveyor build status](https://ci.appveyor.com/api/projects/status/github/indeedeng/react-link-to-inbox?branch=master&svg=true) ![react-link-to-inbox codecov status](https://img.shields.io/codecov/c/github/indeedeng/react-link-to-inbox.svg)

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

## Usage

### Subject and Sender

If you provide the subject line and the sending email address of the
confirmation email, then the link will contain url parameters that limit the
inbox search to emails that match that sender and subject.  This can prevent
your users from becoming distracted by other emails in your inbox, and not
clicking your confirmation link or returning to the page.


### Tags

To make it easier to make `link-to-inbox` to style, it supports three html tag
types: `a`, `input` and `button`, provided to the `tag` prop.  Each one is a
link that navigates to the sent email.  This allows you to create
[semantic markup](https://en.wikipedia.org/wiki/Semantic_HTML) that properly
reflects the importance of the link-to-inbox call to action.


### Text Templating

The `template` prop takes a string that is a
[lodash template](https://lodash.com/docs/4.17.2#template).  The following keys
are provided:

- name: the name of the email service (Gmail, Outlook) or the domain, if unknown
- protocol: the protocol of the generated link (e.g. `https`)
- domain: the domain of the email address (e.g. `gmail.com`)
- path: the rest of the link at href (e.g. `href = protocol + '://' + domain + path`)
- href: the link that is generated to the sent email
- subject, email and sender: the values provided to the props of the same name

This allows you to customize the anchor link text or button text, depending on
what tag is provided.

### Full example

```javascript
import LinkToInbox, {styled} from 'react-link-to-inbox';

export default (email) => {
  return styled(<LinkToInbox
      email={email}
      subject='Confirm your account'
      sender='noreply@dougwade.io'
      tag='a'
      template='Open email to <%- email %> from <%- sender %> in <%- domain %>'
    />);
}
```

## Documentation

See the examples in [our storybook](https://indeedeng.github.io/react-link-to-inbox/).
