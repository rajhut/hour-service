const express = require("express");
const app = express();

app.get("/hour", (req, res) => {
    const now = new Date();
    const hour = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    res.send({message: hour});
});

app.listen(6001, () => {
    console.log("Servicio iniciado => http://localhost:6001");
});