import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className="main">
        <h1 className='pricing'>Pricing</h1>
        <p className='pricing-info'>Our products are most affortable for our students</p>
        <br />
        <p className='pricing-info'>We strive to keep our prices as low as possible for our students wih $5/m. 
          <br />
        </p><table className="price">
          <thead className="price-head">
            <tr className='price-head-row'><th className='price-head-data'>Type</th>
              <th>Price</th>
            </tr></thead>
          <tbody className="price-info">
            <tr>
              <td className='pricing-data'>Student</td>
              <td className='pricing-cost'>$5.00/m</td>
            </tr>
            <tr>
              <td className='pricing-data'>Other</td>
              <td className='pricing-cost'>$60.00/m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Pricing