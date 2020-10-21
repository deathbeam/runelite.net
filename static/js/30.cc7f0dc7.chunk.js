(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[30],{607:function(e,n){e.exports={title:"1.3.3 Release",description:"Bank tags, item shift click configuration, and improved player indicators",author:"Adam",body:'<p>Bank tags have been added, which allow tagging items in the bank which can later\nbe searched on. Thanks to <a href="https://github.com/devdennis" native="">@devdennis</a> for this,\nand <a href="https://github.com/abextm" native="">@abextm</a> for the input dialog work.</p>\n<p><img src="/img/blog/1.3.3-Release/banktags.png" alt="banktags"></p>\n<p>You may now also customize the shift click option of any item in the inventory.\nRight click the inventory and select &quot;Configure&quot;, then select the option on the\nitem you want to use for shift click. Thanks to\n<a href="https://github.com/Kamielvf" native="">@Kamielvf</a> for this!</p>\n<p><img src="/img/blog/1.3.3-Release/shiftclick.gif" alt="shiftclick"></p>\n<p>The player indicator plugin can now render players clan ranks next to their\nnames and also show friends, teammates, and clan members in the right click menu.</p>\n<p><img src="/img/blog/1.3.3-Release/indicators.png" alt="indicators"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix prayer reoder plugin not always reodering prayers since the last update</li>\n<li>Disable kingdom of misc plugin by default</li>\n<li>Add last destination for spiritual fairy tree to menu swapper plugin</li>\n<li>Allow configuring gp thresholds for ground items highlighting</li>\n<li>Add options to disable mouse tooltips on interfaces and in chatbox</li>\n<li>Fix nmz plugin informing you your absorption is low immediately after entering\nnmz</li>\n<li>Require shift to be held for npc tag option to be visibile</li>\n<li>Fix overlays drawing over the minimap area in fixed mode</li>\n<li>Move titlebar buttons to side bar when custom chrome is disabled</li>\n<li>Add option to enable the small font on all of the overlays</li>\n<li>Fix grounditems showing items as Members only when hopping from f2p to p2p</li>\n<li>Add fishing spots at Mount Quidamortem</li>\n<li>Add turquoise slayer helmet to the slayer plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 11 contributors this release!</p>\n<pre><code>Adam (21):\n      cache: split color palette code into its own class\n      cache: add and compute hsl in underlay\n      cache: add and compute hsl in overlay\n      cache: add post to object loader\n      cache: rewrite map image dumper with logic from client\n      ground items overlay: use a loop\n      Add item layer changed event\n      ground items: use item layer changed event\n      Add maven-jar-plugin 3.0.2 to plugin management\n      overlay renderer: use copyonwritelist for overlays\n      overlay renderer: clip above scene and under widgets to viewport on fixed\n      perspective: use viewport offset in get2DGeometry\n      Revert &quot;Merge pull request #1154 from deathbeam/team-member-names&quot;\n      clanchat plugin: change cache to expire after write\n      Add clan member manager to cache clanmember ranks, use in clanchat plugin\n      Move clanmember icon logic to clanmanager\n      clanmanager: expose way to get bufferedimages for clan icons\n      player indicator overlay: render clan rank next to names\n      player indicators plugin: change color of menus\n      bank tag plugin: use chatbox input manager\n      Change MenuEntry type to int\n\nDennis (7):\n      refactor method1721 to runWidgetOnLoadListener\n      fix widget loaded event\n      expose integer node fields\n      expose widget flags\n      expose widget actions\n      add show menu option nine widget config\n      add bank tags plugin\n\nInfinitay (1):\n      Disabled kingdom plugin by default, and it\'s options\n\nKamiel (6):\n      Menu entry swapper: Swap last destination for spiritual fairy tree\n      runescape-client: export getShiftClickActionIndex\n      Add event for ItemComposition post()\n      Add shift click customization to menu swapper plugin\n      Add MenuOpened event\n      Change shift-click customization behaviour\n\nMax Weber (6):\n      ScriptEvent &gt; ScriptCallbackEvent\n      Expose methods to execute scripts\n      cache: Allow scripts to start with comments\n      Mixins: Give scripts a log.debug callback\n      Allow assembly and loading of new scripts\n      Add ChatboxInputManager to provide a RuneScape styled input box\n\nMorgan Lewis (4):\n      Add configuration options for ground item plugin\n      Add names from widgetInfo to the Widget Inspector\n      Add options to disable mouse tooltip on interfaces and chatbox\n      Fix challenge answer for Nurse Wooned clue\n\nSeth (6):\n      nmz plugin: reset absorption notification when not in NMZ\n      impling plugin: Move minimap overlay into it\'s own overlay\n      agility plugin: Add region check to lap counter\n      npc indicator: add shift right click to add tag option\n      agility plugin: remove duplicate gamestate event\n      ground item overlay: Fix boxes appearing very small with small font\n\nShaunDreclin (2):\n      Fix capitalization of \'Black demon\' in npc_health.json\n      Highlight current region in Location devtool\n\nTomas Slusny (24):\n      Move loading of session before starting plugins\n      Move viewport check below gamestate and CTP\n      Save overlay data after resetting position\n      Move title toolbar buttons to sidebar in native\n      Improve ground items plugin\n      Color the hidden items gray when in highlight mode\n      Reduce the amount of temporary objects in items\n      Invalidate ground items cache properly\n      Invalidate item manager cache on hopping and login\n      Use provider for client in item manager\n      Add option for enabling small font\n      Add support for drawing player team\'s names\n      Add mappings and api for DMM player names\n      Use built-in name rendering in player indicators\n      Merge clan chat and player indicators plugin\n      Always remove tags from player.getName()\n      Add DMM name drawing opcodes to cache\n      Add clan changed hook\n      Properly invalidate clan ranks and names\n      Add clan changed hook\n      Add support for drawing player team\'s names\n      Add mappings for DMM player names\n      Add raids fishing spot\n      Cache all ground items and then check their state\n\nWooxSolo (1):\n      Add chunk borders and map square borders to devtools\n\nrune3132 (1):\n      Added the turquoise slayer helmet to the slayer plugin\n</code></pre>\n'}}}]);
//# sourceMappingURL=30.cc7f0dc7.chunk.js.map