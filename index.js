const express = require("express");
const app = express();

const data = [
  {
    id: 1,
    data: {
      name: "Basic",
      description: "Basic coverage with low premiums",
      price: "$10/month",
    },
    active: false,
  },
  {
    id: 2,
    data: {
      name: "Standard",
      description: "Standard coverage with reasonable premiums",
      price: "$25/month",
    },
    active: false,
  },
  {
    id: 3,
    data: {
      name: "Ultra",
      description: "All-inclusive coverage with the highest premiums",
      price: "$100/month",
    },
    active: false,
  },
  {
    id: 4,
    data: {
      name: "Premium",
      description: "Comprehensive coverage with high premiums",
      price: "$50/month",
    },
    active: false,
  },
  {
    id: 5,
    data: {
      name: "Custom",
      description: "Tailored coverage to fit your specific needs",
      price: "Varies",
    },
    active: false,
  },
];

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET"); // Allow GET requests only
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.json(data);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
