import React from 'react';
import {getSpec, getHref} from 'link-to-inbox';

const LinkToInbox = ({template, subject, sender, email, tag}) => {
  tag = tag || 'a';
  const filter = {subject, sender};
  let spec = lti.getSpec(email, filter, true);
  let href = lti.getHref(email, filter, true);

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

  return <a href={href}>{msg}</a>;
};

LinkToInbox.propTypes = {
  msg: React.propTypes.string,
  subject: React.propTypes.string,
  sender: React.propTypes.string,
  email: (props, propName) => {
    if (!props[propName].includes('@')) {
      return new Error(`email must be a valid email address, got ${props[propName]}`);
    }
  },
  tag: React.propTypes.oneOf(['a', 'button', 'input'])
}

export default LinkToInbox;

export function template(strings, ...keys) {
  return (function(values) {
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      result.push(values[key], strings[i + 1]);
    });
    return result.join('');
  });
}
