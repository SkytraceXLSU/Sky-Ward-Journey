
console.info('RECIPE EGG + SPAWNER : on')

ServerEvents.recipes(event => {

  event.recipes.extendedcrafting.shaped_table(
    Item.of('minecraft:spawner', 1), 
    [
      'AAAAA',
      'ABBBA',
      'ABCBA',
      'ABBBA',
      'AAAAA'
    ], 
    {
      A: 'compressedblocks:c5_iron_block',
      B: 'minecraft:nether_star',
      C: 'compressedblocks:c3_diamond_block'
    }); 
// Tier 1 
  event.shaped(
    Item.of('minecraft:zombie_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rotten_flesh',
      B: 'minecraft:iron_ingot',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:crated_egg'
    });


    event.shaped(
      Item.of('minecraft:squid_spawn_egg', 1), 
      [
        'ABA',
        'CDC',
        'ABA'
      ], 
      {
        A: 'minecraft:rotten_flesh',
        B: 'minecraft:water_bucket',
        C: 'minecraft:blue_dye',
        D: 'compressedblocks:crated_egg'
      });

      event.shaped(
        Item.of('minecraft:skeleton_spawn_egg', 1), 
        [
          'ABA',
          'CDC',
          'ABA'
        ], 
        {
          A: 'minecraft:bone',
          B: 'minecraft:bow',
          C: 'minecraft:white_dye',
          D: 'compressedblocks:crated_egg'
        });

























  event.shaped(
    Item.of('minecraft:bat_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:black_dye',
      B: 'minecraft:leather',
      C: 'minecraft:phantom_membrane',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:bee_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:honeycomb',
      B: 'minecraft:flower_pot',
      C: 'minecraft:yellow_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:blaze_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:blaze_rod',
      B: 'minecraft:magma_cream',
      C: 'minecraft:nether_wart',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:cat_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:string',
      B: 'minecraft:fish',
      C: 'minecraft:black_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:cave_spider_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:string',
      B: 'minecraft:spider_eye',
      C: 'minecraft:blue_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:chicken_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:feather',
      B: 'minecraft:wheat_seeds',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:cow_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:leather',
      B: 'minecraft:wheat',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:creeper_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:gunpowder',
      B: 'minecraft:sand',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:dolphin_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:fish',
      B: 'minecraft:kelp',
      C: 'minecraft:blue_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:donkey_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:leather',
      B: 'minecraft:hay_block',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:drowned_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rotten_flesh',
      B: 'minecraft:trident',
      C: 'minecraft:blue_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:elder_guardian_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:prismarine_shard',
      B: 'minecraft:prismarine_crystals',
      C: 'minecraft:cyan_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:enderman_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:ender_pearl',
      B: 'minecraft:obsidian',
      C: 'minecraft:black_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:endermite_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:ender_pearl',
      B: 'minecraft:chorus_fruit',
      C: 'minecraft:purple_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:evoker_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:emerald',
      B: 'minecraft:totem_of_undying',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:fox_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:sweet_berries',
      B: 'minecraft:leather',
      C: 'minecraft:orange_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:ghast_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:ghast_tear',
      B: 'minecraft:quartz',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:guardian_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:prismarine_shard',
      B: 'minecraft:prismarine_crystals',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:hoglin_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:porkchop',
      B: 'minecraft:crimson_fungus',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:horse_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:leather',
      B: 'minecraft:apple',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:husk_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:sand',
      B: 'minecraft:rotten_flesh',
      C: 'minecraft:brown_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:llama_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:leather',
      B: 'minecraft:hay_block',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:magma_cube_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:magma_cream',
      B: 'minecraft:blaze_powder',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:mooshroom_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:mushroom_stew',
      B: 'minecraft:leather',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:mule_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:leather',
      B: 'minecraft:hay_block',
      C: 'minecraft:brown_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:ocelot_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:string',
      B: 'minecraft:fish',
      C: 'minecraft:yellow_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:panda_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:bamboo',
      B: 'minecraft:leather',
      C: 'minecraft:black_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:parrot_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:feather',
      B: 'minecraft:melon_seeds',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:phantom_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:phantom_membrane',
      B: 'minecraft:black_dye',
      C: 'minecraft:purple_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:pig_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:porkchop',
      B: 'minecraft:carrot',
      C: 'minecraft:pink_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:piglin_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:gold_ingot',
      B: 'minecraft:rotten_flesh',
      C: 'minecraft:pink_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:pillager_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:crossbow',
      B: 'minecraft:emerald',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:polar_bear_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:fish',
      B: 'minecraft:ice',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:pufferfish_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:pufferfish',
      B: 'minecraft:water_bucket',
      C: 'minecraft:yellow_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:rabbit_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rabbit_foot',
      B: 'minecraft:carrot',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:ravager_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:emerald',
      B: 'minecraft:saddle',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:salmon_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:salmon',
      B: 'minecraft:water_bucket',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:sheep_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:wool',
      B: 'minecraft:wheat',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:shulker_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:shulker_shell',
      B: 'minecraft:purpur_block',
      C: 'minecraft:purple_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:silverfish_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:stone',
      B: 'minecraft:infested_stone',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });



  event.shaped(
    Item.of('minecraft:skeleton_horse_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:bone',
      B: 'minecraft:hay_block',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:slime_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:slime_ball',
      B: 'minecraft:magma_cream',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:stray_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:bone',
      B: 'minecraft:ice',
      C: 'minecraft:blue_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:strider_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:string',
      B: 'minecraft:crimson_fungus',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:tropical_fish_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:tropical_fish',
      B: 'minecraft:water_bucket',
      C: 'minecraft:orange_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:turtle_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:seagrass',
      B: 'minecraft:kelp',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:vex_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:iron_sword',
      B: 'minecraft:phantom_membrane',
      C: 'minecraft:blue_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:villager_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:emerald',
      B: 'minecraft:book',
      C: 'minecraft:white_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:vindicator_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:emerald',
      B: 'minecraft:iron_axe',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:wandering_trader_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:emerald',
      B: 'minecraft:lead',
      C

: 'minecraft:blue_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:witch_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:potion',
      B: 'minecraft:redstone',
      C: 'minecraft:black_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:wither_skeleton_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:wither_skeleton_skull',
      B: 'minecraft:coal',
      C: 'minecraft:black_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:wolf_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:bone',
      B: 'minecraft:white_wool',
      C: 'minecraft:gray_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:zoglin_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rotten_flesh',
      B: 'minecraft:porkchop',
      C: 'minecraft:red_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });



  event.shaped(
    Item.of('minecraft:zombie_horse_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rotten_flesh',
      B: 'minecraft:hay_block',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:zombie_villager_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rotten_flesh',
      B: 'minecraft:emerald',
      C: 'minecraft:green_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });

  event.shaped(
    Item.of('minecraft:zombified_piglin_spawn_egg', 1), 
    [
      'ABA',
      'CDC',
      'ABA'
    ], 
    {
      A: 'minecraft:rotten_flesh',
      B: 'minecraft:gold_nugget',
      C: 'minecraft:pink_dye',
      D: 'compressedblocks:sextuple_crated_egg'
    });



   
    console.info('RECIPE EGG + SPAWNER : off')
});
