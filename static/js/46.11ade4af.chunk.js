(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[46],{636:function(e,n){e.exports={title:"1.4.1 Release",description:"Chat recolor, redwood tree markers, and grand exchange notifications",author:"Adam",body:'<p>First, lately there have been several targeted phishing attacks against\nRuneLite, including targeted ad buys on both Google and Reddit. If in doubt,\ncross reference the site with the official GitHub and Discord. The main tell is\nthe official Windows download is an executable digitally signed by Alexander\nHenne, and not a .jar. We can generally get these sites taken down, but it\nusually takes some time to do so.</p>\n<p>Now for the update:</p>\n<p>Chat color for each chat type (public, private, clan, trade, etc.) are now\nconfigurable in the &quot;Chat Colors&quot; configuratrion.</p>\n<p><img src="/img/blog/1.4.1-Release/chatcolors.png" alt="chatcolors"></p>\n<p>The woodcutting plugin now can overlay redwood tree locations.</p>\n<p><img src="/img/blog/1.4.1-Release/redwood.png" alt="redwood"></p>\n<p>The grand exchange plugin can now notify you when something buys or sells.</p>\n<p><img src="/img/blog/1.4.1-Release/genotification.png" alt="genotification"></p>\n<p>Also a special thanks to <a href="https://github.com/sainttx" native="" rel="nofollow">@Matthew Steglinski</a> who\ncontributed Javadoc for <a href="https://github.com/runelite/runelite/pull/3236" native="" rel="nofollow">155\nfiles</a> in the API. This greatly\nimproves our <a href="https://static.runelite.net/api/runelite-api/" native="" rel="nofollow">published Javadoc</a>.</p>\n<p>Screen markers can now be assigned names, making it easy to save and reuse them\nlater without having to re-add and position them. Existing screen markers will\nneed to be deleted and readded.</p>\n<p>Full screen mode was added and is toggleable in RuneLite settings.</p>\n<p><img src="/img/blog/1.4.1-Release/fullscreen.png" alt="fullscreen"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix hiscore lookup autocomplete</li>\n<li>Fix hiscore and GE lookups getting stuck when given invalid input</li>\n<li>Improve boss timer spawn timers by start them when the NPC despawns instead of\nat the beginning of the death animation</li>\n<li>Add miscellaneous and scroll teleports to the world map plugin</li>\n<li>Skill calculator now turns actions that will become available before target\nlevel orange</li>\n<li>The bank evaluator plugin now includes the price of untradeable items\ntradeable versions</li>\n<li>Optimize clickbox calculation code</li>\n<li>Fix Vet\'ion boss timer and add KQ boss timer</li>\n<li>Add option to swap &quot;interact&quot; with &quot;empty&quot; on birdhouses</li>\n<li>Update menu swapper to support multiple fairy ring defaults</li>\n<li>Fix slayer plugin to work with NPC contact</li>\n<li>Add Bandit Camp fishing spot to fishing plugin</li>\n<li>Fix MLM plugin when it is started/stopped from within the MLM</li>\n<li>Fix UI responsiveness when closing skill calculator</li>\n<li>Add Limestone attack stone to skill calc</li>\n<li>Reset gorillas in demonic gorilla plugin on startup and world hop</li>\n<li>Add gilded altar to idle notifier</li>\n<li>Add wine making to idle notifier</li>\n<li>Add option to swap minecart menu option to travel from GE to Keldagrim</li>\n<li>Add bar dispenser clickbox overlay to blast furnace plugin</li>\n<li>Show clickbox of the Boiler in Dorgesh-Kaan agility course in the agility\nplugin</li>\n</ul>\n<p>Additionally, there were clue fixes from Eadgars-Ruse, Jordan Atwood, and Maiddog.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 26 contributors this release!</p>\n<pre><code>Adam (30):\n      pom: set updatePolicy always for runelite snapshots\n      pom: remove tomcat deploy execution\n      hiscore panel: properly error if result is null\n      ge search panel: catch cache load exception from search returning null\n      Revert &quot;boss timers: improve accuracy of boss respawn timer&quot;\n      boss timers plugin: change to use npc despawn event\n      agility plugin: fix exception on reconnect\n      poh plugin: fix exception when tile for burner is not fully visible\n      Remove actor death event, use despawn event instead\n      woodcutting plugin: timeout woodcutting sessions\n      woodcutting plugin: show redwood trees\n      world map plugin: merge jewellery teleports and magic teleports\n      world map plugin: add misc teleports\n      skill calculator: lombok some of UIActionSlot\n      skill calculator: turn indicators orange for actions that will become available before target\n      screen marker overlay: stop if preferred size is null\n      antidrag: reset drag when focus is lost\n      runelite-client: add ItemMapping to map untradeable items to tradeable versions\n      item manager: use item mapping\n      item manager: cache unable to look up on unsuccessful bulk lookup too\n      runelite-client: update bank calculation and barrows calculation to use item mapping\n      runelite-api: optimize ChatMessageType.of()\n      config manager: fix resetting configuration items with no default value\n      config panel: allow color configs with no value\n      runelite-client: add chat color config\n      runelite-client: remove chat color config from plugins\n      Revert &quot;perspective: use viewport offset in get2DGeometry&quot;\n      perspective: use viewport offset for offsetting rectangle in get2DGeometry\n      runelite-api: use lombok constructors for Vertex/Triangle\n      perspective: optimize clickbox generation\n\nAlexsuperfly (3):\n      boss timers: improve accuracy of boss respawn timer\n      boss timers: fix Vet\'ion timer to start after 2nd phase death\n      boss timers: add KQ to boss list\n\nBeefaloKing (1):\n      Stretched Fixed Mode Plugin: Add Integer Scaling option (#2863)\n\nEadgars-Ruse (2):\n      Change hot/cold overlay to only show outline of dig area (#3166)\n      Fix coordinates for venenatis hot cold clue (#3212)\n\nEthan (5):\n      Exclude ironmen from daily herb box notifications\n      Add option to swap &quot;interact&quot; with &quot;empty&quot; on birdhouses\n      Update menu swapper to support multiple fairy ring defaults\n      Add teleport scroll locations to map\n      Add notifications to Grand Exchange plugin\n\nHydrox6 (1):\n      Fix items with no Grand Exchange Price using Store Price for the right click menu instead of High Alchemy value\n\nIguaan (2):\n      slayer plugin: read bracelet charges directly from chat message\n      slayerplugin: fix current task regex and new task via npc contact regex\n\nJeremy Plsek (1):\n      enqueue most post/put/delete requests\n\nJordan Atwood (6):\n      Allow imbued Ring of Wealth for emote clue (#3230)\n      Fix location for West Ardougne emote clue (#3231)\n      Fix Grand Tree mushrooms clue\n      Improve Yanille anvil room map clue location\n      Add Wilderness Bandit Camp fishing spot\n      Fix Iban\'s Temple emote clue\n\nKelvin (1):\n      Use single DynamicGridLayout for XPTracker stats (#3432)\n\nKruithne (1):\n      skill calculator: allow XP values up to 200,000,000 rather than 188,884,740\n\nLars (3):\n      Motherlode Mine - Startup / shutdown bugs (#3124)\n      XpInfoBox - Remove min/max experience check (#3397)\n      Use screenmarker name not ID for displaying it (#3423)\n\nMagic fTail (3):\n      BossTimerPlugin: Find bosses based on id instead of name\n      More accurate respawn timers\n      MenuEntrySwapper: Reorder config items to alphabetical order\n\nMaiddog (1):\n      Fix typo in Pyramid Plunder emote clue (#3419)\n\nMatthew Steglinski (6):\n      runelite-api: Add missing documentation\n      Fix ArrayIndexOutOfBoundsException when an empty command is typed\n      devtools: Add camera position overlay\n      devtools: Add base, local, and region coordinates to LocationOverlay\n      grandexchange: Format \'Price each\' value for items in additional information layout\n      Add local player death event\n\nMorgan Lewis (3):\n      Clue Scroll Plugin: Add wording to direct users to world map\n      Dev-tools: Add location overlay to show world map position\n      Remove WorldMapOverlayTest Plugin\n\nRuben Amendoeira (6):\n      Hiscore auto-complete fix\n      Skill calcs performance improvement\n      Refactor ClientUI using CardLayout\n      Remove feed refresh button\n      Add top margin to the XP tracker error panel (#3343)\n      Add naming to screenmarkers\n\nSimon Landry (1):\n      Add Boiler to Dorgesh-Kaan obstacles IDs (#3437)\n\nTomas Slusny (11):\n      Unify NPC highlighting color settings\n      Use NpcSpawned and despawned for getting cacheNpc\n      Move private methods at bottom of NPC plugin\n      Add support for fullscreen mode\n      Change default PluginPanel layout to DynamicGrid\n      Change config TextField to TextArea\n      Move highlighted/hidden to top\n      Store markers based on epoch millis\n      Properly set preferredSize of navContainer\n      Add Limestone attack stone to skill calc\n      Update Lombok to 1.16.22\n\nTzZek (1):\n      Add making wines to idle notifications (#3441)\n\nWooxSolo (1):\n      Reset gorillas in demonic gorilla plugin on startup and world hop\n\ndrivfe (1):\n      screen markers: fix for confirm dialog appearing behind main UI window\n\niguaan (3):\n      idlenotifier: add support for gilded altar\n      timers: use correct capitalisation for antifire in settings\n      slayerplugin: fixed bracelet charge counter\n\niskarky (1):\n      Swap menu entry for minecart travel from GE to Keldagrim\n\nshmeeps (2):\n      Capitalize world map configuration names (#3301)\n      Account for slightly different dimensions of first and second/third floors (#3249)\n\nypperlig (1):\n      blast furance plugin: add bar dispenser to clickbox overlay\n</code></pre>\n',image:"/img/blog/1.4.1-Release/chatcolors.png"}}}]);
//# sourceMappingURL=46.11ade4af.chunk.js.map