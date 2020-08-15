const Discord = require("discord.js");
const express = require("express");
const app = express();
const client = new Discord.Client();
var prefix = "$";
app.use(express.static("public"));
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`https://mmu1.glitch.me`);
}, 280000);
var shell = require("shelljs");
shell.exec("java -jar server.jar");



//client.login("NjY3OTA2MDAxMDA1MDUxOTE3.XiJh8w.t28uqvlDjgq5UrF2QniLa87SIv4")
