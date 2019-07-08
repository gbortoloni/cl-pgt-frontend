import axios from "axios";

const BASE_URL = "https://cl-pgto-backend.herokuapp.com/api";

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);
  return {
    type: "BILLING_SUMMARY_FETCHED",
    payload: request
  };
}
