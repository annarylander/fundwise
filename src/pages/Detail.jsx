import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";
import FundContext from "../context/FundContext";
import NotFound from "./NotFound";

export default function Detail(props) {
  const { fundName } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { getDetails } = useContext(FundContext);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_KEY}/fund/${fundName}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.fund));
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {detail ? (
        <div className="page">
          <h3 className="text-lg font-medium pb-5 pt-5">{fundName}</h3>
          <table className="table table-compact">
            <thead>
              <tr>
                <th>Fund holdings</th>
                <th>Share</th>
                <th>Date</th>
              </tr>
            </thead>
            {detail &&
              detail.fundHoldings.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{item.companyName}</td>
                      <td>{item.shareOfFund}</td>
                      <td>{moment(detail.holdingsDate).format("ll")}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
          <button
            type="submit"
            className="btn-sm btn-success rounded text-white"
          >
            <Link to="/">Back</Link>
          </button>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
