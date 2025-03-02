

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1291010846264135800", ""], 
  mongodbUri : "mongodb+srv://Maxxi:<db_password>@cluster0.44dte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Playing Music", 
  activityType: "Playing",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/s7vjDbBdrV",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "XX",
      password: "enteryourcustompass",
      host: "180.188.226.76",
      port:  7019,
      secure: false
    }
  ]
}
