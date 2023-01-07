import React from "react";
import { Route, Routes } from "react-router-dom";
import { Whimsical } from "../components/financialLiteracy/Whimsical";

interface Props {}

export const FinancialLiteracy: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Whimsical/>} />
    </Routes>
  );
};
