ServerEvents.recipes(event => {
	event.remove({ output: 'extendedcrafting:handheld_table' })
    event.shaped(
		Item.of('extendedcrafting:handheld_table', 1), 
	  [
		' AA',
		' AA',
		'B  '
	  ], 
	  {
		B: 'minecraft:stick',
        A: 'avaritia:double_compressed_crafting_table'
	  });




    event.remove({ output: 'extendedcrafting:redstone_ingot' })
    event.shaped(
		Item.of('extendedcrafting:redstone_ingot', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'minecraft:redstone',
        B: 'energizedpower:energized_copper_ingot'
	  });
    event.shaped(
		Item.of('extendedcrafting:redstone_ingot', 1), 
	  [
		'AAA',
		'AAA',
		'AAA'
	  ], 
	  {
		A: 'extendedcrafting:redstone_nugget'
	  });
      event.shaped(
		Item.of('extendedcrafting:redstone_ingot', 9), 
	  [
		'   ',
		' A ',
		'   '
	  ], 
	  {
		A: 'extendedcrafting:redstone_ingot_block'
	  });

	event.remove({ id: 'extendedcrafting:black_iron_ingot' })

    //event.recipes.immersiveengineeringBlastFurnace('extendedcrafting:black_iron_ingot', 'thermal:steel_ingot', 'immersiveengineering:slag').time(2400);
	//event.recipes.immersiveengineeringBlastFurnace('extendedcrafting:black_iron_block', 'thermal:steel_block', 'immersiveengineering:slag').time(21600);
event.recipes.powah.energizing(["minecraft:ink_sac",
							    "ae2:black_paint_ball",
							    "twilightforest:ironwood_ingot",
								"botania:cosmetic_black_tie",
								"botania:black_petal_block"],
								"extendedcrafting:black_iron_ingot", 150000)


	event.remove({ output: 'extendedcrafting:basic_component' })
	event.remove({ output: 'extendedcrafting:basic_catalyst' })
	event.remove({ output: 'extendedcrafting:basic_table' })
	event.remove({ output: 'extendedcrafting:basic_auto_table' })

	event.remove({ output: 'extendedcrafting:advanced_component' })
    event.shaped(
		Item.of('extendedcrafting:advanced_component', 1), 
	  [
		'BBC',
		'CAB',
		'CCB'
	  ], 
	  {
		A: 'extendedcrafting:luminessence',
        B: 'extendedcrafting:black_iron_ingot',
		C: 'energizedpower:silicon'
	  });
	  event.remove({ output: 'extendedcrafting:advanced_catalyst' })
	  event.shaped(
		  Item.of('extendedcrafting:advanced_catalyst', 1), 
		[
		  'CBC',
		  'BAB',
		  'CBC'
		], 
		{
		  A: 'extendedcrafting:luminessence_block',
		  B: 'extendedcrafting:black_iron_ingot',
		  C: 'extendedcrafting:advanced_component'
		});
		event.remove({ output: 'extendedcrafting:advanced_table' })
		event.shaped(
			Item.of('extendedcrafting:advanced_table', 1), 
		  [
			'CAC',
			'BEB',
			'CDC'
		  ], 
		  {
			A: 'extendedcrafting:advanced_catalyst',
			B: 'minecraft:crafting_table',
			C: 'extendedcrafting:advanced_component',
			D: 'extendedcrafting:black_iron_slate',
			E: 'botania:terrasteel_ingot'
		  });

		  event.remove({ output: 'extendedcrafting:luminessence' })
		  event.shaped(
			Item.of('extendedcrafting:luminessence', 2), 
		  [
			'ABC',
			'EDE',
			'ABC'
		  ], 
		  {
			A: 'minecraft:glowstone_dust',
			B: 'minecraft:redstone',
			C: 'minecraft:gunpowder',
			D: 'mysticalagriculture:fertilized_essence',
			E: 'mysticalagriculture:inferium_essence'
		  });
		  event.remove({ output: 'undergarden:catalyst' })
		  event.shaped(
			  Item.of('undergarden:catalyst', 1), 
			[
			  'CBC',
			  'BAB',
			  'CBC'
			], 
			{
			  A: 'botania:mana_diamond_block',
			  B: 'thermal:iron_plate',
			  C: 'thermal:gold_plate'
			});













})