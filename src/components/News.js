import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // ✅ FIXED useState for error

  const API_KEY = "p4c1aJD8P8QS2O8i2KgBGGjithymXx2s94MXqWC1";
  const BASE_URL = "https://api.marketaux.com/v1/news/all?language=en";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (query = "") => {
    try {
      setLoading(true);
      setError(""); // Clear previous errors
      let url = `${BASE_URL}&limit=5&api_token=${API_KEY}`;

      if (query) {
        url = `${BASE_URL}&symbols=${query}&limit=5&api_token=${API_KEY}`;
      }

      const response = await axios.get(url);
      setNews(response.data.data || []);
    } catch (err) {
      setError("Error fetching news. Please try again later."); // ✅ Use setError properly
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toUpperCase();
    setSearchQuery(query);
    fetchNews(query);
  };

  return (
    <div style={{ padding: "100px 20px", fontFamily: "Arial, sans-serif", backgroundColor:'#E4E4E4', minHeight: '100vh'}}>
      <h1 style={{ textAlign: "center", color: "#045757" }}>Latest Finance News</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by company ticker (e.g., AAPL, TSLA)"
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: "60%",
            fontSize: "1.1rem",
            textAlign: "center",
            padding: "15px",
            border: "1px solid #045757",
            borderRadius: "50px",
            color: "black",
            backgroundColor: "rgba(76, 175, 80, 0.3)",
          }}
        />
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading news...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>} {/* ✅ Show error if exists */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {news.length > 0 ? (
          news.map((article, index) => {
            let sentimentScore = "N/A"; 
            let sentimentImpact = "Neutral Impact"; 
            let sentimentColor = "#888"; 

            if (article.entities && article.entities.length > 0) {
              sentimentScore = article.entities[0].sentiment_score.toFixed(4);

              if (sentimentScore > 0) {
                sentimentImpact = "Positive Impact";
                sentimentColor = "green";
              } else if (sentimentScore < 0) {
                sentimentImpact = "Negative Impact";
                sentimentColor = "red";
              } else {
                sentimentImpact = "Neutral Impact";
                sentimentColor = "#888";
              }
            }

            return (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {article.image_url ? (
                  <img
                    src={article.image_url}
                    alt="News"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ccc",
                      color: "#333",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      borderRadius: "10px",
                    }}
                  >
                    No Image Available
                  </div>
                )}

                <h3 style={{ color: "#045757" }}>{article.title}</h3>
                <p>{article.description}</p>
                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(article.published_at).toLocaleString()}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#007BFF", textDecoration: "none" }}
                >
                  Read More
                </a>

                <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                  Sentiment Score: {sentimentScore}
                </p>
                <p
                  style={{
                    marginTop: "5px",
                    fontWeight: "bold",
                    color: sentimentColor,
                  }}
                >
                  {sentimentImpact}
                </p>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            No news found for "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
