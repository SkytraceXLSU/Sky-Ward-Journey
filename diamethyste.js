ServerEvents.recipes(event => {

	event.remove({ output: 'minecraft:amethyst_block' })
	event.shaped(
		Item.of('minecraft:amethyst_block', 1), 
	  [
		'AAA',
		'ABA',
		'AAA'
	  ], 
	  {
		A: 'minecraft:amethyst_shard',
		B: 'minecraft:diamond'
	  });

	  event.recipes.botania.mana_infusion("diamethysts:diamethyst_crystal", "minecraft:amethyst_cluster", 50000, "compressedblocks:c2_amethyst_block")

	  event.recipes.botania.mana_infusion("diamethysts:diamethyst_shard", "minecraft:amethyst_shard", 12500,      "minecraft:budding_amethyst")
	  event.recipes.botania.mana_infusion("diamethysts:diamethyst_shard", "minecraft:small_amethyst_bud", 12500,  "minecraft:budding_amethyst")
	  event.recipes.botania.mana_infusion("diamethysts:diamethyst_shard", "minecraft:medium_amethyst_bud", 12500, "minecraft:budding_amethyst")
	  event.recipes.botania.mana_infusion("diamethysts:diamethyst_shard", "minecraft:large_amethyst_bud", 12500,  "minecraft:budding_amethyst")

	  event.remove({ output: 'diamethysts:diamethysts_dust' })
	  event.recipes.powah.energizing(["botania:mana_powder","thermal:basalz_powder"], "diamethysts:diamethyst_dust", 1000000)

	  
})
