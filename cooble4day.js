
ServerEvents.recipes(event => {
	// Change recipes here


	event.remove({ output: 'cobblefordays:tier_1' })

	event.shaped(
		Item.of('cobblefordays:tier_1', 1), 
	  [
		'CCCCC',
		'DAEBD',
		'CCCCC'
	  ], 
	  {
		A: 'minecraft:water_bucket',
        B: 'minecraft:lava_bucket',
        C: 'compressedblocks:c1_oak_log',
        D: 'compressedblocks:c1_glass',
        E: 'botania:manasteel_block'
	  });

      event.shaped(
		Item.of('cobblefordays:tier_1', 1), 
        [
            'CCCCC',
            'DAEBD',
            'CCCCC'
        ],  
	  {
		A: 'minecraft:water_bucket',
        B: 'minecraft:lava_bucket',
        C: 'compressedblocks:c1_spruce_log',
        D: 'compressedblocks:c1_glass',
        E: 'botania:manasteel_block'
	  });
//////////////

      event.shaped(
		Item.of('cobblefordays:tier_1', 1), 
        [
            'CCCCC',
            'DAEBD',
            'CCCCC'
        ],  
	  {
		A: 'minecraft:water_bucket',
        B: 'minecraft:lava_bucket',
        C: 'compressedblocks:c1_birch_log',
        D: 'compressedblocks:c1_glass',
        E: 'botania:manasteel_block'
	  });
//////////////
      event.shaped(
		Item.of('cobblefordays:tier_1', 1), 
        [
            'CCCCC',
            'DAEBD',
            'CCCCC'
        ], 
	  {
		A: 'minecraft:water_bucket',
        B: 'minecraft:lava_bucket',
        C: 'compressedblocks:c1_jungle_log',
        D: 'compressedblocks:c1_glass',
        E: 'botania:manasteel_block'
	  });
//////////////
      event.shaped(
		Item.of('cobblefordays:tier_1', 1), 
        [
            'CCCCC',
            'DAEBD',
            'CCCCC'
        ], 
	  {
		A: 'minecraft:water_bucket',
        B: 'minecraft:lava_bucket',
        C: 'compressedblocks:c1_acacia_log',
        D: 'compressedblocks:c1_glass',
        E: 'botania:manasteel_block'
	  });
//////////////
      event.shaped(
		Item.of('cobblefordays:tier_1', 1), 
        [
            'CCCCC',
            'DAEBD',
            'CCCCC'
        ], 
	  {
		A: 'minecraft:water_bucket',
        B: 'minecraft:lava_bucket',
        C: 'compressedblocks:c1_dark_oak_log',
        D: 'compressedblocks:c1_glass',
        E: 'botania:manasteel_block'
	  });
//////////////
event.shaped(
    Item.of('cobblefordays:tier_1', 1), 
    [
		'CCCCC',
		'DAEBD',
		'CCCCC'
	], 
  {
    A: 'minecraft:water_bucket',
    B: 'minecraft:lava_bucket',
    C: 'compressedblocks:c1_mangrove_log',
    D: 'compressedblocks:c1_glass',
    E: 'botania:manasteel_block'
  });

})

