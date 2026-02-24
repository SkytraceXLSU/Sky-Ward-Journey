
LootJS.modifiers((event) => {
    const lootData = [
        { entity: "minecraft:skeleton", loots: ["mysticalagriculture:skeleton_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:creeper", loots: ["mysticalagriculture:creeper_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:zombie", loots: ["mysticalagriculture:zombie_essence", "mysticalagriculture:iron_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:spider", loots: ["mysticalagriculture:spider_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:cave_spider", loots: ["mysticalagriculture:spider_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:pig", loots: ["mysticalagriculture:pig_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:piglin", loots: ["mysticalagriculture:gold_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:piglin_brute", loots: ["mysticalagriculture:gold_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:zombified_piglin", loots: ["mysticalagriculture:gold_essence", "mysticalagriculture:zombie_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:chicken", loots: ["mysticalagriculture:chicken_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:cow", loots: ["mysticalagriculture:cow_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:guardian", loots: ["mysticalagriculture:prismarine_essence", "mysticalagriculture:fish_essence"] },
        { entity: "minecraft:elder_guardian", loots: ["mysticalagriculture:prismarine_essence", "mysticalagriculture:fish_essence"] },
        { entity: "minecraft:sheep", loots: ["mysticalagriculture:sheep_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:glow_squid", loots: ["mysticalagriculture:squid_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:squid", loots: ["mysticalagriculture:squid_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:rabbit", loots: ["mysticalagriculture:rabbit_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:tropical_fish", loots: ["mysticalagriculture:fish_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:cod", loots: ["mysticalagriculture:fish_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:pufferfish", loots: ["mysticalagriculture:fish_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:salmon", loots: ["mysticalagriculture:fish_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:slime", loots: ["mysticalagriculture:slime_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:turtle", loots: ["mysticalagriculture:turtle_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:blaze", loots: ["mysticalagriculture:blaze_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:ghast", loots: ["mysticalagriculture:ghast_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:wither_skeleton", loots: ["mysticalagriculture:wither_skeleton_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:villager", loots: ["mysticalagriculture:emerald_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:bee", loots: ["mysticalagriculture:honey_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:witch", loots: ["mysticalagriculture:glowstone_essence", "mysticalagriculture:redstone_essence", "mysticalagriculture:experience_essence"] },
        { entity: "minecraft:enderman", loots: ["mysticalagriculture:end_essence", "mysticalagriculture:enderman_essence", "mysticalagriculture:experience_essence"] },
    ];

    lootData.forEach(function(data) {
        data.loots.forEach(function(loot) {
            event.addEntityLootModifier(data.entity)
                .randomChance(0.005)
                .addLoot(LootEntry.of(loot));
        });
    });
    console.info('Block Break : §aon')
});