import React, { Component } from "react";
import { render } from "react-dom";

import Table from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>summit-react-component Demo</h1>
        <Table responsive>
          <thead>
            <tr>
              <th />
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
