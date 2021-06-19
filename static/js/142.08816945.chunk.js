(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[142],{726:function(e,a){e.exports={title:"1.7.8, 1.7.9, and 1.7.10 Releases",description:"Clans support, Party panel, and XP Tracker Per-Hour Rate Resetting",author:"Jordan",body:'<h1>Clans</h1>\n<p><img src="/img/blog/1.7.10-Release/clan-icons.png" alt="Clan member icons"></p>\n<p>We\'ve added support for clans across various plugins, including:</p>\n<ul>\n<li>Support for clan messages in the chat timestamps, chat history, chat commands, chat filter, emoji,\nchat colors, and chat notifications plugins</li>\n<li>The Minimap plugin can recolor clan member player dots</li>\n<li>You can hop-to clan members\' worlds using the World Hopper plugin</li>\n<li>The Player Indicator plugin has highlighting for clan members</li>\n<li>The Twitch plugin now uses <code>/t</code> as its chat trigger</li>\n</ul>\n<p>Additionally, the friends chat plugin was renamed to <code>Chat Channels</code> and allows adding join/leave\nmessages to clan and guest clan channels, as well as changing your target chat channel by simply\ntyping <code>/f</code>, <code>/c</code>, <code>/g</code>, and <code>/p</code>, as shown below:</p>\n<p><img src="/img/blog/1.7.10-Release/chat-channel-typing-modes.gif" alt="Chat channel typing modes"></p>\n<h1>Party Panel</h1>\n<p>We have added a plugin panel for the Party plugin which shows your active party members and has UI\nfor adding new members to your party and toggling specific players\' health and prayer displaying in\nthe overlay. Because of the added panel button, <em>the Party plugin has been disabled by default</em> and\nmust be re-enabled for those wishing to use it. It also simplifies the invite flow (still via Discord)\nso it is possible to create a party and send invites immediately, and also allows accepting join requests\nvia the client in the panel.</p>\n<p><img src="/img/blog/1.7.10-Release/party-panel.png" alt="Party plugin panel"></p>\n<h1>XP Tracker Per-Hour Rate Resetting</h1>\n<p>You can now manually reset the XP/hr rates of the XP Tracker plugin without resetting the gained XP,\nand configure it to automatically reset these rates after a set timeout duration.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The Item Charges plugin now has a separate toggle for Guthix rests</li>\n<li>Chat message recoloring is fixed for players with spaces in their ingame name</li>\n<li>Skill challenge clues requiring a hammer now recognize the Imcando hammer as being accepted</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 6 contributors this release!</p>\n<pre><code>Adam (34):\n      item charges: add toggle for guthix rest\n      item charges: split up test into separate methods\n      chat message manager: fix recoloring own name with spaces\n      xptracker: use enum map for actions and other cleanup\n      chat timestamps: add timestamps for all message types\n      minimap: add clan chat dot color configuration\n      ui: queue repaint when progressbar is edited\n      discord plugin: sanity check user id and avatar id before building url\n      party service: sanitize user names\n      info panel: adjust nav button priority\n      party: only send location update when the location changes\n      twitch: change chat trigger to /t\n      chat history: support clan chat\n      chat history: rebuild pmbox when all is cleared\n      api: add getOnVarTransmitListener to Widget\n      friendschat: readd user count\n      api: add enum size\n      api: correct clans chattypes\n      devtools: add modicons command\n      friendchatmanager: rename to chaticonmanager\n      Change config name of party plugin to disable by default\n      api: add clan api\n      chat icon manager: add clan chat icons\n      chat colors: add clan recolors\n      world hopper: add hop-to clan member\n      player indicators: add clans\n      chat filter: add clan chat\n      emoji plugin: add clan chat\n      chat notifications: add clan chat\n      chat commands: add clan chat\n      Allow rs.version to be a double\n      runelite-api: add clan member join and leave events\n      friends chat: rename to chatchannel\n      chat channel: add typing modes\n\nHydrox6 (2):\n      clues: support imcando hammer in skill challenges\n      skybox: add clan hall\n\nJoRouss (2):\n      party: add party panel\n      party: readd overlay leave party menu entry\n\nJames Shelton (2):\n      xptracker: add option to reset per hour rates\n      xptracker: add auto reset per hour rates after set time\n\nMax Weber (15):\n      friendschat: remove Tab Chat option\n      friendschat: remove user count\n      gpu: increase texture limit\n      friendschat: remove unused title strings\n      SpriteID: update to 2021-5-19\n      screenshot: use new report button offset\n      interfacestyles: update chatbox sprite ids\n      rl-api: import getTopLevelInterfaceId\n      screenshot: don\'t attempt to draw a date when there is no report button\n      scripts/SkillTabBuilder: fix unbalanced stack\n      cache: update cs2 opcodes\n      rl-client: update cs2 overlay opcodes\n      rl-client: cleanup cs2 overlays\n      ChatboxPanelManager: use ScriptPreFired\n      timestamp: use less callbacks in script overlays\n\nemerald000 (1):\n      Rename Armadylian Guards to Armadylean Guards\n</code></pre>\n'}}}]);
//# sourceMappingURL=142.08816945.chunk.js.map