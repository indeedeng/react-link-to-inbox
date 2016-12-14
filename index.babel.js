import React from 'react';
import {getSpec, getHref} from 'link-to-inbox';
import template from 'lodash-template';
import styled from 'styled-components';

class LinkToInbox extends React.Component {
  render() {
    let {template: templ, style, subject, sender, email, tag, guessUnknownDomain, className} = this.props;
    if (!email) {
      throw new Error(`email is required`);
    }
    if (!email.includes('@')) {
      throw new Error(`Invalid email address ${email}`);
    }

    tag = tag || 'a';
    templ = templ || 'Open in <%- name %>';

    const filter = {subject, sender};
    let spec = getSpec(email, filter, true);
    let href = getHref(email, filter, true);

    if (!spec) {
      if (!guessUnknownDomain) {
        return null;
      }
      const domain = email.split('@')[1];
      spec = {
        name: domain,
        protocol: 'https',
        domain,
        path: ''
      };
    }

    if (!href) {
      href = spec.protocol + '://' + spec.domain + spec.path;
    }

    const msg = template(templ)({subject, email, sender, href, ...spec});
    function clickHandler() {
      window.open(href);
    }

    switch (tag) {
      case 'a':
        return (<a href={href} className={className} style={style}>{msg}</a>);
      case 'button':
        return (<button onClick={clickHandler} className={className} style={style}>{msg}</button>);
      case 'input':
        return (<input type="button" onClick={clickHandler} value={msg} className={className} style={style}/>);
      default:
        console.error(`unrecognized tag ${tag}`);
        throw new Error(`unrecognized tag ${tag}`);
    }
  }
}

LinkToInbox.propTypes = {
  template: React.PropTypes.string,
  subject: React.PropTypes.string,
  sender: React.PropTypes.string,
  tag: React.PropTypes.oneOf(['a', 'button', 'input']),
  guessUnknownDomain: React.PropTypes.boolean,
  email: (props, propName) => {
    if (!props[propName]) {
      return new Error(`email is required`);
    }
    if (!props[propName].includes('@')) {
      return new Error(`email must be a valid email address, got ${props[propName]}`);
    }
  },
  style: React.PropTypes.string,
  className: React.PropTypes.string
};

export default LinkToInbox;
export const InboxButton = props => <LinkToInbox tag="button" {...props}/>;
export const InboxInput = props => <LinkToInbox tag="input" {...props}/>;

const commonStyles = `
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 10px 24px;
  cursor: pointer;
`;

const buttonStyles = `
  ${commonStyles}
  border: 1px solid #9768BA;
  background-color:#9768BA;
  color:white;
  border-radius: 20px;
  transition: all .05s ease-in-out;
  box-sizing: border-box;
  letter-spacing: .01em;
  text-transform: capitalize;

  &:focus {
    background-color:#8751AF;
    border-color: #8751AF;
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(80, 40, 120, 0.75);
    outline: none;
  }

  &:hover {
    background-color:#8751AF;
    border-color: #8751AF;
  }

  &:active {
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(80, 40, 120, 0.75);
    border-color: #8751AF;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.15));
    /*outline: none;*/
  }`;

const linkStyles = `
  ${commonStyles}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color:#8751AF;
  }

  &:focus {
    text-decoration: underline;
    color:#8751AF;
    outline: none;
  }
`;

export const StyledInboxLink = styled(LinkToInbox)`
  ${linkStyles}
`;

export const StyledInboxButton = styled(InboxButton)`
  ${buttonStyles}
`;
export const StyledInboxInput = styled(InboxInput)`
  ${buttonStyles}
`;
