import { createContext, useReducer } from "react";
import fundReducer from "./FundReducer";

const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const initialState = {
    funds: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(fundReducer, initialState);

  const searchFunds = async (query) => {
    const payload = { query };
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/fund/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    dispatch({
      type: "GET_FUNDS",
      payload: data.results,
    });
  };

  const fetchFunds = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/fund/`);
    const data = await res.json();

    dispatch({
      type: "GET_FUNDS",
      payload: data.data,
    });
  };

  const clearResults = () => dispatch({ type: "CLEAR_FUNDS" });

  return (
    <FundContext.Provider
      value={{
        searchFunds,
        funds: state.funds,
        loading: state.loading,
        fetchFunds,
        clearResults,
      }}
    >
      {children}
    </FundContext.Provider>
  );
};

export default FundContext;
