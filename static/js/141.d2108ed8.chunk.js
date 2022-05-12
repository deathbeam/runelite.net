(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[141],{734:function(e,n){e.exports={title:"1.7.1, 1.7.2, and 1.7.3 Releases",description:"RuneScape Wiki prices, Kingdom of Miscellania notifications, and account-specific slayer task tracking",author:"Jordan",body:'<p>We have integrated <a href="https://runelite.net/blog/show/2021-03-08-Wiki-Ge-Partnership" native="" rel="nofollow">the RuneScape Wiki\'s real-time\nprices</a>, into the\nclient, where it is used for bank valuation, ground item highlights, grand\nexchange lookups, and more.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Kingdom-of-Miscellania" native="" rel="nofollow">Kingdom of Miscellania\nplugin</a> can now send\nnotifications upon login when your coffer or approval are below configured values</li>\n<li>You can check your kill count and personal best times of TzHaar-Ket-Rak\'s multi-Jad challenges\nusing the <a href="https://github.com/runelite/runelite/wiki/Chat-Commands" native="" rel="nofollow">chat commands</a> <code>!kc jad 3</code>\nand <code>!pb jad 6</code></li>\n<li>The import and export menu options are now toggleable in the <a href="https://github.com/runelite/runelite/wiki/Ground-Markers" native="" rel="nofollow">Ground Markers\nplugin</a>. Additionally, a &quot;Clear&quot; option\nhas been added which, when used, will clear any visible markers near your location</li>\n<li>Your <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">slayer task and streak information</a> are\nnow profile-specific, and will be tracked correctly between accounts</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-Notifications" native="" rel="nofollow">Chat Notifications plugin</a> now\nsupports highlighting messages which match provided regular expressions, similar to the <a href="https://github.com/runelite/runelite/wiki/Chat-Filter" native="" rel="nofollow">Chat\nFilter plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Discord" native="" rel="nofollow">Discord plugin</a> now offers a toggle to\nshow RuneLite as the active game while on the login screen</li>\n<li><a href="https://github.com/runelite/runelite/wiki/XP-Globes" native="" rel="nofollow">XP Globe icons</a> now resize with the globes</li>\n<li>Ingame personal best times with the recently-added &quot;precise timing&quot; ingame option are now saved\nto the <a href="https://github.com/runelite/runelite/wiki/Chat-Commands" native="" rel="nofollow">Chat Commands plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Timers" native="" rel="nofollow">Timers plugin</a> has learned to identify an\nimbued heart magic boost even in situations where the animation does not play</li>\n<li>NPCs which change forms, such as werewolves and nylocas, are now properly highlighted by name by\nthe <a href="https://github.com/runelite/runelite/wiki/NPC-Indicators" native="" rel="nofollow">NPC Indicators plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Mining" native="" rel="nofollow">Mining plugin</a> now highlights the active\ndaeyalt essence with an arrow</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 27 contributors this release!</p>\n<pre><code>Adam (39):\n      key remapping: set press enter to chat text regardless of chatbox focus\n      clues: make isle of souls hotcold location a master step\n      object indicators: fix marking multilocs after var changes\n      client: move core singleton eventbus registration to singleton constructors\n      barrows plugin: use widget closed event for clearing puzzle\n      devtools: add disconnect button\n      discord plugin: only check for area update on logged in gamestate\n      corp plugin: use varbit changed event to track damage\n      ping: use icmp ping on linux if available\n      api: add actor animations\n      perspective: add plane parameter to getCanvasTileAreaPoly\n      chat commands: add jad challenge kc and pbs\n      Fix slayer plugin setting config values to null\n      config manager: include profile in unset configchanged event\n      barrows: simplify timer creation logic\n      http service: remove unused sprite endpoint\n      http service: remove unused cache item image endpoint\n      http service: remove unused price endpoints\n      item service: correct scheduled delay for reloading tradable items\n      cache updater: fix race with saving archives and computing archive hashes\n      http service: add wiki price service\n      item controller: add config for price cache time\n      item service: include wiki prices in price data\n      client: add option to use wiki traded prices\n      chat commands: support wiki prices in price command\n      ge plugin: support wiki prices in search panel\n      ge plugin: use wiki prices for actively traded price\n      wiki price service: use v1 api\n      ge plugin: use int for ha value\n      ge plugin: cleanup\n      ge plugin: use prices.runescape.wiki for ge link when using wiki prices\n      agility shortcut: fix al kharid window map location\n      game object: add size x/y methods\n      api: add javadoc to tile object location api\n      hunter plugin: update location translation for lizard traps\n      woodcutting plugin: use tree location for determining the tree region\n      xp globes: add dynamic skill icon sizing\n      menus: add widgetmenuoption constructor for widgetid\n      gpu: fix clEnqueueReleaseGLObjects call with no wait list\n\nBossHuso (2):\n      chatcommands: Fix adventure log widget NPE\n      music: Fix some NPEs\n\nBrandt Hill (2):\n      Make Integer.class work when deserializing config\n      kingdom: add notification message for favor and coffer value\n\nBroooklyn (15):\n      ItemMapping: Add Trailblazer Graceful Ornament Kits\n      discord: Add missing Misthalin region\n      discord: Add Wild Varrock Last Man Standing regions\n      loot tracker: Add Wild Varrock Last Man Standing regions\n      worldmap: Improve cart and minecart systems tooltips (#13226)\n      slayer: Add Soul Wars imbued Slayer Helmets to slayer item set\n      clues: Add Soul Wars imbued Slayer Helmets to Emote and Skill sets\n      ItemMapping: Add Soul Wars imbues\n      chat notifications: Prevent localPlayer highlights and notifications (#13244)\n      ItemMapping: Add Trouver Parchment items and refunds\n      worldmap: Fix Grand Tree Tunnels dungeon location\n      worldmap: Add western Revenant Caves dungeon entrance\n      worldmap: Add Blisterwood tree location and requirement\n      agility: Add Darkmeyer wall shortcut\n      discord: Add Rogues\' Den bank, Salt Mine, and Waterbirth regions\n\nCyborger1 (3):\n      ground markers: Add import/export menu option toggle\n      ground markers: Add clear markers menu option\n      slayer plugin: store task in rs profile configuration\n\nDavid Uhler Brand (1):\n      chat notifications: add regex highlights\n\nDillon (1):\n      discord: add main menu status option\n\nHexagon (1):\n      Dedupe GameObjectSpawned events when simulating events\n\nHydrox6 (4):\n      friendschat: remove user count after leaving chat channel\n      config: add support for doubles\n      http-service: change pbs from int to double\n      chat commands: change pbs from int to double and support parsing them\n\nJames N (1):\n      FaloTheBardClue: Accept trimmed Dragon defender and Tzhaar-ket-om (#13317)\n\nJonathan Lee (2):\n      crowdsourcing: Add newly-found cooking messages\n      cooking: Add more chatbox messages\n\nJonathan Pritchard (1):\n      chat commands: fix hs kc patterns to match values greater than 999\n\nJordan Atwood (9):\n      timers plugin: Improve imbued heart detection\n      menu entry swapper config: Fix formatting from previous commit\n      item identification: Fix duplicate tree seed entries\n      HotColdLocation: Center some location spots\n      client: Remove shaded jar minimizing\n      npchighlight: Apply correct highlights to changed NPCs\n      Widget: Mark getChildren() as nullable\n      opponent info: Add simple interaction tests\n      Revert &quot;opponentinfo: Show health bar of actors attacking the player&quot;\n\nKyle Shepherd (1):\n      menu entry swapper: Add portal nexus teleport menu swap (#13181)\n\nMax Weber (7):\n      ConfigManager: don\'t allow access to partially loaded configs\n      Require Java 9 or higher for building\n      devtools: factor frame handling out\n      devtools: add shell window\n      rl-api: update quest scripts to 2021-3-3\n      http-api: encode json Colors as ARGB hex codes\n      http-api: encode json Instants as millis since epoch\n\nNJohnsonJ (1):\n      AgilityShortcut: Remove Catherby grapple world map tooltip (#13215)\n\nNathaniel Johnson (1):\n      mining: Add hint arrow to active daeyalt essence\n\nNicholas Anzalone (2):\n      clues: Remove duplicated coordinate clue from MapClue (#13342)\n      cannon: move wilderness skeleton cannon spot off shooting star\n\nPatrick Watts (2):\n      crowdsourcing: Improve woodcutting and cooking tracking (#13099)\n      menu entry swapper: Add fishing spot bait swap (#13203)\n\nSilverfeelin (1):\n      item identification: Add sacks (#9372)\n\nasdftemp (1):\n      item identification: Add logs and planks (#13171)\n\nchaticon (1):\n      opponentinfo: Show health bar of actors attacking the player\n\njoelewis43 (2):\n      menu entry swapper: Add Fossil Island Rowboat Dive swap (#13237)\n      SkillChallengeClue: Add Twisted Slayer Helmet to Dust devil step (#13245)\n\nmkowen1 (4):\n      item identification: Add more seeds\n      item identification: Add lunar teleport tablets\n      item identification: Add composts\n      item identification: Add bars\n\npilino1234 (2):\n      itemidentification: Add more plugin search tags\n      bankplugin: Add &quot;pin&quot; as plugin search tag\n\nsam (1):\n      SkillChallengeClue: Specify number of bars for shayzien armor set\n\nsuperiorser9 (4):\n      music: fix settings_slider_choose_onop stack mapping (#13268)\n      BankPlugin: avoid keyboard input going to input text\n      cooking: Fix POH altar burners false positive burn message (#13284)\n      object indicators: don\'t clear markers on connection lost\n</code></pre>\n'}}}]);
//# sourceMappingURL=141.d2108ed8.chunk.js.map