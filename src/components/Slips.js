import React from 'react'
import Form from 'react-bootstrap/Form';

const Slips = () => {
  return (
    <div>
        <Form.Select aria-label="Default select example">
      <option>Select a slip</option>
      <option value="alfa">Slip Alfa</option>
      <option value="beta">Slip Beta</option>
      <option value="gamma">Slip Gamma</option>
    </Form.Select>
    </div>
  )
}

export default Slips