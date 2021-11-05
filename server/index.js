const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

//fake database :)
const compliments = ["Gee, you're a smart cookie!",
"Cool shirt!",
"Your Javascript skills are stellar.",
];

app.get("/api/compliment", (req, res) => {


  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/compliments", (req, res) => {
  res.status(200).send(compliments);
});


app.get("/api/fortune", (req,res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A small donation is call for. It’s the right thing to do.",
    "A soft voice may be awfully persuasive.",
    "At the touch of love, everyone becomes a poet.",
    "Courtesy begins in the home."
  ]

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]
  
  res.status(200).send(randomFortune)
})

app.post("/api/compliment/add", (req,res) => {
  console.log("data", req.body)
  compliments.push(req.body.text)
  res.status(200).send(req.body)
})

app.get("/api/compliment", (req,res) => {
  console.log("getting compliments")
  res.status(200).send(req.body)
})

app.delete("/api/compliment/removeLast", (req,res) => {
  console.log("removing compliments")
  let removedCompliment = compliments.pop()
  res.status(200).send(removedCompliment)
})


app.listen(4000, () => console.log("Server running on 4000"));
