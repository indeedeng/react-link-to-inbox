import React from 'react';
import {getSpec, getHref} from 'link-to-inbox';

const LinkToInbox = ({template: templ, subject, sender, email, tag}) => {
  tag = tag || 'a';
  templ = () => 'open in gmail';
  // templ = templ || template`open in ${domain}`; // eslint-disable-line no-undef

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

  const msg = templ({href, sender, subject, email, ...spec});

  switch (tag) {
    case 'a':
      return (<a href={href}>{msg}</a>);
    case 'button':
      return (<button onclick={`window.location.href=${href}`}>{msg}</button>);
    // TODO: Support input
    // case:
    //   return (<input type="button" onclick={`window.location.href=${href}`}>{msg}</input>);
    default:
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
  tag: React.PropTypes.oneOf(['a', 'button' /*, 'input' */])
};

export default LinkToInbox;

export function template(strings, ...keys) {
  return values => {
    const result = [strings[0]];
    keys.forEach((key, i) => {
      result.push(values[key], strings[i + 1]);
    });
    return result.join('');
  };
}
