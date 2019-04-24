// V1: purpose of component is to receive some text and display it to the page.
// V2: add "translation" (toUpperCase) to the text displayed to page.

import React from 'react';

function Output(props) {



    return (
        <div>
            {props.text.toUpperCase()}
        </div>
    );
}



export default Output;