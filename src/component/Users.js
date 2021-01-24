import React from 'react';
import { withRouter } from 'react-router-dom';

const Users = ({ location, match, history }) => {
    const {params} = match
    return (
      <div>
        <h4>location</h4>
        <p>{match.path}</p>
        <p>{match.url}</p>
        <p>{params.id}</p>
        <textarea value={JSON.stringify(location, null, 2)} readOnly />
        <textarea value={JSON.stringify(match, null, 2)} readOnly />
        <h4>match</h4>
        <button onClick={() => history.push('/')}>홈으로</button>
      </div>
    );
  };
  
  export default withRouter(Users);