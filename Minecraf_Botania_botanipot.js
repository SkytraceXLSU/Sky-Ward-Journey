ServerEvents.recipes(event => {




  //DISABLED
  event.remove({ output: '#storagedrawers:drawers' })
  event.remove({ output: 'twilightforest:uncrafting_table' })
  event.remove({ type: 'twilightforest:uncrafting_table' })


///////////////////////////////////////////////////////////////
///                                                         ///
///                       MINECRAFT                         ///
///                                                         ///
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
///                                                         ///
///                       BOTANIA                           ///
///                                                         ///
///////////////////////////////////////////////////////////////




/*-1 apple drop 1120 mana 
    seconde drop 640 mana 
    third drop 320 mana 2 times
    fouth drop 160 mana 
    APRIXAMATIF OR NOT
   Reset after new food drop */


  //event.recipes.botania.pure_daisy("output", "input", time)
  //event.recipes.botania.mana_infusion("output", "input", manaamount, "blockcatalyst")

	//event.remove({ output: 'botania:livingrock',type: 'botania:pure_daisy' })
	//event.remove({ output: 'botania:livingwood_log',type: 'botania:pure_daisy' })
	//event.remove({ id: 'botania:mana_infusion/manasteel' })
	//event.remove({ id: 'botania:mana_infusion/manasteel_block' })
	//event.recipes.botania.mana_infusion("botania:manasteel_ingot", "mekanism:ingot_steel", 500)
	//event.recipes.botania.mana_infusion("botania:manasteel_block", "mekanism:block_steel", 5000)
  //event.recipes.botania.petal_apothecary("mysticalagriculture:air_seeds", ["mysticalagriculture:prosperity_seed_base","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:inferium_essence","mysticalagriculture:air_agglomeratio","mysticalagriculture:air_agglomeratio","mysticalagriculture:air_agglomeratio","mysticalagriculture:air_agglomeratio"])

	//event.recipes.botania.pure_daisy("botania:livingrock", "compressedblocks:c1_stone", 1)


  ////          {----}  PETAL APOTHECARY  {----} 

  event.recipes.botania.petal_apothecary("minecraft:ink_sac", ["botania:black_petal","minecraft:black_dye","minecraft:black_dye","twilightforest:firefly"])






  ////          {----}  MANA_INFUSION  {----}  

  // WOOD
  event.recipes.botania.mana_infusion("aiotbotania:livingwood_axe", "minecraft:wooden_axe", 1500)
  event.recipes.botania.mana_infusion("aiotbotania:livingwood_pickaxe", "minecraft:wooden_pickaxe", 1500)
  event.recipes.botania.mana_infusion("aiotbotania:livingwood_hoe", "minecraft:wooden_hoe", 1500)
  event.recipes.botania.mana_infusion("aiotbotania:livingwood_shovel", "minecraft:wooden_shovel", 1500)
  event.recipes.botania.mana_infusion("aiotbotania:livingwood_sword", "minecraft:wooden_sword", 1500)
  event.recipes.botania.mana_infusion("aiotbotania:livingwood_aiot", "aiotbotania:livingwood_aiot", 2500)
  // STONE
  event.recipes.botania.mana_infusion("aiotbotania:livingrock_axe", "minecraft:stone_axe", 2000)
  event.recipes.botania.mana_infusion("aiotbotania:livingrock_pickaxe", "minecraft:stone_pickaxe", 2000)
  event.recipes.botania.mana_infusion("aiotbotania:livingrock_hoe", "minecraft:stone_hoe", 2000)
  event.recipes.botania.mana_infusion("aiotbotania:livingrock_shovel", "minecraft:stone_shovel", 2000)
  event.recipes.botania.mana_infusion("aiotbotania:livingrock_sword", "minecraft:stone_sword", 2000)
  event.recipes.botania.mana_infusion("aiotbotania:livingrock_aiot", "aiotbotania:livingrock_aiot", 2500)
  //PROSPERITE
  event.recipes.botania.mana_infusion("twilightforest:firefly", "minecraft:torch", 10000)
  event.recipes.botania.mana_infusion("mysticalagriculture:prosperity_shard", "twilightforest:firefly", 2500, "compressedblocks:c0_glowstone")
  event.recipes.botania.mana_infusion("mysticalagriculture:prosperity_shard", "twilightforest:cicada", 2500, "compressedblocks:c1_glowstone")
  //APPLE ??

  event.recipes.botania.mana_infusion("minecraft:apple", "minecraft:cobblestone", 1120)
  event.recipes.botania.mana_infusion("minecraft:golden_apple", "minecraft:apple", 2240)
  event.recipes.botania.mana_infusion("minecraft:enchanted_golden_apple", "minecraft:golden_apple", 4480)
  event.recipes.botania.mana_infusion("mysticalagradditions:inferium_apple", "minecraft:enchanted_golden_apple", 8960)
  event.recipes.botania.mana_infusion("mysticalagradditions:prudentium_apple", "mysticalagradditions:inferium_apple", 17920)//
  event.recipes.botania.mana_infusion("mysticalagradditions:tertium_apple", "mysticalagradditions:prudentium_apple", 35840)//
  event.recipes.botania.mana_infusion("mysticalagradditions:imperium_apple", "mysticalagradditions:tertium_apple", 71680)//
  event.recipes.botania.mana_infusion("mysticalagradditions:supremium_apple", "mysticalagradditions:imperium_apple", 143360)//
  event.recipes.botania.mana_infusion("mysticalagradditions:insanium_apple", "mysticalagradditions:supremium_apple", 286720)//
  //LOOT MOBS
  event.recipes.botania.mana_infusion("minecraft:gunpowder", "twilightforest:firefly", 25000, "compressedblocks:c1_glowstone")//
  //INGOT
  event.recipes.botania.mana_infusion("minecraft:gold_ingot", "minecraft:golden_apple", 25000, "compressedblocks:c1_glowstone")//
  event.remove({ output: 'botania:manasteel_ingot' })
  event.recipes.botania.mana_infusion("botania:manasteel_ingot", "powah:steel_energized", 25000 )//
  event.recipes.botania.mana_infusion("minecraft:quartz", "mysticalagriculture:prosperity_shard", 30000, "botania:manasteel_block")
  //ESSENCE
  event.recipes.botania.mana_infusion("mysticalagriculture:inferium_block", "mysticalagriculture:inferium_essence", 225000, "mysticalagriculture:prudentium_block")//

 //CHEST
    event.recipes.botania.mana_infusion("expandedstorage:iron_chest", "minecraft:chest", 300000, "compressedblocks:c3_iron_block")//

  ////          {----}  PURE_DAISY  {----}h

  //CHEST
  event.recipes.botania.pure_daisy("storagedrawers:oak_full_drawers_1", "minecraft:chest", 360)
  event.recipes.botania.pure_daisy("storagedrawers:oak_full_drawers_2", "storagedrawers:oak_full_drawers_1", 720)
  event.recipes.botania.pure_daisy("storagedrawers:oak_full_drawers_4", "storagedrawers:oak_full_drawers_2", 1080)

  //BASE
  event.remove({ output: 'botania:pure_daisy' })
	event.recipes.botania.pure_daisy("botania:livingwood_log", "#twilightforest:logs", 3)
  event.recipes.botania.pure_daisy("botania:livingwood_log", "#twilightforest:logs", 3)

  //CLAY
  event.recipes.botania.pure_daisy("minecraft:clay", "compressedblocks:c0_andesite", 60)
  event.recipes.botania.pure_daisy("compressedblocks:c0_clay", "minecraft:clay", 720)
  event.recipes.botania.pure_daisy("compressedblocks:c1_clay", "compressedblocks:c0_clay", 3000) 
  
  //SAND
  event.recipes.botania.pure_daisy("minecraft:sand", "compressedblocks:c0_granite", 60)
  event.recipes.botania.pure_daisy("compressedblocks:c0_sand", "minecraft:sand", 720)
  event.recipes.botania.pure_daisy("compressedblocks:c1_sand", "compressedblocks:c0_sand", 3000) 

  //GRAVEL
  event.recipes.botania.pure_daisy("minecraft:gravel", "compressedblocks:c0_gravel", 60)
  event.recipes.botania.pure_daisy("compressedblocks:c0_gravel", "minecraft:gravel", 720)
  event.recipes.botania.pure_daisy("compressedblocks:c1_gravel", "compressedblocks:c0_gravel", 3000) 

  //APPLE CLASS
  event.recipes.botania.pure_daisy("compressedblocks:double_crated_apple", "compressedblocks:crated_apple", 120)
  event.recipes.botania.pure_daisy("compressedblocks:triple_crated_apple", "compressedblocks:double_crated_apple", 1000)
  event.recipes.botania.pure_daisy("compressedblocks:quadruple_crated_apple", "compressedblocks:triple_crated_apple", 3750)
  event.recipes.botania.pure_daisy("compressedblocks:quintuple_crated_apple", "compressedblocks:quadruple_crated_apple", 9000)
  event.recipes.botania.pure_daisy("compressedblocks:sextuple_crated_apple", "compressedblocks:quintuple_crated_apple", 20000)
  event.recipes.botania.pure_daisy("compressedblocks:septuple_crated_apple", "compressedblocks:sextuple_crated_apple", 60000)
  event.recipes.botania.pure_daisy("compressedblocks:octuple_crated_apple", "compressedblocks:septuple_crated_apple", 100000)
  event.recipes.botania.pure_daisy("compressedblocks:mega_crated_apple", "compressedblocks:octuple_crated_apple", 250000)
  event.recipes.botania.pure_daisy("compressedblocks:giga_crated_apple", "compressedblocks:mega_crated_apple", 750000)


  //GOLDEN APPLE
  event.recipes.botania.pure_daisy("compressedblocks:double_crated_golden_apple", "compressedblocks:crated_golden_apple", 720)
  event.recipes.botania.pure_daisy("compressedblocks:triple_crated_golden_apple", "compressedblocks:double_crated_golden_apple", 4000)
  event.recipes.botania.pure_daisy("compressedblocks:quadruple_crated_golden_apple", "compressedblocks:triple_crated_golden_apple", 8000)//


  ////          {----}  TERRA PLATE  {----}h

  //event.recipes.botania.terra_plate("botania:manasteel_block", "mekanism:block_steel", 5000)




  //event.remove({ output: '#botanypots:all_botany_pots' })
  //event.remove({ mod: 'botanypots'})
  event.remove({ output: 'botania:pure_daisy' })
  event.shaped(
    Item.of('botania:pure_daisy', 1),
    [
      'FBF',
      'EAC',
      'FDF'
    ],
    {
      A: 'minecraft:oxeye_daisy',
      B: 'mysticalagriculture:water_seeds',
      C: 'mysticalagriculture:air_seeds',
      D: 'mysticalagriculture:fire_seeds',
      E: 'mysticalagriculture:earth_seeds',
      F: 'mysticalagriculture:prosperity_ingot_block',

    }
  );

///////////////////////////////////////////////////////////////
///                                                         ///
///                       BOTANIPOT                         ///
///                                                         ///
///////////////////////////////////////////////////////////////



    //event.recipes.botania.runic_altar()





///////////////////////////////////////////////////////////////
///                                                         ///
///                       DRAWERS                           ///
///                                                         ///
///////////////////////////////////////////////////////////////

  //event.remove({ output: '#storagedrawers:drawers' })
  event.shaped(
    Item.of('storagedrawers:oak_full_drawers_1', 1),
    [
      'AAA',
      ' B ',
      'AAA'
    ],
    {
      A: '#minecraft:planks',
      B: '#forge:chests'

    }
  );




})