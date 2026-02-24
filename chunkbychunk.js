console.info('Recipe chunkbychunk : on')

ServerEvents.recipes(event => {
	// Change recipes here
	event.remove({ output: 'chunkbychunk:plainschunkspawner' })
	event.remove({ output: 'chunkbychunk:snowchunkspawner' })
	event.remove({ output: 'chunkbychunk:desertchunkspawner' })
	event.remove({ output: 'chunkbychunk:swampchunkspawner' })
	event.remove({ output: 'chunkbychunk:badlandschunkspawner' })
	event.remove({ output: 'chunkbychunk:forestchunkspawner' })
	event.remove({ output: 'chunkbychunk:savannachunkspawner' })
	event.remove({ output: 'chunkbychunk:rockychunkspawner' })
	event.remove({ output: 'chunkbychunk:junglechunkspawner' })
	event.remove({ output: 'chunkbychunk:mushroomchunkspawner' })
	event.remove({ output: 'chunkbychunk:mountainchunkspawner' })
	event.remove({ input: 'chunkbychunk:plainschunkspawner' })
	event.remove({ input: 'chunkbychunk:snowchunkspawner' })
	event.remove({ input: 'chunkbychunk:desertchunkspawner' })
	event.remove({ input: 'chunkbychunk:swampchunkspawner' })
	event.remove({ input: 'chunkbychunk:badlandschunkspawner' })
	event.remove({ input: 'chunkbychunk:forestchunkspawner' })
	event.remove({ input: 'chunkbychunk:savannachunkspawner' })
	event.remove({ input: 'chunkbychunk:rockychunkspawner' })
	event.remove({ input: 'chunkbychunk:junglechunkspawner' })
	event.remove({ input: 'chunkbychunk:mushroomchunkspawner' })
	event.remove({ input: 'chunkbychunk:mountainchunkspawner' })


	event.remove({ output: 'chunkbychunk:chunkspawner' })
	event.recipes.extendedcrafting.shaped_table(
		Item.of('chunkbychunk:chunkspawner', 2),
		[ 
		  'ABBBA', 
		  'CDEFC',
		  'CJHJC',
		  'CGKLC', 
		  'ABBBA'  
		],
		{
			A: 'powah:dielectric_casing',
			B: 'powah:dielectric_rod_horizontal',
			C: 'powah:dielectric_rod',
			D: 'twilightforest:firefly',
			E: 'diamethysts:diamethyst_crystal',
			F: 'mysticalagriculture:fertilized_essence',
			G: 'energizedpower:energized_copper_ingot',
			H: 'undergarden:catalyst',
			J: 'powah:steel_energized',
			K: 'chunkbychunk:worldcore',
			L: 'energizedpower:energized_gold_ingot'
		}
	  )










































})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

console.info('Recipe chunkbychunk : off')