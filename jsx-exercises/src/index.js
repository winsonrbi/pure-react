import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

function Data() {
  return (
    <React.Fragment>
      <td>
        1
      </td>
      <td>
        2
      </td>
      <td>
        3
      </td>
    </React.Fragment>
  );
}
function Table(){
  return (
    <table>
      <tbody>
        <tr>
          <Data/>
        </tr>
      </tbody>
    </table>
  );
}

ReactDOM.render(
  <Table/>,
  document.querySelector('#root')
);