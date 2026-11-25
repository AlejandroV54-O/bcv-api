process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const response = await fetch("https://www.bcv.org.ve/", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
    });
    const html = await response.text();
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};
