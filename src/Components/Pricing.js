import React from 'react';

export default function Pricing() {
    return (
        <div className="main">
  <h1>Pricing</h1>
  <p>Our products are most affortable for our students</p>
  <br />
  <p>We strive to keep our prices as low as possible for our students wih $5/m. 
    <br />
  </p><table className="price">
    <thead className="price-head">
      <tr><th>Type</th>
        <th>Price</th>
      </tr></thead>
    <tbody className="price-info">
      <tr>
        <td>Student</td>
        <td>$5.00/m</td>
      </tr>
      <tr>
        <td>Other</td>
        <td>$60.00/m</td>
      </tr>
    </tbody>
  </table>
</div>

    )
}
