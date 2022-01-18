import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import '../css/style.css';

function Type_anim(props) {
  const [looping, setLooping] = useState(true);
  const texts = props.texts

  useEffect(() => {
    setLooping(true);
  }, [looping]);

  return (
      <div class="wrapped typed-text-2">
        {looping ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setLooping(false)}>
          {texts.map(text => ( [
            <span>  {text}</span> , 
            <Typist.Backspace count={text.length} delay={200} />
          ]))}
        </Typist>) : ( "" )}
      </div>
    );
  
}
export default Type_anim;