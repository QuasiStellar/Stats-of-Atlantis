import{d as ya,q as Za,s as ei,k as ki,n as vn,m as Ca,x as xi,r as Vi,z as Qa,B as Ma,C as ha,b as q,y as mn,o as $a}from"../chunks/scheduler.9374694c.js";import{K as et,L as nt,S as Gn,i as Bn,s as _,e as Di,c as K,a as de,d as G,p as Qn,t as F,b as $n,f as m,g as E,h as I,j as T,k as s,y as f,I as Li,G as Na,l as Fe,W as tn,z as D,r as Ae,u as Ee,v as ge,w as Ie,X as va,H as da,C as la,J as it,O as un,P as at}from"../chunks/index.207ad312.js";import{C as ve,I as dn,V as Aa,M as tt,T as rt,h as Ea}from"../chunks/states.569a5ac0.js";import{C as fn,i as ot,a as st,b as Se,u as ct}from"../chunks/card_painter.5deb87c7.js";import{f as Kn}from"../chunks/index.3a779939.js";import{c as _a}from"../chunks/index.2b48d029.js";import{w as ma}from"../chunks/index.80b591a0.js";import{H as dt}from"../chunks/control.f5b05b5f.js";function ga(n){return Object.prototype.toString.call(n)==="[object Date]"}function ca(n,i){if(n===i||n!==n)return()=>n;const e=typeof n;if(e!==typeof i||Array.isArray(n)!==Array.isArray(i))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const a=i.map((t,o)=>ca(n[o],t));return t=>a.map(o=>o(t))}if(e==="object"){if(!n||!i)throw new Error("Object cannot be null");if(ga(n)&&ga(i)){n=n.getTime(),i=i.getTime();const o=i-n;return l=>new Date(n+l*o)}const a=Object.keys(i),t={};return a.forEach(o=>{t[o]=ca(n[o],i[o])}),o=>{const l={};return a.forEach(c=>{l[c]=t[c](o)}),l}}if(e==="number"){const a=i-n;return t=>n+t*a}throw new Error(`Cannot interpolate ${e} values`)}function Ia(n,i={}){const e=ma(n);let a,t=n;function o(l,c){if(n==null)return e.set(n=l),Promise.resolve();t=l;let d=a,p=!1,{delay:y=0,duration:L=400,easing:N=Za,interpolate:M=ca}=ya(ya({},i),c);if(L===0)return d&&(d.abort(),d=null),e.set(n=t),Promise.resolve();const b=et()+y;let v;return a=nt(A=>{if(A<b)return!0;p||(v=M(n,l),typeof L=="function"&&(L=L(n,l)),p=!0),d&&(d.abort(),d=null);const R=A-b;return R>L?(e.set(n=l),!1):(e.set(n=v(N(R/L))),!0)}),a.promise}return{set:o,update:(l,c)=>o(l(t,n),c),subscribe:e.subscribe}}const lt=[{name:"Noble Blade",description:`Before the attack: You may move another
unit that is adjacent to the target 1 space.
*("Another unit" does not include you).* `,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Ceremonial Blade",description:`Cannot target minions.
Before the attack: You may move a minion
that is adjacent to the target 1 space.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Spell Break",description:`**This turn:** Enemy heroes in radius
cannot perform skills.
*(Spell Break will not stop an attack action).*`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Living Tsunami",description:`After you perform a basic skill, you
may trigger a minion battle in the
battle zone you are in.`,color:"PURPLE",level:4},{name:"Aspiring Duelist",description:`Ignore all minion defense modifiers.
*(This includes your minions, as well as the enemy minions).*`,color:"BLUE",level:1,initiative:9,primaryAction:"DEFENSE",primaryValue:5,secondaryMovement:3},{name:"Gush of Water",description:`After the attack: You may push every
adjacent token and enemy unit 1 space.
*(If you choose this option, push all units that can be pushed).*`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,secondaryMovement:4,secondaryDefense:3},{name:"Waveform",description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Expert Duelist",description:`Ignore all minion defense modifiers.
**This turn:** You are immune
to all other enemy attacks.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:6,secondaryMovement:3,item:"DEFENSE"},{name:"High Tide",description:`After the attack: You may push every
adjacent token and enemy unit 1 space.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Magical Current",description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Slippery Ground",description:`**This turn:** Enemies in radius may not move
more than 1 space with a movement action.
*(Enemies who start movement out of radius are unaffected).*`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Violent Torrent",description:`Before the attack: One enemy hero in any of
the 3 spaces in a straight line directly behind
the target discards a card, or is defeated.
*(You cannot target an empty spcae with an attack).*`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Arcane Swap",description:`Swap with a minion or a friendly hero in range.
*(Swap places with the target. This is not movement).*`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Master Duelist",description:`Ignore all minion defense modifiers.
**This turn:** You are immune
to all other enemy actions.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:6,secondaryMovement:3,item:"RANGE"},{name:"Rogue Wave",description:`After the attack: Move the target 1 space.
You may push every token and enemy
unit adjacent to you 1 space.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Stranger Tide",description:`Place yourself into a space in
range without a spawn point.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Deluge",description:`**This turn and next turn:**
Enemies in radius may not move more
than 1 space with a movement action.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Raging Waters",description:`Before the attack: One enemy hero in any of
the 5 spaces in a straight line directly behind
the target discards a card, or is defeated.
May repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Empowered Swap",description:"Swap with a unit or a token in range.",color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"AREA"}],mt=[{name:"Dead or Alive",description:`You may give a hero in radius a ::marker_bounty:: bounty
marker. The hero with a bounty marker
spends 1 additional ::life_counters:: life counter when
defeated. You may then **choose one —**
>>Defeat an adjacent enemy minion.
>>Adjacent enemy hero discards a card, if able.`,color:"GOLD",initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Side Quest",description:`Up to 1 adjacent enemy hero discards a
card, if able. Give a hero in radius
a ::marker_bounty:: bounty marker.
The hero with a bounty marker spends 1
additional ::life_counters:: life counter when defeated.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Get over here!",description:`Target a unit in a straight line, with no
obstacles between you. Then, if able,
move that unit towards you by the
shortest valid path, until it is adjacent.
**This turn:** If it's an enemy unit, it can't move.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:2},{name:"A Complicated Profession",description:`After you perform a basic skill, an adjacent
enemy hero discards a card, or is defeated.`,color:"PURPLE",level:4},{name:"A Game of Chance",description:`An enemy hero in radius with 2 or more
cards in hand discards a card facedown.
Name a color and reveal that card.
If it's not the color you named, gain 1 coin
and the enemy hero may retrieve their card.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Light Crossbow",description:`Target a minion adjacent to you, or a
hero in a straight line, with no other
units, or terrain, between you.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5},{name:"Close Call",description:`Block the attack. The attacker may swap
their attack card with a card in their hand.
~~(The card is swapped after the attack card is resolved).`,color:"GREEN",level:1,initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2},{name:"Dead Man's Hand",description:`An enemy hero in radius with 2 or more
cards in hand discards a card facedown.
Name a color and reveal that card. If it's
not the color you named, gain 2 coins and
the enemy hero may retrieve their card.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Heavy Crossbow",description:`Target a unit in range, and in a straight line,
with no other units, or terrain, between you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Narrow Escape",description:`Block the attack and move up to 1 space.
The attacker may swap their attack
card with a card in their hand.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"ATTACK"},{name:"Drinking Buddies",description:`A hero in radius may retrieve a discarded
card. **This turn:** Enemy heroes in radius may
not move to a space in a straight line from
them with a movement action.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Hand Crossbow",description:`+2 ::range_red:: Range if you target a
hero with a ::bounty_marker:: bounty marker.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Vantage Point",description:`**Next turn:** You may ignore obstacles when
choosing targets of attacks and skills.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:3,item:"INITIATIVE"},{name:"We're Not Done Yet!",description:`An enemy hero in radius with 2 or more cards
in hand discards a card facedown. Name a
color and reveal that card. If it's not the color
you named, gain 1 coin and the enemy hero
may retrieve their card. If they do, repeat once.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Impaler",description:`Target a unit in a straight line, with no friendly
units, or terrain between you. Before the
attack: Up to one enemy hero between you
and the target discards a card, or is defeated.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:5,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Perfect Getaway",description:`Block the attack and move up to 3 spaces
in a straight line. The attacker may swap
their attack card with a card in their hand.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"AREA"},{name:"Another One!",description:`A hero in radius may retrieve a discarded card.
**This turn and next turn:** Enemy heroes in
radius may not move to a space in a straight
line from them with a movement action.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Hunter-Seeker",description:`+2 ::range_red:: Range if you target a hero with
a ::bounty_marker:: bounty marker. If you do, may
repeat once on a different adjacent unit.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"High Ground",description:`You may ignore obstacles. **Next turn:**
You may ignore obstacles for movement and
when choosing targets of attacks and skills.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:4,item:"INITIATIVE"}],ut=[{name:"Onslaught",description:`After the attack: If the target was defeated,
move into the space it occupied, if able.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:3},{name:"Leap Forward",description:`Cannot target minions.
After the attack: If the target was defeated,
move into the space it occupied, if able. `,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:1,secondaryDefense:3},{name:"Bulwark",description:`**Choose one —**
>>**This round:** You and friendly units in radius
>cannot be moved, pushed, swapped, or
>forced to move by enemy heroes.
>>If your discard is empty, retrieve this card.`,color:"SILVER",initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:4},{name:"One Man Army",description:`You count as 2 minions during minion battle.
If you would be removed during minion
battle, you lose the push instead.`,color:"PURPLE",level:4},{name:"Brutal Jab",description:`**Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy minion adjacent to you
>up to 2 spaces.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6},{name:"Mad Dash",description:`Before the attack:
Move 2 spaces in a straight line.
*(If you cannot make this move, you cannot attack).*`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:7},{name:"Shield",description:`**This round:** If a friendly melee minion in
radius would be defeated, you may discard
a card. If you do, the minion is not defeated.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4},{name:"Crushing Punch",description:`Move up to 1 space, then **Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy minion adjacent to you up
>to 2 spaces.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"ATTACK"},{name:"Bullrush",description:`Before the attack: Move 2 or 3
spaces in a straight line.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:8,item:"INITIATIVE"},{name:"Bolster",description:`**This round:** If a friendly non-heavy minion in
radius would be defeated, you may discard a
card. If you do, the minion is not defeated.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Shield Bash",description:`An enemy hero adjacent to you, who
has played an attack card this turn
discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"DEFENSE"},{name:"Throwing Axe",description:`Before the attack: You may discard a card.
If you do, +2 ::range_red:: Range.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"War Drummer",description:`A friendly hero in range may retrieve
a discarded card if either you, or that
hero, is adjacent to an enemy unit.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Savage Kick",description:`Move up to 1 space, then **Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy unit adjacent to you up to
>2 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"ATTACK"},{name:"Furious Charge",description:`Before the attack: Move 2, 3 or 4
spaces in a straight line.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:3,secondaryDefense:8,item:"MOVEMENT"},{name:"Fortify",description:`**This round:** If a friendly minion in radius
would be defeated, you may discard a card.
If you do, the minion is not defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Counterattack",description:`An enemy hero adjacent to you, who
has played an attack card this turn
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"RANGE"},{name:"Throwing Spear",description:`Before the attack: You may discard a card.
+2 ::range_red:: Range if you have a card in the discard.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"AREA"},{name:"Master Skald",description:`A friendly hero in range may retrieve a
resolved or discarded card if either you,
or that hero, is adjacent to an enemy unit.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"}],ft=[{name:"Walk the Plank",description:`**Choose one —**
>>Push an enemy hero adjacent to you up
>to 3 spaces; if that hero is pushed into
>another zone, that hero discards a card,
>or is defeated.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:12,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:2},{name:"Few More Steps",description:`Push an enemy hero adjacent to you
up to 3 spaces; if that hero is pushed
into another zone, that hero discards
a card, or is defeated.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:1},{name:"Grappling Bolt",description:`Target an obstacle in range and in a straight
line, with no obstacles between you, ignore
immunity. Move any number of spaces in a
straight line towards that obstacle.`,color:"SILVER",initiative:2,primaryAction:"DEFENSE_SKILL",primaryValue:2,modifier:"RANGE",modifierValue:5},{name:"Legend of the Skies",description:`The first time each turn after you perform a
primary action, you may perform the primary
action of a card in the previous turn slot.`,color:"PURPLE",level:4},{name:"Barrage",description:`A enemy hero in radius adjacent to
another enemy unit, and not adjacent
to you, discards a card, if able.
~~(The target hero must be adjacent to their friendly unit)`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4},{name:"Daring Strike",description:`Before the attack: You may move
1 space and target a unit adjacent to
you in the direction of the move;
if you do, gain +2 ::attack_red:: Attack.
Otherwise, target a unit adjacent to you.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6},{name:"Brace for Impact",description:`Move 3 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero. That hero discards a card, if able.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2},{name:"Bombardment",description:`A enemy hero in radius adjacent to
another enemy unit, and not adjacent
to you, discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Bold Thrust",description:`Before the attack: You may move 1 or 2
spaces in a straight line and target a unit
adjacent to you in the direction of the move;
if you do, gain +2 ::attack_red:: Attack.
Otherwise, target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Ramming Speed",description:`Move 3 or 4 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero. That hero discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"X Marks the Spot",description:`Place a coin in a space in radius.
**End of turn:** You may place yourself in
a space with a coin. Any hero in a space
with a coin gains 1 coin. Remove the coin.
~~(A coin is not an obstacle. The space with a coin is empty.)`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Evasive Shot",description:`Target a unit in range in a straight line, with
no other units, or terrain, between you.
After the attack: Move up to 2 spaces in a
straight line directly away from the target.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Mediocre!",description:`If the attacker has a card in their discard,
block the attack. If you do, the attacker
discards a card, if able.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"ATTACK"},{name:"Broadside",description:`A enemy hero in radius adjacent to
another enemy unit, and not adjacent
to you, discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Fearless Lunge",description:`Before the attack: You may move 1, 2 or 3
spaces in a straight line and target a unit
adjacent to you in the direction of the move;
if you do, gain +3 ::attack_red:: Attack.
Otherwise, target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Crashland",description:`Move 3, 4 or 5 spaces in a straight
line, ignoring obstacles, to a space
adjacent to an enemy hero.
That hero discards a card, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"MOVEMENT"},{name:"A Fistful of Coins",description:`Place a coin in up to 2 spaces in radius.
**End of turn:** You may place yourself in a
space with a coin. Heroes in a space with
a coin gain 1 coin. Remove the coins.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Thumble Shot",description:`Target a unit in range in a straight line, with no
other units, or terrain, between you. After the
attack: Move up to 2 spaces in a straight line.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Pathetic!",description:`If the attacker has a card in their discard,
block the attack. If you do, the attacker
discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"AREA"}],pt=[{name:"Dread Razor",description:`+1 ::range_gold:: Range if you are adjacent to
an empty minion spawn point in the
battle zone. Target a unit in range.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:1,secondaryDefense:1},{name:"Rusty Razor",description:`Cannot target minions.
+1 ::range_gold:: Range if you are adjacent to an empty
minion spawn point in the battle zone. `,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:1,secondaryDefense:1},{name:"Death Trap",description:`You may remove a friendly minion in radius.
One enemy hero in radius who is adjacent
to an empty minion spawn point in the
battle zone, discards a card, if able.`,color:"SILVER",initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:1},{name:"Tide of Darkness",description:`Whenever you perform an action, all spaces
count as if they are in a battle zone
and have a minion spawn point.`,color:"PURPLE",level:4},{name:"Shield of Decay",description:`+3 ::defense_blue:: Defense if there are 2 or more
empty minion spawn points in
radius in the battle zone.`,color:"BLUE",level:1,initiative:10,primaryAction:"DEFENSE",primaryValue:3,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3},{name:"Littlefinger of Death",description:`Target a unit in range. +2 ::attack_red:: Attack if you
target a hero with a card in the discard.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:1,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:3},{name:"Dark Ritual",description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 1 coin.
*(Removing the minion is optional!)*`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Vampiric Shield",description:`You may remove a friendly minion in radius.
+3 ::defense_blue:: Defense if there are 2 or more
empty minion spawn points in
radius in the battle zone.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:4,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"ATTACK"},{name:"Finger of Death",description:`Target a unit in range. +3 ::attack_red:: if you
target a hero with a card in the discard.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:1,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:"DEFENSE"},{name:"Darker Ritual",description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 2 coins.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Drain Essence",description:`Perform a non-attack action of a card in
the discard of an enemy hero in radius;
apply no item bonuses.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Burning Skull",description:`Target a unit in range. After the attack:
Push every enemy unit adjacent to the target
1 space away from the target's space.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:6,item:"INITIATIVE"},{name:"Necromancy",description:`If an enemy hero in radius has a card in
the discard, respawn a friendly minion in
an adjacent spawn point in the battle zone.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Aegis of Doom",description:`You may remove a friendly minion in radius.
If there are 2 or more empty minion spawn
points in radius in a battle zone +4 ::defense_blue::
Defense and **This turn:** You are immune.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValue:5,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"RANGE"},{name:"Middlefinger of Death",description:`Target a unit in range. +3 ::attack_red:: if you
target a hero with a card in the discard.
**This turn:** The target cannot retrieve cards.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:"AREA"},{name:"Darkest Ritual",description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 2
coins, and you may retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Soul Siphon",description:`Perform an action of a card in the
discard of an enemy hero in radius,
apply no item bonuses.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Blazing Skull",description:`Target a unit in range. Before the attack:
Push every enemy unit adjacent to the
target 1 space away from the target's space.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:6,item:"MOVEMENT"},{name:"Necromastery",description:`If an enemy hero in radius has a card in
the discard, respawn a friendly minion in
a spawn point in radius in the battle zone.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"}],yt=[{name:"Angry Strike",description:`Target a unit adjacent to you. +2 ::attack_gold:: Attack
if you have exactly one card in the discard.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:3},{name:"Angry Swipe",description:`Target a hero adjacent to you. +2 ::attack_gold:: Attack
if you have exactly one card in the discard.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Chilling Howl",description:`You may discard a resolved card in the
previous turn slot. **This round:** Enemy
heroes in radius cannot fast travel, or move
more than 2 spaces with a movement action.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"Death Grip",description:`While you are adjacent to exactly one enemy
hero, that hero cannot move or be moved,
placed, or swapped and you cannot be
moved, placed or swapped by enemy heroes.`,color:"PURPLE",level:4},{name:"Menace",description:`Move an enemy unit in radius to a space
outside of radius by the shortest valid path.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:1,secondaryMovement:3,secondaryDefense:6},{name:"Trace",description:`Before the attack: If you have exactly
one card in the discard, you may move
up to 1 space to a space adjacent to
an enemy hero and target that hero.
Otherwise, target a unit adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:5},{name:"Hold Ground",description:`If there is an enemy hero in range,
you may retrieve a discarded card.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Threaten",description:`Move an enemy unit in radius to a space
outside of radius by the shortest valid path.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Chase",description:`Before the attack: If you have exactly
one card in the discard, you may move
up to 2 spaces to a space adjacent to
an enemy hero and target that hero.
Otherwise, target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Make a Stand",description:`If there is an enemy hero in range,
you may retrieve a discarded card.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Shields Up!",description:`**This round:** You and friendly units in
radius are immune to ranged actions of
enemy heroes outside of radius. Cancel
this effect if you fast travel, or move.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:6,modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"ATTACK"},{name:"Blunt Force",description:`Target a unit adjacent to you. After the attack:
you may move up to 2 spaces to a space
adjacent to the nearest enemy hero.
Push that hero up to 2 spaces.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Light Pilum",description:`An enemy hero in range, not adjacent
to you, discards a card, if able.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Terrify",description:`Move an enemy unit in radius to a space
outside of radius by the shortest valid path.
If you do, **This turn:** That hero cannot move
back into radius with a movement action.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Hunt Down",description:`Before the attack: If you have exactly
one card in the discard, you may move
up to 3 spaces to a space adjacent to
an enemy hero and target that hero.
Otherwise, target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:6,item:"RANGE"},{name:"Battle Ready",description:`If there is an enemy hero in range,
you may retrieve a discarded card.
**End of the next turn:** May repeat once.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Form Testudo!",description:`**This round:** You and friendly units in
radius are immune to ranged actions
of enemy heroes outside of radius.
Cancel this effect if you fast travel, or
move more than 2 spaces in a single turn.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:7,modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"ATTACK"},{name:"Send Flying",description:`Target a unit adjacent to you. After the attack:
you may move up to 3 spaces to a space
adjacent to the nearest enemy hero.
Push that hero up to 2 spaces.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:8,item:"AREA"},{name:"Heavy Pilum",description:`An enemy hero in range, not adjacent
to you, discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"}],ht=[{name:"Fight and Flight",description:`If your discard is empty, **choose one —**
>>An enemy hero adjacent to you discards a
>card, if able. You then move 2 spaces in a
>straight line, if able.
>>Defeat a non-heavy minion adjacent to you.`,color:"GOLD",initiative:13,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:1},{name:"Fight or Flight",description:`If discard is empty, an adjacent
enemy hero discards a card, if able. You
then move 2 spaces in a straight line, if able.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:1},{name:"Hurry up!",description:`If your discard is empty, set the printed
::initiative_silver:: Initiative value of an unresolved card
of a hero in range to 11, until it is resolved.
**This turn:** If that hero performs a
movement action, that hero must move in
a straight line and the full distance, if able.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:1},{name:"The Ultimate Trick",description:`You choose the action, and how
it is performed for a hero you
target with the "Hurry Up!".`,color:"PURPLE",level:4},{name:"Unexpected Journey",description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero,
regardless of radius, if able.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4},{name:"Helping Hand",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
to a friendly hero.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:5},{name:"Little to Gain",description:`If yoy have no cards in the discard, block
the attack. Discard your unresolved card,
if you have one and and place yourself on
a spawn point in your throne zone, if able.
Each enemy hero gains 1 coin.`,color:"GREEN",level:1,initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3},{name:"There and Back Again",description:`Swap with an enemy unit in radius.
**This turn:** That unit is immune.
**End of turn:** Swap with that unit,
regardless of radius, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Even the Odds",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
>to a friendly hero.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:"INITIATIVE"},{name:"Barely a Nuisance",description:`If yoy have no cards in the discard, block
the attack and place yourself on a spawn
point in your throne zone, if able.
Each enemy hero gains 1 coin.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"This Way!",description:`A friendly hero in radius chooses a distance
of 1 or 2. You choose a direction. You both
move that number of spaces in the chosen
direction, if able; stop if you reach an obstacle.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Outnumber",description:`+1 ::attack_red:: Attack for each friendly
unit adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:1,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:3,item:"DEFENSE"},{name:"Hear Nothing",description:`Swap with an enemy hero in radius.
Move up to 1 space.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"},{name:"Safe Travels",description:`Swap with an enemy unit in radius.
**This turn:** You and that unit are immune.
**End of turn:** Swap with that unit,
regardless of radius, if able.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Trusted Sidekick",description:`**Choose one, or both —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
>to a friendly hero.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:"MOVEMENT"},{name:"Killing Joke",description:`If yoy have no cards in the discard, block the
attack and place yourself on a spawn point in
your throne zone, if able. If you do, retrieve
this card. Each enemy hero gains 1 coin.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"DEFENSE"},{name:"That Way!",description:`A friendly hero in radius chooses a distance
of 1, 2, or 3. You choose a direction. You both
move that number of spaces in the chosen
direction; stop if you reach an obstacle.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Pile On",description:`+1 ::attack_red:: Attack for each friendly unit
adjacent to you. If you target a hero,
may repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:4,item:"AREA"},{name:"See Nothing",description:`Move up to 1 space. Swap with an enemy
hero in radius. Move up to 1 space.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"}],vt=[{name:"Chaos Bolt",description:`::tiebreaker_blue::: Target a non-adjacent minion in range.
---
::tiebreaker_orange:: Target a non-adjacent hero in range.
~(Effect is based on the visible side of the Tie Breaker coin).`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Unreliable Jolt",description:`::tiebreaker_blue::: Target an adjacent hero in range.
---
::tiebreaker_orange:: Target a non-adjacent hero in range.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Moment of Equilibrium",description:`Flip the Tie Breaker coin to a side of your
choice. **This turn and next turn:**
The coin is not flipped after a tie.`,color:"SILVER",initiative:12,primaryAction:"SKILL",secondaryDefense:3},{name:"Chaos Incarnate",description:`After you perform a primary action, you may
flip the Tie Breaker token to the other side
and repeat that action once, if able.`,color:"PURPLE",level:4},{name:"Abrupt Combustion",description:`::tiebreaker_blue::: An enemy hero in radius, adjacent to a
token, or a minion, discards a card, If able.
---
::tiebreaker_orange:: An adjacent enemy hero
discards a card, if able.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4},{name:"Playing with Fire",description:`::tiebreaker_blue::: Target a hero in a straight line.
---
::tiebreaker_orange:: Target a hero not in a straight line.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5},{name:"Path of Ashes",description:`::tiebreaker_blue::: Move up to 2 spaces in a straight line.
Place a ::magma_token:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 2 magma tokens in radius
adjacent to another magma token, if able.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Spontaneous Immolation",description:`::tiebreaker_blue::: An enemy hero in radius, adjacent to a
token, or a minion, discards a card, If able.
---
::tiebreaker_orange:: An adjacent enemy hero
discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Erratic Fireblast",description:`::tiebreaker_blue::: Target a unit in a straight line.
---
::tiebreaker_orange:: Target a unit not in a straight line.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"INITIATIVE"},{name:"Path of Cinders",description:`::tiebreaker_blue::: Move up to 3 spaces in a straight line.
Place a ::magma_token:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 3 magma tokens in radius
adjacent to another magma token, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Searing Heat",description:`::tiebreaker_blue::: Move an adjacent enemy
unit up to 3 spaces.
---
::tiebreaker_orange:: Move a non-adjacent enemy
unit in radius up to 1 spaces.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"},{name:"Crack of Doom",description:`::tiebreaker_blue::: Target a unit at a maximum range.
---
::tiebreaker_orange:: Target an adjacent unit.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"DEFENSE"},{name:"Unstable Portal",description:`::tiebreaker_blue::: You swap with a friendly unit in radius.
---
::tiebreaker_orange:: You swap with an enemy unit in radius.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Violent Conflagration",description:`::tiebreaker_blue::: An enemy hero in radius,
adjacent to a token, or a minion,
discards a card, or is defeated.
---
::tiebreaker_orange:: An adjacent enemy hero
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"RANGE"},{name:"Loosely-Aimed Firebolts",description:`::tiebreaker_blue::: Target a unit in a straight line.
Repeat once on a different hero.
---
::tiebreaker_orange:: Target a unit not in a straight line.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"MOVEMENT"},{name:"Path of Flames",description:`::tiebreaker_blue::: Move up to 4 spaces in a straight line.
Place a ::magma_token:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 4 magma tokens in radius
adjacent to another magma token, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Scorching Blaze",description:`::tiebreaker_blue::: Move an adjacent enemy unit up to 4
spaces. Repeat once on a different target.
---
::tiebreaker_orange:: Move a non-adjacent enemy
unit in radius up to 2 spaces.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Imminent Eruption",description:`::tiebreaker_blue::: Target a unit at a maximum range.
---
::tiebreaker_orange:: Target an adjacent unit.
Repeat once on a minion.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:8,item:"AREA"},{name:"Chaos Gate",description:`::tiebreaker_blue::: You swap with a friendly unit in radius.
---
::tiebreaker_orange:: You swap with an enemy unit in radius.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:2,item:"DEFENSE"}],At=[{name:"Fast as Lightning",description:`After the attack: You may swap this card
with a resolved or discarded attack card
and apply that card's text.`,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:"Chop Down",description:`Cannot target minions.
After the attack: You may swap this card
with a resolved or discarded attack card
and apply that card's text.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Smoke Bomb",description:`Place a ::smoke_bomb_token:: smoke bomb token in radius.
Units can move through the smoke bomb.
Enemy heroes cannot target another unit
if there is a smoke bomb on a straight line
between them and the target.`,color:"SILVER",initiative:12,primaryAction:"DEFENSE_SKILL",primaryValue:2,modifier:"AREA",modifierValue:3},{name:"Flurry of blows",description:`After you perform a movement action,
all adjacent enemy heroes discard
a card, if able.`,color:"PURPLE",level:4},{name:"Trip Mine",description:`Place 2 mine tokens, 1 ::blast_token:: blast and 1 ::dud_token::
dud, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Crane Stance",description:`After the attack: Push an adjacent
enemy hero up to 1 space.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6},{name:"Poof!",description:`Swap with a mine, a grenade,
or a smoke bomb in radius.
If you do, block the attack.`,color:"GREEN",level:1,initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"AREA",modifierValue:3,secondaryMovement:2},{name:"Cluster Mine",description:`Place 3 mine tokens, 1 ::blast_token:: blast and 2 ::dud_token::
duds, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Tiger Stance",description:`After the attack: Push an adjacent
enemy hero up to 2 spaces.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Vanish",description:`Swap with a mine, a grenade, or a
smoke bomb in radius. If you do, when
used as a defense, block the attack.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"DEFENSE_SKILL",primaryValueSign:"EXCLAMATION",modifier:"AREA",modifierValue:3,secondaryMovement:2,item:"ATTACK"},{name:"Death Grenade",description:`Place a ::grenade_token:: grenade token into a space in
range, not adjacent to you. **End of turn:**
An enemy hero adjacent to the grenade
discards a card, if able, remove the grenade.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Viper Stance",description:`After the attack: You may swap with a
smoke bomb or a mine in radius.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:4,secondaryDefense:4,item:"INITIATIVE"},{name:"Inner Strength",description:`If your discard is empty, **This round:** Double
your item bonuses. If you discard a card,
cancel this effect after the action is resolved.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Mine Field",description:`Place 3 mine tokens, 2 ::blast_token:: blasts and 1 ::dud_token::
dud, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"AREA"},{name:"Dragon Stance",description:`After the attack: Move up to 1 space to a
space adjacent to the target, if able. Push
an adjacent enemy hero up to 3 spaces.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Ruse",description:`Swap with a mine, a grenade, or a smoke
bomb in radius. If you do, when used as
a defense, block the attack and you may
retrieve a resolved or discarded silver card.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"DEFENSE_SKILL",primaryValueSign:"EXCLAMATION",modifier:"AREA",modifierValue:3,secondaryMovement:2,item:"DEFENSE"},{name:"Holy Death Grenade",description:`Place a ::grenade_token:: grenade token into a space in
range, not adjacent to you. **End of turn:** An
enemy hero adjacent to the grenade discards
a card, or is defeated, remove the grenade.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"MOVEMENT"},{name:"Cobra Stance",description:`After the attack: You may swap with
a smoke bomb or a mine in radius.
If you do, repeat once on a different hero.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"RANGE"},{name:"Perfect Self",description:`You may retrieve a discarded card. If your
discard is empty, **This round:** Double your
item bonuses. If you discard a card, cancel
this effect after the action is resolved.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"ATTACK"}],Et=[{name:"Watch Me Soar",description:`You may move through obstacles.
**This turn:** You are immune to non-ranged
attacks and skills. Ignore the effects of
tokens. Other units may move through you.`,color:"GOLD",initiative:9,primaryAction:"MOVEMENT",primaryValue:5,secondaryDefense:6},{name:"???",description:`You may move through obstacles.
**This turn:** You are immune to non-ranged
attacks and skills. Ignore the effects of
tokens. Other units may move through you.`,color:"GOLD",handicapped:!0,initiative:8,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:5},{name:"Swoop In",description:`Place yourself into a space in radius,
adjacent to an enemy hero. **This turn:**
Heroes in radius must attack you, if able,
when performing an attack action. The first
time you discard a card, gain 2 coins.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Power Overwhelming",description:`You may move through obstacles.
Your actions with **"Next turn"**
active effects count as if they had a
**"This round"** active effect instead.`,color:"PURPLE",level:4},{name:"Sudden Breeze",description:`Move up to 3 spaces in a straight line
ignoring the obstacles.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3},{name:"Challenge Accepted",description:`Target a unit adjacent to you.
After the attack: If the target defends
successfully, gain 2 coins.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:1,secondaryDefense:2},{name:"Focus",description:`**Next turn:** After you resolve a skill,
you may repeat it once.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:4},{name:"Gust of Wind",description:`Move up to 3 spaces in a straight line
ignoring obstacles. You may place 1 unit
moved through into a space adjacent to you.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Matter of Honor",description:`Target a unit adjacent to you.
After the attack: If the target defends
successfully, gain 3 coins.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:1,secondaryDefense:2,item:"INITIATIVE"},{name:"Discipline",description:`**Next turn:** After you resolve an attack or a
skill, you may repeat it once. Cannot attack
the same hero twice this way.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:5,item:"INITIATIVE"},{name:"Living Tornado",description:`Swap two enemy units in radius,
not adjacent to you.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Power Shot",description:`Target a unit in range. After the attack: If the
target is not adjacent to you, you may move
it 1 space, to a space farther away from you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1,item:"DEFENSE"},{name:"Dash and Slash",description:`**Next turn:** The first enemy hero you move
through discards a card, if able. If a hero
discards a card this way, gain 1 coin.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:7,item:"ATTACK"},{name:"Crushing Squall",description:`Move up to 4 spaces in a straight line
ignoring obstacles. You may place 1 unit
moved through into a space adjacent to you.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"RANGE"},{name:"Worthy Opponent",description:`Target a unit adjacent to you. If you target a
hero, that hero cannot choose to not defend.
After the attack: If the target defends
successfully, gain 4 coins.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:1,secondaryDefense:3,item:"INITIATIVE"},{name:"Mastery",description:`**Next turn:** After you resolve an action,
you may repeat it once. Cannot attack
the same hero twice this way.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"DEFENSE_SKILL",primaryValue:5,secondaryMovement:3,item:"DEFENSE"},{name:"Storm Spirit",description:`Swap with an enemy unit in radius, not
adjacent to you, or swap two enemy
units in radius, not adjacent to you.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"},{name:"Thunder Shot",description:`Target a unit in range. After the attack:
If the target is not adjacent to you, you
may move it 1 space, to a space farther
away from you, up to two times.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:2,item:"AREA"},{name:"Death from Above",description:`**Next turn:** The first enemy hero you
move through this turn discards a card,
or is defeated. If a hero discards a
card this way, gain 2 coin.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"DEFENSE_SKILL",primaryValue:7,secondaryMovement:3,item:"ATTACK"}],gt=[{name:"Mind Grip",description:`**Choose one —**
>>Perform the primary action of the card in
>the previous turn slot of an enemy hero in
>range; apply no item bonuses. If you would
>place a token, place an illusion token
>instead. Ignore effects that give markers.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Mind Probe",description:`Perform the primary action of a non-attack
card in the previous turn slot of an enemy
hero in range; apply no item bonuses. If you
would place a token, place an illusion token
instead. Ignore effects that give markers.`,color:"GOLD",handicapped:!0,initiative:8,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Diabolical Laughter",description:`Laugh diabolically. If you do, **choose one —**
>>You swap with an illusion token in radius.
>>You swap with a friendly minion in radius.
>>You are defeated. Enemies gain no coins.
>>**Next turn:** Gain +2 ::initiative_silver:: Initiative.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:4},{name:"What the Hell Are You?",description:`If you would be defeated as part of your own
action, first defeat all enemy minions in radius
and enemy heroes in radius discard a card, or
are defeated. Spend no life counters.`,color:"PURPLE",level:4,modifier:"AREA",modifierValue:2},{name:"Imbue Doubt",description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5},{name:"Assume Control",description:`**Choose one —**
>>Before the attack: Move a friendly minion in
>range up to 3 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7},{name:"Fleeting Image",description:`Place an ::illusion_token:: illusion token in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.
~(Complete the action causing the discard before the swap).`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Time to Reconsider",description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"DEFENSE"},{name:"Direct Control",description:`**Choose one —**
>>Before the attack: Move a friendly minion in
>range up to 4 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:"INITIATIVE"},{name:"Multiple Projections",description:`Place up to 2 ::illusion_token:: illusion tokens in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Crack in Reality",description:`Split the board with a straight line of spaces
drawn through your space: **This turn:**
Units on either side of the line are immune to
actions of units on the opposite side of the line.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Twist Fate",description:`Target a unit in range. After the attack:
If you target a hero, you may swap any
two of their resolved cards.
~(Any active effects on the swapped cards are canceled).`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Phantasmal Warrior",description:`Place an ::illusion_token:: illusion token in radius. **This**
**round:** While you are performing actions, the
illusion tokens count as friendly melee minions.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"An Illusion of Choice",description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.
May repeat once on the same Hero.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"DEFENSE"},{name:"Master of Puppets",description:`**Choose one, or both**, in any order **—**
>>Before the attack: Move a friendly minion in
>range up to 4 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:"MOVEMENT"},{name:"Master Of Illusions",description:`Place up to 3 ::illusion_token:: illusion tokens in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Shift Reality",description:`Split the board with a straight line of spaces
drawn through your space: **This turn:** You are
immune to actions of units on either side of
the line. All other units are immune to actions
of units on the opposite side of the line.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Devious Scheme",description:`Target a unit in range. After the attack:
If you target a hero, you may swap
any two of their resolved, unresolved,
or discarded cards.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:"AREA"},{name:"Phantasmal Colossus",description:`Place an ::illusion_token:: illusion token in radius. **This**
**round:** Illusion tokens are immune to enemy
actions. While you are performing actions, the
illusion tokens count as friendly melee minions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"RANGE"}],It=[{name:"Point Blank Shot",description:`After the attack: If the target
is adjacent, push the target 1 space.
*(A unit pushed into an obstacle will stop. This is a valid push)* `,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Bang",description:`Cannot target minions. After the attack: If the
target is adjacent, push it 1 space, if able. `,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Back to Back",description:`You may swap with a friendly minion
adjacent to you. **This turn:** You and friendly
heroes in radius gain +1 ::defense_silver:: Defense
if adjacent to one or more friendly minions.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:2},{name:"Big Sodding Gun",description:`Your basic attack has +2 ::range_gold:: Range and
+2 ::attack_gold:: Attack. If you push an enemy hero,
that hero discards a card, or is defeated.`,color:"PURPLE",level:4},{name:"Basic Drill",description:`**This round:** When you, or a friendly hero
performs a basic attack, friendly minions in
radius, including the immune ones, reduce the
defense total as if they were ranged minions.`,color:"BLUE",level:1,initiative:9,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Quickdraw",description:"Target a non-adjacent unit.",color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6},{name:"Command",description:`Move any 1 friendly minion in radius up to
2 spaces; ignore heavy minion immunity.
*(You may move a heavy minion with this skill).*`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2},{name:"Battle Drill",description:`**This round:** Friendly minions in radius,
including the immune ones, reduce the
defense total as if they were ranged minions.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryDefense:4,item:"ATTACK"},{name:"Gunslinger",description:`Target a non-adjacent unit.
+2 ::attack_red:: Attack if the target hero
played an attack card this turn.
*(A revealed card is "played" even if it's not resolved yet).*`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Control",description:`Move any 1 friendly minion in radius up to
3 spaces; ignore heavy minion immunity.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Close Support",description:`If you are adjacent to a friendly minion, an
enemy hero in radius discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Shootout",description:`Target a unit in range. After the attack: If you
defeated a minion with this attack, and there
is no enemy hero in range, you may remove
a non-heavy enemy minion adjacent to you.
*(You gain no coins for removing a minion.)*`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Lead the Charge",description:`If you are adjacent to a friendly minion,
block the attack.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"},{name:"Field Promotion",description:`**This round:** Friendly minions in radius,
including the immune ones, reduce the
defense total as if they each were both
a ranged minion and a melee minion.
*(This can reduce the defense total by up to 2 per minion.)*`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryDefense:4,item:"ATTACK"},{name:"Dead Shot",description:`+2 ::attack_red:: Attack if the target hero
played an attack card this turn.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Tactical Advantage",description:`Move any 1 friendly minion in radius up to
3 spaces; ignore heavy minion immunity.
May repeat once.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Covering Fire",description:`If you are adjacent to a friendly minion,
an enemy hero in radius discards a
card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"RANGE"},{name:"Bullet Hell",description:`Target a unit in range. After the attack:
If you defeated a minion with this attack, and
there is no enemy hero in range, you may
remove a non-heavy enemy minion in range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"MOVEMENT"},{name:"Plot Armor",description:`If you are adjacent to a friendly minion,
block the attack and **This turn:** You are
immune to all other enemy action.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"}],Tt=[{name:"Hit and Run",description:`Cannot attack if adjacent to an enemy unit.
After the attack: You may fast travel, if able.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:1},{name:"Keep the Distance",description:`Cannot attack if adjacent to an enemy unit.
Target an enemy hero. After the attack: You
may fast travel within the same zone, if able.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Trailblazer",description:`If not adjacent to an enemy unit, you may
move up to 4 spaces in a straight line to a
space not adjacent to an enemy unit, if able.`,color:"SILVER",initiative:13,primaryAction:"SKILL",secondaryDefense:1},{name:"Wild Hunt",description:`Each time before you perform an action
you may move 2 spaces in a straight line.`,color:"PURPLE",level:4},{name:"Grasping Roots",description:`**This turn:** Enemy heroes in radius adjacent
to terrain cannot fast travel, or move more
than 1 space with a movement action.`,color:"BLUE",level:1,initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"Snap Shot",description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. Target a hero in range,
or a minion adjacent to you and in range.
~~(If your range is below 1, you cannot perform this action).`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,modifierValueSign:"MINUS",secondaryMovement:5,secondaryDefense:5},{name:"Disorient",description:`Move an adjacent enemy unit up to
1 space. If you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:1},{name:"Entangling Vines",description:`**This turn:** Enemy heroes in radius
adjacent to terrain, or to their friendly
hero, cannot fast travel, or move more than
1 space with a movement action.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryDefense:3,item:"DEFENSE"},{name:"Opportunity Shot",description:`-2 ::range_red:: Range for every unit adjacent
to the target, including you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:4,modifierValueSign:"MINUS",secondaryMovement:5,secondaryDefense:5,item:"INITIATIVE"},{name:"Divert Attention",description:`Move an adjacent enemy unit up to
2 spaces. If you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Warning Shot",description:`If not adjacent to an enemy unit,
**End of turn:** An enemy hero in radius,
discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Long Shot",description:"Target a unit at maximum range.",color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:"DEFENSE"},{name:"Fae Healing",description:`If you are not adjacent to an enemy unit,
another hero in radius may retrieve a
discarded card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Grappling Branches",description:`**This turn:** Enemy heroes in radius
adjacent to terrain, or to their friendly
unit, cannot fast travel, or move more
than 1 space with a movement action.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"DEFENSE"},{name:"Clear Shot",description:`-2 ::range_red:: Range for every unit adjacent
to the target, including you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:5,modifierValueSign:"MINUS",secondaryMovement:5,secondaryDefense:6,item:"INITIATIVE"},{name:"Lead Astray",description:`Move an adjacent enemy unit up to
3 spaces. If you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"MOVEMENT"},{name:"Treetop Sentinel",description:`If not adjacent to an enemy unit,
**End of turn:** An enemy hero in radius,
discards a card or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Rain of Arrows",description:`Target a unit at maximum range.
If you target a hero, may repeat
up to two times on different heroes.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:5,secondaryDefense:5,item:"AREA"},{name:"Nature's Blessing",description:`If you are not adjacent to an enemy unit,
you and up to one hero in radius may
retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"RANGE"}],bt=[{name:"Reload!",description:`**Choose one —**
>>Defeat a minion adjacent to you.
>>Perform the primary action of the resolved
>card in your previous turn slot.`,color:"GOLD",initiative:6,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:1},{name:"???",description:`Perform the primary action of the resolved
card in your previous turn slot.`,color:"GOLD",handicapped:!0,initiative:5,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:1},{name:"Bounce",description:`Swap this card with a red or a gold card
in your hand or discard. If you do, you may
push an enemy unit adjacent to you 1 space,
then move 2 spaces in a straight line, if able.`,color:"SILVER",initiative:13,primaryAction:"SKILL",secondaryDefense:2},{name:"Bullet Time",description:`After you perform any action on your Gold
card, you may perform an action on your
Gold card again; it can be the same action.
Cannot target the same enemy hero twice.`,color:"PURPLE",level:4},{name:"Steam Jump",description:`Place yourself into a space in a straight line
and at maximum radius. You may then push
an enemy unit adjacent to you 1 space.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3},{name:"Snipe",description:`Target a unit in a straight line
and at maximum range.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5},{name:"Suppress",description:`A non-adjacent enemy hero in radius,
who is not adjacent to terrain, or a
token, discards a card, if able.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Assault Jump",description:`Place yourself into a space in a straight line in
radius and not adjacent to you. You may then
push an enemy unit adjacent to you 1 space.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Prepared Shot",description:"Target a non-adjacent unit in a straight line.",color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Pin Down",description:`A non-adjacent enemy hero in radius,
who is not adjacent to terrain, or a
token, discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Tactical Jump",description:`You may place yourself into a space in
radius not in a straight line from you.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:1,item:"DEFENSE"},{name:"Shotgun",description:`+3 ::attack_red:: Attack if you target an adjacent unit.
Before the attack: Up to one enemy hero
adjacent to the target discards a card, if able.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Steam Shroud",description:"Move an enemy minion in radius 1 space.",color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Drop Trooper",description:`Place yourself into a space in a straight
line in radius. You may then push up to two
enemy units adjacent to you 1 space.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Killshot",description:"Target a non-adjacent unit in a straight line.",color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:6,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Killing Ground",description:`Non-adjacent enemy hero in radius,
who is not adjacent to terrain, or a
token, discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"RANGE"},{name:"Steam Valkyrie",description:`You may place yourself into a space in
radius not in a straight line from you.
You may then fast travel once, if able.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:1,item:"MOVEMENT"},{name:"Super-Shotgun",description:`+3 ::attack_red:: Attack if you target an adjacent unit.
Before the attack: Up to one enemy
hero adjacent to the target discards
a card, or is defeated.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Steam Cloud",description:`Move an enemy minion in
radius up to 2 spaces.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"}],kt=[{name:"Turn to Ice",description:`**Choose one —**
>>A hero in range with an unresolved card
>may choose to retrieve that card. If they
>do not, name a color. That hero discards
>a card of that color, if able.
>>Defeat an adjacent minion.`,color:"GOLD",initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Cold Touch",description:`A hero in range with an unresolved card
may choose to retrieve that card. If they
do not, name a color. That hero discards
a card of that color, if able.`,color:"GOLD",handicapped:!0,initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Commune with Spirits",description:`The nearest friendly hero names a color,
you may then **choose one —**
>>Discard a card of that color. If you do,
>perform any one action on that card.
>>Retrieve a discarded card of that color.`,color:"SILVER",initiative:12,primaryAction:"SKILL",secondaryDefense:2},{name:"Reign of Winter",description:`Whenever an enemy hero in play
retrieves a card as a result of an action,
that hero discards a card, if able, and
you may retrieve your discarded card.`,color:"PURPLE",level:4},{name:"Cold Snap",description:`The nearest enemy hero in radius discards a
card, if able. **Next turn, after playing cards:**
That hero may retrieve a discarded card.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5},{name:"Frost Dagger",description:`After the attack: If you target a hero,
that hero discards a card, if able.
**Next turn, after playing cards:**
That hero may retrieve that card.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6},{name:"Glacial Barrier",description:`Place an ::ice_token:: ice token in radius, adjacent
to another ice token, if able. Enemy
heroes have -1 ::initiative_red:: Initiative penalty for
every ice token they are adjacent to.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Snowstorm",description:`Name a color. The nearest enemy hero in
radius discards a card of that color, if able.
**Next turn, after playing cards:** That hero
may retrieve a discarded card of that color.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Frost Spear",description:`After the attack: If you target a hero, name a
color. That hero discards a card of that color,
if able. **Next turn, after playing cards:**
That hero may retrieve that card.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Wall of Frost",description:`Place up to 2 ::ice_token:: ice tokens in radius,
adjacent to another ice token, if able.
Enemy heroes have -1 ::initiative_red:: Initiative penalty
for every ice token they are adjacent to.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Guardian Spirit",description:`If you have a card in the discard,
a friendly hero in radius may
retrieve a discarded card.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Spirit Wolf",description:`If your discard is empty, target an
adjacent unit. Otherwise, target an
adjacent unit, or a minion in range.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Ancestral Totem",description:`Place a ::totem_token:: in radius.
If a friendly melee minion adjacent
to a totem would be defeated, you
may remove the totem instead.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Blizzard",description:`Name a color. The nearest enemy hero in
radius discards a card of that color, if able.
**End of next turn:** That hero may retrieve
a discarded card of that color.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Frost Scepter",description:`After the attack: If you target a hero,
name a color. That hero discards a card
of that color, if able. **End of next turn:**
That hero may retrieve that card.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"Pack Ice",description:`Place up to 3 ::ice_token:: ice tokens in radius,
adjacent to another ice token, if able.
Enemy heroes have -1 ::initiative_red:: Initiative penalty
for every ice token they are adjacent to.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Vengeful Spirit",description:`If you have a card in the discard,
you, or a friendly hero in radius,
may retrieve a discarded card.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Spirit Bear",description:`If your discard is empty, target an adjacent
unit. Otherwise, target an unit in range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:4,secondaryDefense:4,item:"AREA"},{name:"Venerated Totem",description:`Place a ::totem_token:: in radius. If a friendly
minion adjacent to a totem would be
defeated, you may remove the totem instead.
Totems are immune to enemy actions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"}],Dt=[{name:"Blink Strike",description:`Before the attack: Move 2 spaces in a straight
line through an enemy unit; Target that unit.
*(If you cannot make this move, you cannot attack).* `,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:2,secondaryDefense:1},{name:"Nimble Strike",description:`Before the attack: Move 2 spaces in a straight
line through an enemy hero; target that hero.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Blend Into Shadows",description:`If adjacent to an obstacle, place yourself into
a space in radius not adjacent to an enemy
unit. If you do, **Next turn:** You are immune,
and may move through units.`,color:"SILVER",initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:2},{name:"Cloak and Daggers",description:`If you are immune: Before you perform
(or repeat) any action, move up to 2 spaces;
after you perform a basic attack, you may
repeat it once on a different target.`,color:"PURPLE",level:4},{name:"Dodge",description:"Block a ranged attack.",color:"BLUE",level:1,initiative:10,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3},{name:"Hit and Run",description:"After the attack: Move up to 1 space.",color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:5,secondaryDefense:3},{name:"Light-Fingered",description:`Move up to 2 spaces, then take up to 1 coin
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:"GREEN",level:1,initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:2},{name:"Sidestep",description:`Block a ranged attack. If you do, you may
move 2 spaces in a straight line.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"DEFENSE"},{name:"Combat Reflexes",description:`Before or After the attack:
Move up to 1 space.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:5,secondaryDefense:4,item:"INITIATIVE"},{name:"Pick Pocket",description:`Move up to 2 spaces, then take up to 2 coins
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:2,item:"ATTACK"},{name:"Parry",description:`Block a non-ranged attack.
The attacker discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"Backstab",description:`Target a unit adjacent to you. +2 ::attack_red:: Attack
if a friendly unit is adjacent to the target.
*(A "friendly unit" is another hero or a minion on your team).*`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:6,item:"DEFENSE"},{name:"Poisoned Dagger",description:`Give a hero in range a ::marker_poison:: poison marker.
Each ::item_initiative:: Initiative and ::item_attack:: Attack item of a
hero with a poison marker reduces that
value by 1, instead of increasing it by 1.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"},{name:"Evade",description:`Block a ranged attack. If you do, you may
move 2 spaces in a straight line and you
may swap this card with a card in your hand.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"Leaping Strike",description:`Before the attack: Move up to 1 space.
After the attack: Move up to 1 space.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:5,secondaryDefense:4,item:"AREA"},{name:"Master Thief",description:`Move up to 2 spaces, then take up to 3 coins
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:3,item:"INITIATIVE"},{name:"Reposte",description:`Block a non-ranged attack. The attacker
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"RANGE"},{name:"Backstab with a Ballista",description:`Target a unit in range. +3 ::attack_red:: Attack
and this attack cannot be blocked,
if a friendly unit is adjacent to the target.
*("Block" is a keyword - the target hero can still defend!)*`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:1,secondaryMovement:5,secondaryDefense:6,item:"DEFENSE"},{name:"Poisoned Dart",description:`Give a hero in range a ::marker_poison:: poison marker.
Each ::item_initiative:: Initiative, ::item_attack:: Attack, and ::item_defense:: Defense
item of a hero with a poison marker reduce
that value by 1, instead of increasing it by 1.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"MOVEMENT"}],Lt=[{name:"Rapid Deployment",description:`**Choose one —**
>>You may remove the turret. Move up to
>3 spaces and place the Turret into an
>adjacent space. It counts as terrain.
>>An enemy hero in range of both you and
>the Turret discards a card, if able.
>>Defeat an enemy minion in range of both
>you and the Turret.`,color:"GOLD",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:1},{name:"Ramshackle Turret",description:`**Choose one —**
>>You may remove the turret. Move up to
>2 spaces and place the Turret into an
>adjacent space. It counts as terrain.
>>Enemy hero in range of both you and
>the Turret discards a card, if able.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:1,secondaryMovement:3,secondaryDefense:1},{name:"Salvage Parts",description:`**Choose one —**
>>Place the Turret into an adjacent space.
>It counts as terrain.
>>Remove the Turret. If you do, move
>up to 3 spaces.`,color:"SILVER",initiative:5,primaryAction:"SKILL",secondaryDefense:2},{name:"Fortified Positions",description:`Whenever you perform an action, barrier
tokens and friendly minions count as a Turret.`,color:"PURPLE",level:4},{name:"Disruptor Jolt",description:`**This turn:** Enemy heroes in radius of the
Turret cannot perform non-basic skills.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3},{name:"Makeshift Minigun",description:`Target a unit in range of both you and the
Turret. After the attack: **Next turn:**
Gain +1 ::range_red:: Range if you target a hero.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4},{name:"Early Prototype",description:`Swap yourself, a friendly unit, or a token,
in radius of the Turret, with the Turret.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:2},{name:"Disruptor Pulse",description:`Cancel skills with active effects of enemies in
radius of the Turret. **This turn:** Enemy heroes
in radius of the Turret cannot perform skills.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Gatling Gun",description:`Target a unit in range of both you and the
Turret. After the attack: **Next turn:**
Gain +1 ::range_red:: Range; if you target a hero
with no cards in their hand with your
basic skill, defeat that hero, instead.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Teleportation Device",description:`Swap yourself, a friendly unit, or a token,
in radius of the Turret, with the Turret.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"ATTACK"},{name:"Deployable Barrier",description:`Place up to 2 ::barrier_token:: barrier tokens in radius of
the Turret and adjacent to another barrier
token, if able. You and friendly heroes gain
+1 ::defense_silver:: Defense for each adjacent barrier token.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Steam Discharge",description:`Target a unit in range of both you and the
Turret. After the attack: One other enemy
hero in range of you and adjacent to the
Turret discards a card, if able.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Self-Destruct",description:`Enemy heroes in radius of the Turret discard
a card, if able. Remove the Turret.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"},{name:"Disruptor Grid",description:`Cancel skills with active effects of
enemies in radius of the Turret.
**This turn and next turn:** Enemies in
radius of the Turret cannot perform skills.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Repeater Cannon",description:`Target a unit in range of both you and the
Turret. After the attack: **Next turn:**
Gain +2 ::range_red:: Range; if you target a hero
with no cards in their hand with your
basic skill, defeat that hero, instead.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"AREA"},{name:"Perfected Design",description:`Swap yourself, any unit, or a token,
in radius of the Turret, with the Turret.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Deployable Bastion",description:`Place up to 3 ::barrier_token:: barrier tokens in radius of
the Turret and adjacent to another barrier
token, if able. You and friendly heroes gain
+1 ::defense_silver:: Defense for each adjacent barrier token.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Flame Belcher",description:`Target a unit in range of both you and the
Turret. After the attack: One other enemy
hero in range of both you and the Turret
discards a card, if able.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:6,item:"MOVEMENT"},{name:"Emergency Protocol",description:`Enemy heroes in radius of the Turret discard
a card, or are defeated. Remove the Turret.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"RANGE"}],Vt=[{name:"Claws That Catch",description:`Before the attack: If you are enraged and
not adjacent to an enemy unit, move up to
1 space. Target a unit adjacent to you. After
the attack: **This round:** You are enraged.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Jaws That Bite",description:`Before the attack: If you are enraged and
not adjacent to an enemy unit, move up to
1 space. Target a hero adjacent to you. After
the attack: **This round:** You are enraged.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Angry Roar",description:`Push adjacent enemy minions up
to 1 space. If enraged, you may
retrieve a resolved attack card.
**This round:** You are enraged.`,color:"SILVER",initiative:11,primaryAction:"DEFENSE_SKILL",primaryValue:3},{name:"Unbound Fury",description:`You are always enraged. While an active
effect on another card is also making you
enraged, gain +2 ::movement_silver:: Movement.`,color:"PURPLE",level:4},{name:"Prowling Brute",description:`If enraged, you may swap with an adjacent
minion after you perform this action.
~~(You may choose to move 0 spaces and still swap).`,color:"BLUE",level:1,initiative:9,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:5},{name:"Prey Drive",description:`Target a unit adjacent to you. Before the
attack: If you are enraged and target a hero,
you may remove an enemy minion in radius.
**This round:** You are enraged.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Sniff Out",description:`If not enraged, **This round:** You are enraged;
otherwise, an enemy hero in range, not
adjacent to you, or to another unit,
discards a card, if able.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Rampaging Beast",description:`If enraged, you may swap with an adjacent
unit, or a token, after you perform this action.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:6,item:"DEFENSE"},{name:"Prey Abundance",description:`Target a unit adjacent to you. Before the
attack: If you are enraged and target a hero,
you may remove an enemy minion in radius.
**This round:** You are enraged.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Eyes on the Prey",description:`If not enraged, **This round:** You are enraged;
otherwise, an enemy hero in range, not
adjacent to you, or to another unit,
discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Hulking Menace",description:`**This round:** While enraged, enemy units
cannot move through spaces adjacent to you.
~~(They can move into, or out of those spaces, but not both).`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:6,item:"ATTACK"},{name:"Rip",description:`After the attack: If you are enraged, and
the target is defeated, gain 1 extra coin.
**This round:** you are enraged.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Instinctive Reaction",description:`If not enraged, **This round:** You are enraged;
otherwise, **choose one —**
>>Perform an action on your discarded card.
>>You may retrieve a discarded card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Unstoppable Force",description:`If enraged, you may swap with an
adjacent unit, or a token, before
or after you perform this action.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:6,item:"RANGE"},{name:"Feeding Frenzy",description:`Target a unit adjacent to you. Before the
attack: If you are enraged and target a hero,
you may remove an enemy minion in radius.
**This round:** You are enraged.
May repeat once on a different target hero.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Apex Predator",description:`If not enraged, **This round:** You are enraged;
otherwise, an enemy hero in range, not
adjacent to you, or to another unit,
discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"AREA"},{name:"Immovable Object",description:`**This round:** While enraged, enemy units
cannot move through spaces adjacent to you.
You cannot be made to leave your space by
enemy heroes. Ignore any effects that limit,
reduce, or prevent movement.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:6,item:"ATTACK"},{name:"Tear",description:`After the attack: If you are enraged, and
the target is defeated, gain 3 extra coins; If you
defeat a hero, that hero spends 1 extra ::life_counters::
Life counter. **This round:** you are enraged.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Evolutionary Response",description:`If not enraged, **This round:** You are enraged;
otherwise, **choose one, or both —**
>>Perform an action on your discarded card.
>>You may retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"}],wt=[{name:"Dazzling Dagger",description:`Target a unit adjacent to you. After the
 attack: Cancel active effects on skill
 cards of enemy heroes adjacent to you.
 **This turn:** Enemy heroes adjacent to
 you cannot perform skill actions.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Depleted Dagger",description:`Cannot target minions. After the attack:
**This turn:** Adjacent enemy heroes
cannot perform Skills. `,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Static Barrier",description:`**This turn:** Enemy units in radius cannot
move or fast travel out of radius.
Enemy units outside of radius cannot
move or fast travel into radius.`,color:"SILVER",initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:2},{name:"Thunder and Lightning",description:`After you perform a basic skill one enemy
hero in play discards a card, if able.`,color:"PURPLE",level:4},{name:"Lift Up",description:`Move a non-adjacent unit or a token in
radius up to 1 space, without moving
it away from you, or closer to you.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Shock",description:`Target an adjacent unit. Before the attack:
Up to one adjacent enemy hero, except the
target, discards a card, if able.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:6},{name:"Stop Projectiles",description:`If the attacker is not adjacent,
block the attack.`,color:"GREEN",level:1,initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2},{name:"Control Gravity",description:`Move a non-adjacent unit or a token in radius
up to 1 space, without moving it away from
you, or closer to you. May repeat once.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Electrocute",description:`Target an adjacent unit. Before the attack:
Up to one enemy hero in radius, except the
target, discards a card, if able.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Deflect Projectiles",description:`If the attacker is not adjacent, block
the attack. If you do, the attacker
discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"ATTACK"},{name:"Kinetic Repulse",description:`Push every adjacent enemy unit 2 spaces;
each enemy hero that was stopped by an
obstacle discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Charged Boomerang",description:`Cannot target units in a straight line from you.
~~(Adjacent units are in a straight line as well).`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Telekinesis",description:`Place a unit or a token in range, which is not
in a straight line, into a space adjacent to you.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Center of Mass",description:`Move a non-adjacent unit or a token in radius
up to 1 space, without moving it away from
you, or closer to you. Repeat up to two times.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Electroblast",description:`Target an adjacent unit. Before the attack:
Up to one enemy hero in radius, except the
target, discards a card, or is defeated.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"Reflect Projectiles",description:`If the attacker is not adjacent to you, block
the attack. If you do, the attacker discards
a card, if able, **This turn:** Only heroes
adjacent to you can target you with an attack.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"AREA"},{name:"Kinetic Blast",description:`Push every adjacent enemy unit 3 spaces;
each enemy hero that was stopped by an
obstacle discards a card, if able.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Thunder Boomerang",description:`Cannot target units in a straight line from you.
If you defeat an enemy hero, may repeat once.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Mass Telekinesis",description:`Place a unit or a token in range, which
is not in a straight line, into a space
adjacent to you. May repeat once.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"}],Rt=[{name:"Swift Justice",description:`**Choose one **
 >>An enemy hero in range discards a card,
 >if able; then, if able, that hero moves the
 >number of spaces equal to that card's
 >printed movement value in a straight line.
 >>Defeat an adjacent minion.`,color:"GOLD",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Vile Accusation",description:`An enemy hero in range discards a card,
if able; then, if able, that hero moves the
number of spaces equal to that card's
printed movement value in a straight line.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Death Seeker",description:`If an enemy hero in radius has a card
in the discard, **choose one —**
>>**This turn:** You are immune to attacks.
>>You may retrieve a discarded card.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:2},{name:"Grim Reaper",description:`After you perform a basic action,
you may repeat it once, chosing
the same, or a different option.`,color:"PURPLE",level:4},{name:"Cause Fear",description:`Move up to 3 enemy minions in radius
up to 1 space in the same direction;
they can be moved through obstacles.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5},{name:"Blood Trail",description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius in
the battle zone, up to a maximum of 2 spaces.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,secondaryMovement:4,secondaryDefense:3},{name:"Shadow Step",description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Instill Dread",description:`Move up to 3 enemy minions in radius
up to 2 spaces in the same direction;
they can be moved through obstacles.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Crimson Thirst",description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
2 spaces, then target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Shadow Walk",description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Lesser Evil",description:`An enemy hero in range **chooses one —**
>>That hero discards a card, if able.
>>You may defeat an adjacent minion.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Sense Blood",description:`If able, target a hero in range
with a card in their discard.
Otherwise, target an adjacent unit.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"No Escape",description:`If an enemy hero in radius has a card
in the discard, +2 ::movement_green:: Movement.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"MOVEMENT",primaryValue:2,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:3,secondaryDefense:3,item:"ATTACK"},{name:"Strike Terror",description:`Move up to 3 enemy minions in radius
up to 3 spaces in the same direction;
they can be moved through obstacles.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:"AREA"},{name:"Sanguine Fury",description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
3 spaces, then target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"Creeping Shadow",description:`Place yourself into an empty minion spawn
point in range in the battle zone, or into a
space in range adjacent to that spawn point.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Greater Good",description:`An enemy hero in range **chooses one —**
>>That hero discards a card, or is defeated.
>>You may defeat up to 3 adjacent minions.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:"RANGE"},{name:"Blind Frenzy",description:`If able, target a hero in range with a card in
their discard. Otherwise, target an adjacent
unit. May repeat once on an different hero.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:"DEFENSE"},{name:"Dark Stalker",description:`If an enemy hero in radius has a card
in the discard, +3 ::movement_green:: Movement.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"MOVEMENT",primaryValue:2,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"ATTACK"}],St=[{name:"Tree Slam",description:`If you are adjacent to a tree token, target
a unit in range, otherwise, target a minion
adjacent to you. After the attack:
If the target was adjacent to you, move it
1 space to a space adjacent to you, if able.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:3},{name:"Makeshift Weapon",description:`Cannot attack if you are not adjacent to a tree
token. Target a unit in range. After the attack:
If the target was adjacent to you, move it 1
space to a space adjacent to you, if able.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:"Mystic Saplings",description:`Place up to 3 ::tree_token:: tree tokens in radius, not
adjacent to a tree token. Heroes may move
through a space with a tree token. Do not
remove the tree tokens at the end of round.`,color:"SILVER",initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"March of Nature",description:`Adjacent Tree tokens in a battle zone count as
melee minions immune to ranged attacks.`,color:"PURPLE",level:4},{name:"Gifts of Nature",description:`If you are adjacent to a tree, you
may retrieve a discarded card.`,color:"BLUE",level:1,initiative:8,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6},{name:"Nature's Protector",description:"Target a unit in range, adjacent to a tree token.",color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7},{name:"Toss Away",description:`Move up to 1 space. Push an adjacent token
up to 3 spaces. If the token is pushed 2 or
more spaces, an enemy hero adjacent to
that token discards a card, if able.    `,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Tree of Plenty",description:`Either you, or a hero in radius, may
retrieve a discarded card if either
of you are adjacent to a tree.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Nature's Guardian",description:"Target a unit in range, adjacent to a tree token.",color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Mighty Throw",description:`Move up to 1 space. Push an adjacent token
or a minion up to 4 spaces. If it is pushed 2 or
more spaces, an enemy hero adjacent to that
token or a minion discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Claim Dominance",description:`**This round:** Up to 1 adjacent non-immune
enemy minion does not count towards the
minion total during minion battle.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Trample",description:`If you move in a straight line: You may ignore
units; if you moved through an enemy hero,
that hero discards a card, or is defeated;
defeat up to 1 minion you moved through.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:7,item:"DEFENSE"},{name:"Into the Canopy",description:`Swap places with a tree token in radius.
You may then place a minion adjacent to
that tree token into a space adjacent to you.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Abundance",description:`Both you and a friendly hero in radius
may retrieve a discarded card if either
of you are adjacent to a tree.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:"RANGE"},{name:"Nature's Champion",description:`Target a unit in range, adjacent to a tree token.
May repeat once, targeting a different hero.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:"INITIATIVE"},{name:"Monstrous Throw",description:`Move up to 1 space. Push an adjacent unit
or a token up to 5 spaces. If it is pushed 2
or more spaces, an enemy hero adjacent to
that unit or token discards a card, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"},{name:"Assert Dominance",description:`**This round:** Up to 2 adjacent enemy minion
do not count towards the minion total during
minion battle, regardless of immunity.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:7,item:"ATTACK"},{name:"Angry Stampede",description:`If you move in a straight line: You may ignore
units; if you moved through an enemy hero,
that hero discards a card, or is defeated;
defeat up to 2 minion you moved through.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:8,item:"AREA"},{name:"Treetop Ride",description:`Swap places with a tree token in radius.
You may then place a minion adjacent to that
tree token into a space adjacent to you.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:4,secondaryMovement:2,item:"DEFENSE"}],Ct=[{name:"Backlash",description:`**This turn:** After you discard a card for any
reason, perform the primary action on an
attack card in your discard, if able.
~~(First complete the action causing the discard).`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Counter-Swing",description:`Cannot target minions.
**This turn:** After you discard a card for any
reason, perform the primary action on an
attack card in your discard, if able.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Siren's Call",description:`Target the nearest non-immune enemy unit
in range not adjacent to you; move that unit
up to 2 spaces along the shortest valid path
towards you. May repeat once.`,color:"SILVER",initiative:1,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryDefense:3},{name:"Metamorphosis",description:`You may move through obstacles.
Before you perform an action, one adjacent
enemy hero discards a card, if able.`,color:"PURPLE",level:4},{name:"Stone Gaze",description:`**This turn:** The nearest enemy heroes
in radius are immune, cannot perform a
movement action, and count as terrain.
~~(Will affect multiple heroes if they are at the same distance.)`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Dangerous Slash",description:`+1 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:6},{name:"Charming Aura",description:`**This round:** Enemy melee minions in
radius count as if on your team for the
purpose of defense modifiers.`,color:"GREEN",level:1,initiative:5,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Petrifying Stare",description:`**This turn:** The nearest enemy heroes
in radius are immune, cannot perform a
movement action, and count as terrain.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Deadly Swipe",description:`+2 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:7,item:"INITIATIVE"},{name:"Aura of Control",description:`**This round:** Enemy ranged and melee
minions in radius count as if on your team
for the purpose of defense modifiers.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"MOVEMENT",modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Fresh Converts",description:`If you are adjacent to a minion,
you may retrieve a discarded card.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Long Thrust",description:"Target a unit not adjacent to you.",color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Constrict",description:`**Next turn:** Adjacent enemy heroes cannot
move, except when performing a movement
action on a good card or a red card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",secondaryDefense:4,item:"ATTACK"},{name:"Turn into Statues",description:`**This turn:** Enemy heroes in radius are
immune, cannot perform a movement
action, and count as terrain.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Lethal Spin",description:`+3 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:7,item:"AREA"},{name:"Aura of Domination",description:`**This round:** All enemy minions, including the
immune ones, in radius count as if on your
team for the purpose of defense modifiers.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Devoted Followers",description:`If you are adjacent to a minion, you may
retrieve a discarded card and **This turn:**
You are immune to attack actions.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Rapid Thrusts",description:`Target a unit not adjacent to you. After the
attack: If you are adjacent to an enemy hero,
may repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"INITIATIVE"},{name:"Deadly Embrace",description:`**Next turn:** Adjacent enemy heroes
cannot move, except when performing
a movement action on a good card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:4,item:"DEFENSE"}],Mt={arien:lt,bain:mt,brogan:ut,cutter:ft,dodger:pt,garrus:yt,hanu:ht,ignatia:vt,min:At,misa:Et,nebkher:gt,sabina:It,silverarrow:Tt,swift:bt,tali:kt,tigerclaw:Dt,trinkets:Lt,ursafar:Vt,wasp:wt,whisper:Rt,wuk:St,xargatha:Ct},Wi=ma(0);var Sa;const Nt=(Sa=globalThis.matchMedia)==null?void 0:Sa.call(globalThis,"(prefers-reduced-motion: reduce)").matches,sa=n=>({easing:_a,duration:Nt?0:n});function Ta(n){let i,e,a,t,o,l;return{c(){i=E("div"),e=E("span"),a=_(),t=E("span"),this.h()},l(c){i=I(c,"DIV",{class:!0,style:!0});var d=T(i);e=I(d,"SPAN",{class:!0}),T(e).forEach(m),a=K(d),t=I(d,"SPAN",{class:!0}),T(t).forEach(m),d.forEach(m),this.h()},h(){s(e,"class","bp-bar"),s(t,"class","bp-o"),s(i,"class","bp-load"),s(i,"style",n[2])},m(c,d){de(c,i,d),f(i,e),f(i,a),f(i,t),l=!0},p:vn,i(c){l||(o&&o.end(1),l=!0)},o(c){c&&(o=Li(i,Kn,{duration:480})),l=!1},d(c){c&&m(i),c&&o&&o.end()}}}function ba(n){let i,e;return{c(){i=E("div"),this.h()},l(a){i=I(a,"DIV",{class:!0,style:!0}),T(i).forEach(m),this.h()},h(){s(i,"class","bp-load"),s(i,"style",n[2])},m(a,t){de(a,i,t)},p:vn,i(a){e||Ca(()=>{e=Na(i,Kn,{duration:480}),e.start()})},o:vn,d(a){a&&m(i)}}}function _t(n){let i,e,a=!n[0]&&Ta(n),t=n[1]&&ba(n);return{c(){a&&a.c(),i=_(),t&&t.c(),e=Di()},l(o){a&&a.l(o),i=K(o),t&&t.l(o),e=Di()},m(o,l){a&&a.m(o,l),de(o,i,l),t&&t.m(o,l),de(o,e,l)},p(o,[l]){o[0]?a&&(Qn(),F(a,1,1,()=>{a=null}),$n()):a?(a.p(o,l),l&1&&G(a,1)):(a=Ta(o),a.c(),G(a,1),a.m(i.parentNode,i)),o[1]?t?(t.p(o,l),l&2&&G(t,1)):(t=ba(o),t.c(),G(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(o){G(a),G(t)},o(o){F(a)},d(o){o&&(m(i),m(e)),a&&a.d(o),t&&t.d(o)}}}function Kt(n,i,e){let a;ki(n,Wi,c=>e(1,a=c));let{thumb:t}=i,{loaded:o}=i;const l=`background-image:url(${t})`;return n.$$set=c=>{"thumb"in c&&e(3,t=c.thumb),"loaded"in c&&e(0,o=c.loaded)},[o,a,l,t]}class ua extends Gn{constructor(i){super(),Bn(this,i,Kt,_t,ei,{thumb:3,loaded:0})}}function ka(n){let i,e,a,t,o,l,c;return{c(){i=E("img"),this.h()},l(d){i=I(d,"IMG",{srcset:!0,sizes:!0,alt:!0}),this.h()},h(){Qa(i,e=n[7].img)||s(i,"srcset",e),s(i,"sizes",a=n[8].sizes||`${n[1]}px`),s(i,"alt",n[7].alt)},m(d,p){de(d,i,p),o=!0,l||(c=D(i,"error",n[26]),l=!0)},p(d,p){(!o||p[0]&2&&a!==(a=d[8].sizes||`${d[1]}px`))&&s(i,"sizes",a)},i(d){o||(t&&t.end(1),o=!0)},o(d){t=Li(i,Kn,{}),o=!1},d(d){d&&m(i),d&&t&&t.end(),l=!1,c()}}}function Da(n){let i,e;return i=new ua({props:{thumb:n[7].thumb,loaded:n[2]}}),{c(){Ae(i.$$.fragment)},l(a){Ee(i.$$.fragment,a)},m(a,t){ge(i,a,t),e=!0},p(a,t){const o={};t[0]&4&&(o.loaded=a[2]),i.$set(o)},i(a){e||(G(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){Ie(i,a)}}}function Gt(n){let i,e,a,t,o,l,c=n[2]&&ka(n),d=n[3]&&Da(n);return{c(){i=E("div"),e=E("div"),c&&c.c(),a=_(),d&&d.c(),this.h()},l(p){i=I(p,"DIV",{class:!0});var y=T(i);e=I(y,"DIV",{class:!0,style:!0});var L=T(e);c&&c.l(L),a=K(L),d&&d.l(L),L.forEach(m),y.forEach(m),this.h()},h(){s(e,"class","bp-img"),Fe(e,"background-image","url("+n[7].thumb+")"),Fe(e,"width",n[0][0]+"px"),Fe(e,"height",n[0][1]+"px"),Fe(e,"transform","translate3d("+(n[0][0]/-2+n[6][0])+"px, "+(n[0][1]/-2+n[6][1])+"px, 0)"),tn(e,"bp-drag",n[4]),tn(e,"bp-canzoom",n[11]>1&&n[0][0]<n[12]),s(i,"class","bp-img-wrap"),tn(i,"bp-close",n[5])},m(p,y){de(p,i,y),f(i,e),c&&c.m(e,null),f(e,a),d&&d.m(e,null),t=!0,o||(l=[xi(n[20].call(null,e)),D(i,"wheel",n[15]),D(i,"pointerdown",n[16]),D(i,"pointermove",n[17]),D(i,"pointerup",n[19]),D(i,"pointercancel",n[18])],o=!0)},p(p,y){p[2]?c?(c.p(p,y),y[0]&4&&G(c,1)):(c=ka(p),c.c(),G(c,1),c.m(e,a)):c&&(Qn(),F(c,1,1,()=>{c=null}),$n()),p[3]?d?(d.p(p,y),y[0]&8&&G(d,1)):(d=Da(p),d.c(),G(d,1),d.m(e,null)):d&&(Qn(),F(d,1,1,()=>{d=null}),$n()),(!t||y[0]&1)&&Fe(e,"width",p[0][0]+"px"),(!t||y[0]&1)&&Fe(e,"height",p[0][1]+"px"),(!t||y[0]&65)&&Fe(e,"transform","translate3d("+(p[0][0]/-2+p[6][0])+"px, "+(p[0][1]/-2+p[6][1])+"px, 0)"),(!t||y[0]&16)&&tn(e,"bp-drag",p[4]),(!t||y[0]&6145)&&tn(e,"bp-canzoom",p[11]>1&&p[0][0]<p[12]),(!t||y[0]&32)&&tn(i,"bp-close",p[5])},i(p){t||(G(c),G(d),t=!0)},o(p){F(c),F(d),t=!1},d(p){p&&m(i),c&&c.d(),d&&d.d(),o=!1,Vi(l)}}}function Bt(n,i,e){let a,t,o,l;ki(n,Wi,g=>e(25,o=g));let{props:c}=i,{smallScreen:d}=i,{activeItem:p,opts:y,prev:L,next:N,zoomed:M,container:b}=c;ki(n,M,g=>e(24,a=g));let v=p.maxZoom||y.maxZoom||10,A=c.calculateDimensions(p),R=A[0],te,C,Q,re,he=0,Y,pe,$,Ye,Te,oe,le;const Ke=+p.width,se=[],Ge=new Map,be=Ia(A,sa(400));ki(n,be,g=>e(0,l=g));const ue=Ia([0,0],sa(400));ki(n,ue,g=>e(6,t=g));const ye=([g,S],W=l)=>{const B=(W[0]-b.w)/2,X=(W[1]-b.h)/2;return B<0?g=0:g>B?d?(g=Y?B+(g-B)/10:B,g>B+20&&e(4,Y=L())):g=B:g<-B&&(d?(g=Y?-B-(-B-g)/10:-B,g<-B-20&&e(4,Y=N())):g=-B),X<0?S=0:S>X?S=X:S<-X&&(S=-X),[g,S]};function ee(g=v,S){if(o)return;const W=A[0]*v;let B=l[0]+l[0]*g,X=l[1]+l[1]*g;if(g>0)B>W&&(B=W,X=A[1]*v),B>Ke&&(B=Ke,X=+p.height);else if(B<A[0])return be.set(A),ue.set([0,0]);let{x:ne,y:ce,width:rn,height:De}=re.getBoundingClientRect();const pn=S?S.clientX-ne-rn/2:0,Qe=S?S.clientY-ce-De/2:0;ne=-pn*(B/rn)+pn,ce=-Qe*(X/De)+Qe;const yn=[B,X];be.set(yn).then(()=>{e(1,R=Math.round(Math.max(R,B)))}),ue.set(ye([t[0]+ne,t[1]+ce],yn))}Object.defineProperty(p,"zoom",{configurable:!0,get:()=>a,set:g=>ee(g?v:-v)});const k=g=>{y.inline&&!a||(g.preventDefault(),ee(g.deltaY/-300,g))},w=g=>{g.button!==2&&(g.preventDefault(),e(4,Y=!0),Ge.set(g.pointerId,g),$=g.clientX,Ye=g.clientY,Te=t[0],oe=t[1])},O=g=>{var B;if(Ge.size>1)return e(4,Y=!1),((B=y.noPinch)==null?void 0:B.call(y,b.el))||z(g);if(!Y)return;let S=g.clientX,W=g.clientY;pe=se.push({x:S,y:W})>2,S=S-$,W=W-Ye,a||(W<-90&&e(4,Y=!y.noClose&&c.close()),Math.abs(W)<30&&(S>40&&e(4,Y=L()),S<-40&&e(4,Y=N()))),a&&pe&&!o&&ue.set(ye([Te+S,oe+W]),{duration:0})},z=g=>{const[S,W]=Ge.set(g.pointerId,g).values(),B=S.clientX-W.clientX,X=S.clientY-W.clientY,ne=Math.hypot(B,X);Q=Q||{clientX:(S.clientX+W.clientX)/2,clientY:(S.clientY+W.clientY)/2},ee(((he||ne)-ne)/-35,Q),he=ne},ke=g=>Ge.delete(g.pointerId);function H(g){var S;if(ke(g),Q&&(e(4,Y=he=0),Q=Ge.size?Q:null),!!Y){if(e(4,Y=!1),g.target===this&&!y.noClose)return c.close();if(pe){const[W,B,X]=se.slice(-3),ne=B.x-X.x,ce=B.y-X.y;Math.hypot(ne,ce)>5&&ue.set(ye([t[0]-(W.x-X.x)*5,t[1]-(W.y-X.y)*5]))}else(S=y.onImageClick)!=null&&S.call(y,b.el,p)||ee(a?-v:v,g);pe=!1,se.length=0}}const J=g=>{re=g,c.setResizeFunc(()=>{e(23,A=c.calculateDimensions(p)),(y.inline||!d)&&(be.set(A),ue.set([0,0]))}),c.loadImage(p).then(()=>{e(2,te=!0),c.preloadNext()}),setTimeout(()=>{e(3,C=!te)},250)},Z=g=>{var S;return(S=y.onError)==null?void 0:S.call(y,b,p,g)};return n.$$set=g=>{"props"in g&&e(21,c=g.props),"smallScreen"in g&&e(22,d=g.smallScreen)},n.$$.update=()=>{if(n.$$.dirty[0]&8388609&&M.set(l[0]-10>A[0]),n.$$.dirty[0]&58720256&&o&&a&&!y.intro){const g=sa(480);ue.set([0,0],g),be.set(A,g),e(5,le=!0)}},[l,R,te,C,Y,le,t,p,y,M,b,v,Ke,be,ue,k,w,O,ke,H,J,c,d,A,a,o,Z]}class jt extends Gn{constructor(i){super(),Bn(this,i,Bt,Gt,ei,{props:21,smallScreen:22},null,[-1,-1])}}function Pt(n){let i,e,a,t,o,l,c;return t=new ua({props:{thumb:n[2].thumb,loaded:n[0]}}),{c(){i=E("div"),e=E("iframe"),a=_(),Ae(t.$$.fragment),this.h()},l(d){i=I(d,"DIV",{class:!0,style:!0});var p=T(i);e=I(p,"IFRAME",{allow:!0,title:!0}),T(e).forEach(m),a=K(p),Ee(t.$$.fragment,p),p.forEach(m),this.h()},h(){s(e,"allow","autoplay; fullscreen"),s(e,"title",n[2].title),s(i,"class","bp-if"),Fe(i,"width",n[1][0]+"px"),Fe(i,"height",n[1][1]+"px")},m(d,p){de(d,i,p),f(i,e),f(i,a),ge(t,i,null),o=!0,l||(c=[xi(n[3].call(null,e)),D(e,"load",n[5])],l=!0)},p(d,[p]){const y={};p&1&&(y.loaded=d[0]),t.$set(y),(!o||p&2)&&Fe(i,"width",d[1][0]+"px"),(!o||p&2)&&Fe(i,"height",d[1][1]+"px")},i(d){o||(G(t.$$.fragment,d),o=!0)},o(d){F(t.$$.fragment,d),o=!1},d(d){d&&m(i),Ie(t),l=!1,Vi(c)}}}function Ut(n,i,e){let{props:a}=i,t,o;const{activeItem:l}=a,c=()=>e(1,o=a.calculateDimensions(l));c(),a.setResizeFunc(c);const d=y=>y.src=l.iframe,p=()=>e(0,t=!0);return n.$$set=y=>{"props"in y&&e(4,a=y.props)},[t,o,l,d,a,p]}class Ot extends Gn{constructor(i){super(),Bn(this,i,Ut,Pt,ei,{props:4})}}function Ft(n){let i,e,a,t,o;return e=new ua({props:{thumb:n[2].thumb,loaded:n[0]}}),{c(){i=E("div"),Ae(e.$$.fragment),this.h()},l(l){i=I(l,"DIV",{class:!0,style:!0});var c=T(i);Ee(e.$$.fragment,c),c.forEach(m),this.h()},h(){s(i,"class","bp-vid"),Fe(i,"width",n[1][0]+"px"),Fe(i,"height",n[1][1]+"px"),Fe(i,"background-image","url("+n[2].thumb+")")},m(l,c){de(l,i,c),ge(e,i,null),a=!0,t||(o=xi(n[3].call(null,i)),t=!0)},p(l,[c]){const d={};c&1&&(d.loaded=l[0]),e.$set(d),(!a||c&2)&&Fe(i,"width",l[1][0]+"px"),(!a||c&2)&&Fe(i,"height",l[1][1]+"px")},i(l){a||(G(e.$$.fragment,l),a=!0)},o(l){F(e.$$.fragment,l),a=!1},d(l){l&&m(i),Ie(e),t=!1,o()}}}function Yt(n,i,e){let{props:a}=i,t,o;const{activeItem:l,opts:c,container:d}=a,p=()=>e(1,o=a.calculateDimensions(l));p(),a.setResizeFunc(p);const y=(N,M)=>{for(const b in M)s(N,b,M[b])},L=N=>{let M;const b=(v,A)=>{var R;Array.isArray(A)||(A=JSON.parse(A));for(const te of A){M||(M=E((R=te.type)!=null&&R.includes("audio")?"audio":"video"),y(M,{controls:!0,autoplay:!0,playsinline:!0,tabindex:"0"}));const C=E(v);y(C,te),v=="source"&&D(C,"error",Q=>{var re;return(re=c.onError)==null?void 0:re.call(c,d,l,Q)}),va(M,C)}};b("source",l.sources),b("track",l.tracks||[]),D(M,"canplay",()=>e(0,t=!0)),va(N,M)};return n.$$set=N=>{"props"in N&&e(4,a=N.props)},[t,o,l,L,a]}class zt extends Gn{constructor(i){super(),Bn(this,i,Yt,Ft,ei,{props:4})}}function La(n){let i,e,a,t,o=n[6].i,l,c,d,p,y,L,N,M,b=wa(n),v=n[0].length>1&&Ra(n);return{c(){i=E("div"),e=E("div"),t=_(),b.c(),l=_(),c=E("div"),d=E("button"),p=_(),v&&v.c(),this.h()},l(A){i=I(A,"DIV",{class:!0});var R=T(i);e=I(R,"DIV",{}),T(e).forEach(m),t=K(R),b.l(R),l=K(R),c=I(R,"DIV",{class:!0});var te=T(c);d=I(te,"BUTTON",{class:!0,title:!0,"aria-label":!0}),T(d).forEach(m),p=K(te),v&&v.l(te),te.forEach(m),R.forEach(m),this.h()},h(){s(d,"class","bp-x"),s(d,"title","Close"),s(d,"aria-label","Close"),s(c,"class","bp-controls"),s(i,"class","bp-wrap"),tn(i,"bp-zoomed",n[10]),tn(i,"bp-inline",n[8]),tn(i,"bp-small",n[7]),tn(i,"bp-noclose",n[5].noClose)},m(A,R){de(A,i,R),f(i,e),f(i,t),b.m(i,null),f(i,l),f(i,c),f(c,d),f(c,p),v&&v.m(c,null),L=!0,N||(M=[D(d,"click",n[1]),xi(n[14].call(null,i))],N=!0)},p(A,R){R[0]&64&&Ma(o,o=A[6].i)?(Qn(),F(b,1,1,vn),$n(),b=wa(A),b.c(),G(b,1),b.m(i,l)):b.p(A,R),A[0].length>1?v?v.p(A,R):(v=Ra(A),v.c(),v.m(c,null)):v&&(v.d(1),v=null),(!L||R[0]&1024)&&tn(i,"bp-zoomed",A[10]),(!L||R[0]&256)&&tn(i,"bp-inline",A[8]),(!L||R[0]&128)&&tn(i,"bp-small",A[7]),(!L||R[0]&32)&&tn(i,"bp-noclose",A[5].noClose)},i(A){L||(a&&a.end(1),G(b),y&&y.end(1),L=!0)},o(A){A&&(a=Li(e,Kn,{duration:480})),F(b),A&&(y=Li(c,Kn,{})),L=!1},d(A){A&&m(i),A&&a&&a.end(),b.d(A),v&&v.d(),A&&y&&y.end(),N=!1,Vi(M)}}}function qt(n){let i,e,a=n[6].html+"";return{c(){i=E("div"),e=new da(!1),this.h()},l(t){i=I(t,"DIV",{class:!0});var o=T(i);e=la(o,!1),o.forEach(m),this.h()},h(){e.a=null,s(i,"class","bp-html")},m(t,o){de(t,i,o),e.m(a,i)},p(t,o){o[0]&64&&a!==(a=t[6].html+"")&&e.p(a)},i:vn,o:vn,d(t){t&&m(i)}}}function Ht(n){let i,e;return i=new Ot({props:{props:n[13]()}}),{c(){Ae(i.$$.fragment)},l(a){Ee(i.$$.fragment,a)},m(a,t){ge(i,a,t),e=!0},p:vn,i(a){e||(G(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){Ie(i,a)}}}function Wt(n){let i,e;return i=new zt({props:{props:n[13]()}}),{c(){Ae(i.$$.fragment)},l(a){Ee(i.$$.fragment,a)},m(a,t){ge(i,a,t),e=!0},p:vn,i(a){e||(G(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){Ie(i,a)}}}function xt(n){let i,e;return i=new jt({props:{props:n[13](),smallScreen:n[7]}}),{c(){Ae(i.$$.fragment)},l(a){Ee(i.$$.fragment,a)},m(a,t){ge(i,a,t),e=!0},p(a,t){const o={};t[0]&128&&(o.smallScreen=a[7]),i.$set(o)},i(a){e||(G(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){Ie(i,a)}}}function Va(n){let i,e,a=n[6].caption+"",t,o;return{c(){i=E("div"),e=new da(!1),this.h()},l(l){i=I(l,"DIV",{class:!0});var c=T(i);e=la(c,!1),c.forEach(m),this.h()},h(){e.a=null,s(i,"class","bp-cap")},m(l,c){de(l,i,c),e.m(a,i),o=!0},p(l,c){(!o||c[0]&64)&&a!==(a=l[6].caption+"")&&e.p(a)},i(l){o||(t&&t.end(1),o=!0)},o(l){t=Li(i,Kn,{duration:200}),o=!1},d(l){l&&m(i),l&&t&&t.end()}}}function wa(n){let i,e,a,t,o,l,c,d,p,y;const L=[xt,Wt,Ht,qt],N=[];function M(v,A){return v[6].img?0:v[6].sources?1:v[6].iframe?2:3}e=M(n),a=N[e]=L[e](n);let b=n[6].caption&&Va(n);return{c(){i=E("div"),a.c(),l=_(),b&&b.c(),c=Di(),this.h()},l(v){i=I(v,"DIV",{class:!0});var A=T(i);a.l(A),A.forEach(m),l=K(v),b&&b.l(v),c=Di(),this.h()},h(){s(i,"class","bp-inner")},m(v,A){de(v,i,A),N[e].m(i,null),de(v,l,A),b&&b.m(v,A),de(v,c,A),d=!0,p||(y=[D(i,"pointerdown",n[21]),D(i,"pointerup",n[22])],p=!0)},p(v,A){let R=e;e=M(v),e===R?N[e].p(v,A):(Qn(),F(N[R],1,1,()=>{N[R]=null}),$n(),a=N[e],a?a.p(v,A):(a=N[e]=L[e](v),a.c()),G(a,1),a.m(i,null)),v[6].caption?b?(b.p(v,A),A[0]&64&&G(b,1)):(b=Va(v),b.c(),G(b,1),b.m(c.parentNode,c)):b&&(Qn(),F(b,1,1,()=>{b=null}),$n())},i(v){d||(G(a),Ca(()=>{d&&(o&&o.end(1),t=Na(i,n[12],!0),t.start())}),G(b),d=!0)},o(v){F(a),t&&t.invalidate(),o=Li(i,n[12],!1),F(b),d=!1},d(v){v&&(m(i),m(l),m(c)),N[e].d(),v&&o&&o.end(),b&&b.d(v),p=!1,Vi(y)}}}function Ra(n){let i,e,a=`${n[4]+1} / ${n[0].length}`,t,o,l,c,d,p;return{c(){i=E("div"),e=new da(!1),t=_(),o=E("button"),l=_(),c=E("button"),this.h()},l(y){i=I(y,"DIV",{class:!0});var L=T(i);e=la(L,!1),L.forEach(m),t=K(y),o=I(y,"BUTTON",{class:!0,title:!0,"aria-label":!0}),T(o).forEach(m),l=K(y),c=I(y,"BUTTON",{class:!0,title:!0,"aria-label":!0}),T(c).forEach(m),this.h()},h(){e.a=null,s(i,"class","bp-count"),s(o,"class","bp-prev"),s(o,"title","Previous"),s(o,"aria-label","Previous"),s(c,"class","bp-next"),s(c,"title","Next"),s(c,"aria-label","Next")},m(y,L){de(y,i,L),e.m(a,i),de(y,t,L),de(y,o,L),de(y,l,L),de(y,c,L),d||(p=[D(o,"click",n[2]),D(c,"click",n[3])],d=!0)},p(y,L){L[0]&17&&a!==(a=`${y[4]+1} / ${y[0].length}`)&&e.p(a)},d(y){y&&(m(i),m(t),m(o),m(l),m(c)),d=!1,Vi(p)}}}function Xt(n){let i,e,a=n[0]&&La(n);return{c(){a&&a.c(),i=Di()},l(t){a&&a.l(t),i=Di()},m(t,o){a&&a.m(t,o),de(t,i,o),e=!0},p(t,o){t[0]?a?(a.p(t,o),o[0]&1&&G(a,1)):(a=La(t),a.c(),G(a,1),a.m(i.parentNode,i)):a&&(Qn(),F(a,1,1,()=>{a=null}),$n())},i(t){e||(G(a),e=!0)},o(t){F(a),e=!1},d(t){t&&m(i),a&&a.d(t)}}}function Jt(n,i,e){let a,{items:t=void 0}=i,{target:o=void 0}=i;const l=document.documentElement;let c,d,p,y,L,N,M,b,v,A,R;const te=k=>R=k,C={},Q=ma(0);ki(n,Q,k=>e(10,a=k));const re=k=>{e(5,d=k),e(8,N=d.inline);const w=d.items;!N&&l.scrollHeight>l.clientHeight&&l.classList.add("bp-lock"),y=document.activeElement,e(20,C.w=o.offsetWidth,C),e(20,C.h=o===document.body?window.innerHeight:o.clientHeight,C),e(7,L=C.w<769),e(4,c=d.position||0),Array.isArray(w)?e(0,t=w.map((O,z)=>(d.el&&d.el===O.element&&e(4,c=z),{i:z,...O}))):e(0,t=(w.length?[...w]:[w]).map((O,z)=>(d.el===O&&e(4,c=z),{element:O,i:z,...O.dataset})))},he=()=>{var k;(k=d.onClose)==null||k.call(d,C.el,v),Wi.set(!0),e(0,t=null),y==null||y.focus({preventScroll:!0})},Y=()=>$(c-1),pe=()=>$(c+1),$=k=>{M=k-c,e(4,c=Ye(k))},Ye=k=>(k+t.length)%t.length,Te=k=>{const{key:w,shiftKey:O}=k;if(w==="Escape")!d.noClose&&he();else if(w==="ArrowRight")pe();else if(w==="ArrowLeft")Y();else if(w==="Tab"){const{activeElement:z}=document;if(O||!z.controls){k.preventDefault();const{focusWrap:ke=C.el}=d,H=[...ke.querySelectorAll("*")].filter(Z=>Z.tabIndex>=0);let J=H.indexOf(z);J+=H.length+(O?-1:1),H[J%H.length].focus()}}},oe=({width:k=1920,height:w=1080})=>{const{scale:O=.99}=d,z=Math.min(1,C.w/k*O,C.h/w*O);return[Math.round(k*z),Math.round(w*z)]},le=()=>{if(t){const k=t[Ye(c+1)],w=t[Ye(c-1)];!k.preload&&Ke(k),!w.preload&&Ke(w)}},Ke=k=>{if(k.img){const w=E("img");return w.sizes=d.sizes||`${oe(k)[0]}px`,w.srcset=k.img,k.preload=!0,w.decode().catch(O=>{})}},se=(k,w)=>!p||!t?(e(18,p=w),d.intro?Kn(k,{y:w?10:-10}):Ge(k)):Kn(k,{x:(M>0?20:-20)*(w?1:-1),duration:250}),Ge=k=>{let w;if(A){const Z=k.firstChild.firstChild;w=[Z.clientWidth,Z.clientHeight]}else w=oe(v);const O=(v.element||y).getBoundingClientRect(),z=O.left-(C.w-O.width)/2,ke=O.top-(C.h-O.height)/2,H=O.width/w[0],J=O.height/w[1];return{duration:480,easing:_a,css:(Z,g)=>`transform:translate3d(${z*g}px, ${ke*g}px, 0) scale3d(${H+Z*(1-H)}, ${J+Z*(1-J)}, 1)`}},be=()=>({activeItem:v,calculateDimensions:oe,loadImage:Ke,preloadNext:le,opts:d,prev:Y,next:pe,close:he,setResizeFunc:te,zoomed:Q,container:C}),ue=k=>{var ke;e(20,C.el=k,C);let w,O;(ke=d.onOpen)==null||ke.call(d,C.el,v),N||(w=D(window,"keydown",Te));const z=new ResizeObserver(H=>{var J;O&&(e(20,C.w=H[0].contentRect.width,C),e(20,C.h=H[0].contentRect.height,C),e(7,L=C.w<769),R==null||R(),(J=d.onResize)==null||J.call(d,C.el,v)),O=!0});return z.observe(k),{destroy(){var H;z.disconnect(),w==null||w(),Wi.set(!1),l.classList.remove("bp-lock"),(H=d.onClosed)==null||H.call(d)}}},ye=k=>e(9,b=k.target),ee=function(k){k.button!==2&&k.target===this&&b===this&&!d.noClose&&he()};return n.$$set=k=>{"items"in k&&e(0,t=k.items),"target"in k&&e(15,o=k.target)},n.$$.update=()=>{var k;n.$$.dirty[0]&1835121&&t&&(e(6,v=t[c]),e(19,A=v.hasOwnProperty("html")),p&&(A&&te(null),(k=d.onUpdate)==null||k.call(d,C.el,v)))},[t,he,Y,pe,c,d,v,L,N,b,a,Q,se,be,ue,o,re,$,p,A,C,ye,ee]}class Zt extends Gn{constructor(i){super(),Bn(this,i,Jt,Xt,Ma,{items:0,target:15,open:16,close:1,prev:2,next:3,setPosition:17},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(i){this.$$set({items:i}),ha()}get target(){return this.$$.ctx[15]}set target(i){this.$$set({target:i}),ha()}get open(){return this.$$.ctx[16]}get close(){return this.$$.ctx[1]}get prev(){return this.$$.ctx[2]}get next(){return this.$$.ctx[3]}get setPosition(){return this.$$.ctx[17]}}function Qt(n){return new Zt({...n,props:n})}function $t(n){let i,e='<canvas id="canvas" width="2384" height="3328" class="w-full rounded-[3rem]"></canvas>';return{c(){i=E("div"),i.innerHTML=e,this.h()},l(a){i=I(a,"DIV",{class:!0,"data-svelte-h":!0}),it(i)!=="svelte-133nm8w"&&(i.innerHTML=e),this.h()},h(){s(i,"class","border border-dark-600 rounded-[3rem] w-156")},m(a,t){de(a,i,t)},p:vn,i:vn,o:vn,d(a){a&&m(i)}}}function Ka(n){document.getElementById("canvas").getContext("2d").drawImage(n,0,0,2384,3328)}function er(n,i,e){let{bp:a}=i;return n.$$set=t=>{"bp"in t&&e(0,a=t.bp)},[a,Ka]}class Ce extends Gn{constructor(i){super(),Bn(this,i,er,$t,ei,{bp:0,drawCard:1})}get drawCard(){return Ka}}function nr(n){let i,e,a,t,o,l,c,d,p,y,L,N,M,b,v,A,R,te,C,Q,re,he,Y,pe,$,Ye,Te,oe,le,Ke,se,Ge,be,ue,ye,ee,k,w,O,z,ke,H,J,Z,g,S,W,B,X,ne,ce,rn,De,pn,Qe,yn,on,Be,Me,Cn,Ne,Mn,In,jn,fe,ie,ze,me,qe,je,Nn,sn,$e,_e,_n,He,Tn,An,bn,We,Le,kn,Pe,Dn,En,Ln,en,xe,Xe,ni,cn,ii,Pn,ai,Je,Ve,Vn,Ue,wn,gn,Rn,nn,Ze,we,Sn,Oe,wi,ti,Ri,hn,an,Si,ln,Ci,ri,Mi,Un,Re,j,P;function Xi(u){n[159](u)}let Ni={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[18]!==void 0&&(Ni.checked=n[18]),se=new fn({props:Ni}),q.push(()=>un(se,"checked",Xi)),se.$on("change",n[42]);function Ji(u){n[161](u)}let _i={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[19]!==void 0&&(_i.checked=n[19]),w=new fn({props:_i}),q.push(()=>un(w,"checked",Ji)),w.$on("change",n[43]);function Zi(u){n[163](u)}let Ki={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[20]!==void 0&&(Ki.checked=n[20]),S=new fn({props:Ki}),q.push(()=>un(S,"checked",Zi)),S.$on("change",n[44]);function Qi(u){n[165](u)}let Gi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[21]!==void 0&&(Gi.checked=n[21]),De=new fn({props:Gi}),q.push(()=>un(De,"checked",Qi)),De.$on("change",n[45]);function $i(u){n[167](u)}let Bi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[22]!==void 0&&(Bi.checked=n[22]),Ne=new fn({props:Bi}),q.push(()=>un(Ne,"checked",$i)),Ne.$on("change",n[46]);function ea(u){n[169](u)}let ji={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[23]!==void 0&&(ji.checked=n[23]),me=new fn({props:ji}),q.push(()=>un(me,"checked",ea)),me.$on("change",n[47]);function na(u){n[171](u)}let Pi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[24]!==void 0&&(Pi.checked=n[24]),He=new fn({props:Pi}),q.push(()=>un(He,"checked",na)),He.$on("change",n[48]);function ia(u){n[173](u)}let Ui={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[25]!==void 0&&(Ui.checked=n[25]),Pe=new fn({props:Ui}),q.push(()=>un(Pe,"checked",ia)),Pe.$on("change",n[49]);function aa(u){n[175](u)}let Oi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[26]!==void 0&&(Oi.checked=n[26]),cn=new fn({props:Oi}),q.push(()=>un(cn,"checked",aa)),cn.$on("change",n[50]);function ta(u){n[177](u)}let Fi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[27]!==void 0&&(Fi.checked=n[27]),Ue=new fn({props:Fi}),q.push(()=>un(Ue,"checked",ta)),Ue.$on("change",n[51]);function ra(u){n[179](u)}let Yi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};n[28]!==void 0&&(Yi.checked=n[28]),Oe=new fn({props:Yi}),q.push(()=>un(Oe,"checked",ra)),Oe.$on("change",n[52]);function oa(u){n[181](u)}let zi={class:"absolute top-[4px] sm:top-[11px] right-[1px] sm:right-[9px] w-2 sm:w-5 h-2 sm:h-5"};return n[29]!==void 0&&(zi.checked=n[29]),ln=new fn({props:zi}),q.push(()=>un(ln,"checked",oa)),ln.$on("change",n[53]),{c(){i=E("div"),e=E("div"),a=E("div"),t=E("div"),o=E("canvas"),l=_(),c=E("div"),d=E("div"),p=E("canvas"),y=_(),L=E("div"),N=E("div"),M=E("canvas"),b=_(),v=E("div"),A=E("div"),R=E("canvas"),te=_(),C=E("div"),Q=E("div"),re=E("canvas"),he=_(),Y=E("div"),pe=E("div"),$=E("canvas"),Ye=_(),Te=E("div"),oe=E("div"),le=E("canvas"),Ke=_(),Ae(se.$$.fragment),ue=_(),ye=E("div"),ee=E("canvas"),k=_(),Ae(w.$$.fragment),ke=_(),H=E("div"),J=E("div"),Z=E("canvas"),g=_(),Ae(S.$$.fragment),X=_(),ne=E("div"),ce=E("canvas"),rn=_(),Ae(De.$$.fragment),yn=_(),on=E("div"),Be=E("div"),Me=E("canvas"),Cn=_(),Ae(Ne.$$.fragment),jn=_(),fe=E("div"),ie=E("canvas"),ze=_(),Ae(me.$$.fragment),Nn=_(),sn=E("div"),$e=E("div"),_e=E("canvas"),_n=_(),Ae(He.$$.fragment),bn=_(),We=E("div"),Le=E("canvas"),kn=_(),Ae(Pe.$$.fragment),Ln=_(),en=E("div"),xe=E("div"),Xe=E("canvas"),ni=_(),Ae(cn.$$.fragment),ai=_(),Je=E("div"),Ve=E("canvas"),Vn=_(),Ae(Ue.$$.fragment),Rn=_(),nn=E("div"),Ze=E("div"),we=E("canvas"),Sn=_(),Ae(Oe.$$.fragment),Ri=_(),hn=E("div"),an=E("canvas"),Si=_(),Ae(ln.$$.fragment),Mi=_(),Un=E("p"),this.h()},l(u){i=I(u,"DIV",{class:!0});var U=T(i);e=I(U,"DIV",{class:!0});var x=T(e);a=I(x,"DIV",{class:!0});var On=T(a);t=I(On,"DIV",{class:!0});var Fn=T(t);o=I(Fn,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(o).forEach(m),Fn.forEach(m),On.forEach(m),l=K(x),c=I(x,"DIV",{class:!0});var Yn=T(c);d=I(Yn,"DIV",{class:!0});var zn=T(d);p=I(zn,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(p).forEach(m),zn.forEach(m),Yn.forEach(m),y=K(x),L=I(x,"DIV",{class:!0});var qn=T(L);N=I(qn,"DIV",{class:!0});var Hn=T(N);M=I(Hn,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(M).forEach(m),Hn.forEach(m),qn.forEach(m),b=K(x),v=I(x,"DIV",{class:!0});var Wn=T(v);A=I(Wn,"DIV",{class:!0});var xn=T(A);R=I(xn,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(R).forEach(m),xn.forEach(m),Wn.forEach(m),te=K(x),C=I(x,"DIV",{class:!0});var Xn=T(C);Q=I(Xn,"DIV",{class:!0});var Jn=T(Q);re=I(Jn,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(re).forEach(m),Jn.forEach(m),Xn.forEach(m),he=K(x),Y=I(x,"DIV",{class:!0});var Zn=T(Y);pe=I(Zn,"DIV",{class:!0});var qi=T(pe);$=I(qi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T($).forEach(m),qi.forEach(m),Zn.forEach(m),Ye=K(x),Te=I(x,"DIV",{class:!0});var oi=T(Te);oe=I(oi,"DIV",{class:!0});var si=T(oe);le=I(si,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(le).forEach(m),Ke=K(si),Ee(se.$$.fragment,si),si.forEach(m),ue=K(oi),ye=I(oi,"DIV",{class:!0});var ci=T(ye);ee=I(ci,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(ee).forEach(m),k=K(ci),Ee(w.$$.fragment,ci),ci.forEach(m),oi.forEach(m),ke=K(x),H=I(x,"DIV",{class:!0});var di=T(H);J=I(di,"DIV",{class:!0});var li=T(J);Z=I(li,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(Z).forEach(m),g=K(li),Ee(S.$$.fragment,li),li.forEach(m),X=K(di),ne=I(di,"DIV",{class:!0});var mi=T(ne);ce=I(mi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(ce).forEach(m),rn=K(mi),Ee(De.$$.fragment,mi),mi.forEach(m),di.forEach(m),yn=K(x),on=I(x,"DIV",{class:!0});var ui=T(on);Be=I(ui,"DIV",{class:!0});var fi=T(Be);Me=I(fi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(Me).forEach(m),Cn=K(fi),Ee(Ne.$$.fragment,fi),fi.forEach(m),jn=K(ui),fe=I(ui,"DIV",{class:!0});var pi=T(fe);ie=I(pi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(ie).forEach(m),ze=K(pi),Ee(me.$$.fragment,pi),pi.forEach(m),ui.forEach(m),Nn=K(x),sn=I(x,"DIV",{class:!0});var yi=T(sn);$e=I(yi,"DIV",{class:!0});var hi=T($e);_e=I(hi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(_e).forEach(m),_n=K(hi),Ee(He.$$.fragment,hi),hi.forEach(m),bn=K(yi),We=I(yi,"DIV",{class:!0});var vi=T(We);Le=I(vi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(Le).forEach(m),kn=K(vi),Ee(Pe.$$.fragment,vi),vi.forEach(m),yi.forEach(m),Ln=K(x),en=I(x,"DIV",{class:!0});var Ai=T(en);xe=I(Ai,"DIV",{class:!0});var Ei=T(xe);Xe=I(Ei,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(Xe).forEach(m),ni=K(Ei),Ee(cn.$$.fragment,Ei),Ei.forEach(m),ai=K(Ai),Je=I(Ai,"DIV",{class:!0});var gi=T(Je);Ve=I(gi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(Ve).forEach(m),Vn=K(gi),Ee(Ue.$$.fragment,gi),gi.forEach(m),Ai.forEach(m),Rn=K(x),nn=I(x,"DIV",{class:!0});var Ii=T(nn);Ze=I(Ii,"DIV",{class:!0});var Ti=T(Ze);we=I(Ti,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(we).forEach(m),Sn=K(Ti),Ee(Oe.$$.fragment,Ti),Ti.forEach(m),Ri=K(Ii),hn=I(Ii,"DIV",{class:!0});var bi=T(hn);an=I(bi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),T(an).forEach(m),Si=K(bi),Ee(ln.$$.fragment,bi),bi.forEach(m),Ii.forEach(m),x.forEach(m),Mi=K(U),Un=I(U,"P",{class:!0}),T(Un).forEach(m),U.forEach(m),this.h()},h(){s(o,"id","goldCanvas"),s(o,"width","1192"),s(o,"height","1664"),s(o,"class","w-full rounded-lg sm:rounded-3xl"),s(t,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 top-1 absolute"),s(a,"class","col-span-1 w-32 sm:w-80 h-44 sm:h-111 relative"),s(p,"id","silverCanvas"),s(p,"width","1192"),s(p,"height","1664"),s(p,"class","w-full rounded-lg sm:rounded-3xl"),s(d,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 top-1 absolute"),s(c,"class","col-span-1 w-32 sm:w-80 h-44 sm:h-111 relative"),s(M,"id","purpleCanvas"),s(M,"width","1192"),s(M,"height","1664"),s(M,"class","w-full rounded-lg sm:rounded-3xl"),s(N,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 top-1 absolute"),s(L,"class","col-span-1 w-32 sm:w-80 h-44 sm:h-111 relative"),s(R,"id","blueICanvas"),s(R,"width","1192"),s(R,"height","1664"),s(R,"class","w-full rounded-lg sm:rounded-3xl"),s(A,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 top-1 absolute"),s(v,"class","col-span-1 w-32 sm:w-80 h-44 sm:h-111 relative"),s(re,"id","redICanvas"),s(re,"width","1192"),s(re,"height","1664"),s(re,"class","w-full rounded-lg sm:rounded-3xl"),s(Q,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 top-1 absolute"),s(C,"class","col-span-1 w-32 sm:w-80 h-44 sm:h-111 relative"),s($,"id","greenICanvas"),s($,"width","1192"),s($,"height","1664"),s($,"class","w-full rounded-lg sm:rounded-3xl"),s(pe,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 top-1 absolute"),s(Y,"class","col-span-1 w-32 sm:w-80 h-44 sm:h-111 relative"),s(le,"id","blueIIaltCanvas"),s(le,"width","1192"),s(le,"height","1664"),s(le,"class","w-full rounded-lg sm:rounded-3xl"),s(oe,"class",be="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[30]?"mainCardII":n[41]?"downCardII":"altCardII")+" svelte-gt4wro"),s(ee,"id","blueIImainCanvas"),s(ee,"width","1192"),s(ee,"height","1664"),s(ee,"class","w-full rounded-lg sm:rounded-3xl"),s(ye,"class",z="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[30]?n[41]?"downCardII":"altCardII":"mainCardII")+" svelte-gt4wro"),s(Te,"class","col-span-1 w-32 sm:w-80 h-49 sm:h-124 relative"),s(Z,"id","redIIaltCanvas"),s(Z,"width","1192"),s(Z,"height","1664"),s(Z,"class","w-full rounded-lg sm:rounded-3xl"),s(J,"class",B="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[31]?"mainCardII":n[40]?"downCardII":"altCardII")+" svelte-gt4wro"),s(ce,"id","redIImainCanvas"),s(ce,"width","1192"),s(ce,"height","1664"),s(ce,"class","w-full rounded-lg sm:rounded-3xl"),s(ne,"class",Qe="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[31]?n[40]?"downCardII":"altCardII":"mainCardII")+" svelte-gt4wro"),s(H,"class","col-span-1 w-32 sm:w-80 h-49 sm:h-124 relative"),s(Me,"id","greenIIaltCanvas"),s(Me,"width","1192"),s(Me,"height","1664"),s(Me,"class","w-full rounded-lg sm:rounded-3xl"),s(Be,"class",In="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[32]?"mainCardII":n[39]?"downCardII":"altCardII")+" svelte-gt4wro"),s(ie,"id","greenIImainCanvas"),s(ie,"width","1192"),s(ie,"height","1664"),s(ie,"class","w-full rounded-lg sm:rounded-3xl"),s(fe,"class",je="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[32]?n[39]?"downCardII":"altCardII":"mainCardII")+" svelte-gt4wro"),s(on,"class","col-span-1 w-32 sm:w-80 h-49 sm:h-124 relative"),s(_e,"id","blueIIIaltCanvas"),s(_e,"width","1192"),s(_e,"height","1664"),s(_e,"class","w-full rounded-lg sm:rounded-3xl"),s($e,"class",An="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[33]?"mainCardIII":n[38]?"downCardIII":"altCardIII")+" svelte-gt4wro"),s(Le,"id","blueIIImainCanvas"),s(Le,"width","1192"),s(Le,"height","1664"),s(Le,"class","w-full rounded-lg sm:rounded-3xl"),s(We,"class",En="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[33]?n[38]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-gt4wro"),s(sn,"class","col-span-1 w-32 sm:w-80 h-49 sm:h-124 relative"),s(Xe,"id","redIIIaltCanvas"),s(Xe,"width","1192"),s(Xe,"height","1664"),s(Xe,"class","w-full rounded-lg sm:rounded-3xl"),s(xe,"class",Pn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[34]?"mainCardIII":n[37]?"downCardIII":"altCardIII")+" svelte-gt4wro"),s(Ve,"id","redIIImainCanvas"),s(Ve,"width","1192"),s(Ve,"height","1664"),s(Ve,"class","w-full rounded-lg sm:rounded-3xl"),s(Je,"class",gn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[34]?n[37]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-gt4wro"),s(en,"class","col-span-1 w-32 sm:w-80 h-49 sm:h-124 relative"),s(we,"id","greenIIIaltCanvas"),s(we,"width","1192"),s(we,"height","1664"),s(we,"class","w-full rounded-lg sm:rounded-3xl"),s(Ze,"class",ti="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[35]?"mainCardIII":n[36]?"downCardIII":"altCardIII")+" svelte-gt4wro"),s(an,"id","greenIIImainCanvas"),s(an,"width","1192"),s(an,"height","1664"),s(an,"class","w-full rounded-lg sm:rounded-3xl"),s(hn,"class",ri="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(n[35]?n[36]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-gt4wro"),s(nn,"class","col-span-1 w-32 sm:w-80 h-49 sm:h-124 relative"),s(e,"class","grid grid-cols-3 m-auto"),s(Un,"class","absolute font-modesto svelte-gt4wro"),s(i,"class","flex md:mt-20 mt-16 mb-52")},m(u,U){de(u,i,U),f(i,e),f(e,a),f(a,t),f(t,o),n[152](o),f(e,l),f(e,c),f(c,d),f(d,p),n[153](p),f(e,y),f(e,L),f(L,N),f(N,M),n[154](M),f(e,b),f(e,v),f(v,A),f(A,R),n[155](R),f(e,te),f(e,C),f(C,Q),f(Q,re),n[156](re),f(e,he),f(e,Y),f(Y,pe),f(pe,$),n[157]($),f(e,Ye),f(e,Te),f(Te,oe),f(oe,le),n[158](le),f(oe,Ke),ge(se,oe,null),f(Te,ue),f(Te,ye),f(ye,ee),n[160](ee),f(ye,k),ge(w,ye,null),f(e,ke),f(e,H),f(H,J),f(J,Z),n[162](Z),f(J,g),ge(S,J,null),f(H,X),f(H,ne),f(ne,ce),n[164](ce),f(ne,rn),ge(De,ne,null),f(e,yn),f(e,on),f(on,Be),f(Be,Me),n[166](Me),f(Be,Cn),ge(Ne,Be,null),f(on,jn),f(on,fe),f(fe,ie),n[168](ie),f(fe,ze),ge(me,fe,null),f(e,Nn),f(e,sn),f(sn,$e),f($e,_e),n[170](_e),f($e,_n),ge(He,$e,null),f(sn,bn),f(sn,We),f(We,Le),n[172](Le),f(We,kn),ge(Pe,We,null),f(e,Ln),f(e,en),f(en,xe),f(xe,Xe),n[174](Xe),f(xe,ni),ge(cn,xe,null),f(en,ai),f(en,Je),f(Je,Ve),n[176](Ve),f(Je,Vn),ge(Ue,Je,null),f(e,Rn),f(e,nn),f(nn,Ze),f(Ze,we),n[178](we),f(Ze,Sn),ge(Oe,Ze,null),f(nn,Ri),f(nn,hn),f(hn,an),n[180](an),f(hn,Si),ge(ln,hn,null),f(i,Mi),f(i,Un),Re=!0,j||(P=[D(o,"click",n[54]),D(p,"click",n[55]),D(M,"click",n[56]),D(R,"click",n[57]),D(re,"click",n[58]),D($,"click",n[59]),D(le,"click",n[65]),D(le,"pointerleave",n[63]),D(le,"pointerenter",n[62]),D(ee,"click",n[64]),D(ee,"pointerleave",n[61]),D(ee,"pointerenter",n[60]),D(Z,"click",n[71]),D(Z,"pointerleave",n[69]),D(Z,"pointerenter",n[68]),D(ce,"click",n[70]),D(ce,"pointerleave",n[67]),D(ce,"pointerenter",n[66]),D(Me,"click",n[77]),D(Me,"pointerleave",n[75]),D(Me,"pointerenter",n[74]),D(ie,"click",n[76]),D(ie,"pointerleave",n[73]),D(ie,"pointerenter",n[72]),D(_e,"click",n[83]),D(_e,"pointerleave",n[81]),D(_e,"pointerenter",n[80]),D(Le,"click",n[82]),D(Le,"pointerleave",n[79]),D(Le,"pointerenter",n[78]),D(Xe,"click",n[89]),D(Xe,"pointerleave",n[87]),D(Xe,"pointerenter",n[86]),D(Ve,"click",n[88]),D(Ve,"pointerleave",n[85]),D(Ve,"pointerenter",n[84]),D(we,"click",n[95]),D(we,"pointerleave",n[93]),D(we,"pointerenter",n[92]),D(an,"click",n[94]),D(an,"pointerleave",n[91]),D(an,"pointerenter",n[90])],j=!0)},p(u,U){const x={};!Ge&&U[0]&262144&&(Ge=!0,x.checked=u[18],mn(()=>Ge=!1)),se.$set(x),(!Re||U[0]&1073741824|U[1]&1024&&be!==(be="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[30]?"mainCardII":u[41]?"downCardII":"altCardII")+" svelte-gt4wro"))&&s(oe,"class",be);const On={};!O&&U[0]&524288&&(O=!0,On.checked=u[19],mn(()=>O=!1)),w.$set(On),(!Re||U[0]&1073741824|U[1]&1024&&z!==(z="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[30]?u[41]?"downCardII":"altCardII":"mainCardII")+" svelte-gt4wro"))&&s(ye,"class",z);const Fn={};!W&&U[0]&1048576&&(W=!0,Fn.checked=u[20],mn(()=>W=!1)),S.$set(Fn),(!Re||U[1]&513&&B!==(B="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[31]?"mainCardII":u[40]?"downCardII":"altCardII")+" svelte-gt4wro"))&&s(J,"class",B);const Yn={};!pn&&U[0]&2097152&&(pn=!0,Yn.checked=u[21],mn(()=>pn=!1)),De.$set(Yn),(!Re||U[1]&513&&Qe!==(Qe="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[31]?u[40]?"downCardII":"altCardII":"mainCardII")+" svelte-gt4wro"))&&s(ne,"class",Qe);const zn={};!Mn&&U[0]&4194304&&(Mn=!0,zn.checked=u[22],mn(()=>Mn=!1)),Ne.$set(zn),(!Re||U[1]&258&&In!==(In="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[32]?"mainCardII":u[39]?"downCardII":"altCardII")+" svelte-gt4wro"))&&s(Be,"class",In);const qn={};!qe&&U[0]&8388608&&(qe=!0,qn.checked=u[23],mn(()=>qe=!1)),me.$set(qn),(!Re||U[1]&258&&je!==(je="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[32]?u[39]?"downCardII":"altCardII":"mainCardII")+" svelte-gt4wro"))&&s(fe,"class",je);const Hn={};!Tn&&U[0]&16777216&&(Tn=!0,Hn.checked=u[24],mn(()=>Tn=!1)),He.$set(Hn),(!Re||U[1]&132&&An!==(An="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[33]?"mainCardIII":u[38]?"downCardIII":"altCardIII")+" svelte-gt4wro"))&&s($e,"class",An);const Wn={};!Dn&&U[0]&33554432&&(Dn=!0,Wn.checked=u[25],mn(()=>Dn=!1)),Pe.$set(Wn),(!Re||U[1]&132&&En!==(En="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[33]?u[38]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-gt4wro"))&&s(We,"class",En);const xn={};!ii&&U[0]&67108864&&(ii=!0,xn.checked=u[26],mn(()=>ii=!1)),cn.$set(xn),(!Re||U[1]&72&&Pn!==(Pn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[34]?"mainCardIII":u[37]?"downCardIII":"altCardIII")+" svelte-gt4wro"))&&s(xe,"class",Pn);const Xn={};!wn&&U[0]&134217728&&(wn=!0,Xn.checked=u[27],mn(()=>wn=!1)),Ue.$set(Xn),(!Re||U[1]&72&&gn!==(gn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[34]?u[37]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-gt4wro"))&&s(Je,"class",gn);const Jn={};!wi&&U[0]&268435456&&(wi=!0,Jn.checked=u[28],mn(()=>wi=!1)),Oe.$set(Jn),(!Re||U[1]&48&&ti!==(ti="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[35]?"mainCardIII":u[36]?"downCardIII":"altCardIII")+" svelte-gt4wro"))&&s(Ze,"class",ti);const Zn={};!Ci&&U[0]&536870912&&(Ci=!0,Zn.checked=u[29],mn(()=>Ci=!1)),ln.$set(Zn),(!Re||U[1]&48&&ri!==(ri="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-3xl w-31 sm:w-78 left-1 absolute duration-500 "+(u[35]?u[36]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-gt4wro"))&&s(hn,"class",ri)},i(u){Re||(G(se.$$.fragment,u),G(w.$$.fragment,u),G(S.$$.fragment,u),G(De.$$.fragment,u),G(Ne.$$.fragment,u),G(me.$$.fragment,u),G(He.$$.fragment,u),G(Pe.$$.fragment,u),G(cn.$$.fragment,u),G(Ue.$$.fragment,u),G(Oe.$$.fragment,u),G(ln.$$.fragment,u),Re=!0)},o(u){F(se.$$.fragment,u),F(w.$$.fragment,u),F(S.$$.fragment,u),F(De.$$.fragment,u),F(Ne.$$.fragment,u),F(me.$$.fragment,u),F(He.$$.fragment,u),F(Pe.$$.fragment,u),F(cn.$$.fragment,u),F(Ue.$$.fragment,u),F(Oe.$$.fragment,u),F(ln.$$.fragment,u),Re=!1},d(u){u&&m(i),n[152](null),n[153](null),n[154](null),n[155](null),n[156](null),n[157](null),n[158](null),Ie(se),n[160](null),Ie(w),n[162](null),Ie(S),n[164](null),Ie(De),n[166](null),Ie(Ne),n[168](null),Ie(me),n[170](null),Ie(He),n[172](null),Ie(Pe),n[174](null),Ie(cn),n[176](null),Ie(Ue),n[178](null),Ie(Oe),n[180](null),Ie(ln),j=!1,Vi(P)}}}function ir(n,i,e){let a,t,o,l,c,d,{heroName:p}=i,y,L,N,M,b,v,A,R,te,C,Q,re,he,Y,pe,$,Ye,Te,oe,le,Ke,se,Ge,be,ue,ye,ee,k,w,O,z,ke,H,J,Z,g,S,W,B,X,ne,ce,rn,De,pn,Qe,yn,on,Be,Me,Cn,Ne,Mn,In,jn=!1,fe=!1,ie=!1,ze=!1,me=!1,qe=!1,je=!1,Nn,sn,$e,_e,_n,He,Tn,An,bn,We,Le,kn,Pe,Dn,En,Ln,en,xe,Xe=0,ni=0,cn=0,ii=0,Pn=0,ai=0,Je=!1,Ve=!1,Vn=!1,Ue=!1,wn=!1,gn=!1,Rn=!1,nn=!1,Ze=!1,we=!1,Sn=!1,Oe=!1;function wi(r){r.target.checked&&e(19,Ve=!1)}function ti(r){r.target.checked&&e(18,Je=!1)}function Ri(r){r.target.checked&&e(21,Ue=!1)}function hn(r){r.target.checked&&e(20,Vn=!1)}function an(r){r.target.checked&&e(23,gn=!1)}function Si(r){r.target.checked&&e(22,wn=!1)}function ln(r){r.target.checked&&e(25,nn=!1)}function Ci(r){r.target.checked&&e(24,Rn=!1)}function ri(r){r.target.checked&&e(27,we=!1)}function Mi(r){r.target.checked&&e(26,Ze=!1)}function Un(r){r.target.checked&&e(29,Oe=!1)}function Re(r){r.target.checked&&e(28,Sn=!1)}function j(r,h,V,Hi){ct(r,h,[],Hi,V.color??ve.GOLD,V.handicapped??!1,V.name??"",V.description??"","i".repeat(V.level??1),V.item??dn.ATTACK,V.initiative??0,V.primaryAction??rt.ATTACK,V.primaryValue??0,V.primaryValueSign??Aa.NONE,V.modifier??tt.NONE,V.modifierValue??0,V.modifierValueSign??Aa.NONE,V.secondaryMovement??0,V.secondaryDefense??0,Xe,ni,cn,ii,Pn,ai)}let P;$a(()=>{e(97,L=y.getContext("2d")),e(99,b=M.getContext("2d")),e(101,R=A.getContext("2d")),e(103,Q=C.getContext("2d")),e(105,Y=he.getContext("2d")),e(107,Ye=$.getContext("2d")),e(109,le=oe.getContext("2d")),e(111,Ge=se.getContext("2d")),e(113,ye=ue.getContext("2d")),e(115,w=k.getContext("2d")),e(117,ke=z.getContext("2d")),e(119,Z=J.getContext("2d")),e(121,W=S.getContext("2d")),e(123,ne=X.getContext("2d")),e(125,De=rn.getContext("2d")),e(127,yn=Qe.getContext("2d")),e(129,Me=Be.getContext("2d")),e(131,Mn=Ne.getContext("2d")),Promise.all([document.fonts.ready,ot(),st(p)]).then(()=>{e(133,jn=!0),e(104,re=Se.get("BlueIA")),e(110,Ke=Se.get("BlueIIA")),e(112,be=Se.get("BlueIIB")),e(122,B=Se.get("BlueIIIA")),e(124,ce=Se.get("BlueIIIB")),e(98,N=Se.get("Gold")),e(108,Te=Se.get("GreenIA")),e(118,H=Se.get("GreenIIA")),e(120,g=Se.get("GreenIIB")),e(130,Cn=Se.get("GreenIIIA")),e(132,In=Se.get("GreenIIIB")),e(106,pe=Se.get("RedIA")),e(114,ee=Se.get("RedIIA")),e(116,O=Se.get("RedIIB")),e(126,pn=Se.get("RedIIIA")),e(128,on=Se.get("RedIIIB")),e(100,v=Se.get("Silver")),e(102,te=Se.get("Ultimate"));const r=Mt[p];e(134,Nn=r.find(h=>h.color==ve.GOLD.toUpperCase())),e(135,sn=r.find(h=>h.color==ve.SILVER.toUpperCase())),e(136,$e=r.find(h=>h.color==ve.PURPLE.toUpperCase())),e(137,_e=r.find(h=>h.color==ve.BLUE.toUpperCase()&&h.level==1)),e(138,_n=r.find(h=>h.color==ve.RED.toUpperCase()&&h.level==1)),e(139,He=r.find(h=>h.color==ve.GREEN.toUpperCase()&&h.level==1)),e(140,Tn=r.find(h=>{var V;return h.color==ve.BLUE.toUpperCase()&&h.level==2&&((V=h.variant)==null?void 0:V.first)==1})),e(141,An=r.find(h=>{var V;return h.color==ve.RED.toUpperCase()&&h.level==2&&((V=h.variant)==null?void 0:V.first)==1})),e(142,bn=r.find(h=>{var V;return h.color==ve.GREEN.toUpperCase()&&h.level==2&&((V=h.variant)==null?void 0:V.first)==1})),e(143,We=r.find(h=>{var V;return h.color==ve.BLUE.toUpperCase()&&h.level==2&&((V=h.variant)==null?void 0:V.first)==2})),e(144,Le=r.find(h=>{var V;return h.color==ve.RED.toUpperCase()&&h.level==2&&((V=h.variant)==null?void 0:V.first)==2})),e(145,kn=r.find(h=>{var V;return h.color==ve.GREEN.toUpperCase()&&h.level==2&&((V=h.variant)==null?void 0:V.first)==2})),e(146,Pe=r.find(h=>{var V;return h.color==ve.BLUE.toUpperCase()&&h.level==3&&((V=h.variant)==null?void 0:V.first)==1})),e(147,Dn=r.find(h=>{var V;return h.color==ve.RED.toUpperCase()&&h.level==3&&((V=h.variant)==null?void 0:V.first)==1})),e(148,En=r.find(h=>{var V;return h.color==ve.GREEN.toUpperCase()&&h.level==3&&((V=h.variant)==null?void 0:V.first)==1})),e(149,Ln=r.find(h=>{var V;return h.color==ve.BLUE.toUpperCase()&&h.level==3&&((V=h.variant)==null?void 0:V.first)==2})),e(150,en=r.find(h=>{var V;return h.color==ve.RED.toUpperCase()&&h.level==3&&((V=h.variant)==null?void 0:V.first)==2})),e(151,xe=r.find(h=>{var V;return h.color==ve.GREEN.toUpperCase()&&h.level==3&&((V=h.variant)==null?void 0:V.first)==2})),j(y,L,Nn,N),j(M,b,sn,v),j(A,R,$e,te),j(C,Q,_e,re),j(he,Y,_n,pe),j($,Ye,He,Te),j(oe,le,Tn,Ke),j(ue,ye,An,ee),j(z,ke,bn,H),j(se,Ge,We,be),j(k,w,Le,O),j(J,Z,kn,g),j(S,W,Pe,B),j(rn,De,Dn,pn),j(Be,Me,En,Cn),j(X,ne,Ln,ce),j(Qe,yn,en,on),j(Ne,Mn,xe,In)}),P=Qt({target:document.body})});function Xi(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("goldCanvas"))}})}function Ni(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("silverCanvas"))}})}function Ji(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("purpleCanvas"))}})}function _i(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueICanvas"))}})}function Zi(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redICanvas"))}})}function Ki(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenICanvas"))}})}function Qi(){fe&&e(41,a=!0)}function Gi(){fe&&e(41,a=!1)}function $i(){fe||e(41,a=!0)}function Bi(){fe||e(41,a=!1)}function ea(){e(41,a=!1),fe?e(30,fe=!fe):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIImainCanvas"))}})}function ji(){e(41,a=!1),fe?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIIaltCanvas"))}}):e(30,fe=!fe)}function na(){ie&&e(40,t=!0)}function Pi(){ie&&e(40,t=!1)}function ia(){ie||e(40,t=!0)}function Ui(){ie||e(40,t=!1)}function aa(){e(40,t=!1),ie?e(31,ie=!ie):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIImainCanvas"))}})}function Oi(){e(40,t=!1),ie?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIIaltCanvas"))}}):e(31,ie=!ie)}function ta(){ze&&e(39,o=!0)}function Fi(){ze&&e(39,o=!1)}function ra(){ze||e(39,o=!0)}function Yi(){ze||e(39,o=!1)}function oa(){e(39,o=!1),ze?e(32,ze=!ze):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIImainCanvas"))}})}function zi(){e(39,o=!1),ze?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIIaltCanvas"))}}):e(32,ze=!ze)}function u(){me&&e(38,l=!0)}function U(){me&&e(38,l=!1)}function x(){me||e(38,l=!0)}function On(){me||e(38,l=!1)}function Fn(){e(38,l=!1),me?e(33,me=!me):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIIImainCanvas"))}})}function Yn(){e(38,l=!1),me?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIIIaltCanvas"))}}):e(33,me=!me)}function zn(){qe&&e(37,c=!0)}function qn(){qe&&e(37,c=!1)}function Hn(){qe||e(37,c=!0)}function Wn(){qe||e(37,c=!1)}function xn(){e(37,c=!1),qe?e(34,qe=!qe):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIIImainCanvas"))}})}function Xn(){e(37,c=!1),qe?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIIIaltCanvas"))}}):e(34,qe=!qe)}function Jn(){je&&e(36,d=!0)}function Zn(){je&&e(36,d=!1)}function qi(){je||e(36,d=!0)}function oi(){je||e(36,d=!1)}function si(){e(36,d=!1),je?e(35,je=!je):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIIImainCanvas"))}})}function ci(){e(36,d=!1),je?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{r.querySelector(".bp-x").remove(),new Ce({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIIIaltCanvas"))}}):e(35,je=!je)}function di(r){q[r?"unshift":"push"](()=>{y=r,e(0,y)})}function li(r){q[r?"unshift":"push"](()=>{M=r,e(1,M)})}function mi(r){q[r?"unshift":"push"](()=>{A=r,e(2,A)})}function ui(r){q[r?"unshift":"push"](()=>{C=r,e(3,C)})}function fi(r){q[r?"unshift":"push"](()=>{he=r,e(4,he)})}function pi(r){q[r?"unshift":"push"](()=>{$=r,e(5,$)})}function yi(r){q[r?"unshift":"push"](()=>{se=r,e(7,se)})}function hi(r){Je=r,e(18,Je)}function vi(r){q[r?"unshift":"push"](()=>{oe=r,e(6,oe)})}function Ai(r){Ve=r,e(19,Ve)}function Ei(r){q[r?"unshift":"push"](()=>{k=r,e(9,k)})}function gi(r){Vn=r,e(20,Vn)}function Ii(r){q[r?"unshift":"push"](()=>{ue=r,e(8,ue)})}function Ti(r){Ue=r,e(21,Ue)}function bi(r){q[r?"unshift":"push"](()=>{J=r,e(11,J)})}function Ga(r){wn=r,e(22,wn)}function Ba(r){q[r?"unshift":"push"](()=>{z=r,e(10,z)})}function ja(r){gn=r,e(23,gn)}function Pa(r){q[r?"unshift":"push"](()=>{X=r,e(13,X)})}function Ua(r){Rn=r,e(24,Rn)}function Oa(r){q[r?"unshift":"push"](()=>{S=r,e(12,S)})}function Fa(r){nn=r,e(25,nn)}function Ya(r){q[r?"unshift":"push"](()=>{Qe=r,e(15,Qe)})}function za(r){Ze=r,e(26,Ze)}function qa(r){q[r?"unshift":"push"](()=>{rn=r,e(14,rn)})}function Ha(r){we=r,e(27,we)}function Wa(r){q[r?"unshift":"push"](()=>{Ne=r,e(17,Ne)})}function xa(r){Sn=r,e(28,Sn)}function Xa(r){q[r?"unshift":"push"](()=>{Be=r,e(16,Be)})}function Ja(r){Oe=r,e(29,Oe)}return n.$$set=r=>{"heroName"in r&&e(96,p=r.heroName)},n.$$.update=()=>{if(n.$$.dirty[0]&1073741823|n.$$.dirty[3]&2147483632|n.$$.dirty[4]&268435455){let r=Ve?!0:Je?!1:null,h=Ue?!0:Vn?!1:null,V=gn?!0:wn?!1:null,Hi=nn?!0:Rn?!1:null,fa=we?!0:Ze?!1:null,pa=Oe?!0:Sn?!1:null;const ae={};ae[dn.INITIATIVE]=0,ae[dn.ATTACK]=0,ae[dn.DEFENSE]=0,ae[dn.AREA]=0,ae[dn.RANGE]=0,ae[dn.MOVEMENT]=0,r===!0&&(ae[We.item]+=1),r===!1&&(ae[Tn.item]+=1),h===!0&&(ae[Le.item]+=1),h===!1&&(ae[An.item]+=1),V===!0&&(ae[kn.item]+=1),V===!1&&(ae[bn.item]+=1),Hi===!0&&(ae[Ln.item]+=1),Hi===!1&&(ae[Pe.item]+=1),fa===!0&&(ae[en.item]+=1),fa===!1&&(ae[Dn.item]+=1),pa===!0&&(ae[xe.item]+=1),pa===!1&&(ae[En.item]+=1),Xe=ae[dn.INITIATIVE],ni=ae[dn.ATTACK],cn=ae[dn.DEFENSE],ii=ae[dn.AREA],Pn=ae[dn.RANGE],ai=ae[dn.MOVEMENT],jn&&(j(y,L,Nn,N),j(M,b,sn,v),j(A,R,$e,te),j(C,Q,_e,re),j(he,Y,_n,pe),j($,Ye,He,Te),j(oe,le,Tn,Ke),j(ue,ye,An,ee),j(z,ke,bn,H),j(se,Ge,We,be),j(k,w,Le,O),j(J,Z,kn,g),j(S,W,Pe,B),j(rn,De,Dn,pn),j(Be,Me,En,Cn),j(X,ne,Ln,ce),j(Qe,yn,en,on),j(Ne,Mn,xe,In))}},e(41,a=!1),e(40,t=!1),e(39,o=!1),e(38,l=!1),e(37,c=!1),e(36,d=!1),[y,M,A,C,he,$,oe,se,ue,k,z,J,S,X,rn,Qe,Be,Ne,Je,Ve,Vn,Ue,wn,gn,Rn,nn,Ze,we,Sn,Oe,fe,ie,ze,me,qe,je,d,c,l,o,t,a,wi,ti,Ri,hn,an,Si,ln,Ci,ri,Mi,Un,Re,Xi,Ni,Ji,_i,Zi,Ki,Qi,Gi,$i,Bi,ea,ji,na,Pi,ia,Ui,aa,Oi,ta,Fi,ra,Yi,oa,zi,u,U,x,On,Fn,Yn,zn,qn,Hn,Wn,xn,Xn,Jn,Zn,qi,oi,si,ci,p,L,N,b,v,R,te,Q,re,Y,pe,Ye,Te,le,Ke,Ge,be,ye,ee,w,O,ke,H,Z,g,W,B,ne,ce,De,pn,yn,on,Me,Cn,Mn,In,jn,Nn,sn,$e,_e,_n,He,Tn,An,bn,We,Le,kn,Pe,Dn,En,Ln,en,xe,di,li,mi,ui,fi,pi,yi,hi,vi,Ai,Ei,gi,Ii,Ti,bi,Ga,Ba,ja,Pa,Ua,Oa,Fa,Ya,za,qa,Ha,Wa,xa,Xa,Ja]}class ar extends Gn{constructor(i){super(),Bn(this,i,ir,nr,ei,{heroName:96},null,[-1,-1,-1,-1,-1,-1,-1])}}function tr(n,i){return new dt(n,i)}new TextEncoder;function rr(n){let i,e,a,t,o;return document.title=i=n[1],t=new ar({props:{heroName:n[0]}}),{c(){e=E("meta"),a=_(),Ae(t.$$.fragment),this.h()},l(l){const c=at("svelte-mj5wtp",document.head);e=I(c,"META",{name:!0,content:!0}),c.forEach(m),a=K(l),Ee(t.$$.fragment,l),this.h()},h(){s(e,"name","description"),s(e,"content","GoA II card collection for "+n[1]+".")},m(l,c){f(document.head,e),de(l,a,c),ge(t,l,c),o=!0},p(l,[c]){(!o||c&2)&&i!==(i=l[1])&&(document.title=i)},i(l){o||(G(t.$$.fragment,l),o=!0)},o(l){F(t.$$.fragment,l),o=!1},d(l){l&&m(a),m(e),Ie(t,l)}}}function or(n,i,e){let{data:a}=i;if(!(a.url.substring(1)in Ea))throw tr(404);const t=a.url.substring(1),o=Ea[t].name;return n.$$set=l=>{"data"in l&&e(2,a=l.data)},[t,o,a]}class yr extends Gn{constructor(i){super(),Bn(this,i,or,rr,ei,{data:2})}}export{yr as component};
