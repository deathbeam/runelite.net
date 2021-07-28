(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[63],{653:function(e,n){e.exports={title:"1.4.18 Release",description:"Wintertodt plugin and virtual levels plugin",author:"Adam",body:'<p>A Wintertodt plugin was added which shows your current activity and can be\nconfigured to notify you when you become idle. It also tracks points in your\ninventory from logs or kindling and displays it. Thanks to work from\n<a href="https://github.com/jbfleischman" native="" rel="nofollow">@jbfleischman</a> for initially getting this\nstarted.</p>\n<p><img src="/img/blog/1.4.18-Release/wintertodt1.png" alt="wintertodt1">\n<img src="/img/blog/1.4.18-Release/wintertodt2.png" alt="wintertodt2"></p>\n<p>A virtual levels plugin was added which shows virtual levels and virtual skill\ntotal on the skills tab. It is off by default. Thanks to <a href="https://github.com/Joshua-F" native="" rel="nofollow">@Joshua\nFilby</a> and\n<a href="https://github.com/Nightfirecat" native="" rel="nofollow">@Nightfirecat</a> for their work on this.</p>\n<p><img src="/img/blog/1.4.18-Release/virtuallevels.png" alt="virtuallevels"></p>\n<p>There are also numerous smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Add Fairy Ring AIQ to Mudskipper Point Clue</li>\n<li>Colorize &quot;Lookup&quot; player menu entry if applicable</li>\n<li>Fix Dwarf Cannon quest start location on the world map</li>\n<li>Add notification for low fishing trawler activity</li>\n<li>Add sand to Daily Notifications plugin</li>\n<li>Add daily runes to Daily Notifications plugin</li>\n</ul>\n<p>Regarding the <a href="https://runelite.net/blog/show/2018-09-18-Worldhopper-disabled" native="" rel="nofollow">world hopper being\ndisabled</a>, we\nhave fairly thoroughly reviewed other hopping implementations and can not find\nanything with the World Hopper action forcing that would differentiable on\nJagex\'s side. Based on the\n<a href="https://github.com/runelite/runelite/commits/master/runelite-client/src/main/java/net/runelite/client/plugins/worldhopper/WorldHopperPlugin.java" native="" rel="nofollow">plugin history</a>\nthe newest addition is the Hop-To chat option from pull\n<a href="https://github.com/runelite/runelite/pull/5125" native="" rel="nofollow">#5125</a> which went into RuneLite\nrelease 1.4.15 on Aug 30. Because other clients do not have this feature, this\nis my first guess as to what the problem is.</p>\n<p>I have asked Jagex to review if there were any issues with the world hopper\nprior to Aug 30. If not, we should be able to remove the chatbox Hop-to feature and\nreenable the plugin.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>Adam (3):\n      world hopper: disable world hopper plugin\n      Add Wintertodt Plugin\n      runelite-api: add queueChangedSkill for queueing a skill change event\n\nGary (1):\n      Add Fairy Ring AIQ to Mudskipper Point Clue\n\nJordan Atwood (8):\n      hiscore plugin: Colorize &quot;Lookup&quot; player menu entry\n      Add world map surface selector and overview map widgets\n      world map overlay: Render on ABOVE_WIDGETS layer\n      world map overlay: Clip around widgets above map\n      Centralize item (de)spawn log messages\n      opponent info plugin: Fix possible onGameTick NPE\n      clue scroll overlay: Show visible emote widget area\n      Add Virtual Levels plugin\n\nLotto (1):\n      entityhider: make hidden entities not occupy the tile they\'re on\n\nMax Weber (5):\n      runescape-api: Update setWorldMapPositionTarget\'s name\n      Worldmap: Fix Dwarf Cannon start location\n      idlenotifier: Correctly warn about AFK kicking\n      banktags: Don\'t use cs2 to add menu options\n      Revert &quot;Add camera setters to Client.java and RSClient.java.&quot;\n\nRunelite auto updater (1):\n      [maven-release-plugin] prepare for next development iteration\n\nSebastiaan Vanspauwen (2):\n      MTA: Fixed alchemy\n      BA plugin: widget overlay fix\n\nShaun Dreclin (1):\n      Refactor daily task indicator plugin\n\nShaunDreclin (2):\n      Add notification for low fishing trawler activity\n      Add sand to daily task indicator\n\nTomas Slusny (5):\n      Make HiscoreClient call the OSRS hiscore API directly\n      Fix WorldMapPlugin\n      Add option for displaying only last fished fish\n      Add fishing spot display configuration\n      Return null instead of IllegalArgumentException from hiscore\n\nastaninger (1):\n      Add daily runes to Daily Notifications plugin (#5219)\n\nrbbi (1):\n      Change skill calc checkboxes to radio buttons (#4373)\n</code></pre>\n',image:"/img/blog/1.4.18-Release/wintertodt1.png"}}}]);
//# sourceMappingURL=63.e5d80959.chunk.js.map