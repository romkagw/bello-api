const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({ data:[
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
      }
    ]
  });
});

module.exports = router;