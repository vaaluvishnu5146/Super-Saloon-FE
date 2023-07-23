import React from 'react';

function BasicCta({
  text = '',
  onClick = () => {},
  overrides = {},
  id = '',
  name = '',
}) {
  return (
    <button id={id} name={name} onClick={onClick} style={overrides}>
      {text}
    </button>
  );
}

export default BasicCta;
