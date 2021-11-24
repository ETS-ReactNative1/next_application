import React from "react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setisLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h1>Dashboard</h1>
      <h3>Posts - {dashboardData.posts}</h3>
      <h3>Likes - {dashboardData.likes}</h3>
      <h3>Followers - {dashboardData.followers}</h3>
      <h3>Following - {dashboardData.following}</h3>
    </div>
  );
};

export default Dashboard;
