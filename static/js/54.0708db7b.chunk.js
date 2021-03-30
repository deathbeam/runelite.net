(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[54],{638:function(e,n){e.exports={title:"1.4.13 & 1.4.14 Release",description:"Small enhancements and world hopper, WASD camera plugin fixes",author:"Jordan",body:'<p>Minimap icons have been added for wilderness obelisk teleports and achievement\ndiary set item teleports. Thanks to <a href="https://github.com/raiyni" native="">@raiyni</a> for\ncontributing these icons.</p>\n<p><img src="/img/blog/1.4.13-Release/ardougne-cloak-teleport-icon.png" alt="ardougne cloak teleport icon">\n<img src="/img/blog/1.4.13-Release/explorers-ring-teleport-icon.png" alt="explorer\'s ring teleport icon">\n<img src="/img/blog/1.4.13-Release/fremennik-sea-boots-teleport-icon.png" alt="fremennik sea boots teleport icon">\n<img src="/img/blog/1.4.13-Release/wilderness-obelisk-teleport-icons.png" alt="wilderness obelisk teleport icons"></p>\n<p>Several agility shortcuts and obstacles have been added to the agility shortcut\nhighlighter.</p>\n<p><img src="/img/blog/1.4.13-Release/falador-wall-shortcut.png" alt="falador wall shortcut">\n<img src="/img/blog/1.4.13-Release/river-salve-shortcut.png" alt="river salve shortcut">\n<img src="/img/blog/1.4.13-Release/underwater-obstacles.png" alt="underwater obstacles">\n<img src="/img/blog/1.4.13-Release/underwater-shortcuts.png" alt="underwater shortcuts"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The WASD plugin is now smarter at deciding when to block inputs to the game</li>\n<li>Fix world hopper freezing client when trying to hop during times the game\nprevents you from hopping</li>\n<li>Add option to Corporeal Beast plugin to make left click on the Dark Energey\ncore &quot;Walk here&quot;</li>\n<li>Fix Corporal Beast plugin overlay sometimes not showing</li>\n<li>Fix Brimhaven agility alrena timer from resetting whenever an obstacle makes\nyou fall to the ground floor</li>\n<li>Fix GE plugin not to show the OSB actively traded price more reliably</li>\n<li>Fix NPCs with empty names being highlighted in some cases</li>\n<li>Fix Pest control plugin detecting shield status</li>\n<li>Time tracker stopwatches and timers now also accept more user-friendly time\nstrings, such as &quot;01h30m15s&quot;</li>\n<li>Adjusted Autumn and Winter Deadman Mode teleblock timers have been created in\nadvance of the upcoming DMM tournaments</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (16):\n      wasd plugin: pass through shift and escape\n      wasd plugin: disable key listener if not logged in\n      wasd plugin: pass through ctrl, alt, and tab\n      wasd plugin: allow input to chat dialogs\n      wasd plugin: fix slash to talk\n      wasd plugin: check chatbox input widget visibility to determine if a dialog is open\n      wasd plugin: release same keychar as pressed when changing to typing mode\n      wasd plugin: allow input to world map search when focused\n      mixins: fix friend manager mixin to implement friend manager\n      corp plugin: deprioritize attack option on dark energy core\n      barrows plugin: fix double counting price of coins\n      pest control plugin: move portal text overlay underneath progress bar\n      pest control plugin: cleanup &amp; lombokize\n      corp plugin: fix losing track of corp when it spawns during loading\n      agility plugin: fix brimhaven timer resetting when failing obstacles\n      ge plugin: more reliably show actively traded price\n\nItsSebas (3):\n      Add other side of Falador grapple wall highlight (#5028)\n      Add missing agility shortcut near North River Salve (#5048)\n      Add boss skill screenshots (#5030)\n\nJamy C (2):\n      TimeTracking: Refactor time parsing and add tests (#5050)\n      TimeTracking: Add support for intuitive time notations like &quot;1h 30m 10s&quot;\n\nJordan Atwood (3):\n      Add CHAT_SCROLLBAR_ON_LEFT Varbit\n      timers plugin: Add fall/winter DMM teleblock timers\n      screenmarker plugin: Remove extra images\n\nLotto (1):\n      worldhopper: fix spam in chatbox when trying to open switcher in bank\n\nMagic fTail (4):\n      Add Bastion and Battlemage potions\n      Fix KBD respawn timer\n      Add debugging to npc highlighter plugin\n      Change boss kill screenshot naming\n\nRobbie McLeod (1):\n      Fix sidebar hotkey leaking into game client\n\nRon Young (4):\n      Add wilderness obelisk teleport spots on map (#4937)\n      Fix pest control shield state checks (#4977)\n      Add ardougne cloak map teleport icons (#4998)\n      Add Missing Achievement Diary Teleport Map Icons (#5027)\n\nSebastiaan (1):\n      Add Fossil Island underwater agility obstacles (#5055)\n\nTomas Slusny (4):\n      Omit empty strings in NPC indicators\n      Add tests for parsing NPC list\n      Make pressing BkSPACE with empty chat exit chat\n      Remove unused Objects import in AgilityPlugin\n\nastaninger (1):\n      Fix fire surge icon and remove redundant smithing entries (#4979)\n\ngandalfthegoat (1):\n      add the fairy ring CKS to speak to Ulizius cryptic clue step\n\npsikoi (2):\n      Add activity priority to world list\n      Fix activity ordering incosistency\n\ntrimbe (1):\n      wasd plugin: use clientscript to determine what input to block\n</code></pre>\n'}}}]);
//# sourceMappingURL=54.0708db7b.chunk.js.map