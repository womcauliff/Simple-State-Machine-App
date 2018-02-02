import React from 'react';
import { Table } from 'reactstrap';

function StateMachineTable() {
  return (
    <Table bordered size="sm">
      <thead>
        <tr>
          <th />
          <th />
          <th scope="colgroup">Input</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
          <td>0</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <th />
          <th />
          <th scope="colgroup">Next State</th>
          <th />
        </tr>
        <tr>
          <th scope="row">Old State: 0</th>
          <td>1</td>
          <td>3</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Old State: 1</th>
          <td>2</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Old State: 2</th>
          <td>3</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Old State: 3</th>
          <td>0</td>
          <td>2</td>
          <td>0</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StateMachineTable;
