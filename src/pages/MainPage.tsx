import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/homePage/HomePage";

export default function MainPage() {
  return (
    <div>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}
