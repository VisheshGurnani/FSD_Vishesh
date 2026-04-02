//importing express 
const express = require("express");

//Create express app/website
const app = express();

app.get("/about", (req, resp) =>{
    resp.send("We are not an option, we are a choice We're #1 choice of 10 Million people because we're the solution of India's intra-city commuting problems. With assured safety, we also provide economically priced rides. What makes us different? Our bike taxis can dodge the traffic during peak hours and get you to the destination in a jiffy! So when you think travel, think Rapido.")
} );

app.get('/rapido-ads', (req, resp) => {
    resp.send("Why Rapido Ads? With 4M+ daily rides and 1B+ monthly ad impressions, Rapido gives your brand the scale, relevance, and results you need to win in India’s urban markets. 200+ Cities, 4M+ Daily rides, 1B+ Monthly impressions");
});

app.get('/Safety', (req, resp) => {
    resp.send("At Rapido, the well-being of our customers is above everything else. We are constantly in pursuit of enhancing our safety measures to ensure every Rapido ride is a pleasant and comfortable experience.");
});

app.get("/Blog", (req,resp) => {
    resp.send("This page is under construction.");
});

app.get('/Contact', (req,resp) => {
    resp.send("You can find us here. Find help for your queries here: Registered Office Address: Roppen Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad - 500081. CIN:U52210TG2015PTC097115. City Office: Roppen Transportation Services Pvt Ltd, #148, 1st Floor, SLV Nilaya, 5th Main 80ft road, HSR Layout 7th Sector, Bangalore 560102. Corporate Office: Mantri Commercio - Spatium Tower A, Sy No 51/2, 51/3, 51/4, Of Devarabeesanahalli Village And Hjem 39/5 Of Kariyammana Agrahara Village Varthur Hobli, Bangalore East Taluk, Bangalore.");
})

app.listen(2500, ()=>{
    console.log("http://localhost:2500")
})
