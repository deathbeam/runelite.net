(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[141],{725:function(e,n){e.exports={title:"1.7.7 Release",description:"Minor fixes and improvements",author:"Adam",body:'<p>We\'ve had a few updates since the last blog post, mostly minor, and so this post includes those changes as well as the changes today.</p>\n<p>The low detail plugin now has an option to hide lower floors, which is particularly useful on lower end computers in\nbusy areas, like the hallowed sepulchre.</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:center">Before</th>\n<th style="text-align:center">After</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><img src="/img/blog/1.7.7-Release/hallowed-sepulchre-normal.png" alt="Hallowed Sepulchre as it normally appears"></td>\n<td style="text-align:center"><img src="/img/blog/1.7.7-Release/hallowed-sepulchre-lower-floor-rendering-disabled.png" alt="Hallowed Sepulchre shown with the lower floor rendering disabled"></td>\n</tr>\n</tbody>\n</table>\n<p>The friend list plugin now has an option to show the world a player logged into on the log in message.</p>\n<p><img src="/img/blog/1.7.7-Release/login.png" alt="login"></p>\n<p>The item charges plugin can now show infoboxes with a charge count for braclets of slaughter, expeditious bracelets, and the chronicle.</p>\n<p><img src="/img/blog/1.7.7-Release/slaughter.png" alt="slaughter"></p>\n<p>A world region filter was added to the world switcher plugin, which causes the world hopper panel to only list worlds in a specific region.</p>\n<p><img src="/img/blog/1.7.7-Release/world-hopper.png" alt="world-hopper"></p>\n<p>The chat colors config has gained an additional option to allow recoloring your own username in chat.</p>\n<p><img src="/img/blog/1.7.7-Release/chat-name-color.png" alt="chat-name-color"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>STASH units that you\'ve removed items from now stay highlighted after the clue step has been completed, to remind you to deposit the items back</li>\n<li>When using <code>Lookup</code> from the chatbox, the hiscore plugin will now use the correct hiscores based on the ironman symbol of the player</li>\n<li>Items required for skill challenge clues are now found when using the <code>clue</code> bank tag</li>\n<li>The fishing trawler time remaining display has been updated to reflect the recent changes to the game duration</li>\n<li>The status bars alignment in modern resizable mode has been fixed back to its original position</li>\n<li>The obstacles on the way to the Rellekka lighthouse now have their clickboxes highlighted</li>\n<li>Tempoross and the chest in the Threatre of Blood lobby are now tracked by the loot tracker</li>\n<li>The Imcando hammer has been added to the idle notifier, once again allowing idle notifications when done smithing</li>\n<li>A <code>!pb tempoross</code> command has been added (requires getting 1 additional kill post-update)</li>\n<li>The spec counter has been fixed to not count bandos godsword and bandos godsword (or) specs separately</li>\n<li>Battlestaffs have been added to the fletching calculator</li>\n<li>A <code>Leave</code> swap has been added to the menu entry swapper for leaving Tempoross after a game</li>\n<li>A bug causing the GPU plugin to break when antialiasing is forced by the system has been fixed</li>\n<li>The camera plugin now has an option to keep the vertical camera position when aligning the camera to cardinal directions</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 21 contributors this release!</p>\n<pre><code>Adam (23):\n      wsclient: set ua on ws request\n      pom: rename maven-central repositories to central\n      api: add get/set min level to Scene\n      low detail: add option to hide lower planes\n      api: add getters for actor anim and spotanim frame\n      devtools: use setAnimationFrame\n      comp.cl: remove unused to_screen.cl import\n      Update build for jdk 16\n      containable frame: fix parsing version strings with only a major number\n      hiscore: use correct endpoint when looking up self with shortcut\n      hiscore: use correct endpoint when looking up chat messages\n      api: add player composition colors\n      api: add cross world message fields\n      clues: add skill challenge clue requirements to clue tag test\n      fishing plugin: update for fishing trawler changes\n      widgets: fix modern resizable interface container component id\n      chat message manager: add default color for friendschatnotification chat type\n      friends chat: use friendschatinfo color for join/part messages\n      agility plugin: add rellekka lighthouse obstacles\n      info: simplify language surrounding config import\n      client: accept custom javconfig url\n      item charges: simplify infobox creation logic\n      clientloader: don\'t use fallback config or client when jav_config is manually specified\n\nAlexsuperfly (2):\n      cannon: check invent cballs to initialize count when placing\n      cannon: set count when loading wrong type of cannonballs\n\nAmit G (1):\n      SkillChallengeClue: Support inactive crystal tools (#13517)\n\nBroooklyn (8):\n      loottracker: Separate events that do not produce ground items\n      loottracker: Add support for Tempoross Reward pool and new Casket\n      fishing: Add Tempoross IDs and config to highlight bubbling spots\n      Widget: Make Tempoross status indicator moveable\n      worldmap: Add fishing spots from Tempoross update\n      worldmap: Add Al Kharid and Ruins of Unkah Ferry locations\n      worldmap: Add Ruins of Unkah mining location\n      discord: finish naming over-world regions\n\nCyborger1 (1):\n      SkillChallengeClue: Add Gold shade keys to Fiyr shade step (#13260)\n\nHydrox (14):\n      Update discord invite links to start users in #welcome (#13549)\n      image util: add function to scale images while preserving aspect ratio\n      xp globes: scale icon while respecting aspect ratio\n      item charges: use RSProfiles for items with stored charges\n      time tracking: fix birdhouse notification buttons not doing anything\n      idle notifier: add support for the imcando hammer\n      wintertodt: add support for imcando hammer\n      clues: update reanimated abyssal demon task for new reanimation spells\n      skill calc: update arceuus spells\n      clues: highlight the last clue\'s STASH until items are deposited back\n      chat commands: add support for tempoross pb messages\n      item charges: add bracelet of slaughter and expeditious bracelet\n      slayer: remove bracelet charge tracking\n      camera: add option to preserve pitch on compass look menu entries\n\nJordan Atwood (2):\n      HotColdLocation: Fix Seers\' Village bank spot\n      menu manager: add menu entries in insert order\n\nLlemonDuck (2):\n      clues: Fix location of Captain Bleemadge (#13531)\n      Add Below Ice Mountain quest\n\nMaciej Lewicki (1):\n      friendlist: add option to show world in login notifications\n\nMartin H (1):\n      achievementdiary: Update Runecraft task texts (#13485)\n\nMatt Dennis (2):\n      spec counter: combine item variations into one weapon\n      examine: Improve plugin description and tags (#13399)\n\nMax Weber (4):\n      eventbus: preserve priority ordering during unregister\n      cache/ObjectLoader: add randomizeAnimStart opcode from rev 193\n      cache/NpcLoader: add category opcode from rev 195\n      Update IDs for 2021-4-28\n\nNicholas Anzalone (2):\n      achievement diary: remove requirment from easy fishing trawler task\n      skill calc: Add battlesaff to fletching calculator (#13525)\n\nOwen (1):\n      clues: Support golden prospector kit (#13457)\n\nRobert (1):\n      chat colors: add color option for player\'s own name\n\nRuneLogApp (1):\n      music plugin: add null check to SettingsSideSlider icon on shutdown\n\naHooder (1):\n      gpu: workaround for forced anti-aliasing\n\nemiljensen2 (1):\n      loot tracker: support tob lobby reward chest\n\nisaacph (1):\n      world hopper: add region filter config\n\nmolo-pl (2):\n      clues: Support spirit angler\'s outfit (#13421)\n      menu entry swapper: add Tempoross leave swap\n\nsuperiorser9 (1):\n      wiki: only show vanilla wiki banner when enabled (#13380)\n</code></pre>\n'}}}]);
//# sourceMappingURL=141.7e20d7a4.chunk.js.map