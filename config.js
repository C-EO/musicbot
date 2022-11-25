module.exports = {
	cmdPerPage: 10, //- Number of commands per page of help command
	adminId: "UserId", //- Replace UserId with the Discord ID of the admin of the bot
	token: process.env.token || "", //- Bot's Token
	clientId: process.env.clientId || "", //- ID of the bot
	clientSecret: process.env.clientSecret || "", //- Client Secret of the bot
	port: 4200, //- Port of the API and Dashboard
	scopes: ["identify", "guilds", "applications.commands", "bot"], //- Discord OAuth2 Scopes
	serverDeafen: false, //- If you want bot to stay deafened
	defaultVolume: 100, //- Sets the default volume of the bot, You can change this number anywhere from 1 to 100
	supportServer: "https://discord.gg/BmPNx9jJHD", //- Support Server Link
	Issues: "https://git.c-eo.repl.co/imperialbot/musicbot/issues", //- Bug Report Link
	permissions: 277083450689, //- Bot Inviting Permissions
	disconnectTime: 180000, //- How long should the bot wait before disconnecting from the voice channel (in miliseconds). Set to 1 for instant disconnect.
	twentyFourSeven: false, //- When set to true, the bot will never disconnect from the voice channel
	autoQueue: true, //- When set to true, related songs will automatically be added to the queue
	autoPause: true, //- When set to true, music will automatically be paused if everyone leaves the voice channel
	debug: false, //- Debug mode
	cookieSecret: "Pikachu is cute", //- Cookie Secret. Make sure to change this value.
	website: "https://example.com", //- without the / at the end
	// You need a lavalink server for this bot to work!!!!
	// Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
	nodes: [
		{
			identifier: "Main Node", //- Used for indentifier in stats commands.
			host: "", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 60, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
	],
	embedColor: "RANDOM", //- Color of the embeds, hex supported
	presence: {
		// PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
		status: "online", //- You can have online, idle, dnd and invisible (Note: invisible makes people think the bot is offline)
		activities: [
			{
				name: "Music.", //- Status Text
				type: "LISTENING", //- PLAYING, WATCHING, LISTENING, STREAMING
			},
		],
	},
	iconURL: "https://raw.githubusercontent.com/c-eo/imperialbotmusic/v5/assets/logo.gif", //- This icon will be in every embed's author field
};
