import React from "react";
import { InlineWidget } from "react-calendly";

export default function FeFinanceCalendly() {
  return (
    <div>
      <div className="App">
        <InlineWidget url="https://calendly.com/fefinance" />
      </div>
    </div>
  );
}
