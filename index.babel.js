import React from 'react';
import {getSpec, getHref} from 'link-to-inbox';
import template from 'lodash-template';

const LinkToInbox = ({template: templ, subject, sender, email, tag}) => {
  tag = tag || 'a';
  templ = templ || 'Open in <%- name %>';

  const filter = {subject, sender};
  let spec = getSpec(email, filter, true);
  let href = getHref(email, filter, true);

  if (!spec) {
    const domain = email.split('@')[1];
    spec = {
      name: domain,
      protocol: 'https',
      domain,
      path: domain
    };
  }

  if (!href) {
    href = spec.protocol + '://' + spec.domain;
  }

  const msg = template(templ)(spec);
  function clickHandler() {
    window.location.href = href;
  }

  switch (tag) {
    case 'a':
      return (<a href={href}>{msg}</a>);
    case 'button':
      return (<button onClick={clickHandler}>{msg}</button>);
    case 'input':
      return (<input type="button" onClick={clickHandler} value={msg}/>);
    default:
      console.error(`unrecognized tag ${tag}`);
      throw new Error(`unrecognized tag ${tag}`);
  }
};

LinkToInbox.propTypes = {
  template: React.PropTypes.func,
  subject: React.PropTypes.string,
  sender: React.PropTypes.string,
  email: (props, propName) => {
    if (!props[propName].includes('@')) {
      return new Error(`email must be a valid email address, got ${props[propName]}`);
    }
  },
  // comment this in when we support input
  tag: React.PropTypes.oneOf(['a', 'button', 'input'])
};

export default LinkToInbox;

export function styled(component) {
  return component;
}
