import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div> Error 404
        <div>
            <Link to="/Home">Home</Link>
        </div>
        <div>
            <a href="/Home">Home Anchor</a>
        </div>
      
    </div>
  );
}  