// V1: Purpose of component is to receive some text and display it to the page.
// V2: Add "translation" (toUpperCase) to the text displayed to page.
// V3: Accept a prop telling me what kind of transformation to do.

import React from 'react';

function toL33t(text) {
    const l33tDict = {
        'a': '4',
        'o': '0',
        'e': '3',
        'l': '1',
        'h': '#',
        's': '$',
        't': '7'
    };
    // convert text to array
    const asArray = text.split('');
    // for each letter, translate to l33t
    const newArray = asArray.map(letter => {
        return l33tDict[letter.toLowerCase()] || letter;
    })
    // return array as a string
    return newArray.join('');
}

function Output(props) {
    // return (
    //     <div>{
    //         props.transform === "l33t" ? toL33t(props.text) : props.text.toUpperCase()
    //     }</div>
    // );

    let displayText = props.text.toUpperCase();
    if(props.transform === 'l33t') {
        displayText = toL33t(props.text);
    }

    return (
        <div>{displayText}</div>
    )
}



export default Output;