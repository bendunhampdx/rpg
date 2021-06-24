export class CharacterClasses {
  constructor() {
    this.mage = { //184
      type: "mage",
      lvl: 1,
      inv: [],  
      hp: 50,
      mp: 100,
      str: 4,
      spd: 4,
      def: 3,
      int: 10,
      stl: 3,
      res: 10
    };
    this.barbarian = { //184
      type: "barbarian",
      lvl: 1,
      inv: [],
      hp: 125,
      mp: 30,
      str: 10,
      spd: 4,
      def: 10,
      int: 0,
      stl: 3,
      res: 2
    };
    this.assassin = { //184
      type: "assassin",
      lvl: 1,
      inv: [],  
      hp: 70,
      mp: 70,
      str: 8,
      spd: 8,
      def: 3,
      int: 10,
      stl: 10,
      res: 5
    };
    this.necromancer = { //184
      type: "necromancer",
      lvl: 1,
      inv: [],  
      hp: 50,
      mp: 100,
      str: 5,
      spd: 5,
      def: 5,
      int: 5,
      stl: 5,
      res: 9
    };
    // this.inventoryObject = {
      
    // }
  }
  newChar(chosenClass) {
    this.chosenClass = chosenClass;
    let newChar = this.chosenClass;
    return chosenClass;
  }
  lvlUp() {
    let newChar = this.chosenClass;
    newChar['lvl']++;
    newChar['hp'] += 10;
    newChar['mp'] += 10;
    newChar['str']++;
    newChar['spd']++;
    newChar['def']++;
    newChar['int']++;
    newChar['stl']++;
    newChar['res']++;
    console.log('lvl newChar', newChar)
  }
  invMethod() {
    let inventory = new Map (
      [
        [1, {'name': 'potion', 'effects': 20}],
        [2, {'name': 'staff', 'effects': 20}],
        [3, {'name': 'hammer', 'effects': 2}],
        [4, {'name': 'boots', 'effects': 2}],
        [5, {'name': 'shield', 'effects': 2}],
        [6, {'name': 'book', 'effects': 2}],
        [7, {'name': 'cloak', 'effects': 2}],
        [8, {'name': 'crystal', 'effects': 2}]
      ]
      );
      this.inventoryObject = inventory;
      return 'inventory made';
    console.log("inventory", inventory);
    console.log('this object', this);
  }
  addInvItem(invItem) {
    let newChar = this.chosenClass; 
    for (let [key, value] of this.inventoryObject) {
      if (invItem === value.name) {
        newChar.inv.push(invItem);
      }
    }
    console.log('newItem?', newChar.inv);


  }
  // practiceLoop(invItem) {
  //   let newChar = this.chosenClass;
  //   console.log('this invObject', this.inventoryObject);
  //   for (let [key, value] of this.inventoryObject) {
  //     console.log('key', key);
  //     console.log('value', value);
  //   }
  // }

  // let dungeon = new Map(
  //   [
  //     [1, "The room is dark and has no windows."],
  //     [2, "There are spiderwebs everywhere."],
  //     [3, "There is a book on a stone pedestal. The book appears to be glowing."]
  //   ]
  // );

    // console.log('inventory', inventory)
  // let inv = new Map() 
  // // let keyObj = {name, effect}
  // / llet addItem = function(item) {
    
  // /}
  //   newChar['inv'].push(item);
  //   console.log(newChar);
    
  // dropItem(item) {
  // let newChar = this.chosenClass 
 
}