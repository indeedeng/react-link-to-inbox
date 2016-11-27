import React from 'react';

export default (code, elem) => {
  return () => (<div>
      <div>
        <div>
          Code:
        </div>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>
      <div>
        <div>
          Example:
        </div>
        <br />
        <div>
          {elem}
        </div>
      </div>
    </div>);
}
