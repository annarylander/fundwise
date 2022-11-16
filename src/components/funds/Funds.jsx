import React from "react";
import { Link } from "react-router-dom";

const Funds = ({ funds, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <h3 className="text-lg font-medium pb-5 pt-5">Alla fonder</h3>
      <table className="table table-compact">
        {funds.map((fund, index) => (
          <tbody className="hover:text-success" key={index}>
            <tr>
              <td>
                <Link to={`/fund/${fund}`}>{fund}</Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Funds;
