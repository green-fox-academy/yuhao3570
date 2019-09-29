const Item = require('./Item');
const Toy = require('./Toy');
const Tool = require('./Tool');
const Warehouse = require('./Warehouse');

const wh = new Warehouse();
wh.addItem(new Item("vase", 30));
wh.addItem(new Toy("pebble", undefined, "grey"));
wh.addItem(new Toy("car", 10, "blue"));
wh.addItem(new Tool("hammer", 25));
wh.printItemsOfType(Item);
wh.printItemsOfType(Toy);
wh.printItemsOfType(Tool);