import{$ as e,B as t,Ct as n,Dt as r,H as i,J as a,K as o,L as s,M as c,Ot as l,R as u,T as d,V as f,W as p,X as ee,Z as m,_t as te,at as h,b as g,d as ne,dt as re,et as _,f as v,ft as y,ht as b,i as ie,it as ae,k as oe,lt as x,mt as se,pt as S,rt as C,s as ce,tt as w,ut as T,w as le,wt as ue,z as de}from"../chunks/BoX266UH.js";import{n as E}from"../chunks/BRg3sR39.js";import"../chunks/BMRk7WTg.js";import"../chunks/FG0bl4lb.js";import{n as fe,t as D}from"../chunks/C4_SYs-X.js";import{i as pe,l as me,o as he,y as O}from"../chunks/C3I2NgIv.js";import{a as ge,c as _e,i as ve,n as ye,o as be,r as xe,s as Se,t as Ce}from"../chunks/D0q1TtGt.js";import{_ as we,c as Te,d as Ee,n as k,p as De,r as Oe,s as ke,t as A}from"../chunks/BzB6poeh.js";import{i as Ae,n as je,r as Me,t as Ne}from"../chunks/Di6ONEvR.js";import{C as Pe,S as Fe,_ as Ie,a as Le,b as Re,c as ze,d as Be,f as Ve,g as He,h as Ue,i as We,l as Ge,m as Ke,n as qe,o as Je,p as Ye,r as Xe,s as Ze,t as Qe,u as $e,v as et,x as tt,y as nt}from"../chunks/bCSyuYeQ.js";var rt=``+new URL(`../assets/arien.BnZh9Qa-.webp`,import.meta.url).href,it=``+new URL(`../assets/bain.CklpntrI.webp`,import.meta.url).href,at=``+new URL(`../assets/brogan.BeXQ9VLh.webp`,import.meta.url).href,ot=``+new URL(`../assets/brynn.DjkXgrbv.webp`,import.meta.url).href,st=``+new URL(`../assets/cutter.Bl7NYnWh.webp`,import.meta.url).href,ct=``+new URL(`../assets/dodger.DUsiyFPT.webp`,import.meta.url).href,lt=``+new URL(`../assets/emmitt.1117UxR5.webp`,import.meta.url).href,ut=``+new URL(`../assets/garrus.DPFrzyJJ.webp`,import.meta.url).href,dt=``+new URL(`../assets/gydion.RRcJAsqU.webp`,import.meta.url).href,ft=``+new URL(`../assets/hanu.iN5c8elP.webp`,import.meta.url).href,pt=``+new URL(`../assets/ignatia.1aFd1RMn.webp`,import.meta.url).href,mt=``+new URL(`../assets/min.BG4tPnhJ.webp`,import.meta.url).href,ht=``+new URL(`../assets/misa.C6Dnj7_I.webp`,import.meta.url).href,gt=``+new URL(`../assets/mortimer.DhcPJGX5.webp`,import.meta.url).href,_t=``+new URL(`../assets/mrak.BO4zlaCk.webp`,import.meta.url).href,vt=``+new URL(`../assets/nebkher.CGqaqJW1.webp`,import.meta.url).href,yt=``+new URL(`../assets/razzle.BB41Uaf8.webp`,import.meta.url).href,bt=``+new URL(`../assets/rowenna.hsYQ-q0C.webp`,import.meta.url).href,xt=``+new URL(`../assets/sabina.zAE08BdQ.webp`,import.meta.url).href,St=``+new URL(`../assets/silverarrow.Cob1dojq.webp`,import.meta.url).href,Ct=``+new URL(`../assets/snorri.DcW6XJQX.webp`,import.meta.url).href,wt=``+new URL(`../assets/swift.sq2NK_k4.webp`,import.meta.url).href,Tt=``+new URL(`../assets/takahide.DgDmb7V7.webp`,import.meta.url).href,Et=``+new URL(`../assets/tali.DcFkA1lL.webp`,import.meta.url).href,Dt=``+new URL(`../assets/tigerclaw.CZOzemvV.webp`,import.meta.url).href,Ot=``+new URL(`../assets/trinkets.Dl9ox7fO.webp`,import.meta.url).href,kt=``+new URL(`../assets/ursafar.CMVSDtkV.webp`,import.meta.url).href,At=``+new URL(`../assets/wasp.DgSBKuHc.webp`,import.meta.url).href,jt=``+new URL(`../assets/whisper.BfS0Lmvz.webp`,import.meta.url).href,Mt=``+new URL(`../assets/widget.B6qkfcYc.webp`,import.meta.url).href,Nt=``+new URL(`../assets/wuk.J3i6Xvoc.webp`,import.meta.url).href,Pt=``+new URL(`../assets/xargatha.Co9sdKj_.webp`,import.meta.url).href,Ft={arien:[{name:`Noble Blade`,description:`Before the attack: You may move another
unit that is adjacent to the target 1 space.
~("Another unit" does not include you). `,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:`Ceremonial Blade`,description:`Cannot target minions.
Before the attack: You may move a minion
that is adjacent to the target 1 space.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:`Spell Break`,description:`**This turn:** Enemy heroes in radius
cannot perform skills.
~(Spell Break will not stop an attack action).`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:3},{name:`Living Tsunami`,description:`After you perform a basic skill, you
may trigger a minion battle in the
battle zone you are in.`,color:`PURPLE`,level:4},{name:`Aspiring Duelist`,description:`Ignore all minion defense modifiers.
~(This includes your minions, as well as the enemy minions).`,color:`BLUE`,level:1,initiative:9,primaryAction:`DEFENSE`,primaryValue:5,secondaryMovement:3},{name:`Gush of Water`,description:`After the attack: You may push every
adjacent token and enemy unit 1 space.
~(If you choose this option, push all units that can be pushed).`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:1,secondaryMovement:4,secondaryDefense:3},{name:`Waveform`,description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:`Expert Duelist`,description:`Ignore all minion defense modifiers.
**This turn:** You are immune
to all other enemy attacks.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`DEFENSE`,primaryValue:6,secondaryMovement:3,item:`DEFENSE`},{name:`High Tide`,description:`After the attack: You may push every
adjacent token and enemy unit 1 space.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`},{name:`Magical Current`,description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Slippery Ground`,description:`**This turn:** Enemies in radius may not move
more than 1 space with a movement action.
~(Enemies who start movement out of radius are unaffected).`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Violent Torrent`,description:`Before the attack: One enemy hero in any of
the 3 spaces in a straight line directly behind
the target discards a card, or is defeated.
~(You cannot target an empty spcae with an attack).`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`},{name:`Arcane Swap`,description:`Swap with a minion or a friendly hero in range.
~(Swap places with the target. This is not movement).`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`},{name:`Master Duelist`,description:`Ignore all minion defense modifiers.
**This turn:** You are immune
to all other enemy actions.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`DEFENSE`,primaryValue:6,secondaryMovement:3,item:`RANGE`},{name:`Rogue Wave`,description:`After the attack: Move the target 1 space.
You may push every token and enemy
unit adjacent to you 1 space.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`MOVEMENT`},{name:`Stranger Tide`,description:`Place yourself into a space in
range without a spawn point.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`},{name:`Deluge`,description:`**This turn and next turn:**
Enemies in radius may not move more
than 1 space with a movement action.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Raging Waters`,description:`Before the attack: One enemy hero in any of
the 5 spaces in a straight line directly behind
the target discards a card, or is defeated.
May repeat once on a different target.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`},{name:`Empowered Swap`,description:`Swap with a unit or a token in range.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`AREA`}],bain:[{name:`Dead or Alive`,description:`You may give a hero in radius a ::marker_bounty:: bounty
marker. The hero with a bounty marker
spends 1 additional ::life_counters:: life counter when
defeated. You may then **choose one —**
>>An enemy hero adjacent to you discards
>a card, if able.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Side Quest`,description:`Up to one enemy hero adjacent to
you discards a card, if able.
Give a hero in radius a ::marker_bounty:: bounty marker.
The hero with a bounty marker spends 1
additional ::life_counters:: life counter when defeated.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:`Get over here!`,description:`Target a unit in a straight line and in range,
with no obstacles between you. Then move
that unit towards you by the shortest valid
path, until it is adjacent to you. **This turn:**
If it is an enemy unit, it cannot move.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryDefense:2},{name:`A Complicated Profession`,description:`After you perform a basic skill,
an enemy hero adjacent to you
discards a card, or is defeated.`,color:`PURPLE`,level:4},{name:`A Game of Chance`,description:`An enemy hero in radius with 2 or more
cards in hand discards a card facedown.
Name a color and reveal that card.
If it's not the color you named, gain 1 coin
and the enemy hero may retrieve their card.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:`Light Crossbow`,description:`Target a minion adjacent to you, or a hero
in range, and in a straight line, with no
other units, or terrain, between you.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:5},{name:`Close Call`,description:`Block the attack. The attacker may swap
their attack card with a card in their hand.
~(The card is swapped after the attack card is resolved).`,color:`GREEN`,level:1,initiative:4,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2},{name:`Dead Man's Hand`,description:`An enemy hero in radius with 2 or more
cards in hand discards a card facedown.
Name a color and reveal that card. If it's
not the color you named, gain 2 coins and
the enemy hero may retrieve their card.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`},{name:`Heavy Crossbow`,description:`Target a unit in range, and in a straight line,
with no other units, or terrain, between you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`},{name:`Narrow Escape`,description:`Block the attack and move up to 1 space.
The attacker may swap their attack
card with a card in their hand.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`ATTACK`},{name:`Drinking Buddies`,description:`A hero in radius may retrieve a discarded
card. **This turn:** Enemy heroes in radius may
not move to a space in a straight line from
them with a movement action.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Hand Crossbow`,description:`+2 ::range_red:: Range if you target a hero with a
::marker_bounty:: bounty marker. Target a unit in range.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Vantage Point`,description:`**Next turn:** You may ignore restrictions to
have no obstacles between you and the
target, when performing attacks and skills.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:3,item:`INITIATIVE`},{name:`We're Not Done Yet!`,description:`An enemy hero in radius with 2 or more cards
in hand discards a card facedown. Name a
color and reveal that card. If it's not the color
you named, gain 1 coin and the enemy hero
may retrieve their card. If they do, repeat once.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`RANGE`},{name:`Impaler`,description:`Target a unit in range, and in a straight
line, with no friendly units, or terrain
between you. Before the attack: Up to
one enemy hero between you and the
target discards a card, or is defeated.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:5,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`},{name:`Perfect Getaway`,description:`Block the attack and move up to 3 spaces
in a straight line. The attacker may swap
their attack card with a card in their hand.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`AREA`},{name:`Another One!`,description:`A hero in radius may retrieve a discarded card.
**This turn and next turn:** Enemy heroes in
radius may not move to a space in a straight
line from them with a movement action.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`},{name:`Hunter-Seeker`,description:`+2 ::range_red:: Range if you target a hero with a
::marker_bounty:: bounty marker. Target a unit in range.
If the target has a bounty marker, you may
repeat once on a different unit adjacent to you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:7,item:`MOVEMENT`},{name:`High Ground`,description:`You may ignore obstacles.
**Next turn:** You may ignore restrictions to
have no obstacles between you and the
target when performing attacks and skills.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:4,item:`INITIATIVE`}],brogan:[{name:`Onslaught`,description:`Target a unit adjacent to you. After the attack:
Move into the space it occupied.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:3},{name:`Leap Forward`,description:`Target a hero adjacent to you. After the attack:
Move into the space it occupied. `,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:2,secondaryMovement:1,secondaryDefense:3},{name:`Bulwark`,description:`**Choose one —**
>>**This round:** You and friendly units in radius
>cannot be moved, pushed, swapped, or
>forced to move by enemy heroes.
>>If your discard is empty, retrieve this card.`,color:`SILVER`,initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:4},{name:`One Man Army`,description:`You count as 2 minions during minion battle.
If you would be removed during minion
battle, you lose the push instead.`,color:`PURPLE`,level:4},{name:`Brutal Jab`,description:`**Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy minion adjacent to you
>up to 2 spaces.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6},{name:`Mad Dash`,description:`Before the attack: Move 2 spaces in
a straight line to a space adjacent to
an enemy unit, then target that unit.
~(If you cannot make this move, you cannot attack).`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:7},{name:`Shield`,description:`**This round:** If a friendly melee minion in
radius would be defeated, you may discard
a card. If you do, the minion is not defeated.`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:4},{name:`Crushing Punch`,description:`Move up to 1 space, then **Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy minion adjacent to you up
>to 2 spaces.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`ATTACK`},{name:`Bullrush`,description:`Before the attack: Move 2 or 3 spaces in
a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:8,item:`INITIATIVE`},{name:`Bolster`,description:`**This round:** If a friendly non-heavy minion in
radius would be defeated, you may discard a
card. If you do, the minion is not defeated.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`},{name:`Shield Bash`,description:`An enemy hero adjacent to you, who
has played an attack card this turn
discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`DEFENSE`},{name:`Throwing Axe`,description:`Before the attack: You may discard a card.
If you do, +2 ::range_red:: Range. Target a unit in range.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`},{name:`War Drummer`,description:`A friendly hero in range may retrieve
a discarded card if either you, or that
hero, is adjacent to an enemy unit.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`},{name:`Savage Kick`,description:`Move up to 1 space, then **Choose one —**
>>Remove a token adjacent to you.
>>Push an enemy unit adjacent to you up to
>2 spaces.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`ATTACK`},{name:`Furious Charge`,description:`Before the attack: Move 2, 3 or 4 spaces
in a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:3,secondaryDefense:8,item:`MOVEMENT`},{name:`Fortify`,description:`**This round:** If a friendly minion in radius
would be defeated, you may discard a card.
If you do, the minion is not defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`},{name:`Counterattack`,description:`An enemy hero adjacent to you, who
has played an attack card this turn
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`RANGE`},{name:`Throwing Spear`,description:`Before the attack: You may discard a card.
+2 ::range_red:: Range if you have a card in the
discard. Target a unit in range.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:`AREA`},{name:`Master Skald`,description:`A friendly hero in range may retrieve a
resolved or discarded card if either you,
or that hero, is adjacent to an enemy unit.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`}],cutter:[{name:`Walk the Plank`,description:`**Choose one —**
>>Push an enemy hero adjacent to you up
>to 3 spaces; if that hero is pushed into
>another zone, that hero discards a card,
>or is defeated.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:12,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:2},{name:`Few More Steps`,description:`Push an enemy hero adjacent to you
up to 3 spaces; if that hero is pushed
into another zone, that hero discards
a card, or is defeated.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:1},{name:`Grappling Bolt`,description:`Target an obstacle in range and in a straight
line, with no obstacles between you, ignore
immunity. Move any number of spaces in a
straight line towards that obstacle.`,color:`SILVER`,initiative:2,primaryAction:`DEFENSE_SKILL`,primaryValue:2,modifier:`RANGE`,modifierValue:5},{name:`Legend of the Skies`,description:`The first time each turn after you perform a
primary action, you may perform the primary
action of a card in the previous turn slot.`,color:`PURPLE`,level:4},{name:`Barrage`,description:`A enemy hero in radius adjacent to
another enemy unit, and not adjacent
to you, discards a card, if able.
~(The target hero must be adjacent to their friendly unit)`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4},{name:`Daring Strike`,description:`Before the attack: You may move
1 space and target a unit adjacent to
you in the direction of the move;
if you do, gain +2 ::attack_red:: Attack.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6},{name:`Brace for Impact`,description:`Move 3 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero. That hero discards a card, if able.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2},{name:`Bombardment`,description:`A enemy hero in radius adjacent to
another enemy unit, and not adjacent
to you, discards a card, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`},{name:`Bold Thrust`,description:`Before the attack: You may move 1 or 2
spaces in a straight line and target a unit
adjacent to you in the direction of the move;
if you do, gain +2 ::attack_red:: Attack.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Ramming Speed`,description:`Move 3 or 4 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero. That hero discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`X Marks the Spot`,description:`Place a coin in a space in radius.
**End of turn:** You may place yourself in
a space with a coin. Any hero in a space
with a coin gains 1 coin. Remove the coin.
~(A coin is not an obstacle. The space with a coin is empty.)`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`},{name:`Evasive Shot`,description:`Target a unit in range in a straight line, with
no other units, or terrain, between you.
After the attack: Move up to 2 spaces in a
straight line directly away from the target.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`},{name:`Mediocre!`,description:`If the attacker has a card in their discard,
block the attack. If you do, the attacker
discards a card, if able.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`ATTACK`},{name:`Broadside`,description:`A enemy hero in radius adjacent to
another enemy unit, and not adjacent
to you, discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`},{name:`Fearless Lunge`,description:`Before the attack: You may move 1, 2 or 3
spaces in a straight line and target a unit
adjacent to you in the direction of the move;
if you do, gain +3 ::attack_red:: Attack.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`},{name:`Crashland`,description:`Move 3, 4 or 5 spaces in a straight
line, ignoring obstacles, to a space
adjacent to an enemy hero.
That hero discards a card, if able.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`MOVEMENT`},{name:`A Fistful of Coins`,description:`Place a coin in up to 2 spaces in radius.
**End of turn:** You may place yourself in a
space with a coin. Heroes in a space with
a coin gain 1 coin. Remove the coins.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`RANGE`},{name:`Tumble Shot`,description:`Target a unit in range in a straight line, with no
other units, or terrain, between you. After the
attack: Move up to 2 spaces in a straight line.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`},{name:`Pathetic!`,description:`If the attacker has a card in their discard,
block the attack. If you do, the attacker
discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`AREA`}],dodger:[{name:`Dread Razor`,description:`+1 ::range_gold:: Range if you are adjacent to
an empty minion spawn point in the
battle zone. Target a unit in range.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:1,secondaryDefense:1},{name:`Rusty Razor`,description:`+1 ::range_gold:: Range if you are adjacent to
an empty minion spawn point in the
battle zone. Target a hero in range. `,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:1,secondaryDefense:1},{name:`Death Trap`,description:`You may remove a friendly minion in radius.
One enemy hero in radius who is adjacent
to an empty minion spawn point in the
battle zone, discards a card, if able.`,color:`SILVER`,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:1},{name:`Tide of Darkness`,description:`Whenever you perform an action, all spaces
count as if they are in a battle zone
and have a minion spawn point.`,color:`PURPLE`,level:4},{name:`Shield of Decay`,description:`+3 ::defense_blue:: Defense if there are 2 or more
empty minion spawn points in
radius in the battle zone.`,color:`BLUE`,level:1,initiative:10,primaryAction:`DEFENSE`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:2,secondaryMovement:3},{name:`Littlefinger of Death`,description:`Target a unit in range. +2 ::attack_red:: Attack if you
target a hero with a card in the discard.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:1,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:5,secondaryDefense:3},{name:`Dark Ritual`,description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 1 coin.
~(Removing the minion is optional!)`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:`Vampiric Shield`,description:`You may remove a friendly minion in radius.
+3 ::defense_blue:: Defense if there are 2 or more
empty minion spawn points in
radius in the battle zone.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`DEFENSE`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,item:`ATTACK`},{name:`Finger of Death`,description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a hero with a card in the discard.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:1,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:`DEFENSE`},{name:`Darker Ritual`,description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 2 coins.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`INITIATIVE`},{name:`Drain Essence`,description:`Perform a non-attack action of a card in
the discard of an enemy hero in radius;
apply no item bonuses.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`},{name:`Burning Skull`,description:`Target a unit in range. After the attack:
Push every enemy unit adjacent to the target
1 space away from the target's space.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:5,secondaryDefense:6,item:`INITIATIVE`},{name:`Necromancy`,description:`If an enemy hero in radius has a card in
the discard, respawn a friendly minion in a
spawn point adjacent to you in the battle zone.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`},{name:`Aegis of Doom`,description:`You may remove a friendly minion in radius.
If there are 2 or more empty minion spawn
points in radius in a battle zone +4 ::defense_blue::
Defense and **This turn:** You are immune.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValue:5,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,item:`RANGE`},{name:`Middlefinger of Death`,description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a hero with a card in the discard.
**This turn:** The target cannot retrieve cards.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:`AREA`},{name:`Darkest Ritual`,description:`You may remove a friendly minion in radius.
If there are 3 or more empty minion spawn
points in radius in the battle zone, gain 2
coins, and you may retrieve a discarded card.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Soul Siphon`,description:`Perform an action of a card in the
discard of an enemy hero in radius,
apply no item bonuses.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Blazing Skull`,description:`Target a unit in range. Before the attack:
Push every enemy unit adjacent to the
target 1 space away from the target's space.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:5,secondaryDefense:6,item:`MOVEMENT`},{name:`Necromastery`,description:`If an enemy hero in radius has a card in
the discard, respawn a friendly minion in
a spawn point in radius in the battle zone.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`}],garrus:[{name:`Angry Strike`,description:`Target a unit adjacent to you. +2 ::attack_gold:: Attack
if you have exactly one card in the discard.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:3},{name:`Angry Swipe`,description:`Target a hero adjacent to you. +2 ::attack_gold:: Attack
if you have exactly one card in the discard.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Chilling Howl`,description:`You may discard a resolved card in the
previous turn slot. **This round:** Enemy
heroes in radius cannot fast travel, or move
more than 2 spaces with a movement action.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:3},{name:`Death Grip`,description:`While you are adjacent to exactly one enemy
hero, that hero cannot move or be moved,
placed, or swapped and you cannot be
moved, placed or swapped by enemy heroes.`,color:`PURPLE`,level:4},{name:`Menace`,description:`Move an enemy unit in radius to a space
outside of radius by the shortest valid path.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:1,secondaryMovement:3,secondaryDefense:6},{name:`Trace`,description:`Before the attack: If you have exactly
one card in the discard, you may move
up to 1 space to a space adjacent to
an enemy hero and target that hero.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:5},{name:`Hold Ground`,description:`If there is an enemy hero in range,
you may retrieve a discarded card.`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:`Threaten`,description:`Move an enemy unit in radius to a space
outside of radius by the shortest valid path.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`},{name:`Chase`,description:`Before the attack: If you have exactly
one card in the discard, you may move
up to 2 spaces to a space adjacent to
an enemy hero and target that hero.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`},{name:`Make a Stand`,description:`If there is an enemy hero in range,
you may retrieve a discarded card.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Shields Up!`,description:`**This round:** You and friendly units in
radius are immune to ranged actions of
enemy heroes outside of radius. Cancel
this effect if you move or fast travel.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`DEFENSE_SKILL`,primaryValue:6,modifier:`AREA`,modifierValue:2,secondaryMovement:3,item:`ATTACK`},{name:`Blunt Force`,description:`Target a unit adjacent to you. After the attack:
you may move up to 2 spaces to a space
adjacent to the nearest enemy hero.
Push that hero up to 2 spaces.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`},{name:`Light Pilum`,description:`An enemy hero in range, not adjacent
to you, discards a card, if able.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Terrify`,description:`Move an enemy unit in radius to a space
outside of radius by the shortest valid path.
If you do, **This turn:** That hero cannot move
back into radius with a movement action.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`},{name:`Hunt Down`,description:`Before the attack: If you have exactly
one card in the discard, you may move
up to 3 spaces to a space adjacent to
an enemy hero and target that hero.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:6,item:`RANGE`},{name:`Battle Ready`,description:`If there is an enemy hero in range,
you may retrieve a discarded card.
**End of next turn:** May repeat once.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Form Testudo!`,description:`**This round:** You and friendly units in
radius are immune to ranged actions
of enemy heroes outside of radius.
Cancel this effect if you move more than
2 spaces in a single turn, or fast travel.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`DEFENSE_SKILL`,primaryValue:7,modifier:`AREA`,modifierValue:2,secondaryMovement:3,item:`ATTACK`},{name:`Send Flying`,description:`Target a unit adjacent to you. After the attack:
you may move up to 3 spaces to a space
adjacent to the nearest enemy hero.
Push that hero up to 2 spaces.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:8,item:`AREA`},{name:`Heavy Pilum`,description:`An enemy hero in range, not adjacent
to you, discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`}],hanu:[{name:`Fight and Flight`,description:`If your discard is empty, **choose one —**
>>An enemy hero adjacent to you discards a
>card, if able. You then move 2 spaces in a
>straight line, if able.
>>Defeat a non-heavy minion adjacent to you.`,color:`GOLD`,initiative:13,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:1},{name:`Fight or Flight`,description:`If discard is empty, an adjacent
enemy hero discards a card, if able. You
then move 2 spaces in a straight line, if able.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:1},{name:`Hurry up!`,description:`If your discard is empty, set the printed
::initiative:: Initiative value of an unresolved card
of a hero in range to 11, until it is resolved.
**This turn:** If that hero performs a
movement action, that hero must move in
a straight line and the full distance, if able.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryDefense:1},{name:`The Ultimate Trick`,description:`You choose the action, and how
it is performed for a hero you
target with the "Hurry Up!".`,color:`PURPLE`,level:4},{name:`Unexpected Journey`,description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero,
regardless of radius, if able.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4},{name:`Helping Hand`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
>to a friendly hero.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:5},{name:`Little to Gain`,description:`If you have no cards in the discard, block
the attack. Discard your unresolved card,
if you have one and and place yourself on
a spawn point in your throne zone, if able.
Each enemy hero gains 1 coin.`,color:`GREEN`,level:1,initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3},{name:`There and Back Again`,description:`Swap with an enemy unit in radius.
**This turn:** That unit is immune.
**End of turn:** Swap with that unit,
regardless of radius, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Even the Odds`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
>to a friendly hero.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:`INITIATIVE`},{name:`Barely a Nuisance`,description:`If you have no cards in the discard, block
the attack and place yourself on a spawn
point in your throne zone, if able.
Each enemy hero gains 1 coin.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`ATTACK`},{name:`This Way!`,description:`A friendly hero in radius chooses a distance
of 1 or 2. You choose a direction. You both
move that number of spaces in the chosen
direction, if able; stop if you reach an obstacle.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`},{name:`Outnumber`,description:`+1 ::attack_red:: Attack for each friendly
unit adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:1,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:5,secondaryDefense:3,item:`DEFENSE`},{name:`Hear Nothing`,description:`Swap with an enemy hero in radius.
Move up to 1 space.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`INITIATIVE`},{name:`Safe Travels`,description:`Swap with an enemy unit in radius.
**This turn:** You and that unit are immune.
**End of turn:** Swap with that unit,
regardless of radius, if able.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`},{name:`Trusted Sidekick`,description:`**Choose one, or both —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent
>to a friendly hero.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:`MOVEMENT`},{name:`Killing Joke`,description:`If you have no cards in the discard, block the
attack and place yourself on a spawn point in
your throne zone, if able. If you do, retrieve
this card. Each enemy hero gains 1 coin.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`DEFENSE`},{name:`That Way!`,description:`A friendly hero in radius chooses a distance
of 1, 2, or 3. You choose a direction. You both
move that number of spaces in the chosen
direction; stop if you reach an obstacle.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`RANGE`},{name:`Pile On`,description:`+1 ::attack_red:: Attack for each friendly unit
adjacent to you. If you target a hero,
may repeat once on a different target.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:5,secondaryDefense:4,item:`AREA`},{name:`See Nothing`,description:`Move up to 1 space. Swap with an enemy
hero in radius. Move up to 1 space.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`INITIATIVE`}],ignatia:[{name:`Chaos Bolt`,description:`::tiebreaker_blue::: Target a non-adjacent minion in range.
---
::tiebreaker_orange:: Target a non-adjacent hero in range.
~(Effect is based on the visible side of the Tie Breaker coin).`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Unreliable Jolt`,description:`::tiebreaker_blue::: Target an adjacent hero in range.
---
::tiebreaker_orange:: Target a non-adjacent hero in range.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:`Moment of Equilibrium`,description:`Flip the Tie Breaker coin to a side of your
choice. **This turn and next turn:**
The coin is not flipped after a tie.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,secondaryDefense:3},{name:`Chaos Incarnate`,description:`After you perform a primary action, you may
flip the Tie Breaker token to the other side
and repeat that action once, if able.`,color:`PURPLE`,level:4},{name:`Abrupt Combustion`,description:`::tiebreaker_blue::: An enemy hero in radius, adjacent to a
token, or a minion, discards a card, If able.
---
::tiebreaker_orange:: An adjacent enemy hero
discards a card, if able.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:4},{name:`Playing with Fire`,description:`::tiebreaker_blue::: Target a hero in a straight line.
---
::tiebreaker_orange:: Target a hero not in a straight line.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:5},{name:`Path of Ashes`,description:`::tiebreaker_blue::: Move up to 2 spaces in a straight line.
Place a ::token_magma:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 2 magma tokens in radius
adjacent to another magma token, if able.`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:`Spontaneous Immolation`,description:`::tiebreaker_blue::: An enemy hero in radius, adjacent to a
token, or a minion, discards a card, If able.
---
::tiebreaker_orange:: An adjacent enemy hero
discards a card, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`},{name:`Erratic Fireblast`,description:`::tiebreaker_blue::: Target a unit in a straight line.
---
::tiebreaker_orange:: Target a unit not in a straight line.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:`INITIATIVE`},{name:`Path of Cinders`,description:`::tiebreaker_blue::: Move up to 3 spaces in a straight line.
Place a ::token_magma:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 3 magma tokens in radius
adjacent to another magma token, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Searing Heat`,description:`::tiebreaker_blue::: Move an adjacent enemy
unit up to 3 spaces.
---
::tiebreaker_orange:: Move a non-adjacent enemy
unit in radius up to 1 spaces.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`},{name:`Crack of Doom`,description:`::tiebreaker_blue::: Target a unit at a maximum range.
---
::tiebreaker_orange:: Target an adjacent unit.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`DEFENSE`},{name:`Unstable Portal`,description:`::tiebreaker_blue::: You swap with a friendly unit in radius.
---
::tiebreaker_orange:: You swap with an enemy unit in radius.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Violent Conflagration`,description:`::tiebreaker_blue::: An enemy hero in radius,
adjacent to a token, or a minion,
discards a card, or is defeated.
---
::tiebreaker_orange:: An adjacent enemy hero
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`RANGE`},{name:`Loosely-Aimed Firebolts`,description:`::tiebreaker_blue::: Target a unit in a straight line.
Repeat once on a different hero.
---
::tiebreaker_orange:: Target a unit not in a straight line.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`MOVEMENT`},{name:`Path of Flames`,description:`::tiebreaker_blue::: Move up to 4 spaces in a straight line.
Place a ::token_magma:: magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange:: Place up to 4 magma tokens in radius
adjacent to another magma token, if able.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Scorching Blaze`,description:`::tiebreaker_blue::: Move an adjacent enemy unit up to 4
spaces. Repeat once on a different target.
---
::tiebreaker_orange:: Move a non-adjacent enemy
unit in radius up to 2 spaces.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`},{name:`Imminent Eruption`,description:`::tiebreaker_blue::: Target a unit at a maximum range.
---
::tiebreaker_orange:: Target an adjacent unit.
Repeat once on a minion.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:8,item:`AREA`},{name:`Chaos Gate`,description:`::tiebreaker_blue::: You swap with a friendly unit in radius.
---
::tiebreaker_orange:: You swap with an enemy unit in radius.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`DEFENSE_SKILL`,primaryValue:4,modifier:`AREA`,modifierValue:3,secondaryMovement:2,item:`DEFENSE`}],min:[{name:`Fast as Lightning`,description:`After the attack: You may swap this card
with a resolved or discarded attack card
and apply that card's text.`,color:`GOLD`,initiative:13,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:`Chop Down`,description:`Cannot target minions.
After the attack: You may swap this card
with a resolved or discarded attack card
and apply that card's text.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:`Smoke Bomb`,description:`Place a ::token_smoke_bomb:: smoke bomb token in radius.
Units can move through the smoke bomb.
Enemy heroes cannot target another unit
if there is a smoke bomb on a straight line
between them and the target.`,color:`SILVER`,initiative:12,primaryAction:`DEFENSE_SKILL`,primaryValue:2,modifier:`AREA`,modifierValue:3},{name:`Flurry of blows`,description:`After you perform a movement action,
all adjacent enemy heroes discard
a card, if able.`,color:`PURPLE`,level:4},{name:`Trip Mine`,description:`Place 2 mine tokens, 1 ::token_blast:: blast and 1 ::token_dud::
dud, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4},{name:`Crane Stance`,description:`After the attack: Push an adjacent
enemy hero up to 1 space.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:6},{name:`Poof!`,description:`Swap with a mine, a grenade,
or a smoke bomb in radius.
If you do, block the attack.`,color:`GREEN`,level:1,initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,modifier:`AREA`,modifierValue:3,secondaryMovement:2},{name:`Cluster Mine`,description:`Place 3 mine tokens, 1 ::token_blast:: blast and 2 ::token_dud::
duds, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`},{name:`Tiger Stance`,description:`After the attack: Push an adjacent
enemy hero up to 2 spaces.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`},{name:`Vanish`,description:`Swap with a mine, a grenade, or a
smoke bomb in radius. If you do, when
used as a defense, block the attack.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`DEFENSE_SKILL`,primaryValueSign:`EXCLAMATION`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,item:`ATTACK`},{name:`Death Grenade`,description:`Place a ::token_grenade:: grenade token into a space in
range, not adjacent to you. **End of turn:**
An enemy hero adjacent to the grenade
discards a card, if able, remove the grenade.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Viper Stance`,description:`After the attack: You may swap with a
smoke bomb or a mine in radius.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`INITIATIVE`},{name:`Inner Strength`,description:`If your discard is empty, **This round:** Double
your item bonuses. If you discard a card,
cancel this effect after the action is resolved.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Mine Field`,description:`Place 3 mine tokens, 2 ::token_blast:: blasts and 1 ::token_dud::
dud, facedown in radius. Units may move
through them. After an enemy hero moves
through a mine, remove it. For every blast
removed, that hero discards a card, if able.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`AREA`},{name:`Dragon Stance`,description:`After the attack: Move up to 1 space to a
space adjacent to the target, if able. Push
an adjacent enemy hero up to 3 spaces.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`},{name:`Ruse`,description:`Swap with a mine, a grenade, or a smoke
bomb in radius. If you do, when used as
a defense, block the attack and you may
retrieve a resolved or discarded silver card.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`DEFENSE_SKILL`,primaryValueSign:`EXCLAMATION`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,item:`DEFENSE`},{name:`Holy Death Grenade`,description:`Place a ::token_grenade:: grenade token into a space in
range, not adjacent to you. **End of turn:** An
enemy hero adjacent to the grenade discards
a card, or is defeated, remove the grenade.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`MOVEMENT`},{name:`Cobra Stance`,description:`After the attack: You may swap with
a smoke bomb or a mine in radius.
If you do, repeat once on a different hero.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:`RANGE`},{name:`Perfect Self`,description:`You may retrieve a discarded card. If your
discard is empty, **This round:** Double your
item bonuses. If you discard a card, cancel
this effect after the action is resolved.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`}],misa:[{name:`Watch Me Soar`,description:`You may move through obstacles.
**This turn:** You are immune to non-ranged
attacks and skills. Ignore the effects of
tokens. Other units may move through you.`,color:`GOLD`,initiative:9,primaryAction:`MOVEMENT`,primaryValue:5,secondaryDefense:6},{name:`Swoop In`,description:`Place yourself into a space in radius,
adjacent to an enemy hero. **This turn:**
Heroes in radius must attack you, if able,
when performing an attack action. The first
time you discard a card, gain 2 coins.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:3},{name:`Step In`,description:`Place yourself into a space in radius,
adjacent to an enemy hero. **This turn:**
Heroes in radius must attack you, or a minion,
if able, when performing an attack action.
The first time you discard a card, gain 2 coins.`,color:`SILVER`,handicapped:!0,initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:1,secondaryDefense:2},{name:`Power Overwhelming`,description:`You may move through obstacles.
Your actions with **"Next turn"**
active effects count as if they had a
**"This round"** active effect instead.`,color:`PURPLE`,level:4},{name:`Sudden Breeze`,description:`Move up to 3 spaces in a straight line
ignoring the obstacles.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3},{name:`Challenge Accepted`,description:`Target a unit adjacent to you.
After the attack: If the target defends
successfully, gain 2 coins.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:1,secondaryDefense:2},{name:`Focus`,description:`**Next turn:** After you resolve a skill,
you may repeat it once.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:4},{name:`Gust of Wind`,description:`Move up to 3 spaces in a straight line
ignoring obstacles. You may place 1 unit
moved through into a space adjacent to you.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`},{name:`Matter of Honor`,description:`Target a unit adjacent to you.
After the attack: If the target defends
successfully, gain 3 coins.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:1,secondaryDefense:2,item:`INITIATIVE`},{name:`Discipline`,description:`**Next turn:** After you resolve an attack or a
skill, you may repeat it once. Cannot attack
the same hero twice this way.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:5,item:`INITIATIVE`},{name:`Living Tornado`,description:`Swap two enemy units in radius,
not adjacent to you.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`},{name:`Power Shot`,description:`Target a unit in range. After the attack: If the
target is not adjacent to you, you may move
it 1 space, to a space farther away from you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,item:`DEFENSE`},{name:`Dash and Slash`,description:`**Next turn:** The first enemy hero you move
through discards a card, if able. If a hero
discards a card this way, gain 1 coin.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:7,item:`ATTACK`},{name:`Crushing Squall`,description:`Move up to 4 spaces in a straight line
ignoring obstacles. You may place 1 unit
moved through into a space adjacent to you.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`RANGE`},{name:`Worthy Opponent`,description:`Target a unit adjacent to you. If you target a
hero, that hero cannot choose to not defend.
After the attack: If the target defends
successfully, gain 4 coins.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:1,secondaryDefense:3,item:`INITIATIVE`},{name:`Mastery`,description:`**Next turn:** After you resolve an action,
you may repeat it once. Cannot attack
the same hero twice this way.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`DEFENSE_SKILL`,primaryValue:5,secondaryMovement:3,item:`DEFENSE`},{name:`Storm Spirit`,description:`Swap with an enemy unit in radius, not
adjacent to you, or swap two enemy
units in radius, not adjacent to you.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`},{name:`Thunder Shot`,description:`Target a unit in range. After the attack:
If the target is not adjacent to you, you
may move it 1 space, to a space farther
away from you, up to two times.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:2,item:`AREA`},{name:`Death from Above`,description:`**Next turn:** The first enemy hero you
move through this turn discards a card,
or is defeated. If a hero discards a
card this way, gain 2 coin.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`DEFENSE_SKILL`,primaryValue:7,secondaryMovement:3,item:`ATTACK`}],nebkher:[{name:`Mind Grip`,description:`**Choose one —**
>>Perform the primary action of the card in
>the previous turn slot of an enemy hero in
>range; apply no item bonuses. If you would
>place a token, place an illusion token
>instead. Ignore effects that give markers.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:1,secondaryDefense:2},{name:`Mind Probe`,description:`Perform the primary action of a non-attack
card in the previous turn slot of an enemy
hero in range; apply no item bonuses. If you
would place a token, place an illusion token
instead. Ignore effects that give markers.`,color:`GOLD`,handicapped:!0,initiative:8,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Diabolical Laughter`,description:`Laugh diabolically. If you do, **choose one —**
>>You swap with an illusion token in radius.
>>You swap with a friendly minion in radius.
>>You are defeated. Enemies gain no coins.
>>**Next turn:** Gain +2 ::initiative:: Initiative.`,color:`SILVER`,initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryDefense:4},{name:`What the Hell Are You?`,description:`If you would be defeated as part of your own
action, first defeat all enemy minions in radius
and enemy heroes in radius discard a card, or
are defeated. Spend no life counters.`,color:`PURPLE`,level:4,modifier:`AREA`,modifierValue:2},{name:`Imbue Doubt`,description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5},{name:`Assume Control`,description:`**Choose one —**
>>Before the attack: Move a friendly minion in
>range up to 3 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:7},{name:`Fleeting Image`,description:`Place an ::token_illusion:: illusion token in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.
~(Complete the action causing the discard before the swap).`,color:`GREEN`,level:1,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4},{name:`Time to Reconsider`,description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:`DEFENSE`},{name:`Direct Control`,description:`**Choose one —**
>>Before the attack: Move a friendly minion in
>range up to 4 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:`INITIATIVE`},{name:`Multiple Projections`,description:`Place up to 2 ::token_illusion:: illusion tokens in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Crack in Reality`,description:`Split the board with a straight line of spaces
drawn through your space: **This turn:**
Units on either side of the line are immune to
actions of units on the opposite side of the line.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`ATTACK`},{name:`Twist Fate`,description:`Target a unit in range. After the attack:
If you target a hero, you may swap any
two of their resolved cards.
~(Any active effects on the swapped cards are canceled).`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`},{name:`Phantasmal Warrior`,description:`Place an ::token_illusion:: illusion token in radius. **This**
**round:** While you are performing actions, the
illusion tokens count as friendly melee minions.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`An Illusion of Choice`,description:`A hero in radius must swap their unresolved
card with another card in their hand, if able.
May repeat once on the same Hero.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:`DEFENSE`},{name:`Master of Puppets`,description:`**Choose one, or both**, in any order **—**
>>Before the attack: Move a friendly minion in
>range up to 4 spaces to a space adjacent to
>an enemy hero in range. Target that hero.
>>Target a minion adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:`MOVEMENT`},{name:`Master Of Illusions`,description:`Place up to 3 ::token_illusion:: illusion tokens in radius.
**This round:** After an action makes you
discard a card, swap with an illusion token,
regardless of radius, then remove that token.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`},{name:`Shift Reality`,description:`Split the board with a straight line of spaces
drawn through your space: **This turn:** You are
immune to actions of units on either side of
the line. All other units are immune to actions
of units on the opposite side of the line.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`ATTACK`},{name:`Devious Scheme`,description:`Target a unit in range. After the attack:
If you target a hero, you may swap
any two of their resolved, unresolved,
or discarded cards.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:`AREA`},{name:`Phantasmal Colossus`,description:`Place an ::token_illusion:: illusion token in radius. **This**
**round:** Illusion tokens are immune to enemy
actions. While you are performing actions, the
illusion tokens count as friendly melee minions.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`RANGE`}],sabina:[{name:`Point Blank Shot`,description:`After the attack: If the target
is adjacent, push the target 1 space.
~(A unit pushed into an obstacle will stop. This is a valid push) `,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:1},{name:`Bang`,description:`Cannot target minions. After the attack: If the
target is adjacent, push it 1 space, if able. `,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:`Back to Back`,description:`You may swap with a friendly minion
adjacent to you. **This turn:** You and friendly
heroes in radius gain +1 ::defense_silver:: Defense
if adjacent to one or more friendly minions.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:2},{name:`Big Sodding Gun`,description:`Your basic attack has +2 ::range_gold:: Range and
+2 ::attack_gold:: Attack. If you push an enemy hero,
that hero discards a card, or is defeated.`,color:`PURPLE`,level:4},{name:`Basic Drill`,description:`**This round:** When you, or a friendly hero
performs a basic attack, friendly minions in
radius, including the immune ones, reduce the
defense total as if they were ranged minions.`,color:`BLUE`,level:1,initiative:9,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:2,secondaryDefense:3},{name:`Quickdraw`,description:`Target a non-adjacent unit.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6},{name:`Command`,description:`Move any 1 friendly minion in radius up to
2 spaces; ignore heavy minion immunity.
~(You may move a heavy minion with this skill).`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:2},{name:`Battle Drill`,description:`**This round:** Friendly minions in radius,
including the immune ones, reduce the
defense total as if they were ranged minions.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:2,secondaryDefense:4,item:`ATTACK`},{name:`Gunslinger`,description:`Target a non-adjacent unit.
+2 ::attack_red:: Attack if the target hero
played an attack card this turn.
~(A revealed card is "played" even if it's not resolved yet).`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Control`,description:`Move any 1 friendly minion in radius up to
3 spaces; ignore heavy minion immunity.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`},{name:`Close Support`,description:`If you are adjacent to a friendly minion, an
enemy hero in radius discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`},{name:`Shootout`,description:`Target a unit in range. After the attack: If you
defeated a minion with this attack, and there
is no enemy hero in range, you may remove
a non-heavy enemy minion adjacent to you.
~(You gain no coins for removing a minion.)`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`},{name:`Lead the Charge`,description:`If you are adjacent to a friendly minion,
block the attack.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`INITIATIVE`},{name:`Field Promotion`,description:`**This round:** Friendly minions in radius,
including the immune ones, reduce the
defense total as if they each were both
a ranged minion and a melee minion.
~(This can reduce the defense total by up to 2 per minion.)`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:2,secondaryDefense:4,item:`ATTACK`},{name:`Dead Shot`,description:`+2 ::attack_red:: Attack if the target hero
played an attack card this turn.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`AREA`},{name:`Tactical Advantage`,description:`Move any 1 friendly minion in radius up to
3 spaces; ignore heavy minion immunity.
May repeat once.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`},{name:`Covering Fire`,description:`If you are adjacent to a friendly minion,
an enemy hero in radius discards a
card, or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`RANGE`},{name:`Bullet Hell`,description:`Target a unit in range. After the attack:
If you defeated a minion with this attack, and
there is no enemy hero in range, you may
remove a non-heavy enemy minion in range.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:`MOVEMENT`},{name:`Plot Armor`,description:`If you are adjacent to a friendly minion,
block the attack and **This turn:** You are
immune to all other enemy action.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`INITIATIVE`}],silverarrow:[{name:`Hit and Run`,description:`Cannot attack if you are adjacent to
an enemy unit. Target a unit in range.
After the attack: You may fast travel, if able.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:1},{name:`Keep the Distance`,description:`Cannot attack if you are adjacent to an
enemy unit. Target a hero in range.
After the attack: You may fast travel
within the same zone, if able.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:2},{name:`Trailblazer`,description:`If you are not adjacent to an enemy unit, you
may move up to 4 spaces in a straight line to
a space not adjacent to an enemy unit.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,secondaryDefense:1},{name:`Wild Hunt`,description:`Each time before you perform an action
you may move 2 spaces in a straight line.`,color:`PURPLE`,level:4},{name:`Grasping Roots`,description:`**This turn:** Enemy heroes in radius adjacent
to terrain cannot fast travel, or move more
than 1 space with a movement action.`,color:`BLUE`,level:1,initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:3,secondaryDefense:3},{name:`Snap Shot`,description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. Target a hero in range,
or a minion adjacent to you and in range.
~(If your range is below 1, you cannot perform this action).`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,modifierValueSign:`MINUS`,secondaryMovement:5,secondaryDefense:5},{name:`Disorient`,description:`Move an enemy unit adjacent to you up
to 1 space. If you do, move up to that
number of spaces in a straight line.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:1},{name:`Entangling Vines`,description:`**This turn:** Enemy heroes in radius
adjacent to terrain, or to their friendly
hero, cannot fast travel, or move more
than 1 space with a movement action.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:3,secondaryDefense:3,item:`DEFENSE`},{name:`Opportunity Shot`,description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. Target a unit in range.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:4,modifierValueSign:`MINUS`,secondaryMovement:5,secondaryDefense:5,item:`INITIATIVE`},{name:`Divert Attention`,description:`Move an enemy unit adjacent to you up
to 2 spaces. If you do, move up to that
number of spaces in a straight line.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2,item:`INITIATIVE`},{name:`Warning Shot`,description:`If you are not adjacent to an enemy unit,
**End of turn:** An enemy hero in radius
discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`ATTACK`},{name:`Long Shot`,description:`Target a unit at maximum range.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:`DEFENSE`},{name:`Fae Healing`,description:`If you are not adjacent to an enemy unit,
another hero in radius may retrieve a
discarded card.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`},{name:`Grappling Branches`,description:`**This turn:** Enemy heroes in radius
adjacent to terrain, or to their friendly
unit, cannot fast travel, or move more
than 1 space with a movement action.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:3,secondaryDefense:4,item:`DEFENSE`},{name:`Clear Shot`,description:`-2 ::range_red:: Range for every unit adjacent to the
target, including you. target a unit in range.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:5,modifierValueSign:`MINUS`,secondaryMovement:5,secondaryDefense:6,item:`INITIATIVE`},{name:`Lead Astray`,description:`Move an enemy unit adjacent to you up
to 3 spaces. If you do, move up to that
number of spaces in a straight line.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2,item:`MOVEMENT`},{name:`Treetop Sentinel`,description:`If you are not adjacent to an enemy unit,
**End of turn:** An enemy hero in radius,
discards a card or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Rain of Arrows`,description:`Target a unit at maximum range.
If you target a hero, may repeat
up to two times on different heroes.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:5,item:`AREA`},{name:`Nature's Blessing`,description:`If you are not adjacent to an enemy unit,
you and up to one hero in radius may
retrieve a discarded card.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`RANGE`}],swift:[{name:`Reload!`,description:`Perform the primary action of the
resolved card in your previous turn slot.`,color:`GOLD`,initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:1},{name:`Backup`,description:`Perform the primary action of your resolved
card in the previous turn slot. If you perform
an attack this way, you cannot target minions.`,color:`GOLD`,handicapped:!0,initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:1},{name:`Bounce`,description:`Swap this card with a red or a gold card
in your hand or discard. If you do, you may
push an enemy unit adjacent to you 1 space,
then move 2 spaces in a straight line, if able.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,secondaryDefense:2},{name:`Bullet Time`,description:`After you perform any action on your Gold
card, you may perform an action on your
Gold card again; it can be the same action.
Cannot target the same enemy hero twice.`,color:`PURPLE`,level:4},{name:`Steam Jump`,description:`Place yourself into a space in a straight line
and at maximum radius. You may then push
an enemy unit adjacent to you 1 space.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3},{name:`Snipe`,description:`Target a unit at maximum range
and in a straight line.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:5},{name:`Suppress`,description:`An enemy hero in radius, not adjacent
to you and not adjacent to terrain, or a
token, discards a card, if able.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2},{name:`Assault Jump`,description:`Place yourself into a space in a straight line in
radius and not adjacent to you. You may then
push an enemy unit adjacent to you 1 space.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Prepared Shot`,description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`},{name:`Pin Down`,description:`An enemy hero in radius, not adjacent
to you and not adjacent to terrain, or a
token, discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`},{name:`Tactical Jump`,description:`You may place yourself into a space in
radius not in a straight line from you.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`DEFENSE_SKILL`,primaryValue:4,modifier:`AREA`,modifierValue:3,secondaryMovement:1,item:`DEFENSE`},{name:`Shotgun`,description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a unit adjacent to you. Before the
attack: Up to one enemy hero adjacent to
the target discards a card, if able.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Steam Cover`,description:`**Next turn:** Before you perform an action, you
may swap any two of your resolved cards.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Drop Trooper`,description:`Place yourself into a space in a straight
line in radius. You may then push up to two
enemy units adjacent to you 1 space.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Killshot`,description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:6,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`},{name:`Killing Ground`,description:`An enemy hero in radius, not adjacent to
you and not adjacent to terrain, or a token,
discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`RANGE`},{name:`Steam Valkyrie`,description:`You may place yourself into a space in
radius not in a straight line from you.
You may then fast travel once, if able.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`DEFENSE_SKILL`,primaryValue:4,modifier:`AREA`,modifierValue:3,secondaryMovement:1,item:`MOVEMENT`},{name:`Super-Shotgun`,description:`Target a unit in range. +3 ::attack_red:: Attack if you
target a unit adjacent to you. Before the
attack: Up to one enemy hero adjacent to
the target discards a card, or is defeated.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`AREA`},{name:`Fog of War`,description:`**Next turn:** Before or After you perform
an action, you may swap any two
of your resolved cards.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:3,item:`INITIATIVE`}],tali:[{name:`Turn to Ice`,description:`**Choose one —**
>>A hero in range with an unresolved card
>may choose to retrieve that card. If they
>do not, name a color. That hero discards
>a card of that color, if able.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:1},{name:`Cold Touch`,description:`A hero in range with an unresolved card
may choose to retrieve that card.
If they do not, name a color. That hero
discards a card of that color, if able.`,color:`GOLD`,handicapped:!0,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1},{name:`Commune with Spirits`,description:`The nearest friendly hero names a color,
you may then **choose one —**
>>Discard a card of that color. If you do,
>perform any one action on that card.
>>Retrieve a discarded card of that color.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,secondaryDefense:2},{name:`Reign of Winter`,description:`Whenever an enemy hero in play
retrieves a card as a result of an action,
that hero discards a card, if able, and
you may retrieve your discarded card.`,color:`PURPLE`,level:4},{name:`Cold Snap`,description:`The nearest enemy hero in radius discards a
card, if able. **Next turn, after playing cards:**
That hero may retrieve that discarded card.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5},{name:`Frost Dagger`,description:`Target a unit adjacent to you. After the attack:
If you target a hero, that hero discards a card,
if able. **Next turn, after playing cards:**
That hero may retrieve that card.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:6},{name:`Glacial Barrier`,description:`Place an ::token_ice:: ice token in radius, adjacent
to another ice token, if able. Enemy
heroes have -1 ::initiative:: Initiative penalty for
every ice token they are adjacent to.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:`Snowstorm`,description:`Name a color. The nearest enemy hero in
radius discards a card of that color, if able.
**Next turn, after playing cards:** That hero
may retrieve a discarded card of that color.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`},{name:`Frost Spear`,description:`Target a unit adjacent to you. After the
attack: If you target a hero, name a color.
That hero discards a card of that color,
if able. **Next turn, after playing cards:**
That hero may retrieve that card.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Wall of Frost`,description:`Place up to 2 ::token_ice:: ice tokens in radius,
adjacent to another ice token, if able.
Enemy heroes have -1 ::initiative:: Initiative penalty
for every ice token they are adjacent to.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`},{name:`Guardian Spirit`,description:`If you have a card in the discard,
a friendly hero in radius may
retrieve a discarded card.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`},{name:`Spirit Wolf`,description:`If you have a card in the discard, target a
minion in range, or a hero adjacent to you.
Otherwise, target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:`DEFENSE`},{name:`Ancestral Totem`,description:`Place a ::token_totem:: totem token in radius.
If a friendly melee minion adjacent
to a totem would be defeated, you
may remove the totem instead.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Blizzard`,description:`Name a color. The nearest enemy hero in
radius discards a card of that color, if able.
**End of next turn:** That hero may retrieve
a discarded card of that color.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Frost Scepter`,description:`Target a unit adjacent to you. After the attack:
If you target a hero, name a color. That hero
discards a card of that color, if able. **End of**
**next turn:** That hero may retrieve that card.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:7,item:`MOVEMENT`},{name:`Pack Ice`,description:`Place up to 3 ::token_ice:: ice tokens in radius,
adjacent to another ice token, if able.
Enemy heroes have -1 ::initiative:: Initiative penalty
for every ice token they are adjacent to.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`},{name:`Vengeful Spirit`,description:`If you have a card in the discard,
you, or a friendly hero in radius,
may retrieve a discarded card.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`RANGE`},{name:`Spirit Bear`,description:`If you have a card in the discard,
target a unit in range. Otherwise,
target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`AREA`},{name:`Venerated Totem`,description:`Place a ::token_totem:: totem token in radius. If a
friendly minion adjacent to a totem would be
defeated, you may remove the totem instead.
Totems are immune to enemy actions.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`}],tigerclaw:[{name:`Blink Strike`,description:`Before the attack: Move 2 spaces in a straight
line through an enemy unit; Target that unit.
~(If you cannot make this move, you cannot attack). `,color:`GOLD`,initiative:13,primaryAction:`ATTACK`,primaryValue:2,secondaryMovement:2,secondaryDefense:1},{name:`Nimble Strike`,description:`Before the attack: Move 2 spaces in a straight
line through an enemy hero; target that hero.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`ATTACK`,primaryValue:1,secondaryMovement:1,secondaryDefense:1},{name:`Blend Into Shadows`,description:`If you are adjacent to an obstacle, place
yourself into a space in radius not adjacent
to an enemy unit. If you do, **Next turn:** You
are immune, and may move through units.`,color:`SILVER`,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:2},{name:`Cloak and Daggers`,description:`If you are immune: Before you perform
(or repeat) any action, move up to 2 spaces;
after you perform a basic attack, you may
repeat it once on a different target.`,color:`PURPLE`,level:4},{name:`Dodge`,description:`Block a ranged attack.`,color:`BLUE`,level:1,initiative:10,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3},{name:`Hit and Run`,description:`Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:5,secondaryDefense:3},{name:`Light-Fingered`,description:`Move up to 2 spaces, then take up to 1 coin
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:`GREEN`,level:1,initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:2},{name:`Sidestep`,description:`Block a ranged attack. If you do, you may
move 2 spaces in a straight line.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`DEFENSE`},{name:`Combat Reflexes`,description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: If you did not move before
the attack, you may move 1 space.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:5,secondaryDefense:4,item:`INITIATIVE`},{name:`Pick Pocket`,description:`Move up to 2 spaces, then take up to 2 coins
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:2,item:`ATTACK`},{name:`Parry`,description:`Block a non-ranged attack.
The attacker discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`ATTACK`},{name:`Backstab`,description:`Target a unit adjacent to you. +2 ::attack_red:: Attack
if a friendly unit is adjacent to the target.
~(A "friendly unit" is another hero or a minion on your team).`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:6,item:`DEFENSE`},{name:`Poisoned Dagger`,description:`Give a hero in range a ::marker_poison:: poison marker.
Each ::initiative:: Initiative and ::attack_silver:: Attack item of a
hero with a poison marker reduces that
value by 1, instead of increasing it by 1.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`INITIATIVE`},{name:`Evade`,description:`Block a ranged attack. If you do, you may
move 2 spaces in a straight line and you
may swap this card with a card in your hand.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`ATTACK`},{name:`Leaping Strike`,description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:5,secondaryDefense:4,item:`AREA`},{name:`Master Thief`,description:`Move up to 2 spaces, then take up to 3 coins
from an enemy hero adjacent to you.
Then move 2 spaces in a straight line, if able.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:3,item:`INITIATIVE`},{name:`Reposte`,description:`Block a non-ranged attack. The attacker
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`RANGE`},{name:`Backstab with a Ballista`,description:`Target a unit in range. +3 ::attack_red:: Attack
and this attack cannot be blocked,
if a friendly unit is adjacent to the target.
~("Block" is a keyword - the target hero can still defend!)`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:1,secondaryMovement:5,secondaryDefense:6,item:`DEFENSE`},{name:`Poisoned Dart`,description:`Give a hero in range a ::marker_poison:: poison marker.
Each ::initiative:: Initiative, ::attack_silver:: Attack, and ::defense_silver:: Defense
item of a hero with a poison marker reduce
that value by 1, instead of increasing it by 1.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`MOVEMENT`}],trinkets:[{name:`Rapid Deployment`,description:`**Choose one —**
>>You may remove the turret. Move up to
>3 spaces and place the Turret into an
>adjacent space. It counts as terrain.
>>An enemy hero in range of both you and
>the Turret discards a card, if able.
>>Defeat an enemy minion in range of both
>you and the Turret.`,color:`GOLD`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:1},{name:`Ramshackle Turret`,description:`**Choose one —**
>>You may remove the turret. Move up to
>2 spaces and place the Turret into an
>adjacent space. It counts as terrain.
>>Enemy hero in range of both you and
>the Turret discards a card, if able.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:1,secondaryMovement:3,secondaryDefense:1},{name:`Salvage Parts`,description:`**Choose one —**
>>Place the Turret into an adjacent space.
>It counts as terrain.
>>Remove the Turret. If you do, move
>up to 3 spaces.`,color:`SILVER`,initiative:5,primaryAction:`SKILL`,secondaryDefense:2},{name:`Fortified Positions`,description:`Whenever you perform an action, barrier
tokens and friendly minions count as a Turret.`,color:`PURPLE`,level:4},{name:`Disruptor Jolt`,description:`**This turn:** Enemy heroes in radius of the
Turret cannot perform non-basic skills.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3},{name:`Makeshift Minigun`,description:`Target a unit in range of both you and the
Turret. After the attack: **Next turn:**
Gain +1 ::range_red:: Range if you target a hero.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4},{name:`Early Prototype`,description:`Swap yourself, a friendly unit, or a token,
in radius of the Turret, with the Turret.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:2},{name:`Disruptor Pulse`,description:`Cancel skills with active effects of enemies in
radius of the Turret. **This turn:** Enemy heroes
in radius of the Turret cannot perform skills.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`},{name:`Gatling Gun`,description:`Target a unit in range of both you and the
Turret. After the attack: **Next turn:**
Gain +1 ::range_red:: Range; if you target a hero
with no cards in their hand with your
basic skill, defeat that hero, instead.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`},{name:`Teleportation Device`,description:`Swap yourself, a friendly unit, or a token,
in radius of the Turret, with the Turret.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`ATTACK`},{name:`Deployable Barrier`,description:`Place up to 2 ::token_barrier:: barrier tokens in radius of
the Turret and adjacent to another barrier
token, if able. You and friendly heroes gain
+1 ::defense_silver:: Defense for each adjacent barrier token.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Steam Discharge`,description:`Target a unit in range of both you and the
Turret. After the attack: One other enemy
hero in range of you and adjacent to the
Turret discards a card, if able.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Self-Destruct`,description:`Enemy heroes in radius of the Turret discard
a card, if able. Remove the Turret.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`INITIATIVE`},{name:`Disruptor Grid`,description:`Cancel skills with active effects of
enemies in radius of the Turret.
**This turn and next turn:** Enemies in
radius of the Turret cannot perform skills.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`},{name:`Repeater Cannon`,description:`Target a unit in range of both you and the
Turret. After the attack: **Next turn:**
Gain +2 ::range_red:: Range; if you target a hero
with no cards in their hand with your
basic skill, defeat that hero, instead.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:`AREA`},{name:`Perfected Design`,description:`Swap yourself, any unit, or a token,
in radius of the Turret, with the Turret.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`ATTACK`},{name:`Deployable Bastion`,description:`Place up to 3 ::token_barrier:: barrier tokens in radius of
the Turret and adjacent to another barrier
token, if able. You and friendly heroes gain
+1 ::defense_silver:: Defense for each adjacent barrier token.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`INITIATIVE`},{name:`Flame Belcher`,description:`Target a unit in range of both you and the
Turret. After the attack: One other enemy
hero in range of both you and the Turret
discards a card, if able.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`MOVEMENT`},{name:`Emergency Protocol`,description:`Enemy heroes in radius of the Turret discard
a card, or are defeated. Remove the Turret.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`RANGE`}],ursafar:[{name:`Claws That Catch`,description:`Before the attack: If you are enraged and
not adjacent to an enemy unit, move up to
1 space. Target a unit adjacent to you. After
the attack: **This round:** You are enraged.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2},{name:`Jaws That Bite`,description:`Before the attack: If you are enraged and
not adjacent to an enemy unit, move up to
1 space. Target a hero adjacent to you. After
the attack: **This round:** You are enraged.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1},{name:`Angry Roar`,description:`Push adjacent enemy minions up
to 1 space. If enraged, you may
retrieve a resolved attack card.
**This round:** You are enraged.`,color:`SILVER`,initiative:11,primaryAction:`DEFENSE_SKILL`,primaryValue:3},{name:`Unbound Fury`,description:`You are always enraged. While an active
effect on another card is also making you
enraged, gain +2 ::movement_silver:: Movement.`,color:`PURPLE`,level:4},{name:`Prowling Brute`,description:`If enraged, you may swap with an adjacent
minion after you perform this action.
~(You may choose to move 0 spaces and still swap).`,color:`BLUE`,level:1,initiative:9,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:5},{name:`Prey Drive`,description:`Target a unit adjacent to you. Before the
attack: If you are enraged and target a hero,
you may remove an enemy minion in radius.
**This round:** You are enraged.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:`Sniff Out`,description:`If not enraged, **This round:** You are enraged;
otherwise, an enemy hero in range, not
adjacent to you, or to another unit,
discards a card, if able.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:`Rampaging Beast`,description:`If enraged, you may swap with an adjacent
unit, or a token, after you perform this action.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:6,item:`DEFENSE`},{name:`Prey Abundance`,description:`Target a unit adjacent to you. Before the
attack: If you are enraged and target a hero,
you may remove an enemy minion in radius.
**This round:** You are enraged.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`},{name:`Eyes on the Prey`,description:`If not enraged, **This round:** You are enraged;
otherwise, an enemy hero in range, not
adjacent to you, or to another unit,
discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Hulking Menace`,description:`**This round:** While enraged, enemy units
cannot move through spaces adjacent to you.
~(They can move into, or out of those spaces, but not both).`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:6,item:`ATTACK`},{name:`Rip`,description:`After the attack: If you are enraged, and
the target is defeated, gain 1 extra coin.
**This round:** you are enraged.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`},{name:`Instinctive Reaction`,description:`If not enraged, **This round:** You are enraged;
otherwise, **choose one —**
>>Perform an action on your discarded card.
>>You may retrieve a discarded card.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Unstoppable Force`,description:`If enraged, you may swap with an
adjacent unit, or a token, before
or after you perform this action.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:6,item:`RANGE`},{name:`Feeding Frenzy`,description:`Target a unit adjacent to you. Before the
attack: If you are enraged and target a hero,
you may remove an enemy minion in radius.
**This round:** You are enraged.
May repeat once on a different target hero.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`},{name:`Apex Predator`,description:`If not enraged, **This round:** You are enraged;
otherwise, an enemy hero in range, not
adjacent to you, or to another unit,
discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`AREA`},{name:`Immovable Object`,description:`**This round:** While enraged, enemy units
cannot move through spaces adjacent to you.
You cannot be made to leave your space by
enemy heroes. Ignore any effects that limit,
reduce, or prevent movement.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:6,item:`ATTACK`},{name:`Tear`,description:`After the attack: If you are enraged, and
the target is defeated, gain 3 extra coins; If you
defeat a hero, that hero spends 1 extra ::life_counters::
Life counter. **This round:** you are enraged.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`},{name:`Evolutionary Response`,description:`If not enraged, **This round:** You are enraged;
otherwise, **choose one, or both —**
>>Perform an action on your discarded card.
>>You may retrieve a discarded card.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`}],wasp:[{name:`Dazzling Dagger`,description:`Target a unit adjacent to you. After the
 attack: Cancel active effects on skill
 cards of enemy heroes adjacent to you.
 **This turn:** Enemy heroes adjacent to
 you cannot perform skill actions.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Depleted Dagger`,description:`Cannot target minions. After the attack:
**This turn:** Adjacent enemy heroes
cannot perform Skills. `,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:2,secondaryMovement:1,secondaryDefense:1},{name:`Static Barrier`,description:`**This turn:** Enemy units in radius cannot
move or fast travel out of radius.
Enemy units outside of radius cannot
move or fast travel into radius.`,color:`SILVER`,initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:2},{name:`Thunder and Lightning`,description:`After you perform a basic skill one enemy
hero in play discards a card, if able.`,color:`PURPLE`,level:4},{name:`Lift Up`,description:`Move a non-adjacent unit or a token in
radius up to 1 space, without moving
it away from you, or closer to you.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:`Shock`,description:`Target an adjacent unit. Before the attack:
Up to one adjacent enemy hero, except the
target, discards a card, if able.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:6},{name:`Stop Projectiles`,description:`If the attacker is not adjacent,
block the attack.`,color:`GREEN`,level:1,initiative:4,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2},{name:`Control Gravity`,description:`Move a non-adjacent unit or a token in radius
up to 1 space, without moving it away from
you, or closer to you. May repeat once.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`},{name:`Electrocute`,description:`Target an adjacent unit. Before the attack:
Up to one enemy hero in radius, except the
target, discards a card, if able.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Deflect Projectiles`,description:`If the attacker is not adjacent, block
the attack. If you do, the attacker
discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`ATTACK`},{name:`Kinetic Repulse`,description:`Push every adjacent enemy unit 2 spaces;
each enemy hero that was stopped by an
obstacle discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`},{name:`Charged Boomerang`,description:`Cannot target units in a straight line from you.
~(Adjacent units are in a straight line as well).`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:`DEFENSE`},{name:`Telekinesis`,description:`Place a unit or a token in range, which is not
in a straight line, into a space adjacent to you.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Center of Mass`,description:`Move a non-adjacent unit or a token in radius
up to 1 space, without moving it away from
you, or closer to you. Repeat up to two times.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:`RANGE`},{name:`Electroblast`,description:`Target an adjacent unit. Before the attack:
Up to one enemy hero in radius, except the
target, discards a card, or is defeated.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`MOVEMENT`},{name:`Reflect Projectiles`,description:`If the attacker is not adjacent to you, block
the attack. If you do, the attacker discards
a card, if able, **This turn:** Only heroes
adjacent to you can target you with an attack.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`AREA`},{name:`Kinetic Blast`,description:`Push every adjacent enemy unit 3 spaces;
each enemy hero that was stopped by an
obstacle discards a card, if able.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Thunder Boomerang`,description:`Cannot target units in a straight line from you.
If you defeat an enemy hero, may repeat once.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`},{name:`Mass Telekinesis`,description:`Place a unit or a token in range, which
is not in a straight line, into a space
adjacent to you. May repeat once.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`}],whisper:[{name:`Swift Justice`,description:`**Choose one —**
>>An enemy hero in range discards a card,
>if able; then, if able, that hero moves the
>number of spaces equal to that card's
>printed movement value in a straight line.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Vile Accusation`,description:`An enemy hero in range discards a card,
if able; then, if able, that hero moves the
number of spaces equal to that card's
printed movement value in a straight line.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:2},{name:`Death Seeker`,description:`If an enemy hero in radius has a card
in the discard, **choose one —**
>>**This turn:** You are immune to attacks.
>>You may retrieve a discarded card.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:2},{name:`Grim Reaper`,description:`After you perform a basic action,
you may repeat it once, chosing
the same, or a different option.`,color:`PURPLE`,level:4},{name:`Cause Fear`,description:`Move up to 3 enemy minions in radius
up to 1 space in the same direction.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5},{name:`Blood Trail`,description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
2 spaces, then target a unit adjacent to you.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:1,secondaryMovement:4,secondaryDefense:6},{name:`Shadow Step`,description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3},{name:`Instill Dread`,description:`Move up to 3 enemy minions in radius
up to 2 spaces in the same direction;
they can be moved through obstacles.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`},{name:`Crimson Thirst`,description:`Before the attack: Move up to 1 space for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
2 spaces, then target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`},{name:`Shadow Walk`,description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`},{name:`Lesser Evil`,description:`An enemy hero in range **chooses one —**
>>That hero discards a card, if able.
>>You defeat a minion adjacent to you.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`},{name:`Sense Blood`,description:`If able, target a hero in range
with a card in their discard.
Otherwise, target an adjacent unit.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`},{name:`No Escape`,description:`If an enemy hero in radius has a card
in the discard, +2 ::movement_green:: Movement.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`MOVEMENT`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:3,secondaryDefense:3,item:`ATTACK`},{name:`Strike Terror`,description:`Move up to 3 enemy minions in radius
up to 3 spaces in the same direction;
they can be moved through obstacles.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:`AREA`},{name:`Sanguine Fury`,description:`Before the attack: Move up to 2 spaces for
every empty minion spawn point in radius
in the battle zone, up to a maximum of
4 spaces, then target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`MOVEMENT`},{name:`Creeping Shadow`,description:`Place yourself into an empty minion spawn
point in range in the battle zone, or into a
space in range adjacent to that spawn point.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Greater Good`,description:`An enemy hero in range **chooses one —**
>>That hero discards a card, or is defeated.
>>You defeat up to 3 minions adjacent to you.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:`RANGE`},{name:`Blind Frenzy`,description:`Target a hero in range with a card in the
discard, or a unit adjacent to you.
May repeat once on a different hero.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:`DEFENSE`},{name:`Dark Stalker`,description:`If an enemy hero in radius has a card
in the discard, +3 ::movement_green:: Movement.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`MOVEMENT`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:3,secondaryDefense:4,item:`ATTACK`}],wuk:[{name:`Tree Slam`,description:`If you are adjacent to a tree token, target
a unit in range, otherwise, target a minion
adjacent to you. After the attack:
If the target was adjacent to you, move it
1 space to a space adjacent to you, if able.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:3},{name:`Makeshift Weapon`,description:`Cannot attack if you are not adjacent to a tree
token. Target a unit in range. After the attack:
If the target was adjacent to you, move it 1
space to a space adjacent to you, if able.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:2},{name:`Mystic Saplings`,description:`Place up to 3 ::token_tree:: tree tokens in radius, not
adjacent to a tree token. Heroes may move
through a space with a tree token. Do not
remove the tree tokens at the end of round.`,color:`SILVER`,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:3},{name:`March of Nature`,description:`Adjacent Tree tokens in a battle zone count as
melee minions immune to ranged attacks.`,color:`PURPLE`,level:4},{name:`Gifts of Nature`,description:`If you are adjacent to a tree, you
may retrieve a discarded card.`,color:`BLUE`,level:1,initiative:8,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6},{name:`Nature's Protector`,description:`Target a unit in range, adjacent to a tree token.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:7},{name:`Toss Away`,description:`Move up to 1 space. Push an adjacent token
up to 3 spaces. If the token is pushed 2 or
more spaces, an enemy hero adjacent to
that token discards a card, if able.    `,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:3},{name:`Tree of Plenty`,description:`Either you, or a hero in radius, may
retrieve a discarded card if either
of you are adjacent to a tree.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`},{name:`Nature's Guardian`,description:`Target a unit in range, adjacent to a tree token.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`},{name:`Mighty Throw`,description:`Move up to 1 space. Push an adjacent token
or a minion up to 4 spaces. If it is pushed 2 or
more spaces, an enemy hero adjacent to that
token or a minion discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Claim Dominance`,description:`**This round:** Up to 1 adjacent non-immune
enemy minion does not count towards the
minion total during minion battle.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Trample`,description:`If you move in a straight line: You may ignore
units; if you moved through an enemy hero,
that hero discards a card, or is defeated;
defeat up to 1 minion you moved through.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`MOVEMENT`,primaryValue:4,secondaryDefense:7,item:`DEFENSE`},{name:`Into the Canopy`,description:`Swap places with a tree token in radius.
You may then place a minion adjacent to
that tree token into a space adjacent to you.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Abundance`,description:`Both you and a friendly hero in radius
may retrieve a discarded card if either
of you are adjacent to a tree.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:`RANGE`},{name:`Nature's Champion`,description:`Target a unit in range, adjacent to a tree token.
May repeat once, targeting a different hero.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:8,item:`INITIATIVE`},{name:`Monstrous Throw`,description:`Move up to 1 space. Push an adjacent unit
or a token up to 5 spaces. If it is pushed 2
or more spaces, an enemy hero adjacent to
that unit or token discards a card, if able.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`},{name:`Assert Dominance`,description:`**This round:** Up to 2 adjacent enemy minion
do not count towards the minion total during
minion battle, regardless of immunity.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:7,item:`ATTACK`},{name:`Angry Stampede`,description:`If you move in a straight line: You may ignore
units; if you moved through an enemy hero,
that hero discards a card, or is defeated;
defeat up to 2 minion you moved through.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`MOVEMENT`,primaryValue:4,secondaryDefense:8,item:`AREA`},{name:`Treetop Ride`,description:`Swap places with a tree token in radius.
You may then place a minion adjacent to that
tree token into a space adjacent to you.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`DEFENSE_SKILL`,primaryValue:4,modifier:`AREA`,modifierValue:4,secondaryMovement:2,item:`DEFENSE`}],xargatha:[{name:`Backlash`,description:`**This turn:** After you discard a card for any
reason, perform the primary action on an
attack card in your discard, if able.
~(First complete the action causing the discard).`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:2},{name:`Counter-Swing`,description:`Cannot target minions.
**This turn:** After you discard a card for any
reason, perform the primary action on an
attack card in your discard, if able.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:2,secondaryMovement:1,secondaryDefense:1},{name:`Siren's Call`,description:`Target the nearest non-immune enemy unit
in range not adjacent to you; move that unit
up to 2 spaces along the shortest valid path
towards you. May repeat once.`,color:`SILVER`,initiative:1,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryDefense:3},{name:`Metamorphosis`,description:`You may move through obstacles.
Before you perform an action, one adjacent
enemy hero discards a card, if able.`,color:`PURPLE`,level:4},{name:`Stone Gaze`,description:`**This turn:** The nearest enemy heroes
in radius are immune, cannot perform a
movement action, and count as terrain.
~(Will affect multiple heroes if they are at the same distance.)`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:`Dangerous Slash`,description:`+1 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:6},{name:`Charming Aura`,description:`**This round:** Enemy melee minions in
radius count as if on your team for the
purpose of defense modifiers.`,color:`GREEN`,level:1,initiative:5,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:2,secondaryDefense:3},{name:`Petrifying Stare`,description:`**This turn:** The nearest enemy heroes
in radius are immune, cannot perform a
movement action, and count as terrain.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Deadly Swipe`,description:`+2 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:7,item:`INITIATIVE`},{name:`Aura of Control`,description:`**This round:** Enemy ranged and melee
minions in radius count as if on your team
for the purpose of defense modifiers.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryDefense:4,item:`INITIATIVE`},{name:`Fresh Converts`,description:`If you are adjacent to a minion,
you may retrieve a discarded card.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`},{name:`Long Thrust`,description:`Target a unit not adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`},{name:`Constrict`,description:`**Next turn:** Adjacent enemy heroes cannot
move, except when performing a movement
action on a gold card or a red card.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:4,item:`ATTACK`},{name:`Turn into Statues`,description:`**This turn:** Enemy heroes in radius are
immune, cannot perform a movement
action, and count as terrain.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`},{name:`Lethal Spin`,description:`+3 ::attack_red:: Attack for every enemy
unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:7,item:`AREA`},{name:`Aura of Domination`,description:`**This round:** All enemy minions, including the
immune ones, in radius count as if on your
team for the purpose of defense modifiers.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryDefense:4,item:`INITIATIVE`},{name:`Devoted Followers`,description:`If you are adjacent to a minion, you may
retrieve a discarded card and **This turn:**
You are immune to attack actions.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`RANGE`},{name:`Rapid Thrusts`,description:`Target a unit not adjacent to you. After the
attack: If you are adjacent to an enemy hero,
may repeat once on a different target.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`MOVEMENT`},{name:`Deadly Embrace`,description:`**Next turn:** Adjacent enemy heroes
cannot move, except when performing
a movement action on a gold card.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:4,item:`DEFENSE`}]},It=p(`<div></div>`),Lt=p(`<div></div>`),Rt=p(`<div class="float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 bg-transparent"></div>`),zt=p(`<div class="float-left w-0.5 sm:w-0.75 lg:w-1 h-1"></div> <!>`,1),Bt=p(`<div class="col-span-3 h-3 xs:h-4 sm:h-5.5 lg:h-7 z-20 relative"><div class="left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 h-2.5 xs:h-3 sm:h-4 lg:h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded sm:rounded-lg lg:rounded-xl bg-dark-900 absolute"><div class="m-0.5 sm:m-0.5 lg:m-1 relative h-full"><!> <div class="float-left w-2 xs:w-3.5 sm:w-6 lg:w-7 h-full bg-transparent"></div> <!></div></div></div> <!>`,1),Vt=p(`<div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Gold I spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Gold II spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Gold III spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div>`,1),Ht=p(`<div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Blue IA spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Red IA spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Green IA spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div>`,1),Ut=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Blue tier II spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),Wt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Red tier II spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),Gt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Green tier II spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),Kt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Blue tier II extra spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),qt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Red tier II extra spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),Jt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Green tier II extra spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),Yt=p(`<div class="col-span-12 grid grid-cols-12"><div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><!></div></div>`),Xt=p(`<div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative"><!></div> <!>`,1),Zt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Blue tier III spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),Qt=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Red tier III spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),$t=p(`<div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Green tier III spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div>`),en=p(`<div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative z-0"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative z-0"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative z-0"><!></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative z-0"></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative z-0"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute overflow-hidden"><img alt="Ultimate spell card" class="w-full h-full rounded-lg sm:rounded-xl lg:rounded-3xl object-cover"/></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-19 xs:h-22 sm:h-37.5 lg:h-57 relative z-0"></div>`,1),tn=p(`<div class="w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div>`),nn=p(`<div class="col-span-12 mt-[3px] xs:mt-[2px] sm:mt-[2px] lg:mt-[0px] flex justify-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6 relative z-0"></div>`),rn=p(`<div>Show Numbers</div>`),an=p(`<div style="color: white">Show Handicap</div>`),on=p(`<div class="flex md:mt-20 mt-16 mb-52"><div class="grid grid-cols-12 m-auto"><div class="col-span-12 w-78 xs:w-96 sm:w-157 lg:w-239 h-[155px] xs:h-[190px] sm:h-[313px] lg:h-[473px] mt-4 xs:mt-5 sm:mt-7.5 lg:mt-10 relative"><div class="border border-dark-600 rounded-lg sm:rounded-xl lg:rounded-3xl left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 w-77.5 xs:w-95 sm:w-156 lg:w-237 absolute"><!> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto svelte-116f7tl"> </p> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto svelte-116f7tl"> </p> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto svelte-116f7tl"> </p> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto svelte-116f7tl"> </p> <p class="absolute text-white xs:text-xl sm:text-3xl lg:text-5xl -top-[12px] sm:-top-[16px] lg:-top-[20px] left-[8px] sm:left-[19px] lg:left-[30px] font-modesto svelte-116f7tl"> </p></div></div> <!> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="goldCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="silverCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="purpleCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div> <!> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="blueICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="redICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="greenICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas></div></div> <!> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"><div><canvas id="blueIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div> <div><canvas id="blueIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"><div><canvas id="redIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div> <div><canvas id="redIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"><div><canvas id="greenIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div> <div><canvas id="greenIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div></div> <!> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"><div><canvas id="blueIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div> <div><canvas id="blueIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"><div><canvas id="redIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div> <div><canvas id="redIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10"><div><canvas id="greenIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div> <div><canvas id="greenIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"></canvas> <!></div></div> <!> <!> <div id="showNumbers" class="col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center"><!> <!></div> <div class="col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center"><!></div></div> <p class="absolute font-modesto svelte-116f7tl"></p></div>`);function j(p,oe){ue(oe,!1);let x=S(),w=S(),E=S(),j=S(),M=S(),N=S(),P=S(),sn=S(),cn=S(),ln={duration:500,easing:me,axis:`y`},F={y:36,duration:500},un={y:-28,duration:500},dn={y:28,duration:500},fn=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`,pn=Object.assign({"../../lib/images/stat_icons/attack_white.png":_e,"../../lib/images/stat_icons/brawler_white.png":Se,"../../lib/images/stat_icons/defense_white.png":be,"../../lib/images/stat_icons/initiative_white.png":ge,"../../lib/images/stat_icons/initiator_white.png":ve,"../../lib/images/stat_icons/movement_white.png":xe,"../../lib/images/stat_icons/pusher_white.png":ye,"../../lib/images/stat_icons/support_white.png":Ce}),mn=Object.assign({"../../lib/images/avatars_full/arien.webp":rt,"../../lib/images/avatars_full/bain.webp":it,"../../lib/images/avatars_full/brogan.webp":at,"../../lib/images/avatars_full/brynn.webp":ot,"../../lib/images/avatars_full/cutter.webp":st,"../../lib/images/avatars_full/dodger.webp":ct,"../../lib/images/avatars_full/emmitt.webp":lt,"../../lib/images/avatars_full/garrus.webp":ut,"../../lib/images/avatars_full/gydion.webp":dt,"../../lib/images/avatars_full/hanu.webp":ft,"../../lib/images/avatars_full/ignatia.webp":pt,"../../lib/images/avatars_full/min.webp":mt,"../../lib/images/avatars_full/misa.webp":ht,"../../lib/images/avatars_full/mortimer.webp":gt,"../../lib/images/avatars_full/mrak.webp":_t,"../../lib/images/avatars_full/nebkher.webp":vt,"../../lib/images/avatars_full/razzle.webp":yt,"../../lib/images/avatars_full/rowenna.webp":bt,"../../lib/images/avatars_full/sabina.webp":xt,"../../lib/images/avatars_full/silverarrow.webp":St,"../../lib/images/avatars_full/snorri.webp":Ct,"../../lib/images/avatars_full/swift.webp":wt,"../../lib/images/avatars_full/takahide.webp":Tt,"../../lib/images/avatars_full/tali.webp":Et,"../../lib/images/avatars_full/tigerclaw.webp":Dt,"../../lib/images/avatars_full/trinkets.webp":Ot,"../../lib/images/avatars_full/ursafar.webp":kt,"../../lib/images/avatars_full/wasp.webp":At,"../../lib/images/avatars_full/whisper.webp":jt,"../../lib/images/avatars_full/widget.webp":Mt,"../../lib/images/avatars_full/wuk.webp":Nt,"../../lib/images/avatars_full/xargatha.webp":Pt}),hn=Object.assign({"../../lib/images/spell_cards/BlueIA.webp":Pe,"../../lib/images/spell_cards/BlueIIA.webp":Fe,"../../lib/images/spell_cards/BlueIIB.webp":tt,"../../lib/images/spell_cards/BlueIIB2.webp":Re,"../../lib/images/spell_cards/BlueIIIA.webp":nt,"../../lib/images/spell_cards/BlueIIIB.webp":et,"../../lib/images/spell_cards/GoldI.webp":Ie,"../../lib/images/spell_cards/GoldII.webp":He,"../../lib/images/spell_cards/GoldIII.webp":Ue,"../../lib/images/spell_cards/GreenIA.webp":Ke,"../../lib/images/spell_cards/GreenIIA.webp":Ye,"../../lib/images/spell_cards/GreenIIB.webp":Ve,"../../lib/images/spell_cards/GreenIIB2.webp":Be,"../../lib/images/spell_cards/GreenIIIA.webp":$e,"../../lib/images/spell_cards/GreenIIIB.webp":Ge,"../../lib/images/spell_cards/RedIA.webp":ze,"../../lib/images/spell_cards/RedIIA.webp":Ze,"../../lib/images/spell_cards/RedIIB.webp":Je,"../../lib/images/spell_cards/RedIIB2.webp":Le,"../../lib/images/spell_cards/RedIIIA.webp":We,"../../lib/images/spell_cards/RedIIIB.webp":Xe,"../../lib/images/spell_cards/Ultimate.webp":qe}),I=ce(oe,`heroName`,8),gn=ce(oe,`useNewPrinting`,8,!0),_n=S(),vn=S(),yn=S(),bn=S(),xn=S(),Sn=S(),Cn=S(),wn=S(),Tn=S(),En=S(),Dn=S(),On=S(),kn=S(),An=S(),jn=S(),Mn=S(),Nn=S(),Pn=S(),Fn=S(),In=S(),Ln=S(),Rn=S(),zn=S(),Bn=S(),Vn=S(),Hn=S(),Un=S(),Wn=S(),Gn=S(),Kn=S(),qn=S(),Jn=S(),Yn=S(),Xn=S(),Zn=S(),Qn=S(),$n=S(),er=S(),tr=S(),nr=S(),rr=S(),ir=S(),ar=S(),or=S(),sr=S(),cr=S(),lr=S(),ur=S(),dr=S(),fr=S(),pr=S(),mr=S(),hr=S(),gr=S(),_r=S(),L=S([]),vr=S([]),yr=S([]),br=S([]),xr=S([]),R=S(!1),Sr=`goa-show-numbers`,Cr=S(!1),wr=S(!1),Tr=S(!1),Er=S(!1),Dr=S(!1),Or=S(!1),kr=S(!1),Ar=S(!1),jr=S(!1),Mr=S(!1),Nr=S(!1),Pr=S(!1),Fr=S(!1),Ir=S(!1),Lr=S(!1),Rr=S(!1),zr=S(!1),Br=S(!1),Vr=S(!1),Hr=S(!1),Ur=S(!1),z=S(!1),B=S(!1),V=S(!1),H=S(!1),U=S(!1),W=S(!1),Wr=S(!1),Gr=S(!1),Kr=S(),qr=S(),Jr=S(),Yr=S(),Xr=S(),Zr=S(),Qr=S(),$r=S(),ei=S(),ti=S(),ni=S(),ri=S(),ii=S(),ai=S(),oi=S(),si=S(),ci=S(),li=S(),ui=S(),di=S(),fi=S(0),pi=S(0),mi=S(0),hi=S(0),gi=S(0),_i=S(0),vi=S(!1),G=S(!1),yi=S(!1),K=S(!1),bi=S(!1),q=S(!1),xi=S(!1),J=S(!1),Si=S(!1),Y=S(!1),Ci=S(!1),X=S(!1);function wi(e){e.target.checked&&b(G,!1)}function Ti(e){e.target.checked&&b(vi,!1)}function Ei(e){e.target.checked&&b(K,!1)}function Di(e){e.target.checked&&b(yi,!1)}function Oi(e){e.target.checked&&b(q,!1)}function ki(e){e.target.checked&&b(bi,!1)}function Ai(e){e.target.checked&&b(J,!1)}function ji(e){e.target.checked&&b(xi,!1)}function Mi(e){e.target.checked&&b(Y,!1)}function Ni(e){e.target.checked&&b(Si,!1)}function Pi(e){e.target.checked&&b(X,!1)}function Fi(e){e.target.checked&&b(Ci,!1)}function Ii(){m(vi)&&m(G)&&b(G,!1),m(yi)&&m(K)&&b(K,!1),m(bi)&&m(q)&&b(q,!1),m(xi)&&m(J)&&b(J,!1),m(Si)&&m(Y)&&b(Y,!1),m(Ci)&&m(X)&&b(X,!1)}function Li(){return`goa-hero-upgrades:${gn()?`new`:`old`}:${I()}`}function Ri(e){typeof e.blueIIalt==`boolean`&&b(z,e.blueIIalt),typeof e.redIIalt==`boolean`&&b(B,e.redIIalt),typeof e.greenIIalt==`boolean`&&b(V,e.greenIIalt),typeof e.blueIIIalt==`boolean`&&b(H,e.blueIIIalt),typeof e.redIIIalt==`boolean`&&b(U,e.redIIIalt),typeof e.greenIIIalt==`boolean`&&b(W,e.greenIIIalt),typeof e.blueIIaltChecked==`boolean`&&b(vi,e.blueIIaltChecked),typeof e.blueIImainChecked==`boolean`&&b(G,e.blueIImainChecked),typeof e.redIIaltChecked==`boolean`&&b(yi,e.redIIaltChecked),typeof e.redIImainChecked==`boolean`&&b(K,e.redIImainChecked),typeof e.greenIIaltChecked==`boolean`&&b(bi,e.greenIIaltChecked),typeof e.greenIImainChecked==`boolean`&&b(q,e.greenIImainChecked),typeof e.blueIIIaltChecked==`boolean`&&b(xi,e.blueIIIaltChecked),typeof e.blueIIImainChecked==`boolean`&&b(J,e.blueIIImainChecked),typeof e.redIIIaltChecked==`boolean`&&b(Si,e.redIIIaltChecked),typeof e.redIIImainChecked==`boolean`&&b(Y,e.redIIImainChecked),typeof e.greenIIIaltChecked==`boolean`&&b(Ci,e.greenIIIaltChecked),typeof e.greenIIImainChecked==`boolean`&&b(X,e.greenIIImainChecked),Ii()}let zi=S(localStorage.getItem(Sr)===`true`),Bi=e=>e?`gray`:`white`,Vi=S(),Hi=S(``);function Ui(e){return e==null?{min:0,max:0}:Array.isArray(e)?{min:e[0],max:e[1]}:{min:e,max:e}}function Wi(e){let{min:t,max:n}=Ui(m(Vi)?.stats?.[e]);return gn()?t:n}async function Gi(e){let t=Math.min(744,e.width),n=Math.min(1039,e.height),r=(e.width-t)/2,i=(e.height-n)/2,a=document.createElement(`canvas`);a.width=t,a.height=n;let o=a.getContext(`2d`);if(o==null)return e;o.drawImage(e,r,i,t,n,0,0,t,n);let s=new Image;return s.src=a.toDataURL(),await new Promise(t=>{s.onload=()=>t(s),s.onerror=()=>t(e)})}async function Z(e){await je(I(),e);let t=Ne.get(e);if(t instanceof HTMLImageElement)return await Gi(t)}function Q(e,t,n,r){Ae(e,t,[],r,n.color??A.GOLD,n.handicapped??!1,n.extra??!1,n.name??``,n.description??``,`i`.repeat(n.level??1),n.item??k.ATTACK,n.initiative??0,n.primaryAction??ke.ATTACK,n.primaryValue??0,n.primaryValueSign??Te.NONE,n.modifier??Oe.NONE,n.modifierValue??0,n.modifierValueSign??Te.NONE,n.secondaryMovement??0,n.secondaryDefense??0,n.secondaryAttack??null,m(fi),m(pi),m(mi),m(hi),m(gi),m(_i),m(zi),Wi(0),Wi(1),Wi(2),Wi(3))}let Ki=S();function qi(e){return mn[`../../lib/images/avatars_full/${e}.webp`]??fn}function Ji(e){return pn[`../../lib/images/stat_icons/${e}_white.png`]??fn}function $(e){return hn[`../../lib/images/spell_cards/${e}.webp`]??fn}ie(async()=>{let t=localStorage.getItem(Li());if(t)try{Ri(JSON.parse(t))}catch{}b(Cr,!0),b(Ki,qi(I())),b(vn,m(_n).getContext(`2d`)),b(Sn,m(xn).getContext(`2d`)),b(Tn,m(wn).getContext(`2d`)),b(On,m(Dn).getContext(`2d`)),b(jn,m(An).getContext(`2d`)),b(Pn,m(Nn).getContext(`2d`)),b(Ln,m(In).getContext(`2d`)),b(Bn,m(zn).getContext(`2d`)),b(Un,m(Hn).getContext(`2d`)),b(Kn,m(Gn).getContext(`2d`)),b(Yn,m(Jn).getContext(`2d`)),b(Qn,m(Zn).getContext(`2d`)),b(tr,m(er).getContext(`2d`)),b(ir,m(rr).getContext(`2d`)),b(sr,m(or).getContext(`2d`)),b(ur,m(lr).getContext(`2d`)),b(pr,m(fr).getContext(`2d`)),b(gr,m(hr).getContext(`2d`)),Promise.all([document.fonts.ready,Me()]).then(()=>{b(R,!0);let t=(gn()?Qe:Ft)[I()];t!=null&&(b(Kr,t.find(e=>e.color==A.GOLD.toUpperCase())),b(qr,t.find(e=>e.color==A.GOLD.toUpperCase()&&e.handicapped)),b(Jr,t.find(e=>e.color==A.SILVER.toUpperCase())),b(Yr,t.find(e=>e.color==A.SILVER.toUpperCase()&&e.handicapped)),b(Xr,t.find(e=>e.color==A.PURPLE.toUpperCase())),b(Zr,t.find(e=>e.color==A.BLUE.toUpperCase()&&e.level==1)),b(Qr,t.find(e=>e.color==A.RED.toUpperCase()&&e.level==1)),b($r,t.find(e=>e.color==A.GREEN.toUpperCase()&&e.level==1)),b(ei,t.find(e=>e.color==A.BLUE.toUpperCase()&&e.level==2&&e.variant?.first==1)),b(ti,t.find(e=>e.color==A.RED.toUpperCase()&&e.level==2&&e.variant?.first==1)),b(ni,t.find(e=>e.color==A.GREEN.toUpperCase()&&e.level==2&&e.variant?.first==1)),b(ri,t.find(e=>e.color==A.BLUE.toUpperCase()&&e.level==2&&e.variant?.first==2)),b(ii,t.find(e=>e.color==A.RED.toUpperCase()&&e.level==2&&e.variant?.first==2)),b(ai,t.find(e=>e.color==A.GREEN.toUpperCase()&&e.level==2&&e.variant?.first==2)),b(oi,t.find(e=>e.color==A.BLUE.toUpperCase()&&e.level==3&&e.variant?.first==1)),b(si,t.find(e=>e.color==A.RED.toUpperCase()&&e.level==3&&e.variant?.first==1)),b(ci,t.find(e=>e.color==A.GREEN.toUpperCase()&&e.level==3&&e.variant?.first==1)),b(li,t.find(e=>e.color==A.BLUE.toUpperCase()&&e.level==3&&e.variant?.first==2)),b(ui,t.find(e=>e.color==A.RED.toUpperCase()&&e.level==3&&e.variant?.first==2)),b(di,t.find(e=>e.color==A.GREEN.toUpperCase()&&e.level==3&&e.variant?.first==2)),b(L,t.filter(e=>e.extra).sort((e,t)=>(e.variant?.first??0)-(t.variant?.first??0))),b(vr,m(L).map(()=>void 0)),b(yr,m(L).map(()=>void 0)),b(br,m(L).map(()=>void 0)),b(xr,m(L).map(()=>!1)),e().then(()=>{b(yr,m(vr).map(e=>e?.getContext(`2d`)??void 0))}),m(L).forEach((e,t)=>{Z(`Extra${t+1}`).then(e=>{se(br,m(br)[t]=e),se(xr,m(xr)[t]=!0),b(xr,[...m(xr)])})}),(m(wr)||m(P)&&m(Tr))&&Q(m(_n),m(vn),m(P)&&m(qr)?m(qr):m(Kr),m(P)&&m(qr)?m(bn):m(yn)),(m(Er)||m(P)&&m(Yr))&&Q(m(xn),m(Sn),m(P)&&m(Yr)?m(Yr):m(Jr),m(P)&&m(Yr)?m(bn):m(Cn)),m(Or)&&Q(m(wn),m(Tn),m(Xr),m(En)),m(kr)&&Q(m(Dn),m(On),m(Zr),m(kn)),m(Ar)&&Q(m(An),m(jn),m(Qr),m(Mn)),m(jr)&&Q(m(Nn),m(Pn),m($r),m(Fn)),m(Mr)&&Q(m(In),m(Ln),m(ei),m(Rn)),m(Nr)&&Q(m(Hn),m(Un),m(ti),m(Wn)),m(Pr)&&Q(m(Jn),m(Yn),m(ni),m(Xn)),m(Fr)&&Q(m(zn),m(Bn),m(ri),m(Vn)),m(Ir)&&Q(m(Gn),m(Kn),m(ii),m(qn)),m(Lr)&&Q(m(Zn),m(Qn),m(ai),m($n)),m(Rr)&&Q(m(er),m(tr),m(oi),m(nr)),m(zr)&&Q(m(or),m(sr),m(si),m(cr)),m(Br)&&Q(m(fr),m(pr),m(ci),m(mr)),m(Vr)&&Q(m(rr),m(ir),m(li),m(ar)),m(Hr)&&Q(m(lr),m(ur),m(ui),m(dr)),m(Ur)&&Q(m(hr),m(gr),m(di),m(_r)))}),Z(`BlueIA`).then(e=>{b(kn,e),b(kr,!0)}),Z(`BlueIIA`).then(e=>{b(Rn,e),b(Mr,!0)}),Z(`BlueIIB`).then(e=>{b(Vn,e),b(Fr,!0)}),Z(`BlueIIIA`).then(e=>{b(nr,e),b(Rr,!0)}),Z(`BlueIIIB`).then(e=>{b(ar,e),b(Vr,!0)}),Z(`Gold`).then(e=>{b(yn,e),b(wr,!0)}),Z(`GreenIA`).then(e=>{b(Fn,e),b(jr,!0)}),Z(`GreenIIA`).then(e=>{b(Xn,e),b(Pr,!0)}),Z(`GreenIIB`).then(e=>{b($n,e),b(Lr,!0)}),Z(`GreenIIIA`).then(e=>{b(mr,e),b(Br,!0)}),Z(`GreenIIIB`).then(e=>{b(_r,e),b(Ur,!0)}),Z(`Handicap`).then(e=>{b(bn,e),m(Yr)==null?b(Tr,!0):b(Dr,!0)}),Z(`RedIA`).then(e=>{b(Mn,e),b(Ar,!0)}),Z(`RedIIA`).then(e=>{b(Wn,e),b(Nr,!0)}),Z(`RedIIB`).then(e=>{b(qn,e),b(Ir,!0)}),Z(`RedIIIA`).then(e=>{b(cr,e),b(zr,!0)}),Z(`RedIIIB`).then(e=>{b(dr,e),b(Hr,!0)}),Z(`Silver`).then(e=>{b(Cn,e),b(Er,!0)}),Z(`Ultimate`).then(e=>{b(En,e),b(Or,!0)})});function Yi(){m(z)&&b(x,!0)}function Xi(){m(z)&&b(x,!1)}function Zi(){m(z)||b(x,!0)}function Qi(){m(z)||b(x,!1)}function $i(){b(x,!1),b(z,!m(z))}function ea(){b(x,!1),b(z,!m(z))}function ta(){m(B)&&b(w,!0)}function na(){m(B)&&b(w,!1)}function ra(){m(B)||b(w,!0)}function ia(){m(B)||b(w,!1)}function aa(){b(w,!1),b(B,!m(B))}function oa(){b(w,!1),b(B,!m(B))}function sa(){m(V)&&b(E,!0)}function ca(){m(V)&&b(E,!1)}function la(){m(V)||b(E,!0)}function ua(){m(V)||b(E,!1)}function da(){b(E,!1),b(V,!m(V))}function fa(){b(E,!1),b(V,!m(V))}function pa(){m(H)&&b(j,!0)}function ma(){m(H)&&b(j,!1)}function ha(){m(H)||b(j,!0)}function ga(){m(H)||b(j,!1)}function _a(){b(j,!1),b(H,!m(H))}function va(){b(j,!1),b(H,!m(H))}function ya(){m(U)&&b(M,!0)}function ba(){m(U)&&b(M,!1)}function xa(){m(U)||b(M,!0)}function Sa(){m(U)||b(M,!1)}function Ca(){b(M,!1),b(U,!m(U))}function wa(){b(M,!1),b(U,!m(U))}function Ta(){m(W)&&b(N,!0)}function Ea(){m(W)&&b(N,!1)}function Da(){m(W)||b(N,!0)}function Oa(){m(W)||b(N,!1)}function ka(){b(N,!1),b(W,!m(W))}function Aa(){b(N,!1),b(W,!m(W))}let ja=0;function Ma(){ja++,ja>=10&&b(sn,!1)}C(()=>{},()=>{b(x,!1)}),C(()=>{},()=>{b(w,!1)}),C(()=>{},()=>{b(E,!1)}),C(()=>{},()=>{b(j,!1)}),C(()=>{},()=>{b(M,!1)}),C(()=>{},()=>{b(N,!1)}),C(()=>{},()=>{b(P,!1)}),C(()=>(m(vi),m(G),m(yi),m(K),m(bi),m(q),m(xi),m(J),m(Si),m(Y),m(Ci),m(X),m(zi),m(P),m(wr),m(Tr),m(Er),m(Dr),m(Or),m(kr),m(Ar),m(jr),m(Mr),m(Nr),m(Pr),m(Fr),m(Ir),m(Lr),m(Rr),m(zr),m(Br),m(Vr),m(Hr),m(Ur),m(ri),m(ei),m(ii),m(ti),m(ai),m(ni),m(li),m(oi),m(ui),m(si),m(di),m(ci),m(R),m(_n),m(vn),m(qr),m(Kr),m(bn),m(yn),m(xn),m(Sn),m(Yr),m(Jr),m(Cn),m(wn),m(Tn),m(Xr),m(En),m(Dn),m(On),m(Zr),m(kn),m(An),m(jn),m(Qr),m(Mn),m(Nn),m(Pn),m($r),m(Fn),m(In),m(Ln),m(Rn),m(Hn),m(Un),m(Wn),m(Jn),m(Yn),m(Xn),m(zn),m(Bn),m(Vn),m(Gn),m(Kn),m(qn),m(Zn),m(Qn),m($n),m(er),m(tr),m(nr),m(or),m(sr),m(cr),m(fr),m(pr),m(mr),m(rr),m(ir),m(ar),m(lr),m(ur),m(dr),m(hr),m(gr),m(_r),m(L),m(vr),m(yr),m(br),m(xr)),()=>{m(vi),m(G),m(yi),m(K),m(bi),m(q),m(xi),m(J),m(Si),m(Y),m(Ci),m(X),m(zi),m(P),m(wr),m(Tr),m(Er),m(Dr),m(Or),m(kr),m(Ar),m(jr),m(Mr),m(Nr),m(Pr),m(Fr),m(Ir),m(Lr),m(Rr),m(zr),m(Br),m(Vr),m(Hr),m(Ur);let e=m(G)?!0:m(vi)?!1:null,t=m(K)?!0:m(yi)?!1:null,n=m(q)?!0:m(bi)?!1:null,r=m(J)?!0:m(xi)?!1:null,i=m(Y)?!0:m(Si)?!1:null,a=m(X)?!0:m(Ci)?!1:null,o={};o[k.INITIATIVE]=0,o[k.ATTACK]=0,o[k.DEFENSE]=0,o[k.AREA]=0,o[k.RANGE]=0,o[k.MOVEMENT]=0;let s=e=>{e?.item&&(o[e.item]+=1)};e===!0&&s(m(ri)),e===!1&&s(m(ei)),t===!0&&s(m(ii)),t===!1&&s(m(ti)),n===!0&&s(m(ai)),n===!1&&s(m(ni)),r===!0&&s(m(li)),r===!1&&s(m(oi)),i===!0&&s(m(ui)),i===!1&&s(m(si)),a===!0&&s(m(di)),a===!1&&s(m(ci)),b(fi,o[k.INITIATIVE]),b(pi,o[k.ATTACK]),b(mi,o[k.DEFENSE]),b(hi,o[k.AREA]),b(gi,o[k.RANGE]),b(_i,o[k.MOVEMENT]),m(R)&&(m(wr)||m(Tr))&&Q(m(_n),m(vn),m(P)&&m(qr)?m(qr):m(Kr),m(P)&&m(qr)?m(bn):m(yn)),m(R)&&(m(Er)||m(Dr))&&Q(m(xn),m(Sn),m(P)&&m(Yr)?m(Yr):m(Jr),m(P)&&m(Yr)?m(bn):m(Cn)),m(R)&&m(Or)&&Q(m(wn),m(Tn),m(Xr),m(En)),m(R)&&m(kr)&&Q(m(Dn),m(On),m(Zr),m(kn)),m(R)&&m(Ar)&&Q(m(An),m(jn),m(Qr),m(Mn)),m(R)&&m(jr)&&Q(m(Nn),m(Pn),m($r),m(Fn)),m(R)&&m(Mr)&&Q(m(In),m(Ln),m(ei),m(Rn)),m(R)&&m(Nr)&&Q(m(Hn),m(Un),m(ti),m(Wn)),m(R)&&m(Pr)&&Q(m(Jn),m(Yn),m(ni),m(Xn)),m(R)&&m(Fr)&&Q(m(zn),m(Bn),m(ri),m(Vn)),m(R)&&m(Ir)&&Q(m(Gn),m(Kn),m(ii),m(qn)),m(R)&&m(Lr)&&Q(m(Zn),m(Qn),m(ai),m($n)),m(R)&&m(Rr)&&Q(m(er),m(tr),m(oi),m(nr)),m(R)&&m(zr)&&Q(m(or),m(sr),m(si),m(cr)),m(R)&&m(Br)&&Q(m(fr),m(pr),m(ci),m(mr)),m(R)&&m(Vr)&&Q(m(rr),m(ir),m(li),m(ar)),m(R)&&m(Hr)&&Q(m(lr),m(ur),m(ui),m(dr)),m(R)&&m(Ur)&&Q(m(hr),m(gr),m(di),m(_r));for(let e=0;e<m(L).length;e++){let t=m(vr)[e],n=m(yr)[e],r=m(br)[e];m(R)&&m(xr)[e]&&t&&n&&r&&Q(t,n,m(L)[e],r)}}),C(()=>m(zi),()=>{localStorage.setItem(Sr,`${m(zi)}`)}),C(()=>(m(Cr),m(z),m(B),m(V),m(H),m(U),m(W),m(vi),m(G),m(yi),m(K),m(bi),m(q),m(xi),m(J),m(Si),m(Y),m(Ci),m(X)),()=>{if(m(Cr)){let e={blueIIalt:m(z),redIIalt:m(B),greenIIalt:m(V),blueIIIalt:m(H),redIIIalt:m(U),greenIIIalt:m(W),blueIIaltChecked:m(vi),blueIImainChecked:m(G),redIIaltChecked:m(yi),redIImainChecked:m(K),greenIIaltChecked:m(bi),greenIImainChecked:m(q),blueIIIaltChecked:m(xi),blueIIImainChecked:m(J),redIIIaltChecked:m(Si),redIIImainChecked:m(Y),greenIIIaltChecked:m(Ci),greenIIImainChecked:m(X)};localStorage.setItem(Li(),JSON.stringify(e))}}),C(()=>{},()=>{b(sn,!0)}),C(()=>(ee(gn()),we),()=>{b(cn,gn()?we.slice(0,4):we)}),C(()=>(ee(gn()),ee(I()),De),()=>{b(Vi,gn()?Ee[I()]:De[I()])}),C(()=>m(Vi),()=>{b(Hi,m(Vi)?`${m(Vi).name} ${m(Vi).title}`:``)}),C(()=>ee(I()),()=>{b(Wr,I()===`gydion`)}),C(()=>(m(z),m(B),m(V)),()=>{b(Gr,m(z)||m(B)||m(V))}),ae(),ne();var Na=on(),Pa=T(Na),Fa=T(Pa),Ia=T(Fa),La=T(Ia);pe(La,{get src(){return m(Ki)},class:`rounded-lg sm:rounded-xl lg:rounded-3xl`});var Ra=y(La,2),za=T(Ra,!0);l(Ra);var Ba=y(Ra,2),Va=T(Ba,!0);l(Ba);var Ha=y(Ba,2),Ua=T(Ha,!0);l(Ha);var Wa=y(Ha,2),Ga=T(Wa,!0);l(Wa);var Ka=y(Wa,2),qa=T(Ka,!0);l(Ka),l(Ia),l(Fa);var Ja=y(Fa,2);s(Ja,1,()=>m(cn),u,(e,n,a)=>{let c=te(()=>(m(Vi),_(()=>Ui(m(Vi)?.stats?.[a]))));var p=Bt(),ne=re(p),v=T(ne),b=T(v),ie=T(b);{let e=te(()=>(m(n),_(()=>Ji(m(n)))));pe(ie,{get src(){return m(e)},class:`absolute w-2 xs:w-2.5 sm:w-3.75 lg:w-5 z-30 -top-0.5 sm:-top-0.75 lg:-top-1.25 xs:left-0.5 sm:left-0.75 lg:left-1`})}s(y(ie,4),0,()=>Array(8),u,(e,n,r)=>{var a=zt(),o=y(re(a),2),s=e=>{var t=It();h(()=>d(t,1,`z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-${I()??``}`,`svelte-116f7tl`)),i(e,t)},l=e=>{var t=Lt();h(()=>d(t,1,`z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-${I()??``} opacity-50`,`svelte-116f7tl`)),i(e,t)},u=e=>{i(e,Rt())};t(o,e=>{ee(m(c)),_(()=>m(c).min>r)?e(s):(ee(m(c)),_(()=>m(c).max>r)?e(l,1):e(u,-1))}),i(e,a)}),l(b),l(v),l(ne),he(y(ne,2),{get triggeredBy(){return`#${m(n)??``}`},placement:`top`,class:`z-50`,children:(e,t)=>{r();var a=o();h(e=>f(a,e),[()=>(m(n),_(()=>m(n).charAt(0).toUpperCase()+m(n).slice(1)))]),i(e,a)},$$slots:{default:!0}}),h(()=>g(ne,`id`,m(n))),i(e,p)});var Ya=y(Ja,2),Xa=T(Ya);v(T(Xa),e=>b(_n,e),()=>m(_n)),l(Xa),l(Ya);var Za=y(Ya,2),Qa=T(Za);v(T(Qa),e=>b(xn,e),()=>m(xn)),l(Qa),l(Za);var $a=y(Za,2),eo=T($a);v(T(eo),e=>b(wn,e),()=>m(wn)),l(eo),l($a);var to=y($a,2),no=e=>{var t=Vt(),n=re(t),r=T(n),a=T(r);l(r),l(n);var o=y(n,2),s=T(o),u=T(s);l(s),l(o);var d=y(o,2),f=T(d),p=T(f);l(f),l(d),h((e,t,n)=>{g(a,`src`,e),g(u,`src`,t),g(p,`src`,n)},[()=>_(()=>$(`GoldI`)),()=>_(()=>$(`GoldII`)),()=>_(()=>$(`GoldIII`))]),c(1,n,()=>D,()=>F),c(2,n,()=>D,()=>F),c(1,o,()=>D,()=>F),c(2,o,()=>D,()=>F),c(1,d,()=>D,()=>F),c(2,d,()=>D,()=>F),i(e,t)};t(to,e=>{m(Wr)&&e(no)});var ro=y(to,2),io=T(ro);v(T(io),e=>b(Dn,e),()=>m(Dn)),l(io),l(ro);var ao=y(ro,2),oo=T(ao);v(T(oo),e=>b(An,e),()=>m(An)),l(oo),l(ao);var so=y(ao,2),co=T(so);v(T(co),e=>b(Nn,e),()=>m(Nn)),l(co),l(so);var lo=y(so,2),uo=e=>{var t=Ht(),n=re(t),r=T(n),a=T(r);l(r),l(n);var o=y(n,2),s=T(o),u=T(s);l(s),l(o);var d=y(o,2),f=T(d),p=T(f);l(f),l(d),h((e,t,n)=>{g(a,`src`,e),g(u,`src`,t),g(p,`src`,n)},[()=>_(()=>$(`BlueIA`)),()=>_(()=>$(`RedIA`)),()=>_(()=>$(`GreenIA`))]),c(1,n,()=>D,()=>F),c(2,n,()=>D,()=>F),c(1,o,()=>D,()=>F),c(2,o,()=>D,()=>F),c(1,d,()=>D,()=>F),c(2,d,()=>D,()=>F),i(e,t)};t(lo,e=>{m(Wr)&&e(uo)});var fo=y(lo,2),po=T(fo),mo=T(po);v(mo,e=>b(zn,e),()=>m(zn)),O(y(mo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(vi)},set checked(e){b(vi,e)},$$events:{change:wi},$$legacy:!0}),l(po);var ho=y(po,2),go=T(ho);v(go,e=>b(In,e),()=>m(In)),O(y(go,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(G)},set checked(e){b(G,e)},$$events:{change:Ti},$$legacy:!0}),l(ho),l(fo);var _o=y(fo,2),vo=T(_o),yo=T(vo);v(yo,e=>b(Gn,e),()=>m(Gn)),O(y(yo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(yi)},set checked(e){b(yi,e)},$$events:{change:Ei},$$legacy:!0}),l(vo);var bo=y(vo,2),xo=T(bo);v(xo,e=>b(Hn,e),()=>m(Hn)),O(y(xo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(K)},set checked(e){b(K,e)},$$events:{change:Di},$$legacy:!0}),l(bo),l(_o);var So=y(_o,2),Co=T(So),wo=T(Co);v(wo,e=>b(Zn,e),()=>m(Zn)),O(y(wo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(bi)},set checked(e){b(bi,e)},$$events:{change:Oi},$$legacy:!0}),l(Co);var To=y(Co,2),Eo=T(To);v(Eo,e=>b(Jn,e),()=>m(Jn)),O(y(Eo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(q)},set checked(e){b(q,e)},$$events:{change:ki},$$legacy:!0}),l(To),l(So);var Do=y(So,2),Oo=e=>{var n=Xt(),r=re(n);de(T(r),()=>m(z),e=>{var t=Ut(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>(m(z),_(()=>$(m(z)?`BlueIIB`:`BlueIIA`)))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)}),l(r);var a=y(r,2);de(T(a),()=>m(B),e=>{var t=Wt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>(m(B),_(()=>$(m(B)?`RedIIB`:`RedIIA`)))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)}),l(a);var o=y(a,2);de(T(o),()=>m(V),e=>{var t=Gt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>(m(V),_(()=>$(m(V)?`GreenIIB`:`GreenIIA`)))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)}),l(o);var s=y(o,2),u=e=>{var n=Yt(),r=T(n),a=T(r),o=e=>{var t=Kt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>_(()=>$(`BlueIIB2`))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)};t(a,e=>{m(z)&&e(o)}),l(r);var s=y(r,2),u=T(s),d=e=>{var t=qt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>_(()=>$(`RedIIB2`))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)};t(u,e=>{m(B)&&e(d)}),l(s);var f=y(s,2),p=T(f),ee=e=>{var t=Jt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>_(()=>$(`GreenIIB2`))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)};t(p,e=>{m(V)&&e(ee)}),l(f),l(n),c(3,n,()=>fe,()=>ln),i(e,n)};t(s,e=>{m(Gr)&&e(u)}),c(1,r,()=>D,()=>F),c(2,r,()=>D,()=>F),c(1,a,()=>D,()=>F),c(2,a,()=>D,()=>F),c(1,o,()=>D,()=>F),c(2,o,()=>D,()=>F),i(e,n)};t(Do,e=>{m(Wr)&&e(Oo)});var ko=y(Do,2),Ao=T(ko),jo=T(Ao);v(jo,e=>b(rr,e),()=>m(rr)),O(y(jo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(xi)},set checked(e){b(xi,e)},$$events:{change:Ai},$$legacy:!0}),l(Ao);var Mo=y(Ao,2),No=T(Mo);v(No,e=>b(er,e),()=>m(er)),O(y(No,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(J)},set checked(e){b(J,e)},$$events:{change:ji},$$legacy:!0}),l(Mo),l(ko);var Po=y(ko,2),Fo=T(Po),Io=T(Fo);v(Io,e=>b(lr,e),()=>m(lr)),O(y(Io,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(Si)},set checked(e){b(Si,e)},$$events:{change:Mi},$$legacy:!0}),l(Fo);var Lo=y(Fo,2),Ro=T(Lo);v(Ro,e=>b(or,e),()=>m(or)),O(y(Ro,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(Y)},set checked(e){b(Y,e)},$$events:{change:Ni},$$legacy:!0}),l(Lo),l(Po);var zo=y(Po,2),Bo=T(zo),Vo=T(Bo);v(Vo,e=>b(hr,e),()=>m(hr)),O(y(Vo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(Ci)},set checked(e){b(Ci,e)},$$events:{change:Pi},$$legacy:!0}),l(Bo);var Ho=y(Bo,2),Uo=T(Ho);v(Uo,e=>b(fr,e),()=>m(fr)),O(y(Uo,2),{class:`absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full`,get checked(){return m(X)},set checked(e){b(X,e)},$$events:{change:Fi},$$legacy:!0}),l(Ho),l(zo);var Wo=y(zo,2),Go=e=>{var t=en(),n=re(t);de(T(n),()=>m(H),e=>{var t=Zt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>(m(H),_(()=>$(m(H)?`BlueIIIB`:`BlueIIIA`)))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)}),l(n);var a=y(n,2);de(T(a),()=>m(U),e=>{var t=Qt(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>(m(U),_(()=>$(m(U)?`RedIIIB`:`RedIIIA`)))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)}),l(a);var o=y(a,2);de(T(o),()=>m(W),e=>{var t=$t(),n=T(t);l(t),h(e=>g(n,`src`,e),[()=>(m(W),_(()=>$(m(W)?`GreenIIIB`:`GreenIIIA`)))]),c(1,t,()=>D,()=>dn),c(2,t,()=>D,()=>un),i(e,t)}),l(o);var s=y(o,4),u=T(s),d=T(u);l(u),l(s),r(2),h(e=>g(d,`src`,e),[()=>_(()=>$(`Ultimate`))]),c(1,n,()=>D,()=>F),c(2,n,()=>D,()=>F),c(1,a,()=>D,()=>F),c(2,a,()=>D,()=>F),c(1,o,()=>D,()=>F),c(2,o,()=>D,()=>F),c(1,s,()=>D,()=>F),c(2,s,()=>D,()=>F),i(e,t)};t(Wo,e=>{m(Wr)&&e(Go)});var Ko=y(Wo,2),qo=e=>{var t=nn();s(t,5,()=>m(L),u,(e,t,n)=>{var r=tn(),a=T(r);v(T(a),(e,t)=>se(vr,m(vr)[t]=e),e=>m(vr)?.[e],()=>[n]),l(a),l(r),i(e,r)}),l(t),i(e,t)};t(Ko,e=>{m(L),_(()=>m(L).length>0)&&e(qo)});var Jo=y(Ko,2),Yo=T(Jo);O(Yo,{get disabled(){return m(sn)},get checked(){return m(zi)},set checked(e){b(zi,e)},children:(e,t)=>{var n=rn();h(e=>le(n,`color: ${e??``}`),[()=>(m(sn),_(()=>Bi(m(sn))))]),i(e,n)},$$slots:{default:!0},$$legacy:!0}),he(y(Yo,2),{triggeredBy:`#showNumbers`,placement:`bottom`,class:`z-50`,children:(e,t)=>{r(),i(e,o(`Disabled by the developer's request`))},$$slots:{default:!0}}),l(Jo);var Xo=y(Jo,2);O(T(Xo),{get checked(){return m(P)},set checked(e){b(P,e)},children:(e,t)=>{i(e,an())},$$slots:{default:!0},$$legacy:!0}),l(Xo),l(Pa),r(2),l(Na),h(()=>{f(za,m(Hi)),f(Va,m(Hi)),f(Ua,m(Hi)),f(Ga,m(Hi)),f(qa,m(Hi)),d(po,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(z)?`mainCardII`:m(x)?`downCardII`:`altCardII`}`,`svelte-116f7tl`),d(ho,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(z)?m(x)?`downCardII`:`altCardII`:`mainCardII`}`,`svelte-116f7tl`),d(vo,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(B)?`mainCardII`:m(w)?`downCardII`:`altCardII`}`,`svelte-116f7tl`),d(bo,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(B)?m(w)?`downCardII`:`altCardII`:`mainCardII`}`,`svelte-116f7tl`),d(Co,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(V)?`mainCardII`:m(E)?`downCardII`:`altCardII`}`,`svelte-116f7tl`),d(To,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(V)?m(E)?`downCardII`:`altCardII`:`mainCardII`}`,`svelte-116f7tl`),d(Ao,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(H)?`mainCardIII`:m(j)?`downCardIII`:`altCardIII`}`,`svelte-116f7tl`),d(Mo,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(H)?m(j)?`downCardIII`:`altCardIII`:`mainCardIII`}`,`svelte-116f7tl`),d(Fo,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(U)?`mainCardIII`:m(M)?`downCardIII`:`altCardIII`}`,`svelte-116f7tl`),d(Lo,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(U)?m(M)?`downCardIII`:`altCardIII`:`mainCardIII`}`,`svelte-116f7tl`),d(Bo,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(W)?`mainCardIII`:m(N)?`downCardIII`:`altCardIII`}`,`svelte-116f7tl`),d(Ho,1,`border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 ${m(W)?m(N)?`downCardIII`:`altCardIII`:`mainCardIII`}`,`svelte-116f7tl`)}),a(`click`,Ia,Ma),a(`click`,mo,ea),a(`pointerleave`,mo,Qi),a(`pointerenter`,mo,Zi),a(`click`,go,$i),a(`pointerleave`,go,Xi),a(`pointerenter`,go,Yi),a(`click`,yo,oa),a(`pointerleave`,yo,ia),a(`pointerenter`,yo,ra),a(`click`,xo,aa),a(`pointerleave`,xo,na),a(`pointerenter`,xo,ta),a(`click`,wo,fa),a(`pointerleave`,wo,ua),a(`pointerenter`,wo,la),a(`click`,Eo,da),a(`pointerleave`,Eo,ca),a(`pointerenter`,Eo,sa),a(`click`,jo,va),a(`pointerleave`,jo,ga),a(`pointerenter`,jo,ha),a(`click`,No,_a),a(`pointerleave`,No,ma),a(`pointerenter`,No,pa),a(`click`,Io,wa),a(`pointerleave`,Io,Sa),a(`pointerenter`,Io,xa),a(`click`,Ro,Ca),a(`pointerleave`,Ro,ba),a(`pointerenter`,Ro,ya),a(`click`,Vo,Aa),a(`pointerleave`,Vo,Oa),a(`pointerenter`,Vo,Da),a(`click`,Uo,ka),a(`pointerleave`,Uo,Ea),a(`pointerenter`,Uo,Ta),i(p,Na),n()}function M(e,t){throw new E(e,t)}var N=p(`<meta name="description"/>`);function P(e,t){ue(t,!1);let r=ce(t,`data`,8)().url.substring(1),a=S(``),o=new URLSearchParams(window.location.search).get(`printing`)!==`old`;C(()=>M,()=>{if(o&&!(r in Ee))throw M(404)}),C(()=>M,()=>{if(!o&&!(r in De))throw M(404)}),C(()=>De,()=>{b(a,o?Ee[r].name:De[r].name)}),ae(),ne(),oe(`qu11qx`,e=>{var t=N();h(()=>g(t,`content`,`Guards of Atlantis II card collection for ${m(a)??``}.`)),w(()=>{x.title=m(a)??``}),i(e,t)}),j(e,{get heroName(){return r},get useNewPrinting(){return o}}),n()}export{P as component};