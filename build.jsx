import { useState, useEffect } from "react";
import axios from "axios";

export function Prototype() {
  const [currentTab, setCurrentTab] = useState("feed");
  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log(`Backend request sent to ${currentTab} tab.`);

    axios
      .get(`http://localhost:3000/${currentTab}`)
      .then((response) => {
        setResponseData(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setResponseData("Failed to load Data");
        setLoading(false);
      });
  }, [currentTab]);

  return (
    <div>
      {/* Feed Section */}
      <button
        onClick={() => {
          setCurrentTab((currentTab) => "feed");
        }}
        style={{ color: currentTab === "feed" ? "red" : "black" }}
      >
        feed
      </button>

      {/* Notifications Section */}
      <button
        onClick={() => {
          setCurrentTab((currentTab) => "notification");
        }}
        style={{ color: currentTab === "notification" ? "red" : "black" }}
      >
        notification
      </button>

      {/* Messages Section */}
      <button
        onClick={() => {
          setCurrentTab((currentTab) => "messages");
        }}
        style={{ color: currentTab === "messages" ? "red" : "black" }}
      >
        messages
      </button>

      {/* Jobs Section */}
      <button
        onClick={() => {
          setCurrentTab((currentTab) => "jobs");
        }}
        style={{ color: currentTab === "jobs" ? "red" : "black" }}
      >
        jobs
      </button>
      <br />
      {loading ? <p>Loading...</p> : responseData}
    </div>
  );
}
