// priority: 0

console.info('Recipe mysticalagriculture : on')

ServerEvents.recipes(event => {
	// Change recipes here
	event.remove({ output: 'mysticalagriculture:chrome_seeds' })
	event.remove({ output: 'mysticalagriculture:graphite_seeds' })
	event.remove({ output: 'mysticalagriculture:brass_seeds' })
	event.remove({ output: 'mysticalagriculture:tungsten_seeds' })
	event.remove({ output: 'mysticalagriculture:iridium_seeds' })
	event.remove({ output: 'mysticalagriculture:mithril_seeds' })
	event.remove({ output: 'mysticalagriculture:zinc_seeds' })
	event.remove({ output: 'mysticalagriculture:titanium_seeds' })
	event.remove({ output: 'mysticalagriculture:platinum_seeds' })
	event.remove({ output: 'mysticalagriculture:rubber_seeds' })
	event.remove({ output: 'mysticalagriculture:chrome_essence' })
	event.remove({ output: 'mysticalagriculture:graphite_essence' })
	event.remove({ output: 'mysticalagriculture:brass_essence' })
	event.remove({ output: 'mysticalagriculture:tungsten_essence' })
	event.remove({ output: 'mysticalagriculture:iridium_essence' })
	event.remove({ output: 'mysticalagriculture:mithril_essence' })
	event.remove({ output: 'mysticalagriculture:zinc_essence' })
	event.remove({ output: 'mysticalagriculture:titanium_essence' })
	event.remove({ output: 'mysticalagriculture:platinum_essence' })
	event.remove({ output: 'mysticalagriculture:rubber_essence' })
	event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
	event.remove({ output: 'mysticalagriculture:infusion_altar' })
	//event.remove({ output: 'mysticalagriculture:fertilized_essence' })
//Tier ELEMENTAL
	event.recipes.botania.petal_apothecary("mysticalagriculture:air_seeds", 
		   ["mysticalagriculture:prosperity_seed_base","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence",
			"mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:air_agglomeratio",
			"mysticalagriculture:air_agglomeratio","mysticalagriculture:air_agglomeratio","mysticalagriculture:air_agglomeratio"])

	event.recipes.botania.petal_apothecary("mysticalagriculture:earth_seeds", ["mysticalagriculture:prosperity_seed_base","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:earth_agglomeratio","mysticalagriculture:earth_agglomeratio","mysticalagriculture:earth_agglomeratio","mysticalagriculture:earth_agglomeratio"])
	event.recipes.botania.petal_apothecary("mysticalagriculture:fire_seeds", ["mysticalagriculture:prosperity_seed_base","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:fire_agglomeratio","mysticalagriculture:fire_agglomeratio","mysticalagriculture:fire_agglomeratio","mysticalagriculture:fire_agglomeratio"])
	event.recipes.botania.petal_apothecary("mysticalagriculture:water_seeds", ["mysticalagriculture:prosperity_seed_base","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:water_agglomeratio","mysticalagriculture:water_agglomeratio","mysticalagriculture:water_agglomeratio","mysticalagriculture:water_agglomeratio"])
	
//Tier 1
	event.recipes.botania.mana_infusion("mysticalagriculture:stone_seeds", "mysticalagriculture:prosperity_seed_base", 50000, "compressedblocks:c3_stone")
	event.recipes.botania.mana_infusion("mysticalagriculture:dirt_seeds", "mysticalagriculture:prosperity_seed_base", 50000, "compressedblocks:c3_dirt")
	event.recipes.botania.mana_infusion("mysticalagriculture:wood_seeds", "mysticalagriculture:prosperity_seed_base", 50000, "minecraft:oak_log")
	event.recipes.botania.mana_infusion("mysticalagriculture:ice_seeds", "mysticalagriculture:prosperity_seed_base", 50000, "compressedblocks:c3_blue_ice")
	event.recipes.botania.mana_infusion("mysticalagriculture:deepslate_seeds", "mysticalagriculture:prosperity_seed_base", 50000, "compressedblocks:c3_deepslate")

//Tier 2
	event.recipes.botania.terra_plate("mysticalagriculture:nature_seeds", ["mysticalagriculture:prosperity_seed_base", "mysticalagriculture:nature_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:nature_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:nature_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:nature_agglomeratio","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:mystical_flower_seeds", ["mysticalagriculture:prosperity_seed_base", "mysticalagriculture:mystical_flower_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:mystical_flower_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:mystical_flower_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:mystical_flower_agglomeratio","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:apatite_seeds", ["mysticalagriculture:prosperity_seed_base", "thermal:apatite", "mysticalagriculture:prudentium_essence", "thermal:apatite","mysticalagriculture:prudentium_essence", "thermal:apatite","mysticalagriculture:prudentium_essence", "thermal:apatite","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:saltpeter_seeds", ["mysticalagriculture:prosperity_seed_base", "thermal:niter_dust", "mysticalagriculture:prudentium_essence", "thermal:niter_dust","mysticalagriculture:prudentium_essence", "thermal:niter_dust","mysticalagriculture:prudentium_essence", "thermal:niter_dust","mysticalagriculture:prudentium_essence"], 50000)
	//event.recipes.botania.terra_plate("mysticalagriculture:aluminum_seeds", ["mysticalagriculture:prosperity_seed_base", "immersiveengineering:ingot_aluminum", "mysticalagriculture:prudentium_essence", "immersiveengineering:ingot_aluminum","mysticalagriculture:prudentium_essence", "immersiveengineering:ingot_aluminum","mysticalagriculture:prudentium_essence", "immersiveengineering:ingot_aluminum","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:sulfur_seeds", ["mysticalagriculture:prosperity_seed_base", "thermal:sulfur_dust", "mysticalagriculture:prudentium_essence", "thermal:sulfur_dust","mysticalagriculture:prudentium_essence", "thermal:sulfur_dust","mysticalagriculture:prudentium_essence", "thermal:sulfur_dust","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:silicon_seeds", ["mysticalagriculture:prosperity_seed_base", "energizedpower:silicon", "mysticalagriculture:prudentium_essence", "energizedpower:silicon","mysticalagriculture:prudentium_essence", "energizedpower:silicon","mysticalagriculture:prudentium_essence", "energizedpower:silicon","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:amethyst_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:amethyst_shard", "mysticalagriculture:prudentium_essence", "minecraft:amethyst_shard","mysticalagriculture:prudentium_essence", "minecraft:amethyst_shard","mysticalagriculture:prudentium_essence", "minecraft:amethyst_shard","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:honey_seeds", ["mysticalagriculture:prosperity_seed_base", "mysticalagriculture:honey_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:honey_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:honey_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:honey_agglomeratio","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:coral_seeds", ["mysticalagriculture:prosperity_seed_base", "mysticalagriculture:coral_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:coral_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:coral_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:coral_agglomeratio","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:coal_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:coal", "mysticalagriculture:prudentium_essence", "minecraft:coal","mysticalagriculture:prudentium_essence", "minecraft:coal","mysticalagriculture:prudentium_essence", "minecraft:coal","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:nether_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:nether_bricks", "mysticalagriculture:prudentium_essence", "minecraft:nether_bricks","mysticalagriculture:prudentium_essence", "minecraft:nether_bricks","mysticalagriculture:prudentium_essence", "minecraft:nether_bricks","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:dye_seeds", ["mysticalagriculture:prosperity_seed_base", "mysticalagriculture:dye_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:dye_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:dye_agglomeratio","mysticalagriculture:prudentium_essence", "mysticalagriculture:dye_agglomeratio","mysticalagriculture:prudentium_essence"], 50000)
//Tier 2 mobs 
	event.recipes.botania.terra_plate("mysticalagriculture:turtle_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:scute", "mysticalagriculture:prudentium_essence", "minecraft:scute","mysticalagriculture:prudentium_essence", "minecraft:scute","mysticalagriculture:prudentium_essence", "minecraft:scute","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:slime_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:slime_ball", "mysticalagriculture:prudentium_essence", "minecraft:slime_ball","mysticalagriculture:prudentium_essence", "minecraft:slime_ball","mysticalagriculture:prudentium_essence", "minecraft:slime_ball","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:fish_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:pufferfish", "mysticalagriculture:prudentium_essence", "minecraft:cod","mysticalagriculture:prudentium_essence", "minecraft:salmon","mysticalagriculture:prudentium_essence", "minecraft:tropical_fish","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:squid_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:ink_sac", "mysticalagriculture:prudentium_essence", "minecraft:ink_sac","mysticalagriculture:prudentium_essence", "minecraft:ink_sac","mysticalagriculture:prudentium_essence", "minecraft:ink_sac","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:cow_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:leather", "mysticalagriculture:prudentium_essence", "minecraft:leather","mysticalagriculture:prudentium_essence", "minecraft:beef","mysticalagriculture:prudentium_essence", "minecraft:beef","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:sheep_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:mutton", "mysticalagriculture:prudentium_essence", "minecraft:mutton","mysticalagriculture:prudentium_essence", "minecraft:white_wool","mysticalagriculture:prudentium_essence", "minecraft:white_wool","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:chicken_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:egg", "mysticalagriculture:prudentium_essence", "minecraft:egg","mysticalagriculture:prudentium_essence", "minecraft:egg","mysticalagriculture:prudentium_essence", "minecraft:egg","mysticalagriculture:prudentium_essence"], 50000)
	event.recipes.botania.terra_plate("mysticalagriculture:pig_seeds", ["mysticalagriculture:prosperity_seed_base", "minecraft:porkchop", "mysticalagriculture:prudentium_essence", "minecraft:porkchop","mysticalagriculture:prudentium_essence", "minecraft:porkchop","mysticalagriculture:prudentium_essence", "minecraft:porkchop","mysticalagriculture:prudentium_essence"], 50000)

//Tier 3
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:nether_quartz_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","ae2:certus_quartz_crystal","ae2:certus_quartz_crystal"], "mysticalagriculture:certus_quartz_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:stone_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","compressedblocks:c4_stone","compressedblocks:c4_stone"], "mysticalagriculture:sky_stone_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:wood_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","twilightforest:ironwood_block","twilightforest:ironwood_block"], "mysticalagriculture:ironwood_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:nature_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","twilightforest:steeleaf_block","twilightforest:steeleaf_block"], "mysticalagriculture:steeleaf_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","botania:manasteel_block","botania:manasteel_block"], "mysticalagriculture:manasteel_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:basalz_rod","thermal:basalz_rod"], "mysticalagriculture:basalz_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:blitz_rod","thermal:blitz_rod"], "mysticalagriculture:blitz_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:blizz_rod","thermal:blizz_rod"], "mysticalagriculture:blizz_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:lead_block","thermal:lead_block"], "mysticalagriculture:lead_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:silver_block","thermal:silver_block"], "mysticalagriculture:silver_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:bronze_block","thermal:bronze_block"], "mysticalagriculture:bronze_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","thermal:tin_block","thermal:tin_block"], "mysticalagriculture:tin_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:fire_seeds","mysticalagriculture:tertium_block","compressedblocks:c4_obsidian","compressedblocks:c4_obsidian"], "mysticalagriculture:obsidian_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:fire_seeds","mysticalagriculture:tertium_block","compressedblocks:c4_redstone_block","compressedblocks:c4_redstone_block"], "mysticalagriculture:redstone_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:fire_seeds","mysticalagriculture:tertium_block","compressedblocks:quintuple_crated_glowstone_dust","compressedblocks:quintuple_crated_glowstone_dust"], "mysticalagriculture:glowstone_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:iron_seeds","mysticalagriculture:fire_seeds","mysticalagriculture:tertium_block","compressedblocks:quintuple_crated_quartz","compressedblocks:quintuple_crated_quartz"], "mysticalagriculture:nether_quartz_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:coal_seeds","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","compressedblocks:c4_raw_copper_block","compressedblocks:c4_raw_copper_block"], "mysticalagriculture:copper_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:prosperity_seed_base","mysticalagriculture:coal_seeds","mysticalagriculture:stone_seeds","mysticalagriculture:fire_seeds","mysticalagriculture:tertium_block","compressedblocks:c4_iron_block"], "mysticalagriculture:iron_seeds", 1000000)
//Tier 3 mobs
	event.recipes.powah.energizing(["mysticalagriculture:soulium_seed_base","compressedblocks:quintuple_crated_rabbit","compressedblocks:quintuple_crated_rabbit_hide","compressedblocks:quintuple_crated_rabbit_foot","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block"], "mysticalagriculture:rabbit_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:soulium_seed_base","compressedblocks:quintuple_crated_spider_eye","compressedblocks:quintuple_crated_string","compressedblocks:quintuple_crated_fermented_spider_eye","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block"], "mysticalagriculture:spider_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:soulium_seed_base","compressedblocks:quintuple_crated_gunpowder","compressedblocks:quintuple_crated_gunpowder","minecraft:creeper_head","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block"], "mysticalagriculture:creeper_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:soulium_seed_base","compressedblocks:quintuple_crated_bone","compressedblocks:quintuple_crated_arrow","minecraft:skeleton_skull","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block"], "mysticalagriculture:skeleton_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:soulium_seed_base","compressedblocks:quintuple_crated_rotten_flesh","compressedblocks:quintuple_crated_rotten_flesh","minecraft:zombie_head","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block"], "mysticalagriculture:zombie_seeds", 1000000)
	event.recipes.powah.energizing(["mysticalagriculture:soulium_seed_base","compressedblocks:quintuple_crated_cod","compressedblocks:quintuple_crated_salmon","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block","mysticalagriculture:tertium_block"], "mysticalagriculture:prismarine_seeds", 1000000)


	event.recipes.botania.petal_apothecary("minecraft:leather", ["minecraft:rotten_flesh","minecraft:rotten_flesh"])

	event.shaped(
		Item.of('mysticalagriculture:fertilized_essence', 1), 
	  [
		'ABA',
		'BCB',
		'ABA'
	  ], 
	  {
		A: 'compressedblocks:c0_hay_block',
        B: 'mysticalagriculture:mystical_fertilizer',
		C: 'extendedcrafting:luminessence_block'
	  });


	//AGLO WATER
	event.remove({ output: 'mysticalagriculture:water_agglomeratio' })
	event.shaped(
		Item.of('mysticalagriculture:water_agglomeratio', 4), 
	  [
		'ABA',
		'CDC',
		'ABA'
	  ], 
	  {
		A: 'mysticalagriculture:water_essence', 
        B: 'minecraft:potion',
		C: 'extendedcrafting:luminessence',
        D: 'botania:rune_water'
	  });


	//AGLO EARTH
	event.remove({ output: 'mysticalagriculture:earth_agglomeratio' })
	event.shaped(
		Item.of('mysticalagriculture:earth_agglomeratio', 4), 
	  [
		'ABA',
		'CDC',
		'ABA'
	  ], 
	  {
		A: 'mysticalagriculture:earth_essence', 
        C: 'minecraft:wheat_seeds',
		B: 'extendedcrafting:luminessence',
        D: 'botania:rune_earth'
	  });

	//AGLO FIRE
	event.remove({ output: 'mysticalagriculture:fire_agglomeratio' })
	event.shaped(
		Item.of('mysticalagriculture:fire_agglomeratio', 4), 
	  [
		'BAC',
		'ADA',
		'CAB'
	  ], 
	  {
		A: 'mysticalagriculture:fire_essence', 
        B: 'minecraft:campfire',
		C: 'extendedcrafting:luminessence',
        D: 'botania:rune_fire'
	  });

  
	//AGLO FIRE
	event.remove({ output: 'mysticalagriculture:air_agglomeratio' })
	event.shaped(
		Item.of('mysticalagriculture:air_agglomeratio', 4), 
	  [
		'BAC',
		'ADA',
		'CAB'
	  ], 
	  {
		A: 'mysticalagriculture:fire_essence', 
        C: 'minecraft:feather',
		B: 'extendedcrafting:luminessence',
        D: 'botania:rune_air'
	  });

	// infernium essence+ // 1 block = 12 clay, 18 gravel, 18 sand, 1 enchanted golden apple
	event.shaped(
		Item.of('mysticalagriculture:inferium_essence', 3), 
	  [
		'ABA',
		'CDC',
		'ABA'
	  ], 
	  {
		A: 'minecraft:clay', 
        B: 'compressedblocks:c0_gravel',
		C: 'compressedblocks:c0_sand',
        D: 'minecraft:enchanted_golden_apple'
	  });

	  //seed base
	  event.remove({ output: 'mysticalagriculture:prosperity_seed_base' })
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_seed_base', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_shard',
        B: 'minecraft:wheat_seeds'
	  });

	  event.shaped(
		Item.of('mysticalagriculture:prosperity_seed_base', 9), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_block',
        B: 'minecraft:wheat_seeds'
	  });

	  //ingot
	  event.remove({ output: 'mysticalagriculture:prosperity_ingot' })
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_ingot', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_shard',
        B: 'botania:manasteel_ingot'
	  });	  
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_ingot', 9), 
	  [
		'CCC',
		'CBC',
		'CCC'
	  ], 
	  {
        B: 'botania:manasteel_block',
		C: 'mysticalagriculture:prosperity_block'
	  });
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_ingot', 9), 
	  [
		' A ',
		'   ',
		'   '
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_ingot_block'
	  });	  
	  
	  //gemstone
	  event.remove({ output: 'mysticalagriculture:prosperity_gemstone' })  
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_gemstone', 9), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_block',
        B: 'minecraft:diamond_block'
	  });	
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_gemstone', 9), 
	  [
		' A ',
		'   ',
		'   '
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_gemstone_block'
	  });	
	  //seedinferium     
	  event.remove({ output: 'mysticalagriculture:inferium_seeds' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_seeds', 1), 
	  [
		'CCC',
		'CBC',
		'CCC'
	  ], 
	  {
        B: 'mysticalagriculture:prosperity_seed_base',
		C: 'mysticalagriculture:inferium_essence'
	  });	  
	  
	  //seedinferium     
	  event.remove({ id: 'mysticalagriculture:inferium_ingot' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_ingot', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		C: 'mysticalagriculture:inferium_essence',
		B: 'mysticalagriculture:prosperity_ingot',
		A: 'mysticalagriculture:inferium_block'
	});

	  //gemstoneinferium     
	  event.remove({ id: 'mysticalagriculture:inferium_gemstone' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_gemstone', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'mysticalagriculture:inferium_block',
		C: 'mysticalagriculture:inferium_essence',
		B: 'mysticalagriculture:prosperity_gemstone'
	  });	  
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_gemstone', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_block',
		C: 'mysticalagriculture:prosperity_shard',
		B: 'minecraft:diamond'
	  });	  	  
	  //inferium_farmland     
	  event.remove({output: 'mysticalagriculture:inferium_farmland' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_farmland', 1), 
	  [
		'CAC',
		'BDB',
		'CAC'
	  ], 
	  {
		C: 'mysticalagriculture:inferium_essence',
		A: 'mysticalagriculture:inferium_ingot',
		B: 'mysticalagriculture:inferium_gemstone',
		D: 'minecraft:farmland'
	  });	  
	  
	  //inferium_growth_accelerator
	  event.remove({output: 'mysticalagriculture:inferium_growth_accelerator' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_growth_accelerator', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:inferium_essence',
		B: 'mysticalagriculture:inferium_gemstone',
		A: 'mysticalagriculture:inferium_ingot',
		D: 'mysticalagriculture:inferium_block',
		E: 'mysticalagriculture:inferium_upgrade'
	  });	


	  //gemstoneinferium     
	  event.remove({output: 'mysticalagriculture:inferium_reprocessor' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_reprocessor', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:inferium_block',
		B: 'mysticalagriculture:inferium_gemstone',
		A: 'mysticalagriculture:inferium_ingot',
		D: 'mysticalagriculture:basic_reprocessor',
		E: 'mysticalagriculture:inferium_upgrade'
	  });	  
	  event.remove({output: 'mysticalagriculture:inferium_furnace' })
	  event.shaped(
		Item.of('mysticalagriculture:inferium_furnace', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:inferium_block',
		B: 'mysticalagriculture:inferium_gemstone',
		A: 'mysticalagriculture:inferium_ingot',
		D: 'minecraft:furnace',
		E: 'mysticalagriculture:inferium_upgrade'
	  });

	  //sword 	
	  event.remove({output: 'mysticalagriculture:inferium_sword' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_sword', 1), 
		[ 
		  '    A', 
		  ' B A ',
		  'BCA  ',
		  ' DCB ', 
		  'E B  '  
		],
		{
			A: 'mysticalagriculture:inferium_growth_accelerator',
			C: 'mysticalagriculture:inferium_gemstone',
			B: 'mysticalagriculture:inferium_ingot_block',
			D: 'minecraft:diamond_sword',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )	  

	  //scythe
	  event.remove({output: 'mysticalagriculture:inferium_scythe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_scythe', 1), 
		[ 
		  'AAAA ', 
		  'A  B ',
		  '  C  ',
		  ' D   ', 
		  'E    '  
		],
		{
			A: 'mysticalagriculture:inferium_gemstone_block',
			C: 'mysticalagriculture:inferium_ingot',
			D: 'mysticalagriculture:diamond_scythe',
			B: 'mysticalagriculture:inferium_upgrade',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )	

	  //pickaxe
	  event.remove({output: 'mysticalagriculture:inferium_pickaxe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_pickaxe', 1), 
		[ 
		  ' AB C', 
		  '  BD ',
		  '  EBB',
		  ' C  A', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:inferium_gemstone',
			C: 'mysticalagriculture:inferium_ingot',
			E: 'minecraft:diamond_pickaxe',
			D: 'mysticalagriculture:inferium_upgrade',
			B: 'mysticalagriculture:inferium_growth_accelerator'

		}
	  )

	  //shovel
	  event.remove({output: 'mysticalagriculture:inferium_shovel' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_shovel', 1), 
		[ 
		  '  BAA', 
		  '  ADA',
		  '  EAB',
		  ' C   ', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:inferium_growth_accelerator',
			C: 'mysticalagriculture:inferium_gemstone',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_shovel',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )	
	  //axe
	  event.remove({output: 'mysticalagriculture:inferium_axe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_axe', 1), 
		[ 
		  ' BBBB', 
		  ' BAE ',
		  ' BD  ',
		  ' C   ', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:inferium_growth_accelerator',
			C: 'mysticalagriculture:inferium_gemstone',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_axe',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )	
	  //hoe
	  event.remove({output: 'mysticalagriculture:inferium_hoe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_hoe', 1), 
		[ 
		  ' BB C', 
		  'B  E ',
		  '  D  ',
		  ' C   ', 
		  'C    '  
		],
		{
			C: 'mysticalagriculture:inferium_ingot',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_hoe',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )	
	  //sickle
	  event.remove({output: 'mysticalagriculture:inferium_sickle' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_sickle', 1), 
		[ 
		  '  BBB', 
		  '    B',
		  '  DBB',
		  ' E   ', 
		  'C    '  
		],
		{
			C: 'mysticalagriculture:inferium_ingot',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'mysticalagriculture:diamond_sickle',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //fish rod
	  event.remove({output: 'mysticalagriculture:inferium_fishing_rod' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_fishing_rod', 1), 
		[ 
		  '    B', 
		  '   BA',
		  ' EB A',
		  ' D  A', 
		  'C  CA'  
		],
		{
			A: 'botania:mana_string',
			C: 'mysticalagriculture:inferium_ingot',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:fishing_rod',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //fish rod
	  event.remove({output: 'mysticalagriculture:inferium_shears' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_shears', 1), 
		[ 
		  ' BBC ', 
		  ' BC C',
		  ' B CB',
		  'BEBBB', 
		  'DB   '  
		],
		{
			C: 'mysticalagriculture:inferium_ingot',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'botania:manasteel_shears',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //crossbow
	  event.remove({output: 'mysticalagriculture:inferium_crossbow' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_crossbow', 1), 
		[ 
		  'BBBBA', 
		  'BB A ',
		  'B AB ',
		  'BABE ', 
		  'A   D'  
		],
		{
			A: 'botania:mana_string',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:crossbow',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //bow
	  event.remove({output: 'mysticalagriculture:inferium_bow' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_bow', 1), 
		[ 
		  'ECBBB', 
		  'CD  A',
		  'B  A ',
		  'B A  ', 
		  'BA   '  
		],
		{
			A: 'botania:mana_string',
			C: 'mysticalagriculture:inferium_ingot',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:bow',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //canwater
	  event.remove({output: 'mysticalagriculture:inferium_watering_can' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_watering_can', 1), 
		[ 
		  ' CCC ', 
		  ' C CC',
		  'CBDBC',
		  ' BEBC', 
		  ' BBB '  
		],
		{
			C: 'mysticalagriculture:inferium_ingot',
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'pickletweaks:reinforced_watering_can',
			E: 'botania:rune_water'
		}
	  )
	  //helmet
	  event.remove({output: 'mysticalagriculture:inferium_helmet' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_helmet', 1), 
		[ 
		  '     ', 
		  'BEDEB',
		  'B   B',
		  'B   B', 
		  'B   B'  
		],
		{
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_helmet',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //chestplate
	  event.remove({output: 'mysticalagriculture:inferium_chestplate' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_chestplate', 1), 
		[ 
		  'BB BB', 
		  'BBBBB',
		  'BEEEB',
		  'BEDEB', 
		  'BEEEB'  
		],
		{
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_chestplate',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //leggings
	  event.remove({output: 'mysticalagriculture:inferium_leggings' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_leggings', 1), 
		[ 
		  'EEEEE', 
		  'BBDBB',
		  'B   B',
		  'B   B', 
		  'B   B'  
		],
		{
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_leggings',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //boots
	  event.remove({output: 'mysticalagriculture:inferium_boots' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:inferium_boots', 1), 
		[ 
		  '     ', 
		  ' B B ',
		  ' B B ',
		  'BD DB', 
		  'EB BE'  
		],
		{
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'minecraft:diamond_boots',
			E: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //paxel
	  event.remove({output: 'mysticalagradditions:inferium_paxel' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagradditions:inferium_paxel', 1), 
		[ 
		  'BBBBB', 
		  'BBADB',
		  '  ECB',
		  ' B BB', 
		  'F  BB'  
		],
		{
			B: 'mysticalagriculture:inferium_gemstone_block',
			D: 'pickletweaks:diamond_paxel',
			E: 'mysticalagriculture:inferium_sword',
			A: 'mysticalagriculture:inferium_axe',
			C: 'mysticalagriculture:inferium_shovel',
			F: 'mysticalagriculture:inferium_upgrade'
		}
	  )
	  //apple
	  event.remove({output: 'mysticalagradditions:inferium_apple' })  
	  event.shaped(
		Item.of('mysticalagradditions:inferium_apple', 1), 
	  [
		'AAA',
		'ECE',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:inferium_gemstone',
		E: 'mysticalagriculture:inferium_upgrade',
		C: 'minecraft:golden_apple'
	  });

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
	  //prudentium block
	  event.remove({ output: 'mysticalagriculture:prudentium_ingot_block' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_ingot_block', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prudentium_ingot',
        B: 'mysticalagriculture:inferium_ingot_block'
	  });
	  //prudentium gem block
	  event.remove({ output: 'mysticalagriculture:prudentium_gemstone_block' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_gemstone_block', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prudentium_gemstone',
        B: 'mysticalagriculture:inferium_gemstone_block'
	  });

	  //prudentium     ingot
	  event.remove({ id: 'mysticalagriculture:prudentium_ingot' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_ingot', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		C: 'mysticalagriculture:prudentium_essence',
		B: 'mysticalagriculture:inferium_ingot',
		A: 'mysticalagriculture:prudentium_block'
	});

	  //gemstoneprudentium     
	  event.remove({ id: 'mysticalagriculture:prudentium_gemstone' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_gemstone', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'mysticalagriculture:prudentium_block',
		C: 'mysticalagriculture:prudentium_essence',
		B: 'mysticalagriculture:inferium_gemstone'
	  });	  
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_gemstone', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_block',
		C: 'mysticalagriculture:prosperity_shard',
		B: 'minecraft:diamond'
	  });	  	  
	  //prudentium_farmland     
	  event.remove({output: 'mysticalagriculture:prudentium_farmland' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_farmland', 1), 
	  [
		'CAC',
		'BDB',
		'CAC'
	  ], 
	  {
		C: 'mysticalagriculture:prudentium_essence',
		B: 'mysticalagriculture:prudentium_gemstone',
		A: 'mysticalagriculture:prudentium_ingot',
		D: 'mysticalagriculture:inferium_farmland'
	  });	  
	  
	  //prudentium_growth_accelerator
	  event.remove({output: 'mysticalagriculture:prudentium_growth_accelerator' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_growth_accelerator', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:prudentium_essence',
		B: 'mysticalagriculture:prudentium_gemstone',
		A: 'mysticalagriculture:prudentium_ingot',
		D: 'mysticalagriculture:inferium_growth_accelerator',
		E: 'mysticalagriculture:prudentium_upgrade'
	  });	


	  //gemstoneprudentium     
	  event.remove({output: 'mysticalagriculture:prudentium_reprocessor' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_reprocessor', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:prudentium_block',
		B: 'mysticalagriculture:prudentium_gemstone',
		A: 'mysticalagriculture:prudentium_ingot',
		D: 'mysticalagriculture:inferium_reprocessor',
		E: 'mysticalagriculture:prudentium_upgrade'
	  });	  
	  event.remove({output: 'mysticalagriculture:prudentium_furnace' })
	  event.shaped(
		Item.of('mysticalagriculture:prudentium_furnace', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:prudentium_block',
		B: 'mysticalagriculture:prudentium_gemstone',
		A: 'mysticalagriculture:prudentium_ingot',
		D: 'mysticalagriculture:inferium_furnace',
		E: 'mysticalagriculture:prudentium_upgrade'
	  });

	  //sword 	
	  event.remove({output: 'mysticalagriculture:prudentium_sword' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_sword', 1), 
		[ 
		  '    A', 
		  ' B A ',
		  'BCA  ',
		  ' DCB ', 
		  'E B  '  
		],
		{
			A: 'mysticalagriculture:prudentium_growth_accelerator',
			C: 'mysticalagriculture:prudentium_gemstone',
			B: 'mysticalagriculture:prudentium_ingot_block',
			D: 'mysticalagriculture:inferium_sword',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )	  

	  //scythe
	  event.remove({output: 'mysticalagriculture:prudentium_scythe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_scythe', 1), 
		[ 
		  'AAAA ', 
		  'A  B ',
		  '  C  ',
		  ' D   ', 
		  'E    '  
		],
		{
			A: 'mysticalagriculture:prudentium_gemstone_block',
			C: 'mysticalagriculture:prudentium_ingot',
			D: 'mysticalagriculture:inferium_scythe',
			B: 'mysticalagriculture:prudentium_upgrade',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )	

	  //pickaxe
	  event.remove({output: 'mysticalagriculture:prudentium_pickaxe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_pickaxe', 1), 
		[ 
		  ' AB C', 
		  '  BD ',
		  '  EBB',
		  ' C  A', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:prudentium_gemstone',
			C: 'mysticalagriculture:prudentium_ingot',
			E: 'mysticalagriculture:inferium_pickaxe',
			D: 'mysticalagriculture:prudentium_upgrade',
			B: 'mysticalagriculture:prudentium_growth_accelerator'

		}
	  )

	  //shovel
	  event.remove({output: 'mysticalagriculture:prudentium_shovel' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_shovel', 1), 
		[ 
		  '  BAA', 
		  '  ADA',
		  '  EAB',
		  ' C   ', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:prudentium_growth_accelerator',
			C: 'mysticalagriculture:prudentium_gemstone',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_shovel',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )	
	  //axe
	  event.remove({output: 'mysticalagriculture:prudentium_axe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_axe', 1), 
		[ 
		  ' BBBB', 
		  ' BAE ',
		  ' BD  ',
		  ' C   ', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:prudentium_growth_accelerator',
			C: 'mysticalagriculture:prudentium_gemstone',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_axe',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )	
	  //hoe
	  event.remove({output: 'mysticalagriculture:prudentium_hoe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_hoe', 1), 
		[ 
		  ' BB C', 
		  'B  E ',
		  '  D  ',
		  ' C   ', 
		  'C    '  
		],
		{
			C: 'mysticalagriculture:prudentium_ingot',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_hoe',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )	
	  //sickle
	  event.remove({output: 'mysticalagriculture:prudentium_sickle' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_sickle', 1), 
		[ 
		  '  BBB', 
		  '    B',
		  '  DBB',
		  ' E   ', 
		  'C    '  
		],
		{
			C: 'mysticalagriculture:prudentium_ingot',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_sickle',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //fish rod
	  event.remove({output: 'mysticalagriculture:prudentium_fishing_rod' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_fishing_rod', 1), 
		[ 
		  '    B', 
		  '   BA',
		  ' EB A',
		  ' D  A', 
		  'C  CA'  
		],
		{
			A: 'botania:mana_string',
			C: 'mysticalagriculture:prudentium_ingot',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_fishing_rod',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //fish rod
	  event.remove({output: 'mysticalagriculture:prudentium_shears' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_shears', 1), 
		[ 
		  ' BBC ', 
		  ' BC C',
		  ' B CB',
		  'BEBBB', 
		  'DB   '  
		],
		{
			C: 'mysticalagriculture:prudentium_ingot',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_shears',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //crossbow
	  event.remove({output: 'mysticalagriculture:prudentium_crossbow' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_crossbow', 1), 
		[ 
		  'BBBBA', 
		  'BB A ',
		  'B AB ',
		  'BABE ', 
		  'A   D'  
		],
		{
			A: 'botania:mana_string',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_crossbow',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //bow
	  event.remove({output: 'mysticalagriculture:prudentium_bow' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_bow', 1), 
		[ 
		  'ECBBB', 
		  'CD  A',
		  'B  A ',
		  'B A  ', 
		  'BA   '  
		],
		{
			A: 'botania:mana_string',
			C: 'mysticalagriculture:prudentium_ingot',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_bow',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //canwater
	  event.remove({output: 'mysticalagriculture:prudentium_watering_can' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_watering_can', 1), 
		[ 
		  ' CCC ', 
		  ' C CC',
		  'CBDBC',
		  ' BEBC', 
		  ' BBB '  
		],
		{
			C: 'mysticalagriculture:prudentium_ingot',
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_watering_can',
			E: 'botania:rune_water'
		}
	  )
	  //helmet
	  event.remove({output: 'mysticalagriculture:prudentium_helmet' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_helmet', 1), 
		[ 
		  '     ', 
		  'BEDEB',
		  'B   B',
		  'B   B', 
		  'B   B'  
		],
		{
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_helmet',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //chestplate
	  event.remove({output: 'mysticalagriculture:prudentium_chestplate' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_chestplate', 1), 
		[ 
		  'BB BB', 
		  'BBBBB',
		  'BEEEB',
		  'BEDEB', 
		  'BEEEB'  
		],
		{
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_chestplate',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //leggings
	  event.remove({output: 'mysticalagriculture:prudentium_leggings' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_leggings', 1), 
		[ 
		  'EEEEE', 
		  'BBDBB',
		  'B   B',
		  'B   B', 
		  'B   B'  
		],
		{
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_leggings',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //boots
	  event.remove({output: 'mysticalagriculture:prudentium_boots' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:prudentium_boots', 1), 
		[ 
		  '     ', 
		  ' B B ',
		  ' B B ',
		  'BD DB', 
		  'EB BE'  
		],
		{
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagriculture:inferium_boots',
			E: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //paxel
	  event.remove({output: 'mysticalagradditions:prudentium_paxel' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagradditions:prudentium_paxel', 1), 
		[ 
		  'BBBBB', 
		  'BBADB',
		  '  ECB',
		  ' B BB', 
		  'F  BB'  
		],
		{
			B: 'mysticalagriculture:prudentium_gemstone_block',
			D: 'mysticalagradditions:inferium_paxel',
			E: 'mysticalagriculture:prudentium_sword',
			A: 'mysticalagriculture:prudentium_axe',
			C: 'mysticalagriculture:prudentium_shovel',
			F: 'mysticalagriculture:prudentium_upgrade'
		}
	  )
	  //apple
	  event.remove({output: 'mysticalagradditions:prudentium_apple' })  
	  event.shaped(
		Item.of('mysticalagradditions:prudentium_apple', 1), 
	  [
		'AAA',
		'ECE',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:prudentium_gemstone',
		E: 'mysticalagriculture:prudentium_upgrade',
		C: 'mysticalagradditions:inferium_apple'
	  });
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


	  //tertium block
	  event.remove({ output: 'mysticalagriculture:tertium_ingot_block' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_ingot_block', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:tertium_ingot',
        B: 'mysticalagriculture:prudentium_ingot_block'
	  });
	  //tertium gem block
	  event.remove({ output: 'mysticalagriculture:tertium_gemstone_block' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_gemstone_block', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:tertium_gemstone',
        B: 'mysticalagriculture:prudentium_gemstone_block'
	  });

	  //tertium     ingot
	  event.remove({ id: 'mysticalagriculture:tertium_ingot' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_ingot', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		C: 'mysticalagriculture:tertium_essence',
		B: 'mysticalagriculture:prudentium_ingot',
		A: 'mysticalagriculture:tertium_block'
	});

	  //gemstonetertium     
	  event.remove({ id: 'mysticalagriculture:tertium_gemstone' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_gemstone', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'mysticalagriculture:tertium_block',
		C: 'mysticalagriculture:tertium_essence',
		B: 'mysticalagriculture:prudentium_gemstone'
	  });	  
	  event.shaped(
		Item.of('mysticalagriculture:prosperity_gemstone', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_block',
		C: 'mysticalagriculture:prosperity_shard',
		B: 'minecraft:diamond'
	  });	  	  
	  //tertium_farmland     
	  event.remove({output: 'mysticalagriculture:tertium_farmland' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_farmland', 1), 
	  [
		'CAC',
		'BDB',
		'CAC'
	  ], 
	  {
		C: 'mysticalagriculture:tertium_essence',
		B: 'mysticalagriculture:tertium_gemstone',
		A: 'mysticalagriculture:tertium_ingot',
		D: 'mysticalagriculture:prudentium_farmland'
	  });	  
	  
	  //tertium_growth_accelerator
	  event.remove({output: 'mysticalagriculture:tertium_growth_accelerator' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_growth_accelerator', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:tertium_essence',
		B: 'mysticalagriculture:tertium_gemstone',
		A: 'mysticalagriculture:tertium_ingot',
		D: 'mysticalagriculture:prudentium_growth_accelerator',
		E: 'mysticalagriculture:tertium_upgrade'
	  });	


	  //gemstonetertium     
	  event.remove({output: 'mysticalagriculture:tertium_reprocessor' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_reprocessor', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:tertium_block',
		B: 'mysticalagriculture:tertium_gemstone',
		A: 'mysticalagriculture:tertium_ingot',
		D: 'mysticalagriculture:prudentium_reprocessor',
		E: 'mysticalagriculture:tertium_upgrade'
	  });	  
	  event.remove({output: 'mysticalagriculture:tertium_furnace' })
	  event.shaped(
		Item.of('mysticalagriculture:tertium_furnace', 1), 
	  [
		'CAC',
		'BDB',
		'CEC'
	  ], 
	  {
		C: 'mysticalagriculture:tertium_block',
		B: 'mysticalagriculture:tertium_gemstone',
		A: 'mysticalagriculture:tertium_ingot',
		D: 'mysticalagriculture:prudentium_furnace',
		E: 'mysticalagriculture:tertium_upgrade'
	  });

	  //sword 	
	  event.remove({output: 'mysticalagriculture:tertium_sword' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_sword', 1), 
		[ 
		  '    A', 
		  ' B A ',
		  'BCA  ',
		  ' DCB ', 
		  'E B  '  
		],
		{
			A: 'mysticalagriculture:tertium_growth_accelerator',
			C: 'mysticalagriculture:tertium_gemstone',
			B: 'mysticalagriculture:tertium_ingot_block',
			D: 'mysticalagriculture:prudentium_sword',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )	  

	  //scythe
	  event.remove({output: 'mysticalagriculture:tertium_scythe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_scythe', 1), 
		[ 
		  'AAAA ', 
		  'A  B ',
		  '  C  ',
		  ' D   ', 
		  'E    '  
		],
		{
			A: 'mysticalagriculture:tertium_gemstone_block',
			C: 'mysticalagriculture:tertium_ingot',
			D: 'mysticalagriculture:prudentium_scythe',
			B: 'mysticalagriculture:tertium_upgrade',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )	

	  //pickaxe
	  event.remove({output: 'mysticalagriculture:tertium_pickaxe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_pickaxe', 1), 
		[ 
		  ' AB C', 
		  '  BD ',
		  '  EBB',
		  ' C  A', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:tertium_gemstone',
			C: 'mysticalagriculture:tertium_ingot',
			E: 'mysticalagriculture:prudentium_pickaxe',
			D: 'mysticalagriculture:tertium_upgrade',
			B: 'mysticalagriculture:tertium_growth_accelerator'

		}
	  )

	  //shovel
	  event.remove({output: 'mysticalagriculture:tertium_shovel' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_shovel', 1), 
		[ 
		  '  BAA', 
		  '  ADA',
		  '  EAB',
		  ' C   ', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:tertium_growth_accelerator',
			C: 'mysticalagriculture:tertium_gemstone',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_shovel',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )	
	  //axe
	  event.remove({output: 'mysticalagriculture:tertium_axe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_axe', 1), 
		[ 
		  ' BBBB', 
		  ' BAE ',
		  ' BD  ',
		  ' C   ', 
		  'C    '  
		],
		{
			A: 'mysticalagriculture:tertium_growth_accelerator',
			C: 'mysticalagriculture:tertium_gemstone',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_axe',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )	
	  //hoe
	  event.remove({output: 'mysticalagriculture:tertium_hoe' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_hoe', 1), 
		[ 
		  ' BB C', 
		  'B  E ',
		  '  D  ',
		  ' C   ', 
		  'C    '  
		],
		{
			C: 'mysticalagriculture:tertium_ingot',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_hoe',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )	
	  //sickle
	  event.remove({output: 'mysticalagriculture:tertium_sickle' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_sickle', 1), 
		[ 
		  '  BBB', 
		  '    B',
		  '  DBB',
		  ' E   ', 
		  'C    '  
		],
		{
			C: 'mysticalagriculture:tertium_ingot',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_sickle',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //fish rod
	  event.remove({output: 'mysticalagriculture:tertium_fishing_rod' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_fishing_rod', 1), 
		[ 
		  '    B', 
		  '   BA',
		  ' EB A',
		  ' D  A', 
		  'C  CA'  
		],
		{
			A: 'botania:mana_string',
			C: 'mysticalagriculture:tertium_ingot',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_fishing_rod',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //fish rod
	  event.remove({output: 'mysticalagriculture:tertium_shears' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_shears', 1), 
		[ 
		  ' BBC ', 
		  ' BC C',
		  ' B CB',
		  'BEBBB', 
		  'DB   '  
		],
		{
			C: 'mysticalagriculture:tertium_ingot',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_shears',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //crossbow
	  event.remove({output: 'mysticalagriculture:tertium_crossbow' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_crossbow', 1), 
		[ 
		  'BBBBA', 
		  'BB A ',
		  'B AB ',
		  'BABE ', 
		  'A   D'  
		],
		{
			A: 'botania:mana_string',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_crossbow',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //bow
	  event.remove({output: 'mysticalagriculture:tertium_bow' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_bow', 1), 
		[ 
		  'ECBBB', 
		  'CD  A',
		  'B  A ',
		  'B A  ', 
		  'BA   '  
		],
		{
			A: 'botania:mana_string',
			C: 'mysticalagriculture:tertium_ingot',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_bow',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //canwater
	  event.remove({output: 'mysticalagriculture:tertium_watering_can' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_watering_can', 1), 
		[ 
		  ' CCC ', 
		  ' C CC',
		  'CBDBC',
		  ' BEBC', 
		  ' BBB '  
		],
		{
			C: 'mysticalagriculture:tertium_ingot',
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_watering_can',
			E: 'botania:rune_water'
		}
	  )
	  //helmet
	  event.remove({output: 'mysticalagriculture:tertium_helmet' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_helmet', 1), 
		[ 
		  '     ', 
		  'BEDEB',
		  'B   B',
		  'B   B', 
		  'B   B'  
		],
		{
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_helmet',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //chestplate
	  event.remove({output: 'mysticalagriculture:tertium_chestplate' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_chestplate', 1), 
		[ 
		  'BB BB', 
		  'BBBBB',
		  'BEEEB',
		  'BEDEB', 
		  'BEEEB'  
		],
		{
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_chestplate',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //leggings
	  event.remove({output: 'mysticalagriculture:tertium_leggings' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_leggings', 1), 
		[ 
		  'EEEEE', 
		  'BBDBB',
		  'B   B',
		  'B   B', 
		  'B   B'  
		],
		{
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_leggings',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //boots
	  event.remove({output: 'mysticalagriculture:tertium_boots' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagriculture:tertium_boots', 1), 
		[ 
		  '     ', 
		  ' B B ',
		  ' B B ',
		  'BD DB', 
		  'EB BE'  
		],
		{
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagriculture:prudentium_boots',
			E: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //paxel
	  event.remove({output: 'mysticalagradditions:tertium_paxel' })  
      event.recipes.extendedcrafting.shaped_table(
		Item.of('mysticalagradditions:tertium_paxel', 1), 
		[ 
		  'BBBBB', 
		  'BBADB',
		  '  ECB',
		  ' B BB', 
		  'F  BB'  
		],
		{
			B: 'mysticalagriculture:tertium_gemstone_block',
			D: 'mysticalagradditions:prudentium_paxel',
			E: 'mysticalagriculture:tertium_sword',
			A: 'mysticalagriculture:tertium_axe',
			C: 'mysticalagriculture:tertium_shovel',
			F: 'mysticalagriculture:tertium_upgrade'
		}
	  )
	  //apple
	  event.remove({output: 'mysticalagradditions:tertium_apple' })  
	  event.shaped(
		Item.of('mysticalagradditions:tertium_apple', 1), 
	  [
		'AAA',
		'ECE',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:tertium_gemstone',
		E: 'mysticalagriculture:tertium_upgrade',
		C: 'mysticalagradditions:prudentium_apple'
	  });







	    
	  event.remove([{ id: 'mysticalagriculture:essence/minecraft/sand'}])
	  event.shaped(
		Item.of('minecraft:sand', 8), 
	  [
		' AB',
		' BB',
		'   '
	  ], 
	  {
		A: 'mysticalagriculture:fire_essence',
		B: 'mysticalagriculture:dirt_essence'
	  });//✔

	  event.remove([{ id: 'mysticalagriculture:essence/minecraft/red_sand'}])
	  event.shaped(
		Item.of('minecraft:red_sand', 8), 
	  [
		'AA ',
		'AB ',
		'   '
	  ], 
	  {
		A: 'mysticalagriculture:fire_essence',
		B: 'mysticalagriculture:dirt_essence'
	  });//✔

	  
	  event.remove([{ id: 'mysticalagriculture:essence/minecraft/clay_ball'}])
	  event.shaped(
		Item.of('minecraft:clay_ball', 8), 
	  [
		'BA ',
		'AA ',
		'   '
	  ], 
	  {
		A: 'mysticalagriculture:water_essence',
		B: 'mysticalagriculture:dirt_essence'
	  });//✔

		event.remove([{ id: 'mysticalagriculture:essence/minecraft/kelp'}])
			event.shaped(
		Item.of('minecraft:kelp', 4), 
			[
			'   ',
			'   ',
			'ABA'
			], 
			{
				A: 'mysticalagriculture:nature_essence',
				B: 'mysticalagriculture:water_essence'
			});

	  //event.remove([{ id: 'mysticalagriculture:essence/minecraft/clay_ball'}])
	  event.shaped(
		Item.of('minecraft:wheat_seeds', 4), 
	  [
		'BB ',
		'BA ',
		'   '
	  ], 
	  {
		A: 'mysticalagriculture:water_essence',
		B: 'mysticalagriculture:dirt_essence'
	  });//✔


	 // event.remove([{ id: 'mysticalagriculture:essence/minecraft/red_dye'}])
	 // event.shaped(
	//	Item.of('minecraft:red_dye', 2), 
	 // [
	//	'  A',
	////	' A ',
	//	' A '
	 // ], 
	//  {
	//	A: 'mysticalagriculture:dye_essence'
	 // });
	 event.remove([{ id: 'create:crafting/kinetics/mecanical_crafter'}])
	  	  //

			event.shaped(
				Item.of('minecraft:iron_ingot', 2), 
			  [
				'BAC',
				'AFA',
				'DAE'
			  ], 
			  {
				A: 'minecraft:coal',
				B: 'mysticalagriculture:earth_essence',
				C: 'mysticalagriculture:water_essence',
				D: 'mysticalagriculture:fire_essence',
				E: 'mysticalagriculture:nature_essence',
				F: 'mysticalagriculture:inferium_essence'
			  });

			 // event.replaceInput(
				//'minecraft:stick',            // Arg 2: the item to replace
				//'#minecraft:saplings'         // Arg 3: the item to replace it with
				// Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
			 // )













})



// Listen for block right-click events
BlockEvents.rightClicked(event => {
	// Check if the clicked block is grass
	if (event.block.id === 'minecraft:farmland') {
	  // Check if the item in hand is blaze powder
	  if (event.item.id === 'mysticalagriculture:inferium_upgrade') {
		// Generate a random number between 0 and 1
		let randomNumber = Math.random();
  
		// Set a 75% chance of execution
		if (randomNumber < 0.75) {
		  // Set the block to coarse dirt
		  event.block.set('mysticalagriculture:inferium_farmland');
		  event.player.tell("§aSuccess");

		  // Reduce the item count in hand by 1
		  event.player.mainHandItem.count--;
		  // Cancel the default item use behavior
		  event.cancel();
		}
		    	// Reduce the item count in hand by 1
    	event.player.tell("§cFail");
		  event.player.mainHandItem.count--;
	  }
	}
  });

  BlockEvents.broken(event => {
    // Vérifie si le bloc cassé est du farmland
    if (event.block.id === 'minecraft:farmland') {

        // Supprime les drops par défaut
        event.drops.clear();
        // Ajoute un bloc de farmland comme drop
		
		event.player.give('minecraft:farmland')
    }
});

console.info('Recipe mysticalagriculture : off')