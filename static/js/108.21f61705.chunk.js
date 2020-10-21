(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[108],{685:function(e,n){e.exports={title:"1.5.42 Release",description:"Woodcutting respawn timer, pet entity hider, Twisted League support",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/Woodcutting" native="">Woodcutting plugin</a> now supports showing\nrespawn timers for chopped trees. Thanks to <a href="https://github.com/Dava96" native="">Dava96</a> for this\ncontribution.</p>\n<p><img src="/img/blog/1.5.42-Release/woodcutting-respawn-timer.gif" alt="Woodcutting plugin tree respawn timer"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Entity-Hider" native="">Entity Hider plugin</a> has an added\noption to hide the pets of other players. Thanks to <a href="https://github.com/Trevor159" native="">Trevor</a> for this\naddition!</p>\n<p><a href="https://streamable.com/d6yfl" native=""><img src="/img/blog/1.5.42-Release/hide-pets.png" alt="Entity hider pet toggle"></a></p>\n<p>We\'ve added support for Twisted Leagues:</p>\n<ul>\n<li><a href="https://github.com/runelite/runelite/wiki/Screenshot" native="">Screenshots</a> are named properly for leagues</li>\n<li><a href="https://github.com/runelite/runelite/wiki/HiScore" native="">The HiScore plugin</a> recognizes the leagues\nleaderboard and displays league points. <a href="https://github.com/runelite/runelite/wiki/Opponent-Information" native="">Opponent\nlookup</a> will use this leaderboard,\nand <a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="">changing worlds to or from a League world will properly reset your XP\nTracker</a>.</li>\n<li><a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="">Hot-cold clues found in the Twisted\nLeague</a> will properly start when read</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Death-Indicator" native="">Death Indicator\nplugin</a> has learned the Twisted League\nrespawn location and now works in Twisted Leagues.</li>\n<li>Your <a href="https://github.com/runelite/runelite/wiki/Regeneration-Meter" native="">HP regen meter</a> will update\nat the appropriate accelerated rate <a href="https://oldschool.runescape.wiki/w/Endless_Endurance" native="">if you are in the\n#endurancegang</a></li>\n<li><a href="https://github.com/runelite/runelite/wiki/Chat-History" native="">Chat history</a> will display correctly when\nlogging in to a Twisted League world</li>\n<li>Teleporting with the Kourend home teleport <a href="https://github.com/runelite/runelite/wiki/Timers" native="">will now correctly add a Home Teleport cooldown\ntimer</a></li>\n</ul>\n<p>Finally, a <a href="https://github.com/runelite/runelite/wiki/League-Chat-Icons" native="">League Chat Icons plugin</a>\nhas been added which can help players distinguish between League players and ironmen in the main\ngame. Thanks to <a href="https://github.com/hsamoht" native="">hsamoht</a> for this new plugin.</p>\n<p><img src="/img/blog/1.5.42-Release/league-chat.png" alt="leaguechat"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Chambers-of-Xeric" native="">Chambers of Xeric plugin</a> has had\nits rotation whitelist format updated. Now, instead of formatting whitelisted rotations as a list\nof bracket-encapsulated rotations (eg. <code>[muttadiles, shamans, mystics][vespula, tekton, vasa]</code>),\nthey should have the brackets removed and be put on a new line per rotation, like the following:</p>\n<pre><code>muttadiles, shamans, mystics\nvespula, tekton, vasa\n</code></pre>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li><a href="https://github.com/runelite/runelite/wiki/Object-Markers" native="">Object markers</a> marking objects which\ncan change into other objects can be properly removed</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Rune-Pouch" native="">Rune Pouch overlay</a> now displays your\nstored runes on both the normal Rune pouch and the Rune pouch (l)</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Screenshot" native="">Screenshot plugin</a> can now take\nautomatic screenshots when a player on your friends list or in your clan dies near you to help\nensure they can re-experience their death</li>\n<li>Teleport sound effects have been classified as &quot;Others\' area sounds&quot; for the purpose of muting via <a href="https://github.com/runelite/runelite/wiki/Music" native="">the\nMusic plugin</a></li>\n<li>You can now configure the <a href="https://github.com/runelite/runelite/wiki/FPS-Control" native="">FPS Control\nplugin</a> to limit your FPS to two different\namounts when the game is focused or unfocused.</li>\n<li>The <img src="https://raw.githubusercontent.com/dekvall/twemoji/runelite-emoji/runelite-emoji/1f926.png" alt="Woman face-palmingemoji">\nfacepalm emoji has been added to the <a href="https://github.com/runelite/runelite/wiki/Emojis" native="">Emojis\nplugin</a> as the emoticon <code>M-)</code></li>\n<li>The client now continues to <a href="https://github.com/runelite/runelite/wiki/RuneLite#flash-notification" native="">flash\nnotifications</a> until it\nbecomes focused (instead of clearing notifications by only mousing over the window)</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>15987632 (1):\n      entity hider plugin: add support for hiding pets\n\nAdam (34):\n      raid plugin: fix layout command room order\n      Remove SEASONAL_DEADMAN world type\n      Remove DEADMAN_TOURNAMENT world type\n      http api: update hiscore for leagues\n      api: add league world type\n      hiscore plugin: add leagues\n      world hopper: assign leagues world color\n      screenshot plugin: add League folder\n      opponent info: add league hiscore endpoint\n      xptracker: add league world type\n      chat commands: add support for league hiscores\n      rotation solver: fix to use modulus instead of remainder operator\n      clue plugin: add support for league hotcold clues\n      woodcutting plugin: add respawn timer\n      api: add welcome chat message type\n      raids plugin: fix matching rotation whitelist\n      api: use region size constant in getRegionOffset\n      object indicators: use WorldPoint getRegionX/Y\n      object markers: fix removing markers from multilocs\n      api: refactor to use NameableContainer\n      client: refactor for nameable api changes\n      clan manager: use clanmember manager find to lookup rank\n      client: add backup jav_config support\n      world client: always return non null or throw an error\n      client: use mock webserver for client config loader test\n      hostsupplier: only supply regular f2p or p2p worlds\n      chat controller: limit layouts to 16 rooms\n      raids plugin: limit layout message to 300 characters\n      api: add npc composition isInteractible\n      npc highlight: skip noninteractiable npcs\n      npc highlight: fix npc interactible check\n      keyremapping: only update chatbox input and not player name\n      client: add world service to manage world fetching\n      add leagues chat icon plugin\n\nAustin Lee (2):\n      Add Bird Houses to crafting skill calculator (#10306)\n      Add support for rune pouch (l) to rune pouch overlay (#10331)\n\nHSJ-OSRS (1):\n      screenshot plugin: add friend/clan member death screenshotting\n\nHydrox6 (1):\n      inventory grid: use correct item quantities for drag previews\n\nJay (1):\n      music plugin: reclassify teleport sfx as other players\' area effects instead of environmental area effects\n\nMax Weber (3):\n      runelite-client: use privateLookupIn for invokespecialing defaults\n      runelite-client: Use archive-patcher for the client-patch\n      ClientLoader: Don\'t force the bootstrap classloader\n\nSeth (2):\n      death indicator: add Kourend respawn region\n      regen meter: add support for endless endurance relic\n\nal3x-huang (1):\n      fpsplugin: Add multiple FPS targets for multiple modes (#10239)\n\nchestnut1693 (1):\n      loottracker plugin: fix typo\n\ndekvall (2):\n      emojis: add facepalm emoji\n      attack styles: add test for swap between bludgeon and bow\n\nemiljensen2 (1):\n      notifier: require client to be focused to cancel notifications\n\nseth (2):\n      chathistory: update welcome message matching to include leagues\n      Add kourend home teleport to timers plugin\n\nwinterdaze (1):\n      Shorten NMZ overlay text to prevent overlapping (#10241)\n</code></pre>\n'}}}]);
//# sourceMappingURL=108.21f61705.chunk.js.map