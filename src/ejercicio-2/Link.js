import React from 'react';

const Link = (props) => <a href={props.href} target={props.openInNewTab ? '_blank' : '_self'}>{props.children}</a>

export default Link;