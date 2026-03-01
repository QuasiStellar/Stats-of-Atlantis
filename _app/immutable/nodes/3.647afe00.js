import{v as Dt,S as yr,s as Zi,a as w,e as Vi,c as N,i as W,d as l,F as Xi,f as v,g as A,h as E,j as d,A as u,M as Mn,P as Wt,k as Le,X as gn,Y as qa,B as V,O as ga,Z as pr,_ as Lt,$ as Xt,a0 as kt,I as ft,K as yt,p as Z,l as Ri,m as bi,T as vn,o as hr,t as vr,n as Ar,Q as Er,V as gr}from"../chunks/scheduler.d5bf4467.js";import{n as Ir,l as Tr,S as Ni,i as Ci,a as j,g as Si,t as F,c as Mi,j as Aa,h as Zt,b as te,d as re,m as oe,e as se,p as An}from"../chunks/index.b4472927.js";import{_ as O}from"../chunks/preload-helper.a4192956.js";import{e as Ea,u as pt,a as Dr,h as mt,o as lt,_ as Rt,s as ct,C as ve,I as Sn,d as qt,V as bt,M as Lr,b as kr}from"../chunks/states.1be2c94e.js";import{g as Rr}from"../chunks/globals.7f7f1b26.js";import{i as br,a as Vr,b as Sr,u as Mr}from"../chunks/card_painter.e517dd4f.js";import{f as wi}from"../chunks/index.ef2f01d2.js";import{c as Jt,p as wr}from"../chunks/stores.3376e310.js";import{w as ht}from"../chunks/singletons.e453d92d.js";import{C as En}from"../chunks/Checkbox.2b569c37.js";import{T as Qt}from"../chunks/Tooltip.4393f263.js";import{I as $t}from"../chunks/Img.a01fe4f7.js";import{H as Nr}from"../chunks/control.f5b05b5f.js";function Vt(n){return Object.prototype.toString.call(n)==="[object Date]"}function ut(n,i){if(n===i||n!==n)return()=>n;const e=typeof n;if(e!==typeof i||Array.isArray(n)!==Array.isArray(i))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const a=i.map((t,c)=>ut(n[c],t));return t=>a.map(c=>c(t))}if(e==="object"){if(!n||!i)throw new Error("Object cannot be null");if(Vt(n)&&Vt(i)){n=n.getTime(),i=i.getTime();const c=i-n;return m=>new Date(n+m*c)}const a=Object.keys(i),t={};return a.forEach(c=>{t[c]=ut(n[c],i[c])}),c=>{const m={};return a.forEach(o=>{m[o]=t[o](c)}),m}}if(e==="number"){const a=i-n;return t=>n+t*a}throw new Error(`Cannot interpolate ${e} values`)}function St(n,i={}){const e=ht(n);let a,t=n;function c(m,o){if(n==null)return e.set(n=m),Promise.resolve();t=m;let s=a,y=!1,{delay:h=0,duration:S=400,easing:K=yr,interpolate:C=ut}=Dt(Dt({},i),o);if(S===0)return s&&(s.abort(),s=null),e.set(n=t),Promise.resolve();const D=Ir()+h;let g;return a=Tr(I=>{if(I<D)return!0;y||(g=C(n,m),typeof S=="function"&&(S=S(n,m)),y=!0),s&&(s.abort(),s=null);const L=I-D;return L>S?(e.set(n=m),!1):(e.set(n=g(K(L/S))),!0)}),a.promise}return{set:c,update:(m,o)=>c(m(t,n),o),subscribe:e.subscribe}}const Cr=[{name:"Noble Blade",description:`Before the attack: You may move another
unit that is adjacent to the target 1 space.
~("Another unit" does not include you). `,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Ceremonial Blade",description:`Cannot target minions.
Before the attack: You may move a minion
that is adjacent to the target 1 space.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Spell Break",description:`**This turn:** Enemy heroes in radius
cannot perform skills.
~(Spell Break will not stop an attack action).`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Living Tsunami",description:`After you perform a basic skill, you
may trigger a minion battle in the
battle zone you are in.`,color:"PURPLE",level:4},{name:"Aspiring Duelist",description:`Ignore all minion defense modifiers.
~(This includes your minions, as well as the enemy minions).`,color:"BLUE",level:1,initiative:9,primaryAction:"DEFENSE",primaryValue:5,secondaryMovement:3},{name:"Gush of Water",description:`After the attack: You may push every
adjacent token and enemy unit 1 space.
~(If you choose this option, push all units that can be pushed).`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,secondaryMovement:4,secondaryDefense:3},{name:"Waveform",description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Expert Duelist",description:`Ignore all minion defense modifiers.
**This turn:** You are immune
to all other enemy attacks.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:6,secondaryMovement:3,item:"DEFENSE"},{name:"High Tide",description:`After the attack: You may push every
adjacent token and enemy unit 1 space.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Magical Current",description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Slippery Ground",description:`**This turn:** Enemies in radius may not move
more than 1 space with a movement action.
~(Enemies who start movement out of radius are unaffected).`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Violent Torrent",description:`Before the attack: One enemy hero in any of
the 3 spaces in a straight line directly behind
the target discards a card, or is defeated.
~(You cannot target an empty spcae with an attack).`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Arcane Swap",description:`Swap with a minion or a friendly hero in range.
~(Swap places with the target. This is not movement).`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Master Duelist",description:`Ignore all minion defense modifiers.
**This turn:** You are immune
to all other enemy actions.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:6,secondaryMovement:3,item:"RANGE"},{name:"Rogue Wave",description:`After the attack: Move the target 1 space.
You may push every token and enemy
unit adjacent to you 1 space.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Stranger Tide",description:`Place yourself into a space in
range without a spawn point.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Deluge",description:`**This turn and next turn:**
Enemies in radius may not move more
than 1 space with a movement action.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Raging Waters",description:`Before the attack: One enemy hero in any of
the 5 spaces in a straight line directly behind
the target discards a card, or is defeated.
May repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Empowered Swap",description:"Swap with a unit or a token in range.",color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"AREA"}],_r=[{name:"Dead or Alive",description:`You may give a hero in radius a ::marker_bounty:: bounty
marker. The hero with a bounty marker
spends 1 additional ::life_counters:: life counter when
defeated. You may then **choose one —**
>>An enemy hero adjacent to you discards
>a card, if able.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Side Quest",description:`Up to one enemy hero adjacent to
you discards a card, if able.
Give a hero in radius a ::marker_bounty:: bounty marker.
The hero with a bounty marker spends 1
additional ::life_counters:: life counter when defeated.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Get over here!",description:`Target a unit in a straight line and in range,
with no obstacles between you. Then move
that unit towards you by the shortest valid
path, until it is adjacent to you. **This turn:**
If it is an enemy unit, it cannot move.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:2},{name:"A Complicated Profession",description:`After you perform a basic skill,
an enemy hero adjacent to you
discards a card, or is defeated.`,color:"PURPLE",level:4},{name:"A Game of Chance",description:`An enemy hero in radius with 2 or more
cards in hand discards a card facedown.
Name a color and reveal that card.
If it's not the color you named, gain 1 coin
and the enemy hero may retrieve their card.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Light Crossbow",description:`Target a minion adjacent to you, or a hero
in range, and in a straight line, with no
other units, or terrain, between you.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5},{name:"Close Call",description:`Block the attack. The attacker may swap
their attack card with a card in their hand.
~(The card is swapped after the attack card is resolved).`,color:"GREEN",level:1,initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2},{name:"Dead Man's Hand",description:`An enemy hero in radius with 2 or more
cards in hand discards a card facedown.
Name a color and reveal that card. If it's
not the color you named, gain 2 coins and
the enemy hero may retrieve their card.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Heavy Crossbow",description:`Target a unit in range, and in a straight line,
with no other units, or terrain, between you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Narrow Escape",description:`Block the attack and move up to 1 space.
The attacker may swap their attack
card with a card in their hand.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"ATTACK"},{name:"Drinking Buddies",description:`A hero in radius may retrieve a discarded
card. **This turn:** Enemy heroes in radius may
not move to a space in a straight line from
them with a movement action.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Hand Crossbow",description:`+2 ::range_red:: Range if you target a hero with a
::marker_bounty:: bounty marker. Target a unit in range.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Vantage Point",description:`**Next turn:** You may ignore restrictions to
have no obstacles between you and the
target, when performing attacks and skills.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:3,item:"INITIATIVE"},{name:"We're Not Done Yet!",description:`An enemy hero in radius with 2 or more cards
in hand discards a card facedown. Name a
color and reveal that card. If it's not the color
you named, gain 1 coin and the enemy hero
may retrieve their card. If they do, repeat once.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Impaler",description:`Target a unit in range, and in a straight
line, with no friendly units, or terrain
between you. Before the attack: Up to
one enemy hero between you and the
target discards a card, or is defeated.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:5,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Perfect Getaway",description:`Block the attack and move up to 3 spaces
in a straight line. The attacker may swap
their attack card with a card in their hand.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"AREA"},{name:"Another One!",description:`A hero in radius may retrieve a discarded card.
**This turn and next turn:** Enemy heroes in
radius may not move to a space in a straight
line from them with a movement action.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Hunter-Seeker",description:`+2 ::range_red:: Range if you target a hero with a
::marker_bounty:: bounty marker. Target a unit in range.
If the target has a bounty marker, you may
repeat once on a different unit adjacent to you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"High Ground",description:`You may ignore obstacles.
**Next turn:** You may ignore restrictions to
have no obstacles between you and the
target when performing attacks and skills.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:4,item:"INITIATIVE"}],Kr=[{name:"Onslaught",description:`Target a unit adjacent to you. After the attack:
Move into the space it occupied.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:3},{name:"Leap Forward",description:`Target a hero adjacent to you. After the attack:
Move into the space it occupied. `,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:1,secondaryDefense:3},{name:"Bulwark",description:`**Choose one —**
>>**This round:** You and friendly units in radius
>cannot be moved, pushed, swapped, or
>forced to move by enemy heroes.
>>If your discard is empty, retrieve this card.`,color:"SILVER",initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:4},{name:"One Man Army",description:`You count as 2 minions during minion battle.
If you would be removed during minion
battle, you lose the push instead.`,color:"PURPLE",level:4},{name:"Brutal Jab",description:`**Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy minion adjacent to you
>up to 2 spaces.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6},{name:"Mad Dash",description:`Before the attack: Move 2 spaces in
a straight line to a space adjacent to
an enemy unit, then target that unit.
~(If you cannot make this move, you cannot attack).`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:7},{name:"Shield",description:`**This round:** If a friendly melee minion in
radius would be defeated, you may discard
a card. If you do, the minion is not defeated.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4},{name:"Crushing Punch",description:`Move up to 1 space, then **Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy minion adjacent to you up
>to 2 spaces.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"ATTACK"},{name:"Bullrush",description:`Before the attack: Move 2 or 3 spaces in
a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:8,item:"INITIATIVE"},{name:"Bolster",description:`**This round:** If a friendly non-heavy minion in
radius would be defeated, you may discard a
card. If you do, the minion is not defeated.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Shield Bash",description:`An enemy hero adjacent to you, who
has played an attack card this turn
discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"DEFENSE"},{name:"Throwing Axe",description:`Before the attack: You may discard a card.
If you do, +2 ::range_red:: Range. Target a unit in range.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"War Drummer",description:`A friendly hero in range may retrieve
a discarded card if either you, or that
hero, is adjacent to an enemy unit.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Savage Kick",description:`Move up to 1 space, then **Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy unit adjacent to you up to
>2 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"ATTACK"},{name:"Furious Charge",description:`Before the attack: Move 2, 3 or 4 spaces
in a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:3,secondaryDefense:8,item:"MOVEMENT"},{name:"Fortify",description:`**This round:** If a friendly minion in radius
would be defeated, you may discard a card.
If you do, the minion is not defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Counterattack",description:`An enemy hero adjacent to you, who
has played an attack card this turn
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"RANGE"},{name:"Throwing Spear",description:`Before the attack: You may discard a card.
+2 ::range_red:: Range if you have a card in the
discard. Target a unit in range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"AREA"},{name:"Master Skald",description:`A friendly hero in range may retrieve a
resolved or discarded card if either you,
or that hero, is adjacent to an enemy unit.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"}],Gr=[{name:"Walk the Plank",description:`**Choose one —**
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
~(The target hero must be adjacent to their friendly unit)`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4},{name:"Daring Strike",description:`Before the attack: You may move
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
~(A coin is not an obstacle. The space with a coin is empty.)`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Evasive Shot",description:`Target a unit in range in a straight line, with
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
a coin gain 1 coin. Remove the coins.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Tumble Shot",description:`Target a unit in range in a straight line, with no
other units, or terrain, between you. After the
attack: Move up to 2 spaces in a straight line.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Pathetic!",description:`If the attacker has a card in their discard,
block the attack. If you do, the attacker
discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"AREA"}],jr=[{name:"Dread Razor",description:`+1 ::range_gold:: Range if you are adjacent to
an empty minion spawn point in the
battle zone. Target a unit in range.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:1,secondaryDefense:1},{name:"Rusty Razor",description:`+1 ::range_gold:: Range if you are adjacent to
an empty minion spawn point in the
battle zone. Target a hero in range. `,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:1,secondaryDefense:1},{name:"Death Trap",description:`You may remove a friendly minion in radius.
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
~(Removing the minion is optional!)`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Vampiric Shield",description:`You may remove a friendly minion in radius.
+3 ::defense_blue:: Defense if there are 2 or more
empty minion spawn points in
radius in the battle zone.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:4,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"ATTACK"},{name:"Finger of Death",description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a hero with a card in the discard.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:1,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:"DEFENSE"},{name:"Darker Ritual",description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 2 coins.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Drain Essence",description:`Perform a non-attack action of a card in
the discard of an enemy hero in radius;
apply no item bonuses.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Burning Skull",description:`Target a unit in range. After the attack:
Push every enemy unit adjacent to the target
1 space away from the target's space.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:6,item:"INITIATIVE"},{name:"Necromancy",description:`If an enemy hero in radius has a card in
the discard, respawn a friendly minion in a
spawn point adjacent to you in the battle zone.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Aegis of Doom",description:`You may remove a friendly minion in radius.
If there are 2 or more empty minion spawn
points in radius in a battle zone +4 ::defense_blue::
Defense and **This turn:** You are immune.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValue:5,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"RANGE"},{name:"Middlefinger of Death",description:`Target a unit in range. +3 ::attack_red:: Attack if you
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
a spawn point in radius in the battle zone.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"}],Br=[{name:"Angry Strike",description:`Target a unit adjacent to you. +2 ::attack_gold:: Attack
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
this effect if you move or fast travel.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:6,modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"ATTACK"},{name:"Blunt Force",description:`Target a unit adjacent to you. After the attack:
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
**End of next turn:** May repeat once.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Form Testudo!",description:`**This round:** You and friendly units in
radius are immune to ranged actions
of enemy heroes outside of radius.
Cancel this effect if you move more than
2 spaces in a single turn, or fast travel.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:7,modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"ATTACK"},{name:"Send Flying",description:`Target a unit adjacent to you. After the attack:
you may move up to 3 spaces to a space
adjacent to the nearest enemy hero.
Push that hero up to 2 spaces.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:8,item:"AREA"},{name:"Heavy Pilum",description:`An enemy hero in range, not adjacent
to you, discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"}],Pr=[{name:"Fight and Flight",description:`If your discard is empty, **choose one —**
>>An enemy hero adjacent to you discards a
>card, if able. You then move 2 spaces in a
>straight line, if able.
>>Defeat a non-heavy minion adjacent to you.`,color:"GOLD",initiative:13,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:1},{name:"Fight or Flight",description:`If discard is empty, an adjacent
enemy hero discards a card, if able. You
then move 2 spaces in a straight line, if able.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:1},{name:"Hurry up!",description:`If your discard is empty, set the printed
::initiative:: Initiative value of an unresolved card
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
>to a friendly hero.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:5},{name:"Little to Gain",description:`If you have no cards in the discard, block
the attack. Discard your unresolved card,
if you have one and and place yourself on
a spawn point in your throne zone, if able.
Each enemy hero gains 1 coin.`,color:"GREEN",level:1,initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3},{name:"There and Back Again",description:`Swap with an enemy unit in radius.
**This turn:** That unit is immune.
**End of turn:** Swap with that unit,
regardless of radius, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Even the Odds",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
>to a friendly hero.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:"INITIATIVE"},{name:"Barely a Nuisance",description:`If you have no cards in the discard, block
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
>to a friendly hero.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:"MOVEMENT"},{name:"Killing Joke",description:`If you have no cards in the discard, block the
attack and place yourself on a spawn point in
your throne zone, if able. If you do, retrieve
this card. Each enemy hero gains 1 coin.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"DEFENSE"},{name:"That Way!",description:`A friendly hero in radius chooses a distance
of 1, 2, or 3. You choose a direction. You both
move that number of spaces in the chosen
direction; stop if you reach an obstacle.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Pile On",description:`+1 ::attack_red:: Attack for each friendly unit
adjacent to you. If you target a hero,
may repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:4,item:"AREA"},{name:"See Nothing",description:`Move up to 1 space. Swap with an enemy
hero in radius. Move up to 1 space.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"}],Ur=[{name:"Chaos Bolt",description:`::tiebreaker_blue::: Target a non-adjacent minion in range.
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
Place a ::token_magma:: magma token in each empty
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
Place a ::token_magma:: magma token in each empty
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
Place a ::token_magma:: magma token in each empty
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
::tiebreaker_orange:: You swap with an enemy unit in radius.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:2,item:"DEFENSE"}],xr=[{name:"Fast as Lightning",description:`After the attack: You may swap this card
with a resolved or discarded attack card
and apply that card's text.`,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:"Chop Down",description:`Cannot target minions.
After the attack: You may swap this card
with a resolved or discarded attack card
and apply that card's text.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Smoke Bomb",description:`Place a ::token_smoke_bomb:: smoke bomb token in radius.
Units can move through the smoke bomb.
Enemy heroes cannot target another unit
if there is a smoke bomb on a straight line
between them and the target.`,color:"SILVER",initiative:12,primaryAction:"DEFENSE_SKILL",primaryValue:2,modifier:"AREA",modifierValue:3},{name:"Flurry of blows",description:`After you perform a movement action,
all adjacent enemy heroes discard
a card, if able.`,color:"PURPLE",level:4},{name:"Trip Mine",description:`Place 2 mine tokens, 1 ::token_blast:: blast and 1 ::token_dud::
dud, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Crane Stance",description:`After the attack: Push an adjacent
enemy hero up to 1 space.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6},{name:"Poof!",description:`Swap with a mine, a grenade,
or a smoke bomb in radius.
If you do, block the attack.`,color:"GREEN",level:1,initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"AREA",modifierValue:3,secondaryMovement:2},{name:"Cluster Mine",description:`Place 3 mine tokens, 1 ::token_blast:: blast and 2 ::token_dud::
duds, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Tiger Stance",description:`After the attack: Push an adjacent
enemy hero up to 2 spaces.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Vanish",description:`Swap with a mine, a grenade, or a
smoke bomb in radius. If you do, when
used as a defense, block the attack.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"DEFENSE_SKILL",primaryValueSign:"EXCLAMATION",modifier:"AREA",modifierValue:3,secondaryMovement:2,item:"ATTACK"},{name:"Death Grenade",description:`Place a ::token_grenade:: grenade token into a space in
range, not adjacent to you. **End of turn:**
An enemy hero adjacent to the grenade
discards a card, if able, remove the grenade.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Viper Stance",description:`After the attack: You may swap with a
smoke bomb or a mine in radius.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"INITIATIVE"},{name:"Inner Strength",description:`If your discard is empty, **This round:** Double
your item bonuses. If you discard a card,
cancel this effect after the action is resolved.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Mine Field",description:`Place 3 mine tokens, 2 ::token_blast:: blasts and 1 ::token_dud::
dud, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"AREA"},{name:"Dragon Stance",description:`After the attack: Move up to 1 space to a
space adjacent to the target, if able. Push
an adjacent enemy hero up to 3 spaces.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Ruse",description:`Swap with a mine, a grenade, or a smoke
bomb in radius. If you do, when used as
a defense, block the attack and you may
retrieve a resolved or discarded silver card.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"DEFENSE_SKILL",primaryValueSign:"EXCLAMATION",modifier:"AREA",modifierValue:3,secondaryMovement:2,item:"DEFENSE"},{name:"Holy Death Grenade",description:`Place a ::token_grenade:: grenade token into a space in
range, not adjacent to you. **End of turn:** An
enemy hero adjacent to the grenade discards
a card, or is defeated, remove the grenade.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"MOVEMENT"},{name:"Cobra Stance",description:`After the attack: You may swap with
a smoke bomb or a mine in radius.
If you do, repeat once on a different hero.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"RANGE"},{name:"Perfect Self",description:`You may retrieve a discarded card. If your
discard is empty, **This round:** Double your
item bonuses. If you discard a card, cancel
this effect after the action is resolved.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"ATTACK"}],Or=[{name:"Watch Me Soar",description:`You may move through obstacles.
**This turn:** You are immune to non-ranged
attacks and skills. Ignore the effects of
tokens. Other units may move through you.`,color:"GOLD",initiative:9,primaryAction:"MOVEMENT",primaryValue:5,secondaryDefense:6},{name:"Swoop In",description:`Place yourself into a space in radius,
adjacent to an enemy hero. **This turn:**
Heroes in radius must attack you, if able,
when performing an attack action. The first
time you discard a card, gain 2 coins.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Step In",description:`Place yourself into a space in radius,
adjacent to an enemy hero. **This turn:**
Heroes in radius must attack you, or a minion,
if able, when performing an attack action.
The first time you discard a card, gain 2 coins.`,color:"SILVER",handicapped:!0,initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:1,secondaryDefense:2},{name:"Power Overwhelming",description:`You may move through obstacles.
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
card this way, gain 2 coin.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"DEFENSE_SKILL",primaryValue:7,secondaryMovement:3,item:"ATTACK"}],Fr=[{name:"Mind Grip",description:`**Choose one —**
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
>>**Next turn:** Gain +2 ::initiative:: Initiative.`,color:"SILVER",initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:4},{name:"What the Hell Are You?",description:`If you would be defeated as part of your own
action, first defeat all enemy minions in radius
and enemy heroes in radius discard a card, or
are defeated. Spend no life counters.`,color:"PURPLE",level:4,modifier:"AREA",modifierValue:2},{name:"Imbue Doubt",description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5},{name:"Assume Control",description:`**Choose one —**
>>Before the attack: Move a friendly minion in
>range up to 3 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7},{name:"Fleeting Image",description:`Place an ::token_illusion:: illusion token in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.
~(Complete the action causing the discard before the swap).`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Time to Reconsider",description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"DEFENSE"},{name:"Direct Control",description:`**Choose one —**
>>Before the attack: Move a friendly minion in
>range up to 4 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:"INITIATIVE"},{name:"Multiple Projections",description:`Place up to 2 ::token_illusion:: illusion tokens in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Crack in Reality",description:`Split the board with a straight line of spaces
drawn through your space: **This turn:**
Units on either side of the line are immune to
actions of units on the opposite side of the line.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Twist Fate",description:`Target a unit in range. After the attack:
If you target a hero, you may swap any
two of their resolved cards.
~(Any active effects on the swapped cards are canceled).`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Phantasmal Warrior",description:`Place an ::token_illusion:: illusion token in radius. **This**
**round:** While you are performing actions, the
illusion tokens count as friendly melee minions.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"An Illusion of Choice",description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.
May repeat once on the same Hero.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"DEFENSE"},{name:"Master of Puppets",description:`**Choose one, or both**, in any order **—**
>>Before the attack: Move a friendly minion in
>range up to 4 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:"MOVEMENT"},{name:"Master Of Illusions",description:`Place up to 3 ::token_illusion:: illusion tokens in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Shift Reality",description:`Split the board with a straight line of spaces
drawn through your space: **This turn:** You are
immune to actions of units on either side of
the line. All other units are immune to actions
of units on the opposite side of the line.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Devious Scheme",description:`Target a unit in range. After the attack:
If you target a hero, you may swap
any two of their resolved, unresolved,
or discarded cards.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:"AREA"},{name:"Phantasmal Colossus",description:`Place an ::token_illusion:: illusion token in radius. **This**
**round:** Illusion tokens are immune to enemy
actions. While you are performing actions, the
illusion tokens count as friendly melee minions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"RANGE"}],Yr=[{name:"Point Blank Shot",description:`After the attack: If the target
is adjacent, push the target 1 space.
~(A unit pushed into an obstacle will stop. This is a valid push) `,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Bang",description:`Cannot target minions. After the attack: If the
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
~(You may move a heavy minion with this skill).`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2},{name:"Battle Drill",description:`**This round:** Friendly minions in radius,
including the immune ones, reduce the
defense total as if they were ranged minions.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryDefense:4,item:"ATTACK"},{name:"Gunslinger",description:`Target a non-adjacent unit.
+2 ::attack_red:: Attack if the target hero
played an attack card this turn.
~(A revealed card is "played" even if it's not resolved yet).`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Control",description:`Move any 1 friendly minion in radius up to
3 spaces; ignore heavy minion immunity.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Close Support",description:`If you are adjacent to a friendly minion, an
enemy hero in radius discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Shootout",description:`Target a unit in range. After the attack: If you
defeated a minion with this attack, and there
is no enemy hero in range, you may remove
a non-heavy enemy minion adjacent to you.
~(You gain no coins for removing a minion.)`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Lead the Charge",description:`If you are adjacent to a friendly minion,
block the attack.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"},{name:"Field Promotion",description:`**This round:** Friendly minions in radius,
including the immune ones, reduce the
defense total as if they each were both
a ranged minion and a melee minion.
~(This can reduce the defense total by up to 2 per minion.)`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryDefense:4,item:"ATTACK"},{name:"Dead Shot",description:`+2 ::attack_red:: Attack if the target hero
played an attack card this turn.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Tactical Advantage",description:`Move any 1 friendly minion in radius up to
3 spaces; ignore heavy minion immunity.
May repeat once.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Covering Fire",description:`If you are adjacent to a friendly minion,
an enemy hero in radius discards a
card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"RANGE"},{name:"Bullet Hell",description:`Target a unit in range. After the attack:
If you defeated a minion with this attack, and
there is no enemy hero in range, you may
remove a non-heavy enemy minion in range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"MOVEMENT"},{name:"Plot Armor",description:`If you are adjacent to a friendly minion,
block the attack and **This turn:** You are
immune to all other enemy action.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"}],zr=[{name:"Hit and Run",description:`Cannot attack if you are adjacent to
an enemy unit. Target a unit in range.
After the attack: You may fast travel, if able.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:1},{name:"Keep the Distance",description:`Cannot attack if you are adjacent to an
enemy unit. Target a hero in range.
After the attack: You may fast travel
within the same zone, if able.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:2},{name:"Trailblazer",description:`If you are not adjacent to an enemy unit, you
may move up to 4 spaces in a straight line to
a space not adjacent to an enemy unit.`,color:"SILVER",initiative:13,primaryAction:"SKILL",secondaryDefense:1},{name:"Wild Hunt",description:`Each time before you perform an action
you may move 2 spaces in a straight line.`,color:"PURPLE",level:4},{name:"Grasping Roots",description:`**This turn:** Enemy heroes in radius adjacent
to terrain cannot fast travel, or move more
than 1 space with a movement action.`,color:"BLUE",level:1,initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"Snap Shot",description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. Target a hero in range,
or a minion adjacent to you and in range.
~(If your range is below 1, you cannot perform this action).`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,modifierValueSign:"MINUS",secondaryMovement:5,secondaryDefense:5},{name:"Disorient",description:`Move an enemy unit adjacent to you up
to 1 space. If you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:1},{name:"Entangling Vines",description:`**This turn:** Enemy heroes in radius
adjacent to terrain, or to their friendly
hero, cannot fast travel, or move more
than 1 space with a movement action.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryDefense:3,item:"DEFENSE"},{name:"Opportunity Shot",description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. Target a unit in range.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:4,modifierValueSign:"MINUS",secondaryMovement:5,secondaryDefense:5,item:"INITIATIVE"},{name:"Divert Attention",description:`Move an enemy unit adjacent to you up
to 2 spaces. If you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Warning Shot",description:`If you are not adjacent to an enemy unit,
**End of turn:** An enemy hero in radius
discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Long Shot",description:"Target a unit at maximum range.",color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:"DEFENSE"},{name:"Fae Healing",description:`If you are not adjacent to an enemy unit,
another hero in radius may retrieve a
discarded card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Grappling Branches",description:`**This turn:** Enemy heroes in radius
adjacent to terrain, or to their friendly
unit, cannot fast travel, or move more
than 1 space with a movement action.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"DEFENSE"},{name:"Clear Shot",description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. target a unit in range.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:5,modifierValueSign:"MINUS",secondaryMovement:5,secondaryDefense:6,item:"INITIATIVE"},{name:"Lead Astray",description:`Move an enemy unit adjacent to you up
to 3 spaces. If you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"MOVEMENT"},{name:"Treetop Sentinel",description:`If you are not adjacent to an enemy unit,
**End of turn:** An enemy hero in radius,
discards a card or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Rain of Arrows",description:`Target a unit at maximum range.
If you target a hero, may repeat
up to two times on different heroes.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:5,item:"AREA"},{name:"Nature's Blessing",description:`If you are not adjacent to an enemy unit,
you and up to one hero in radius may
retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"RANGE"}],Hr=[{name:"Reload!",description:`Perform the primary action of the
resolved card in your previous turn slot.`,color:"GOLD",initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:1},{name:"Backup",description:`Perform the primary action of your resolved
card in the previous turn slot. If you perform
an attack this way, you cannot target minions.`,color:"GOLD",handicapped:!0,initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:1},{name:"Bounce",description:`Swap this card with a red or a gold card
in your hand or discard. If you do, you may
push an enemy unit adjacent to you 1 space,
then move 2 spaces in a straight line, if able.`,color:"SILVER",initiative:13,primaryAction:"SKILL",secondaryDefense:2},{name:"Bullet Time",description:`After you perform any action on your Gold
card, you may perform an action on your
Gold card again; it can be the same action.
Cannot target the same enemy hero twice.`,color:"PURPLE",level:4},{name:"Steam Jump",description:`Place yourself into a space in a straight line
and at maximum radius. You may then push
an enemy unit adjacent to you 1 space.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3},{name:"Snipe",description:`Target a unit at maximum range
and in a straight line.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5},{name:"Suppress",description:`An enemy hero in radius, not adjacent
to you and not adjacent to terrain, or a
token, discards a card, if able.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Assault Jump",description:`Place yourself into a space in a straight line in
radius and not adjacent to you. You may then
push an enemy unit adjacent to you 1 space.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Prepared Shot",description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Pin Down",description:`An enemy hero in radius, not adjacent
to you and not adjacent to terrain, or a
token, discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Tactical Jump",description:`You may place yourself into a space in
radius not in a straight line from you.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:1,item:"DEFENSE"},{name:"Shotgun",description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a unit adjacent to you. Before the
attack: Up to one enemy hero adjacent to
the target discards a card, if able.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Steam Cover",description:`**Next turn:** Before you perform an action, you
may swap any two of your resolved cards.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Drop Trooper",description:`Place yourself into a space in a straight
line in radius. You may then push up to two
enemy units adjacent to you 1 space.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Killshot",description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:6,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Killing Ground",description:`An enemy hero in radius, not adjacent to
you and not adjacent to terrain, or a token,
discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"RANGE"},{name:"Steam Valkyrie",description:`You may place yourself into a space in
radius not in a straight line from you.
You may then fast travel once, if able.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:1,item:"MOVEMENT"},{name:"Super-Shotgun",description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a unit adjacent to you. Before the
attack: Up to one enemy hero adjacent to
the target discards a card, or is defeated.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Fog of War",description:`**Next turn:** Before or After you perform
an action, you may swap any two
of your resolved cards.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:3,item:"INITIATIVE"}],Wr=[{name:"Turn to Ice",description:`**Choose one —**
>>A hero in range with an unresolved card
>may choose to retrieve that card. If they
>do not, name a color. That hero discards
>a card of that color, if able.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Cold Touch",description:`A hero in range with an unresolved card
may choose to retrieve that card.
If they do not, name a color. That hero
discards a card of that color, if able.`,color:"GOLD",handicapped:!0,initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Commune with Spirits",description:`The nearest friendly hero names a color,
you may then **choose one —**
>>Discard a card of that color. If you do,
>perform any one action on that card.
>>Retrieve a discarded card of that color.`,color:"SILVER",initiative:12,primaryAction:"SKILL",secondaryDefense:2},{name:"Reign of Winter",description:`Whenever an enemy hero in play
retrieves a card as a result of an action,
that hero discards a card, if able, and
you may retrieve your discarded card.`,color:"PURPLE",level:4},{name:"Cold Snap",description:`The nearest enemy hero in radius discards a
card, if able. **Next turn, after playing cards:**
That hero may retrieve that discarded card.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5},{name:"Frost Dagger",description:`Target a unit adjacent to you. After the attack:
If you target a hero, that hero discards a card,
if able. **Next turn, after playing cards:**
That hero may retrieve that card.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6},{name:"Glacial Barrier",description:`Place an ::token_ice:: ice token in radius, adjacent
to another ice token, if able. Enemy
heroes have -1 ::initiative:: Initiative penalty for
every ice token they are adjacent to.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Snowstorm",description:`Name a color. The nearest enemy hero in
radius discards a card of that color, if able.
**Next turn, after playing cards:** That hero
may retrieve a discarded card of that color.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Frost Spear",description:`Target a unit adjacent to you. After the
attack: If you target a hero, name a color.
That hero discards a card of that color,
if able. **Next turn, after playing cards:**
That hero may retrieve that card.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Wall of Frost",description:`Place up to 2 ::token_ice:: ice tokens in radius,
adjacent to another ice token, if able.
Enemy heroes have -1 ::initiative:: Initiative penalty
for every ice token they are adjacent to.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Guardian Spirit",description:`If you have a card in the discard,
a friendly hero in radius may
retrieve a discarded card.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Spirit Wolf",description:`If you have a card in the discard, target a
minion in range, or a hero adjacent to you.
Otherwise, target a unit adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Ancestral Totem",description:`Place a ::token_totem:: totem token in radius.
If a friendly melee minion adjacent
to a totem would be defeated, you
may remove the totem instead.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Blizzard",description:`Name a color. The nearest enemy hero in
radius discards a card of that color, if able.
**End of next turn:** That hero may retrieve
a discarded card of that color.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Frost Scepter",description:`Target a unit adjacent to you. After the attack:
If you target a hero, name a color. That hero
discards a card of that color, if able. **End of**
**next turn:** That hero may retrieve that card.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"Pack Ice",description:`Place up to 3 ::token_ice:: ice tokens in radius,
adjacent to another ice token, if able.
Enemy heroes have -1 ::initiative:: Initiative penalty
for every ice token they are adjacent to.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Vengeful Spirit",description:`If you have a card in the discard,
you, or a friendly hero in radius,
may retrieve a discarded card.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Spirit Bear",description:`If you have a card in the discard,
target a unit in range. Otherwise,
target a unit adjacent to you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"AREA"},{name:"Venerated Totem",description:`Place a ::token_totem:: totem token in radius. If a
friendly minion adjacent to a totem would be
defeated, you may remove the totem instead.
Totems are immune to enemy actions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"}],Xr=[{name:"Blink Strike",description:`Before the attack: Move 2 spaces in a straight
line through an enemy unit; Target that unit.
~(If you cannot make this move, you cannot attack). `,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:2,secondaryDefense:1},{name:"Nimble Strike",description:`Before the attack: Move 2 spaces in a straight
line through an enemy hero; target that hero.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Blend Into Shadows",description:`If you are adjacent to an obstacle, place
yourself into a space in radius not adjacent
to an enemy unit. If you do, **Next turn:** You
are immune, and may move through units.`,color:"SILVER",initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:2},{name:"Cloak and Daggers",description:`If you are immune: Before you perform
(or repeat) any action, move up to 2 spaces;
after you perform a basic attack, you may
repeat it once on a different target.`,color:"PURPLE",level:4},{name:"Dodge",description:"Block a ranged attack.",color:"BLUE",level:1,initiative:10,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3},{name:"Hit and Run",description:`Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:5,secondaryDefense:3},{name:"Light-Fingered",description:`Move up to 2 spaces, then take up to 1 coin
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:"GREEN",level:1,initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:2},{name:"Sidestep",description:`Block a ranged attack. If you do, you may
move 2 spaces in a straight line.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"DEFENSE"},{name:"Combat Reflexes",description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: If you did not move before
the attack, you may move 1 space.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:5,secondaryDefense:4,item:"INITIATIVE"},{name:"Pick Pocket",description:`Move up to 2 spaces, then take up to 2 coins
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:2,item:"ATTACK"},{name:"Parry",description:`Block a non-ranged attack.
The attacker discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"Backstab",description:`Target a unit adjacent to you. +2 ::attack_red:: Attack
if a friendly unit is adjacent to the target.
~(A "friendly unit" is another hero or a minion on your team).`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:6,item:"DEFENSE"},{name:"Poisoned Dagger",description:`Give a hero in range a ::marker_poison:: poison marker.
Each ::initiative:: Initiative and ::attack_silver:: Attack item of a
hero with a poison marker reduces that
value by 1, instead of increasing it by 1.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"},{name:"Evade",description:`Block a ranged attack. If you do, you may
move 2 spaces in a straight line and you
may swap this card with a card in your hand.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"Leaping Strike",description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:5,secondaryDefense:4,item:"AREA"},{name:"Master Thief",description:`Move up to 2 spaces, then take up to 3 coins
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:3,item:"INITIATIVE"},{name:"Reposte",description:`Block a non-ranged attack. The attacker
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"RANGE"},{name:"Backstab with a Ballista",description:`Target a unit in range. +3 ::attack_red:: Attack
and this attack cannot be blocked,
if a friendly unit is adjacent to the target.
~("Block" is a keyword - the target hero can still defend!)`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:1,secondaryMovement:5,secondaryDefense:6,item:"DEFENSE"},{name:"Poisoned Dart",description:`Give a hero in range a ::marker_poison:: poison marker.
Each ::initiative:: Initiative, ::attack_silver:: Attack, and ::defense_silver:: Defense
item of a hero with a poison marker reduce
that value by 1, instead of increasing it by 1.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"MOVEMENT"}],Zr=[{name:"Rapid Deployment",description:`**Choose one —**
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
in radius of the Turret, with the Turret.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"ATTACK"},{name:"Deployable Barrier",description:`Place up to 2 ::token_barrier:: barrier tokens in radius of
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
in radius of the Turret, with the Turret.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Deployable Bastion",description:`Place up to 3 ::token_barrier:: barrier tokens in radius of
the Turret and adjacent to another barrier
token, if able. You and friendly heroes gain
+1 ::defense_silver:: Defense for each adjacent barrier token.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Flame Belcher",description:`Target a unit in range of both you and the
Turret. After the attack: One other enemy
hero in range of both you and the Turret
discards a card, if able.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"MOVEMENT"},{name:"Emergency Protocol",description:`Enemy heroes in radius of the Turret discard
a card, or are defeated. Remove the Turret.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"RANGE"}],qr=[{name:"Claws That Catch",description:`Before the attack: If you are enraged and
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
~(You may choose to move 0 spaces and still swap).`,color:"BLUE",level:1,initiative:9,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:5},{name:"Prey Drive",description:`Target a unit adjacent to you. Before the
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
~(They can move into, or out of those spaces, but not both).`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:6,item:"ATTACK"},{name:"Rip",description:`After the attack: If you are enraged, and
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
>>You may retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"}],Jr=[{name:"Dazzling Dagger",description:`Target a unit adjacent to you. After the
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
~(Adjacent units are in a straight line as well).`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Telekinesis",description:`Place a unit or a token in range, which is not
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
adjacent to you. May repeat once.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"}],Qr=[{name:"Swift Justice",description:`**Choose one —**
>>An enemy hero in range discards a card,
>if able; then, if able, that hero moves the
>number of spaces equal to that card's
>printed movement value in a straight line.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Vile Accusation",description:`An enemy hero in range discards a card,
if able; then, if able, that hero moves the
number of spaces equal to that card's
printed movement value in a straight line.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:2},{name:"Death Seeker",description:`If an enemy hero in radius has a card
in the discard, **choose one —**
>>**This turn:** You are immune to attacks.
>>You may retrieve a discarded card.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:2},{name:"Grim Reaper",description:`After you perform a basic action,
you may repeat it once, chosing
the same, or a different option.`,color:"PURPLE",level:4},{name:"Cause Fear",description:`Move up to 3 enemy minions in radius
up to 1 space in the same direction.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5},{name:"Blood Trail",description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
2 spaces, then target a unit adjacent to you.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:1,secondaryMovement:4,secondaryDefense:6},{name:"Shadow Step",description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Instill Dread",description:`Move up to 3 enemy minions in radius
up to 2 spaces in the same direction;
they can be moved through obstacles.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Crimson Thirst",description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
2 spaces, then target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Shadow Walk",description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Lesser Evil",description:`An enemy hero in range **chooses one —**
>>That hero discards a card, if able.
>>You defeat a minion adjacent to you.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"},{name:"Sense Blood",description:`If able, target a hero in range
with a card in their discard.
Otherwise, target an adjacent unit.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"No Escape",description:`If an enemy hero in radius has a card
in the discard, +2 ::movement_green:: Movement.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"MOVEMENT",primaryValue:2,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:3,secondaryDefense:3,item:"ATTACK"},{name:"Strike Terror",description:`Move up to 3 enemy minions in radius
up to 3 spaces in the same direction;
they can be moved through obstacles.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:"AREA"},{name:"Sanguine Fury",description:`Before the attack: Move up to 2 spaces for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
4 spaces, then target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"Creeping Shadow",description:`Place yourself into an empty minion spawn
point in range in the battle zone, or into a
space in range adjacent to that spawn point.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Greater Good",description:`An enemy hero in range **chooses one —**
>>That hero discards a card, or is defeated.
>>You defeat up to 3 minions adjacent to you.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:"RANGE"},{name:"Blind Frenzy",description:`Target a hero in range with a card in the
discard, or a unit adjacent to you.
May repeat once on a different hero.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:"DEFENSE"},{name:"Dark Stalker",description:`If an enemy hero in radius has a card
in the discard, +3 ::movement_green:: Movement.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"MOVEMENT",primaryValue:2,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"ATTACK"}],$r=[{name:"Tree Slam",description:`If you are adjacent to a tree token, target
a unit in range, otherwise, target a minion
adjacent to you. After the attack:
If the target was adjacent to you, move it
1 space to a space adjacent to you, if able.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:3},{name:"Makeshift Weapon",description:`Cannot attack if you are not adjacent to a tree
token. Target a unit in range. After the attack:
If the target was adjacent to you, move it 1
space to a space adjacent to you, if able.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:"Mystic Saplings",description:`Place up to 3 ::token_tree:: tree tokens in radius, not
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
tree token into a space adjacent to you.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"DEFENSE_SKILL",primaryValue:4,modifier:"AREA",modifierValue:4,secondaryMovement:2,item:"DEFENSE"}],eo=[{name:"Backlash",description:`**This turn:** After you discard a card for any
reason, perform the primary action on an
attack card in your discard, if able.
~(First complete the action causing the discard).`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Counter-Swing",description:`Cannot target minions.
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
~(Will affect multiple heroes if they are at the same distance.)`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Dangerous Slash",description:`+1 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:6},{name:"Charming Aura",description:`**This round:** Enemy melee minions in
radius count as if on your team for the
purpose of defense modifiers.`,color:"GREEN",level:1,initiative:5,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Petrifying Stare",description:`**This turn:** The nearest enemy heroes
in radius are immune, cannot perform a
movement action, and count as terrain.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Deadly Swipe",description:`+2 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:7,item:"INITIATIVE"},{name:"Aura of Control",description:`**This round:** Enemy ranged and melee
minions in radius count as if on your team
for the purpose of defense modifiers.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Fresh Converts",description:`If you are adjacent to a minion,
you may retrieve a discarded card.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Long Thrust",description:"Target a unit not adjacent to you.",color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Constrict",description:`**Next turn:** Adjacent enemy heroes cannot
move, except when performing a movement
action on a gold card or a red card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:4,item:"ATTACK"},{name:"Turn into Statues",description:`**This turn:** Enemy heroes in radius are
immune, cannot perform a movement
action, and count as terrain.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Lethal Spin",description:`+3 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:7,item:"AREA"},{name:"Aura of Domination",description:`**This round:** All enemy minions, including the
immune ones, in radius count as if on your
team for the purpose of defense modifiers.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Devoted Followers",description:`If you are adjacent to a minion, you may
retrieve a discarded card and **This turn:**
You are immune to attack actions.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Rapid Thrusts",description:`Target a unit not adjacent to you. After the
attack: If you are adjacent to an enemy hero,
may repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Deadly Embrace",description:`**Next turn:** Adjacent enemy heroes
cannot move, except when performing
a movement action on a gold card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:4,item:"DEFENSE"}],no={arien:Cr,bain:_r,brogan:Kr,cutter:Gr,dodger:jr,garrus:Br,hanu:Pr,ignatia:Ur,min:xr,misa:Or,nebkher:Fr,sabina:Yr,silverarrow:zr,swift:Hr,tali:Wr,tigerclaw:Xr,trinkets:Zr,ursafar:qr,wasp:Jr,whisper:Qr,wuk:$r,xargatha:eo},io=[{name:"Noble Blade",description:`Target a unit adjacent to you.
Before the attack: You may move another
unit that is adjacent to the target 1 space.
~("Another unit" never includes you.)`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Ceremonial Blade",description:`Target a hero adjacent to you.
Before the attack: You may move a minion
that is adjacent to the target 1 space.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Spell Break",description:`**This turn:** Enemy heroes in radius cannot
perform skill actions, except on gold cards.
~(Skill ::skill_silver:: is an action type. Other action types are unaffected.)`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"Living Tsunami",description:`Once per turn, before performing an
Attack action, you may move 1 space.`,color:"PURPLE",level:4},{name:"Aspiring Duelist",description:`Ignore all minion defense modifiers.
~(This includes your minions, as well as the enemy minions.)`,color:"BLUE",level:1,initiative:9,primaryAction:"DEFENSE",primaryValue:5,secondaryMovement:3},{name:"Dangerous Current",description:`Target a unit adjacent to you. Before the
attack: Up to 1 enemy hero in any of the
2 spaces in a straight line directly behind
the target discards a card, or is defeated.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:4,secondaryDefense:6},{name:"Liquid Leap",description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Expert Duelist",description:`Ignore all minion defense modifiers.
**This turn:** You are immune to attack actions
of all enemy heroes, except this attacker.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:6,secondaryMovement:3,item:"INITIATIVE"},{name:"Rogue Wave",description:`Target a unit in range.
After the attack: You may an enemy
unit adjacent to you up to 2 spaces.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Magical Current",description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Slippery Ground",description:`**This turn:** Enemies heroes adjacent
to you cannot fast travel, or move more
than 1 space with a movement action.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,secondaryDefense:6,item:"ATTACK"},{name:"Raging Stream",description:`Target a unit adjacent to you. Before the
attack: Up to 1 enemy hero in any of the
3 spaces in a straight line directly behind
the target discards a card, or is defeated.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Arcane Whirlpool",description:`Swap with an enemy minion in range.
~(Swap places with the target. This is not movement.)`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Master Duelist",description:`Ignore all minion defense modifiers.
**This round:** You are immune to attack actions
of all enemy heroes, except this attacker.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:6,secondaryMovement:3,item:"RANGE"},{name:"Violent Torrent",description:`Target a unit adjacent to you. Before the
attack: Up to 1 enemy hero in any of the 5
spaces in a straight line directly behind the
target discards a card, or is defeated.
May repeat once on a different unit.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Stranger Tide",description:`Place yourself into a space in
range without a spawn point.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"AREA"},{name:"Deluge",description:`**This turn:** Enemies in radius
cannot fast travel, or move more than
1 space with a movement action.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,modifier:"AREA",modifierValue:1,secondaryDefense:6,item:"ATTACK"},{name:"Tidal Blast",description:`Target a unit in range.
After the attack: You may push an enemy
unit adjacent to you up to 3 spaces.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Ebb and Flow",description:`Swap with aan enemy minion in range;
if it was adjacent to you, may repeact once.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"}],ao=[{name:"Dead or Alive",description:`Target a unit adjacent to you.
After the attack: You may give an enemy
hero in radius the ::marker_bounty:: Bounty marker.
A hero with the Bounty marker spends
1 additional ::life_counters:: life counter when defeated.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Side Quest",description:`If you are adjacent to an enemy unit,
give a hero in radius a ::marker_bounty:: Bounty marker.
A hero with the Bounty marker spends
1 additional ::life_counters:: life counter when defeated.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:1},{name:"Get over here!",description:`Target a unit or a token in range and in a
straight line, with no obstacles between you
and the target. Move that target towards you
in a straight line, until you are adjacent.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:2},{name:"A Complicated Profession",description:`After you give a hero the ::marker_bounty:: Bounty marker,
that hero discards a card.`,color:"PURPLE",level:4},{name:"A Game of Chance",description:`An enemy hero in radius with two or more
cards in hand chooses one of those cards.
Guess that card's color, then reveal it.
If you guessed correctly, discard that card;
otherwise you gain 1 coin.
~(You can only guess colors that could be in that player's hand.)`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Light Crossbow",description:`Target a unit in range and in a straight line
with no other units or terrain between you.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5},{name:"Close Call",description:`If the hero in play has a ::marker_bounty:: Bounty marker,
block the attack and that hero
gives the marker to you.
~(The marker's effect is applied to you.)`,color:"GREEN",level:1,initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2},{name:"Dead Man's Hand",description:`An enemy hero in radius with two or more
cards in hand chooses one of those cards.
Guess that card's color, then reveal it.
If you guessed correctly, discard that card;
otherwise you gain 2 coins.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Heavy Crossbow",description:`Target a unit in range and in a straight line
with no units or terrain between you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Narrow Escape",description:`If the hero in play has a ::marker_bounty:: Bounty marker,
block the attack and retrieve the marker.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"},{name:"Drinking Buddies",description:`You may have a hero in radius retrieve a
discarded card. If they do, you may
also retrieve a discarded card.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Hand Crossbow",description:`**Choose one —**
>>Target a hero in range with
>a ::marker_bounty:: Bounty marker.
>>Target a unit adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Vantage Point",description:`Ignore obstacles. If a hero in play has
a ::marker_bounty:: Bounty marker, +1 ::movement_green:: movement.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,primaryValueSign:"PLUS",secondaryDefense:3,item:"ATTACK"},{name:"We're Not Done Yet!",description:`An enemy hero in radius with two or more
cards in hand chooses one of those cards.
Guess that card's color, then reveal it.
If you guessed correctly, discard that card;
otherwise may repeat once or gain 2 coins.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"RANGE"},{name:"Arbalest",description:`Target a unit in range and in a straight line
with no units or terrain between you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Perfect Getaway",description:`If the hero in play has a ::marker_bounty:: Bounty marker,
block the attack.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"},{name:"Another One!",description:`You may have a hero in radius retrieve a
discarded card. If they do, you may
also retrieve a discarded card.
**End of turn:** May repeat once.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Hunter-Seeker",description:`**Choose one, or both,** on different targets —
>>Target a hero in range with
>a ::marker_bounty:: Bounty marker.
>>Target a unit adjacent to you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"High Ground",description:`Ignore obstacles. If a hero in play has
a ::marker_bounty:: Bounty marker, +2 ::movement_green:: movement.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"MOVEMENT",primaryValue:2,primaryValueSign:"PLUS",secondaryDefense:4,item:"AREA"}],to=[{name:"Onslaught",description:`Target a unit adjacent to you. After the attack:
Move into the space it occupied, if able.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:3},{name:"Leap Forward",description:`Target a hero adjacent to you. After the attack:
Move into the space it occupied, if able.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:3},{name:"Bulwark",description:`You may retrieve a discarded card.
**This turn:** You and friendly units in radius
cannot be moved, pushed, swapped
or placed by enemy heroes.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:4},{name:"One Man Army",description:`During minion battle you count as a heavy
minion; if you would be removed,
lose the push instead.`,color:"PURPLE",level:4},{name:"Brutal Jab",description:`You may move 1 space. Push an enemy unit
or a token adjacent to you up to 1 space.`,color:"BLUE",level:1,initiative:8,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:5},{name:"Mad Dash",description:`Before the attack: Move 2 spaces
in a straight line to a space adjacent to
an enemy unit, then target that unit.
~(If you cannot make this move, you cannot attack.)`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:7},{name:"Shield",description:`**This round:** When any friendly minion in radius
is defeated you may discard a silver card.
If you do, the minion is not removed.
~(The enemy hero still gains the coins for defeating the minion.)`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:1,secondaryMovement:2,secondaryDefense:4},{name:"Mighty Punch",description:`You may move 1 space. Push an enemy unit
or a token adjacent to you up to 2 spaces.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"INITIATIVE"},{name:"Bullrush",description:`Before the attack: Move 2 or 3 spaces in
a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:8,item:"INITIATIVE"},{name:"Bolster",description:`**This round:** When any friendly minion in radius
is defeated you may discard a silver card.
If you do, the minion is not removed.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Shield Bash",description:`An enemy hero adjacent to you who
has played an attack card this turn
discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Throwing Axe",description:`**Choose one —**
>>Target a hero adjacent to you.
>>You may discard a card;
if you do, target a unit in range.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"DEFENSE"},{name:"War Drummer",description:`A friendly hero in range gains 1 coin;
if any hero was defeated this round,
that friendly hero gains 3 coins instead.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"},{name:"Savage Kick",description:`Move up to 2 spaces. Push an enemy unit
or a token adjacent to you up to 2 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"INITIATIVE"},{name:"Furious Charge",description:`Before the attack: Move 2, 3 or 4 spaces
in a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:3,secondaryDefense:8,item:"MOVEMENT"},{name:"Fortify",description:`**This round:** When any friendly minion in radius
is defeated you may discard a basic card.
If you do, the minion is not removed.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Counterattack",description:`An enemy hero adjacent to you who
has played an attack card this turn
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"RANGE"},{name:"Throwing Spear",description:`**Choose one —**
>>Target a hero adjacent to you.
>>You may discard a card. If you have a card
in the discard, target a unit in range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Master Skald",description:`A friendly hero in range gains 2 coin2;
if any hero was defeated this round,
that friendly hero gains 4 coins instead.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"}],ro=[{name:"Familiar Ground",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range who is
>adjacent to 3 or more obstacles.
~(You, other heroes, minions, tokens and terrain are obstacles.)`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Home Turf",description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a hero in range who is
>adjacent to 3 or more obstacles.
~(You, other heroes, minions, tokens and terrain are obstacles.)`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Decoy",description:`**Choose up to two times,**, on different targets —
>>Move an enemy minion in radius 1 space.
>>Move an enemy hero in radius who is
adjacent to 3 or more obstacles 2 space.`,color:"SILVER",initiative:1,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:2},{name:"High Ground",description:`Target a unit adjacent to you.
If you target a hero adjacent to
3 or more obstacles, +2 ::attack_red:: attack.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6},{name:"Tread Lightly",description:`Swap with either a unit adjacent to you,
or with an enemy hero in radius who is
adjacent to 3 or more obstacles.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Bear Trap",description:`**Choose one —**
>>An enemy hero adjacent to you discards
>a card, if able.
>>An enemy hero in radius who is adjacent to
3 or more obstacles discards a card, if able.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Elevated Ambush",description:`Target a unit adjacent to you.
If you target a hero adjacent to
3 or more obstacles, +2 ::attack_red:: attack.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Split Attack",description:`Target a unit in range. If you target a hero
who is adjacent to 3 or more obstacles, may
repeat once on a different unit adjacent to you.
`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Log Trap",description:`**Choose one —**
>>An enemy hero adjacent to you discards
>a card, if able.
>>An enemy hero in radius who is adjacent to
3 or more obstacles discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"True Grit",description:`You may retrieve a discarded attack card.
If an enemy hero in radius is adjacent to
3 or more obstacles, move up to 3 spaces.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Cover Tracks",description:`Swap with either a unit adjacent to you,
or with an enemy hero in radius who is
adjacent to 3 or more obstacles.
You may move 1 space.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Mountain Guide",description:`You may move a friendly unit, which is adjacent
to you, up to 3 spaces. If an enemy hero in
radius is adjacent to 3 or more obstacles, move
a different friendly unit in radius up to 2 spaces.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Deadfall Trap",description:`**Choose one —**
>>An enemy hero adjacent to you discards
>a card, or is defeated.
>>An enemy hero in radius who is adjacent to
3 or more obstacles discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Die Hard",description:`You may retrieve a discarded attack card.
If an enemy hero in radius is adjacent to
3 or more obstacles, move up to 4 spaces.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"},{name:"Hide Traces",description:`Swap with either a unit adjacent to you,
or with an enemy hero in radius who is
adjacent to 3 or more obstacles.
Move up to 2 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Expedition Leader",description:`You may move a friendly unit, which is adjacent
to you, up to 3 spaces. If an enemy hero in
radius is adjacent to 3 or more obstacles, move
a different friendly unit in radius up to 3 spaces.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Peak Precision",description:`Target a unit adjacent to you.
If you target a hero adjacent to
3 or more obstacles, +2 ::attack_red:: attack and After
the attack: You may retrieve this card.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Split Throw",description:`Target a unit in range. If you target a hero
who is adjacent to 3 or more obstacles,
may repeat once on a different unit.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Over the Top",description:`While you are performing actions, all
enemy heroes in play count as being
adjacent to 3 or more obstacles.`,color:"PURPLE",level:4}],oo=[{name:"Walk the Plank",description:`**Choose one —**
>>Push an enemy hero adjacent to you
>up to 4 spaces; if that hero is pushed
>into another zone, that hero discards
>a card, or is defeated.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:12,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:2},{name:"Few More Steps",description:`Push an enemy hero adjacent to you
up to 3 spaces; if that hero is pushed
into another zone, that hero discards
a card, or is defeated.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:1},{name:"Grappling Bolt",description:`Target an obstacle in range and in a straight
line, with no obstacles between you; ignore
immunity. Move in a straight line towards
that obstacle until you are adjacent to it.`,color:"SILVER",initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:5,secondaryDefense:2},{name:"Legend of the Skies",description:`The first time each turn after you perform a
primary action, you may perform the primary
action of a card in the previous turn slot.`,color:"PURPLE",level:4},{name:"Bombardment",description:`A enemy hero in radius, adjacent to
another enemy unit and not adjacent
to you, discards a card, if able.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5},{name:"Daring Strike",description:`**Choose one —**
>>Before the attack: Move 1 space.
Target a unit adjacent to you in the
direction of the move; +2 ::attack_red:: Attack.
>>Target a unit adjacent to you.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:3,secondaryDefense:6},{name:"Brace for Impact",description:`Move 3 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero; that hero discards a card, if able.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3},{name:"Barrage",description:`A enemy hero in radius, adjacent to
another enemy unit and not adjacent
to you, discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"INITIATIVE"},{name:"Bold Thrust",description:`**Choose one —**
>>Before the attack: Move 1 or 2 spaces in a
straight line. Target a unit adjacent to you
in the direction of the move; +2 ::attack_red:: Attack.
>>Target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:3,secondaryDefense:6,item:"INITIATIVE"},{name:"Ramming Speed",description:`Move 3 or 4 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero; that hero discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"X Marks the Spot",description:`An enemy hero in radius **chooses one —**
>>You place that hero in a space in radius.
>>You gain 2 coins.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Evasive Shot",description:`Target a unit in range in a straight line
After the attack: Move up to 2 spaces
in the opposite direction.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Outmaneuver",description:`Swap with an enemy minion in radius;
you may move that minion up to 2 spaces.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Broadside",description:`A enemy hero in radius, adjacent to
another enemy unit and not adjacent
to you, discards a card, if able.
May repeat once on a different target.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"INITIATIVE"},{name:"Fearless Lunge",description:`**Choose one —**
>>Before the attack: Move 1, 2 or 3 spaces in
>a straight line. Target a unit adjacent to you
>in the direction of the move; +2 ::attack_red:: Attack.
>>Target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:3,secondaryDefense:7,item:"MOVEMENT"},{name:"Crashland",description:`Move 3, 4 or 5 spaces in a straight line,
ignoring obstacles, to a space adjacent to an
enemy hero; that hero discards a card, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"RANGE"},{name:"A Fistful of Coins",description:`An enemy hero in radius **chooses one —**
>>You place that hero in a space in radius.
>>You gain 3 coins. If you have 13 or more
>coins, you alone win the game.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Tumble Shot",description:`Target a unit in range in a straight line.
After the attack: Move up to 3 spaces
in the opposite direction.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:5,item:"AREA"},{name:"Outsmart",description:`Swap with an enemy minion in radius;
you may move that minion up to 3 spaces.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"}],so=[{name:"Dread Razor",description:`**Choose one —**
>>Target a unit adjacent to you.
>>If you are adjacent to an empty spawn point
>in the battle zone, target a unit in range.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Rusty Razor",description:`**Choose one —**
>>Target a hero adjacent to you.
>>If you are adjacent to an empty spawn point
>in the battle zone, target a hero in range.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Death Trap",description:`An enemy hero in radius who is
adjacent to an empty spawn point in
the battle zone, discards a card, if able.`,color:"SILVER",initiative:7,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:1},{name:"Tide of Darkness",description:`While you are performing an action, all spaces
count as if they are in the battle zone and
havd a friendly minion spawn point.`,color:"PURPLE",level:4},{name:"Shield of Decay",description:`+2 ::defense_blue:: Defense if there are 2 or more empty
spawn points in radius in the battle zone.`,color:"BLUE",level:1,initiative:10,primaryAction:"DEFENSE",primaryValue:3,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3},{name:"Littlefinger of Death",description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a hero in range who has one or
>more cards in the discard.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5},{name:"Dark Ritual",description:`If there are 2 or more empty spawn points
in radius in the battle zone, gain 1 coin.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Vampiric Shield",description:`+2 ::defense_blue:: Defense if there are 2 or more empty
minion spawn points in radius in the battle zone.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"DEFENSE",primaryValue:4,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"INITIATIVE"},{name:"Finger of Death",description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a hero in range who has one or
>more cards in the discard.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Darker Ritual",description:`If there are 2 or more empty spawn points
in radius in the battle zone, gain 2 coins.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"DEFENSE"},{name:"Weakness",description:`**This turn:** Enemy heroes
in radius have -4 ::attack_silver:: Attack.
~(They can still attack, even with a negative attack value.)`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Burning Skull",description:`Target a unit in range. After the attack:
Move up to 1 minion adjacent to you
1 space, to a space not adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Necromancy",description:`Respawn a friendly minion in an empty friendly
spawn point adjacent to you in the battle zone.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Aegis of Doom",description:`+4 ::defense_blue:: if there are 2 or more empty
spawn points in radius in a battle zone.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValue:4,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:2,secondaryMovement:3,item:"INITIATIVE"},{name:"Middlefinger of Death",description:`**Choose one, or both, on different targets —**
>>Target a hero adjacent to you.
>>Target a hero in range who has one or 
>more cards in the discard.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"MOVEMENT"},{name:"Darkest Ritual",description:`If there are 2 or more empty spawn points in
radius in the battle zone, gain 2 coins. If you
have your Ultimate, gain an ::attack_silver:: Attack item.
~(Use any spare card from the box with the corresponding icon.)`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Enfeeblement",description:`**This turn:** Enemy heroes in radius have
-6 ::attack_silver:: Attack and cannot repeat actions.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Blazing Skull",description:`Target a unit in range. After the attack:
Move up to 2 minions adjacent to you
1 space each, to spaces not adjacent to you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"AREA"},{name:"Necromastery",description:`Respawn a friendly minion in an empty friendly
spawn point in radius in the battle zone.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:1,secondaryMovement:2,secondaryDefense:3,item:"RANGE"}],co=[{name:"Reverse Time",description:`Target a unit adjacent to you. After the attack:
**Next turn:** Heroes with lower initiative act
before heroes with higher initiative;
this effect ignores immunity.
~(Resolve ties as normal.)`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Tear in Time",description:`Target a unit adjacent to you.
After the attack: **Next turn:** Heroes with
lower initiative act before heroes with higher
initiative. This effect ignores immunity.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Unstable Timeline",description:`Place 2 ::token_glitch:: Glitch tokens in radius, with at
least two spaces between each token;
if used as a defense, place 3 tokens instead.
An enemy hero in play chooses one of the
Glitch tokens; you swap with that token.
**End of turn:** Remove all Glitch tokens.`,color:"SILVER",initiative:1,primaryAction:"DEFENSE_SKILL",primaryValue:6,modifier:"AREA",modifierValue:4},{name:"Alternative Timelines",description:`You may play two cards each turn;
if you do, after the cards are revealed,
retrieve one of your unresolved cards.`,color:"PURPLE",level:4},{name:"Time Snare",description:`An enemy hero in range who has
already resolved a card this turn
discards a card, if able.`,color:"BLUE",level:1,initiative:8,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Temporal Punch",description:`Target a unit adjacent to you; when defending,
the enemy hero must use the ::initiative:: Initiative
value of their card and items instead of the
::defense_silver:: Defense value of their card and items.
~(Minion defense modifiers are applied as normal.)`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:9,secondaryMovement:3,secondaryDefense:7},{name:"Time Walk",description:`Move an enemy hero in range, who
remained in the same space since
the last turn, 2 spaces in a straight line.`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Time Trap",description:`An enemy hero in range who has
already resolved a card this turn
discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Time Loop",description:`Swap with an enemy hero in range
who has already resolved a card this turn.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Temporal Slam",description:`Target a unit adjacent to you; when defending,
the enemy hero must use the ::initiative:: Initiative
value of their card and items instead of the
::defense_silver:: Defense value of their card and items.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:11,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Flashback",description:`Target a unit adjacent to you. After the attack:
You may place 3 ::token_glitch:: Glitch tokens in radius,
with at least two spaces between each token;
if you do, up to 1 enemy hero in radius
swaps with a Glitch token of their choice.
**End of turn:** Remove all Glitch tokens.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Fast Forward",description:`Move an enemy hero in range, who
remained in the same space since
the last turn, 2 spaces in a straight line.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Time Capsule",description:`You, and friendly heroes in radius, may
retrieve all cards discarded this turn.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Time Bomb",description:`An enemy hero in range who has
already resolved a card this turn
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"},{name:"Time Warp",description:`**Choose one —**
>>Swap with an enemy hero in range who
>has already resolved a card this turn.
>>An enemy hero in range swaps their
>unresolved card with one of their
>resolved cards of their choice.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"AREA"},{name:"Temporal Judgement",description:`Target a unit adjacent to you; when defending,
the enemy hero must use the ::initiative:: Initiative
value of their card and items instead of the
::defense_silver:: Defense value of their card and items.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:12,secondaryMovement:3,secondaryDefense:8,item:"RANGE"},{name:"Deja Vu",description:`Target a unit adjacent to you. After the attack:
You may place 2 ::token_glitch:: Glitch tokens in radius,
with at least two spaces between each token;
if you do, up to 1 enemy hero in radius
swaps with a Glitch token of their choice.
**End of turn:** Remove all Glitch tokens.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Back to the Future",description:`**Choose one —**
>>Place a unit in range into the space where
that unit was at the start of this turn.
>>Move an enemy hero in range, who
>remained in the same space since
>the last turn, 2 spaces in a straight line.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Future Proof",description:`**Choose one —**
>>You, and friendly heroes in radius, may
>retrieve all cards discarded this turn.
>>**This turn:** Friendly heroes in radius
are immune to enemy actions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"}],mo=[{name:"Angry Strike",description:`Target a hero adjacent to you.
+1 ::attack_gold:: Attack for every card in your discard.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:1,secondaryDefense:3},{name:"Angry Swipe",description:`Target a hero adjacent to you.
+1 ::attack_gold:: Attack for every card in your discard.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",secondaryMovement:1,secondaryDefense:2},{name:"Chilling Howl",description:`You may discard one of your resolved cards.
**This round:** Enemy heroes in radius
cannot fast travel, or move more than
2 spaces with a movement action.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"Battle Fury",description:`Each time after one of your resolved cards is
discarded, you may perform its primary action.`,color:"PURPLE",level:4},{name:"Menace",description:`Move an enemy unit in range 1 space
to a space farther away from you.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:6},{name:"Trace",description:`**Choose one —**
>>Before the attack: If you have one or more
cards in the discard, you may move 1 space.
>Target a hero adjacent to you.
>>Target a hero adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:4,secondaryDefense:5},{name:"Hold Ground",description:`If there at least two enemy heroes in
radius, you may retrieve a discarded card.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Threaten",description:`Move an enemy unit in range 1 space
to a space farther away from you.
May repeat once.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Chase",description:`**Choose one —**
>>Before the attack: If you have one or more
cards in the discard, move up to 2 spaces.
>Target a hero adjacent to you.
>>Target a hero adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Make a Stand",description:`If there are at least two enemy heroes in
radius, you may retrieve a discarded card.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Form Up!",description:`Move a friendly unit in range 1 space
to a space closer to you.
May repeat once.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Blunt Force",description:`Target a unit adjacent to you.
After the attack: You may move 1 space to a
space adjacent to an enemy hero; if you do,
push that hero 3 spaces, ignoring obstacles.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Light Pilum",description:`An enemy hero in range discards a card,
if able. You may move 1 space.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Terrify",description:`Move an enemy unit in range 1 space
to a space farther away from you.
May repeat up to two times.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Hunt Down",description:`**Choose one —**
>>Before the attack: If you have one or more
cards in the discard, move up to 3 spaces.
>Target a hero adjacent to you.
>>Target a hero adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:"RANGE"},{name:"Battle Ready",description:`If there are at least two enemy heroes
in radius, you may retrieve up to
two discarded cards.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Testudo!",description:`Move a friendly unit in range 1 space
to a space closer to you.
May repeat up to two times.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:7,item:"ATTACK"},{name:"Send Flying",description:`Target a unit adjacent to you. After the attack:
you may move up to 2 spaces to a space
adjacent to an enemy hero; if you do, push
that hero 3 spaces, ignoring obstacles.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:4,secondaryDefense:8,item:"AREA"},{name:"Heavy Pilum",description:`An enemy hero in range discards a card,
or is defeated. You may move up to 2 spaces.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"MOVEMENT"}],lo=[{name:"Cantrip",description:`**Choose and cast one** spell in the spellbook —
>>"Shocking Grasp" ~(To repel a foe!)
>>"Magic Missile" ~(To blast at range!)
>>"Expeditious Retreat" ~(To dart a great distance!)`,color:"GOLD",initiative:11,primaryAction:"SKILL",secondaryDefense:1},{name:"Cheap Trick",description:`Cast the "Expeditious Retreat"
spell in the spellbook.
~(To dart a great distance!)`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"SKILL",secondaryDefense:1},{name:"Prepare Spells",description:`Add all spell cards to the spellbook. Only
Gydion can look at the cards in the spellbook.
As each spell is cast, remove it from the
spellbook faceup. The action on the spell card
is performed by the hero casting the spell.`,color:"SILVER",initiative:13,primaryAction:"SKILL",secondaryDefense:2},{name:"Elementary Enchantment",description:`Cast the "Suggestion" spell in the spellbook.
~(Compel the opposing champion to take a few extra steps.)`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3},{name:"Elementary Evocation",description:`Cast the "Burning Hands" spell in the spellbook.
~(Burn multiple opponents in near vicinity.)`,color:"RED",level:1,initiative:7,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6},{name:"Elementary Abjuration",description:`Cast the "Shield" spell in the spellbook.
~(The magic shield protects against mundane threats.)`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2},{name:"Lesser Evocation",description:`**Choose and cast one** spell in the spellbook —
>>"Burning Hands"
>>"Fireball"
~(Wait for your allies to clear the area before hurling a fireball!)`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Lesser Necromancy",description:`**Choose and cast one** spell in the spellbook —
>>"Vampiric Touch"
>>"Create Undead"
~(Harm your foe to heal yourself. Raise an undead servant.)`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"INITIATIVE"},{name:"Greater Evocation",description:`**Choose and cast one** spell in the spellbook —
>>"Burning Hands"
>>"Fireball"
>>"Sunburst"
~(Sunburst's reach and power grows with every cast spell.)`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Greater Necromancy",description:`**Choose and cast one** spell in the spellbook —
>>"Vampiric Touch"
>>"Create Undead"
>>"Energy Drain"
~(Drain energy from a foe in sight to restore your vitality.)`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:7,item:"AREA"},{name:"Lesser Enchantment",description:`**Choose and cast one** spell in the spellbook —
>>"Suggestion"
>>"Dominate Person"
~(Turn the dominated person against their own troops.)`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Lesser Transmutation",description:`**Choose and cast one** spell in the spellbook —
>>"Midas Touch"
>>"Disintegrate"
~(Create gold. Turn objects and lesser creatures into dust.)`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Greater Enchantment",description:`**Choose and cast one** spell in the spellbook —
>>"Suggestion"
>>"Dominate Person"
>>"Power Word Kill"
~(Command a weakened foe within earshot to perish instantly.)`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"RANGE"},{name:"Greater Transmutation",description:`**Choose and cast one** spell in the spellbook —
>>"Midas Touch"
>>"Disintegrate"
>>"Polymorph"
~(Polymorph enemies into creatures or objects and vice versa.)`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Lesser Abjuration",description:`**Choose and cast one** spell in the spellbook —
>>"Shield"
>>"Banishment"
~(Touch anything to have it banished where you please.)`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Lesser Conjuration",description:`**Choose and cast one** spell in the spellbook —
>>"Find Familiar"
>>"Dimension Door"
~(Summon a familiar to assist you. Travel to a faraway place.)`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Greater Abjuration",description:`**Choose and cast one** spell in the spellbook —
>>"Shield"
>>"Banishment"
>>"Invulnerability"
~(Invulnerability makes you impervious to deadly perils.)`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Greater Conjuration",description:`**Choose and cast one** spell in the spellbook —
>>"Find Familiar"
>>"Dimension Door"
>>"Cloud Kill"
~(Create a deadly cloud within distance to weaken your foe.)`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"MOVEMENT"},{name:"The Archwizard",description:`Whenever you would add cards
to the spellbook, you may cast the
"Wish" spell in the spellbook instead.`,color:"PURPLE",level:4}],uo=[{name:"Fight and Flight",description:`Target a unit adjacent to you.
If the target is not defeated, After the attack:
If able, move 3 spaces in a straight line.`,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:2,secondaryDefense:1},{name:"Fight or Flight",description:`Target a hero adjacent to you.
If the target is not defeated, After the attack:
If able, move 3 spaces in a straight line.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Hurry up!",description:`Set the printed ::initiative:: Initiative value of an
unresolved card of a hero in range to 11,
until it is resolved, or otherwise changes state.
~(This may change the initiative order and tie breakers.)`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:1},{name:"The Ultimate Trick",description:`You choose the next action, and how
it is performed, for a hero you
target with the "Hurry Up!".`,color:"PURPLE",level:4},{name:"Unexpected Journey",description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero,
regardless of radius and immunity.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Helping Hand",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent to your
>friendly hero.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4},{name:"Monkey Trick",description:"Swap two friendly units in radius.",color:"GREEN",level:1,initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:1,secondaryMovement:2,secondaryDefense:1},{name:"There and Back Again",description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero,
regardless of radius and immunity.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Even the Odds",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent to your
>friendly hero.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:4,item:"INITIATIVE"},{name:"Monkey Twist",description:"Swap two friendly heroes in radius.",color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:"DEFENSE"},{name:"This Way!",description:`A friendly hero in radius chooses a distance
of 1 or 2; move both of you that number of
spaces in the same direction of your choice.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Outnumber",description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a minion in range, adjacent to your
>friendly hero.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:"DEFENSE"},{name:"Hear Nothing",description:"Swap with an enemy hero in radius.",color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Safe Travels",description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero, regardless
of radius and immunity. You may move 1 space.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Trusted Sidekick",description:`**Choose one, or both,** in any order —
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent to your
>friendly hero and not adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:"MOVEMENT"},{name:"Monkey Business",description:`Swap two friendly units in radius.
You may move 1 space.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:"DEFENSE"},{name:"That Way!",description:`A friendly hero in radius chooses a distance
of 1, 2, or 3; move both of you that number of
spaces in the same direction of your choice.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"INITIATIVE"},{name:"Pile On",description:`**Choose one, or both,** in any order —
>>Target a unit adjacent to you.
>>Target a minion in range, adjacent to your
>friendly.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:"AREA"},{name:"See Nothing",description:`Swap with an enemy hero in radius.
You may move 1 space.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"RANGE"}],fo=[{name:"Chaos Bolt",description:`::tiebreaker_blue::: Target a minion adjacent to you.
---
::tiebreaker_orange:: Target a hero in range.
~(Apply the text matching the symbol on the Tie Breaker coin.)`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Unreliable Jolt",description:`::tiebreaker_blue::: Target a hero adjacent to you.
---
::tiebreaker_orange:: Target a hero in range not adjacent to you.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Equilibrium",description:`**This round:** Each time you perform or repeat a
primary action, you may apply either ::tiebreaker_blue:: or ::tiebreaker_orange::
card text, regardless of the Tie Breaker coin.`,color:"SILVER",initiative:1,primaryAction:"SKILL",secondaryDefense:7},{name:"Chaos Incarnate",description:`The first time each turn after youy perform
a primary actionm you may flip the Tie Breaker
coin; if you do, you may perform that action
again, choosing different targets.`,color:"PURPLE",level:4},{name:"Abrupt Combustion",description:`::tiebreaker_blue::: An enemy hero in radius, adjacent to a
token or a minion discards a card, if able.
---
::tiebreaker_orange:: Remove an enemy minion in radius
adjacent to an enemy hero.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3},{name:"Playing with Fire",description:`::tiebreaker_blue::: Target a unit in range not in a straight line.
---
::tiebreaker_orange:: Target a unit in range in a straight line.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:"Path of Ashes",description:`::tiebreaker_blue::: Move up to 2 spaces in a straight line.
Place a ::token_magma:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 2 magma tokens in radius.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Spontaneous Immolation",description:`::tiebreaker_blue::: An enemy hero in radius adjacent to a
token or a minion discards a card, if able.
---
::tiebreaker_orange:: Remove an enemy minion in radius
adjacent to an enemy hero.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Erratic Fireblast",description:`::tiebreaker_blue::: Target a unit in range not in a straight line.
---
::tiebreaker_orange:: Target a unit in range in a straight line.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Path of Cinders",description:`::tiebreaker_blue::: Move up to 3 spaces in a straight line.
Place a ::token_magma:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 3 magma tokens in radius.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"DEFENSE"},{name:"Searing Heat",description:`::tiebreaker_blue::: Move a friendly hero in radius
2 spaces in a straight line.
---
::tiebreaker_orange:: Move an enemy hero in radius
2 spaces in a straight line.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Crack of Doom",description:`::tiebreaker_blue:: Target a unit adjacent to you.
---
::tiebreaker_orange::: Target a unit at a maximum range.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:5,secondaryMovement:3,secondaryDefense:6,item:"INITIATIVE"},{name:"Unstable Portal",description:`::tiebreaker_blue::: Swap with a friendly unit in radius.
---
::tiebreaker_orange:: Swap with an enemy unit in radius.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Violent Conflagration",description:`::tiebreaker_blue::: An enemy hero in radius adjacent to a
token or a minion discards a card, or is defeated.
---
::tiebreaker_orange:: Defeat an enemy minion in radius
adjacent to an enemy hero.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"RANGE"},{name:"Loosely-Aimed Firebolts",description:`::tiebreaker_blue::: Target a unit in range not in a straight line.
---
::tiebreaker_orange:: Target a unit in range in a straight line.
May repeat once on a different hero.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"AREA"},{name:"Path of Flames",description:`::tiebreaker_blue::: Move up to 4 spaces in a straight line.
Place a ::token_magma:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 4 magma tokens in radius.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Scorching Blaze",description:`::tiebreaker_blue::: Move a friendly hero in radius
2 or 3 spaces in a straight line.
---
::tiebreaker_orange:: Move an enemy hero in radius
2 or 3 spaces in a straight line.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"MOVEMENT"},{name:"Imminent Eruption",description:`::tiebreaker_blue::: Target a unit adjacent to you.
May repeat once on a minion.
---
::tiebreaker_orange:: Target a unit at maximum range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:5,secondaryMovement:3,secondaryDefense:6,item:"INITIATIVE"},{name:"Chaos Gate",description:`::tiebreaker_blue::: Swap with a friendly unit in radius.
You may move that unit 1 space.
---
::tiebreaker_orange:: Swap with an enemy unit in radius.
You may move 1 space.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"}],yo=[{name:"Fast as Lightning",description:`Target a unit in range. After the attack:
Apply the "After the attack" text of your
resolved or discarded red card.
~(If it has radius, use that card's value.)`,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Chop Down",description:`Target a hero adjacent to you.
After the attack: Apply the "After the attack"
text of your resolved or discarded red card.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Smoke Bomb",description:`Place a ::token_smoke_bomb:: smoke bomb token in radius;
enemy heroes cannot target another you or another
unit if there is the Smoke Bomb on a straight
line between that enemy hero and their target.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:1},{name:"Flurry of blows",description:`Each time after you perform an attack action,
you may repeat it once on a different target.`,color:"PURPLE",level:4},{name:"Trip Mine",description:`Place 2 mine tokens, 1 ::token_blast:: blast and 1 ::token_dud:: dud,
facedown in radius; units may move through
them; remove mine tokens after an enemy
hero moves through them; for every blast
removed, that hero discards a card, if able.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Crane Stance",description:`Target a unit adjacent to you.
After the attack: Push an enemy unit
adjacent to you up to 3 spaces.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:5,secondaryDefense:5},{name:"Poof!",description:`Swap with a ::token_smoke_bomb:: Smoke bomb in range;
if you do, block the attack.`,color:"GREEN",level:1,initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"RANGE",modifierValue:3,secondaryMovement:3},{name:"Cluster Mine",description:`Place 3 mine tokens, 1 ::token_blast:: blast and 2 ::token_dud::
duds, facedown in radius; units may move
through them; remove mine tokens after an
enemy hero moves through them; for every
blast removed, that hero discards a card, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Tiger Stance",description:`Target a unit adjacent to you.
After the attack: You may move 1 space to a
space adjacent to the target. Push an enemy
unit adjacent to you up to 3 spaces.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:5,secondaryDefense:5,item:"INITIATIVE"},{name:"Vanish",description:`Swap with a ::token_smoke_bomb:: Smoke bomb in range;
if you do, block the attack.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"RANGE",modifierValue:4,secondaryMovement:3,item:"DEFENSE"},{name:"Death Grenade",description:`Place a ::token_grenade:: Grenade token into a space in
radius. **End of turn:** Up to 1 enemy hero
adjacent to that token discards a card, or is
defeated. Remove the Grenade token.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Viper Stance",description:`Target a unit adjacent to you.
After the attack: You may swap
with a ::token_smoke_bomb:: Smoke bomb in radius.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:"DEFENSE"},{name:"Inner Strength",description:"**This round:** Double your item bonuses.",color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:2,item:"ATTACK"},{name:"Minefield",description:`Place 3 mine tokens, 2 ::token_blast:: blasts and 1 ::token_dud::
dud, facedown in radius; units may move
through them; remove mien tokens after an
enemy hero moves through them; for every
blast removed, that hero discards a card, if able.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Dragon Stance",description:`Target a unit adjacent to you.
After the attack: You may move 1 or 2 spaces
to a space adjacent to the target. Push an
enemy unit adjacent to you up to 3 spaces.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:5,secondaryDefense:6,item:"MOVEMENT"},{name:"Ruse",description:`Swap with a ::token_smoke_bomb:: Smoke bomb in range;
if you do, block the attack. You may place
the Smoke bomb into a space in range.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"RANGE",modifierValue:4,secondaryMovement:3,item:"AREA"},{name:"Holy Death Grenade",description:`Place a ::token_grenade:: grenade token into a space in
radius. **End of turn:** Up to 2 enemy heroes
adjacent to that token discard a card, or are
defeated. Remove the Grenade token.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Cobra Stance",description:`Target a unit adjacent to you.
After the attack: You may swap with
a ::token_smoke_bomb:: Smoke bomb radius; if you do, you may
place the Smoke bomb into a space in radius.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:"DEFENSE"},{name:"Perfect Self",description:`**Choose one, or both —**
>>**This round:** Double your item bonuses.
>>Take a Tier II card from your deck and add
it to your dashboard as a permanent item.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:3,item:"RANGE"}],po=[{name:"Watch How I Soar",description:`**Choose one —**
>>Place yourself into a space
>at maximum range.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Leaf on the Wind",description:`Place yourself into a space
at maximum range.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:1},{name:"Swoop In",description:`Place yourself into a space in radius adjacent
to two or more enemy units; if you do,
you may retrieve a discarded card.`,color:"SILVER",initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:3},{name:"Power Overwhelming",description:`Whenever you choose one, you may choose
two different options instead, in any order.
Each time after you place yourself, an enemy
hero adjacent to you discards a card, if able.`,color:"PURPLE",level:4},{name:"Sudden Breeze",description:`Move up to 3 spaces in a straight line, ignoring
obstacles; you may place an enemy unit you
moved through into a space adjacent to you.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:5},{name:"Challenge Accepted",description:`Target a unit adjacent to you. After the attack:
**This turn:** Gain +2 ::defense_silver:: Defense.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:3,secondaryDefense:6},{name:"Focus",description:`**Next turn:** Before you perform a
primary action, you may move 1 space.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3},{name:"Gust of Wind",description:`Move up to 4 spaces in a straight line ignoring
obstacles; you may place an enemy unit you
moved through into a space adjacent to you.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:6,item:"ATTACK"},{name:"Matter of Honor",description:`Target a unit adjacent to you. After the attack:
**This turn:** Gain +3 ::defense_silver:: Defense.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Discipline",description:`**Next turn:** Before you perform a primary
action, move up to 2 spaces.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Living Tornado",description:"Swap two units at maximum radius.",color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Power Shot",description:`Target a unit in range. After the attack: If the
target was at maximum range, you may move
it 1 space, to a space farther away from you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Dash and Slash",description:`Move up to 4 spaces in a straight line,
ignoring obstacles. An enemy hero you
moved through discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:6,item:"DEFENSE"},{name:"Crushing Squall",description:`Move up to 5 spaces in a straight line, ignoring
obstacles; you may place an enemy unit you
moved through into a space adjacent to you.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:6,item:"AREA"},{name:"Worthy Opponent",description:`Target a unit adjacent to you.
After the attack:
**This turn:** Gain +5 ::defense_silver:: Defense.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:7,item:"MOVEMENT"},{name:"Mastery",description:`**Next turn:** Before you perform a
primary action, you may move 3 spaces.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Storm Spirit",description:`Swap two units in radius and
at equal distance from you.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Thunder Shot",description:`Target a unit in range. After the attack:
If the target is not adjacent to you, you may move it
1 space, to a space farther away from you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Death from Above",description:`Move up to 5 spaces in a straight line,
ignoring obstacles; an enemy hero you
moved through discards a card, if able.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:6,item:"RANGE"}],ho=[{name:"Knife of the Living Dead",description:`Target a unit adjacent to you.
Before the attack: **Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Remove a Zombie token adjacent to the
>target; if you do, gain +1 ::attack_gold:: Attack.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:3},{name:"Shallow Graves",description:`Target a unit adjacent to you.
Before the attack: **Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Remove a Zombie token adjacent to the
>target; if you do, gain +1 ::attack_gold:: Attack.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:1},{name:"Awaken!",description:`Place up to 4 ::token_zombie:: Zombie tokens into
spaces adjacent to you, or into spawn
points in radius. Zombie tokens are
not removed at the end of round.`,color:"SILVER",initiative:6,primaryAction:"DEFENSE_SKILL",primaryValue:3,modifier:"AREA",modifierValue:4},{name:"Crawling Dead",description:`Target a unit adjacent to you.
After the attack: **Choose one —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Another enemy hero in radius, adjacent to
>a Zombie token, discards a card, if able.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:7},{name:"Corpse Slam",description:`**Choose one —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space; that Zombie token may push a
>unit or token adjacent to it 1 space.
>>Move 1 space.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:6},{name:"Stage Dive",description:`**Choose one —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Swap with a Zombie token in range.`,color:"GREEN",level:1,initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3},{name:"Walking Dead",description:`Target a unit adjacent to you.
After the attack: **Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Another enemy hero in radius, adjacent to
>a Zombie token, discards a card, if able;
>each enemy hero can only be targeted once.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Braains...!",description:`Target a unit adjacent to you.
Before the attack: **Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>If an enemy hero in radius is adjacent to
>a Zombie token, retrieve a discarded card.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Racing Dead",description:`Target a unit adjacent to you.
After the attack: **Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Another enemy hero in radius, adjacent to
>a Zombie token, discards a card, if able;
>each enemy hero can only be targeted once.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:8,item:"RANGE"},{name:"Braaaaaaaains...!",description:`Target a unit adjacent to you.
Before the attack: **Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>If an enemy hero in radius is adjacent to
>a Zombie token, retrieve a discarded card.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:8,item:"MOVEMENT"},{name:"Morbid Mosh",description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space; that Zombie token may push a
>unit or token adjacent to it 1 space.
>>Move 1 space.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Robbing Zombies",description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space. Gain 1 coin.
>>Move 1 space.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Macabre Mayhem",description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space; that Zombie token may push a
>unit or token adjacent to it 1 space.
>>Move 1 space.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:"AREA"},{name:"Stalking Scalpers",description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space. Gain 1 coin.
>>Move 1 space.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Crowd Drift",description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Swap with a Zombie token in range.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Gathering Horde",description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Once per turn: Replace an enemy minion
>in range adjacent to two or more Zombie
>tokens with a Zombie token.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Crowd Surf",description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Swap with a Zombie token in range.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Army of Darkness",description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Once per turn: Replace an enemy minion
>in range adjacent to two or more Zombie
>tokens with a Zombie token.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Master of Puppets",description:`Whenever you would choose up
to three times, you may choose
up to five times instead.`,color:"PURPLE",level:4}],vo=[{name:"Fissure",description:`Target a unit adjacent to you. After the attack:
Place a ::token_rock:: Rock token in each of the first
three empty spaces in the straight line
from you in the direction of the attack.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:3},{name:"Lesser Fissure",description:`Target a hero adjacent to you. After the attack:
Place a ::token_rock:: Rock token in each of the first
three empty spaces in the straight line
from you in the direction of the attack.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Stone Grip",description:`Place exactly 3 ::token_rock:: Rock tokens into empty
spaces adjacent to an enemy hero in range,
and as far away from you as possible.`,color:"SILVER",initiative:12,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryDefense:4},{name:"Seismic Slam",description:`An enemy hero in radius adjacent
to terrain, or to a ::token_rock:: Rock token,
discards a card, or is defeated.
~(The ::attack_silver:: secondary Attack action is non-ranged.)`,color:"RED",level:1,initiative:7,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:7,secondaryAttack:6},{name:"Boulder Rush",description:`Push a token, or an enemy unit, adjacent to
you 1 or 2 spaces, ignoring obstacles;
you may move up to 2 spaces in the
direction of the push, ignoring obstacles.`,color:"BLUE",level:1,initiative:8,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6},{name:"Treacherous Ground",description:`You may move a unit in range 1 space to a
space adjacent to terrain, or a ::token_rock:: Rock token.`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Seismic Assault",description:`An enemy hero in radius adjacent
to terrain, or to a ::token_rock:: Rock token,
discards a card, or is defeated.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:8,secondaryAttack:7,item:"INITIATIVE"},{name:"Stone Carapace",description:`**This round:** if you would discard a card from
your hand, you may discard this card instead;
you may discard this card to perform its
defense action, as if it was in your hand.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:6,secondaryAttack:7,item:"DEFENSE"},{name:"Rockslide",description:`You may move a unit in range 1 space to a
space adjacent to terrain, or a ::token_rock:: Rock token.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Rolling Stone",description:`Move any number of spaces in a straight
line, ignoring obstacles, without moving
through more than one empty space.
~(The starting space and the destination space do not count.)`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Boulder Blitz",description:`Push a token, or an enemy unit, adjacent to
you 1, 2 or 3 spaces, ignoring obstacles;
you may move up to 3 spaces in the
direction of the push, ignoring obstacles.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"DEFENSE"},{name:"Stomping Step",description:`Move a unit in radius which is adjacent
to terrain, or to a ::token_rock:: Rock token, 1 space.
Place a Rock token in the space it occupied.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:7,item:"ATTACK"},{name:"Avalanche",description:`You may move a unit in range 1 space to a
space adjacent to terrain, or a ::token_rock:: Rock token.
May repeat once.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"AREA"},{name:"Strolling Stone",description:`Move any number of spaces in a straight
line, ignoring obstacles, without moving
through more than two empty space.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Boulderdozer",description:`Push a token, or an enemy unit, adjacent to
you 1, 2, 3 or 4 spaces, ignoring obstacles;
you may move up to 4 spaces in the
direction of the push, ignoring obstacles.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"MOVEMENT"},{name:"Ground Shaker",description:`Move a unit in radius which is adjacent
to terrain, or to a ::token_rock:: Rock token, 1 space.
Place a Rock token in the space it occupied.
May repeat once on a different target.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:7,item:"ATTACK"},{name:"Epicenter",description:`An enemy hero in radius adjacent to terrain,
or to a ::token_rock:: Rock token, discards a card, or is
defeated. May repeat once on a different target.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:8,secondaryAttack:7,item:"RANGE"},{name:"Rock Solid",description:`You may retrieve a discarded card.
**This round:** if you would discard a card from
your hand, you may discard this card instead;
you may discard this card to perform its
defense action, as if it was in your hand.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:6,secondaryAttack:7,item:"DEFENSE"},{name:"Rock and a Hard Place",description:`Once per turn, after you place one or more
::token_rock:: Rock tokens into one or more spaces
adjacent to one or more enemy heroes,
each of those heroes discards a card, if able.`,color:"PURPLE",level:4}],Ao=[{name:"Mind Grip",description:`**Choose one —**
>>Perform an action on the card in the previous
>turn slot of an enemy hero in range; if you
>would place any tokens, place ::token_illusion::
>Illusion tokens instead; skip giving markers.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:5,secondaryMovement:1,secondaryDefense:2},{name:"Mind Probe",description:`Perform the action on the card in the previous
turn slot of an enemy hero in range; if you
would place any tokens this way, place ::token_illusion::
Illusion tokens instead; do not use markers.`,color:"GOLD",handicapped:!0,initiative:8,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Diabolical Laughter",description:`Laugh diabolically;
if you do, **choose up to three times —**
>>Swap with an ::token_illusion:: Illusion token in radius.
>>Place an Illusion token in an adjacent space.
>>Swap two resolved cards of an enemy hero
>in radius, without canceling active effects.`,color:"SILVER",initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:3},{name:"What the Hell Are You?",description:`Each time after you laugh diabolically as part
of performing an action, all enemy heroes
in radius discard a card, or are defeated.`,color:"PURPLE",level:4,modifier:"AREA",modifierValue:5},{name:"Imbue Doubt",description:`Name a color. **Next turn, after playing cards:**
An enemy hero in radius discards
a card of that color, if able.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Phantasmal Sentry",description:`**Choose one —**
>>Target a hero in range adjacent
>to an ::token_illusion:: Illusion token in range.
>>Target a unit adjacent to you.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:6},{name:"Fleeting Image",description:`Place an ::token_illusion:: Illusion token in radius.
You may swap with an Illusion token in play.`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:"Time to Reconsider",description:`Name a color. **Next turn, after playing cards:**
An enemy hero in radius discards
a card of that color, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Crack in Reality",description:`Split the board into two sides with a straight
line of spaces drawn through your space.
**This turn:** Units on either side of the line
cannot interact with objects and spaces on the
other side of the line, as if they did not exist.
~(This includes movement, placement, radius-based effects, etc.)`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"},{name:"Phantasmal Warrior",description:`**Choose one —**
>>Before the attack: Move an ::token_illusion:: Illusion token
>in range up to 1 space to a space adjacent
>to an enemy hero in range. Target that hero.
>>Target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:5,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Twist Fate",description:`Target a unit in range. After the attack:
You may swap an enemy unit in range
with an ::token_illusion:: Illusion token adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Multiple Projections",description:`Place up to 2 ::token_illusion:: Illusion tokens in radius.
You may swap with an Illusion token in play.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Illusionary Force",description:`Place up to 2 ::token_illusion:: Illusion tokens in radius.
**This round:** While you are performing
actions, all Illusion tokens count as both
tokens and friendly melee minions.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"An Illusion of Choice",description:`Name a color. **Next turn, after playing cards:**
Up to two enemy heroes in radius each
discard a card of that color, if able.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"MOVEMENT"},{name:"Shift Reality",description:`Split the board into two sides with a straight
line of spaces drawn through your space.
**This turn:** Units on either side of the line
cannot interact with you, nor with objects
and spaces on the other side of the line,
as if they did not exist.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:5,item:"RANGE"},{name:"Phantasmal Champion",description:`**Choose one —**
>>Before the attack: Move an ::token_illusion:: Illusion token
>in range up to 2 spaces to a space adjacent
>to an enemy hero in range. Target that hero.
>>Target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:5,secondaryMovement:3,secondaryDefense:7,item:"AREA"},{name:"Devious Scheme",description:`Target a unit in range. After the attack:
You may swap an enemy unit in range
with an ::token_illusion:: Illusion token in range.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Master of Illusions",description:`Place up to 3 ::token_illusion:: Illusion tokens in radius.
You may swap with an Illusion token in play.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Illusionary Army",description:`Place up to 3 ::token_illusion:: Illusion tokens in radius.
**This round:** While you are performing
actions, all Illusion tokens count as both
tokens and friendly melee minions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"}],Eo=[{name:"Stunt Doubles",description:`Target a unit adjacent to you. After the attack:
Spawn up to 3 more of you in radius; each of
you is the same hero, except when actions
are performed. If defeated, remove all of you.`,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:2,modifier:"AREA",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Stunted Doubles",description:`Target a hero adjacent to you. After the attack:
Spawn up to 3 more of you in radius; each of
you is the same hero, except when actions
are performed. If defeated, remove all of you.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"AREA",modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Crowd Control",description:`When used as a defense action, +2 ::defense_silver::
Defense for each other one of you in radius.
When used as a skill action,
remove all other you in play.`,color:"SILVER",initiative:13,primaryAction:"DEFENSE_SKILL",primaryValue:1,primaryValueSign:"PLUS",modifier:"AREA",modifierValue:3},{name:"Twin Strike",description:`After you perform a basic attack action,
another one of you may repeat it once,
targeting a different unit.`,color:"PURPLE",level:4},{name:"Alleyoop",description:`Swap with a friendly hero in range.
Move another one of you up to 1 space.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:2},{name:"Phantom Strike",description:`Target a unit adjacent to you. After the attack:
If there is more than one of you in play,
you may remove one of you.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:3},{name:"Tightrope",description:`After you move, you may move
another one of you 1 space.`,color:"GREEN",level:1,initiative:2,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:1},{name:"Group Performance",description:`Swap with a friendly hero in range.
Move another one of you up to 2 spaces.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Hit and Gone",description:`Target a unit adjacent to you. After the attack:
You may remove one or more of you
in play, except the last one of you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"High Wire",description:`After you move, move another
one of you up to 2 spaces.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Magic Trick",description:`Push an unit adjacent to you up to 2 spaces;
for every space the target moved, move this
one of you one space in the opposite direction.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:3,item:"DEFENSE"},{name:"Rummage",description:`Target a unit adjacent to you.
After the attack: If there is another one of you
in radius, you may retrieve a discarded card.
~(All of you share cards in hand, deck, and discard.)`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"INITIATIVE"},{name:"Theatrics",description:"Swap with a minion in range.",color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Team Spirit",description:`Swap with a friendly hero in range.
Move another one of you up to 3 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:3,secondaryDefense:3,item:"AREA"},{name:"Into Thin Air",description:`Target a unit adjacent to you. After the attack:
You may remove one or more of you
in play, including all of you.
~(If all are removed, you are not defeated. Respawn as normal.)`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:4,item:"RANGE"},{name:"Wire Dancers",description:`After you move, move another
one of you up to 3 spaces.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"MOVEMENT",primaryValue:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Aaaand it's gone!",description:`Push an unit adjacent to you up to 3 spaces;
for every space the target moved, move this
one of you one space in the opposite direction.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:3,item:"DEFENSE"},{name:"Ransack",description:`Target a unit adjacent to you.
After the attack: For each other one of you
in radius, you may retrieve a discarded card.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Spectacle",description:`Swap with a minion in range.
May repeat once by another one of you,
targeting a different minion.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"}],go=[{name:"Code of Chivalry",description:`Target a unit adjacent to you.
Before the attack: If you target a hero,
both you and the target may
retrieve a discarded card.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Earn the Spurs",description:`Target a hero adjacent to you.
Before the attack: Both you and the target
may retrieve a discarded card.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:1},{name:"Throw the Gauntlet",description:`Place yourself into a space in range adjacent
to an enemy hero in range; that hero may
move 1 space; if they do, gain 2 coins.`,color:"SILVER",initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryDefense:3},{name:"Fabled Lance",description:`All of your attack actions gain the "Ranged"
subtype, target a unit in range, and count
as having a printed ::range_purple:: Range value of 2.`,color:"PURPLE",level:4,modifier:"RANGE",modifierValue:2},{name:"Stand Guard",description:`Swap with a friendly unit in range
which is adjacent to an enemy hero,
or who has a card in the disacrd.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:6},{name:"Token of Gratitude",description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius gains 1 coin.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:1,secondaryMovement:4,secondaryDefense:6},{name:"Close Quarters",description:`After movement, if yhou are adjacent to
an enemy hero, you may **Choose one —**
>>Place a friendly minion in radius into a
>space adjacent to that enemy hero.
>>Place an enemy minion in radius into a
>space adjacent to you.`,color:"GREEN",level:1,initiative:4,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Fair Share",description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius gains 1 coin.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Feat of Bravery",description:`Target a unit adjacent to you.
After the attack: A friendly hero in radius
may retrieve a discarded card.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:4,secondaryMovement:4,secondaryDefense:7,item:"DEFENSE"},{name:"Melee",description:`After movement, if you are adjacent to
an enemy hero, you may **Choose one —**
>>Place a friendly minion in radius into a
>space adjacent to that enemy hero.
>>Place an enemy minion in radius into a
>space adjacent to you.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"ATTACK"},{name:"Opening Shots",description:`If both you and an enemy hero in radius
have no cards in the discard, that hero
discards ac ard, if able.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Protect the Weak",description:`Swap with a friendly unit in range
which is adjacent to an enemy hero,
or who has a card in the discard.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Accept Surrender",description:`Defeat an enemy hero adjacent to
you with no cards in hand.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"DEFENSE"},{name:"Grand Melee",description:`After movement, if you are adjacent to
an enemy hero, you may **Choose one —**
>>Place a friendly minion in radius into a
>space adjacent to that enemy hero.
>>Place an enemy minion in radius into a
>space adjacent to you.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryDefense:4,item:"ATTACK"},{name:"Opening Volley",description:`If both you and an enemy hero in radius
have no cards in the discard, that hero
discards a card, if able. May repeat once.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Defend the Innocent",description:`Swap with a friendly unit in range
which is adjacent to an enemy hero,
or who has a card in the discard.
You may retrieve a discarded card.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:7,item:"AREA"},{name:"Glorious Triumph",description:`Defeat an enemy hero adjacent to you
with no cards in hand; your friendly
heroes gain triple assist coins.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:7,item:"MOVEMENT"},{name:"Paragon of Grace",description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius gains 1 coin.
May repeat once on a different target.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:"RANGE"},{name:"Paragon of Valor",description:`Target a unit adjacent to you.
After the attack: A friendly hero in radius
may retrieve a discarded card; if they do,
you may repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:4,secondaryMovement:4,secondaryDefense:8,item:"DEFENSE"}],Io=[{name:"Point Blank Shot",description:`Target a unit in range. After the attack:
If the target is adjacent to you, push it 1 space.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:"Bang",description:`Target a hero adjacent to you.
After the attack: Push the target 1 space.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:"Back to Back",description:"Swap with a friendly minion in radius.",color:"SILVER",initiative:8,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:2},{name:"Big Sodding Gun",description:`Your basic attack has +2 ::range_gold:: Range and
+2 ::attack_gold:: Attack. If you push an enemy hero,
that hero discards a card, or is defeated.`,color:"PURPLE",level:4},{name:"Listen Up",description:"Swap two minions in radius.",color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:1,secondaryMovement:3,secondaryDefense:3},{name:"Quickdraw",description:`Target a unit in range. +3 ::attack_red:: Attack if the
target played an attack card this turn.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6},{name:"Troop Movement",description:`Move a friendly minion in radius up to 1 space,
to a space in radius. May repeat once.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2},{name:"Roger Roger",description:"Swap two minions in radius.",color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Gunslinger",description:`Target a unit in range. +3 ::attack_red:: Attack if the
target played an attack card this turn.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Marching Orders",description:`Move a friendly minion in radius 1 space,
to a space in radius. May repeat once.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Steady Advance",description:`If there are two or more friendly minions in
radius, you may retrieve a discarded card;
if you do, you may move 1 space.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Shootout",description:`Target a unit in range. After the attack:
If the target was adjacent to you, remove
up to one enemy minion adjacent to you.
~(You gain no coins for removing a minion, only defeating.)`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Close Support",description:`An enemy hero in radius adjacent to your
friendly minion discards a card, if able.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Ready and Waiting",description:`Swap two minions in radius,
ignoring heavy minion immunity.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Dead Shot",description:`Target a unit in range. +4 ::attack_red:: Attack if the
target played an attack card this turn.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"MOVEMENT"},{name:"Path to Victory",description:`Move a friendly minion in radius 1 space, to a
space in radius. May repeat up to two times.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"RANGE"},{name:"Unwavering Resolve",description:`If there are two or more friendly minions in
radius, you may retrieve a discarded card;
if you do, you may up to 2 spaces.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Bullet Hell",description:`Target a unit in range. After the attack:
If the target was adjacent to you, remove
up to two enemy minions adjacent to you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Covering Fire",description:`An enemy hero in radius adjacent to your
friendly minion discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"}],To=[{name:"Shoot and Scoot",description:`Target a unit at maximum range.
After the attack: If able, you may
fast travel to an adjacent zone.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Keep the Distance",description:`Target a hero at maximum range.
After the attack: If able, you may
fast travel to an adjacent zone.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Trailblazer",description:`You may fast travel, if able.
**This round:** You and friendly heroes
in radius may ignore obstacles while
performing movement actions.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryDefense:1},{name:"Wild Hunt",description:`Each time before you perform an action,
you may move 2 spaces in a straight line.`,color:"PURPLE",level:4},{name:"Grasping Roots",description:`**This turn:** Enemy heroes in radius cannot
fast travel, or move more than 1 space
with a movement action.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:3},{name:"Snap Shot",description:`**Choose one —**
>>Target a unit in range, which is not
>adjacent to any other unit.
>>Target a hero adjacent to you.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:5,secondaryDefense:5},{name:"Disorient",description:`Move an enemy unit adjacent to you 1 space;
if you do, you may move 1 space.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:1},{name:"Entangling Vines",description:`**This turn:** Enemy heroes in radius cannot
fast travel, or move more than 1 space
with a movement action.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"DEFENSE"},{name:"Opportunity Shot",description:`**Choose one —**
>>Target a unit in range, which is not
>>adjacent to any other unit.
>>Target a hero adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:5,item:"DEFENSE"},{name:"Divert Attention",description:`Move an enemy unit adjacent to you up
to 2 spaces; if you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Warning Shot",description:`**End of turn:** An enemy hero in radius
discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Long Shot",description:"Target a unit at maximum range.",color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:"INITIATIVE"},{name:"Fae Healing",description:`A hero  in radius may retrieve a discarded
card; if they do, that hero gains 1 coin.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Grappling Branches",description:`**This turn:** Enemy heroes in radius cannot
fast travel, or move more than 1 space
with a movement action.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Clear Shot",description:`**Choose one —**
>>Target a unit in range, which is not
>adjacent to any other unit.
>>Target a hero adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:"AREA"},{name:"Lead Astray",description:`Move an enemy unit adjacent to you up
to 3 spaces; if you do, move up to that
number of spaces in a straight line.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:2,item:"MOVEMENT"},{name:"Treetop Sentinel",description:`**End of turn:** An enemy hero in radius
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"RANGE"},{name:"Rain of Arrows",description:`Target a unit at maximum range.
If you target a hero, repeat once on a different
hero; if you do, may repeat once on a minion.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:5,secondaryDefense:5,item:"INITIATIVE"},{name:"Nature's Blessing",description:`A hero in radius may retrieve a discarded
card; if they do, that hero gains 2 coins.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"}],Do=[{name:"Rune Sigils",description:`Target a unit adjacent to you;
if a rune is active:

::rune_bird::: You may target a minion in range instead.
::rune_axe::: +3 ::attack_gold:: Attack
::rune_anvil::: If you target a hero, gain 3 coins.
::rune_horn::: Repeat once on a different hero in range.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:2},{name:"Rune Shards",description:`Target a hero adjacent to you;
if a rune is active:

::rune_axe::: +3 ::attack_gold:: Attack
::rune_anvil::: Gain 2 coins.
::rune_horn::: Repeat once on a different hero in range.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:1,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Inscribe the Runes",description:`Give yourself 4 ::rune_axe_marker::::rune_bird_marker::::rune_anvil_marker::::rune_horn_marker:: Rune markers
and place one below each of your turn slots.
A rune is active as long as it is below the
turn slot matching the current turn.
Rune markers are not removed at the
end of round, nor if you are defeated.`,color:"SILVER",initiative:1,primaryAction:"SKILL",secondaryDefense:3},{name:"Rune Mastery",description:`Each time you perform an action, choose
one inactive rune; that rune counts as
a second rune for this action.`,color:"PURPLE",level:4},{name:"Safe Passage",description:`If the ::rune_bird:: rune is active,
**This turn:** You may ignore obstacles.`,color:"BLUE",level:1,initiative:9,primaryAction:"MOVEMENT",primaryValue:3,secondaryDefense:5},{name:"Runic Dagger",description:`Target a unit adjacent to you.
After the attack: If the ::rune_anvil:: rune is active,
you may retrieve a discarded card.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:3,secondaryDefense:6},{name:"Oath of Endurance",description:`If a rune is active:
::rune_horn::: Block a basic attack.
::rune_axe::: Block a non-ranged attack.
**This Turn:** You are immune to enemy actions.`,color:"GREEN",level:1,initiative:5,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2},{name:"Hidden Passage",description:`If a rune is active:
::rune_bird::: **This turn:** You may ignore obstacles.
::rune_anvil::: **This turn:** You are immune to enemy
actions.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"MOVEMENT",primaryValue:3,secondaryDefense:6,item:"ATTACK"},{name:"Ancestral Boon",description:`If a rune is active,
a friendly hero in radius may:
::rune_axe::: Swap a resolved card with a card in hand.
::rune_anvil::: Retrieve all their discarded cards.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Runic Hammer",description:`Before the atack: if the ::rune_horn:: rune
is active, you may move 1 space.
Target a unit adjacent to you.
After the attack: If the ::rune_anvil:: rune is active,
you may retrieve a discarded card.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Runecaster",description:`Target a unit at maximum range.
After the attack: If a rune is active:
::rune_horn::: Move up to 2 spaces.
::rune_axe::: An enemy hero who was adjacent to the
target discards a card, or is defeated.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Oath of Fortitude",description:`If a rune is active:
::rune_horn::: Block a basic attack;
::rune_axe::: Block a non-ranged attack;
::rune_bird::: Block a ranged attack;
**This Turn:** You are immune to enemy actions.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"},{name:"Runetrap",description:`If a rune is active, an enemy hero in radius:
::rune_horn::: Discards a green card, if able.
::rune_axe::: Discards a silver card, if able.
::rune_anvil::: Discards a blue card, if able.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Deep Passage",description:`If a rune is active:
::rune_bird::: **This turn:** You may ignore obstacles.
::rune_anvil::: **This turn:** You are immune to enemy
actions.
::rune_horn::: Gain +2 ::movement_blue:: Movement.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:3,secondaryDefense:6,item:"RANGE"},{name:"Ancestral Grace",description:`If a rune is active,
a friendly hero in radius may:
::rune_axe::: Swap a resolved card with a card in hand.
::rune_anvil::: Retrieve all their discarded cards.
::rune_bird::: Swap one of their items with an item on
their card of the same tier and color.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Runic Battleaxe",description:`Before the atack: if the ::rune_horn:: rune
is active, you may move 1 space.
Target a unit adjacent to you.
After the attack: If a rune is active:
::rune_axe::: May repeat once on an enemy minion.
::rune_anvil::: You may retrieve a discarded card.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:3,secondaryDefense:7,item:"AREA"},{name:"Runeblaster",description:`If the ::rune_bird:: rune is active, target a unit in range,
otherwise target a unit at maximum range.
After the attack: If a rune is active:
::rune_horn::: Move up to 2 spaces.
::rune_axe::: An enemy hero who was adjacent to the
target discards a card, or is defeated.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"MOVEMENT"},{name:"Oath of Perseverance",description:`Choose one active rune:
::rune_horn::: Block a basic attack;
::rune_axe::: Block a non-ranged attack;
::rune_bird::: Block a ranged attack;
::rune_anvil::: Block a non-basic attack;
**This Turn:** You are immune to enemy actions.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2,item:"INITIATIVE"},{name:"Runebomb",description:`Choose one active rune; depending on
that rune, an enemy hero in radius:
::rune_horn::: Discards a green card, if able.
::rune_axe::: Discards a silver card, if able.
::rune_anvil::: Discards a blue card, if able.
::rune_bird::: Discards a gold card, if able.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"}],Lo=[{name:"Reload!",description:`**Choose one —**
>>Perform the primary action of your
>rightmost resolved card.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:6,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:1},{name:"Backup",description:`Perform the primary action of your rightmost
resolved card. If you perform an Attack
action this way, you cannot target minions.`,color:"GOLD",handicapped:!0,initiative:6,primaryAction:"SKILL",secondaryMovement:1,secondaryDefense:1},{name:"Bounce",description:`Move 2 spaces in a straight line, ignoring
obstacles; if this card is already resolved as
you perform this action, may repeat once.`,color:"SILVER",initiative:12,primaryAction:"SKILL",secondaryDefense:2},{name:"Bullet Time",description:`After you resolve a basic card, you may
perform the primary action on that card;
you cannot target the same enemy hero
twice in the same turn this way.`,color:"PURPLE",level:4},{name:"Steam Jump",description:`Place yourself into a space in a straight
line in radius. Push an enemy unit
adjacent to you up to 1 space.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Snipe",description:`Target a unit at maximum range,
and in in a straight line.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:4},{name:"Suppress",description:`An enemy hero in radius who is not
adjacent to terrain discards a card, if able.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:"Assault Jump",description:`Place yourself into a space in a straight
line in radius. Push an enemy unit
adjacent to you up to 2 spaces.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Prepared Shot",description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Pin Down",description:`An enemy hero in radius who is not
adjacent to terrain discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Delayed Jump",description:`**End of turn:** Place yourself into a space
in radius not in a straight line from you.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:1,secondaryDefense:4,item:"DEFENSE"},{name:"Shotgun",description:`Target a unit in range. Before the attack:
An enemy hero adjacent to the target
discards a card, if able.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Mark for Death",description:`Move an enemy minion in radius up
to 3 spaces to a space in radius.
**Next turn:** The first time an enemy minion
in radius is defeated, gain 1 coin.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Drop Trooper",description:`Place yourself into a space in a straight line
in radius. Push up to two enemy units
adjacent to you up to 2 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Killshot",description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:5,secondaryMovement:4,secondaryDefense:5,item:"DEFENSE"},{name:"Killing Ground",description:`An enemy hero in radius who is not adjacent
to terrain discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"RANGE"},{name:"Mobile Scout",description:`**End of turn:** Place yourself into a space in
radius not in a straight line from you.
You may then fast travel, if able.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:1,secondaryDefense:4,item:"MOVEMENT"},{name:"Super-Shotgun",description:`Target a unit in range. Before the attack:
An enemy hero adjacent to the target
discards a card, or is defeated.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:"AREA"},{name:"Hunting Season",description:`Move up to two enemy minions in radius,
up to 3 spaces each, to spaces in radius.
**Next turn:** The first two times an enemy
minion in radius is defeated, gain 1 coin.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"}],ko=[{name:"Float like a Butterfly",description:`Swap this card with a different
gold card in your deck.
~(This card starts the game in your hand.)`,color:"GOLD",initiative:8,primaryAction:"MOVEMENT",primaryValue:5,secondaryDefense:8},{name:"Sting like a Bee",description:`Target a unit at maximum range.
After the attack: Swap this card with
a different gold card in your deck.
~(This card starts the game in your deck.)`,color:"GOLD",extra:!0,initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Strike like a Tiger",description:`Target a unit adjacent to you.
After the attack: Swap this card with
a different gold card in your deck.
~(This card starts the game in your deck.)`,color:"GOLD",extra:!0,initiative:9,primaryAction:"ATTACK",primaryValue:7,secondaryMovement:3,secondaryDefense:3},{name:"Bushido",description:`Swap your gold card with a different
gold card in your deck; if you swap a
resolved or discarded card this way,
place the new card facedown.`,color:"SILVER",initiative:5,primaryAction:"SKILL",secondaryDefense:6},{name:"Shameful Display",description:"~(You are defeated.)",color:"SILVER",handicapped:!0,initiative:5,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION"},{name:"Set an Example",description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius may swap their
unresolved card with a card in their hand.`,color:"RED",level:1,initiative:11,primaryAction:"ATTACK",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Proven Warrior",description:`Choose a card in the discard of a friendly
hero in radius. An enemy hero in radius
discards a card of the same color, if able.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Come to Aid",description:`A friendly hero in range may discard a card.
If that hero has a card in the discard,
you may move up to 3 spaces.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Lead from the Front",description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius may swap their
unresolved card with a card in their hand.`,color:"RED",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:2,item:"INITIATIVE"},{name:"Spinning Blade",description:`Target a unit adjacent to you. After the attack:
**This turn:** Empty spaces adjacent to you
count as obstacles for enemy units.`,color:"RED",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:2,item:"DEFENSE"},{name:"Hold my Sake",description:`Target a unit adjacent to you.
After the attack: A friendly hero in radius
may swap their unresolved card with
a card in their hand, or in their discard.`,color:"RED",level:3,variant:{first:1,second:2},initiative:12,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:2,item:"MOVEMENT"},{name:"Blade Helix",description:`Target a unit adjacent to you.
After the attack: **This turn:** Empty spaces in
radius count as obstacles for enemy units.`,color:"RED",level:3,variant:{first:2,second:2},initiative:12,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:1,secondaryMovement:1,secondaryDefense:2,item:"RANGE"},{name:"Chosen Champion",description:`Choose a card in the discard of a friendly
hero in radius. An enemy hero in radius
discards a card of the same color, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Calculated Risk",description:`A friendly hero in radius may discard an
attack card. If that hero has a card in the
discard, that hero may move up to 2 spaces.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"The Right Hand",description:`Choose a card in the discard of a friendly
hero in radius. Up to two enemy heroes in
radius discard a card of the same color, if able.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Tactical Gambit",description:`A friendly hero in radius may discard
an attack card. If that hero has a card
in the discard, that hero may move
up to 2 spaces, ignoring obstacles.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Bring the Relief",description:`A friendly hero in range may discard a card.
If that hero has a card in the discard,
you may move up to 4 spaces.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Pledge of Allegiance",description:`A friendly hero in radius may discard a card.
If that hero has a card in the discard,
both you and that hero gain 1 coin and
you may retrieve a discarded card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Commit Reserves",description:`A friendly hero in range may discard a card.
If that hero has a card in the discard, you may
move up to 4 spaces, ignoring obstacles.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"AREA"},{name:"Loyal Retainer",description:`A friendly hero in radius may discard a card.
If that hero has a card in the discard,
both you and that hero gain 2 coins and
you may retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Ready for War",description:`Return your silver card to your deck and take
two gold cards from your deck into your hand.
~(You now have a total hand size of 6 cards.)`,color:"PURPLE",level:4}],Ro=[{name:"Ice Blast",description:`Target a unit adjacent to you. If the target
discards a card to defend, After the attack:
Another enemy hero in radius discards a
card of the same color, if able.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:4,secondaryMovement:1,secondaryDefense:1},{name:"Ice Shard",description:`Target a hero adjacent to you. If the target
discards a card to defend, After the attack:
Another enemy hero in radius discards a
card of the same color, if able.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Commune with Spirits",description:`A friendly hero in play names a color;
you may discard a card of that color.
Perform the primary aciton on a card
of that color in your discard.`,color:"SILVER",initiative:13,primaryAction:"SKILL",secondaryDefense:2},{name:"Reign of Winter",description:`Each time after you defeat a minion with your
basic attack, an enemy hero in radius discards
a card of the color of your choice, if able.`,color:"PURPLE",level:4,modifier:"AREA",modifierValue:4},{name:"Cold Snap",description:`Choose a direction. Move each enemy unit
in radius 1 space in that direction, if able.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Winter Dagger",description:`Target a unit adjacent to you.
+3 ::attack_red:: Attack if this card is not in the discard.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:2,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6},{name:"Glacial Barrier",description:`Place an ::token_ice:: ice token in radius.
Enemy heroes have -1 ::initiative:: Initiative for
every Ice token they are adjacent to.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Snowstorm",description:`Choose a direction. Move each enemy unit in
radius 1 space in that direciton, if able.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Winter Spear",description:`Target a unit adjacent to you.
+3 ::attack_red:: Attack if this card is not in the discard.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Wall of Frost",description:`Place up to 2 ::token_ice:: ice tokens in radius.
Enemy heroes have -1 ::initiative:: Initiative
for every Ice token they are adjacent to.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Guardian Spirit",description:`Up to 1 friendly hero in radius
may retrieve a discarded card.
If "Guardian Spirit" is in the discard, retrieve it.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Spirit Wolf",description:`**Choose one —**
>>If this card is not in the discard,
>target a unit in range.
>>Target a hero adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Ancestral Totem",description:`Place a ::token_totem:: in range.
If a friendly melee minion adjacent to a Totem
would be defeated, remove the totem instead.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Blizzard",description:`Choose a direction. Move each enemy unit
in radius 1 space in that direction, if able.
If this card is in the discard, **End of turn:**
May repeat once.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"MOVEMENT"},{name:"Winter Scepter",description:`Target a unit adjacent to you.
+3 ::attack_red:: Attack if this card is not in the discard.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",secondaryMovement:4,secondaryDefense:7,item:"AREA"},{name:"Pack Ice",description:`Place up to 3 ::token_ice:: ice tokens in radius.
Enemy heroes have -1 ::initiative:: Initiative for
every Ice token they are adjacent to.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"},{name:"Warrior Spirit",description:`Up to 1 friendly hero in radius may retrieve
a discarded card. If "Warrior Spirit" is in the
discard, you may retrieve a discarded card.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Spirit Bear",description:`**Choose one, or both,** on different targets —
>>If this card is not in the discard,
>target a unit in range.
>>Target a hero adjacent to you.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Venerated Totem",description:`Place a ::token_totem:: in range.
If a friendly minion adjacent to a totem would
be defeated, remove the totem instead.
Totem tokens are immune to enemy actions.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"}],bo=[{name:"Blink Strike",description:`Before the attack: Move 2 spaces in a straight
line through an enemy unit; target that unit.
~(If you cannot make this move, you cannot attack).`,color:"GOLD",initiative:13,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Nimble Strike",description:`Before the attack: Move 2 spaces in a straight
line through an enemy hero; target that hero.`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"ATTACK",primaryValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Blend Into Shadows",description:`If adjacent to terrain, place yourself
into a space in radius; if you do, **Next turn:**
You are immune to enemy attack actions.`,color:"SILVER",initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:2},{name:"Cloak and Daggers",description:`After you perform a basic action, you may
repeat it once; if you repeat an attack
action, you cannot target the same unit.`,color:"PURPLE",level:4},{name:"Dodge",description:"Block a ranged attack.",color:"BLUE",level:1,initiative:10,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3},{name:"Hit and Run",description:`Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:4,secondaryDefense:3},{name:"Light-Fingered",description:`You may move 1 space.
Take 1 coin from an enemy hero adjacent
to you; if you do, you may move 1 space.`,color:"GREEN",level:1,initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:1},{name:"Sidestep",description:`Block a ranged attack.
You may move 1 space.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"Combat Reflexes",description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: If you did not move before
the attack, you may move 1 space.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:3,item:"INITIATIVE"},{name:"Pick Pocket",description:`Move up to 2 spaces.
Take 1 coin from an enemy hero adjacent to
you; if you do, you may move 1 space.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:1,item:"ATTACK"},{name:"Parry",description:`Block a non-ranged attack.
The attacker discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"DEFENSE"},{name:"Backstab",description:`Target a unit adjacent to you; if a friendly
unit is adjacent to the target, +2 ::attack_red:: Attack.
~(A "friendly unit" is another hero or a minion on your team.)`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:5,item:"DEFENSE"},{name:"Poisoned Dagger",description:`Give a hero in range a ::marker_poison:: poison marker.
The hero with a poison marker has
-1 ::initiative:: Initiative, -1 ::attack_silver:: Attack, and -1 ::defense_silver:: Defense.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:1,item:"INITIATIVE"},{name:"Evade",description:`Block a ranged attack.
You may move 1 space. You may retrieve
your resolved or discarded basic skill card.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"ATTACK"},{name:"Leaping Strike",description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:4,secondaryDefense:4,item:"AREA"},{name:"Master Thief",description:`Move up to 2 spaces.  Take 1 or 2 coins
from an enemy hero adjacent to you;
if you do, you may move up to 2 spaces.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:1,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:2,item:"MOVEMENT"},{name:"Riposte",description:`Block a non-ranged attack. The attacker
discards a card, or is defeated.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:3,item:"RANGE"},{name:"Backstab with a Ballista",description:`Target a unit in range;
if a friendly unit is adjacent to the target
+2 ::attack_red:: Attack, and the target cannot
perform a primary action to defend.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:1,secondaryMovement:5,secondaryDefense:6,item:"DEFENSE"},{name:"Poisoned Dart",description:`Give a hero in range a ::marker_poison:: poison marker.
The hero with a poison marker has
-2 ::initiative:: Initiative, -2 ::attack_silver:: Attack, and -2 ::defense_silver:: Defense.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:1,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"INITIATIVE"}],Vo=[{name:"Rapid Redeployment",description:`**Choose one —**
>>Move up to 3 spaces and place the
>Turret into a space adjacent to you;
>it counts as an obstacle.
>>Defeat a minion adjacent to you.`,color:"GOLD",initiative:12,primaryAction:"SKILL",secondaryMovement:4,secondaryDefense:1},{name:"Ramshackle Turret",description:`Move up to 3 spaces and place
the Turret into a space adjacent to you;
it counts as an obstacle.
~(The Turret is not a token and remains in play between rounds.)`,color:"GOLD",handicapped:!0,initiative:12,primaryAction:"SKILL",secondaryMovement:4,secondaryDefense:1},{name:"Salvage Parts",description:`**Choose one —**
>>Place the Turret into a space adjacent
>to you; it counts as an obstacle.
>>Remove the Turret; move up to 3 spaces.
>>Remove the Turret; you may retrieve a
>discarded card.`,color:"SILVER",initiative:5,primaryAction:"SKILL",secondaryDefense:2},{name:"Unlimited Firepower",description:"Gain +1 ::range_silver:: Range and +1 ::radius_silver:: Radius.",color:"PURPLE",level:4},{name:"Disruptor Jolt",description:`**This turn:** Before any enemy hero in radius
of the Turret performs a primary action,
that hero discards a card, if able;
if they discard a card, deactivate this effect.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:3},{name:"Makeshift Minigun",description:`Target a unit in range of both you and the
Turret. If the target is in a straight line from
you, and in a straight line from the Turret,
gain +2 ::attack_red:: Attack.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:5},{name:"Early Prototype",description:`If you are in radius of the Turret, swap with
a unit or a token in radius of the Turret,
then remove the Turret.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2},{name:"Disruptor Pulse",description:`**This turn:** Before any enemy hero in radius
of the Turret performs a primary action,
that hero discards a card, if able;
if they discard a card, deactivate this effect.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"ATTACK"},{name:"Gatling Gun",description:`Target a unit in range of both you and the
Turret. If the target is in a straight line from
you, and in a straight line from the Turret,
gain +2 ::attack_red:: Attack.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Updated Design",description:`If you are in radius of the Turret, swap with
a unit or a token in radius of the Turret.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Deployable Barrier",description:`Place up to 2 ::token_barrier:: Barrier tokens in radius, with
at least one of them adjacent to the Turret;
you and friendly heroes gain +1 ::defense_silver:: Defense
for each Barrier token they are adjacent to.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Steam Discharge",description:`Target a unit in range adjacent to the Turret.
May repeat once on a different enemy unit.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Self-Destruct",description:`Up to two enemy heroes in radius of the Turret
discard a card, if able. Remove the Turret.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:"DEFENSE"},{name:"Disruptor Grid",description:`**This turn:** Before any enemy hero in radius
of the Turret performs a primary action,
that hero discards a card, or is defeated;
if they discard a card, deactivate this effect.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:"MOVEMENT"},{name:"Supercharged Cannon",description:`Target a unit in range of both you and the
Turret. If the target is in a straight line from
you, and in a straight line from the Turret,
gain +3 ::attack_red:: Attack.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,primaryValueSign:"PLUS",modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"DEFENSE"},{name:"Perfected Design",description:`If you are in radius of the Turret,
**Choose one —**
>>Swap with a unit or a token in radius
>of the Turret.
>>Place yourself into a space in radius
>of the Turret.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Deployable Bastion",description:`Place up to 3 ::token_barrier:: Barrier tokens in radius, with
at least one of them adjacent to the Turret;
you and friendly heroes gain +1 ::defense_silver:: Defense
for each Barrier token they are adjacent to.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"INITIATIVE"},{name:"Flame Belcher",description:`Target a unit in range adjacent to the Turret.
May repeat up to two times on
different enemy units.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:4,secondaryMovement:4,secondaryDefense:6,item:"AREA"},{name:"Emergency Protocol",description:`Up to two enemy heroes in radius of the
Turret discard a card, or are defeated.
Remove the Turret.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"RANGE"}],So=[{name:"Claws That Catch",description:`Before the attack: If enraged, you may
move 1 space to a space adjacent to an
enemy hero. Target a unit adjacent to you.
**This round:** You are enraged.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Jaws That Bite",description:`Before the attack: If enraged, you may
move 1 space to a space adjacent to an
enemy hero. Target a hero adjacent to you.
**This round:** You are enraged.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Angry Roar",description:`If enraged, perform the primary action on one
of your active cards with an active effect.
**This round:** You are enraged.`,color:"SILVER",initiative:7,primaryAction:"SKILL",secondaryDefense:4},{name:"Unbound Fury",description:`You are always enraged, and all your
resolved cards count as active.`,color:"PURPLE",level:4},{name:"Prowling Brute",description:`If enraged, after movement, you may swap
with a unit or token adjacent to you.
**This round:** You are enraged.`,color:"BLUE",level:1,initiative:9,primaryAction:"MOVEMENT",primaryValue:1,secondaryDefense:5},{name:"Prey Drive",description:`Target a unit adjacent to you. After the attack:
If enraged, and the target weas not removed,
remove up to 1 enemy minion in radius.
**This round:** You are enraged.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:7},{name:"Sniff Out",description:`If enraged, an enemy hero in range
discards a card, if able.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:2},{name:"Rampaging Beast",description:`If enraged, after movement, you may swap
with a unit or token adjacent to you;
if you do, move up to 1 additional space.
**This round:** You are enraged.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:1,secondaryDefense:6,item:"DEFENSE"},{name:"Prey Abundance",description:`Target a unit adjacent to you. After the attack:
If enraged, and the target was not removed,
remove up to 1 enemy minion in radius.
**This round:** You are enraged.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:"DEFENSE"},{name:"Eyes on the Prey",description:`If enraged, an enemy hero in range
discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Cold Ire",description:`If enraged, gain +1 ::movement_blue:: Movement.
**This round:** You are enraged.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:1,primaryValueSign:"PLUS",secondaryDefense:6,item:"ATTACK"},{name:"Rip",description:`Target a unit adjacent to you.
After the attack: If enraged, gain 1 coin.
**This round:** you are enraged.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:3,secondaryDefense:6,item:"INITIATIVE"},{name:"Instinctive Reaction",description:`If enraged, **choose one —**
>>Perform the primary action on one
>of your discarded cards.
>>You may retrieve a discarded card.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Unstoppable Force",description:`If enraged, after movement, you may swap
with a unit or token adjacent to you;
if you do, move up to 2 additional spaces.
**This round:** You are enraged.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:1,secondaryDefense:6,item:"RANGE"},{name:"Feeding Frenzy",description:`Target a unit adjacent to you. After the attack:
If enraged, and the target was not removed,
remove up to 2 enemy minions in radius.
**This round:** You are enraged.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:8,item:"DEFENSE"},{name:"Apex Predator",description:`If enraged, an enemy hero in range
discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Eyes of Flame",description:`If enraged, gain +2 ::movement_blue:: Movement.
**This round:** You are enraged.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"MOVEMENT",primaryValue:1,primaryValueSign:"PLUS",secondaryDefense:6,item:"AREA"},{name:"Tear",description:`Target a unit adjacent to you.
After the attack: If enraged, gain 2 coins.;
if you defeated a hero, that hero spends
1 additional ::life_counters:: Life counter.
**This round:** you are enraged.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:3,secondaryDefense:7,item:"INITIATIVE"},{name:"Evolutionary Response",description:`If enraged, **choose one, or both —**
>>Perform the primary action on one
>of your discarded cards.
>>You may retrieve a discarded card.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"MOVEMENT"}],Mo=[{name:"Magnetic Dagger",description:`Target a unit adjacent to you.
After the attack: **This turn:** Enemy units
in radius cannot be swapped or placed
by themselves or by enemy heroes.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Crackling Dagger",description:`Target a hero adjacent to you.
After the attack: **This turn:** Enemy units
in radius cannot be swapped or placed
by themselves or by enemy heroes.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:2,modifier:"AREA",modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Static Barrier",description:`**This turn:** While an enemy hero outside of
radius is performing an action, spaces in
radius count as obstacles. While an enemy
hero in radius is performing an action,
spaces outside of radius count as obstacles.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:2},{name:"High Voltage",description:`Each time after you perform a basic skill,
you may defeat an enemy minion in radius;
an enemy hero who was adjacent to that
minion discards a card, if able.`,color:"PURPLE",level:4,modifier:"AREA",modifierValue:3},{name:"Lift Up",description:`Move a unit, or a token, in radius 1 space,
without moving it away from you or closer to
you. May repeat once on the same target.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Shock",description:`Target a unit adjacent to you.
After the attack: An enemy hero in radius and
not adjacent to you discards a card, if able.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:6},{name:"Stop Projectiles",description:"Block a ranged attack.",color:"GREEN",level:1,initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",secondaryMovement:2},{name:"Control Gravity",description:`Move a unit, or a token, in radius 1 space,
without moving it away from you, or closer to 
you. May repeat once on the same target.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:"DEFENSE"},{name:"Electrocute",description:`Target a unit adjacent to you.
After the attack: An enemy hero in radius and
not adjacent to you discards a card, if able.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:5,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Deflect Projectiles",description:`Block a ranged attack; if you do, an enemy
hero in range, other than the attacker,
discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:3,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"RANGE",modifierValue:3,secondaryMovement:2,item:"INITIATIVE"},{name:"Kinetic Repulse",description:`Push up to 2 enemy units adjacent to you
3 spaces; if a pushed hero is stopped by an
obstacle, that hero discards a card, if able.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:5,item:"ATTACK"},{name:"Charged Boomerang",description:`Target a unit in range and not in a straight line.
~(Units adjacent to you are in a straight line from you.)`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:"DEFENSE"},{name:"Telekinesis",description:`Place a unit or a token in range, which is not
in a straight line, into a space adjacent to you.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Center of Mass",description:`Move a unit, or a token, in radius 1 space,
without moving it away from you, or closer
to you. May repeat up to two times
on the same target.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Electroblast",description:`Target a unit adjacent to you. After the attack:
An enemy hero in radius and not adjacent
to you discards a card, or is defeated.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Reflect Projectiles",description:`Block a ranged attack; if you do, an enemy
hero in range discards a card, if able.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"DEFENSE",primaryValueSign:"EXCLAMATION",modifier:"RANGE",modifierValue:3,secondaryMovement:2,item:"AREA"},{name:"Kinetic Blast",description:`Push up to 2 enemy units adjacent to you
3 or 4 spaces; if a pushed hero is stopped by
an obstacle, that hero discards a card, if able.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Thunder Boomerang",description:`Target a unit in range and not in a straight line.
After the attack: If you targeted a hero,
may repeat once on a different target.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Mass Telekinesis",description:`Place a unit or a token in range, which
is not in a straight line, into a space
adjacent to you. May repeat once.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"}],wo=[{name:"Swift Justice",description:`**Choose one —**
>>Target a hero in range with an empty discard.
>After the attack: If able, that hero performs a
>movement action on the card they defended
>with, moving full distance in a straight line.
>>Target a unit adjacent to you.`,color:"GOLD",initiative:12,primaryAction:"ATTACK",primaryValue:2,modifier:"RANGE",modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:"Vile Accusation",description:`**Choose one —**
>>Target a hero in range with an empty discard.
>After the attack: If able, that hero performs a
>movement action on the card they defended
>with, moving full distance in a straight line.
>>Target a hero adjacent to you.`,color:"GOLD",handicapped:!0,initiative:11,primaryAction:"ATTACK",primaryValue:1,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:"Death Seeker",description:`If an enemy hero in radius has a card
in the discard, **choose one —**
>>**This turn:** You are immune to enemy actions.
>>You may retrieve a discarded card.`,color:"SILVER",initiative:13,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:2},{name:"Grim Reaper",description:`When performing basic actions,
you may choose one, or both.`,color:"PURPLE",level:4},{name:"Seeds of Fear",description:`Target an enemy unit in radius occupying
a spawn point. Move that unit 1 space.`,color:"BLUE",level:1,initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5},{name:"Crimson Trail",description:`Before the attack: You may move up
to 1 space if there is an empty minion spawn
point in radius in the battle zone.
Target a unit adjacent to you.`,color:"RED",level:1,initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:4},{name:"Shadow Step",description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:"GREEN",level:1,initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:"Sprouts of Panic",description:`Target an enemy unit in radius occupying a
spawn point. Move that unit up to 2 spaces.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"INITIATIVE"},{name:"Sanguine Path",description:`Before the attack: Move up to
1 space for every empty minion spawn point
in radius in the battle zone, up to a maximum
of 2 spaces. Target a unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Shadow Walk",description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"ATTACK"},{name:"Lesser Evil",description:`An enemy hero in range **chooses one —**
>>That hero discards a card, if able.
>>You may defeat a minion adjacent to you.
~(Any option can be chosen, even if it would have no effect.)`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Blood Fury",description:`Target a unit adjacent to you. After the attack:
If an enemy hero in radius has a card in the
discard, may repeat once on a different target.`,color:"RED",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,modifier:"AREA",modifierValue:5,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Cruel Twist",description:`Swap with a unit adjacent to you, or with
an enemy hero in range with a card in
the discard. Move up to 2 spaces.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:"DEFENSE"},{name:"Blooming Nightmare",description:`Target an enemy unit in radius occupying
a spawn point. Move that unit up to 3 spaces.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:11,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:"INITIATIVE"},{name:"Blood Pilgrimage",description:`Before the attack: You may move up to
1 space for every empty minion spawn point
in radius in the battle zone, up to a maximum
of 3 spaces. Target a unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:"MOVEMENT"},{name:"Creeping Shadow",description:`Place yourself into an empty minion spawn
point in range in the battle zone, or into a
space in range adjacent to such a spawn point.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"AREA"},{name:"Greater Good",description:`An enemy hero in range **chooses one —**
>>That hero discards a card, or is defeated.
>>You defeat up to 3 minions adjacent to you.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:11,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Blood Frenzy",description:`Target a unit adjacent to you.
After the attack: If an enemy hero
in radius has a card in the discard,
repeat up to five times on different targets.`,color:"RED",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"ATTACK",primaryValue:7,modifier:"AREA",modifierValue:5,secondaryMovement:4,secondaryDefense:7,item:"RANGE"},{name:"Sealed Fate",description:`Swap with a unit adjacent to you, or with
an enemy hero in range with a card in
the discard. Move up to 3 spaces.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:2,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"}],No=[{name:"Fight as One",description:`Target a unit adjacent to you.
After the attack: You may perform the primary
action on one of your resolved skill cards,
targeting a different unit.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Follow Along",description:`Target a hero adjacent to you.
After the attack: You may perform the primary
action on one of your resolved skill cards,
targeting a different unit.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:2,secondaryDefense:1},{name:"Dragon Bond",description:`**Choose one —**
>>Place Pyro into a space in radius.
>Pyro counts as a token, but is not
>removed at the end of round.
>>If Pyro is in play, move both yourself and
>Pyro up to 2 spaces, in any order.`,color:"SILVER",initiative:6,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryDefense:6},{name:"Diversionary Strike",description:`Target a unit adjacent to you.
After the attack: Move Pyro up to 2 spaces.`,color:"RED",level:1,initiative:8,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:6},{name:"All Aboard",description:`Swap Pyro in range with yourself
or with a friendly hero in range.`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:3,secondaryDefense:3},{name:"Fiery Breath",description:`An enemy hero in range of Pyro and in a
straight line from Pyro discards a card, if able.`,color:"GREEN",level:1,initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:2,secondaryMovement:2,secondaryDefense:1},{name:"Diversionary Attack",description:`Target a unit adjacent to you.
After the attack: Move Pyro up to 3 spaces.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,secondaryMovement:4,secondaryDefense:6,item:"INITIATIVE"},{name:"Airborne Attack",description:`Before the attack: You may swap with Pyro
in radius. Target a unit adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:3,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Diversionary Assault",description:`Target a unit adjacent to you.
After the attack: Move Pyro up to 4 spaces.`,color:"RED",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:6,secondaryMovement:4,secondaryDefense:7,item:"INITIATIVE"},{name:"Airborne Assault",description:`Before the attack: You may swap with Pyro
in radius. Target a unit adjacent to you.
After the attack: You may swap
with Pyro in radius.`,color:"RED",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"ATTACK",primaryValue:4,modifier:"AREA",modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:"RANGE"},{name:"Take-Off",description:`Swap Pyro in range with yourself
or with a friendly hero in range.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:"DEFENSE"},{name:"Drag Off",description:`Move both Pyro, and an enemy unit
adjacent to Pyro, either 2 or 3 spaces
each, in the same direction.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:3,item:"ATTACK"},{name:"Safe Landing",description:`You may move Pyro in range 1 space.
Swap Pyro in range with yourself
or with a friendly hero in range.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:"DEFENSE"},{name:"Carry Away",description:`Move both Pyro, and an enemy unit
adjacent to Pyro, either 2 or 3 spaces
each, in the same direction, ignoring obstacles.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:4,item:"AREA"},{name:"Flaming Breath",description:`An enemy hero in range of Pyro and in a
straight line from Pyro discards a card, if able.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Nibble",description:`Remove an enemy minion in range
adjacent to Pyro. Remove Pyro.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"INITIATIVE"},{name:"Scorching Breath",description:`An enemy hero in range of Pyro and in a
straight line from Pyro
discards a card, or is defeated.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"ATTACK"},{name:"Gnaw",description:`Defeat a minion in range adjacent to Pyro.
Remove Pyro.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:"MOVEMENT"},{name:"Dragon Knight",description:`Each time after you perform a movement
action, you may perform the primary
action on one of your faceup skill cards.`,color:"PURPLE",level:4}],Co=[{name:"Tree Slam",description:`**Choose one —**
>>Target a minion adjacent to you.
>>Remove a ::token_tree:: Tree token adjacent to you.
>Target a unit in range.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:3},{name:"Makeshift Weapon",description:`**Choose one —**
>>Target a hero adjacent to you.
>>Remove a ::token_tree:: Tree token adjacent to you.
>Target a hero in range.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:2,secondaryMovement:1,secondaryDefense:2},{name:"Mystic Saplings",description:`Place up to 3 ::token_tree:: Tree tokens in radius; Tree
tokens are not removed at the end of round.`,color:"SILVER",initiative:4,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryDefense:4},{name:"March of Nature",description:`Each time after you resolve a card, you
may place a ::token_tree:: Tree token in radius.`,color:"PURPLE",level:4,modifier:"AREA",modifierValue:3},{name:"Gifts of Nature",description:`Remove a ::token_tree:: Tree token in radius.
You may retrieve a discarded card.`,color:"BLUE",level:1,initiative:8,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:2,secondaryDefense:5},{name:"Nature's Protector",description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a unit in range adjacent
to a ::token_tree:: Tree token.`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:2,secondaryMovement:4,secondaryDefense:7},{name:"Toss Away",description:`Place a token, or an enemy unit,
adjacent to you into a space in range.`,color:"GREEN",level:1,initiative:6,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:"Tree of Plenty",description:`Remove a ::token_tree:: Tree token in radius.
**Choose one —**
>>You may retrieve a discarded card.
>>A friendly hero in radius may retrieve a
>discarded card.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"ATTACK"},{name:"Nature's Guardian",description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a unit in range adjacent
to a ::token_tree:: Tree token.`,color:"RED",level:2,variant:{first:1,second:2},initiative:7,primaryAction:"ATTACK",primaryValue:5,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:8,item:"INITIATIVE"},{name:"Mighty Throw",description:`Place a token, or an enemy unit,
adjacent to you into a space in range.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:"ATTACK"},{name:"Claim Dominance",description:`**This round:** Up to 1 enemy minion adjacent
to you does not count towards the minion total
during minion battle, regardless of immunity.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"INITIATIVE"},{name:"Trample",description:`If you move in a straight line: You may ignore
obstacles; each enemy hero you moved
through discards a card, or is defeated;
defeat up to one minion you moved through.`,color:"RED",level:2,variant:{first:2,second:2},initiative:7,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:7,item:"DEFENSE"},{name:"Into the Canopy",description:`**Choose one —**
>>Swap with a ::token_tree:: Tree token in radius.
>>Swap a friendly unit in radius with
>a Tree token in radius.`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:"DEFENSE"},{name:"Abundance",description:`Remove a ::token_tree:: Tree token in radius.
**Choose one or both —**
>>You may retrieve a discarded card.
>>A friendly hero in radius may retrieve a
>discarded card.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:"RANGE"},{name:"Nature's Champion",description:`**Choose one, or both,** on different targets **—**
>>Target a hero adjacent to you.
>>Target a unit in range adjacent to
a ::token_tree:: Tree token.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:6,modifier:"RANGE",modifierValue:3,secondaryMovement:4,secondaryDefense:8,item:"INITIATIVE"},{name:"Monstrous Throw",description:`Place a token, or an enemy unit,
adjacent to you into a space in range.
May repeat once.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:5,primaryAction:"SKILL",modifier:"RANGE",modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:"ATTACK"},{name:"Assert Dominance",description:`**This round:** Up to 1 enemy minion adjacent
to you does not count towards the minion total
during minion battle, regardless of immunity.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:9,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:6,item:"MOVEMENT"},{name:"Angry Stampede",description:`If you move in a straight line: You may ignore
obstacles; each enemy hero you moved
through discards a card, or is defeated;
defeat up to two minions you moved through.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"MOVEMENT",primaryValue:4,secondaryDefense:7,item:"AREA"},{name:"Treetop Ride",description:`**Choose up to two times —**
>>Swap with a ::token_tree:: Tree token in radius.
>>Swap a friendly unit in radius with
>a Tree token in radius.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:5,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:"DEFENSE"}],_o=[{name:"Cleave",description:`Target a unit adjacent to you.
After the attack: May repeat once
on a different enemy hero.`,color:"GOLD",initiative:11,primaryAction:"ATTACK",primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:"Desperate Cleave",description:`Target a hero adjacent to you.
After the attack: May repeat once
on a different enemy hero.`,color:"GOLD",handicapped:!0,initiative:10,primaryAction:"ATTACK",primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:"Siren's Call",description:`Target an enemy unit not adjacent to you
and in range; if able, move that unit
up to 3 spaces to a space adjacent to you.`,color:"SILVER",initiative:3,primaryAction:"SKILL",modifier:"RANGE",modifierValue:3,secondaryDefense:3},{name:"Metamorphosis",description:`Gain +1 ::movement_silver:: Movement and +1 ::initiative:: Initiative
for each enemy unit adjacent to you.
You may move through obstacles.`,color:"PURPLE",level:4},{name:"Stone Gaze",description:`**Next turn:** Enemy heroes in radius count
as both heroes and terrain, and cannot
perform movement actions.
~(If you move, the radius "moves" with you)`,color:"BLUE",level:1,initiative:9,primaryAction:"SKILL",modifier:"AREA",modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:"Threatening Slash",description:`Target a unit adjacent to you. +1 ::attack_red:: Attack
for each other enemy unit adjacent to you.
~(Do not count the target when calculating the attack bonus.)`,color:"RED",level:1,initiative:7,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:6},{name:"Charm",description:`Before or after movement, you may
move an enemy ranged minion
in radius up to 2 spaces.`,color:"GREEN",level:1,initiative:5,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:2,secondaryDefense:3},{name:"Petrifying Stare",description:`**Next turn:** Enemy heroes in radius count
as both heroes and terrain, and cannot
perform movement actions.`,color:"BLUE",level:2,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Deadly Swipe",description:`Target a unit adjacent to you. +2 ::attack_red:: Attack
for each other enemy unit adjacent to you.`,color:"RED",level:2,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:7,item:"INITIATIVE"},{name:"Control",description:`Before or after movement, you may move
an enemy ranged or melee minion
in radius up to 2 spaces.`,color:"GREEN",level:2,variant:{first:1,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:2,secondaryDefense:3,item:"ATTACK"},{name:"Fresh Converts",description:`If you are adjacent to an enemy minion,
you may retrieve a discarded card.`,color:"BLUE",level:2,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"ATTACK"},{name:"Long Thrust",description:`Target a unit in range. +1 ::range_red:: Range
for each enemy unit adjacent to you.`,color:"RED",level:2,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:3,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:4,item:"DEFENSE"},{name:"Constrict",description:`**End of round:** Defeat an enemy
melee minion adjacent to you.
~(Before the end of round minion battle.)`,color:"GREEN",level:2,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:3,item:"INITIATIVE"},{name:"Turn into Statues",description:`**Next turn:** Enemy heroes in radius count
as both heroes and terrain, and cannot
perform movement actions.`,color:"BLUE",level:3,variant:{first:1,second:2},initiative:10,primaryAction:"SKILL",modifier:"AREA",modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:"DEFENSE"},{name:"Lethal Spin",description:`Target a unit adjacent to you. +3 ::attack_red:: Attack 
for each other enemy unit adjacent to you.`,color:"RED",level:3,variant:{first:1,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:5,primaryValueSign:"PLUS",secondaryMovement:5,secondaryDefense:7,item:"AREA"},{name:"Dominate",description:`Before or after movement, you may move
an enemy minion in radius up to 2 spaces;
ignore heavy minion immunity.`,color:"GREEN",level:3,variant:{first:1,second:2},initiative:4,primaryAction:"MOVEMENT",primaryValue:2,modifier:"AREA",modifierValue:2,secondaryDefense:4,item:"ATTACK"},{name:"Devoted Followers",description:`If you are adjacent to an enemy unit,
you may retrieve a discarded card.`,color:"BLUE",level:3,variant:{first:2,second:2},initiative:10,primaryAction:"SKILL",secondaryMovement:3,secondaryDefense:6,item:"RANGE"},{name:"Rapid Thrusts",description:`Target a unit in range. +1 ::range_red:: Range
for each enemy unit adjacent to you.
May repeat once on a different enemy hero.`,color:"RED",level:3,variant:{first:2,second:2},initiative:8,primaryAction:"ATTACK",primaryValue:4,modifier:"RANGE",modifierValue:1,modifierValueSign:"PLUS",secondaryMovement:4,secondaryDefense:4,item:"MOVEMENT"},{name:"Final Embrace",description:`**End of round:** Defeat an enemy melee
or ranged minion adjacent to you.`,color:"GREEN",level:3,variant:{first:2,second:2},initiative:4,primaryAction:"SKILL",secondaryMovement:2,secondaryDefense:4,item:"INITIATIVE"}],Ko={arien:io,bain:ao,brogan:to,brynn:ro,cutter:oo,dodger:so,emmitt:co,garrus:mo,gydion:lo,hanu:uo,ignatia:fo,min:yo,misa:po,mortimer:ho,mrak:vo,nebkher:Ao,razzle:Eo,rowenna:go,sabina:Io,silverarrow:To,snorri:Do,swift:Lo,takahide:ko,tali:Ro,tigerclaw:bo,trinkets:Vo,ursafar:So,wasp:Mo,whisper:wo,widget:No,wuk:Co,xargatha:_o},Za=ht(0);var Ht;const Go=(Ht=globalThis.matchMedia)==null?void 0:Ht.call(globalThis,"(prefers-reduced-motion: reduce)").matches,dt=n=>({easing:Jt,duration:Go?0:n});function Mt(n){let i,e,a,t,c,m;return{c(){i=v("div"),e=v("span"),a=w(),t=v("span"),this.h()},l(o){i=A(o,"DIV",{class:!0,style:!0});var s=E(i);e=A(s,"SPAN",{class:!0}),E(e).forEach(l),a=N(s),t=A(s,"SPAN",{class:!0}),E(t).forEach(l),s.forEach(l),this.h()},h(){d(e,"class","bp-bar"),d(t,"class","bp-o"),d(i,"class","bp-load"),d(i,"style",n[2])},m(o,s){W(o,i,s),u(i,e),u(i,a),u(i,t),m=!0},p:Mn,i(o){m||(c&&c.end(1),m=!0)},o(o){o&&(c=Aa(i,wi,{duration:480})),m=!1},d(o){o&&l(i),o&&c&&c.end()}}}function wt(n){let i,e;return{c(){i=v("div"),this.h()},l(a){i=A(a,"DIV",{class:!0,style:!0}),E(i).forEach(l),this.h()},h(){d(i,"class","bp-load"),d(i,"style",n[2])},m(a,t){W(a,i,t)},p:Mn,i(a){e||Wt(()=>{e=Zt(i,wi,{duration:480}),e.start()})},o:Mn,d(a){a&&l(i)}}}function jo(n){let i,e,a=!n[0]&&Mt(n),t=n[1]&&wt(n);return{c(){a&&a.c(),i=w(),t&&t.c(),e=Vi()},l(c){a&&a.l(c),i=N(c),t&&t.l(c),e=Vi()},m(c,m){a&&a.m(c,m),W(c,i,m),t&&t.m(c,m),W(c,e,m)},p(c,[m]){c[0]?a&&(Si(),F(a,1,1,()=>{a=null}),Mi()):a?(a.p(c,m),m&1&&j(a,1)):(a=Mt(c),a.c(),j(a,1),a.m(i.parentNode,i)),c[1]?t?(t.p(c,m),m&2&&j(t,1)):(t=wt(c),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(c){j(a),j(t)},o(c){F(a)},d(c){c&&(l(i),l(e)),a&&a.d(c),t&&t.d(c)}}}function Bo(n,i,e){let a;Xi(n,Za,o=>e(1,a=o));let{thumb:t}=i,{loaded:c}=i;const m=`background-image:url(${t})`;return n.$$set=o=>{"thumb"in o&&e(3,t=o.thumb),"loaded"in o&&e(0,c=o.loaded)},[c,a,m,t]}class vt extends Ni{constructor(i){super(),Ci(this,i,Bo,jo,Zi,{thumb:3,loaded:0})}}function Nt(n){let i,e,a,t,c,m,o;return{c(){i=v("img"),this.h()},l(s){i=A(s,"IMG",{srcset:!0,sizes:!0,alt:!0}),this.h()},h(){pr(i,e=n[7].img)||d(i,"srcset",e),d(i,"sizes",a=n[8].sizes||`${n[1]}px`),d(i,"alt",n[7].alt)},m(s,y){W(s,i,y),c=!0,m||(o=V(i,"error",n[26]),m=!0)},p(s,y){(!c||y[0]&2&&a!==(a=s[8].sizes||`${s[1]}px`))&&d(i,"sizes",a)},i(s){c||(t&&t.end(1),c=!0)},o(s){t=Aa(i,wi,{}),c=!1},d(s){s&&l(i),s&&t&&t.end(),m=!1,o()}}}function Ct(n){let i,e;return i=new vt({props:{thumb:n[7].thumb,loaded:n[2]}}),{c(){te(i.$$.fragment)},l(a){re(i.$$.fragment,a)},m(a,t){oe(i,a,t),e=!0},p(a,t){const c={};t[0]&4&&(c.loaded=a[2]),i.$set(c)},i(a){e||(j(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){se(i,a)}}}function Po(n){let i,e,a,t,c,m,o=n[2]&&Nt(n),s=n[3]&&Ct(n);return{c(){i=v("div"),e=v("div"),o&&o.c(),a=w(),s&&s.c(),this.h()},l(y){i=A(y,"DIV",{class:!0});var h=E(i);e=A(h,"DIV",{class:!0,style:!0});var S=E(e);o&&o.l(S),a=N(S),s&&s.l(S),S.forEach(l),h.forEach(l),this.h()},h(){d(e,"class","bp-img"),Le(e,"background-image","url("+n[7].thumb+")"),Le(e,"width",n[0][0]+"px"),Le(e,"height",n[0][1]+"px"),Le(e,"transform","translate3d("+(n[0][0]/-2+n[6][0])+"px, "+(n[0][1]/-2+n[6][1])+"px, 0)"),gn(e,"bp-drag",n[4]),gn(e,"bp-canzoom",n[11]>1&&n[0][0]<n[12]),d(i,"class","bp-img-wrap"),gn(i,"bp-close",n[5])},m(y,h){W(y,i,h),u(i,e),o&&o.m(e,null),u(e,a),s&&s.m(e,null),t=!0,c||(m=[qa(n[20].call(null,e)),V(i,"wheel",n[15]),V(i,"pointerdown",n[16]),V(i,"pointermove",n[17]),V(i,"pointerup",n[19]),V(i,"pointercancel",n[18])],c=!0)},p(y,h){y[2]?o?(o.p(y,h),h[0]&4&&j(o,1)):(o=Nt(y),o.c(),j(o,1),o.m(e,a)):o&&(Si(),F(o,1,1,()=>{o=null}),Mi()),y[3]?s?(s.p(y,h),h[0]&8&&j(s,1)):(s=Ct(y),s.c(),j(s,1),s.m(e,null)):s&&(Si(),F(s,1,1,()=>{s=null}),Mi()),(!t||h[0]&1)&&Le(e,"width",y[0][0]+"px"),(!t||h[0]&1)&&Le(e,"height",y[0][1]+"px"),(!t||h[0]&65)&&Le(e,"transform","translate3d("+(y[0][0]/-2+y[6][0])+"px, "+(y[0][1]/-2+y[6][1])+"px, 0)"),(!t||h[0]&16)&&gn(e,"bp-drag",y[4]),(!t||h[0]&6145)&&gn(e,"bp-canzoom",y[11]>1&&y[0][0]<y[12]),(!t||h[0]&32)&&gn(i,"bp-close",y[5])},i(y){t||(j(o),j(s),t=!0)},o(y){F(o),F(s),t=!1},d(y){y&&l(i),o&&o.d(),s&&s.d(),c=!1,ga(m)}}}function Uo(n,i,e){let a,t,c,m;Xi(n,Za,T=>e(25,c=T));let{props:o}=i,{smallScreen:s}=i,{activeItem:y,opts:h,prev:S,next:K,zoomed:C,container:D}=o;Xi(n,C,T=>e(24,a=T));let g=y.maxZoom||h.maxZoom||10,I=o.calculateDimensions(y),L=I[0],G,M,X,Ae,J=0,Q,be,Ve,Ee,ge,Qe,Se;const ke=+y.width,pe=[],Me=new Map,Ie=St(I,dt(400));Xi(n,Ie,T=>e(0,m=T));const fe=St([0,0],dt(400));Xi(n,fe,T=>e(6,t=T));const de=([T,x],H=m)=>{const Y=(H[0]-D.w)/2,q=(H[1]-D.h)/2;return Y<0?T=0:T>Y?s?(T=Q?Y+(T-Y)/10:Y,T>Y+20&&e(4,Q=S())):T=Y:T<-Y&&(s?(T=Q?-Y-(-Y-T)/10:-Y,T<-Y-20&&e(4,Q=K())):T=-Y),q<0?x=0:x>q?x=q:x<-q&&(x=-q),[T,x]};function $e(T=g,x){if(c)return;const H=I[0]*g;let Y=m[0]+m[0]*T,q=m[1]+m[1]*T;if(T>0)Y>H&&(Y=H,q=I[1]*g),Y>ke&&(Y=ke,q=+y.height);else if(Y<I[0])return Ie.set(I),fe.set([0,0]);let{x:ie,y:le,width:Kn,height:De}=Ae.getBoundingClientRect();const Gn=x?x.clientX-ie-Kn/2:0,wn=x?x.clientY-le-De/2:0;ie=-Gn*(Y/Kn)+Gn,le=-wn*(q/De)+wn;const In=[Y,q];Ie.set(In).then(()=>{e(1,L=Math.round(Math.max(L,Y)))}),fe.set(de([t[0]+ie,t[1]+le],In))}Object.defineProperty(y,"zoom",{configurable:!0,get:()=>a,set:T=>$e(T?g:-g)});const b=T=>{h.inline&&!a||(T.preventDefault(),$e(T.deltaY/-300,T))},_=T=>{T.button!==2&&(T.preventDefault(),e(4,Q=!0),Me.set(T.pointerId,T),Ve=T.clientX,Ee=T.clientY,ge=t[0],Qe=t[1])},U=T=>{var Y;if(Me.size>1)return e(4,Q=!1),((Y=h.noPinch)==null?void 0:Y.call(h,D.el))||$(T);if(!Q)return;let x=T.clientX,H=T.clientY;be=pe.push({x,y:H})>2,x=x-Ve,H=H-Ee,a||(H<-90&&e(4,Q=!h.noClose&&o.close()),Math.abs(H)<30&&(x>40&&e(4,Q=S()),x<-40&&e(4,Q=K()))),a&&be&&!c&&fe.set(de([ge+x,Qe+H]),{duration:0})},$=T=>{const[x,H]=Me.set(T.pointerId,T).values(),Y=x.clientX-H.clientX,q=x.clientY-H.clientY,ie=Math.hypot(Y,q);X=X||{clientX:(x.clientX+H.clientX)/2,clientY:(x.clientY+H.clientY)/2},$e(((J||ie)-ie)/-35,X),J=ie},me=T=>Me.delete(T.pointerId);function ee(T){var x;if(me(T),X&&(e(4,Q=J=0),X=Me.size?X:null),!!Q){if(e(4,Q=!1),T.target===this&&!h.noClose)return o.close();if(be){const[H,Y,q]=pe.slice(-3),ie=Y.x-q.x,le=Y.y-q.y;Math.hypot(ie,le)>5&&fe.set(de([t[0]-(H.x-q.x)*5,t[1]-(H.y-q.y)*5]))}else(x=h.onImageClick)!=null&&x.call(h,D.el,y)||$e(a?-g:g,T);be=!1,pe.length=0}}const ne=T=>{Ae=T,o.setResizeFunc(()=>{e(23,I=o.calculateDimensions(y)),(h.inline||!s)&&(Ie.set(I),fe.set([0,0]))}),o.loadImage(y).then(()=>{e(2,G=!0),o.preloadNext()}),setTimeout(()=>{e(3,M=!G)},250)},Te=T=>{var x;return(x=h.onError)==null?void 0:x.call(h,D,y,T)};return n.$$set=T=>{"props"in T&&e(21,o=T.props),"smallScreen"in T&&e(22,s=T.smallScreen)},n.$$.update=()=>{if(n.$$.dirty[0]&8388609&&C.set(m[0]-10>I[0]),n.$$.dirty[0]&58720256&&c&&a&&!h.intro){const T=dt(480);fe.set([0,0],T),Ie.set(I,T),e(5,Se=!0)}},[m,L,G,M,Q,Se,t,y,h,C,D,g,ke,Ie,fe,b,_,U,me,ee,ne,o,s,I,a,c,Te]}let xo=class extends Ni{constructor(i){super(),Ci(this,i,Uo,Po,Zi,{props:21,smallScreen:22},null,[-1,-1])}};function Oo(n){let i,e,a,t,c,m,o;return t=new vt({props:{thumb:n[2].thumb,loaded:n[0]}}),{c(){i=v("div"),e=v("iframe"),a=w(),te(t.$$.fragment),this.h()},l(s){i=A(s,"DIV",{class:!0,style:!0});var y=E(i);e=A(y,"IFRAME",{allow:!0,title:!0}),E(e).forEach(l),a=N(y),re(t.$$.fragment,y),y.forEach(l),this.h()},h(){d(e,"allow","autoplay; fullscreen"),d(e,"title",n[2].title),d(i,"class","bp-if"),Le(i,"width",n[1][0]+"px"),Le(i,"height",n[1][1]+"px")},m(s,y){W(s,i,y),u(i,e),u(i,a),oe(t,i,null),c=!0,m||(o=[qa(n[3].call(null,e)),V(e,"load",n[5])],m=!0)},p(s,[y]){const h={};y&1&&(h.loaded=s[0]),t.$set(h),(!c||y&2)&&Le(i,"width",s[1][0]+"px"),(!c||y&2)&&Le(i,"height",s[1][1]+"px")},i(s){c||(j(t.$$.fragment,s),c=!0)},o(s){F(t.$$.fragment,s),c=!1},d(s){s&&l(i),se(t),m=!1,ga(o)}}}function Fo(n,i,e){let{props:a}=i,t,c;const{activeItem:m}=a,o=()=>e(1,c=a.calculateDimensions(m));o(),a.setResizeFunc(o);const s=h=>h.src=m.iframe,y=()=>e(0,t=!0);return n.$$set=h=>{"props"in h&&e(4,a=h.props)},[t,c,m,s,a,y]}class Yo extends Ni{constructor(i){super(),Ci(this,i,Fo,Oo,Zi,{props:4})}}function zo(n){let i,e,a,t,c;return e=new vt({props:{thumb:n[2].thumb,loaded:n[0]}}),{c(){i=v("div"),te(e.$$.fragment),this.h()},l(m){i=A(m,"DIV",{class:!0,style:!0});var o=E(i);re(e.$$.fragment,o),o.forEach(l),this.h()},h(){d(i,"class","bp-vid"),Le(i,"width",n[1][0]+"px"),Le(i,"height",n[1][1]+"px"),Le(i,"background-image","url("+n[2].thumb+")")},m(m,o){W(m,i,o),oe(e,i,null),a=!0,t||(c=qa(n[3].call(null,i)),t=!0)},p(m,[o]){const s={};o&1&&(s.loaded=m[0]),e.$set(s),(!a||o&2)&&Le(i,"width",m[1][0]+"px"),(!a||o&2)&&Le(i,"height",m[1][1]+"px")},i(m){a||(j(e.$$.fragment,m),a=!0)},o(m){F(e.$$.fragment,m),a=!1},d(m){m&&l(i),se(e),t=!1,c()}}}function Ho(n,i,e){let{props:a}=i,t,c;const{activeItem:m,opts:o,container:s}=a,y=()=>e(1,c=a.calculateDimensions(m));y(),a.setResizeFunc(y);const h=(K,C)=>{for(const D in C)d(K,D,C[D])},S=K=>{let C;const D=(g,I)=>{var L;Array.isArray(I)||(I=JSON.parse(I));for(const G of I){C||(C=v((L=G.type)!=null&&L.includes("audio")?"audio":"video"),h(C,{controls:!0,autoplay:!0,playsinline:!0,tabindex:"0"}));const M=v(g);h(M,G),g=="source"&&V(M,"error",X=>{var Ae;return(Ae=o.onError)==null?void 0:Ae.call(o,s,m,X)}),Lt(C,M)}};D("source",m.sources),D("track",m.tracks||[]),V(C,"canplay",()=>e(0,t=!0)),Lt(K,C)};return n.$$set=K=>{"props"in K&&e(4,a=K.props)},[t,c,m,S,a]}class Wo extends Ni{constructor(i){super(),Ci(this,i,Ho,zo,Zi,{props:4})}}function _t(n){let i,e,a,t,c=n[6].i,m,o,s,y,h,S,K,C,D=Gt(n),g=n[0].length>1&&jt(n);return{c(){i=v("div"),e=v("div"),t=w(),D.c(),m=w(),o=v("div"),s=v("button"),y=w(),g&&g.c(),this.h()},l(I){i=A(I,"DIV",{class:!0});var L=E(i);e=A(L,"DIV",{}),E(e).forEach(l),t=N(L),D.l(L),m=N(L),o=A(L,"DIV",{class:!0});var G=E(o);s=A(G,"BUTTON",{class:!0,title:!0,"aria-label":!0}),E(s).forEach(l),y=N(G),g&&g.l(G),G.forEach(l),L.forEach(l),this.h()},h(){d(s,"class","bp-x"),d(s,"title","Close"),d(s,"aria-label","Close"),d(o,"class","bp-controls"),d(i,"class","bp-wrap"),gn(i,"bp-zoomed",n[10]),gn(i,"bp-inline",n[8]),gn(i,"bp-small",n[7]),gn(i,"bp-noclose",n[5].noClose)},m(I,L){W(I,i,L),u(i,e),u(i,t),D.m(i,null),u(i,m),u(i,o),u(o,s),u(o,y),g&&g.m(o,null),S=!0,K||(C=[V(s,"click",n[1]),qa(n[14].call(null,i))],K=!0)},p(I,L){L[0]&64&&Xt(c,c=I[6].i)?(Si(),F(D,1,1,Mn),Mi(),D=Gt(I),D.c(),j(D,1),D.m(i,m)):D.p(I,L),I[0].length>1?g?g.p(I,L):(g=jt(I),g.c(),g.m(o,null)):g&&(g.d(1),g=null),(!S||L[0]&1024)&&gn(i,"bp-zoomed",I[10]),(!S||L[0]&256)&&gn(i,"bp-inline",I[8]),(!S||L[0]&128)&&gn(i,"bp-small",I[7]),(!S||L[0]&32)&&gn(i,"bp-noclose",I[5].noClose)},i(I){S||(a&&a.end(1),j(D),h&&h.end(1),S=!0)},o(I){I&&(a=Aa(e,wi,{duration:480})),F(D),I&&(h=Aa(o,wi,{})),S=!1},d(I){I&&l(i),I&&a&&a.end(),D.d(I),g&&g.d(),I&&h&&h.end(),K=!1,ga(C)}}}function Xo(n){let i,e,a=n[6].html+"";return{c(){i=v("div"),e=new ft(!1),this.h()},l(t){i=A(t,"DIV",{class:!0});var c=E(i);e=yt(c,!1),c.forEach(l),this.h()},h(){e.a=null,d(i,"class","bp-html")},m(t,c){W(t,i,c),e.m(a,i)},p(t,c){c[0]&64&&a!==(a=t[6].html+"")&&e.p(a)},i:Mn,o:Mn,d(t){t&&l(i)}}}function Zo(n){let i,e;return i=new Yo({props:{props:n[13]()}}),{c(){te(i.$$.fragment)},l(a){re(i.$$.fragment,a)},m(a,t){oe(i,a,t),e=!0},p:Mn,i(a){e||(j(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){se(i,a)}}}function qo(n){let i,e;return i=new Wo({props:{props:n[13]()}}),{c(){te(i.$$.fragment)},l(a){re(i.$$.fragment,a)},m(a,t){oe(i,a,t),e=!0},p:Mn,i(a){e||(j(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){se(i,a)}}}function Jo(n){let i,e;return i=new xo({props:{props:n[13](),smallScreen:n[7]}}),{c(){te(i.$$.fragment)},l(a){re(i.$$.fragment,a)},m(a,t){oe(i,a,t),e=!0},p(a,t){const c={};t[0]&128&&(c.smallScreen=a[7]),i.$set(c)},i(a){e||(j(i.$$.fragment,a),e=!0)},o(a){F(i.$$.fragment,a),e=!1},d(a){se(i,a)}}}function Kt(n){let i,e,a=n[6].caption+"",t,c;return{c(){i=v("div"),e=new ft(!1),this.h()},l(m){i=A(m,"DIV",{class:!0});var o=E(i);e=yt(o,!1),o.forEach(l),this.h()},h(){e.a=null,d(i,"class","bp-cap")},m(m,o){W(m,i,o),e.m(a,i),c=!0},p(m,o){(!c||o[0]&64)&&a!==(a=m[6].caption+"")&&e.p(a)},i(m){c||(t&&t.end(1),c=!0)},o(m){t=Aa(i,wi,{duration:200}),c=!1},d(m){m&&l(i),m&&t&&t.end()}}}function Gt(n){let i,e,a,t,c,m,o,s,y,h;const S=[Jo,qo,Zo,Xo],K=[];function C(g,I){return g[6].img?0:g[6].sources?1:g[6].iframe?2:3}e=C(n),a=K[e]=S[e](n);let D=n[6].caption&&Kt(n);return{c(){i=v("div"),a.c(),m=w(),D&&D.c(),o=Vi(),this.h()},l(g){i=A(g,"DIV",{class:!0});var I=E(i);a.l(I),I.forEach(l),m=N(g),D&&D.l(g),o=Vi(),this.h()},h(){d(i,"class","bp-inner")},m(g,I){W(g,i,I),K[e].m(i,null),W(g,m,I),D&&D.m(g,I),W(g,o,I),s=!0,y||(h=[V(i,"pointerdown",n[21]),V(i,"pointerup",n[22])],y=!0)},p(g,I){let L=e;e=C(g),e===L?K[e].p(g,I):(Si(),F(K[L],1,1,()=>{K[L]=null}),Mi(),a=K[e],a?a.p(g,I):(a=K[e]=S[e](g),a.c()),j(a,1),a.m(i,null)),g[6].caption?D?(D.p(g,I),I[0]&64&&j(D,1)):(D=Kt(g),D.c(),j(D,1),D.m(o.parentNode,o)):D&&(Si(),F(D,1,1,()=>{D=null}),Mi())},i(g){s||(j(a),Wt(()=>{s&&(c&&c.end(1),t=Zt(i,n[12],!0),t.start())}),j(D),s=!0)},o(g){F(a),t&&t.invalidate(),c=Aa(i,n[12],!1),F(D),s=!1},d(g){g&&(l(i),l(m),l(o)),K[e].d(),g&&c&&c.end(),D&&D.d(g),y=!1,ga(h)}}}function jt(n){let i,e,a=`${n[4]+1} / ${n[0].length}`,t,c,m,o,s,y;return{c(){i=v("div"),e=new ft(!1),t=w(),c=v("button"),m=w(),o=v("button"),this.h()},l(h){i=A(h,"DIV",{class:!0});var S=E(i);e=yt(S,!1),S.forEach(l),t=N(h),c=A(h,"BUTTON",{class:!0,title:!0,"aria-label":!0}),E(c).forEach(l),m=N(h),o=A(h,"BUTTON",{class:!0,title:!0,"aria-label":!0}),E(o).forEach(l),this.h()},h(){e.a=null,d(i,"class","bp-count"),d(c,"class","bp-prev"),d(c,"title","Previous"),d(c,"aria-label","Previous"),d(o,"class","bp-next"),d(o,"title","Next"),d(o,"aria-label","Next")},m(h,S){W(h,i,S),e.m(a,i),W(h,t,S),W(h,c,S),W(h,m,S),W(h,o,S),s||(y=[V(c,"click",n[2]),V(o,"click",n[3])],s=!0)},p(h,S){S[0]&17&&a!==(a=`${h[4]+1} / ${h[0].length}`)&&e.p(a)},d(h){h&&(l(i),l(t),l(c),l(m),l(o)),s=!1,ga(y)}}}function Qo(n){let i,e,a=n[0]&&_t(n);return{c(){a&&a.c(),i=Vi()},l(t){a&&a.l(t),i=Vi()},m(t,c){a&&a.m(t,c),W(t,i,c),e=!0},p(t,c){t[0]?a?(a.p(t,c),c[0]&1&&j(a,1)):(a=_t(t),a.c(),j(a,1),a.m(i.parentNode,i)):a&&(Si(),F(a,1,1,()=>{a=null}),Mi())},i(t){e||(j(a),e=!0)},o(t){F(a),e=!1},d(t){t&&l(i),a&&a.d(t)}}}function $o(n,i,e){let a,{items:t=void 0}=i,{target:c=void 0}=i;const m=document.documentElement;let o,s,y,h,S,K,C,D,g,I,L;const G=b=>L=b,M={},X=ht(0);Xi(n,X,b=>e(10,a=b));const Ae=b=>{e(5,s=b),e(8,K=s.inline);const _=s.items;!K&&m.scrollHeight>m.clientHeight&&m.classList.add("bp-lock"),h=document.activeElement,e(20,M.w=c.offsetWidth,M),e(20,M.h=c===document.body?window.innerHeight:c.clientHeight,M),e(7,S=M.w<769),e(4,o=s.position||0),Array.isArray(_)?e(0,t=_.map((U,$)=>(s.el&&s.el===U.element&&e(4,o=$),{i:$,...U}))):e(0,t=(_.length?[..._]:[_]).map((U,$)=>(s.el===U&&e(4,o=$),{element:U,i:$,...U.dataset})))},J=()=>{var b;(b=s.onClose)==null||b.call(s,M.el,g),Za.set(!0),e(0,t=null),h==null||h.focus({preventScroll:!0})},Q=()=>Ve(o-1),be=()=>Ve(o+1),Ve=b=>{C=b-o,e(4,o=Ee(b))},Ee=b=>(b+t.length)%t.length,ge=b=>{const{key:_,shiftKey:U}=b;if(_==="Escape")!s.noClose&&J();else if(_==="ArrowRight")be();else if(_==="ArrowLeft")Q();else if(_==="Tab"){const{activeElement:$}=document;if(U||!$.controls){b.preventDefault();const{focusWrap:me=M.el}=s,ee=[...me.querySelectorAll("*")].filter(Te=>Te.tabIndex>=0);let ne=ee.indexOf($);ne+=ee.length+(U?-1:1),ee[ne%ee.length].focus()}}},Qe=({width:b=1920,height:_=1080})=>{const{scale:U=.99}=s,$=Math.min(1,M.w/b*U,M.h/_*U);return[Math.round(b*$),Math.round(_*$)]},Se=()=>{if(t){const b=t[Ee(o+1)],_=t[Ee(o-1)];!b.preload&&ke(b),!_.preload&&ke(_)}},ke=b=>{if(b.img){const _=v("img");return _.sizes=s.sizes||`${Qe(b)[0]}px`,_.srcset=b.img,b.preload=!0,_.decode().catch(U=>{})}},pe=(b,_)=>!y||!t?(e(18,y=_),s.intro?wi(b,{y:_?10:-10}):Me(b)):wi(b,{x:(C>0?20:-20)*(_?1:-1),duration:250}),Me=b=>{let _;if(I){const Te=b.firstChild.firstChild;_=[Te.clientWidth,Te.clientHeight]}else _=Qe(g);const U=(g.element||h).getBoundingClientRect(),$=U.left-(M.w-U.width)/2,me=U.top-(M.h-U.height)/2,ee=U.width/_[0],ne=U.height/_[1];return{duration:480,easing:Jt,css:(Te,T)=>`transform:translate3d(${$*T}px, ${me*T}px, 0) scale3d(${ee+Te*(1-ee)}, ${ne+Te*(1-ne)}, 1)`}},Ie=()=>({activeItem:g,calculateDimensions:Qe,loadImage:ke,preloadNext:Se,opts:s,prev:Q,next:be,close:J,setResizeFunc:G,zoomed:X,container:M}),fe=b=>{var me;e(20,M.el=b,M);let _,U;(me=s.onOpen)==null||me.call(s,M.el,g),K||(_=V(window,"keydown",ge));const $=new ResizeObserver(ee=>{var ne;U&&(e(20,M.w=ee[0].contentRect.width,M),e(20,M.h=ee[0].contentRect.height,M),e(7,S=M.w<769),L==null||L(),(ne=s.onResize)==null||ne.call(s,M.el,g)),U=!0});return $.observe(b),{destroy(){var ee;$.disconnect(),_==null||_(),Za.set(!1),m.classList.remove("bp-lock"),(ee=s.onClosed)==null||ee.call(s)}}},de=b=>e(9,D=b.target),$e=function(b){b.button!==2&&b.target===this&&D===this&&!s.noClose&&J()};return n.$$set=b=>{"items"in b&&e(0,t=b.items),"target"in b&&e(15,c=b.target)},n.$$.update=()=>{var b;n.$$.dirty[0]&1835121&&t&&(e(6,g=t[o]),e(19,I=g.hasOwnProperty("html")),y&&(I&&G(null),(b=s.onUpdate)==null||b.call(s,M.el,g)))},[t,J,Q,be,o,s,g,S,K,D,a,X,pe,Ie,fe,c,Ae,Ve,y,I,M,de,$e]}class es extends Ni{constructor(i){super(),Ci(this,i,$o,Qo,Xt,{items:0,target:15,open:16,close:1,prev:2,next:3,setPosition:17},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(i){this.$$set({items:i}),kt()}get target(){return this.$$.ctx[15]}set target(i){this.$$set({target:i}),kt()}get open(){return this.$$.ctx[16]}get close(){return this.$$.ctx[1]}get prev(){return this.$$.ctx[2]}get next(){return this.$$.ctx[3]}get setPosition(){return this.$$.ctx[17]}}function ns(n){return new es({...n,props:n})}function is(n){let i,e,a;return{c(){i=v("div"),e=v("div"),a=v("canvas"),this.h()},l(t){i=A(t,"DIV",{class:!0});var c=E(i);e=A(c,"DIV",{class:!0,style:!0});var m=E(e);a=A(m,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(a).forEach(l),m.forEach(l),c.forEach(l),this.h()},h(){d(a,"id","canvas"),d(a,"width","2384"),d(a,"height","3328"),d(a,"class","w-full rounded-[1.5rem] xs:rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]"),d(e,"class","border border-dark-600 rounded-[1.5rem] xs:rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]"),Le(e,"max-width",n[0]()+"px"),d(i,"class","p-5")},m(t,c){W(t,i,c),u(i,e),u(e,a)},p:Mn,i:Mn,o:Mn,d(t){t&&l(i)}}}function er(n){document.getElementById("canvas").getContext("2d").drawImage(n,0,0,2384,3328)}function as(n,i,e){let{bp:a}=i;function t(){return window.innerWidth*1.4<window.innerHeight}function c(){return t()?window.innerWidth:window.innerHeight/1.4}return n.$$set=m=>{"bp"in m&&e(1,a=m.bp)},[c,a,er]}class Re extends Ni{constructor(i){super(),Ci(this,i,as,is,Zi,{bp:1,drawCard:2})}get drawCard(){return er}}const{Map:At}=Rr;function Bt(n,i,e){const a=n.slice();return a[237]=i[e],a[238]=i,a[239]=e,a}function Pt(n,i,e){const a=n.slice();a[240]=i[e],a[243]=e;const t=nr(a[64].stats[a[243]]);return a[241]=t,a}function Ut(n,i,e){const a=n.slice();return a[237]=i[e],a[245]=e,a}function ts(n){let i;return{c(){i=v("div"),this.h()},l(e){i=A(e,"DIV",{class:!0}),E(i).forEach(l),this.h()},h(){d(i,"class","float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 bg-transparent")},m(e,a){W(e,i,a)},p:Mn,d(e){e&&l(i)}}}function rs(n){let i,e;return{c(){i=v("div"),this.h()},l(a){i=A(a,"DIV",{class:!0}),E(i).forEach(l),this.h()},h(){d(i,"class",e="z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-"+n[0]+" opacity-50 svelte-ud6bd6")},m(a,t){W(a,i,t)},p(a,t){t[0]&1&&e!==(e="z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-"+a[0]+" opacity-50 svelte-ud6bd6")&&d(i,"class",e)},d(a){a&&l(i)}}}function os(n){let i,e;return{c(){i=v("div"),this.h()},l(a){i=A(a,"DIV",{class:!0}),E(i).forEach(l),this.h()},h(){d(i,"class",e="z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-"+n[0]+" svelte-ud6bd6")},m(a,t){W(a,i,t)},p(a,t){t[0]&1&&e!==(e="z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-"+a[0]+" svelte-ud6bd6")&&d(i,"class",e)},d(a){a&&l(i)}}}function xt(n,i){let e,a,t;function c(s,y){return s[241].min>s[245]?os:s[241].max>s[245]?rs:ts}let m=c(i),o=m(i);return{key:n,first:null,c(){e=v("div"),a=w(),o.c(),t=Vi(),this.h()},l(s){e=A(s,"DIV",{class:!0}),E(e).forEach(l),a=N(s),o.l(s),t=Vi(),this.h()},h(){d(e,"class","float-left w-0.5 sm:w-0.75 lg:w-1 h-1"),this.first=e},m(s,y){W(s,e,y),W(s,a,y),o.m(s,y),W(s,t,y)},p(s,y){i=s,m===(m=c(i))&&o?o.p(i,y):(o.d(1),o=m(i),o&&(o.c(),o.m(t.parentNode,t)))},d(s){s&&(l(e),l(a),l(t)),o.d(s)}}}function ss(n){let i=n[240].charAt(0).toUpperCase()+n[240].slice(1)+"",e;return{c(){e=Ri(i)},l(a){e=bi(a,i)},m(a,t){W(a,e,t)},p(a,t){t[1]&524288&&i!==(i=a[240].charAt(0).toUpperCase()+a[240].slice(1)+"")&&Ar(e,i)},d(a){a&&l(e)}}}function Ot(n,i){let e,a,t,c,m,o,s,y=[],h=new At,S,K,C,D;c=new $t({props:{src:i[49].get(i[240]),class:"absolute w-2 xs:w-2.5 sm:w-3.75 lg:w-5 z-30 -top-0.5 sm:-top-0.75 lg:-top-1.25 xs:left-0.5 sm:left-0.75 lg:left-1"}});let g=Ea(Array(8));const I=L=>L[245];for(let L=0;L<g.length;L+=1){let G=Ut(i,g,L),M=I(G);h.set(M,y[L]=xt(M,G))}return C=new Qt({props:{triggeredBy:"#"+i[240],placement:"top",class:"z-50",$$slots:{default:[ss]},$$scope:{ctx:i}}}),{key:n,first:null,c(){e=v("div"),a=v("div"),t=v("div"),te(c.$$.fragment),m=w(),o=v("div"),s=w();for(let L=0;L<y.length;L+=1)y[L].c();K=w(),te(C.$$.fragment),this.h()},l(L){e=A(L,"DIV",{id:!0,class:!0});var G=E(e);a=A(G,"DIV",{class:!0});var M=E(a);t=A(M,"DIV",{class:!0});var X=E(t);re(c.$$.fragment,X),m=N(X),o=A(X,"DIV",{class:!0}),E(o).forEach(l),s=N(X);for(let Ae=0;Ae<y.length;Ae+=1)y[Ae].l(X);X.forEach(l),M.forEach(l),G.forEach(l),K=N(L),re(C.$$.fragment,L),this.h()},h(){d(o,"class","float-left w-2 xs:w-3.5 sm:w-6 lg:w-7 h-full bg-transparent"),d(t,"class","m-0.5 sm:m-0.5 lg:m-1 relative h-full"),d(a,"class","left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 h-2.5 xs:h-3 sm:h-4 lg:h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded sm:rounded-lg lg:rounded-xl bg-dark-900 absolute"),d(e,"id",S=i[240]),d(e,"class","col-span-3 h-3 xs:h-4 sm:h-5.5 lg:h-7 z-20 relative"),this.first=e},m(L,G){W(L,e,G),u(e,a),u(a,t),oe(c,t,null),u(t,m),u(t,o),u(t,s);for(let M=0;M<y.length;M+=1)y[M]&&y[M].m(t,null);W(L,K,G),oe(C,L,G),D=!0},p(L,G){i=L;const M={};G[1]&786432&&(M.src=i[49].get(i[240])),c.$set(M),G[0]&1|G[1]&524288|G[2]&4&&(g=Ea(Array(8)),y=pt(y,G,I,1,i,g,h,t,qt,xt,null,Ut)),(!D||G[1]&524288&&S!==(S=i[240]))&&d(e,"id",S);const X={};G[1]&524288&&(X.triggeredBy="#"+i[240]),G[1]&524288|G[7]&536870912&&(X.$$scope={dirty:G,ctx:i}),C.$set(X)},i(L){D||(j(c.$$.fragment,L),j(C.$$.fragment,L),D=!0)},o(L){F(c.$$.fragment,L),F(C.$$.fragment,L),D=!1},d(L){L&&(l(e),l(K)),se(c);for(let G=0;G<y.length;G+=1)y[G].d();se(C,L)}}}function Ft(n){let i,e=[],a=new At,t=Ea(n[19]);const c=m=>m[239];for(let m=0;m<t.length;m+=1){let o=Bt(n,t,m),s=c(o);a.set(s,e[m]=Yt(s,o))}return{c(){i=v("div");for(let m=0;m<e.length;m+=1)e[m].c();this.h()},l(m){i=A(m,"DIV",{class:!0});var o=E(i);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(l),this.h()},h(){d(i,"class","col-span-12 mt-[3px] xs:mt-[2px] sm:mt-[2px] lg:mt-[0px] flex justify-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6 relative z-0")},m(m,o){W(m,i,o);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(i,null)},p(m,o){o[0]&1572864|o[3]&65536&&(t=Ea(m[19]),e=pt(e,o,c,1,m,t,a,i,qt,Yt,null,Bt))},d(m){m&&l(i);for(let o=0;o<e.length;o+=1)e[o].d()}}}function Yt(n,i){let e,a,t,c=i[239],m,o,s;const y=()=>i[222](t,c),h=()=>i[222](null,c);function S(){return i[223](i[239])}return{key:n,first:null,c(){e=v("div"),a=v("div"),t=v("canvas"),m=w(),this.h()},l(K){e=A(K,"DIV",{class:!0});var C=E(e);a=A(C,"DIV",{class:!0});var D=E(a);t=A(D,"CANVAS",{width:!0,height:!0,class:!0}),E(t).forEach(l),D.forEach(l),m=N(C),C.forEach(l),this.h()},h(){d(t,"width","1192"),d(t,"height","1664"),d(t,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(a,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(e,"class","w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"),this.first=e},m(K,C){W(K,e,C),u(e,a),u(a,t),y(),u(e,m),o||(s=V(t,"click",S),o=!0)},p(K,C){i=K,c!==i[239]&&(h(),c=i[239],y())},d(K){K&&l(e),h(),o=!1,s()}}}function cs(n){let i,e;return{c(){i=v("div"),e=Ri("Show Numbers"),this.h()},l(a){i=A(a,"DIV",{style:!0});var t=E(i);e=bi(t,"Show Numbers"),t.forEach(l),this.h()},h(){Le(i,"color",n[63](n[42]))},m(a,t){W(a,i,t),u(i,e)},p(a,t){t[1]&2048&&Le(i,"color",a[63](a[42]))},d(a){a&&l(i)}}}function ds(n){let i;return{c(){i=Ri("Disabled by the developer's request")},l(e){i=bi(e,"Disabled by the developer's request")},m(e,a){W(e,i,a)},d(e){e&&l(i)}}}function ms(n){let i,e="Show Handicap";return{c(){i=v("div"),i.textContent=e,this.h()},l(a){i=A(a,"DIV",{style:!0,"data-svelte-h":!0}),Er(i)!=="svelte-1t50ps5"&&(i.textContent=e),this.h()},h(){Le(i,"color","white")},m(a,t){W(a,i,t)},p:Mn,d(a){a&&l(i)}}}function ls(n){let i,e,a,t,c,m,o,s,y,h,S,K,C,D,g,I,L,G,M,X,Ae,J=[],Q=new At,be,Ve,Ee,ge,Qe,Se,ke,pe,Me,Ie,fe,de,$e,b,_,U,$,me,ee,ne,Te,T,x,H,Y,q,ie,le,Kn,De,Gn,wn,In,un,je,xn,en,ui,jn,fi,Tn,We,Be,yi,Pe,pi,Zn,Dn,Ue,xe,qn,we,ae,Jn,hi,Ln,kn,Oe,vi,nn,Ai,Qn,Ei,fn,Fe,gi,an,Ii,$n,Ti,Rn,yn,Ye,tn,ye,rn,Xe,on,he,ze,Nn,sn,pn,ei,Di,bn,hn,Ne,ni,Ze,ii,On,ai,cn,Ce,ti,qe,ri,Fn,qi,Bn,Cn,dn,Ji,Vn,oi,Yn,si,mn,_e,ci,Je,di,zn,mi,Hn,ln,Pn,Ia,Ta,Wn,Da,Li,Un,La,ka,_i,Ke,Ra,wa;c=new $t({props:{src:n[41],class:"rounded-lg sm:rounded-xl lg:rounded-3xl"}});let Xn=Ea(n[50]);const Na=f=>f[243];for(let f=0;f<Xn.length;f+=1){let R=Pt(n,Xn,f),B=Na(R);Q.set(B,J[f]=Ot(B,R))}function Qi(f){n[199](f)}let ue={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[21]!==void 0&&(ue.checked=n[21]),De=new En({props:ue}),Z.push(()=>An(De,"checked",Qi)),De.$on("change",n[51]);function z(f){n[201](f)}let P={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[22]!==void 0&&(P.checked=n[22]),en=new En({props:P}),Z.push(()=>An(en,"checked",z)),en.$on("change",n[52]);function Ca(f){n[203](f)}let _a={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[23]!==void 0&&(_a.checked=n[23]),Pe=new En({props:_a}),Z.push(()=>An(Pe,"checked",Ca)),Pe.$on("change",n[53]);function Ja(f){n[205](f)}let Ka={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[24]!==void 0&&(Ka.checked=n[24]),we=new En({props:Ka}),Z.push(()=>An(we,"checked",Ja)),we.$on("change",n[54]);function Qa(f){n[207](f)}let Ga={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[25]!==void 0&&(Ga.checked=n[25]),nn=new En({props:Ga}),Z.push(()=>An(nn,"checked",Qa)),nn.$on("change",n[55]);function $a(f){n[209](f)}let ja={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[26]!==void 0&&(ja.checked=n[26]),an=new En({props:ja}),Z.push(()=>An(an,"checked",$a)),an.$on("change",n[56]);function et(f){n[211](f)}let Ba={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[27]!==void 0&&(Ba.checked=n[27]),ye=new En({props:Ba}),Z.push(()=>An(ye,"checked",et)),ye.$on("change",n[57]);function nt(f){n[213](f)}let Pa={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[28]!==void 0&&(Pa.checked=n[28]),sn=new En({props:Pa}),Z.push(()=>An(sn,"checked",nt)),sn.$on("change",n[58]);function it(f){n[215](f)}let Ua={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[29]!==void 0&&(Ua.checked=n[29]),Ze=new En({props:Ua}),Z.push(()=>An(Ze,"checked",it)),Ze.$on("change",n[59]);function at(f){n[217](f)}let xa={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[30]!==void 0&&(xa.checked=n[30]),qe=new En({props:xa}),Z.push(()=>An(qe,"checked",at)),qe.$on("change",n[60]);function tt(f){n[219](f)}let Oa={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[31]!==void 0&&(Oa.checked=n[31]),Vn=new En({props:Oa}),Z.push(()=>An(Vn,"checked",tt)),Vn.$on("change",n[61]);function rt(f){n[221](f)}let Fa={class:"absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5"};n[32]!==void 0&&(Fa.checked=n[32]),Je=new En({props:Fa}),Z.push(()=>An(Je,"checked",rt)),Je.$on("change",n[62]);let Ge=n[19].length>0&&Ft(n);function ot(f){n[224](f)}let Ya={disabled:n[42],$$slots:{default:[cs]},$$scope:{ctx:n}};n[34]!==void 0&&(Ya.checked=n[34]),Pn=new En({props:Ya}),Z.push(()=>An(Pn,"checked",ot)),Wn=new Qt({props:{triggeredBy:"#showNumbers",placement:"bottom",class:"z-50",$$slots:{default:[ds]},$$scope:{ctx:n}}});function st(f){n[225](f)}let za={$$slots:{default:[ms]},$$scope:{ctx:n}};return n[33]!==void 0&&(za.checked=n[33]),Un=new En({props:za}),Z.push(()=>An(Un,"checked",st)),{c(){i=v("div"),e=v("div"),a=v("div"),t=v("div"),te(c.$$.fragment),m=w(),o=v("p"),s=Ri(n[65]),y=w(),h=v("p"),S=Ri(n[65]),K=w(),C=v("p"),D=Ri(n[65]),g=w(),I=v("p"),L=Ri(n[65]),G=w(),M=v("p"),X=Ri(n[65]),Ae=w();for(let f=0;f<J.length;f+=1)J[f].c();be=w(),Ve=v("div"),Ee=v("div"),ge=v("canvas"),Qe=w(),Se=v("div"),ke=v("div"),pe=v("canvas"),Me=w(),Ie=v("div"),fe=v("div"),de=v("canvas"),$e=w(),b=v("div"),_=v("div"),U=v("canvas"),$=w(),me=v("div"),ee=v("div"),ne=v("canvas"),Te=w(),T=v("div"),x=v("div"),H=v("canvas"),Y=w(),q=v("div"),ie=v("div"),le=v("canvas"),Kn=w(),te(De.$$.fragment),In=w(),un=v("div"),je=v("canvas"),xn=w(),te(en.$$.fragment),fi=w(),Tn=v("div"),We=v("div"),Be=v("canvas"),yi=w(),te(Pe.$$.fragment),Dn=w(),Ue=v("div"),xe=v("canvas"),qn=w(),te(we.$$.fragment),hi=w(),Ln=v("div"),kn=v("div"),Oe=v("canvas"),vi=w(),te(nn.$$.fragment),Ei=w(),fn=v("div"),Fe=v("canvas"),gi=w(),te(an.$$.fragment),Ti=w(),Rn=v("div"),yn=v("div"),Ye=v("canvas"),tn=w(),te(ye.$$.fragment),on=w(),he=v("div"),ze=v("canvas"),Nn=w(),te(sn.$$.fragment),Di=w(),bn=v("div"),hn=v("div"),Ne=v("canvas"),ni=w(),te(Ze.$$.fragment),ai=w(),cn=v("div"),Ce=v("canvas"),ti=w(),te(qe.$$.fragment),qi=w(),Bn=v("div"),Cn=v("div"),dn=v("canvas"),Ji=w(),te(Vn.$$.fragment),si=w(),mn=v("div"),_e=v("canvas"),ci=w(),te(Je.$$.fragment),mi=w(),Ge&&Ge.c(),Hn=w(),ln=v("div"),te(Pn.$$.fragment),Ta=w(),te(Wn.$$.fragment),Da=w(),Li=v("div"),te(Un.$$.fragment),ka=w(),_i=v("p"),this.h()},l(f){i=A(f,"DIV",{class:!0});var R=E(i);e=A(R,"DIV",{class:!0});var B=E(e);a=A(B,"DIV",{class:!0});var Ki=E(a);t=A(Ki,"DIV",{class:!0});var He=E(t);re(c.$$.fragment,He),m=N(He),o=A(He,"P",{class:!0});var Gi=E(o);s=bi(Gi,n[65]),Gi.forEach(l),y=N(He),h=A(He,"P",{class:!0});var ji=E(h);S=bi(ji,n[65]),ji.forEach(l),K=N(He),C=A(He,"P",{class:!0});var Bi=E(C);D=bi(Bi,n[65]),Bi.forEach(l),g=N(He),I=A(He,"P",{class:!0});var Pi=E(I);L=bi(Pi,n[65]),Pi.forEach(l),G=N(He),M=A(He,"P",{class:!0});var Ui=E(M);X=bi(Ui,n[65]),Ui.forEach(l),He.forEach(l),Ki.forEach(l),Ae=N(B);for(let Sa=0;Sa<J.length;Sa+=1)J[Sa].l(B);be=N(B),Ve=A(B,"DIV",{class:!0});var xi=E(Ve);Ee=A(xi,"DIV",{class:!0});var Oi=E(Ee);ge=A(Oi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(ge).forEach(l),Oi.forEach(l),xi.forEach(l),Qe=N(B),Se=A(B,"DIV",{class:!0});var Fi=E(Se);ke=A(Fi,"DIV",{class:!0});var Yi=E(ke);pe=A(Yi,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(pe).forEach(l),Yi.forEach(l),Fi.forEach(l),Me=N(B),Ie=A(B,"DIV",{class:!0});var zi=E(Ie);fe=A(zi,"DIV",{class:!0});var li=E(fe);de=A(li,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(de).forEach(l),li.forEach(l),zi.forEach(l),$e=N(B),b=A(B,"DIV",{class:!0});var Hi=E(b);_=A(Hi,"DIV",{class:!0});var ki=E(_);U=A(ki,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(U).forEach(l),ki.forEach(l),Hi.forEach(l),$=N(B),me=A(B,"DIV",{class:!0});var ba=E(me);ee=A(ba,"DIV",{class:!0});var Ha=E(ee);ne=A(Ha,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(ne).forEach(l),Ha.forEach(l),ba.forEach(l),Te=N(B),T=A(B,"DIV",{class:!0});var Va=E(T);x=A(Va,"DIV",{class:!0});var Wa=E(x);H=A(Wa,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(H).forEach(l),Wa.forEach(l),Va.forEach(l),Y=N(B),q=A(B,"DIV",{class:!0});var $i=E(q);ie=A($i,"DIV",{class:!0});var ea=E(ie);le=A(ea,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(le).forEach(l),Kn=N(ea),re(De.$$.fragment,ea),ea.forEach(l),In=N($i),un=A($i,"DIV",{class:!0});var na=E(un);je=A(na,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(je).forEach(l),xn=N(na),re(en.$$.fragment,na),na.forEach(l),$i.forEach(l),fi=N(B),Tn=A(B,"DIV",{class:!0});var ia=E(Tn);We=A(ia,"DIV",{class:!0});var aa=E(We);Be=A(aa,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(Be).forEach(l),yi=N(aa),re(Pe.$$.fragment,aa),aa.forEach(l),Dn=N(ia),Ue=A(ia,"DIV",{class:!0});var ta=E(Ue);xe=A(ta,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(xe).forEach(l),qn=N(ta),re(we.$$.fragment,ta),ta.forEach(l),ia.forEach(l),hi=N(B),Ln=A(B,"DIV",{class:!0});var ra=E(Ln);kn=A(ra,"DIV",{class:!0});var oa=E(kn);Oe=A(oa,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(Oe).forEach(l),vi=N(oa),re(nn.$$.fragment,oa),oa.forEach(l),Ei=N(ra),fn=A(ra,"DIV",{class:!0});var sa=E(fn);Fe=A(sa,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(Fe).forEach(l),gi=N(sa),re(an.$$.fragment,sa),sa.forEach(l),ra.forEach(l),Ti=N(B),Rn=A(B,"DIV",{class:!0});var ca=E(Rn);yn=A(ca,"DIV",{class:!0});var da=E(yn);Ye=A(da,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(Ye).forEach(l),tn=N(da),re(ye.$$.fragment,da),da.forEach(l),on=N(ca),he=A(ca,"DIV",{class:!0});var ma=E(he);ze=A(ma,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(ze).forEach(l),Nn=N(ma),re(sn.$$.fragment,ma),ma.forEach(l),ca.forEach(l),Di=N(B),bn=A(B,"DIV",{class:!0});var la=E(bn);hn=A(la,"DIV",{class:!0});var ua=E(hn);Ne=A(ua,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(Ne).forEach(l),ni=N(ua),re(Ze.$$.fragment,ua),ua.forEach(l),ai=N(la),cn=A(la,"DIV",{class:!0});var fa=E(cn);Ce=A(fa,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(Ce).forEach(l),ti=N(fa),re(qe.$$.fragment,fa),fa.forEach(l),la.forEach(l),qi=N(B),Bn=A(B,"DIV",{class:!0});var ya=E(Bn);Cn=A(ya,"DIV",{class:!0});var pa=E(Cn);dn=A(pa,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(dn).forEach(l),Ji=N(pa),re(Vn.$$.fragment,pa),pa.forEach(l),si=N(ya),mn=A(ya,"DIV",{class:!0});var ha=E(mn);_e=A(ha,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(_e).forEach(l),ci=N(ha),re(Je.$$.fragment,ha),ha.forEach(l),ya.forEach(l),mi=N(B),Ge&&Ge.l(B),Hn=N(B),ln=A(B,"DIV",{id:!0,class:!0});var va=E(ln);re(Pn.$$.fragment,va),Ta=N(va),re(Wn.$$.fragment,va),va.forEach(l),Da=N(B),Li=A(B,"DIV",{class:!0});var Xa=E(Li);re(Un.$$.fragment,Xa),Xa.forEach(l),B.forEach(l),ka=N(R),_i=A(R,"P",{class:!0}),E(_i).forEach(l),R.forEach(l),this.h()},h(){d(o,"class","absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto svelte-ud6bd6"),d(h,"class","absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto svelte-ud6bd6"),d(C,"class","absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto svelte-ud6bd6"),d(I,"class","absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto svelte-ud6bd6"),d(M,"class","absolute text-white xs:text-xl sm:text-3xl lg:text-5xl -top-[12px] sm:-top-[16px] lg:-top-[20px] left-[8px] sm:left-[19px] lg:left-[30px] font-modesto svelte-ud6bd6"),d(t,"class","border border-dark-600 rounded-lg sm:rounded-xl lg:rounded-3xl left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 w-77.5 xs:w-95 sm:w-156 lg:w-237 absolute"),d(a,"class","col-span-12 w-78 xs:w-96 sm:w-157 lg:w-239 h-[155px] xs:h-[190px] sm:h-[313px] lg:h-[473px] mt-4 xs:mt-5 sm:mt-7.5 lg:mt-10 relative"),d(ge,"id","goldCanvas"),d(ge,"width","1192"),d(ge,"height","1664"),d(ge,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(Ee,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(Ve,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"),d(pe,"id","silverCanvas"),d(pe,"width","1192"),d(pe,"height","1664"),d(pe,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(ke,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(Se,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"),d(de,"id","purpleCanvas"),d(de,"width","1192"),d(de,"height","1664"),d(de,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(fe,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(Ie,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"),d(U,"id","blueICanvas"),d(U,"width","1192"),d(U,"height","1664"),d(U,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(_,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(b,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"),d(ne,"id","redICanvas"),d(ne,"width","1192"),d(ne,"height","1664"),d(ne,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(ee,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(me,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"),d(H,"id","greenICanvas"),d(H,"width","1192"),d(H,"height","1664"),d(H,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(x,"class","border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"),d(T,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"),d(le,"id","blueIIaltCanvas"),d(le,"width","1192"),d(le,"height","1664"),d(le,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(ie,"class",wn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[35]?"mainCardII":n[48]?"downCardII":"altCardII")+" svelte-ud6bd6"),d(je,"id","blueIImainCanvas"),d(je,"width","1192"),d(je,"height","1664"),d(je,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(un,"class",jn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[35]?n[48]?"downCardII":"altCardII":"mainCardII")+" svelte-ud6bd6"),d(q,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"),d(Be,"id","redIIaltCanvas"),d(Be,"width","1192"),d(Be,"height","1664"),d(Be,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(We,"class",Zn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[36]?"mainCardII":n[47]?"downCardII":"altCardII")+" svelte-ud6bd6"),d(xe,"id","redIImainCanvas"),d(xe,"width","1192"),d(xe,"height","1664"),d(xe,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(Ue,"class",Jn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[36]?n[47]?"downCardII":"altCardII":"mainCardII")+" svelte-ud6bd6"),d(Tn,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"),d(Oe,"id","greenIIaltCanvas"),d(Oe,"width","1192"),d(Oe,"height","1664"),d(Oe,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(kn,"class",Qn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[37]?"mainCardII":n[46]?"downCardII":"altCardII")+" svelte-ud6bd6"),d(Fe,"id","greenIImainCanvas"),d(Fe,"width","1192"),d(Fe,"height","1664"),d(Fe,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(fn,"class",$n="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[37]?n[46]?"downCardII":"altCardII":"mainCardII")+" svelte-ud6bd6"),d(Ln,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"),d(Ye,"id","blueIIIaltCanvas"),d(Ye,"width","1192"),d(Ye,"height","1664"),d(Ye,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(yn,"class",Xe="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[38]?"mainCardIII":n[45]?"downCardIII":"altCardIII")+" svelte-ud6bd6"),d(ze,"id","blueIIImainCanvas"),d(ze,"width","1192"),d(ze,"height","1664"),d(ze,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(he,"class",ei="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[38]?n[45]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-ud6bd6"),d(Rn,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"),d(Ne,"id","redIIIaltCanvas"),d(Ne,"width","1192"),d(Ne,"height","1664"),d(Ne,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(hn,"class",On="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[39]?"mainCardIII":n[44]?"downCardIII":"altCardIII")+" svelte-ud6bd6"),d(Ce,"id","redIIImainCanvas"),d(Ce,"width","1192"),d(Ce,"height","1664"),d(Ce,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(cn,"class",Fn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[39]?n[44]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-ud6bd6"),d(bn,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"),d(dn,"id","greenIIIaltCanvas"),d(dn,"width","1192"),d(dn,"height","1664"),d(dn,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(Cn,"class",Yn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[40]?"mainCardIII":n[43]?"downCardIII":"altCardIII")+" svelte-ud6bd6"),d(_e,"id","greenIIImainCanvas"),d(_e,"width","1192"),d(_e,"height","1664"),d(_e,"class","w-full rounded-lg sm:rounded-xl lg:rounded-3xl"),d(mn,"class",zn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(n[40]?n[43]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-ud6bd6"),d(Bn,"class","col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"),d(ln,"id","showNumbers"),d(ln,"class","col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center"),d(Li,"class","col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center"),d(e,"class","grid grid-cols-12 m-auto"),d(_i,"class","absolute font-modesto svelte-ud6bd6"),d(i,"class","flex md:mt-20 mt-16 mb-52")},m(f,R){W(f,i,R),u(i,e),u(e,a),u(a,t),oe(c,t,null),u(t,m),u(t,o),u(o,s),u(t,y),u(t,h),u(h,S),u(t,K),u(t,C),u(C,D),u(t,g),u(t,I),u(I,L),u(t,G),u(t,M),u(M,X),u(e,Ae);for(let B=0;B<J.length;B+=1)J[B]&&J[B].m(e,null);u(e,be),u(e,Ve),u(Ve,Ee),u(Ee,ge),n[192](ge),u(e,Qe),u(e,Se),u(Se,ke),u(ke,pe),n[193](pe),u(e,Me),u(e,Ie),u(Ie,fe),u(fe,de),n[194](de),u(e,$e),u(e,b),u(b,_),u(_,U),n[195](U),u(e,$),u(e,me),u(me,ee),u(ee,ne),n[196](ne),u(e,Te),u(e,T),u(T,x),u(x,H),n[197](H),u(e,Y),u(e,q),u(q,ie),u(ie,le),n[198](le),u(ie,Kn),oe(De,ie,null),u(q,In),u(q,un),u(un,je),n[200](je),u(un,xn),oe(en,un,null),u(e,fi),u(e,Tn),u(Tn,We),u(We,Be),n[202](Be),u(We,yi),oe(Pe,We,null),u(Tn,Dn),u(Tn,Ue),u(Ue,xe),n[204](xe),u(Ue,qn),oe(we,Ue,null),u(e,hi),u(e,Ln),u(Ln,kn),u(kn,Oe),n[206](Oe),u(kn,vi),oe(nn,kn,null),u(Ln,Ei),u(Ln,fn),u(fn,Fe),n[208](Fe),u(fn,gi),oe(an,fn,null),u(e,Ti),u(e,Rn),u(Rn,yn),u(yn,Ye),n[210](Ye),u(yn,tn),oe(ye,yn,null),u(Rn,on),u(Rn,he),u(he,ze),n[212](ze),u(he,Nn),oe(sn,he,null),u(e,Di),u(e,bn),u(bn,hn),u(hn,Ne),n[214](Ne),u(hn,ni),oe(Ze,hn,null),u(bn,ai),u(bn,cn),u(cn,Ce),n[216](Ce),u(cn,ti),oe(qe,cn,null),u(e,qi),u(e,Bn),u(Bn,Cn),u(Cn,dn),n[218](dn),u(Cn,Ji),oe(Vn,Cn,null),u(Bn,si),u(Bn,mn),u(mn,_e),n[220](_e),u(mn,ci),oe(Je,mn,null),u(e,mi),Ge&&Ge.m(e,null),u(e,Hn),u(e,ln),oe(Pn,ln,null),u(ln,Ta),oe(Wn,ln,null),u(e,Da),u(e,Li),oe(Un,Li,null),u(i,ka),u(i,_i),Ke=!0,Ra||(wa=[V(t,"click",n[108]),V(ge,"click",n[66]),V(pe,"click",n[67]),V(de,"click",n[68]),V(U,"click",n[69]),V(ne,"click",n[70]),V(H,"click",n[71]),V(le,"click",n[77]),V(le,"pointerleave",n[75]),V(le,"pointerenter",n[74]),V(je,"click",n[76]),V(je,"pointerleave",n[73]),V(je,"pointerenter",n[72]),V(Be,"click",n[83]),V(Be,"pointerleave",n[81]),V(Be,"pointerenter",n[80]),V(xe,"click",n[82]),V(xe,"pointerleave",n[79]),V(xe,"pointerenter",n[78]),V(Oe,"click",n[89]),V(Oe,"pointerleave",n[87]),V(Oe,"pointerenter",n[86]),V(Fe,"click",n[88]),V(Fe,"pointerleave",n[85]),V(Fe,"pointerenter",n[84]),V(Ye,"click",n[95]),V(Ye,"pointerleave",n[93]),V(Ye,"pointerenter",n[92]),V(ze,"click",n[94]),V(ze,"pointerleave",n[91]),V(ze,"pointerenter",n[90]),V(Ne,"click",n[101]),V(Ne,"pointerleave",n[99]),V(Ne,"pointerenter",n[98]),V(Ce,"click",n[100]),V(Ce,"pointerleave",n[97]),V(Ce,"pointerenter",n[96]),V(dn,"click",n[107]),V(dn,"pointerleave",n[105]),V(dn,"pointerenter",n[104]),V(_e,"click",n[106]),V(_e,"pointerleave",n[103]),V(_e,"pointerenter",n[102])],Ra=!0)},p(f,R){const B={};R[1]&1024&&(B.src=f[41]),c.$set(B),R[0]&1|R[1]&786432|R[2]&4&&(Xn=Ea(f[50]),Si(),J=pt(J,R,Na,1,f,Xn,Q,e,Dr,Ot,be,Pt),Mi());const Ki={};!Gn&&R[0]&2097152&&(Gn=!0,Ki.checked=f[21],vn(()=>Gn=!1)),De.$set(Ki),(!Ke||R[1]&131088&&wn!==(wn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[35]?"mainCardII":f[48]?"downCardII":"altCardII")+" svelte-ud6bd6"))&&d(ie,"class",wn);const He={};!ui&&R[0]&4194304&&(ui=!0,He.checked=f[22],vn(()=>ui=!1)),en.$set(He),(!Ke||R[1]&131088&&jn!==(jn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[35]?f[48]?"downCardII":"altCardII":"mainCardII")+" svelte-ud6bd6"))&&d(un,"class",jn);const Gi={};!pi&&R[0]&8388608&&(pi=!0,Gi.checked=f[23],vn(()=>pi=!1)),Pe.$set(Gi),(!Ke||R[1]&65568&&Zn!==(Zn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[36]?"mainCardII":f[47]?"downCardII":"altCardII")+" svelte-ud6bd6"))&&d(We,"class",Zn);const ji={};!ae&&R[0]&16777216&&(ae=!0,ji.checked=f[24],vn(()=>ae=!1)),we.$set(ji),(!Ke||R[1]&65568&&Jn!==(Jn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[36]?f[47]?"downCardII":"altCardII":"mainCardII")+" svelte-ud6bd6"))&&d(Ue,"class",Jn);const Bi={};!Ai&&R[0]&33554432&&(Ai=!0,Bi.checked=f[25],vn(()=>Ai=!1)),nn.$set(Bi),(!Ke||R[1]&32832&&Qn!==(Qn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[37]?"mainCardII":f[46]?"downCardII":"altCardII")+" svelte-ud6bd6"))&&d(kn,"class",Qn);const Pi={};!Ii&&R[0]&67108864&&(Ii=!0,Pi.checked=f[26],vn(()=>Ii=!1)),an.$set(Pi),(!Ke||R[1]&32832&&$n!==($n="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[37]?f[46]?"downCardII":"altCardII":"mainCardII")+" svelte-ud6bd6"))&&d(fn,"class",$n);const Ui={};!rn&&R[0]&134217728&&(rn=!0,Ui.checked=f[27],vn(()=>rn=!1)),ye.$set(Ui),(!Ke||R[1]&16512&&Xe!==(Xe="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[38]?"mainCardIII":f[45]?"downCardIII":"altCardIII")+" svelte-ud6bd6"))&&d(yn,"class",Xe);const xi={};!pn&&R[0]&268435456&&(pn=!0,xi.checked=f[28],vn(()=>pn=!1)),sn.$set(xi),(!Ke||R[1]&16512&&ei!==(ei="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[38]?f[45]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-ud6bd6"))&&d(he,"class",ei);const Oi={};!ii&&R[0]&536870912&&(ii=!0,Oi.checked=f[29],vn(()=>ii=!1)),Ze.$set(Oi),(!Ke||R[1]&8448&&On!==(On="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[39]?"mainCardIII":f[44]?"downCardIII":"altCardIII")+" svelte-ud6bd6"))&&d(hn,"class",On);const Fi={};!ri&&R[0]&1073741824&&(ri=!0,Fi.checked=f[30],vn(()=>ri=!1)),qe.$set(Fi),(!Ke||R[1]&8448&&Fn!==(Fn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[39]?f[44]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-ud6bd6"))&&d(cn,"class",Fn);const Yi={};!oi&&R[1]&1&&(oi=!0,Yi.checked=f[31],vn(()=>oi=!1)),Vn.$set(Yi),(!Ke||R[1]&4608&&Yn!==(Yn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[40]?"mainCardIII":f[43]?"downCardIII":"altCardIII")+" svelte-ud6bd6"))&&d(Cn,"class",Yn);const zi={};!di&&R[1]&2&&(di=!0,zi.checked=f[32],vn(()=>di=!1)),Je.$set(zi),(!Ke||R[1]&4608&&zn!==(zn="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 "+(f[40]?f[43]?"downCardIII":"altCardIII":"mainCardIII")+" svelte-ud6bd6"))&&d(mn,"class",zn),f[19].length>0?Ge?Ge.p(f,R):(Ge=Ft(f),Ge.c(),Ge.m(e,Hn)):Ge&&(Ge.d(1),Ge=null);const li={};R[1]&2048&&(li.disabled=f[42]),R[1]&2048|R[7]&536870912&&(li.$$scope={dirty:R,ctx:f}),!Ia&&R[1]&8&&(Ia=!0,li.checked=f[34],vn(()=>Ia=!1)),Pn.$set(li);const Hi={};R[7]&536870912&&(Hi.$$scope={dirty:R,ctx:f}),Wn.$set(Hi);const ki={};R[7]&536870912&&(ki.$$scope={dirty:R,ctx:f}),!La&&R[1]&4&&(La=!0,ki.checked=f[33],vn(()=>La=!1)),Un.$set(ki)},i(f){if(!Ke){j(c.$$.fragment,f);for(let R=0;R<Xn.length;R+=1)j(J[R]);j(De.$$.fragment,f),j(en.$$.fragment,f),j(Pe.$$.fragment,f),j(we.$$.fragment,f),j(nn.$$.fragment,f),j(an.$$.fragment,f),j(ye.$$.fragment,f),j(sn.$$.fragment,f),j(Ze.$$.fragment,f),j(qe.$$.fragment,f),j(Vn.$$.fragment,f),j(Je.$$.fragment,f),j(Pn.$$.fragment,f),j(Wn.$$.fragment,f),j(Un.$$.fragment,f),Ke=!0}},o(f){F(c.$$.fragment,f);for(let R=0;R<J.length;R+=1)F(J[R]);F(De.$$.fragment,f),F(en.$$.fragment,f),F(Pe.$$.fragment,f),F(we.$$.fragment,f),F(nn.$$.fragment,f),F(an.$$.fragment,f),F(ye.$$.fragment,f),F(sn.$$.fragment,f),F(Ze.$$.fragment,f),F(qe.$$.fragment,f),F(Vn.$$.fragment,f),F(Je.$$.fragment,f),F(Pn.$$.fragment,f),F(Wn.$$.fragment,f),F(Un.$$.fragment,f),Ke=!1},d(f){f&&l(i),se(c);for(let R=0;R<J.length;R+=1)J[R].d();n[192](null),n[193](null),n[194](null),n[195](null),n[196](null),n[197](null),n[198](null),se(De),n[200](null),se(en),n[202](null),se(Pe),n[204](null),se(we),n[206](null),se(nn),n[208](null),se(an),n[210](null),se(ye),n[212](null),se(sn),n[214](null),se(Ze),n[216](null),se(qe),n[218](null),se(Vn),n[220](null),se(Je),Ge&&Ge.d(),se(Pn),se(Wn),se(Un),Ra=!1,ga(wa)}}}function nr(n){return n==null?{min:0,max:0}:Array.isArray(n)?{min:n[0],max:n[1]}:{min:n,max:n}}async function us(n){const i=Math.min(744,n.width),e=Math.min(1039,n.height),a=(n.width-i)/2,t=(n.height-e)/2,c=document.createElement("canvas");c.width=i,c.height=e;const m=c.getContext("2d");if(m==null)return n;m.drawImage(n,a,t,i,e,0,0,i,e);const o=new Image;return o.src=c.toDataURL(),await new Promise(s=>{o.onload=()=>s(o),o.onerror=()=>s(n)})}function fs(n,i,e){let a,t,c,m,o,s,y,h,S,K,C,{heroName:D}=i,{useNewPrinting:g=!0}=i,I,L,G,M,X,Ae,J,Q,be,Ve,Ee,ge,Qe,Se,ke,pe,Me,Ie,fe,de,$e,b,_,U,$,me,ee,ne,Te,T,x,H,Y,q,ie,le,Kn,De,Gn,wn,In,un,je,xn,en,ui,jn,fi,Tn,We,Be,yi,Pe,pi,Zn,Dn=[],Ue=[],xe=[],qn=[],we=[],ae=!1,Jn=!1,hi=!1,Ln=!1,kn=!1,Oe=!1,vi=!1,nn=!1,Ai=!1,Qn=!1,Ei=!1,fn=!1,Fe=!1,gi=!1,an=!1,Ii=!1,$n=!1,Ti=!1,Rn=!1,yn=!1,Ye=!1,tn=!1,ye=!1,rn=!1,Xe=!1,on=!1,he=!1,ze,Nn,sn,pn,ei,Di,bn,hn,Ne,ni,Ze,ii,On,ai,cn,Ce,ti,qe,ri,Fn,qi=0,Bn=0,Cn=0,dn=0,Ji=0,Vn=0,oi=!1,Yn=!1,si=!1,mn=!1,_e=!1,ci=!1,Je=!1,di=!1,zn=!1,mi=!1,Hn=!1,ln=!1;function Pn(r){r.target.checked&&e(22,Yn=!1)}function Ia(r){r.target.checked&&e(21,oi=!1)}function Ta(r){r.target.checked&&e(24,mn=!1)}function Wn(r){r.target.checked&&e(23,si=!1)}function Da(r){r.target.checked&&e(26,ci=!1)}function Li(r){r.target.checked&&e(25,_e=!1)}function Un(r){r.target.checked&&e(28,di=!1)}function La(r){r.target.checked&&e(27,Je=!1)}function ka(r){r.target.checked&&e(30,mi=!1)}function _i(r){r.target.checked&&e(29,zn=!1)}function Ke(r){r.target.checked&&e(32,ln=!1)}function Ra(r){r.target.checked&&e(31,Hn=!1)}const wa=r=>r?"gray":"white",Xn=g?mt[D]:lt[D],Na=Xn.name+" "+Xn.title;function Qi(r){const{min:p,max:k}=nr(Xn.stats[r]);return g?p:k}async function ue(r){await Vr(D,r);const p=Sr.get(r);if(p instanceof HTMLImageElement)return await us(p)}function z(r,p,k,_n){Mr(r,p,[],_n,k.color??ve.GOLD,k.handicapped??!1,k.extra??!1,k.name??"",k.description??"","i".repeat(k.level??1),k.item??Sn.ATTACK,k.initiative??0,k.primaryAction??kr.ATTACK,k.primaryValue??0,k.primaryValueSign??bt.NONE,k.modifier??Lr.NONE,k.modifierValue??0,k.modifierValueSign??bt.NONE,k.secondaryMovement??0,k.secondaryDefense??0,k.secondaryAttack??null,qi,Bn,Cn,dn,Ji,Vn,y,Qi(0),Qi(1),Qi(2),Qi(3))}let P,Ca;hr(async()=>{e(41,Ca=(await Rt(Object.assign({"../../lib/images/avatars_full/arien.webp":()=>O(()=>import("../chunks/arien.ec7fd643.js"),[],import.meta.url),"../../lib/images/avatars_full/bain.webp":()=>O(()=>import("../chunks/bain.ed8770e5.js"),[],import.meta.url),"../../lib/images/avatars_full/brogan.webp":()=>O(()=>import("../chunks/brogan.1b23911b.js"),[],import.meta.url),"../../lib/images/avatars_full/brynn.webp":()=>O(()=>import("../chunks/brynn.e3c760d9.js"),[],import.meta.url),"../../lib/images/avatars_full/cutter.webp":()=>O(()=>import("../chunks/cutter.3b639e40.js"),[],import.meta.url),"../../lib/images/avatars_full/dodger.webp":()=>O(()=>import("../chunks/dodger.0775c297.js"),[],import.meta.url),"../../lib/images/avatars_full/emmitt.webp":()=>O(()=>import("../chunks/emmitt.491cf362.js"),[],import.meta.url),"../../lib/images/avatars_full/garrus.webp":()=>O(()=>import("../chunks/garrus.d59f9518.js"),[],import.meta.url),"../../lib/images/avatars_full/gydion.webp":()=>O(()=>import("../chunks/gydion.7d4d672d.js"),[],import.meta.url),"../../lib/images/avatars_full/hanu.webp":()=>O(()=>import("../chunks/hanu.6b5c6d71.js"),[],import.meta.url),"../../lib/images/avatars_full/ignatia.webp":()=>O(()=>import("../chunks/ignatia.4a9cce7d.js"),[],import.meta.url),"../../lib/images/avatars_full/min.webp":()=>O(()=>import("../chunks/min.4211b3a0.js"),[],import.meta.url),"../../lib/images/avatars_full/misa.webp":()=>O(()=>import("../chunks/misa.410827e6.js"),[],import.meta.url),"../../lib/images/avatars_full/mortimer.webp":()=>O(()=>import("../chunks/mortimer.388ab84d.js"),[],import.meta.url),"../../lib/images/avatars_full/mrak.webp":()=>O(()=>import("../chunks/mrak.afe9af0e.js"),[],import.meta.url),"../../lib/images/avatars_full/nebkher.webp":()=>O(()=>import("../chunks/nebkher.8dfc13f0.js"),[],import.meta.url),"../../lib/images/avatars_full/razzle.webp":()=>O(()=>import("../chunks/razzle.108fa563.js"),[],import.meta.url),"../../lib/images/avatars_full/rowenna.webp":()=>O(()=>import("../chunks/rowenna.ff46bf12.js"),[],import.meta.url),"../../lib/images/avatars_full/sabina.webp":()=>O(()=>import("../chunks/sabina.3d813f3b.js"),[],import.meta.url),"../../lib/images/avatars_full/silverarrow.webp":()=>O(()=>import("../chunks/silverarrow.d0e1bfe6.js"),[],import.meta.url),"../../lib/images/avatars_full/snorri.webp":()=>O(()=>import("../chunks/snorri.46ab4da2.js"),[],import.meta.url),"../../lib/images/avatars_full/swift.webp":()=>O(()=>import("../chunks/swift.9a5d586a.js"),[],import.meta.url),"../../lib/images/avatars_full/takahide.webp":()=>O(()=>import("../chunks/takahide.8233f64a.js"),[],import.meta.url),"../../lib/images/avatars_full/tali.webp":()=>O(()=>import("../chunks/tali.414d67c2.js"),[],import.meta.url),"../../lib/images/avatars_full/tigerclaw.webp":()=>O(()=>import("../chunks/tigerclaw.61c8da0e.js"),[],import.meta.url),"../../lib/images/avatars_full/trinkets.webp":()=>O(()=>import("../chunks/trinkets.cce7d59a.js"),[],import.meta.url),"../../lib/images/avatars_full/ursafar.webp":()=>O(()=>import("../chunks/ursafar.fa461d09.js"),[],import.meta.url),"../../lib/images/avatars_full/wasp.webp":()=>O(()=>import("../chunks/wasp.c3fce438.js"),[],import.meta.url),"../../lib/images/avatars_full/whisper.webp":()=>O(()=>import("../chunks/whisper.bf2fc23a.js"),[],import.meta.url),"../../lib/images/avatars_full/widget.webp":()=>O(()=>import("../chunks/widget.3023ec40.js"),[],import.meta.url),"../../lib/images/avatars_full/wuk.webp":()=>O(()=>import("../chunks/wuk.19737291.js"),[],import.meta.url),"../../lib/images/avatars_full/xargatha.webp":()=>O(()=>import("../chunks/xargatha.f41e8845.js"),[],import.meta.url)}),`../../lib/images/avatars_full/${D}.webp`)).default);for(const r of ct)C.set(r,(await Rt(Object.assign({"../../lib/images/stat_icons/attack_white.png":()=>O(()=>import("../chunks/attack_white.97ddfa79.js"),[],import.meta.url),"../../lib/images/stat_icons/brawler_white.png":()=>O(()=>import("../chunks/brawler_white.70050923.js"),[],import.meta.url),"../../lib/images/stat_icons/defense_white.png":()=>O(()=>import("../chunks/defense_white.1d569c3b.js"),[],import.meta.url),"../../lib/images/stat_icons/initiative_white.png":()=>O(()=>import("../chunks/initiative_white.8c924655.js"),[],import.meta.url),"../../lib/images/stat_icons/initiator_white.png":()=>O(()=>import("../chunks/initiator_white.419d49f7.js"),[],import.meta.url),"../../lib/images/stat_icons/movement_white.png":()=>O(()=>import("../chunks/movement_white.3c1b9344.js"),[],import.meta.url),"../../lib/images/stat_icons/pusher_white.png":()=>O(()=>import("../chunks/pusher_white.9ab23d14.js"),[],import.meta.url),"../../lib/images/stat_icons/support_white.png":()=>O(()=>import("../chunks/support_white.192f28cf.js"),[],import.meta.url)}),`../../lib/images/stat_icons/${r}_white.png`)).default);e(49,C),e(111,L=I.getContext("2d")),e(114,Ae=X.getContext("2d")),e(116,be=Q.getContext("2d")),e(118,ge=Ee.getContext("2d")),e(120,ke=Se.getContext("2d")),e(122,Ie=Me.getContext("2d")),e(124,$e=de.getContext("2d")),e(126,U=_.getContext("2d")),e(128,ee=me.getContext("2d")),e(130,T=Te.getContext("2d")),e(132,Y=H.getContext("2d")),e(134,le=ie.getContext("2d")),e(136,Gn=De.getContext("2d")),e(138,un=In.getContext("2d")),e(140,en=xn.getContext("2d")),e(142,fi=jn.getContext("2d")),e(144,Be=We.getContext("2d")),e(146,pi=Pe.getContext("2d")),Promise.all([document.fonts.ready,br()]).then(()=>{e(151,ae=!0);const r=(g?Ko:no)[D];e(172,ze=r.find(p=>p.color==ve.GOLD.toUpperCase())),e(173,Nn=r.find(p=>p.color==ve.GOLD.toUpperCase()&&p.handicapped)),e(174,sn=r.find(p=>p.color==ve.SILVER.toUpperCase())),e(175,pn=r.find(p=>p.color==ve.SILVER.toUpperCase()&&p.handicapped)),e(176,ei=r.find(p=>p.color==ve.PURPLE.toUpperCase())),e(177,Di=r.find(p=>p.color==ve.BLUE.toUpperCase()&&p.level==1)),e(178,bn=r.find(p=>p.color==ve.RED.toUpperCase()&&p.level==1)),e(179,hn=r.find(p=>p.color==ve.GREEN.toUpperCase()&&p.level==1)),e(180,Ne=r.find(p=>{var k;return p.color==ve.BLUE.toUpperCase()&&p.level==2&&((k=p.variant)==null?void 0:k.first)==1})),e(181,ni=r.find(p=>{var k;return p.color==ve.RED.toUpperCase()&&p.level==2&&((k=p.variant)==null?void 0:k.first)==1})),e(182,Ze=r.find(p=>{var k;return p.color==ve.GREEN.toUpperCase()&&p.level==2&&((k=p.variant)==null?void 0:k.first)==1})),e(183,ii=r.find(p=>{var k;return p.color==ve.BLUE.toUpperCase()&&p.level==2&&((k=p.variant)==null?void 0:k.first)==2})),e(184,On=r.find(p=>{var k;return p.color==ve.RED.toUpperCase()&&p.level==2&&((k=p.variant)==null?void 0:k.first)==2})),e(185,ai=r.find(p=>{var k;return p.color==ve.GREEN.toUpperCase()&&p.level==2&&((k=p.variant)==null?void 0:k.first)==2})),e(186,cn=r.find(p=>{var k;return p.color==ve.BLUE.toUpperCase()&&p.level==3&&((k=p.variant)==null?void 0:k.first)==1})),e(187,Ce=r.find(p=>{var k;return p.color==ve.RED.toUpperCase()&&p.level==3&&((k=p.variant)==null?void 0:k.first)==1})),e(188,ti=r.find(p=>{var k;return p.color==ve.GREEN.toUpperCase()&&p.level==3&&((k=p.variant)==null?void 0:k.first)==1})),e(189,qe=r.find(p=>{var k;return p.color==ve.BLUE.toUpperCase()&&p.level==3&&((k=p.variant)==null?void 0:k.first)==2})),e(190,ri=r.find(p=>{var k;return p.color==ve.RED.toUpperCase()&&p.level==3&&((k=p.variant)==null?void 0:k.first)==2})),e(191,Fn=r.find(p=>{var k;return p.color==ve.GREEN.toUpperCase()&&p.level==3&&((k=p.variant)==null?void 0:k.first)==2})),e(19,Dn=r.filter(p=>p.extra).sort((p,k)=>{var _n,Ma;return(((_n=p.variant)==null?void 0:_n.first)??0)-(((Ma=k.variant)==null?void 0:Ma.first)??0)})),e(20,Ue=Dn.map(()=>{})),e(148,xe=Dn.map(()=>{})),e(149,qn=Dn.map(()=>{})),e(150,we=Dn.map(()=>!1)),vr().then(()=>{e(148,xe=Ue.map(p=>(p==null?void 0:p.getContext("2d"))??void 0))}),Dn.forEach((p,k)=>{ue(`Extra${k+1}`).then(_n=>{e(149,qn[k]=_n,qn),e(150,we[k]=!0,we),e(150,we=[...we])})}),(Jn||h&&hi)&&z(I,L,h&&Nn?Nn:ze,h&&Nn?M:G),(Ln||h&&pn)&&z(X,Ae,h&&pn?pn:sn,h&&pn?M:J),Oe&&z(Q,be,ei,Ve),vi&&z(Ee,ge,Di,Qe),nn&&z(Se,ke,bn,pe),Ai&&z(Me,Ie,hn,fe),Qn&&z(de,$e,Ne,b),Ei&&z(me,ee,ni,ne),fn&&z(H,Y,Ze,q),Fe&&z(_,U,ii,$),gi&&z(Te,T,On,x),an&&z(ie,le,ai,Kn),Ii&&z(De,Gn,cn,wn),$n&&z(xn,en,Ce,ui),Ti&&z(We,Be,ti,yi),Rn&&z(In,un,qe,je),yn&&z(jn,fi,ri,Tn),Ye&&z(Pe,pi,Fn,Zn)}),ue("BlueIA").then(r=>{e(119,Qe=r),e(157,vi=!0)}),ue("BlueIIA").then(r=>{e(125,b=r),e(160,Qn=!0)}),ue("BlueIIB").then(r=>{e(127,$=r),e(163,Fe=!0)}),ue("BlueIIIA").then(r=>{e(137,wn=r),e(166,Ii=!0)}),ue("BlueIIIB").then(r=>{e(139,je=r),e(169,Rn=!0)}),ue("Gold").then(r=>{e(112,G=r),e(152,Jn=!0)}),ue("GreenIA").then(r=>{e(123,fe=r),e(159,Ai=!0)}),ue("GreenIIA").then(r=>{e(133,q=r),e(162,fn=!0)}),ue("GreenIIB").then(r=>{e(135,Kn=r),e(165,an=!0)}),ue("GreenIIIA").then(r=>{e(145,yi=r),e(168,Ti=!0)}),ue("GreenIIIB").then(r=>{e(147,Zn=r),e(171,Ye=!0)}),ue("Handicap").then(r=>{e(113,M=r),pn!=null?e(155,kn=!0):e(153,hi=!0)}),ue("RedIA").then(r=>{e(121,pe=r),e(158,nn=!0)}),ue("RedIIA").then(r=>{e(129,ne=r),e(161,Ei=!0)}),ue("RedIIB").then(r=>{e(131,x=r),e(164,gi=!0)}),ue("RedIIIA").then(r=>{e(141,ui=r),e(167,$n=!0)}),ue("RedIIIB").then(r=>{e(143,Tn=r),e(170,yn=!0)}),ue("Silver").then(r=>{e(115,J=r),e(154,Ln=!0)}),ue("Ultimate").then(r=>{e(117,Ve=r),e(156,Oe=!0)}),P=ns({target:document.body})});function _a(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("goldCanvas"))}})}function Ja(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("silverCanvas"))}})}function Ka(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("purpleCanvas"))}})}function Qa(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueICanvas"))}})}function Ga(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redICanvas"))}})}function $a(){P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenICanvas"))}})}function ja(){tn&&e(48,a=!0)}function et(){tn&&e(48,a=!1)}function Ba(){tn||e(48,a=!0)}function nt(){tn||e(48,a=!1)}function Pa(){e(48,a=!1),tn?e(35,tn=!tn):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIImainCanvas"))}})}function it(){e(48,a=!1),tn?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIIaltCanvas"))}}):e(35,tn=!tn)}function Ua(){ye&&e(47,t=!0)}function at(){ye&&e(47,t=!1)}function xa(){ye||e(47,t=!0)}function tt(){ye||e(47,t=!1)}function Oa(){e(47,t=!1),ye?e(36,ye=!ye):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIImainCanvas"))}})}function rt(){e(47,t=!1),ye?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIIaltCanvas"))}}):e(36,ye=!ye)}function Fa(){rn&&e(46,c=!0)}function Ge(){rn&&e(46,c=!1)}function ot(){rn||e(46,c=!0)}function Ya(){rn||e(46,c=!1)}function st(){e(46,c=!1),rn?e(37,rn=!rn):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIImainCanvas"))}})}function za(){e(46,c=!1),rn?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIIaltCanvas"))}}):e(37,rn=!rn)}function f(){Xe&&e(45,m=!0)}function R(){Xe&&e(45,m=!1)}function B(){Xe||e(45,m=!0)}function Ki(){Xe||e(45,m=!1)}function He(){e(45,m=!1),Xe?e(38,Xe=!Xe):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIIImainCanvas"))}})}function Gi(){e(45,m=!1),Xe?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("blueIIIaltCanvas"))}}):e(38,Xe=!Xe)}function ji(){on&&e(44,o=!0)}function Bi(){on&&e(44,o=!1)}function Pi(){on||e(44,o=!0)}function Ui(){on||e(44,o=!1)}function xi(){e(44,o=!1),on?e(39,on=!on):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIIImainCanvas"))}})}function Oi(){e(44,o=!1),on?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("redIIIaltCanvas"))}}):e(39,on=!on)}function Fi(){he&&e(43,s=!0)}function Yi(){he&&e(43,s=!1)}function zi(){he||e(43,s=!0)}function li(){he||e(43,s=!1)}function Hi(){e(43,s=!1),he?e(40,he=!he):P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIIImainCanvas"))}})}function ki(){e(43,s=!1),he?P.open({intro:"fadeup",items:[{html:""}],onOpen:r=>{new Re({target:r.querySelector(".bp-html"),props:{bp:P}}).drawCard(document.getElementById("greenIIIaltCanvas"))}}):e(40,he=!he)}let ba=0;function Ha(){ba++,ba>=10&&e(42,S=!1)}function Va(r){P.open({intro:"fadeup",items:[{html:""}],onOpen:p=>{let k=new Re({target:p.querySelector(".bp-html"),props:{bp:P}});const _n=Ue[r];_n&&k.drawCard(_n)}})}function Wa(r){Z[r?"unshift":"push"](()=>{I=r,e(1,I)})}function $i(r){Z[r?"unshift":"push"](()=>{X=r,e(2,X)})}function ea(r){Z[r?"unshift":"push"](()=>{Q=r,e(3,Q)})}function na(r){Z[r?"unshift":"push"](()=>{Ee=r,e(4,Ee)})}function ia(r){Z[r?"unshift":"push"](()=>{Se=r,e(5,Se)})}function aa(r){Z[r?"unshift":"push"](()=>{Me=r,e(6,Me)})}function ta(r){Z[r?"unshift":"push"](()=>{_=r,e(8,_)})}function ra(r){oi=r,e(21,oi)}function oa(r){Z[r?"unshift":"push"](()=>{de=r,e(7,de)})}function sa(r){Yn=r,e(22,Yn)}function ca(r){Z[r?"unshift":"push"](()=>{Te=r,e(10,Te)})}function da(r){si=r,e(23,si)}function ma(r){Z[r?"unshift":"push"](()=>{me=r,e(9,me)})}function la(r){mn=r,e(24,mn)}function ua(r){Z[r?"unshift":"push"](()=>{ie=r,e(12,ie)})}function fa(r){_e=r,e(25,_e)}function ya(r){Z[r?"unshift":"push"](()=>{H=r,e(11,H)})}function pa(r){ci=r,e(26,ci)}function ha(r){Z[r?"unshift":"push"](()=>{In=r,e(14,In)})}function va(r){Je=r,e(27,Je)}function Xa(r){Z[r?"unshift":"push"](()=>{De=r,e(13,De)})}function Sa(r){di=r,e(28,di)}function ir(r){Z[r?"unshift":"push"](()=>{jn=r,e(16,jn)})}function ar(r){zn=r,e(29,zn)}function tr(r){Z[r?"unshift":"push"](()=>{xn=r,e(15,xn)})}function rr(r){mi=r,e(30,mi)}function or(r){Z[r?"unshift":"push"](()=>{Pe=r,e(18,Pe)})}function sr(r){Hn=r,e(31,Hn)}function cr(r){Z[r?"unshift":"push"](()=>{We=r,e(17,We)})}function dr(r){ln=r,e(32,ln)}function mr(r,p){Z[r?"unshift":"push"](()=>{Ue[p]=r,e(20,Ue)})}const lr=r=>Va(r);function ur(r){y=r,e(34,y)}function fr(r){h=r,e(33,h)}return n.$$set=r=>{"heroName"in r&&e(0,D=r.heroName),"useNewPrinting"in r&&e(110,g=r.useNewPrinting)},n.$$.update=()=>{if(n.$$.dirty[0]&2147483646|n.$$.dirty[1]&15|n.$$.dirty[3]&2147221504|n.$$.dirty[4]&2147483647|n.$$.dirty[5]&2147483647|n.$$.dirty[6]&63){let r=Yn?!0:oi?!1:null,p=mn?!0:si?!1:null,k=ci?!0:_e?!1:null,_n=di?!0:Je?!1:null,Ma=mi?!0:zn?!1:null,Et=ln?!0:Hn?!1:null;const ce={};ce[Sn.INITIATIVE]=0,ce[Sn.ATTACK]=0,ce[Sn.DEFENSE]=0,ce[Sn.AREA]=0,ce[Sn.RANGE]=0,ce[Sn.MOVEMENT]=0,r===!0&&(ce[ii.item]+=1),r===!1&&(ce[Ne.item]+=1),p===!0&&(ce[On.item]+=1),p===!1&&(ce[ni.item]+=1),k===!0&&(ce[ai.item]+=1),k===!1&&(ce[Ze.item]+=1),_n===!0&&(ce[qe.item]+=1),_n===!1&&(ce[cn.item]+=1),Ma===!0&&(ce[ri.item]+=1),Ma===!1&&(ce[Ce.item]+=1),Et===!0&&(ce[Fn.item]+=1),Et===!1&&(ce[ti.item]+=1),qi=ce[Sn.INITIATIVE],Bn=ce[Sn.ATTACK],Cn=ce[Sn.DEFENSE],dn=ce[Sn.AREA],Ji=ce[Sn.RANGE],Vn=ce[Sn.MOVEMENT],ae&&(Jn||hi)&&z(I,L,h&&Nn?Nn:ze,h&&Nn?M:G),ae&&(Ln||kn)&&z(X,Ae,h&&pn?pn:sn,h&&pn?M:J),ae&&Oe&&z(Q,be,ei,Ve),ae&&vi&&z(Ee,ge,Di,Qe),ae&&nn&&z(Se,ke,bn,pe),ae&&Ai&&z(Me,Ie,hn,fe),ae&&Qn&&z(de,$e,Ne,b),ae&&Ei&&z(me,ee,ni,ne),ae&&fn&&z(H,Y,Ze,q),ae&&Fe&&z(_,U,ii,$),ae&&gi&&z(Te,T,On,x),ae&&an&&z(ie,le,ai,Kn),ae&&Ii&&z(De,Gn,cn,wn),ae&&$n&&z(xn,en,Ce,ui),ae&&Ti&&z(We,Be,ti,yi),ae&&Rn&&z(In,un,qe,je),ae&&yn&&z(jn,fi,ri,Tn),ae&&Ye&&z(Pe,pi,Fn,Zn);for(let Wi=0;Wi<Dn.length;Wi++){const gt=Ue[Wi],It=xe[Wi],Tt=qn[Wi];ae&&we[Wi]&&gt&&It&&Tt&&z(gt,It,Dn[Wi],Tt)}}n.$$.dirty[3]&131072&&e(50,K=g?ct.slice(0,4):ct)},e(48,a=!1),e(47,t=!1),e(46,c=!1),e(45,m=!1),e(44,o=!1),e(43,s=!1),e(34,y=!1),e(33,h=!1),e(42,S=!0),e(49,C=new Map),[D,I,X,Q,Ee,Se,Me,de,_,me,Te,H,ie,De,In,xn,jn,We,Pe,Dn,Ue,oi,Yn,si,mn,_e,ci,Je,di,zn,mi,Hn,ln,h,y,tn,ye,rn,Xe,on,he,Ca,S,s,o,m,c,t,a,C,K,Pn,Ia,Ta,Wn,Da,Li,Un,La,ka,_i,Ke,Ra,wa,Xn,Na,_a,Ja,Ka,Qa,Ga,$a,ja,et,Ba,nt,Pa,it,Ua,at,xa,tt,Oa,rt,Fa,Ge,ot,Ya,st,za,f,R,B,Ki,He,Gi,ji,Bi,Pi,Ui,xi,Oi,Fi,Yi,zi,li,Hi,ki,Ha,Va,g,L,G,M,Ae,J,be,Ve,ge,Qe,ke,pe,Ie,fe,$e,b,U,$,ee,ne,T,x,Y,q,le,Kn,Gn,wn,un,je,en,ui,fi,Tn,Be,yi,pi,Zn,xe,qn,we,ae,Jn,hi,Ln,kn,Oe,vi,nn,Ai,Qn,Ei,fn,Fe,gi,an,Ii,$n,Ti,Rn,yn,Ye,ze,Nn,sn,pn,ei,Di,bn,hn,Ne,ni,Ze,ii,On,ai,cn,Ce,ti,qe,ri,Fn,Wa,$i,ea,na,ia,aa,ta,ra,oa,sa,ca,da,ma,la,ua,fa,ya,pa,ha,va,Xa,Sa,ir,ar,tr,rr,or,sr,cr,dr,mr,lr,ur,fr]}class ys extends Ni{constructor(i){super(),Ci(this,i,fs,ls,Zi,{heroName:0,useNewPrinting:110},null,[-1,-1,-1,-1,-1,-1,-1,-1])}}function zt(n,i){return new Nr(n,i)}new TextEncoder;function ps(n){let i,e,a,t,c,m;return document.title=i=n[1],c=new ys({props:{heroName:n[2],useNewPrinting:n[0]}}),{c(){e=v("meta"),t=w(),te(c.$$.fragment),this.h()},l(o){const s=gr("svelte-1t7fryr",document.head);e=A(s,"META",{name:!0,content:!0}),s.forEach(l),t=N(o),re(c.$$.fragment,o),this.h()},h(){d(e,"name","description"),d(e,"content",a="Guards of Atlantis II card collection for "+n[1]+".")},m(o,s){u(document.head,e),W(o,t,s),oe(c,o,s),m=!0},p(o,[s]){(!m||s&2)&&i!==(i=o[1])&&(document.title=i),(!m||s&2&&a!==(a="Guards of Atlantis II card collection for "+o[1]+"."))&&d(e,"content",a);const y={};s&1&&(y.useNewPrinting=o[0]),c.$set(y)},i(o){m||(j(c.$$.fragment,o),m=!0)},o(o){F(c.$$.fragment,o),m=!1},d(o){o&&l(t),l(e),se(c,o)}}}function hs(n,i,e){let a,t;Xi(n,wr,s=>e(4,t=s));let{data:c}=i;const m=c.url.substring(1);let o=!0;return n.$$set=s=>{"data"in s&&e(3,c=s.data)},n.$$.update=()=>{if(n.$$.dirty&16&&e(0,o=t.url.searchParams.get("printing")!=="old"),n.$$.dirty&1&&o&&!(m in mt)||n.$$.dirty&1&&!o&&!(m in lt))throw zt(404);n.$$.dirty&1&&e(1,a=o?mt[m].name:lt[m].name)},[o,a,m,c,t]}class ws extends Ni{constructor(i){super(),Ci(this,i,hs,ps,Zi,{data:3})}}export{ws as component};
