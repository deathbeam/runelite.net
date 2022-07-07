(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[149],{743:function(e,n){e.exports={title:"1.8.0 Release",description:"Uncapped frame rate",author:"Adam",body:'<p>The GPU plugin has a new <code>Unlock FPS</code> option which disables the 50 FPS hard cap on the client and allows the client to render frames at the maximum rate supported by your system. For most users, this will be 60 FPS, unless you have a display and GPU which supports a higher refresh rate. The higher frame rate is applied to camera movements, like how the steam and mobile clients work, which results in a smoother feel when moving the camera with mouse or keyboard input.</p>\n<p><video src="/img/blog/1.8.0-Release/unlocked_fps.mp4" autoPlay=true muted=true loop=true playsInline=true preload="auto">\nYour browser does not support playing HTML5 video.\nYou can <a href="/img/blog/1.8.0-Release/unlocked_fps.mp4" download>download the file</a> instead.\nHere is a description of the content: Unlocked FPS\n</video></p>\n<h3>MacOS M1 Launcher</h3>\n<p>If you missed the previous blog, a native launcher for the Apple M1/M1 Pro/M1 Max is now available. If you have one of these systems and haven\'t already, we highly recommend downloading the newer launcher <a href="https://github.com/runelite/launcher/releases/download/2.2.0/RuneLite-aarch64.dmg" native="" rel="nofollow">here</a>.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Selected bank tag tabs no longer get applied to shared storage. You may additionally also search shared storage using bank tag names when a bank tag is selected</li>\n<li>The actions required in the skill calculator now no longer sometimes give incorrect results when using partial xp</li>\n<li>The <code>!pets</code> command now correctly recognizes pet chinchompas</li>\n<li>The Shared Storage button no longer overlaps the bank capacity interface</li>\n<li>A bug causing HD healthbars widths to be incorrect was fixed</li>\n<li><code>Lookup</code> was added to player names in the group ironman group list</li>\n<li><code>!kc gg</code> and <code>ggs</code> short names were added for Grotesque Guardians</li>\n<li>A bird nest tier setting was added to the Woodcutting plugin to allow only sending notifications for bird nests of a certain clue level</li>\n<li>The spec counter now has a configuration option for the bulwark special attack threshold</li>\n<li>The black <code>Loading</code> and <code>Connection lost</code> boxes now get drawn correctly in the upper left when GPU is enabled</li>\n<li>The prayer dose overlay now correctly computes how much prayer sanfew serums restore</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 11 contributors this release!</p>\n<pre><code>Adam (21):\n      api: make HashTable implement iterable\n      game event manager: send itemcontainer change events for all containers\n      api: add getItemContainer(int)\n      api: import model bottomY\n      gpu: improve model visible check\n      hiscore: simplify lookup menu option add logic\n      wiki: fix positioning wiki icon with wiki entity lookup off\n      api: add clan id to clan channel changed event\n      widget overlay: update gwd kc position\n      banktags: fix active tag being applied to shared storage\n      inventoryid: add gim shared storage inventories\n      prayer: fix sanfew prayer dose indicator\n      skillcalc: only recompute xp bonus values once when bonus changes\n      skillcalc: round bonus xp to nearest tenth\n      skillcalc: use double precision for xp\n      Add runelite_callback opcode to cache\n      gpu: fix drawing loading and connection lost boxes\n      skillcalc: use fixed point arithmetic for xp calculations\n      Bump to 1.8.0-SNAPSHOT\n      client loader: add new jagex certificate\n      gpu: add uncap fps option\n\nBrastaSauce (1):\n      hiscore: Add player lookup in group ironman tab\n\nBrianSchimert (1):\n      chat commands: Add shorthand names for Grotesque Guardians (#14305)\n\nHydrox6 (3):\n      api: add group ironman account types\n      skill calculator: fix incorrect icon for Hespori\n      interface styles: fix incorrectly sized 140px healthbar\n\nIllya Myshakov (1):\n      chat commands: fix incorrect pet chin ID\n\nKerzyte (1):\n      skill calculator: minor xp corrections\n\nTal s (1):\n      woodcutting: Add clue nest notification config (#14132)\n\nTheStonedTurtle (1):\n      spec counter: add bulwark threshold config\n\nlkmrrs (1):\n      skill calculator: Add javelins to fletching calculator (#14317)\n\nmelkypie (2):\n      banktags: fix bank equipment button and item count spacing\n      banktags: fix group storage button location\n\nshmeeps (1):\n      prayer: add blighted super restore\n</code></pre>\n'}}}]);
//# sourceMappingURL=149.705f5955.chunk.js.map