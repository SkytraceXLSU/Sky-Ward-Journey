console.info('Recipe TwilightForest : on')
ServerEvents.recipes(event => {
	// Change recipes here

	event.remove({ output: 'twilightforest:uncrafting_table' })
    event.remove({ type: 'twilightforest:uncrafting_table' })
    event.remove({ input: 'twilightforest:uncrafting_table' })



	event.shaped(
		Item.of('twilightforest:naga_spawn_egg', 1), 
	  [
		'AAA',
		'ADA',
		'AAA'
	  ], 
	  {
		A: 'twilightforest:naga_scale',
        D: 'compressedblocks:sextuple_crated_egg'
	  });


})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

console.info('Recipe TwilightForest : off')