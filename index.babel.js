import React from 'react';
import {getSpec, getHref} from 'link-to-inbox';

const LinkToInbox = ({template: templ, subject, sender, email, tag}) => {
  tag = tag || 'a';
  templ = templ || template`open in ${domain}`; // eslint-disable-line no-undef

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

  return <tag href={href}>{msg}</tag>;
};

LinkToInbox.propTypes = {
  template: React.propTypes.func,
  subject: React.propTypes.string,
  sender: React.propTypes.string,
  email: (props, propName) => {
    if (!props[propName].includes('@')) {
      return new Error(`email must be a valid email address, got ${props[propName]}`);
    }
  },
  tag: React.propTypes.oneOf(['a', 'button', 'input'])
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
