var e=``+new URL(`../assets/BlueIA.DWTsg3fV.webp`,import.meta.url).href,t=``+new URL(`../assets/BlueIIA.B9256NPZ.webp`,import.meta.url).href,n=``+new URL(`../assets/BlueIIB.CfHbmUhw.webp`,import.meta.url).href,r=``+new URL(`../assets/BlueIIB2.Cn_StHL4.webp`,import.meta.url).href,i=``+new URL(`../assets/BlueIIIA.BvpRXzyu.webp`,import.meta.url).href,a=``+new URL(`../assets/BlueIIIB.CFg2gwx9.webp`,import.meta.url).href,o=``+new URL(`../assets/GoldI.BypYJxas.webp`,import.meta.url).href,s=``+new URL(`../assets/GoldII.CmttgqqP.webp`,import.meta.url).href,c=``+new URL(`../assets/GoldIII.C3_9wu3y.webp`,import.meta.url).href,l=``+new URL(`../assets/GreenIA.BiOo8Ype.webp`,import.meta.url).href,u=``+new URL(`../assets/GreenIIA.DGmsrHH6.webp`,import.meta.url).href,d=``+new URL(`../assets/GreenIIB.DfJsiIXR.webp`,import.meta.url).href,f=``+new URL(`../assets/GreenIIB2.ByQn05IT.webp`,import.meta.url).href,p=``+new URL(`../assets/GreenIIIA.Bcl7-gfh.webp`,import.meta.url).href,m=``+new URL(`../assets/GreenIIIB.vMqJPJrM.webp`,import.meta.url).href,h=``+new URL(`../assets/RedIA.Do-Ha8m4.webp`,import.meta.url).href,g=``+new URL(`../assets/RedIIA.CpqNg2Qo.webp`,import.meta.url).href,_=``+new URL(`../assets/RedIIB.Bx7FUn8M.webp`,import.meta.url).href,v=``+new URL(`../assets/RedIIB2.BeSs5kAF.webp`,import.meta.url).href,y=``+new URL(`../assets/RedIIIA.BKF7X9nx.webp`,import.meta.url).href,b=``+new URL(`../assets/RedIIIB.DWUu67ad.webp`,import.meta.url).href,x=``+new URL(`../assets/Ultimate.NlXEczVG.webp`,import.meta.url).href,S={arien:[{name:`Noble Blade`,description:`Target a unit adjacent to you.
Before the attack: You may move another
unit that is adjacent to the target 1 space.
~("Another unit" never includes you.)`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`MOVING_UNITS`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Ceremonial Blade`,description:`Target a hero adjacent to you.
Before the attack: You may move a minion
that is adjacent to the target 1 space.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`MOVING_MINIONS`,`BEFORE_THE_ATTACK`,`ATTACK_HERO`]},{name:`Spell Break`,description:`**This turn:** Enemy heroes in radius cannot
perform skill actions, except on gold cards.
~(Skill ::skill_silver:: is an action type. Other action types are unaffected.)`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:3,traits:[`THIS_TURN`]},{name:`Living Tsunami`,description:`Once per turn, before performing an
Attack action, you may move 1 space.`,color:`PURPLE`,level:4,traits:[`MOVING_SELF`]},{name:`Aspiring Duelist`,description:`Ignore all minion defense modifiers.
~(This includes your minions, as well as enemy minions.)`,color:`BLUE`,level:1,initiative:9,primaryAction:`DEFENSE`,primaryValue:5,secondaryMovement:3},{name:`Dangerous Current`,description:`Target a unit adjacent to you. Before the
attack: Up to 1 enemy hero in any of the
2 spaces in a straight line directly behind
the target discards a card, or is defeated.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:4,secondaryDefense:6,traits:[`DISCARD_OR_KILL`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Liquid Leap`,description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,traits:[`PLACING_SELF`,`SPAWN_POINTS`]},{name:`Expert Duelist`,description:`Ignore all minion defense modifiers.
**This turn:** You are immune to attack actions
of all enemy heroes, except this attacker.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`DEFENSE`,primaryValue:6,secondaryMovement:3,item:`INITIATIVE`,traits:[`IMMUNITY_GAIN`,`THIS_TURN`]},{name:`Rogue Wave`,description:`Target a unit in range.
After the attack: You may push an enemy
unit adjacent to you up to 2 spaces.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`PUSHING_UNITS`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Magical Current`,description:`Place yourself into a space in range
without a spawn point and not adjacent
to an empty spawn point.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`PLACING_SELF`,`SPAWN_POINTS`]},{name:`Slippery Ground`,description:`**This turn:** Enemy heroes adjacent
to you cannot fast travel, or move more
than 1 space with a movement action.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,secondaryDefense:6,item:`ATTACK`,traits:[`THIS_TURN`,`FAST_TRAVEL`,`STAT_CHANGING`]},{name:`Raging Stream`,description:`Target a unit adjacent to you. Before the
attack: Up to 1 enemy hero in any of the
3 spaces in a straight line directly behind
the target discards a card, or is defeated.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Arcane Whirlpool`,description:`Swap with an enemy minion in range.
~(Swap places with the target. This is not movement.)`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`SWAPPING_ENEMY`,`SWAPPING_MINIONS`]},{name:`Master Duelist`,description:`Ignore all minion defense modifiers.
**This round:** You are immune to attack actions
of all enemy heroes, except this attacker.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`DEFENSE`,primaryValue:6,secondaryMovement:3,item:`RANGE`,traits:[`IMMUNITY_GAIN`,`THIS_ROUND`]},{name:`Violent Torrent`,description:`Target a unit adjacent to you. Before the
attack: Up to 1 enemy hero in any of the 5
spaces in a straight line directly behind the
target discards a card, or is defeated.
May repeat once on a different unit.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Stranger Tide`,description:`Place yourself into a space in
range without a spawn point.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`AREA`,traits:[`PLACING_SELF`,`SPAWN_POINTS`]},{name:`Deluge`,description:`**This turn:** Enemy heroes in radius
cannot fast travel, or move more than
1 space with a movement action.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,modifier:`AREA`,modifierValue:1,secondaryDefense:6,item:`ATTACK`,traits:[`THIS_TURN`,`FAST_TRAVEL`,`STAT_CHANGING`]},{name:`Tidal Blast`,description:`Target a unit in range.
After the attack: You may push an enemy
unit adjacent to you up to 3 spaces.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`MOVEMENT`,traits:[`PUSHING_UNITS`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Ebb and Flow`,description:`Swap with an enemy minion in range;
if it was adjacent to you, may repeat once.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`SWAPPING_ENEMY`,`SWAPPING_MINIONS`]}],bain:[{name:`Dead or Alive`,description:`Target a unit adjacent to you.
After the attack: You may give an enemy
hero in radius the ::marker_bounty:: Bounty marker.
A hero with the Bounty marker spends
1 additional ::life_counters:: Life counter when defeated.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`AFTER_THE_ATTACK`,`GIVING_MARKERS`,`USING_MARKERS`,`ATTACK_UNIT`]},{name:`Side Quest`,description:`If you are adjacent to an enemy unit,
give a hero in radius the ::marker_bounty:: Bounty marker.
A hero with the Bounty marker spends
1 additional ::life_counters:: Life counter when defeated.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:1,traits:[`GIVING_MARKERS`,`USING_MARKERS`]},{name:`Get over here!`,description:`Target a unit or a token in range and in a
straight line, with no obstacles between you
and the target. Move the target towards you
in a straight line, until you are adjacent.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryDefense:2,traits:[`MOVING_TOKENS`,`MOVING_UNITS`,`USING_TOKENS`,`STRAIGHT_LINE`]},{name:`A Complicated Profession`,description:`After you give a hero the ::marker_bounty:: Bounty marker,
that hero discards a card, if able.`,color:`PURPLE`,level:4,traits:[`DISCARD`,`GIVING_MARKERS`]},{name:`A Game of Chance`,description:`An enemy hero in radius with two or more
cards in hand chooses one of those cards.
Guess that card's color, then reveal it.
If you guessed correctly, discard that card;
otherwise you gain 1 coin.
~(You can only guess colors that could be in that player's hand.)`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,traits:[`FARMING_FOR_SELF`,`DISCARD`]},{name:`Light Crossbow`,description:`Target a unit in range and in a straight line
with no units or terrain between you.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,traits:[`STRAIGHT_LINE`,`TERRAIN`,`ATTACK_UNIT`]},{name:`Close Call`,description:`If a hero in play has a ::marker_bounty:: Bounty marker,
block the attack and that hero
gives the marker to you.
~(The marker's effect is applied to you.)`,color:`GREEN`,level:1,initiative:4,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,traits:[`GIVING_MARKERS`,`USING_MARKERS`]},{name:`Dead Man's Hand`,description:`An enemy hero in radius with two or more
cards in hand chooses one of those cards.
Guess that card's color, then reveal it.
If you guessed correctly, discard that card;
otherwise you gain 2 coins.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`DISCARD`]},{name:`Heavy Crossbow`,description:`Target a unit in range and in a straight line
with no units or terrain between you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`TERRAIN`,`ATTACK_UNIT`]},{name:`Narrow Escape`,description:`If a hero in play has a ::marker_bounty:: Bounty marker,
block the attack and retrieve the marker.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`INITIATIVE`,traits:[`GIVING_MARKERS`,`USING_MARKERS`]},{name:`Drinking Buddies`,description:`You may have a hero in radius retrieve a
discarded card. If they do, you may
also retrieve a discarded card.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`,traits:[`HEALING_SELF`,`HEALING_TEAM`,`HEALING_ENEMY`]},{name:`Hand Crossbow`,description:`**Choose one —**
>>Target a hero in range with
>a ::marker_bounty:: Bounty marker.
>>Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`USING_MARKERS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Vantage Point`,description:`Ignore obstacles. If a hero in play has
a ::marker_bounty:: Bounty marker, +1 ::movement_green:: movement.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,primaryValueSign:`PLUS`,secondaryDefense:3,item:`ATTACK`,traits:[`SCALING`,`IGNORING_OBSTACLES`,`USING_MARKERS`,`STAT_CHANGING`]},{name:`We're Not Done Yet!`,description:`An enemy hero in radius with two or more
cards in hand chooses one of those cards.
Guess that card's color, then reveal it.
If you guessed correctly, discard that card;
otherwise may repeat once or gain 2 coins.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`RANGE`,traits:[`FARMING_FOR_SELF`,`DISCARD`]},{name:`Arbalest`,description:`Target a unit in range and in a straight line
with no units or terrain between you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`TERRAIN`,`ATTACK_UNIT`]},{name:`Perfect Getaway`,description:`If a hero in play has a ::marker_bounty:: Bounty marker,
block the attack.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`INITIATIVE`,traits:[`USING_MARKERS`]},{name:`Another One!`,description:`You may have a hero in radius retrieve a
discarded card. If they do, you may
also retrieve a discarded card.
**End of turn:** May repeat once.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`,traits:[`HEALING_SELF`,`HEALING_TEAM`,`HEALING_ENEMY`,`END_OF_TURN`]},{name:`Hunter-Seeker`,description:`**Choose one, or both,** on different targets —
>>Target a hero in range with
>a ::marker_bounty:: Bounty marker.
>>Target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:`MOVEMENT`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`USING_MARKERS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`High Ground`,description:`Ignore obstacles. If a hero in play has
a ::marker_bounty:: Bounty marker, +2 ::movement_green:: movement.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`MOVEMENT`,primaryValue:2,primaryValueSign:`PLUS`,secondaryDefense:4,item:`AREA`,traits:[`SCALING`,`IGNORING_OBSTACLES`,`USING_MARKERS`,`STAT_CHANGING`]}],brogan:[{name:`Onslaught`,description:`Target a unit adjacent to you. After the attack:
Move into the space it occupied, if able.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:3,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Leap Forward`,description:`Target a hero adjacent to you. After the attack:
Move into the space it occupied, if able.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:3,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Bulwark`,description:`You may retrieve a discarded card.
**This turn:** You and friendly units in radius
cannot be moved, pushed, swapped
or placed by enemy heroes.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryDefense:4,traits:[`HEALING_SELF`,`PUSHING_HEROES`,`IMMUNITY_GAIN`,`THIS_TURN`]},{name:`One Man Army`,description:`During minion battle you count as a heavy
minion; if you would be removed,
lose the push instead.`,color:`PURPLE`,level:4,traits:[`MINION_BATTLE`,`COUNTS_AS`]},{name:`Brutal Jab`,description:`You may move 1 space. Push an enemy unit
or a token adjacent to you up to 1 space.`,color:`BLUE`,level:1,initiative:8,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:5,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`USING_TOKENS`]},{name:`Mad Dash`,description:`Before the attack: Move 2 spaces
in a straight line to a space adjacent to
an enemy unit, then target that unit.
~(If you cannot make this move, you cannot attack.)`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:7,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Shield`,description:`**This round:** When any friendly minion in radius
is defeated you may discard a silver card.
If you do, the minion is not removed.
~(The enemy hero still gains the coins for defeating the minion.)`,color:`GREEN`,level:1,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:1,secondaryMovement:2,secondaryDefense:4,traits:[`THIS_ROUND`]},{name:`Mighty Punch`,description:`You may move 1 space. Push an enemy unit
or a token adjacent to you up to 2 spaces.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`INITIATIVE`,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`USING_TOKENS`]},{name:`Bullrush`,description:`Before the attack: Move 2 or 3 spaces in
a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:8,item:`INITIATIVE`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Bolster`,description:`**This round:** When any friendly minion in radius
is defeated you may discard a silver card.
If you do, the minion is not removed.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`THIS_ROUND`]},{name:`Shield Bash`,description:`An enemy hero adjacent to you who
has played an attack card this turn
discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`ATTACK`,traits:[`DISCARD`,`THIS_TURN`]},{name:`Throwing Axe`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>You may discard a card;
if you do, target a unit in range.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`DEFENSE`,traits:[`MULTIPLE_CHOICE`,`ATTACK_UNIT`]},{name:`War Drummer`,description:`A friendly hero in range gains 1 coin;
if any hero was defeated this round,
that friendly hero gains 3 coins instead.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`,traits:[`FARMING_FOR_TEAM`,`THIS_ROUND`]},{name:`Savage Kick`,description:`Move up to 2 spaces. Push an enemy unit
or a token adjacent to you up to 2 spaces.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`INITIATIVE`,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`USING_TOKENS`]},{name:`Furious Charge`,description:`Before the attack: Move 2, 3, or 4 spaces
in a straight line to a space adjacent to an
enemy unit, then target that unit.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:3,secondaryDefense:8,item:`MOVEMENT`,traits:[`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Fortify`,description:`**This round:** When any friendly minion in radius
is defeated you may discard a basic card.
If you do, the minion is not removed.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`THIS_ROUND`]},{name:`Counterattack`,description:`An enemy hero adjacent to you who
has played an attack card this turn
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`RANGE`,traits:[`DISCARD_OR_KILL`,`THIS_TURN`]},{name:`Throwing Spear`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>You may discard a card. If you have a card
in the discard, target a unit in range.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`AREA`,traits:[`MULTIPLE_CHOICE`,`ATTACK_UNIT`]},{name:`Master Skald`,description:`A friendly hero in range gains 2 coins;
if any hero was defeated this round,
that friendly hero gains 4 coins instead.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`,traits:[`FARMING_FOR_TEAM`,`THIS_ROUND`]}],brynn:[{name:`Familiar Ground`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range who is
>adjacent to 3 or more obstacles.
~(You, other heroes, minions, tokens, and terrain are obstacles.)`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:2,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`TERRAIN`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Home Turf`,description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a hero in range who is
>adjacent to 3 or more obstacles.
~(You, other heroes, minions, tokens, and terrain are obstacles.)`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`MULTIPLE_CHOICE`,`USING_TOKENS`,`TERRAIN`,`ATTACK_HERO`]},{name:`Decoy`,description:`**Choose up to two times,** on different targets —
>>Move an enemy minion in radius 1 space.
>>Move an enemy hero in radius who is
>adjacent to 3 or more obstacles 1 space.`,color:`SILVER`,initiative:1,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryDefense:2,traits:[`MOVING_HEROES`,`MOVING_ENEMY`,`MULTIPLE_CHOICE`]},{name:`High Ground`,description:`Target a unit adjacent to you.
If you target a hero adjacent to
3 or more obstacles, +2 ::attack_red:: attack.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Tread Lightly`,description:`Swap with either a unit adjacent to you,
or with an enemy hero in radius who is
adjacent to 3 or more obstacles.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5,traits:[`SWAPPING_SELF`,`SWAPPING_UNITS`]},{name:`Bear Trap`,description:`**Choose one —**
>>An enemy hero adjacent to you discards
>a card, if able.
>>An enemy hero in radius who is adjacent to
>3 or more obstacles discards a card, if able.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,traits:[`DISCARD`,`MULTIPLE_CHOICE`]},{name:`Elevated Ambush`,description:`Target a unit adjacent to you.
If you target a hero adjacent to
3 or more obstacles, +2 ::attack_red:: attack.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Split Attack`,description:`Target a unit in range. If you target a hero
who is adjacent to 3 or more obstacles, may
repeat once on a different unit adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:3,item:`DEFENSE`,traits:[`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Log Trap`,description:`**Choose one —**
>>An enemy hero adjacent to you discards
>a card, if able.
>>An enemy hero in radius who is adjacent to
>3 or more obstacles discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`DISCARD`,`MULTIPLE_CHOICE`]},{name:`True Grit`,description:`You may retrieve a discarded attack card.
If an enemy hero in radius is adjacent to
3 or more obstacles, move up to 3 spaces.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`HEALING_SELF`,`MOVING_HEROES`,`MOVING_SELF`]},{name:`Cover Tracks`,description:`Swap with either a unit adjacent to you,
or with an enemy hero in radius who is
adjacent to 3 or more obstacles.
You may move 1 space.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`,traits:[`MOVING_HEROES`,`MOVING_SELF`,`SWAPPING_SELF`,`SWAPPING_UNITS`]},{name:`Mountain Guide`,description:`You may move a friendly unit, which is adjacent
to you, up to 2 spaces. If an enemy hero in
radius is adjacent to 3 or more obstacles, move
a different friendly unit in radius up to 2 spaces.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`,traits:[`MOVING_HEROES`,`MOVING_TEAM`]},{name:`Deadfall Trap`,description:`**Choose one —**
>>An enemy hero adjacent to you discards
>a card, or is defeated.
>>An enemy hero in radius who is adjacent to
>3 or more obstacles discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`,`MULTIPLE_CHOICE`]},{name:`Die Hard`,description:`You may retrieve a discarded attack card.
If an enemy hero in radius is adjacent to
3 or more obstacles, move up to 4 spaces.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`,traits:[`HEALING_SELF`,`MOVING_HEROES`,`MOVING_SELF`]},{name:`Hide Traces`,description:`Swap with either a unit adjacent to you,
or with an enemy hero in radius who is
adjacent to 3 or more obstacles.
Move up to 2 spaces.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`RANGE`,traits:[`MOVING_HEROES`,`MOVING_SELF`,`SWAPPING_SELF`,`SWAPPING_UNITS`]},{name:`Expedition Leader`,description:`You may move a friendly unit, which is adjacent
to you, up to 3 spaces. If an enemy hero in
radius is adjacent to 3 or more obstacles, move
a different friendly unit in radius up to 3 spaces.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`,traits:[`MOVING_HEROES`,`MOVING_TEAM`]},{name:`Peak Precision`,description:`Target a unit adjacent to you.
If you target a hero adjacent to
3 or more obstacles, +2 ::attack_red:: attack and After
the attack: You may retrieve this card.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:7,item:`AREA`,traits:[`AFTER_THE_ATTACK`,`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Split Throw`,description:`Target a unit in range. If you target a hero
who is adjacent to 3 or more obstacles,
may repeat once on a different unit.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Over the Top`,description:`While you are performing actions, all
enemy heroes in play count as being
adjacent to 3 or more obstacles.`,color:`PURPLE`,level:4,traits:[`COUNTS_AS`]}],cutter:[{name:`Walk the Plank`,description:`**Choose one —**
>>Push an enemy hero adjacent to you
>up to 4 spaces; if that hero is pushed
>into another zone, that hero discards
>a card, or is defeated.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:12,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:2,traits:[`DEFEAT`,`DISCARD_OR_KILL`,`PUSHING_HEROES`,`MULTIPLE_CHOICE`]},{name:`Few More Steps`,description:`Push an enemy hero adjacent to you
up to 3 spaces; if that hero is pushed
into another zone, that hero discards
a card, or is defeated.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:1,traits:[`DISCARD_OR_KILL`,`PUSHING_HEROES`]},{name:`Grappling Bolt`,description:`Target an obstacle in range and in a straight
line, with no obstacles between you; ignore
immunity. Move in a straight line towards
that obstacle until you are adjacent to it.`,color:`SILVER`,initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:5,secondaryDefense:2,traits:[`IMMUNITY_IGNORE`,`MOVING_SELF`,`STRAIGHT_LINE`]},{name:`Legend of the Skies`,description:`The first time each turn after you perform a
primary action, you may perform the primary
action of a card in the previous turn slot.`,color:`PURPLE`,level:4,traits:[`NEXT_TURN`]},{name:`Bombardment`,description:`An enemy hero in radius, adjacent to
another enemy unit and not adjacent
to you, discards a card, if able.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,traits:[`DISCARD`]},{name:`Daring Strike`,description:`**Choose one —**
>>Before the attack: Move 1 space.
>Target a hero adjacent to you in the
>direction of the move; +2 ::attack_red:: Attack.
>>Target a unit adjacent to you.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:3,secondaryDefense:6,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`SCALING`,`MULTIPLE_CHOICE`,`STAT_CHANGING`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Brace for Impact`,description:`Move 3 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero; that hero discards a card, if able.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,traits:[`DISCARD`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Barrage`,description:`An enemy hero in radius, adjacent to
another enemy unit and not adjacent
to you, discards a card, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:`INITIATIVE`,traits:[`DISCARD`]},{name:`Bold Thrust`,description:`**Choose one —**
>>Before the attack: Move 1 or 2 spaces in a
straight line. Target a hero adjacent to you
in the direction of the move; +2 ::attack_red:: Attack.
>>Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:3,secondaryDefense:6,item:`INITIATIVE`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`SCALING`,`MULTIPLE_CHOICE`,`STAT_CHANGING`,`STRAIGHT_LINE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Ramming Speed`,description:`Move 3 or 4 spaces in a straight line, ignoring
obstacles, to a space adjacent to an enemy
hero; that hero discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`DISCARD`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`X Marks the Spot`,description:`An enemy hero in radius **chooses one —**
>>You place that hero in a space in radius.
>>You gain 2 coins.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`,traits:[`FARMING_FOR_SELF`,`PLACING_HEROES`,`PLACING_ENEMY`]},{name:`Evasive Shot`,description:`Target a unit in range and in a straight line.
After the attack: Move up to 2 spaces
in the opposite direction.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Outmaneuver`,description:`Swap with an enemy minion in radius;
you may move that minion up to 2 spaces.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`,traits:[`MOVING_SELF`,`MOVING_MINIONS`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`SWAPPING_MINIONS`]},{name:`Broadside`,description:`An enemy hero in radius, adjacent to
another enemy unit and not adjacent
to you, discards a card, if able.
May repeat once on a different target.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`INITIATIVE`,traits:[`DISCARD`]},{name:`Fearless Lunge`,description:`**Choose one —**
>>Before the attack: Move 1, 2 or 3 spaces in
>a straight line. Target a hero adjacent to you
>in the direction of the move; +2 ::attack_red:: Attack.
>>Target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:3,secondaryDefense:7,item:`MOVEMENT`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`SCALING`,`MULTIPLE_CHOICE`,`STAT_CHANGING`,`STRAIGHT_LINE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Crashland`,description:`Move 3, 4 or 5 spaces in a straight line,
ignoring obstacles, to a space adjacent to an
enemy hero; that hero discards a card, if able.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`RANGE`,traits:[`DISCARD`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`A Fistful of Coins`,description:`An enemy hero in radius **chooses one —**
>>You place that hero in a space in radius.
>>You gain 3 coins. If you have 13 or more
>coins, you alone win the game.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`,traits:[`FARMING_FOR_SELF`,`PLACING_HEROES`,`PLACING_ENEMY`]},{name:`Tumble Shot`,description:`Target a unit in range and in a straight line.
After the attack: Move up to 3 spaces
in the opposite direction.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:5,item:`AREA`,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Outsmart`,description:`Swap with an enemy minion in radius;
you may move that minion up to 3 spaces.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`,`MOVING_MINIONS`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`SWAPPING_MINIONS`]}],dodger:[{name:`Dread Razor`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>If you are adjacent to an empty spawn point
>in the battle zone, target a unit in range.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`MULTIPLE_CHOICE`,`SPAWN_POINTS`,`ATTACK_UNIT`]},{name:`Rusty Razor`,description:`**Choose one —**
>>Target a hero adjacent to you.
>>If you are adjacent to an empty spawn point
>in the battle zone, target a hero in range.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`MULTIPLE_CHOICE`,`SPAWN_POINTS`,`ATTACK_HERO`]},{name:`Death Trap`,description:`An enemy hero in radius who is
adjacent to an empty spawn point in
the battle zone discards a card, if able.`,color:`SILVER`,initiative:7,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryDefense:1,traits:[`DISCARD`,`SPAWN_POINTS`]},{name:`Tide of Darkness`,description:`While you are performing an action, all spaces
count as if they were in the battle zone and
had a friendly minion spawn point.`,color:`PURPLE`,level:4,traits:[`SPAWN_POINTS`,`COUNTS_AS`]},{name:`Shield of Decay`,description:`+2 ::defense_blue:: Defense if there are 2 or more empty
spawn points in radius in the battle zone.`,color:`BLUE`,level:1,initiative:10,primaryAction:`DEFENSE`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,traits:[`SCALING`,`STAT_CHANGING`,`SPAWN_POINTS`]},{name:`Littlefinger of Death`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range who has one or
>more cards in the discard.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,traits:[`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Dark Ritual`,description:`If there are 2 or more empty spawn points
in radius in the battle zone, gain 1 coin.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,traits:[`FARMING_FOR_SELF`,`SPAWN_POINTS`]},{name:`Vampiric Shield`,description:`+2 ::defense_blue:: Defense if there are 2 or more empty
spawn points in radius in the battle zone.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`DEFENSE`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,item:`INITIATIVE`,traits:[`SCALING`,`STAT_CHANGING`,`SPAWN_POINTS`]},{name:`Finger of Death`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range who has one or
>more cards in the discard.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Darker Ritual`,description:`If there are 2 or more empty spawn points
in radius in the battle zone, gain 2 coins.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`SPAWN_POINTS`]},{name:`Weakness`,description:`**This turn:** Enemy heroes
in radius have -4 ::attack_silver:: Attack.
~(They can still attack, even with a negative attack value.)`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`,traits:[`THIS_TURN`,`STAT_CHANGING`]},{name:`Burning Skull`,description:`Target a unit in range. After the attack:
Move up to 1 minion adjacent to you
1 space, to a space not adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`,traits:[`MOVING_MINIONS`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Necromancy`,description:`Respawn a friendly minion in an empty friendly
spawn point adjacent to you in the battle zone.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`RESPAWN`,`SPAWN_POINTS`]},{name:`Aegis of Doom`,description:`+4 ::defense_blue:: Defense if there are 2 or more empty
spawn points in radius in the battle zone.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,item:`INITIATIVE`,traits:[`SCALING`,`STAT_CHANGING`,`SPAWN_POINTS`]},{name:`Middlefinger of Death`,description:`**Choose one, or both, on different targets —**
>>Target a unit adjacent to you.
>>Target a hero in range who has one or 
>more cards in the discard.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`MOVEMENT`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Darkest Ritual`,description:`If there are 2 or more empty spawn points in
radius in the battle zone, gain 2 coins. If you
have your Ultimate, gain an ::attack_silver:: Attack item.
~(Use any spare card from the box with the corresponding icon.)`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`SPAWN_POINTS`]},{name:`Enfeeblement`,description:`**This turn:** Enemy heroes in radius have
-6 ::attack_silver:: Attack and cannot repeat actions.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`,traits:[`THIS_TURN`,`STAT_CHANGING`]},{name:`Blazing Skull`,description:`Target a unit in range. After the attack:
Move up to 2 minions adjacent to you
1 space each, to spaces not adjacent to you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:`AREA`,traits:[`MOVING_MINIONS`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Necromastery`,description:`Respawn a friendly minion in an empty friendly
spawn point in radius in the battle zone.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:1,secondaryMovement:2,secondaryDefense:3,item:`RANGE`,traits:[`RESPAWN`,`SPAWN_POINTS`]}],emmitt:[{name:`Reverse Time`,description:`Target a unit adjacent to you. After the attack:
**Next turn:** Heroes with lower initiative act
before heroes with higher initiative;
this effect ignores immunity.
~(Resolve ties as normal.)`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`NEXT_TURN`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Tear in Time`,description:`Target a hero adjacent to you.
After the attack: **Next turn:** Heroes with
lower initiative act before heroes with higher
initiative. This effect ignores immunity.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`NEXT_TURN`,`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Unstable Timeline`,description:`Place 2 ::token_glitch:: Glitch tokens in radius, with at
least two spaces between each token;
if used as a defense, place 3 tokens instead.
An enemy hero in play chooses one of the
Glitch tokens; you swap with that token.
**End of turn:** Remove all Glitch tokens.`,color:`SILVER`,initiative:1,primaryAction:`DEFENSE_SKILL`,primaryValue:6,modifier:`AREA`,modifierValue:4,traits:[`SWAPPING_SELF`,`REMOVING`,`END_OF_TURN`,`USING_TOKENS`]},{name:`Alternative Timelines`,description:`You may play two cards each turn;
if you do, after the cards are revealed,
retrieve one of your unresolved cards.`,color:`PURPLE`,level:4},{name:`Time Snare`,description:`An enemy hero in range who has
already resolved a card this turn
discards a card, if able.`,color:`BLUE`,level:1,initiative:8,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,traits:[`DISCARD`,`THIS_TURN`]},{name:`Temporal Punch`,description:`Target a unit adjacent to you; when defending,
the enemy hero must use the ::initiative:: Initiative
value of their card and items instead of the
::defense_silver:: Defense value of their card and items.
~(Minion defense modifiers are applied as normal.)`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:9,secondaryMovement:3,secondaryDefense:7,traits:[`ATTACK_UNIT`]},{name:`Time Walk`,description:`Move an enemy hero in range, who
remained in the same space since
the last turn, 2 spaces in a straight line.`,color:`GREEN`,level:1,initiative:6,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,traits:[`MOVING_ENEMY`,`STRAIGHT_LINE`]},{name:`Time Trap`,description:`An enemy hero in range who has
already resolved a card this turn
discards a card, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`DISCARD`,`THIS_TURN`]},{name:`Time Loop`,description:`Swap with an enemy hero in range
who has already resolved a card this turn.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`THIS_TURN`]},{name:`Temporal Slam`,description:`Target a unit adjacent to you; when defending,
the enemy hero must use the ::initiative:: Initiative
value of their card and items instead of the
::defense_silver:: Defense value of their card and items.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:11,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`,traits:[`ATTACK_UNIT`]},{name:`Flashback`,description:`Target a unit adjacent to you. After the attack:
You may place 3 ::token_glitch:: Glitch tokens in radius,
with at least two spaces between each token;
if you do, up to 1 enemy hero in radius
swaps with a Glitch token of their choice.
**End of turn:** Remove all Glitch tokens.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`REMOVING`,`END_OF_TURN`,`AFTER_THE_ATTACK`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Fast Forward`,description:`Move an enemy hero in range, who
remained in the same space since
the last turn, 2 spaces in a straight line.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`MOVING_ENEMY`,`STRAIGHT_LINE`]},{name:`Time Capsule`,description:`You, and friendly heroes in radius, may
retrieve all cards discarded this turn.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`INITIATIVE`,traits:[`DISCARD_TEAM`,`THIS_TURN`]},{name:`Time Bomb`,description:`An enemy hero in range who has
already resolved a card this turn
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`,traits:[`DISCARD_OR_KILL`,`THIS_TURN`]},{name:`Time Warp`,description:`**Choose one —**
>>Swap with an enemy hero in range who
>has already resolved a card this turn.
>>An enemy hero in range swaps their
>unresolved card with one of their
>resolved cards of their choice.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`AREA`,traits:[`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`THIS_TURN`,`MULTIPLE_CHOICE`]},{name:`Temporal Judgment`,description:`Target a unit adjacent to you; when defending,
the enemy hero must use the ::initiative:: Initiative
value of their card and items instead of the
::defense_silver:: Defense value of their card and items.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:12,secondaryMovement:3,secondaryDefense:8,item:`RANGE`,traits:[`ATTACK_UNIT`]},{name:`Déjà Vu`,description:`Target a unit adjacent to you. After the attack:
You may place 2 ::token_glitch:: Glitch tokens in radius,
with at least two spaces between each token;
if you do, up to 1 enemy hero in radius
swaps with a Glitch token of their choice.
**End of turn:** Remove all Glitch tokens.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`,traits:[`REMOVING`,`END_OF_TURN`,`AFTER_THE_ATTACK`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Back to the Future`,description:`**Choose one —**
>>Place a unit in range into the space where
>that unit was at the start of this turn.
>>Move an enemy hero in range, who
>remained in the same space since
>the last turn, 2 spaces in a straight line.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`MOVING_ENEMY`,`PLACING_UNITS`,`THIS_TURN`,`MULTIPLE_CHOICE`,`STRAIGHT_LINE`]},{name:`Future Proof`,description:`**Choose one —**
>>You, and friendly heroes in radius, may
>retrieve all cards discarded this turn.
>>**This turn:** Friendly heroes in radius
>are immune to enemy actions.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`DISCARD_TEAM`,`THIS_TURN`,`MULTIPLE_CHOICE`]}],garrus:[{name:`Angry Strike`,description:`Target a unit adjacent to you;
+1 ::attack_gold:: Attack for every card in your discard.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:1,secondaryDefense:3,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Angry Swipe`,description:`Target a hero adjacent to you;
+1 ::attack_gold:: Attack for every card in your discard.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,secondaryMovement:1,secondaryDefense:2,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_HERO`]},{name:`Chilling Howl`,description:`You may discard one of your resolved cards.
**This round:** Enemy heroes in radius
cannot fast travel, or move more than
2 spaces with a movement action.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:3,traits:[`THIS_ROUND`,`FAST_TRAVEL`]},{name:`Battle Fury`,description:`Each time after one of your resolved cards is
discarded, you may perform its primary action.`,color:`PURPLE`,level:4},{name:`Menace`,description:`Move an enemy unit in range 1 space
to a space farther away from you.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:6,traits:[`MOVING_ENEMY`]},{name:`Trace`,description:`**Choose one —**
>>Before the attack: If you have one or more
>cards in the discard, you may move 1 space.
>Target a hero adjacent to you.
>>Target a unit adjacent to you.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:4,secondaryDefense:5,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Hold Ground`,description:`If there are at least two enemy heroes in
radius, you may retrieve a discarded card.`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,traits:[`HEALING_SELF`]},{name:`Threaten`,description:`Move an enemy unit in range 1 space
to a space farther away from you.
May repeat once.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`MOVING_ENEMY`]},{name:`Chase`,description:`**Choose one —**
>>Before the attack: If you have one or more
>cards in the discard, move up to 2 spaces.
>Target a hero adjacent to you.
>>Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Make a Stand`,description:`If there are at least two enemy heroes in
radius, you may retrieve a discarded card.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`HEALING_SELF`]},{name:`Form Up!`,description:`Move a friendly unit in range 1 space
to a space closer to you.
May repeat once.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`,traits:[`MOVING_TEAM`]},{name:`Blunt Force`,description:`Target a unit adjacent to you.
After the attack: You may move 1 space to a
space adjacent to an enemy hero; if you do,
push that hero 3 spaces, ignoring obstacles.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`,traits:[`PUSHING_HEROES`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`IGNORING_OBSTACLES`,`ATTACK_UNIT`]},{name:`Light Pilum`,description:`An enemy hero in range discards a card,
if able. You may move 1 space.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD`,`MOVING_SELF`]},{name:`Terrify`,description:`Move an enemy unit in range 1 space
to a space farther away from you.
May repeat up to two times.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`,traits:[`MOVING_ENEMY`]},{name:`Hunt Down`,description:`**Choose one —**
>>Before the attack: If you have one or more
>cards in the discard, move up to 3 spaces.
>Target a hero adjacent to you.
>>Target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:6,item:`RANGE`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Battle Ready`,description:`If there are at least two enemy heroes
in radius, you may retrieve up to
two discarded cards.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`},{name:`Testudo!`,description:`Move a friendly unit in range 1 space
to a space closer to you.
May repeat up to two times.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:7,item:`ATTACK`,traits:[`MOVING_TEAM`]},{name:`Send Flying`,description:`Target a unit adjacent to you. After the attack:
You may move up to 2 spaces to a space
adjacent to an enemy hero; if you do, push
that hero 3 spaces, ignoring obstacles.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:4,secondaryDefense:8,item:`AREA`,traits:[`PUSHING_HEROES`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`IGNORING_OBSTACLES`,`ATTACK_UNIT`]},{name:`Heavy Pilum`,description:`An enemy hero in range discards a card,
or is defeated. You may move up to 2 spaces.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:`MOVEMENT`,traits:[`DISCARD_OR_KILL`,`MOVING_SELF`]}],gydion:[{name:`Cantrip`,description:`**Choose and cast one** spell in the spellbook —
>>"Shocking Grasp" ~(To repel a foe!)
>>"Magic Missile" ~(To blast at range!)
>>"Expeditious Retreat" ~(To dart a great distance!)`,color:`GOLD`,initiative:11,primaryAction:`SKILL`,secondaryDefense:1,traits:[`MULTIPLE_CHOICE`]},{name:`Cheap Trick`,description:`Cast the "Expeditious Retreat"
spell in the spellbook.
~(To dart a great distance!)`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`SKILL`,secondaryDefense:1},{name:`Prepare Spells`,description:`Add all spell cards to the spellbook. Only
Gydion can look at the cards in the spellbook.
As each spell is cast, remove it from the
spellbook faceup. The action on the spell card
is performed by the hero casting the spell.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,secondaryDefense:2,traits:[`REMOVING`]},{name:`Elementary Enchantment`,description:`Cast the "Suggestion" spell in the spellbook.
~(Compel the opposing champion to take a few extra steps.)`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3},{name:`Elementary Evocation`,description:`Cast the "Burning Hands" spell in the spellbook.
~(Burn multiple opponents in near vicinity.)`,color:`RED`,level:1,initiative:7,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6},{name:`Elementary Abjuration`,description:`Cast the "Shield" spell in the spellbook.
~(The magic shield protects against mundane threats.)`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2},{name:`Lesser Evocation`,description:`**Choose and cast one** spell in the spellbook —
>>"Burning Hands"
>>"Fireball"
~(Wait for your allies to clear the area before hurling a fireball!)`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`MULTIPLE_CHOICE`]},{name:`Lesser Necromancy`,description:`**Choose and cast one** spell in the spellbook —
>>"Vampiric Touch"
>>"Create Undead"
~(Harm your foe to heal yourself. Raise an undead servant.)`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`INITIATIVE`,traits:[`MULTIPLE_CHOICE`]},{name:`Greater Evocation`,description:`**Choose and cast one** spell in the spellbook —
>>"Burning Hands"
>>"Fireball"
>>"Sunburst"
~(Sunburst's reach and power grows with every cast spell.)`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`,traits:[`MULTIPLE_CHOICE`]},{name:`Greater Necromancy`,description:`**Choose and cast one** spell in the spellbook —
>>"Vampiric Touch"
>>"Create Undead"
>>"Energy Drain"
~(Drain energy from a foe in sight to restore your vitality.)`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:7,item:`AREA`,traits:[`MULTIPLE_CHOICE`]},{name:`Lesser Enchantment`,description:`**Choose and cast one** spell in the spellbook —
>>"Suggestion"
>>"Dominate Person"
~(Turn the dominated person against their own troops.)`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`MULTIPLE_CHOICE`]},{name:`Lesser Transmutation`,description:`**Choose and cast one** spell in the spellbook —
>>"Midas Touch"
>>"Disintegrate"
~(Create gold. Turn objects and lesser creatures into dust.)`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`MULTIPLE_CHOICE`]},{name:`Greater Enchantment`,description:`**Choose and cast one** spell in the spellbook —
>>"Suggestion"
>>"Dominate Person"
>>"Power Word Kill"
~(Command a weakened foe within earshot to perish instantly.)`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`RANGE`,traits:[`MULTIPLE_CHOICE`]},{name:`Greater Transmutation`,description:`**Choose and cast one** spell in the spellbook —
>>"Midas Touch"
>>"Disintegrate"
>>"Polymorph"
~(Polymorph enemies into creatures or objects and vice versa.)`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`MULTIPLE_CHOICE`]},{name:`Lesser Abjuration`,description:`**Choose and cast one** spell in the spellbook —
>>"Shield"
>>"Banishment"
~(Touch anything to have it banished where you please.)`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`MULTIPLE_CHOICE`]},{name:`Lesser Conjuration`,description:`**Choose and cast one** spell in the spellbook —
>>"Find Familiar"
>>"Dimension Door"
~(Summon a familiar to assist you. Travel to a faraway place.)`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`MULTIPLE_CHOICE`]},{name:`Greater Abjuration`,description:`**Choose and cast one** spell in the spellbook —
>>"Shield"
>>"Banishment"
>>"Invulnerability"
~(Invulnerability makes you impervious to deadly perils.)`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`MULTIPLE_CHOICE`]},{name:`Greater Conjuration`,description:`**Choose and cast one** spell in the spellbook —
>>"Find Familiar"
>>"Dimension Door"
>>"Cloud Kill"
~(Create a deadly cloud within distance to weaken your foe.)`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`MOVEMENT`,traits:[`MULTIPLE_CHOICE`]},{name:`The Archwizard`,description:`Whenever you would add cards
to the spellbook, you may cast the
"Wish" spell in the spellbook instead.`,color:`PURPLE`,level:4}],hanu:[{name:`Fight and Flight`,description:`Target a unit adjacent to you.
If the target is not defeated, After the attack:
If able, move 3 spaces in a straight line.`,color:`GOLD`,initiative:13,primaryAction:`ATTACK`,primaryValue:2,secondaryMovement:2,secondaryDefense:1,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Fight or Flight`,description:`Target a hero adjacent to you.
If the target is not defeated, After the attack:
If able, move 3 spaces in a straight line.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`ATTACK`,primaryValue:1,secondaryMovement:1,secondaryDefense:1,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_HERO`]},{name:`Hurry up!`,description:`Set the printed ::initiative:: Initiative value of an
unresolved card of a hero in range to 11,
until it is resolved, or otherwise changes state.
~(This may change the initiative order and tie breakers.)`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryDefense:1},{name:`The Ultimate Trick`,description:`You choose the next action, and how
it is performed, for a hero you
target with the "Hurry Up!".`,color:`PURPLE`,level:4},{name:`Unexpected Journey`,description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero,
regardless of radius and immunity.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,traits:[`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`THIS_TURN`,`END_OF_TURN`]},{name:`Helping Hand`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent to your
>friendly hero.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:4,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Monkey Trick`,description:`Swap two friendly units in radius.`,color:`GREEN`,level:1,initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:1,secondaryMovement:2,secondaryDefense:1},{name:`There and Back Again`,description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero,
regardless of radius and immunity.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`,traits:[`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`THIS_TURN`,`END_OF_TURN`]},{name:`Even the Odds`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent to your
>friendly hero.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:4,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Monkey Twist`,description:`Swap two friendly units in radius.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:`DEFENSE`},{name:`This Way!`,description:`A friendly hero in radius chooses a distance
of 1 or 2; move both of you that number of
spaces in the same direction of your choice.
~(Both must be moved the full distance, or neither one moves.)`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`INITIATIVE`},{name:`Outnumber`,description:`**Choose one —**
>>Target a unit adjacent to you.
>>Target a minion in range, adjacent to your
>friendly hero.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_MINION`]},{name:`Hear Nothing`,description:`Swap with an enemy hero in radius.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`]},{name:`Safe Travels`,description:`Swap with an enemy hero in radius.
**This turn:** That hero is immune.
**End of turn:** Swap with that hero, regardless
of radius and immunity. You may move 1 space.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`,traits:[`MOVING_HEROES`,`MOVING_SELF`,`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`,`THIS_TURN`,`END_OF_TURN`]},{name:`Trusted Sidekick`,description:`**Choose one, or both,** in any order —
>>Target a unit adjacent to you.
>>Target a hero in range, adjacent to your
>friendly hero and not adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:`MOVEMENT`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Monkey Business`,description:`Swap two friendly units in radius.
You may move 1 space.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:`DEFENSE`,traits:[`MOVING_SELF`]},{name:`That Way!`,description:`A friendly hero in radius chooses a distance
of 1, 2 or 3; move both of you that number of
spaces in the same direction of your choice.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`INITIATIVE`},{name:`Pile On`,description:`**Choose one, or both,** in any order —
>>Target a unit adjacent to you.
>>Target a minion in range, adjacent to your
>friendly hero.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:`AREA`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_MINION`]},{name:`See Nothing`,description:`Swap with an enemy hero in radius.
You may move 1 space.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`RANGE`,traits:[`MOVING_HEROES`,`MOVING_SELF`,`SWAPPING_HEROES`,`SWAPPING_SELF`,`SWAPPING_ENEMY`]}],ignatia:[{name:`Chaos Bolt`,description:`::tiebreaker_blue::: Target a minion adjacent to you.
---
::tiebreaker_orange::: Target a hero in range.
~(Apply the text matching the symbol on the Tie Breaker coin.)`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:2,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_HERO`,`ATTACK_MINION`]},{name:`Unreliable Jolt`,description:`::tiebreaker_blue::: Target a hero adjacent to you.
---
::tiebreaker_orange::: Target a hero in range not adjacent to you.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`ATTACK_HERO`]},{name:`Equilibrium`,description:`**This round:** Each time you perform or repeat a
primary action, you may apply either ::tiebreaker_blue:: or ::tiebreaker_orange::
card text, regardless of the Tie Breaker coin.`,color:`SILVER`,initiative:1,primaryAction:`SKILL`,secondaryDefense:7,traits:[`THIS_ROUND`]},{name:`Chaos Incarnate`,description:`The first time each turn after you perform
a primary action, you may flip the Tie Breaker
coin; if you do, you may perform that action
again, choosing different targets.`,color:`PURPLE`,level:4},{name:`Abrupt Combustion`,description:`::tiebreaker_blue::: An enemy hero in radius adjacent to a
token or to a minion discards a card, if able.
---
::tiebreaker_orange::: Remove an enemy minion in radius
adjacent to an enemy hero.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,traits:[`DISCARD`,`REMOVING`,`USING_TOKENS`]},{name:`Playing with Fire`,description:`::tiebreaker_blue::: Target a unit in range not in a straight line.
---
::tiebreaker_orange::: Target a unit in range in a straight line.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,traits:[`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Path of Ashes`,description:`::tiebreaker_blue::: Move up to 2 spaces in a straight line.
Place a ::token_magma:: Magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange::: Place up to 2 Magma tokens in radius.`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,traits:[`MOVING_SELF`,`USING_TOKENS`,`STRAIGHT_LINE`]},{name:`Spontaneous Immolation`,description:`::tiebreaker_blue::: An enemy hero in radius adjacent to a
token or to a minion discards a card, if able.
---
::tiebreaker_orange::: Remove an enemy minion in radius
adjacent to an enemy hero.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD`,`REMOVING`,`USING_TOKENS`]},{name:`Erratic Fireblast`,description:`::tiebreaker_blue::: Target a unit in range not in a straight line.
---
::tiebreaker_orange::: Target a unit in range in a straight line.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Path of Cinders`,description:`::tiebreaker_blue::: Move up to 3 spaces in a straight line.
Place a ::token_magma:: Magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange::: Place up to 3 Magma tokens in radius.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`DEFENSE`,traits:[`MOVING_SELF`,`USING_TOKENS`,`STRAIGHT_LINE`]},{name:`Searing Heat`,description:`::tiebreaker_blue::: Move a friendly hero in radius
2 spaces in a straight line.
---
::tiebreaker_orange::: Move an enemy hero in radius
2 spaces in a straight line.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`INITIATIVE`,traits:[`MOVING_HEROES`,`MOVING_TEAM`,`MOVING_ENEMY`,`STRAIGHT_LINE`]},{name:`Crack of Doom`,description:`::tiebreaker_blue::: Target a unit adjacent to you.
---
::tiebreaker_orange::: Target a unit at maximum range.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:5,secondaryMovement:3,secondaryDefense:6,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_UNIT`]},{name:`Unstable Portal`,description:`::tiebreaker_blue::: Swap with a friendly unit in radius.
---
::tiebreaker_orange::: Swap with an enemy unit in radius.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`,`SWAPPING_ENEMY`]},{name:`Violent Conflagration`,description:`::tiebreaker_blue::: An enemy hero in radius adjacent to a
token or to a minion discards a card, or is defeated.
---
::tiebreaker_orange::: Defeat an enemy minion in radius
adjacent to an enemy hero.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`RANGE`,traits:[`DEFEAT`,`DISCARD_OR_KILL`,`USING_TOKENS`]},{name:`Loosely-Aimed Firebolts`,description:`::tiebreaker_blue::: Target a unit in range not in a straight line.
---
::tiebreaker_orange::: Target a unit in range in a straight line.
May repeat once on a different hero.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`AREA`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Path of Flames`,description:`::tiebreaker_blue::: Move up to 4 spaces in a straight line.
Place a ::token_magma:: Magma token in each empty
space you moved through, or out of.
---
::tiebreaker_orange::: Place up to 4 Magma tokens in radius.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`,traits:[`MOVING_SELF`,`USING_TOKENS`,`STRAIGHT_LINE`]},{name:`Scorching Blaze`,description:`::tiebreaker_blue::: Move a friendly hero in radius
2 or 3 spaces in a straight line.
---
::tiebreaker_orange::: Move an enemy hero in radius
2 or 3 spaces in a straight line.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`MOVEMENT`,traits:[`MOVING_HEROES`,`MOVING_TEAM`,`MOVING_ENEMY`,`STRAIGHT_LINE`]},{name:`Imminent Eruption`,description:`::tiebreaker_blue::: Target a unit adjacent to you.
May repeat once on a minion.
---
::tiebreaker_orange::: Target a unit at maximum range.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:5,secondaryMovement:3,secondaryDefense:6,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_UNIT`]},{name:`Chaos Gate`,description:`::tiebreaker_blue::: Swap with a friendly unit in radius.
You may move that unit 1 space.
---
::tiebreaker_orange::: Swap with an enemy unit in radius.
You may move 1 space.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`MOVING_SELF`,`MOVING_UNITS`,`SWAPPING_SELF`,`SWAPPING_TEAM`,`SWAPPING_ENEMY`]}],min:[{name:`Fast as Lightning`,description:`Target a unit in range. After the attack:
Apply the "After the attack" text of your
resolved or discarded red card.
~(If it has radius, use that card's value.)`,color:`GOLD`,initiative:13,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Chop Down`,description:`Target a hero adjacent to you.
After the attack: Apply the "After the attack"
text of your resolved or discarded red card.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Smoke Bomb`,description:`Place the ::token_smoke_bomb:: Smoke bomb token in radius;
enemy heroes cannot target you or another
unit if the Smoke bomb token is on a straight
line between that enemy hero and their target.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:1,traits:[`USING_TOKENS`,`STRAIGHT_LINE`]},{name:`Flurry of blows`,description:`Each time after you perform an attack action,
you may repeat it once on a different target.`,color:`PURPLE`,level:4},{name:`Trip Mine`,description:`Place 2 Mine tokens, 1 ::token_blast:: blast and 1 ::token_dud:: dud,
facedown in radius; units may move through
them; remove mine tokens after an enemy
hero moves through them; for every blast
removed, that hero discards a card, if able.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,traits:[`DISCARD`,`REMOVING`,`IGNORING_OBSTACLES`,`USING_TOKENS`]},{name:`Crane Stance`,description:`Target a unit adjacent to you.
After the attack: Push an enemy unit
adjacent to you up to 3 spaces.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:5,secondaryDefense:5,traits:[`PUSHING_UNITS`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Poof!`,description:`Swap with a ::token_smoke_bomb:: Smoke bomb token in range;
if you do, block the attack.`,color:`GREEN`,level:1,initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,traits:[`SWAPPING_SELF`,`USING_TOKENS`]},{name:`Cluster Mine`,description:`Place 3 Mine tokens, 1 ::token_blast:: blast and 2 ::token_dud::
duds, facedown in radius; units may move
through them; remove mine tokens after an
enemy hero moves through them; for every
blast removed, that hero discards a card, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD`,`REMOVING`,`IGNORING_OBSTACLES`,`USING_TOKENS`]},{name:`Tiger Stance`,description:`Target a unit adjacent to you.
After the attack: You may move 1 space to a
space adjacent to the target. Push an enemy
unit adjacent to you up to 3 spaces.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:5,secondaryDefense:5,item:`INITIATIVE`,traits:[`PUSHING_UNITS`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Vanish`,description:`Swap with a ::token_smoke_bomb:: Smoke bomb token in range;
if you do, block the attack.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`USING_TOKENS`]},{name:`Death Grenade`,description:`Place a ::token_grenade:: Grenade token into a space in
radius. **End of turn:** Up to 1 enemy hero
adjacent to that token discards a card, or is
defeated. Remove the Grenade token.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`,`REMOVING`,`END_OF_TURN`,`USING_TOKENS`]},{name:`Viper Stance`,description:`Target a unit adjacent to you.
After the attack: You may swap
with a ::token_smoke_bomb:: Smoke bomb in radius.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:4,secondaryMovement:5,secondaryDefense:5,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Inner Strength`,description:`**This round:** Double your item bonuses.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:2,item:`ATTACK`,traits:[`THIS_ROUND`]},{name:`Minefield`,description:`Place 3 Mine tokens, 2 ::token_blast:: blasts and 1 ::token_dud::
dud, facedown in radius; units may move
through them; remove mine tokens after an
enemy hero moves through them; for every
blast removed, that hero discards a card, if able.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`DISCARD`,`REMOVING`,`IGNORING_OBSTACLES`,`USING_TOKENS`]},{name:`Dragon Stance`,description:`Target a unit adjacent to you.
After the attack: You may move 1 or 2 spaces
to a space adjacent to the target. Push an
enemy unit adjacent to you up to 3 spaces.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:5,secondaryDefense:6,item:`MOVEMENT`,traits:[`PUSHING_UNITS`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Ruse`,description:`Swap with a ::token_smoke_bomb:: Smoke bomb in range;
if you do, block the attack. You may place
the Smoke bomb into a space in range.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,item:`AREA`,traits:[`SWAPPING_SELF`]},{name:`Holy Death Grenade`,description:`Place a ::token_grenade:: Grenade token into a space in
radius. **End of turn:** Up to 2 enemy heroes
adjacent to that token discard a card, or are
defeated. Remove the Grenade token.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`,traits:[`REMOVING`,`END_OF_TURN`,`USING_TOKENS`]},{name:`Cobra Stance`,description:`Target a unit adjacent to you.
After the attack: You may swap with
a ::token_smoke_bomb:: Smoke bomb in radius; if you do, you may
place the Smoke bomb into a space in radius.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Perfect Self`,description:`**Choose one, or both —**
>>**This round:** Double your item bonuses.
>>Take a Tier II card from your deck and add
>it to your dashboard as a permanent item.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:3,item:`RANGE`,traits:[`THIS_ROUND`,`MULTIPLE_CHOICE`]}],misa:[{name:`Watch How I Soar`,description:`**Choose one —**
>>Place yourself into a space
>at maximum range.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`DEFEAT`,`PLACING_SELF`,`MULTIPLE_CHOICE`]},{name:`Leaf on the Wind`,description:`Place yourself into a space
at maximum range.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryDefense:1,traits:[`PLACING_SELF`]},{name:`Swoop In`,description:`Place yourself into a space in radius adjacent
to two or more enemy units; if you do,
you may retrieve a discarded card.`,color:`SILVER`,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:3,traits:[`HEALING_SELF`,`PLACING_SELF`]},{name:`Power Overwhelming`,description:`Whenever you choose one, you may choose
two different options instead, in any order.
Each time after you place yourself, an enemy
hero adjacent to you discards a card, if able.`,color:`PURPLE`,level:4,traits:[`DISCARD`,`PLACING_SELF`]},{name:`Sudden Breeze`,description:`Move up to 3 spaces in a straight line, ignoring
obstacles; you may place an enemy unit you
moved through into a space adjacent to you.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:5,traits:[`MOVING_SELF`,`PLACING_ENEMY`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Challenge Accepted`,description:`Target a unit adjacent to you. After the attack:
**This turn:** Gain +2 ::defense_silver:: Defense.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:3,secondaryDefense:6,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Focus`,description:`**Next turn:** Before you perform a
primary action, you may move 1 space.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,traits:[`MOVING_SELF`,`NEXT_TURN`]},{name:`Gust of Wind`,description:`Move up to 4 spaces in a straight line, ignoring
obstacles; you may place an enemy unit you
moved through into a space adjacent to you.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:6,item:`ATTACK`,traits:[`MOVING_SELF`,`PLACING_ENEMY`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Matter of Honor`,description:`Target a unit adjacent to you. After the attack:
**This turn:** Gain +3 ::defense_silver:: Defense.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Discipline`,description:`**Next turn:** Before you perform a primary
action, move up to 2 spaces.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`MOVING_SELF`,`NEXT_TURN`]},{name:`Living Tornado`,description:`Swap two units at maximum radius.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`},{name:`Power Shot`,description:`Target a unit in range. After the attack: If the
target was at maximum range, you may move
it 1 space, to a space farther away from you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Dash and Slash`,description:`Move up to 4 spaces in a straight line,
ignoring obstacles; an enemy hero you
moved through discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:6,item:`DEFENSE`,traits:[`DISCARD`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Crushing Squall`,description:`Move up to 5 spaces in a straight line, ignoring
obstacles; you may place an enemy unit you
moved through into a space adjacent to you.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:6,item:`AREA`,traits:[`MOVING_SELF`,`PLACING_ENEMY`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Worthy Opponent`,description:`Target a unit adjacent to you.
After the attack:
**This turn:** Gain +5 ::defense_silver:: Defense.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:7,item:`MOVEMENT`,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Mastery`,description:`**Next turn:** Before you perform a
primary action, move up to 3 spaces.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`MOVING_SELF`,`NEXT_TURN`]},{name:`Storm Spirit`,description:`Swap two units in radius and
at equal distance from you.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`},{name:`Thunder Shot`,description:`Target a unit in range. After the attack:
If the target is not adjacent to you, you may move it
1 space, to a space farther away from you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Death from Above`,description:`Move up to 5 spaces in a straight line,
ignoring obstacles; an enemy hero you
moved through discards a card, if able.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:6,item:`RANGE`,traits:[`DISCARD`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]}],mortimer:[{name:`Knife of the Living Dead`,description:`Target a unit adjacent to you.
Before the attack: **Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Remove a Zombie token adjacent to the
>target; if you do, gain +1 ::attack_gold:: Attack.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:3,traits:[`BEFORE_THE_ATTACK`,`SCALING`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Shallow Graves`,description:`Target a hero adjacent to you.
Before the attack: **Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Remove a Zombie token adjacent to the
>target; if you do, gain +1 ::attack_gold:: Attack.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:1,traits:[`BEFORE_THE_ATTACK`,`SCALING`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`STAT_CHANGING`,`ATTACK_HERO`]},{name:`Awaken!`,description:`Place up to 4 ::token_zombie:: Zombie tokens into
spaces adjacent to you, or into spawn
points in radius. Zombie tokens are
not removed at the end of round.`,color:`SILVER`,initiative:6,primaryAction:`DEFENSE_SKILL`,primaryValue:3,modifier:`AREA`,modifierValue:4,traits:[`END_OF_ROUND`,`USING_TOKENS`,`SPAWN_POINTS`]},{name:`Crawling Dead`,description:`Target a unit adjacent to you.
After the attack: **Choose one —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Another enemy hero in radius, adjacent to
>a Zombie token, discards a card, if able.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,traits:[`DISCARD`,`MOVING_HEROES`,`AFTER_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Corpse Slam`,description:`**Choose one —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space; that Zombie token may push a
>unit or a token adjacent to it 1 space.
>>Move 1 space.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Stage Dive`,description:`**Choose one —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Swap with a Zombie token in range.`,color:`GREEN`,level:1,initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,traits:[`SWAPPING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Walking Dead`,description:`Target a unit adjacent to you.
After the attack: **Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Another enemy hero in radius, adjacent to
>a Zombie token, discards a card, if able;
>each enemy hero can only be targeted once.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`,traits:[`DISCARD`,`MOVING_HEROES`,`AFTER_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Braains...!`,description:`Target a unit adjacent to you.
Before the attack: **Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>If an enemy hero in radius is adjacent to
>a Zombie token, retrieve a discarded card.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`,traits:[`HEALING_SELF`,`MOVING_HEROES`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Racing Dead`,description:`Target a unit adjacent to you.
After the attack: **Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>Another enemy hero in radius, adjacent to
>a Zombie token, discards a card, if able;
>each enemy hero can only be targeted once.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:8,item:`RANGE`,traits:[`DISCARD`,`MOVING_HEROES`,`AFTER_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Braaaaaaaains...!`,description:`Target a unit adjacent to you.
Before the attack: **Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in radius 1 space.
>>If an enemy hero in radius is adjacent to
>a Zombie token, retrieve a discarded card.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:8,item:`MOVEMENT`,traits:[`HEALING_SELF`,`MOVING_HEROES`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Morbid Mosh`,description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space; that Zombie token may push a
>unit or a token adjacent to it 1 space.
>>Move 1 space.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Robbing Zombies`,description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space. Gain 1 coin.
>>Move 1 space.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`MOVING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Macabre Mayhem`,description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space; that Zombie token may push a
>unit or a token adjacent to it 1 space.
>>Move 1 space.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:`AREA`,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Stalking Scalpers`,description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range up to
>1 space. Gain 1 coin.
>>Move 1 space.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`MOVING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Crowd Drift`,description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Swap with a Zombie token in range.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`SWAPPING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Gathering Horde`,description:`**Choose up to two times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Once per turn: Replace an enemy minion
>in range adjacent to two or more Zombie
>tokens with a Zombie token.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`PLACING_ENEMY`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Crowd Surf`,description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Swap with a Zombie token in range.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`SWAPPING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Army of Darkness`,description:`**Choose up to three times —**
>>Move a ::token_zombie:: Zombie token in range 1 space.
>>Once per turn: Replace an enemy minion
>in range adjacent to two or more Zombie
>tokens with a Zombie token.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`PLACING_ENEMY`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Master of Puppets`,description:`Whenever you would choose up
to three times, you may choose
up to five times instead.`,color:`PURPLE`,level:4}],mrak:[{name:`Fissure`,description:`Target a unit adjacent to you. After the attack:
Place a ::token_rock:: Rock token in each of the first
three empty spaces in the straight line
from you in the direction of the attack.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:3,traits:[`AFTER_THE_ATTACK`,`USING_TOKENS`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Lesser Fissure`,description:`Target a hero adjacent to you. After the attack:
Place a ::token_rock:: Rock token in each of the first
three empty spaces in the straight line
from you in the direction of the attack.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:2,traits:[`AFTER_THE_ATTACK`,`USING_TOKENS`,`STRAIGHT_LINE`,`ATTACK_HERO`]},{name:`Stone Grip`,description:`Place exactly 3 ::token_rock:: Rock tokens into empty
spaces adjacent to an enemy hero in range,
and as far away from you as possible.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryDefense:4,traits:[`USING_TOKENS`]},{name:`Seismic Slam`,description:`An enemy hero in radius adjacent
to terrain, or to a ::token_rock:: Rock token,
discards a card, or is defeated.
~(The ::attack_silver:: secondary Attack action is non-ranged.)`,color:`RED`,level:1,initiative:7,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:7,secondaryAttack:6,traits:[`DISCARD_OR_KILL`,`USING_TOKENS`,`TERRAIN`,`ATTACK_UNIT`]},{name:`Boulder Rush`,description:`Push a token, or an enemy unit, adjacent to
you 1 or 2 spaces, ignoring obstacles;
you may move up to 2 spaces in the
direction of the push, ignoring obstacles.`,color:`BLUE`,level:1,initiative:8,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`USING_TOKENS`]},{name:`Treacherous Ground`,description:`You may move a unit in range 1 space to a
space adjacent to terrain, or a ::token_rock:: Rock token.`,color:`GREEN`,level:1,initiative:6,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,traits:[`MOVING_UNITS`,`USING_TOKENS`,`TERRAIN`]},{name:`Seismic Assault`,description:`An enemy hero in radius adjacent
to terrain, or to a ::token_rock:: Rock token,
discards a card, or is defeated.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:8,secondaryAttack:7,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`,`USING_TOKENS`,`TERRAIN`,`ATTACK_UNIT`]},{name:`Stone Carapace`,description:`**This round:** If you would discard a card from
your hand, you may discard this card instead;
you may discard this card to perform its
defense action, as if it was in your hand.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`MOVEMENT`,primaryValue:4,secondaryDefense:6,secondaryAttack:7,item:`DEFENSE`,traits:[`THIS_ROUND`,`ATTACK_UNIT`]},{name:`Rockslide`,description:`You may move a unit in range 1 space to a
space adjacent to terrain, or a ::token_rock:: Rock token.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`MOVING_UNITS`,`USING_TOKENS`,`TERRAIN`]},{name:`Rolling Stone`,description:`Move any number of spaces in a straight
line, ignoring obstacles, without moving
through more than one empty space.
~(The starting space and the destination space do not count.)`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Boulder Blitz`,description:`Push a token, or an enemy unit, adjacent to
you 1, 2 or 3 spaces, ignoring obstacles;
you may move up to 3 spaces in the
direction of the push, ignoring obstacles.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`DEFENSE`,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`USING_TOKENS`]},{name:`Stomping Step`,description:`Move a unit in radius which is adjacent
to terrain, or to a ::token_rock:: Rock token, 1 space.
Place a Rock token in the space it occupied.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:7,item:`ATTACK`,traits:[`MOVING_UNITS`,`USING_TOKENS`,`TERRAIN`]},{name:`Avalanche`,description:`You may move a unit in range 1 space to a
space adjacent to terrain, or a ::token_rock:: Rock token.
May repeat once.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`AREA`,traits:[`MOVING_UNITS`,`USING_TOKENS`,`TERRAIN`]},{name:`Strolling Stone`,description:`Move any number of spaces in a straight
line, ignoring obstacles, without moving
through more than two empty spaces.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`,traits:[`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Boulderdozer`,description:`Push a token, or an enemy unit, adjacent to
you 1, 2, 3 or 4 spaces, ignoring obstacles;
you may move up to 4 spaces in the
direction of the push, ignoring obstacles.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`MOVEMENT`,traits:[`PUSHING_UNITS`,`PUSHING_TOKENS`,`MOVING_SELF`,`IGNORING_OBSTACLES`,`USING_TOKENS`]},{name:`Ground Shaker`,description:`Move a unit in radius which is adjacent
to terrain, or to a ::token_rock:: Rock token, 1 space.
Place a Rock token in the space it occupied.
May repeat once on a different target.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:7,item:`ATTACK`,traits:[`MOVING_UNITS`,`USING_TOKENS`,`TERRAIN`]},{name:`Epicenter`,description:`An enemy hero in radius adjacent to terrain,
or to a ::token_rock:: Rock token, discards a card, or is
defeated. May repeat once on a different target.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:8,secondaryAttack:7,item:`RANGE`,traits:[`DISCARD_OR_KILL`,`USING_TOKENS`,`TERRAIN`,`ATTACK_UNIT`]},{name:`Rock Solid`,description:`You may retrieve a discarded card.
**This round:** If you would discard a card from
your hand, you may discard this card instead;
you may discard this card to perform its
defense action, as if it was in your hand.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`MOVEMENT`,primaryValue:4,secondaryDefense:6,secondaryAttack:7,item:`DEFENSE`,traits:[`HEALING_SELF`,`THIS_ROUND`,`ATTACK_UNIT`]},{name:`Rock and a Hard Place`,description:`Once per turn, after you place one or more
::token_rock:: Rock tokens into one or more spaces
adjacent to one or more enemy heroes,
each of those heroes discards a card, if able.`,color:`PURPLE`,level:4,traits:[`USING_TOKENS`]}],nebkher:[{name:`Mind Grip`,description:`**Choose one —**
>>Perform an action on the card in the previous
>turn slot of an enemy hero in range; if you
>would place any tokens this way, place ::token_illusion::
>Illusion tokens instead; skip giving markers.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:5,secondaryMovement:1,secondaryDefense:2,traits:[`DEFEAT`,`MULTIPLE_CHOICE`,`USING_MARKERS`,`USING_TOKENS`]},{name:`Mind Probe`,description:`Perform an action on the card in the previous
turn slot of an enemy hero in range; if you
would place any tokens this way, place ::token_illusion::
Illusion tokens instead; do not use markers.`,color:`GOLD`,handicapped:!0,initiative:8,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`NEXT_TURN`,`USING_MARKERS`,`USING_TOKENS`]},{name:`Diabolical Laughter`,description:`Laugh diabolically;
if you do, **choose up to three times —**
>>Swap with an ::token_illusion:: Illusion token in radius.
>>Place an Illusion token in an adjacent space.
>>Swap two resolved cards of an enemy hero
>in radius, without canceling active effects.`,color:`SILVER`,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryDefense:3,traits:[`SWAPPING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`What the Hell Are You?`,description:`Each time after you laugh diabolically as part
of performing an action, all enemy heroes
in radius discard a card, or are defeated.`,color:`PURPLE`,level:4,modifier:`AREA`,modifierValue:5},{name:`Imbue Doubt`,description:`Name a color. **Next turn, after playing cards:**
An enemy hero in radius discards
a card of that color, if able.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,traits:[`DISCARD`,`NEXT_TURN`]},{name:`Phantasmal Sentry`,description:`**Choose one —**
>>Target a hero in range adjacent
>to an ::token_illusion:: Illusion token in range.
>>Target a unit adjacent to you.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Fleeting Image`,description:`Place an ::token_illusion:: Illusion token in radius.
You may swap with an Illusion token in play.`,color:`GREEN`,level:1,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,traits:[`SWAPPING_SELF`,`USING_TOKENS`]},{name:`Time to Reconsider`,description:`Name a color. **Next turn, after playing cards:**
An enemy hero in radius discards
a card of that color, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`DISCARD`,`NEXT_TURN`]},{name:`Crack in Reality`,description:`Split the board into two sides with a straight
line of spaces drawn through your space.
**This turn:** Units on either side of the line
cannot interact with objects and spaces on the
other side of the line, as if they did not exist.
~(This includes movement, placement, radius-based effects, etc.)`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`,traits:[`THIS_TURN`,`STRAIGHT_LINE`]},{name:`Phantasmal Warrior`,description:`**Choose one —**
>>Before the attack: Move an ::token_illusion:: Illusion token
>in range up to 1 space to a space adjacent
>to an enemy hero in range. Target that hero.
>>Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:5,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Twist Fate`,description:`Target a unit in range. After the attack:
You may swap an enemy unit in range
with an ::token_illusion:: Illusion token adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`SWAPPING_ENEMY`,`AFTER_THE_ATTACK`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Multiple Projections`,description:`Place up to 2 ::token_illusion:: Illusion tokens in radius.
You may swap with an Illusion token in play.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`SWAPPING_SELF`,`USING_TOKENS`]},{name:`Illusionary Force`,description:`Place up to 2 ::token_illusion:: Illusion tokens in radius.
**This round:** While you are performing
actions, all Illusion tokens count as both
tokens and friendly melee minions.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`THIS_ROUND`,`USING_TOKENS`,`COUNTS_AS`]},{name:`An Illusion of Choice`,description:`Name a color. **Next turn, after playing cards:**
Up to two enemy heroes in radius each
discard a card of that color, if able.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`MOVEMENT`,traits:[`NEXT_TURN`]},{name:`Shift Reality`,description:`Split the board into two sides with a straight
line of spaces drawn through your space.
**This turn:** Units on either side of the line
cannot interact with you, nor with objects
and spaces on the other side of the line,
as if they did not exist.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:5,item:`RANGE`,traits:[`THIS_TURN`,`STRAIGHT_LINE`]},{name:`Phantasmal Champion`,description:`**Choose one —**
>>Before the attack: Move an ::token_illusion:: Illusion token
>in range up to 2 spaces to a space adjacent
>to an enemy hero in range. Target that hero.
>>Target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:5,secondaryMovement:3,secondaryDefense:7,item:`AREA`,traits:[`HIGH_RANGE_ATTACK`,`BEFORE_THE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Devious Scheme`,description:`Target a unit in range. After the attack:
You may swap an enemy unit in range
with an ::token_illusion:: Illusion token in range.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`SWAPPING_ENEMY`,`AFTER_THE_ATTACK`,`USING_TOKENS`,`ATTACK_UNIT`]},{name:`Master of Illusions`,description:`Place up to 3 ::token_illusion:: Illusion tokens in radius.
You may swap with an Illusion token in play.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`SWAPPING_SELF`,`USING_TOKENS`]},{name:`Illusionary Army`,description:`Place up to 3 ::token_illusion:: Illusion tokens in radius.
**This round:** While you are performing
actions, all Illusion tokens count as both
tokens and friendly melee minions.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`THIS_ROUND`,`USING_TOKENS`,`COUNTS_AS`]}],razzle:[{name:`Stunt Doubles`,description:`Target a unit adjacent to you. After the attack:
Spawn up to 3 more of you in radius; each of
you is the same hero, except when actions
are performed. If defeated, remove all of you.`,color:`GOLD`,initiative:13,primaryAction:`ATTACK`,primaryValue:2,modifier:`AREA`,modifierValue:1,secondaryMovement:1,secondaryDefense:1,traits:[`REMOVING`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Stunted Doubles`,description:`Target a hero adjacent to you. After the attack:
Spawn up to 3 more of you in radius; each of
you is the same hero, except when actions
are performed. If defeated, remove all of you.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`ATTACK`,primaryValue:1,modifier:`AREA`,modifierValue:1,secondaryMovement:1,secondaryDefense:1,traits:[`REMOVING`,`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Crowd Control`,description:`When used as a defense action, +2 ::defense_silver::
Defense for each other one of you in radius.
When used as a skill action,
remove all other you in play.`,color:`SILVER`,initiative:13,primaryAction:`DEFENSE_SKILL`,primaryValue:1,primaryValueSign:`PLUS`,modifier:`AREA`,modifierValue:3,traits:[`REMOVING`,`SCALING`,`STAT_CHANGING`]},{name:`Twin Strike`,description:`After you perform a basic attack action,
another one of you may repeat it once,
targeting a different unit.`,color:`PURPLE`,level:4},{name:`Alleyoop`,description:`Swap with a friendly hero in range.
Move another one of you up to 1 space.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Phantom Strike`,description:`Target a unit adjacent to you. After the attack:
If there is more than one of you in play,
you may remove one of you.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:3,traits:[`REMOVING`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Tightrope`,description:`After you move, you may move
another one of you 1 space.`,color:`GREEN`,level:1,initiative:2,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:1,traits:[`MOVING_SELF`]},{name:`Group Performance`,description:`Swap with a friendly hero in range.
Move another one of you up to 2 spaces.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:3,item:`ATTACK`,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Hit and Gone`,description:`Target a unit adjacent to you. After the attack:
You may remove one or more of you
in play, except the last one of you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`REMOVING`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`High Wire`,description:`After you move, move another
one of you up to 2 spaces.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:2,item:`INITIATIVE`},{name:`Magic Trick`,description:`Push a unit adjacent to you up to 2 spaces;
for every space the target moved, move this
one of you one space in the opposite direction.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:3,item:`DEFENSE`,traits:[`PUSHING_UNITS`]},{name:`Rummage`,description:`Target a unit adjacent to you.
After the attack: If there is another one of you
in radius, you may retrieve a discarded card.
~(All of you share cards in hand, deck, and discard.)`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`INITIATIVE`,traits:[`HEALING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Theatrics`,description:`Swap with a minion in range.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`SWAPPING_SELF`,`SWAPPING_MINIONS`]},{name:`Team Spirit`,description:`Swap with a friendly hero in range.
Move another one of you up to 3 spaces.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:3,secondaryDefense:3,item:`AREA`,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Into Thin Air`,description:`Target a unit adjacent to you. After the attack:
You may remove one or more of you
in play, including all of you.
~(If all are removed, you are not defeated. Respawn as normal.)`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:4,item:`RANGE`,traits:[`REMOVING`,`AFTER_THE_ATTACK`,`RESPAWN`,`ATTACK_UNIT`]},{name:`Wire Dancers`,description:`After you move, move another
one of you up to 3 spaces.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`MOVEMENT`,primaryValue:2,secondaryDefense:2,item:`INITIATIVE`},{name:`Aaaand it's gone!`,description:`Push a unit adjacent to you up to 3 spaces;
for every space the target moved, move this
one of you one space in the opposite direction.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:3,item:`DEFENSE`,traits:[`PUSHING_UNITS`]},{name:`Ransack`,description:`Target a unit adjacent to you.
After the attack: For each other one of you
in radius, you may retrieve a discarded card.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`MOVEMENT`,traits:[`HEALING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Spectacle`,description:`Swap with a minion in range.
May repeat once by another one of you,
targeting a different minion.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`SWAPPING_SELF`,`SWAPPING_MINIONS`]}],rowenna:[{name:`Code of Chivalry`,description:`Target a unit adjacent to you.
Before the attack: If you target a hero,
both you and the target may
retrieve a discarded card.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`HEALING_TEAM`,`HEALING_ENEMY`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Earn the Spurs`,description:`Target a hero adjacent to you.
Before the attack: Both you and the target
may retrieve a discarded card.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:1,traits:[`BEFORE_THE_ATTACK`,`ATTACK_HERO`]},{name:`Throw the Gauntlet`,description:`Place yourself into a space in range adjacent
to an enemy hero in range; that hero may
move 1 space; if they do, gain 2 coins.`,color:`SILVER`,initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryDefense:3,traits:[`FARMING_FOR_SELF`,`MOVING_SELF`,`PLACING_SELF`]},{name:`Fabled Lance`,description:`All your attack actions gain the "Ranged"
subtype, target a unit in range, and count
as having a printed ::range_purple:: Range value of 2.`,color:`PURPLE`,level:4,modifier:`RANGE`,modifierValue:2,traits:[`COUNTS_AS`]},{name:`Stand Guard`,description:`Swap with a friendly unit in range
which is adjacent to an enemy hero,
or who has a card in the discard.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:6,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Token of Gratitude`,description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius gains 1 coin.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:1,secondaryMovement:4,secondaryDefense:6,traits:[`FARMING_FOR_TEAM`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Close Quarters`,description:`After movement, if you are adjacent to
an enemy hero, you may **Choose one —**
>>Place a friendly minion in radius into a
>space adjacent to that enemy hero.
>>Place an enemy minion in radius into a
>space adjacent to you.`,color:`GREEN`,level:1,initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:2,secondaryDefense:3,traits:[`PLACING_TEAM`,`PLACING_ENEMY`,`MULTIPLE_CHOICE`]},{name:`Fair Share`,description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius gains 1 coin.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`FARMING_FOR_TEAM`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Feat of Bravery`,description:`Target a unit adjacent to you.
After the attack: A friendly hero in radius
may retrieve a discarded card.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:4,secondaryMovement:4,secondaryDefense:7,item:`DEFENSE`,traits:[`HEALING_TEAM`,`DISCARD_TEAM`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Melee`,description:`After movement, if you are adjacent to
an enemy hero, you may **Choose one —**
>>Place a friendly minion in radius into a
>space adjacent to that enemy hero.
>>Place an enemy minion in radius into a
>space adjacent to you.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryDefense:4,item:`ATTACK`,traits:[`PLACING_TEAM`,`PLACING_ENEMY`,`MULTIPLE_CHOICE`]},{name:`Opening Shots`,description:`If both you and an enemy hero in radius
have no cards in the discard, that hero
discards a card, if able.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`DISCARD`]},{name:`Protect the Weak`,description:`Swap with a friendly unit in range
which is adjacent to an enemy hero,
or who has a card in the discard.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:`ATTACK`,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Accept Surrender`,description:`Defeat an enemy hero adjacent to
you with no cards in hand.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`DEFENSE`,traits:[`DEFEAT`]},{name:`Grand Melee`,description:`After movement, if you are adjacent to
an enemy hero, **Choose up to two times —**
>>Place a friendly minion in radius into a
>space adjacent to that enemy hero.
>>Place an enemy minion in radius into a
>space adjacent to you.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryDefense:4,item:`ATTACK`,traits:[`PLACING_TEAM`,`PLACING_ENEMY`,`MULTIPLE_CHOICE`]},{name:`Opening Volley`,description:`If both you and an enemy hero in radius
have no cards in the discard, that hero
discards a card, if able. May repeat once.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`DISCARD`]},{name:`Defend the Innocent`,description:`Swap with a friendly unit in range
which is adjacent to an enemy hero,
or who has a card in the discard.
You may retrieve a discarded card.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:7,item:`AREA`,traits:[`HEALING_SELF`,`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Glorious Triumph`,description:`Defeat an enemy hero adjacent to you
with no cards in hand; your friendly
heroes gain triple assist coins.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:7,item:`MOVEMENT`,traits:[`FARMING_FOR_TEAM`,`DEFEAT`]},{name:`Paragon of Grace`,description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius gains 1 coin.
May repeat once on a different target.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:`RANGE`,traits:[`FARMING_FOR_TEAM`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Paragon of Valor`,description:`Target a unit adjacent to you.
After the attack: A friendly hero in radius
may retrieve a discarded card; if they do,
you may repeat once on a different target.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:4,secondaryMovement:4,secondaryDefense:8,item:`DEFENSE`,traits:[`HEALING_TEAM`,`DISCARD_TEAM`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]}],sabina:[{name:`Point Blank Shot`,description:`Target a unit in range. After the attack:
If the target is adjacent to you, push it 1 space.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:1,secondaryMovement:1,secondaryDefense:2,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Bang`,description:`Target a hero adjacent to you.
After the attack: Push the target 1 space.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Back to Back`,description:`Swap with a friendly minion in radius.`,color:`SILVER`,initiative:8,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:2,traits:[`SWAPPING_SELF`,`SWAPPING_TEAM`]},{name:`Big Sodding Gun`,description:`Your basic attack has +2 ::range_gold:: Range and
+2 ::attack_gold:: Attack. If you push an enemy hero,
that hero discards a card, or is defeated.`,color:`PURPLE`,level:4,traits:[`DISCARD_OR_KILL`,`PUSHING_HEROES`,`STAT_CHANGING`]},{name:`Listen Up`,description:`Swap two minions in radius.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:1,secondaryMovement:3,secondaryDefense:3},{name:`Quickdraw`,description:`Target a unit in range. +3 ::attack_red:: Attack if the
target played an attack card this turn.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,traits:[`THIS_TURN`,`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Troop Movement`,description:`Move a friendly minion in radius 1 space,
to a space in radius. May repeat once.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,traits:[`MOVING_TEAM`]},{name:`Roger Roger`,description:`Swap two minions in radius.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Gunslinger`,description:`Target a unit in range. +3 ::attack_red:: Attack if the
target played an attack card this turn.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`THIS_TURN`,`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Marching Orders`,description:`Move a friendly minion in radius 1 space,
to a space in radius. May repeat once.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`MOVING_TEAM`]},{name:`Steady Advance`,description:`If there are two or more friendly minions in
radius, you may retrieve a discarded card;
if you do, you may move 1 space.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`HEALING_SELF`,`MOVING_SELF`]},{name:`Shootout`,description:`Target a unit in range. After the attack:
If the target was adjacent to you, remove
up to one enemy minion adjacent to you.
~(You gain no coins for removing a minion, only for defeating.)`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`REMOVING`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Close Support`,description:`An enemy hero in radius adjacent to your
friendly minion discards a card, if able.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`DISCARD`]},{name:`Ready and Waiting`,description:`Swap two minions in radius,
ignoring heavy minion immunity.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`},{name:`Dead Shot`,description:`Target a unit in range. +4 ::attack_red:: Attack if the
target played an attack card this turn.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`MOVEMENT`,traits:[`THIS_TURN`,`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Path to Victory`,description:`Move a friendly minion in radius 1 space, to a
space in radius. May repeat up to two times.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`RANGE`,traits:[`MOVING_TEAM`]},{name:`Unwavering Resolve`,description:`If there are two or more friendly minions in
radius, you may retrieve a discarded card;
if you do, move up to 2 spaces.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`HEALING_SELF`,`MOVING_SELF`]},{name:`Bullet Hell`,description:`Target a unit in range. After the attack:
If the target was adjacent to you, remove
up to two enemy minions adjacent to you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,item:`AREA`,traits:[`REMOVING`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Covering Fire`,description:`An enemy hero in radius adjacent to your
friendly minion discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`]}],silverarrow:[{name:`Shoot and Scoot`,description:`Target a unit at maximum range.
After the attack: If able, you may
fast travel to an adjacent zone.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`FAST_TRAVEL`,`ATTACK_UNIT`]},{name:`Keep the Distance`,description:`Target a hero at maximum range.
After the attack: If able, you may
fast travel to an adjacent zone.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`FAST_TRAVEL`,`ATTACK_HERO`]},{name:`Trailblazer`,description:`You may fast travel, if able.
**This round:** You and friendly heroes
in radius may ignore obstacles while
performing movement actions.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryDefense:1,traits:[`THIS_ROUND`,`FAST_TRAVEL`,`IGNORING_OBSTACLES`]},{name:`Wild Hunt`,description:`Each time before you perform an action,
you may move 2 spaces in a straight line.`,color:`PURPLE`,level:4,traits:[`MOVING_SELF`,`STRAIGHT_LINE`]},{name:`Grasping Roots`,description:`**This turn:** Enemy heroes in radius cannot
fast travel, or move more than 1 space
with a movement action.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:3,traits:[`THIS_TURN`,`FAST_TRAVEL`,`STAT_CHANGING`]},{name:`Snap Shot`,description:`**Choose one —**
>>Target a unit in range, which is not
>adjacent to any other unit.
>>Target a unit adjacent to you.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:5,secondaryDefense:5,traits:[`MULTIPLE_CHOICE`,`ATTACK_UNIT`]},{name:`Disorient`,description:`Move an enemy unit adjacent to you 1 space;
if you do, you may move 1 space.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:1,traits:[`MOVING_SELF`,`MOVING_ENEMY`]},{name:`Entangling Vines`,description:`**This turn:** Enemy heroes in radius cannot
fast travel, or move more than 1 space
with a movement action.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`DEFENSE`,traits:[`THIS_TURN`,`FAST_TRAVEL`,`STAT_CHANGING`]},{name:`Opportunity Shot`,description:`**Choose one —**
>>Target a unit in range, which is not
>adjacent to any other unit.
>>Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:5,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`]},{name:`Divert Attention`,description:`Move an enemy unit adjacent to you up
to 2 spaces; if you do, move up to that
number of spaces in a straight line.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2,item:`INITIATIVE`,traits:[`MOVING_ENEMY`,`STRAIGHT_LINE`]},{name:`Warning Shot`,description:`**End of turn:** An enemy hero in radius
discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`ATTACK`,traits:[`DISCARD`,`END_OF_TURN`]},{name:`Long Shot`,description:`Target a unit at maximum range.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:4,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_UNIT`]},{name:`Fae Healing`,description:`A hero in radius may retrieve a discarded
card; if they do, that hero gains 1 coin.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`HEALING_TEAM`,`HEALING_ENEMY`]},{name:`Grappling Branches`,description:`**This turn:** Enemy heroes in radius cannot
fast travel, or move more than 1 space
with a movement action.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`THIS_TURN`,`FAST_TRAVEL`,`STAT_CHANGING`]},{name:`Clear Shot`,description:`**Choose one —**
>>Target a unit in range, which is not
>adjacent to any other unit.
>>Target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:5,secondaryDefense:6,item:`AREA`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`ATTACK_UNIT`]},{name:`Lead Astray`,description:`Move an enemy unit adjacent to you up
to 3 spaces; if you do, move up to that
number of spaces in a straight line.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:2,item:`MOVEMENT`,traits:[`MOVING_ENEMY`,`STRAIGHT_LINE`]},{name:`Treetop Sentinel`,description:`**End of turn:** An enemy hero in radius
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`RANGE`,traits:[`DISCARD_OR_KILL`,`END_OF_TURN`]},{name:`Rain of Arrows`,description:`Target a unit at maximum range.
If you target a hero, repeat once on a different
hero; if you do, may repeat once on a minion.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:5,secondaryDefense:5,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Nature's Blessing`,description:`A hero in radius may retrieve a discarded
card; if they do, that hero gains 2 coins.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`HEALING_TEAM`,`HEALING_ENEMY`]}],snorri:[{name:`Rune Sigils`,description:`Target a unit adjacent to you;
if a rune is active:
::rune_bird::: You may target a minion in range instead.
::rune_axe::: +3 ::attack_gold:: Attack.
::rune_anvil::: If you target a hero, gain 3 coins.
::rune_horn::: Repeat once on a different hero in range.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:2,traits:[`FARMING_FOR_SELF`,`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`,`ATTACK_HERO`,`ATTACK_MINION`]},{name:`Rune Shards`,description:`Target a hero adjacent to you;
if a rune is active:
::rune_axe::: +3 ::attack_gold:: Attack.
::rune_anvil::: Gain 2 coins.
::rune_horn::: Repeat once on a different hero in range.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:1,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`FARMING_FOR_SELF`,`SCALING`,`STAT_CHANGING`,`ATTACK_HERO`]},{name:`Inscribe the Runes`,description:`Give yourself 4 ::rune_axe_marker::::rune_bird_marker::::rune_anvil_marker::::rune_horn_marker:: Rune markers
and place one below each of your turn slots.
A rune is active as long as it is below the
turn slot matching the current turn.
Rune markers are not removed at the
end of round, nor if you are defeated.`,color:`SILVER`,initiative:1,primaryAction:`SKILL`,secondaryDefense:3,traits:[`END_OF_ROUND`,`USING_MARKERS`]},{name:`Rune Mastery`,description:`Each time you perform an action, choose
one inactive rune; that rune counts as
a second active rune for this action.`,color:`PURPLE`,level:4},{name:`Safe Passage`,description:`If the ::rune_bird:: rune is active,
**This turn:** You may ignore obstacles.`,color:`BLUE`,level:1,initiative:9,primaryAction:`MOVEMENT`,primaryValue:3,secondaryDefense:5,traits:[`THIS_TURN`,`IGNORING_OBSTACLES`]},{name:`Runic Dagger`,description:`Target a unit adjacent to you.
After the attack: If the ::rune_anvil:: rune is active,
you may retrieve a discarded card.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:3,secondaryDefense:6,traits:[`HEALING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Oath of Endurance`,description:`If a rune is active:
::rune_horn::: Block a basic attack.
::rune_axe::: Block a non-ranged attack.
**This Turn:** You are immune to enemy actions.`,color:`GREEN`,level:1,initiative:5,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,traits:[`IMMUNITY_GAIN`,`THIS_TURN`]},{name:`Hidden Passage`,description:`If a rune is active:
::rune_bird::: **This turn:** You may ignore obstacles.
::rune_anvil::: **This turn:** You are immune to enemy
actions.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`MOVEMENT`,primaryValue:3,secondaryDefense:6,item:`ATTACK`,traits:[`IMMUNITY_GAIN`,`THIS_TURN`,`IGNORING_OBSTACLES`]},{name:`Ancestral Boon`,description:`If a rune is active,
a friendly hero in radius may:
::rune_axe::: Swap a resolved card with a card in hand.
::rune_anvil::: Retrieve all their discarded cards.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`DISCARD_TEAM`]},{name:`Runic Hammer`,description:`Before the attack: If the ::rune_horn:: rune
is active, you may move 1 space.
Target a unit adjacent to you.
After the attack: If the ::rune_anvil:: rune is active,
you may retrieve a discarded card.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`,traits:[`HEALING_SELF`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Runecaster`,description:`Target a unit at maximum range.
After the attack: If a rune is active:
::rune_horn::: Move up to 2 spaces.
::rune_axe::: An enemy hero who was adjacent to the
target discards a card, or is defeated.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`DISCARD_OR_KILL`,`HIGH_RANGE_ATTACK`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Oath of Fortitude`,description:`If a rune is active:
::rune_horn::: Block a basic attack;
::rune_axe::: Block a non-ranged attack;
::rune_bird::: Block a ranged attack;
**This Turn:** You are immune to enemy actions.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`INITIATIVE`,traits:[`IMMUNITY_GAIN`,`THIS_TURN`]},{name:`Runetrap`,description:`If a rune is active, an enemy hero in radius:
::rune_horn::: Discards a green card, if able.
::rune_axe::: Discards a silver card, if able.
::rune_anvil::: Discards a blue card, if able.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`DISCARD`]},{name:`Deep Passage`,description:`If a rune is active:
::rune_bird::: **This turn:** You may ignore obstacles.
::rune_anvil::: **This turn:** You are immune to enemy
actions.
::rune_horn::: Gain +2 ::movement_blue:: Movement.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:3,secondaryDefense:6,item:`RANGE`,traits:[`IMMUNITY_GAIN`,`THIS_TURN`,`IGNORING_OBSTACLES`,`STAT_CHANGING`]},{name:`Ancestral Grace`,description:`If a rune is active,
a friendly hero in radius may:
::rune_axe::: Swap a resolved card with a card in hand.
::rune_anvil::: Retrieve all their discarded cards.
::rune_bird::: Swap one of their items with an item on
their card of the same tier and color.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`DISCARD_TEAM`]},{name:`Runic Battleaxe`,description:`Before the attack: If the ::rune_horn:: rune
is active, you may move 1 space.
Target a unit adjacent to you.
After the attack: If a rune is active:
::rune_axe::: May repeat once on an enemy minion.
::rune_anvil::: You may retrieve a discarded card.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:3,secondaryDefense:7,item:`AREA`,traits:[`HEALING_SELF`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Runeblaster`,description:`If the ::rune_bird:: rune is active, target a unit in range,
otherwise target a unit at maximum range.
After the attack: If a rune is active:
::rune_horn::: Move up to 2 spaces.
::rune_axe::: An enemy hero who was adjacent to the
target discards a card, or is defeated.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`MOVEMENT`,traits:[`DISCARD_OR_KILL`,`HIGH_RANGE_ATTACK`,`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Oath of Perseverance`,description:`Choose one active rune:
::rune_horn::: Block a basic attack;
::rune_axe::: Block a non-ranged attack;
::rune_bird::: Block a ranged attack;
::rune_anvil::: Block a non-basic attack;
**This Turn:** You are immune to enemy actions.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2,item:`INITIATIVE`,traits:[`IMMUNITY_GAIN`,`THIS_TURN`]},{name:`Runebomb`,description:`Choose one active rune; depending on
that rune, an enemy hero in radius:
::rune_horn::: Discards a green card, if able.
::rune_axe::: Discards a silver card, if able.
::rune_anvil::: Discards a blue card, if able.
::rune_bird::: Discards a gold card, if able.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD`]}],swift:[{name:`Reload!`,description:`**Choose one —**
>>Perform the primary action of your
>rightmost resolved card.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:6,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:1,traits:[`DEFEAT`,`MULTIPLE_CHOICE`]},{name:`Backup`,description:`Perform the primary action of your rightmost
resolved card. If you perform an Attack
action this way, you cannot target minions.`,color:`GOLD`,handicapped:!0,initiative:6,primaryAction:`SKILL`,secondaryMovement:1,secondaryDefense:1},{name:`Bounce`,description:`Move 2 spaces in a straight line, ignoring
obstacles; if this card is already resolved as
you perform this action, may repeat once.`,color:`SILVER`,initiative:12,primaryAction:`SKILL`,secondaryDefense:2,traits:[`MOVING_SELF`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Bullet Time`,description:`After you resolve a basic card, you may
perform the primary action on that card;
you cannot target the same enemy hero
twice in the same turn this way.`,color:`PURPLE`,level:4},{name:`Steam Jump`,description:`Place yourself into a space in a straight
line in radius. Push an enemy unit
adjacent to you up to 1 space.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,traits:[`PUSHING_UNITS`,`PLACING_SELF`,`STRAIGHT_LINE`]},{name:`Snipe`,description:`Target a unit at maximum range,
and in a straight line.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:4,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Suppress`,description:`An enemy hero in radius who is not
adjacent to terrain discards a card, if able.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,traits:[`DISCARD`,`TERRAIN`]},{name:`Assault Jump`,description:`Place yourself into a space in a straight
line in radius. Push an enemy unit
adjacent to you up to 2 spaces.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`PUSHING_UNITS`,`PLACING_SELF`,`STRAIGHT_LINE`]},{name:`Prepared Shot`,description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Pin Down`,description:`An enemy hero in radius who is not
adjacent to terrain discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`DISCARD`,`TERRAIN`]},{name:`Delayed Jump`,description:`**End of turn:** Place yourself into a space
in radius not in a straight line from you.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:1,secondaryDefense:4,item:`DEFENSE`,traits:[`PLACING_SELF`,`END_OF_TURN`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`]},{name:`Shotgun`,description:`Target a unit in range. Before the attack:
An enemy hero adjacent to the target
discards a card, if able.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`DISCARD`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Mark for Death`,description:`Move an enemy minion in radius up
to 3 spaces to a space in radius.
**Next turn:** The first time an enemy minion
in radius is defeated, gain 1 coin.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:2,item:`INITIATIVE`,traits:[`FARMING_FOR_SELF`,`MOVING_ENEMY`,`NEXT_TURN`]},{name:`Drop Trooper`,description:`Place yourself into a space in a straight line
in radius. Push up to two enemy units
adjacent to you up to 2 spaces.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`PUSHING_UNITS`,`PLACING_SELF`,`STRAIGHT_LINE`]},{name:`Killshot`,description:`Target a unit in range, in a straight
line, and not adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:5,secondaryMovement:4,secondaryDefense:5,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Killing Ground`,description:`An enemy hero in radius who is not adjacent
to terrain discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`RANGE`,traits:[`DISCARD_OR_KILL`,`TERRAIN`]},{name:`Mobile Scout`,description:`**End of turn:** Place yourself into a space in
radius not in a straight line from you.
You may then fast travel, if able.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:1,secondaryDefense:4,item:`MOVEMENT`,traits:[`PLACING_SELF`,`END_OF_TURN`,`FAST_TRAVEL`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`]},{name:`Super-Shotgun`,description:`Target a unit in range. Before the attack:
An enemy hero adjacent to the target
discards a card, or is defeated.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,item:`AREA`,traits:[`DISCARD_OR_KILL`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Hunting Season`,description:`Move up to two enemy minions in radius,
up to 3 spaces each, to spaces in radius.
**Next turn:** The first two times an enemy
minion in radius is defeated, gain 1 coin.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`FARMING_FOR_SELF`,`NEXT_TURN`]}],takahide:[{name:`Float like a Butterfly`,description:`Swap this card with a different
gold card in your deck.
~(This card starts the game in your hand.)`,color:`GOLD`,initiative:8,primaryAction:`MOVEMENT`,primaryValue:5,secondaryDefense:8},{name:`Sting like a Bee`,description:`Target a unit at maximum range.
After the attack: Swap this card with
a different gold card in your deck.
~(This card starts the game in your deck.)`,color:`GOLD`,extra:!0,initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`HIGH_RANGE_ATTACK`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Strike like a Tiger`,description:`Target a unit adjacent to you.
After the attack: Swap this card with
a different gold card in your deck.
~(This card starts the game in your deck.)`,color:`GOLD`,extra:!0,initiative:9,primaryAction:`ATTACK`,primaryValue:7,secondaryMovement:3,secondaryDefense:3,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Bushido`,description:`Swap your gold card with a different
gold card in your deck; if you swap a
resolved or discarded card this way,
place the new card facedown.`,color:`SILVER`,initiative:5,primaryAction:`SKILL`,secondaryDefense:6},{name:`Shameful Display`,description:`~(You are defeated.)`,color:`SILVER`,handicapped:!0,initiative:5,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`},{name:`Set an Example`,description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius may swap their
unresolved card with a card in their hand.`,color:`RED`,level:1,initiative:11,primaryAction:`ATTACK`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Proven Warrior`,description:`Choose a card in the discard of a friendly
hero in radius. An enemy hero in radius
discards a card of the same color, if able.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,traits:[`DISCARD`,`DISCARD_TEAM`]},{name:`Come to Aid`,description:`A friendly hero in range may discard a card.
If that hero has a card in the discard,
you may move up to 3 spaces.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,traits:[`DISCARD_TEAM`,`MOVING_SELF`]},{name:`Lead from the Front`,description:`Target a unit adjacent to you. After the attack:
A friendly hero in radius may swap their
unresolved card with a card in their hand.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:2,item:`INITIATIVE`,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Spinning Blade`,description:`Target a unit adjacent to you. After the attack:
**This turn:** Empty spaces adjacent to you
count as obstacles for enemy units.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:2,item:`DEFENSE`,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`COUNTS_AS`,`ATTACK_UNIT`]},{name:`Hold my Saké`,description:`Target a unit adjacent to you.
After the attack: A friendly hero in radius
may swap their unresolved card with
a card in their hand, or in their discard.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:12,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:2,item:`MOVEMENT`,traits:[`DISCARD_TEAM`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Blade Helix`,description:`Target a unit adjacent to you.
After the attack: **This turn:** Empty spaces in
radius count as obstacles for enemy units.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:12,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:1,secondaryMovement:1,secondaryDefense:2,item:`RANGE`,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`COUNTS_AS`,`ATTACK_UNIT`]},{name:`Chosen Champion`,description:`Choose a card in the discard of a friendly
hero in radius. An enemy hero in radius
discards a card of the same color, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD`,`DISCARD_TEAM`]},{name:`Calculated Risk`,description:`A friendly hero in radius may discard an
attack card. If that hero has a card in the
discard, that hero may move up to 2 spaces.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`DISCARD_TEAM`,`MOVING_SELF`]},{name:`The Right Hand`,description:`Choose a card in the discard of a friendly
hero in radius. Up to two enemy heroes in
radius discard a card of the same color, if able.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`DISCARD_TEAM`]},{name:`Tactical Gambit`,description:`A friendly hero in radius may discard
an attack card. If that hero has a card
in the discard, that hero may move
up to 2 spaces, ignoring obstacles.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`,traits:[`DISCARD_TEAM`,`MOVING_SELF`,`IGNORING_OBSTACLES`]},{name:`Bring the Relief`,description:`A friendly hero in range may discard a card.
If that hero has a card in the discard,
you may move up to 4 spaces.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD_TEAM`,`MOVING_SELF`]},{name:`Pledge of Allegiance`,description:`A friendly hero in range may discard a card.
If that hero has a card in the discard,
both you and that hero gain 1 coin and
you may retrieve a discarded card.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`FARMING_FOR_TEAM`,`HEALING_SELF`,`DISCARD_TEAM`]},{name:`Commit Reserves`,description:`A friendly hero in range may discard a card.
If that hero has a card in the discard, you may
move up to 4 spaces, ignoring obstacles.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`AREA`,traits:[`DISCARD_TEAM`,`MOVING_SELF`,`IGNORING_OBSTACLES`]},{name:`Loyal Retainer`,description:`A friendly hero in range may discard a card.
If that hero has a card in the discard,
both you and that hero gain 2 coins and
you may retrieve a discarded card.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`FARMING_FOR_SELF`,`FARMING_FOR_TEAM`,`HEALING_SELF`,`DISCARD_TEAM`]},{name:`Ready for War`,description:`Return your silver card to your deck and take
two gold cards from your deck into your hand.
~(You now have a total hand size of 6 cards.)`,color:`PURPLE`,level:4}],tali:[{name:`Ice Blast`,description:`Target a unit adjacent to you. If the target
discards a card to defend, After the attack:
Another enemy hero in radius discards a
card of the same color, if able.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:4,secondaryMovement:1,secondaryDefense:1,traits:[`DISCARD`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Ice Shard`,description:`Target a hero adjacent to you. If the target
discards a card to defend, After the attack:
Another enemy hero in radius discards a
card of the same color, if able.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`DISCARD`,`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Commune with Spirits`,description:`A friendly hero in play names a color;
you may discard a card of that color.
Perform the primary action on a card
of that color in your discard.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,secondaryDefense:2,traits:[`DISCARD_TEAM`]},{name:`Reign of Winter`,description:`Each time after you defeat a minion with your
basic attack, an enemy hero in radius discards
a card of the color of your choice, if able.`,color:`PURPLE`,level:4,modifier:`AREA`,modifierValue:4,traits:[`DEFEAT`,`DISCARD`]},{name:`Cold Snap`,description:`Choose a direction. Move each enemy unit
in radius 1 space in that direction, if able.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5},{name:`Winter Dagger`,description:`Target a unit adjacent to you.
+3 ::attack_red:: Attack if this card is not in the discard.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:2,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Glacial Barrier`,description:`Place an ::token_ice:: Ice token in radius.
Enemy heroes have -1 ::initiative:: Initiative for
every Ice token they are adjacent to.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,traits:[`USING_TOKENS`,`STAT_CHANGING`]},{name:`Snowstorm`,description:`Choose a direction. Move each enemy unit in
radius 1 space in that direction, if able.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`},{name:`Winter Spear`,description:`Target a unit adjacent to you.
+3 ::attack_red:: Attack if this card is not in the discard.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Wall of Frost`,description:`Place up to 2 ::token_ice:: Ice tokens in radius.
Enemy heroes have -1 ::initiative:: Initiative
for every Ice token they are adjacent to.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`USING_TOKENS`,`STAT_CHANGING`]},{name:`Guardian Spirit`,description:`Up to 1 friendly hero in radius
may retrieve a discarded card.
If "Guardian Spirit" is in the discard, retrieve it.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`,traits:[`HEALING_TEAM`,`DISCARD_TEAM`]},{name:`Spirit Wolf`,description:`**Choose one —**
>>If this card is not in the discard,
>target a unit in range.
>>Target a hero adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:3,item:`DEFENSE`,traits:[`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Ancestral Totem`,description:`Place a ::token_totem:: Totem token in range.
If a friendly melee minion adjacent to a Totem
would be defeated, remove the Totem instead.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`REMOVING`,`USING_TOKENS`]},{name:`Blizzard`,description:`Choose a direction. Move each enemy unit
in radius 1 space in that direction, if able.
If this card is in the discard, **End of turn:**
May repeat once.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`MOVEMENT`,traits:[`END_OF_TURN`]},{name:`Winter Scepter`,description:`Target a unit adjacent to you.
+3 ::attack_red:: Attack if this card is not in the discard.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:7,item:`AREA`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Pack Ice`,description:`Place up to 3 ::token_ice:: Ice tokens in radius.
Enemy heroes have -1 ::initiative:: Initiative for
every Ice token they are adjacent to.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`USING_TOKENS`,`STAT_CHANGING`]},{name:`Warrior Spirit`,description:`Up to 1 friendly hero in radius may retrieve
a discarded card. If "Warrior Spirit" is in the
discard, you may retrieve a discarded card.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`RANGE`,traits:[`HEALING_SELF`,`HEALING_TEAM`,`DISCARD_TEAM`]},{name:`Spirit Bear`,description:`**Choose one, or both,** on different targets —
>>If this card is not in the discard,
>target a unit in range.
>>Target a hero adjacent to you.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`MULTIPLE_CHOICE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Venerated Totem`,description:`Place a ::token_totem:: Totem token in range.
If a friendly minion adjacent to a Totem would
be defeated, remove the Totem instead.
Totem tokens are immune to enemy actions.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`REMOVING`,`USING_TOKENS`]}],tigerclaw:[{name:`Blink Strike`,description:`Before the attack: Move 2 spaces in a straight
line through an enemy unit; target that unit.
~(If you cannot make this move, you cannot attack.)`,color:`GOLD`,initiative:13,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Nimble Strike`,description:`Before the attack: Move 2 spaces in a straight
line through an enemy hero; target that hero.`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`ATTACK`,primaryValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`STRAIGHT_LINE`,`ATTACK_HERO`]},{name:`Blend Into Shadows`,description:`If you are adjacent to terrain, place yourself
into a space in radius; if you do, **Next turn:**
You are immune to enemy attack actions.`,color:`SILVER`,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:2,traits:[`IMMUNITY_GAIN`,`PLACING_SELF`,`NEXT_TURN`,`TERRAIN`]},{name:`Cloak and Daggers`,description:`After you perform a basic action, you may
repeat it once; if you repeat an attack
action, you cannot target the same unit.`,color:`PURPLE`,level:4},{name:`Dodge`,description:`Block a ranged attack.`,color:`BLUE`,level:1,initiative:10,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3},{name:`Hit and Run`,description:`Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:4,secondaryDefense:3,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Light-Fingered`,description:`You may move 1 space.
Take 1 coin from an enemy hero adjacent
to you; if you do, you may move 1 space.`,color:`GREEN`,level:1,initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:1,traits:[`MOVING_SELF`]},{name:`Sidestep`,description:`Block a ranged attack.
You may move 1 space.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`ATTACK`,traits:[`MOVING_SELF`]},{name:`Combat Reflexes`,description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: If you did not move before
the attack, you may move 1 space.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:3,item:`INITIATIVE`,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Pick Pocket`,description:`Move up to 2 spaces.
Take 1 coin from an enemy hero adjacent to
you; if you do, you may move 1 space.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:1,item:`ATTACK`,traits:[`MOVING_SELF`]},{name:`Parry`,description:`Block a non-ranged attack.
The attacker discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`DEFENSE`},{name:`Backstab`,description:`Target a unit adjacent to you; if a friendly
unit is adjacent to the target, +2 ::attack_red:: Attack.
~(A "friendly unit" is another hero or a minion on your team.)`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:5,item:`DEFENSE`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Poisoned Dagger`,description:`Give a hero in range a ::marker_poison:: Poison marker.
The hero with a poison marker has
-1 ::initiative:: Initiative, -1 ::attack_silver:: Attack and -1 ::defense_silver:: Defense.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:1,item:`INITIATIVE`,traits:[`GIVING_MARKERS`,`USING_MARKERS`,`STAT_CHANGING`]},{name:`Evade`,description:`Block a ranged attack.
You may move 1 space. You may retrieve
your resolved or discarded basic skill card.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`ATTACK`,traits:[`MOVING_SELF`]},{name:`Leaping Strike`,description:`Before the attack: You may move 1 space.
Target a unit adjacent to you.
After the attack: You may move 1 space.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:4,secondaryDefense:4,item:`AREA`,traits:[`MOVING_SELF`,`AFTER_THE_ATTACK`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Master Thief`,description:`Move up to 2 spaces. Take 1 or 2 coins
from an enemy hero adjacent to you;
if you do, you may move up to 2 spaces.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:1,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:2,item:`MOVEMENT`,traits:[`MOVING_SELF`]},{name:`Riposte`,description:`Block a non-ranged attack. The attacker
discards a card, or is defeated.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:3,item:`RANGE`,traits:[`DISCARD_OR_KILL`]},{name:`Backstab with a Ballista`,description:`Target a unit in range;
if a friendly unit is adjacent to the target,
+2 ::attack_red:: Attack, and the target cannot
perform a primary action to defend.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:1,secondaryMovement:5,secondaryDefense:6,item:`DEFENSE`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Poisoned Dart`,description:`Give a hero in range a ::marker_poison:: Poison marker.
The hero with a poison marker has
-2 ::initiative:: Initiative, -2 ::attack_silver:: Attack and -2 ::defense_silver:: Defense.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:1,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`INITIATIVE`,traits:[`GIVING_MARKERS`,`USING_MARKERS`,`STAT_CHANGING`]}],trinkets:[{name:`Rapid Redeployment`,description:`**Choose one —**
>>Move up to 3 spaces and place the
>Turret into a space adjacent to you;
>it counts as an obstacle.
>>Defeat a minion adjacent to you.`,color:`GOLD`,initiative:12,primaryAction:`SKILL`,secondaryMovement:4,secondaryDefense:1,traits:[`DEFEAT`,`MOVING_SELF`,`MULTIPLE_CHOICE`]},{name:`Ramshackle Turret`,description:`Move up to 3 spaces and place
the Turret into a space adjacent to you;
it counts as an obstacle.
~(The Turret is not a token and remains in play between rounds.)`,color:`GOLD`,handicapped:!0,initiative:12,primaryAction:`SKILL`,secondaryMovement:4,secondaryDefense:1,traits:[`MOVING_SELF`,`USING_TOKENS`]},{name:`Salvage Parts`,description:`**Choose one —**
>>Place the Turret into a space adjacent
>to you; it counts as an obstacle.
>>Remove the Turret; move up to 3 spaces.
>>Remove the Turret; you may retrieve a
>discarded card.`,color:`SILVER`,initiative:5,primaryAction:`SKILL`,secondaryDefense:2,traits:[`MOVING_SELF`,`MULTIPLE_CHOICE`]},{name:`Unlimited Firepower`,description:`Gain +1 ::range_silver:: Range and +1 ::radius_silver:: Radius.`,color:`PURPLE`,level:4,traits:[`STAT_CHANGING`]},{name:`Disruptor Jolt`,description:`**This turn:** Before any enemy hero in radius
of the Turret performs a primary action,
that hero discards a card, if able;
if they discard a card, deactivate this effect.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,traits:[`DISCARD`,`THIS_TURN`]},{name:`Makeshift Minigun`,description:`Target a unit in range of both you and the
Turret. If the target is in a straight line from
you, and in a straight line from the Turret,
gain +2 ::attack_red:: Attack.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,traits:[`SCALING`,`STAT_CHANGING`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Early Prototype`,description:`If you are in radius of the Turret, swap with
a unit or a token in radius of the Turret,
then remove the Turret.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,traits:[`SWAPPING_SELF`,`SWAPPING_UNITS`,`REMOVING`,`USING_TOKENS`]},{name:`Disruptor Pulse`,description:`**This turn:** Before any enemy hero in radius
of the Turret performs a primary action,
that hero discards a card, if able;
if they discard a card, deactivate this effect.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`ATTACK`,traits:[`DISCARD`,`THIS_TURN`]},{name:`Gatling Gun`,description:`Target a unit in range of both you and the
Turret. If the target is in a straight line from
you, and in a straight line from the Turret,
gain +2 ::attack_red:: Attack.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`SCALING`,`STAT_CHANGING`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Updated Design`,description:`If you are in radius of the Turret, swap with
a unit or a token in radius of the Turret.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`SWAPPING_SELF`,`SWAPPING_UNITS`,`USING_TOKENS`]},{name:`Deployable Barrier`,description:`Place up to 2 ::token_barrier:: Barrier tokens in radius, with
at least one of them adjacent to the Turret;
you and friendly heroes gain +1 ::defense_silver:: Defense
for each Barrier token they are adjacent to.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`INITIATIVE`,traits:[`USING_TOKENS`,`STAT_CHANGING`]},{name:`Steam Discharge`,description:`Target a unit in range adjacent to the Turret.
May repeat once on a different enemy unit.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_UNIT`]},{name:`Self-Destruct`,description:`Up to two enemy heroes in radius of the Turret
discard a card, if able. Remove the Turret.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:2,item:`DEFENSE`,traits:[`REMOVING`]},{name:`Disruptor Grid`,description:`**This turn:** Before any enemy hero in radius
of the Turret performs a primary action,
that hero discards a card, or is defeated;
if they discard a card, deactivate this effect.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:4,item:`MOVEMENT`,traits:[`DISCARD_OR_KILL`,`THIS_TURN`]},{name:`Supercharged Cannon`,description:`Target a unit in range of both you and the
Turret. If the target is in a straight line from
you and in a straight line from the Turret,
gain +3 ::attack_red:: Attack.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,primaryValueSign:`PLUS`,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`SCALING`,`STAT_CHANGING`,`STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Perfected Design`,description:`If you are in radius of the Turret,
**Choose one —**
>>Swap with a unit or a token in radius
>of the Turret.
>>Place yourself into a space in radius
>of the Turret.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`PLACING_SELF`,`SWAPPING_SELF`,`SWAPPING_UNITS`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Deployable Bastion`,description:`Place up to 3 ::token_barrier:: Barrier tokens in radius, with
at least one of them adjacent to the Turret;
you and friendly heroes gain +1 ::defense_silver:: Defense
for each Barrier token they are adjacent to.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`INITIATIVE`,traits:[`USING_TOKENS`,`STAT_CHANGING`]},{name:`Flame Belcher`,description:`Target a unit in range adjacent to the Turret.
May repeat up to two times on
different enemy units.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:4,secondaryMovement:4,secondaryDefense:6,item:`AREA`,traits:[`HIGH_RANGE_ATTACK`,`ATTACK_UNIT`]},{name:`Emergency Protocol`,description:`Up to two enemy heroes in radius of the
Turret discard a card, or are defeated.
Remove the Turret.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`RANGE`,traits:[`REMOVING`]}],ursafar:[{name:`Claws That Catch`,description:`Before the attack: If enraged, you may
move 1 space to a space adjacent to an
enemy hero. Target a unit adjacent to you.
**This round:** You are enraged.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`MOVING_SELF`,`THIS_ROUND`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Jaws That Bite`,description:`Before the attack: If enraged, you may
move 1 space to a space adjacent to an
enemy hero. Target a hero adjacent to you.
**This round:** You are enraged.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`MOVING_SELF`,`THIS_ROUND`,`BEFORE_THE_ATTACK`,`ATTACK_HERO`]},{name:`Angry Roar`,description:`If enraged, perform the primary action on one
of your active cards with an active effect.
**This round:** You are enraged.`,color:`SILVER`,initiative:7,primaryAction:`SKILL`,secondaryDefense:4,traits:[`THIS_ROUND`]},{name:`Unbound Fury`,description:`You are always enraged, and all your
resolved cards count as active.`,color:`PURPLE`,level:4,traits:[`COUNTS_AS`]},{name:`Prowling Brute`,description:`If enraged, after movement, you may swap
with a unit or a token adjacent to you.
**This round:** You are enraged.`,color:`BLUE`,level:1,initiative:9,primaryAction:`MOVEMENT`,primaryValue:1,secondaryDefense:5,traits:[`SWAPPING_SELF`,`SWAPPING_UNITS`,`THIS_ROUND`,`USING_TOKENS`]},{name:`Prey Drive`,description:`Target a unit adjacent to you. After the attack:
If enraged, and the target was not removed,
remove up to 1 enemy minion in radius.
**This round:** You are enraged.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:7,traits:[`THIS_ROUND`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Sniff Out`,description:`If enraged, an enemy hero in range
discards a card, if able.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:2,traits:[`DISCARD`]},{name:`Rampaging Beast`,description:`If enraged, after movement, you may swap
with a unit or a token adjacent to you;
if you do, move up to 1 additional space.
**This round:** You are enraged.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:1,secondaryDefense:6,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`SWAPPING_UNITS`,`THIS_ROUND`,`USING_TOKENS`]},{name:`Prey Abundance`,description:`Target a unit adjacent to you. After the attack:
If enraged, and the target was not removed,
remove up to 1 enemy minion in radius.
**This round:** You are enraged.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:7,item:`DEFENSE`,traits:[`THIS_ROUND`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Eyes on the Prey`,description:`If enraged, an enemy hero in range
discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`DISCARD`]},{name:`Cold Ire`,description:`If enraged, gain +1 ::movement_blue:: Movement.
**This round:** You are enraged.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:1,primaryValueSign:`PLUS`,secondaryDefense:6,item:`ATTACK`,traits:[`THIS_ROUND`,`SCALING`,`STAT_CHANGING`]},{name:`Rip`,description:`Target a unit adjacent to you.
After the attack: If enraged, gain 1 coin.
**This round:** You are enraged.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:3,secondaryDefense:6,item:`INITIATIVE`,traits:[`FARMING_FOR_SELF`,`THIS_ROUND`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Instinctive Reaction`,description:`If enraged, **choose one —**
>>Perform the primary action on one
>of your discarded cards.
>>You may retrieve a discarded card.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`HEALING_SELF`,`MULTIPLE_CHOICE`]},{name:`Unstoppable Force`,description:`If enraged, after movement, you may swap
with a unit or a token adjacent to you;
if you do, move up to 2 additional spaces.
**This round:** You are enraged.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:1,secondaryDefense:6,item:`RANGE`,traits:[`SWAPPING_SELF`,`SWAPPING_UNITS`,`THIS_ROUND`,`USING_TOKENS`]},{name:`Feeding Frenzy`,description:`Target a unit adjacent to you. After the attack:
If enraged, and the target was not removed,
remove up to 2 enemy minions in radius.
**This round:** You are enraged.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:8,item:`DEFENSE`,traits:[`THIS_ROUND`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Apex Predator`,description:`If enraged, an enemy hero in range
discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`DISCARD_OR_KILL`]},{name:`Eyes of Flame`,description:`If enraged, gain +2 ::movement_blue:: Movement.
**This round:** You are enraged.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`MOVEMENT`,primaryValue:1,primaryValueSign:`PLUS`,secondaryDefense:6,item:`AREA`,traits:[`THIS_ROUND`,`SCALING`,`STAT_CHANGING`]},{name:`Tear`,description:`Target a unit adjacent to you.
After the attack: If enraged, gain 2 coins;
if you defeated a hero, that hero spends
1 additional ::life_counters:: Life counter.
**This round:** You are enraged.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:3,secondaryDefense:7,item:`INITIATIVE`,traits:[`FARMING_FOR_SELF`,`THIS_ROUND`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Evolutionary Response`,description:`If enraged, **choose one, or both —**
>>Perform the primary action on one
>of your discarded cards.
>>You may retrieve a discarded card.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`MOVEMENT`,traits:[`HEALING_SELF`,`MULTIPLE_CHOICE`]}],wasp:[{name:`Magnetic Dagger`,description:`Target a unit adjacent to you.
After the attack: **This turn:** Enemy units
in radius cannot be swapped or placed
by themselves or by enemy heroes.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:3,secondaryMovement:1,secondaryDefense:2,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Crackling Dagger`,description:`Target a hero adjacent to you.
After the attack: **This turn:** Enemy units
in radius cannot be swapped or placed
by themselves or by enemy heroes.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:2,modifier:`AREA`,modifierValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`THIS_TURN`,`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Static Barrier`,description:`**This turn:** While an enemy hero outside of
radius is performing an action, spaces in
radius count as obstacles. While an enemy
hero in radius is performing an action,
spaces outside of radius count as obstacles.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:2,traits:[`THIS_TURN`,`COUNTS_AS`]},{name:`High Voltage`,description:`Each time after you perform a basic skill,
you may defeat an enemy minion in radius;
an enemy hero who was adjacent to that
minion discards a card, if able.`,color:`PURPLE`,level:4,modifier:`AREA`,modifierValue:3,traits:[`DEFEAT`,`DISCARD`]},{name:`Lift Up`,description:`Move a unit, or a token, in radius 1 space,
without moving it away from you or closer to
you. May repeat once on the same target.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5,traits:[`MOVING_UNITS`,`USING_TOKENS`]},{name:`Shock`,description:`Target a unit adjacent to you.
After the attack: An enemy hero in radius and
not adjacent to you discards a card, if able.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:6,traits:[`DISCARD`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Stop Projectiles`,description:`Block a ranged attack.`,color:`GREEN`,level:1,initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,secondaryMovement:2},{name:`Control Gravity`,description:`Move a unit, or a token, in radius 1 space,
without moving it away from you or closer to 
you. May repeat once on the same target.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:5,item:`DEFENSE`,traits:[`MOVING_UNITS`,`USING_TOKENS`]},{name:`Electrocute`,description:`Target a unit adjacent to you.
After the attack: An enemy hero in radius and
not adjacent to you discards a card, if able.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:5,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`DISCARD`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Deflect Projectiles`,description:`Block a ranged attack; if you do, an enemy
hero in range, other than the attacker,
discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:3,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,item:`INITIATIVE`,traits:[`DISCARD`]},{name:`Kinetic Repulse`,description:`Push up to 2 enemy units adjacent to you
3 spaces; if a pushed hero is stopped by an
obstacle, that hero discards a card, if able.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:5,item:`ATTACK`,traits:[`DISCARD`,`PUSHING_UNITS`,`PUSHING_HEROES`]},{name:`Charged Boomerang`,description:`Target a unit in range and not in a straight line.
~(Units adjacent to you are in a straight line from you.)`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:3,item:`DEFENSE`,traits:[`HIGH_RANGE_ATTACK`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Telekinesis`,description:`Place a unit or a token in range, which is not
in a straight line, into a space adjacent to you.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`PLACING_UNITS`,`USING_TOKENS`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`]},{name:`Center of Mass`,description:`Move a unit, or a token, in radius 1 space,
without moving it away from you or closer
to you. May repeat up to two times
on the same target.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`MOVING_UNITS`,`USING_TOKENS`]},{name:`Electroblast`,description:`Target a unit adjacent to you. After the attack:
An enemy hero in radius and not adjacent
to you discards a card, or is defeated.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`,traits:[`DISCARD_OR_KILL`,`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Reflect Projectiles`,description:`Block a ranged attack; if you do, an enemy
hero in range discards a card, if able.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`DEFENSE`,primaryValueSign:`EXCLAMATION`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,item:`AREA`,traits:[`DISCARD`]},{name:`Kinetic Blast`,description:`Push up to 2 enemy units adjacent to you
3 or 4 spaces; if a pushed hero is stopped by
an obstacle, that hero discards a card, if able.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`RANGE`,traits:[`DISCARD`,`PUSHING_UNITS`,`PUSHING_HEROES`]},{name:`Thunder Boomerang`,description:`Target a unit in range and not in a straight line.
After the attack: If you targeted a hero,
may repeat once on a different target.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`MOVEMENT`,traits:[`HIGH_RANGE_ATTACK`,`AFTER_THE_ATTACK`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`,`ATTACK_UNIT`]},{name:`Mass Telekinesis`,description:`Place a unit or a token in range, which
is not in a straight line, into a space
adjacent to you. May repeat once.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`PLACING_UNITS`,`USING_TOKENS`,`STRAIGHT_LINE`,`NOT_STRAIGHT_LINE`]}],whisper:[{name:`Swift Justice`,description:`**Choose one —**
>>Target a hero in range with an empty discard.
>After the attack: If able, that hero performs a
>movement action on the card they defended
>with, moving full distance in a straight line.
>>Target a unit adjacent to you.`,color:`GOLD`,initiative:12,primaryAction:`ATTACK`,primaryValue:2,modifier:`RANGE`,modifierValue:3,secondaryMovement:1,secondaryDefense:2,traits:[`HIGH_RANGE_ATTACK`,`AFTER_THE_ATTACK`,`MULTIPLE_CHOICE`,`STRAIGHT_LINE`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Vile Accusation`,description:`**Choose one —**
>>Target a hero in range with an empty discard.
>After the attack: If able, that hero performs a
>movement action on the card they defended
>with, moving full distance in a straight line.
>>Target a hero adjacent to you.`,color:`GOLD`,handicapped:!0,initiative:11,primaryAction:`ATTACK`,primaryValue:1,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`MULTIPLE_CHOICE`,`STRAIGHT_LINE`,`ATTACK_HERO`]},{name:`Death Seeker`,description:`If an enemy hero in radius has a card
in the discard, **choose one —**
>>**This turn:** You are immune to enemy actions.
>>You may retrieve a discarded card.`,color:`SILVER`,initiative:13,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:2,traits:[`HEALING_SELF`,`IMMUNITY_GAIN`,`THIS_TURN`,`MULTIPLE_CHOICE`]},{name:`Grim Reaper`,description:`When performing basic actions,
you may choose one, or both.`,color:`PURPLE`,level:4},{name:`Seeds of Fear`,description:`Target an enemy unit in radius occupying
a spawn point. Move that unit 1 space.`,color:`BLUE`,level:1,initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,traits:[`MOVING_UNITS`,`SPAWN_POINTS`]},{name:`Crimson Trail`,description:`Before the attack: You may move up
to 1 space if there is an empty minion spawn
point in radius in the battle zone.
Target a unit adjacent to you.`,color:`RED`,level:1,initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`SPAWN_POINTS`,`ATTACK_UNIT`]},{name:`Shadow Step`,description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:`GREEN`,level:1,initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:3,traits:[`PLACING_SELF`,`SPAWN_POINTS`]},{name:`Sprouts of Panic`,description:`Target an enemy unit in radius occupying a
spawn point. Move that unit up to 2 spaces.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`INITIATIVE`,traits:[`MOVING_UNITS`,`SPAWN_POINTS`]},{name:`Sanguine Path`,description:`Before the attack: You may move up to
1 space for every empty minion spawn point
in radius in the battle zone, up to a maximum
of 2 spaces. Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`SPAWN_POINTS`,`ATTACK_UNIT`]},{name:`Shadow Walk`,description:`Place yourself into an empty minion
spawn point in range in the battle zone.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`ATTACK`,traits:[`PLACING_SELF`,`SPAWN_POINTS`]},{name:`Lesser Evil`,description:`An enemy hero in range **chooses one —**
>>That hero discards a card, if able.
>>You may defeat a minion adjacent to you.
~(Any option can be chosen, even if it would have no effect.)`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`DEFEAT`,`DISCARD`]},{name:`Blood Fury`,description:`Target a unit adjacent to you. After the attack:
If an enemy hero in radius has a card in the
discard, may repeat once on a different target.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,modifier:`AREA`,modifierValue:5,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Cruel Twist`,description:`Swap with a unit adjacent to you, or with
an enemy hero in range with a card in
the discard. Move up to 2 spaces.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:3,item:`DEFENSE`,traits:[`MOVING_SELF`,`SWAPPING_SELF`,`SWAPPING_UNITS`]},{name:`Blooming Nightmare`,description:`Target an enemy unit in radius occupying
a spawn point. Move that unit up to 3 spaces.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:11,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:`INITIATIVE`,traits:[`MOVING_UNITS`,`SPAWN_POINTS`]},{name:`Blood Pilgrimage`,description:`Before the attack: You may move up to
1 space for every empty minion spawn point
in radius in the battle zone, up to a maximum
of 3 spaces. Target a unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:2,secondaryMovement:4,secondaryDefense:5,item:`MOVEMENT`,traits:[`MOVING_SELF`,`BEFORE_THE_ATTACK`,`SPAWN_POINTS`,`ATTACK_UNIT`]},{name:`Creeping Shadow`,description:`Place yourself into an empty minion spawn
point in range in the battle zone, or into a
space in range adjacent to such a spawn point.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`AREA`,traits:[`PLACING_SELF`,`SPAWN_POINTS`]},{name:`Greater Good`,description:`An enemy hero in range **chooses one —**
>>That hero discards a card, or is defeated.
>>You defeat up to 3 minions adjacent to you.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:11,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:6,item:`ATTACK`,traits:[`DEFEAT`,`DISCARD_OR_KILL`]},{name:`Blood Frenzy`,description:`Target a unit adjacent to you.
After the attack: If an enemy hero
in radius has a card in the discard,
repeat up to five times on different targets.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`ATTACK`,primaryValue:7,modifier:`AREA`,modifierValue:5,secondaryMovement:4,secondaryDefense:7,item:`RANGE`,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Sealed Fate`,description:`Swap with a unit adjacent to you, or with
an enemy hero in range with a card in
the discard. Move up to 3 spaces.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:2,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`,`SWAPPING_SELF`,`SWAPPING_UNITS`]}],widget:[{name:`Fight as One`,description:`Target a unit adjacent to you.
After the attack: You may perform the primary
action on one of your resolved skill cards,
targeting a different unit.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Follow Along`,description:`Target a hero adjacent to you.
After the attack: You may perform the primary
action on one of your resolved skill cards,
targeting a different unit.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:2,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Dragon Bond`,description:`**Choose one —**
>>Place Pyro into a space in radius.
>Pyro counts as a token, but is not
>removed at the end of round.
>>If Pyro is in play, move both yourself and
>Pyro up to 2 spaces, in any order.`,color:`SILVER`,initiative:6,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryDefense:6,traits:[`END_OF_ROUND`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Diversionary Strike`,description:`Target a unit adjacent to you.
After the attack: Move Pyro up to 2 spaces.`,color:`RED`,level:1,initiative:8,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:6,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`All Aboard`,description:`Swap Pyro in range with yourself
or with a friendly hero in range.`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:3,secondaryDefense:3},{name:`Fiery Breath`,description:`An enemy hero in range of Pyro and in a
straight line from Pyro discards a card, if able.`,color:`GREEN`,level:1,initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:2,secondaryMovement:2,secondaryDefense:1,traits:[`DISCARD`,`STRAIGHT_LINE`]},{name:`Diversionary Attack`,description:`Target a unit adjacent to you.
After the attack: Move Pyro up to 3 spaces.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,secondaryMovement:4,secondaryDefense:6,item:`INITIATIVE`,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Airborne Attack`,description:`Before the attack: You may swap with Pyro
in radius. Target a unit adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:3,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Diversionary Assault`,description:`Target a unit adjacent to you.
After the attack: Move Pyro up to 4 spaces.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:6,secondaryMovement:4,secondaryDefense:7,item:`INITIATIVE`,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Airborne Assault`,description:`Before the attack: You may swap with Pyro
in radius. Target a unit adjacent to you.
After the attack: You may swap
with Pyro in radius.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`ATTACK`,primaryValue:4,modifier:`AREA`,modifierValue:3,secondaryMovement:4,secondaryDefense:5,item:`RANGE`,traits:[`SWAPPING_SELF`,`AFTER_THE_ATTACK`,`BEFORE_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Take-Off`,description:`Swap Pyro in range with yourself
or with a friendly hero in range.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:3,item:`DEFENSE`},{name:`Drag Off`,description:`Move both Pyro, and an enemy unit
adjacent to Pyro, either 2 or 3 spaces
each, in the same direction.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:3,item:`ATTACK`},{name:`Safe Landing`,description:`You may move Pyro in range 1 space.
Swap Pyro in range with yourself
or with a friendly hero in range.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:3,secondaryDefense:4,item:`DEFENSE`,traits:[`MOVING_SELF`]},{name:`Carry Away`,description:`Move both Pyro, and an enemy unit
adjacent to Pyro, either 2 or 3 spaces
each, in the same direction, ignoring obstacles.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:4,item:`AREA`,traits:[`IGNORING_OBSTACLES`]},{name:`Flaming Breath`,description:`An enemy hero in range of Pyro and in a
straight line from Pyro discards a card, if able.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`DISCARD`,`STRAIGHT_LINE`]},{name:`Nibble`,description:`Remove an enemy minion in range
adjacent to Pyro. Remove Pyro.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`INITIATIVE`,traits:[`REMOVING`]},{name:`Scorching Breath`,description:`An enemy hero in range of Pyro and in a
straight line from Pyro
discards a card, or is defeated.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`ATTACK`,traits:[`DISCARD_OR_KILL`,`STRAIGHT_LINE`]},{name:`Gnaw`,description:`Defeat a minion in range adjacent to Pyro.
Remove Pyro.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:2,item:`MOVEMENT`,traits:[`DEFEAT`,`REMOVING`]},{name:`Dragon Knight`,description:`Each time after you perform a movement
action, you may perform the primary
action on one of your faceup skill cards.`,color:`PURPLE`,level:4}],wuk:[{name:`Tree Slam`,description:`**Choose one —**
>>Target a minion adjacent to you.
>>Remove a ::token_tree:: Tree token adjacent to you.
>Target a unit in range.`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:3,traits:[`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_MINION`]},{name:`Makeshift Weapon`,description:`**Choose one —**
>>Target a hero adjacent to you.
>>Remove a ::token_tree:: Tree token adjacent to you.
>Target a hero in range.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:2,secondaryMovement:1,secondaryDefense:2,traits:[`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_HERO`]},{name:`Mystic Saplings`,description:`Place up to 3 ::token_tree:: Tree tokens in radius; Tree
tokens are not removed at the end of round.`,color:`SILVER`,initiative:4,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryDefense:4,traits:[`END_OF_ROUND`,`USING_TOKENS`]},{name:`March of Nature`,description:`Each time after you resolve a card, you
may place a ::token_tree:: Tree token in radius.`,color:`PURPLE`,level:4,modifier:`AREA`,modifierValue:3,traits:[`USING_TOKENS`]},{name:`Gifts of Nature`,description:`Remove a ::token_tree:: Tree token in radius.
You may retrieve a discarded card.`,color:`BLUE`,level:1,initiative:8,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:2,secondaryDefense:5,traits:[`HEALING_SELF`,`REMOVING`,`USING_TOKENS`]},{name:`Nature's Protector`,description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a unit in range adjacent
>to a ::token_tree:: Tree token.`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:2,secondaryMovement:4,secondaryDefense:7,traits:[`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Toss Away`,description:`Place a token, or an enemy unit,
adjacent to you into a space in range.`,color:`GREEN`,level:1,initiative:6,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,traits:[`PLACING_TOKENS`,`USING_TOKENS`]},{name:`Tree of Plenty`,description:`Remove a ::token_tree:: Tree token in radius.
**Choose one —**
>>You may retrieve a discarded card.
>>A friendly hero in radius may retrieve a
>discarded card.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:`ATTACK`,traits:[`HEALING_SELF`,`DISCARD_TEAM`,`REMOVING`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Nature's Guardian`,description:`**Choose one —**
>>Target a hero adjacent to you.
>>Target a unit in range adjacent
>to a ::token_tree:: Tree token.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:7,primaryAction:`ATTACK`,primaryValue:5,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:8,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Mighty Throw`,description:`Place a token, or an enemy unit,
adjacent to you into a space in range.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryMovement:2,secondaryDefense:4,item:`ATTACK`,traits:[`PLACING_TOKENS`,`USING_TOKENS`]},{name:`Claim Dominance`,description:`**This round:** Up to 1 enemy minion adjacent
to you does not count towards the minion total
during minion battle, regardless of immunity.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`INITIATIVE`,traits:[`THIS_ROUND`,`MINION_BATTLE`]},{name:`Trample`,description:`If you move in a straight line: You may ignore
obstacles; each enemy hero you moved
through discards a card, or is defeated;
defeat up to one minion you moved through.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:7,primaryAction:`MOVEMENT`,primaryValue:4,secondaryDefense:7,item:`DEFENSE`,traits:[`DEFEAT`,`DISCARD_OR_KILL`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Into the Canopy`,description:`**Choose one —**
>>Swap with a ::token_tree:: Tree token in radius.
>>Swap a friendly unit in radius with
>a Tree token in radius.`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:4,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Abundance`,description:`Remove a ::token_tree:: Tree token in radius.
**Choose one or both —**
>>You may retrieve a discarded card.
>>A friendly hero in radius may retrieve a
>discarded card.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:2,secondaryDefense:6,item:`RANGE`,traits:[`HEALING_SELF`,`DISCARD_TEAM`,`REMOVING`,`MULTIPLE_CHOICE`,`USING_TOKENS`]},{name:`Nature's Champion`,description:`**Choose one, or both,** on different targets **—**
>>Target a hero adjacent to you.
>>Target a unit in range adjacent to
a ::token_tree:: Tree token.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:6,modifier:`RANGE`,modifierValue:3,secondaryMovement:4,secondaryDefense:8,item:`INITIATIVE`,traits:[`HIGH_RANGE_ATTACK`,`MULTIPLE_CHOICE`,`USING_TOKENS`,`ATTACK_UNIT`,`ATTACK_HERO`]},{name:`Monstrous Throw`,description:`Place a token, or an enemy unit,
adjacent to you into a space in range.
May repeat once.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:5,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:4,secondaryMovement:2,secondaryDefense:5,item:`ATTACK`,traits:[`PLACING_TOKENS`,`USING_TOKENS`]},{name:`Assert Dominance`,description:`**This round:** Up to 2 enemy minions adjacent
to you do not count towards the minion total
during minion battle, regardless of immunity.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:9,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:6,item:`MOVEMENT`,traits:[`THIS_ROUND`,`MINION_BATTLE`]},{name:`Angry Stampede`,description:`If you move in a straight line: You may ignore
obstacles; each enemy hero you moved
through discards a card, or is defeated;
defeat up to two minions you moved through.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`MOVEMENT`,primaryValue:4,secondaryDefense:7,item:`AREA`,traits:[`DEFEAT`,`DISCARD_OR_KILL`,`IGNORING_OBSTACLES`,`STRAIGHT_LINE`]},{name:`Treetop Ride`,description:`**Choose up to two times —**
>>Swap with a ::token_tree:: Tree token in radius.
>>Swap a friendly unit in radius with
>a Tree token in radius.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:5,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:2,secondaryDefense:5,item:`DEFENSE`,traits:[`SWAPPING_SELF`,`MULTIPLE_CHOICE`,`USING_TOKENS`]}],xargatha:[{name:`Cleave`,description:`Target a unit adjacent to you.
After the attack: May repeat once
on a different enemy hero.
~(You may repeat even if the original target was a minion.)`,color:`GOLD`,initiative:11,primaryAction:`ATTACK`,primaryValue:4,secondaryMovement:1,secondaryDefense:2,traits:[`AFTER_THE_ATTACK`,`ATTACK_UNIT`]},{name:`Desperate Cleave`,description:`Target a hero adjacent to you.
After the attack: May repeat once
on a different enemy hero.`,color:`GOLD`,handicapped:!0,initiative:10,primaryAction:`ATTACK`,primaryValue:3,secondaryMovement:1,secondaryDefense:1,traits:[`AFTER_THE_ATTACK`,`ATTACK_HERO`]},{name:`Siren's Call`,description:`Target an enemy unit not adjacent to you
and in range; if able, move the target
up to 3 spaces to a space adjacent to you.`,color:`SILVER`,initiative:3,primaryAction:`SKILL`,modifier:`RANGE`,modifierValue:3,secondaryDefense:3,traits:[`MOVING_UNITS`]},{name:`Metamorphosis`,description:`Gain +1 ::movement_silver:: Movement and +1 ::initiative:: Initiative
for each enemy unit adjacent to you.
You may move through obstacles.`,color:`PURPLE`,level:4,traits:[`MOVING_SELF`,`IGNORING_OBSTACLES`,`STAT_CHANGING`]},{name:`Stone Gaze`,description:`**Next turn:** Enemy heroes in radius count
as both heroes and terrain, and cannot
perform movement actions.
~(If you move, the radius "moves" with you.)`,color:`BLUE`,level:1,initiative:9,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:2,secondaryMovement:3,secondaryDefense:5,traits:[`NEXT_TURN`,`TERRAIN`,`COUNTS_AS`]},{name:`Threatening Slash`,description:`Target a unit adjacent to you. +1 ::attack_red:: Attack
for each other enemy unit adjacent to you.
~(Do not count the target when calculating the attack bonus.)`,color:`RED`,level:1,initiative:7,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:6,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Charm`,description:`Before or after movement, you may
move an enemy ranged minion
in radius up to 2 spaces.`,color:`GREEN`,level:1,initiative:5,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:2,secondaryDefense:3,traits:[`MOVING_ENEMY`]},{name:`Petrifying Stare`,description:`**Next turn:** Enemy heroes in radius count
as both heroes and terrain, and cannot
perform movement actions.`,color:`BLUE`,level:2,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:3,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`NEXT_TURN`,`TERRAIN`,`COUNTS_AS`]},{name:`Deadly Swipe`,description:`Target a unit adjacent to you. +2 ::attack_red:: Attack
for each other enemy unit adjacent to you.`,color:`RED`,level:2,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:7,item:`INITIATIVE`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Control`,description:`Before or after movement, you may move
an enemy ranged or melee minion
in radius up to 2 spaces.`,color:`GREEN`,level:2,variant:{first:1,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:2,secondaryDefense:3,item:`ATTACK`,traits:[`MOVING_ENEMY`]},{name:`Fresh Converts`,description:`If you are adjacent to an enemy minion,
you may retrieve a discarded card.`,color:`BLUE`,level:2,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`ATTACK`,traits:[`HEALING_SELF`]},{name:`Long Thrust`,description:`Target a unit in range. +1 ::range_red:: Range
for each enemy unit adjacent to you.`,color:`RED`,level:2,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:3,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:4,item:`DEFENSE`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Constrict`,description:`**End of round:** Defeat an enemy
melee minion adjacent to you.
~(Before the end of round minion battle.)`,color:`GREEN`,level:2,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:3,item:`INITIATIVE`,traits:[`DEFEAT`,`END_OF_ROUND`,`MINION_BATTLE`]},{name:`Turn into Statues`,description:`**Next turn:** Enemy heroes in radius count
as both heroes and terrain, and cannot
perform movement actions.`,color:`BLUE`,level:3,variant:{first:1,second:2},initiative:10,primaryAction:`SKILL`,modifier:`AREA`,modifierValue:4,secondaryMovement:3,secondaryDefense:6,item:`DEFENSE`,traits:[`NEXT_TURN`,`TERRAIN`,`COUNTS_AS`]},{name:`Lethal Spin`,description:`Target a unit adjacent to you. +3 ::attack_red:: Attack 
for each other enemy unit adjacent to you.`,color:`RED`,level:3,variant:{first:1,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:5,primaryValueSign:`PLUS`,secondaryMovement:5,secondaryDefense:7,item:`AREA`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Dominate`,description:`Before or after movement, you may move
an enemy minion in radius up to 2 spaces;
ignore heavy minion immunity.`,color:`GREEN`,level:3,variant:{first:1,second:2},initiative:4,primaryAction:`MOVEMENT`,primaryValue:2,modifier:`AREA`,modifierValue:2,secondaryDefense:4,item:`ATTACK`,traits:[`MOVING_ENEMY`]},{name:`Devoted Followers`,description:`If you are adjacent to an enemy unit,
you may retrieve a discarded card.`,color:`BLUE`,level:3,variant:{first:2,second:2},initiative:10,primaryAction:`SKILL`,secondaryMovement:3,secondaryDefense:6,item:`RANGE`,traits:[`HEALING_SELF`]},{name:`Rapid Thrusts`,description:`Target a unit in range. +1 ::range_red:: Range
for each enemy unit adjacent to you.
May repeat once on a different enemy hero.`,color:`RED`,level:3,variant:{first:2,second:2},initiative:8,primaryAction:`ATTACK`,primaryValue:4,modifier:`RANGE`,modifierValue:1,modifierValueSign:`PLUS`,secondaryMovement:4,secondaryDefense:4,item:`MOVEMENT`,traits:[`SCALING`,`STAT_CHANGING`,`ATTACK_UNIT`]},{name:`Final Embrace`,description:`**End of round:** Defeat an enemy melee
or ranged minion adjacent to you.`,color:`GREEN`,level:3,variant:{first:2,second:2},initiative:4,primaryAction:`SKILL`,secondaryMovement:2,secondaryDefense:4,item:`INITIATIVE`,traits:[`DEFEAT`,`END_OF_ROUND`]}]};export{e as C,t as S,o as _,v as a,r as b,h as c,f as d,d as f,s as g,c as h,y as i,m as l,l as m,x as n,_ as o,u as p,b as r,g as s,S as t,p as u,a as v,n as x,i as y};