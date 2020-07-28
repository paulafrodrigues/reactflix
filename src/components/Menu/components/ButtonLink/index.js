import React from 'react';

function ButtonLink(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.chidren}
        </a>
    );
}

export default ButtonLink ;