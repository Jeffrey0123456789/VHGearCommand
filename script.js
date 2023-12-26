function add() {
    const node = document.createElement("li");
    const textnode = document.createTextNode(Math.random());
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

function remove() {
    const nodes = document.getElementById("list").childNodes;
    const node = nodes[nodes.length - 1];
    document.getElementById("list").removeChild(node);
}


const newMod =
'<label>Type:</label>' +
'<select>' +
    '<option value="EMPTY">EMPTY</option>' +
    '<option value="EMPTY">----- IMPLICITS -----</option>' +
    '<option value="">Durability</option>' +
    '<option value="">Ability Power</option>' +
    '<option value="">Armor</option>' +
    '<option value="">Attack Damage</option>' +
    '<option value="">Attack Speed</option>' +
    '<option value="">Block Chance</option>' +
    '<option value="">Crit Hit Resistance</option>' +
    '<option value="">Lucky Hit Chance</option>' +
    '<option value="">Mana</option>' +
    '<option value="">Movement Speed</option>' +
    '<option value="">Soulbound</option>' +
    '<option value="">Thorns Chance</option>' +
    '<option value="">Thorns Damage</option>' +
    '<option value="">Magnet: Range</option>' +
    '<option value="">Magnet: Velocity</option>' +
    '<option value="">Jewel: Size</option>' +
    
    '<option value="EMPTY">----- MODIFIERS -----</option>' +
    '<option value="">% Increased Ability Power</option>' +
    '<option value="">Armor</option>' +
    '<option value="">Area of Effect</option>' +
    '<option value="">Attack Damage</option>' +
    '<option value="">% Increased Damage</option>' +
    '<option value="">Arthropods Damage</option>' +
    '<option value="">Undead Damage</option>' +
    '<option value="">Illager Damage</option>' +
    '<option value="">Nether Damage</option>' +
    '<option value="">Attack Range</option>' +
    '<option value="">Attack Speed</option>' +
    '<option value="">Block Chance</option>' +
    '<option value="">Chaining</option>' +
    '<option value="">Cooldown Reduction</option>' +
    '<option value="">Durability</option>' +
    '<option value="">Healing Efficiency</option>' +
    '<option value="">Health</option>' +
    '<option value="">Item Quantity</option>' +
    '<option value="">Item Rarity</option>' +
    '<option value="">Knockback Resistance</option>' +
    '<option value="">Lucky Hit Chance</option>' +
    '<option value="">% Mana</option>' +
    '<option value="">Mana Regen</option>' +
    '<option value="">Resistance</option>' +
    '<option value="">Shocking Hit Chance</option>' +
    '<option value="">Soul Chance</option>' +
    '<option value="">Stun Attack Chance</option>' +
    '<option value="">Sweeping Hit Chance</option>' +
    '<option value="">Trap Disarm Chance</option>' +

    '<option value="">Chilling Cloud</option>' +
    '<option value="">Fear Cloud</option>' +
    '<option value="">Healing Cloud</option>' +
    '<option value="">Poison Cloud</option>' +
    '<option value="">Slowness Cloud</option>' +
    '<option value="">Chilling Cloud when hit</option>' +
    '<option value="">Healing Cloud when hit</option>' +
    '<option value="">Slowness Cloud when hit</option>' +
    '<option value="">Weakness Cloud when hit</option>' +
    '<option value="">Wither Cloud when hit</option>' +
    '<option value="">Mining Fatigue Avoidance</option>' +
    '<option value="">Poison Avoidance</option>' +
    '<option value="">Slowness Avoidance</option>' +
    '<option value="">Time Acceleration Avoidance</option>' +
    '<option value="">Weakness Avoidance</option>' +
    '<option value="">Wither Avoidance</option>' +
    
    '<option value="EMPTY">----- MAGNET ONLY -----</option>' +
    '<option value="">Range</option>' +
    '<option value="">Velocity</option>' +
    
    '<option value="EMPTY">----- JEWEL ONLY -----</option>' +
    '<option value="">Wooden Affinity</option>' +
    '<option value="">Gilded Affinity</option>' +
    '<option value="">Ornate Affinity</option>' +
    '<option value="">Living Affinity</option>' +
    '<option value="">Coin Affinity</option>' +
    '<option value="">Picking</option>' +
    '<option value="">Axing</option>' +
    '<option value="">Shovelling</option>' +
    '<option value="">Reaping</option>' +
    '<option value="">Pulverizing</option>' +
    '<option value="">Smelting</option>' +
    '<option value="">Hydrovoid</option>' +
    '<option value="">Mining Speed</option>' +
    '<option value="">Copiously</option>' +
    '<option value="">Vanilla Immortality</option>' +
    '<option value="">Reach</option>' +
    '<option value="">Hammer Size</option>' +

    '<option value="EMPTY">----- +ABILITY LEVEL -----</option>' +
    '<option value="">Nova</option>' +
    '<option value="">Nova: Frost</option>' +
    '<option value="">Nova: Poison</option>' +
    '<option value="">Vein Miner</option>' +
    '<option value="">Vein Miner: Finesse</option>' +
    '<option value="">Vein Miner: Void</option>' +
    '<option value="">Rampage</option>' +
    '<option value="">Rampage: Vampire</option>' +
    '<option value="">Rampage: Chaining</option>' +
    '<option value="">Ghost Walk</option>' +
    '<option value="">Ghost Walk: Spirit</option>' +
    '<option value="">Dash</option>' +
    '<option value="">Dash: Bullet</option>' +
    '<option value="">Dash: Warp</option>' +
    '<option value="">Mega Jump</option>' +
    '<option value="">Mega Jump: Dig</option>' +
    '<option value="">Shell</option>' +
    '<option value="">Shell: Porcupine</option>' +
    '<option value="">Shell: Quill</option>' +
    '<option value="">Totem: Rejuvenation</option>' +
    '<option value="">Totem: Hatred</option>' +
    '<option value="">Totem: Spirit</option>' +
    '<option value="">Totem: Wrath</option>' +
    '<option value="">Heal</option>' +
    '<option value="">Heal: Group</option>' +
    '<option value="">Heal: Cleanse</option>' +
    '<option value="">Empower</option>' +
    '<option value="">Empower: Ice Armor</option>' +
    '<option value="">Empower: Entropic Bind</option>' +
    '<option value="">Javelin</option>' +
    '<option value="">Javelin: Piercing</option>' +
    '<option value="">Javelin: Scatter</option>' +
    '<option value="">Javelin: Sight</option>' +
    '<option value="">Hunter</option>' +
    '<option value="">Smite</option>' +
    '<option value="">Smite: Archon</option>' +
    '<option value="">Taunt</option>' +
    '<option value="">Taunt: Fear</option>' +
    '<option value="">Taunt: Charm</option>' +
    '<option value="">Stonefall</option>' +
    '<option value="">Stonefall: Hero\'s Landing</option>' +
    '<option value="">Stonefall: Coldsnap</option>' +
    '<option value="">Mana Shield</option>' +
    '<option value="">Mana Shield: Retribution</option>' +
    '<option value="">Mana Shield: Implode</option>' +
    '<option value="">Summon Eternal*</option>' +
    '<option value="">Fireball</option>' +
    '<option value="">Fireball: Volley</option>' +
    '<option value="">Fireball: Fireshot</option>' +
    '<option value="">Storm Arrow</option>' +
    '<option value="">Storm Arrow: Blizzard</option>' +
    '<option value="">Battle Cry</option>' +
    '<option value="">Battle Cry: Spectral</option>' +
    '<option value="">Battle Cry: Lucky</option>' +
    '<option value="">Farmer*</option>' +
    '<option value="">Farmer: Cultivator*</option>' +
    '<option value="">Farmer: Gardener*</option>' +
    '<option value="">Farmer: Rancher*</option>' +
    
    
'</select>' +
'<label>Value:</label>' +
'<input type="number" step="any">';


var impCount = 0;
var prefCount = 0;
var sufCount = 0;

function addImp() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML= newMod;
    document.getElementById("implicits").appendChild(wrapper);
    impCount++;
    document.getElementById("impCount").innerHTML = impCount;
}

function removeImp() {
    if (impCount > 0) {
        document.getElementById("implicits").removeChild(document.getElementById("implicits").lastChild);
        impCount--;
        document.getElementById("impCount").innerHTML = impCount;
    }
}

function addPref() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML= newMod;
    document.getElementById("prefixes").appendChild(wrapper);
    prefCount++;
    document.getElementById("prefCount").innerHTML = prefCount;
}

function removePref() {
    if (prefCount > 0) {
        document.getElementById("prefixes").removeChild(document.getElementById("prefixes").lastChild);
        prefCount--;
        document.getElementById("prefCount").innerHTML = prefCount;
    }
}

function addSuf() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML= newMod;
    document.getElementById("suffixes").appendChild(wrapper);
    sufCount++;
    document.getElementById("sufCount").innerHTML = sufCount;
}

function removeSuf() {
    if (sufCount > 0) {
        document.getElementById("suffixes").removeChild(document.getElementById("suffixes").lastChild);
        sufCount--;
        document.getElementById("sufCount").innerHTML = sufCount;
    }
}
