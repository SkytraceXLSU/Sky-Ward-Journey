ServerEvents.recipes(event => {

	event.remove({ output: 'expandedstorage:old_wood_chest' })
	event.remove({ output: 'expandedstorage:old_iron_chest' })
	event.remove({ output: 'expandedstorage:old_gold_chest' })
	event.remove({ output: 'expandedstorage:old_diamond_chest' })
	event.remove({ output: 'expandedstorage:old_obsidian_chest' })
	event.remove({ output: 'expandedstorage:old_netherite_chest' })



//*	event.remove({ output: 'expandedstorage:wood_chest' })
//	event.shaped(
//		Item.of('expandedstorage:wood_chest', 1), 
//	  [
//		'BBB',
//		'BAB',
//		'BBB'
//	  ], 
//	  {
//		A: {tag: 'forge:chests'},
//		B: {tag: 'minecraft_logs'}
//	  });

	event.remove({ output: 'expandedstorage:iron_chest' })
	/*event.shaped(
		Item.of('expandedstorage:iron_chest', 1), 
	  [
		'BBB',
		'BAB',
		'BBB'
	  ], 
	  {
		A: {tag: 'forge:chests'},
        B: 'compressedblocks:c2_iron_block'
	  });*/

	event.remove({ output: 'expandedstorage:gold_chest' })
	event.shaped(
		Item.of('expandedstorage:gold_chest', 1), 
	  [
		'BBB',
		'BAB',
		'BBB'
	  ], 
	  {
		A: 'expandedstorage:iron_chest',
        B: 'compressedblocks:c1_gold_block'
	  });


	  event.remove({ output: 'expandedstorage:diamond_chest' })
	  event.shaped(
		  Item.of('expandedstorage:diamond_chest', 1), 
		[
		  'BBB',
		  'BAB',
		  'BBB'
		], 
		{
		  A: 'expandedstorage:gold_chest',
		  B: 'compressedblocks:c2_diamond_block'
		});


		event.remove({ output: 'expandedstorage:obsidian_chest' })
		event.shaped(
			Item.of('expandedstorage:obsidian_chest', 1), 
		  [
			'BBB',
			'BAB',
			'BBB'
		  ], 
		  {
			A: 'expandedstorage:diamond_chest',
			B: 'compressedblocks:c3_obsidian'
		  });

		  event.remove({ output: 'expandedstorage:netherite_chest' })
		  event.shaped(
			  Item.of('expandedstorage:netherite_chest', 1), 
			[
			  'BBB',
			  'BAB',
			  'BBB'
			], 
			{
			  A: 'expandedstorage:obsidian_chest',
			  B: 'compressedblocks:c4_netherite_block'
			});



			event.remove({ output: 'expandedstorage:iron_barrel' })
			event.shaped(
				Item.of('expandedstorage:iron_barrel', 1), 
			  [
				'BBB',
				'BAB',
				'BBB'
			  ], 
			  {
				A: {tag: 'forge:barrels'},
				B: 'compressedblocks:c0_iron_block'
			  });
			
			event.remove({ output: 'expandedstorage:gold_barrel' })
			event.shaped(
				Item.of('expandedstorage:gold_barrel', 1), 
			  [
				'BBB',
				'BAB',
				'BBB'
			  ], 
			  {
				A: 'expandedstorage:iron_barrel',
				B: 'compressedblocks:c1_gold_block'
			  });
			
			event.remove({ output: 'expandedstorage:diamond_barrel' })
			event.shaped(
				Item.of('expandedstorage:diamond_barrel', 1), 
			  [
				'BBB',
				'BAB',
				'BBB'
			  ], 
			  {
				A: 'expandedstorage:gold_barrel',
				B: 'compressedblocks:c2_diamond_block'
			  });
			
			event.remove({ output: 'expandedstorage:obsidian_barrel' })
			event.shaped(
				Item.of('expandedstorage:obsidian_barrel', 1), 
			  [
				'BBB',
				'BAB',
				'BBB'
			  ], 
			  {
				A: 'expandedstorage:diamond_barrel',
				B: 'compressedblocks:c3_obsidian'
			  });
			
			event.remove({ output: 'expandedstorage:netherite_barrel' })
			event.shaped(
				Item.of('expandedstorage:netherite_barrel', 1), 
			  [
				'BBB',
				'BAB',
				'BBB'
			  ], 
			  {
				A: 'expandedstorage:obsidian_barrel',
				B: 'compressedblocks:c4_netherite_block'
			  });
			



            
            event.remove({ output: 'expandedstorage:wood_to_iron_conversion_kit' })
            event.shaped(
                Item.of('expandedstorage:wood_to_iron_conversion_kit', 1), 
              [
                'BBB',
                'BAB',
                'BBB'
              ], 
              {
                A: {tag: 'forge:chests/wooden'},
                B: 'compressedblocks:c0_iron_block'
              });
            
            event.remove({ output: 'expandedstorage:iron_to_gold_conversion_kit' })
            event.shaped(
                Item.of('expandedstorage:iron_to_gold_conversion_kit', 1), 
              [
                'BBB',
                'BAB',
                'BBB'
              ], 
              {
                B: 'compressedblocks:c1_iron_block',
                A: 'compressedblocks:c1_gold_block'
              });
            
            event.remove({ output: 'expandedstorage:gold_to_diamond_conversion_kit' })
            event.shaped(
                Item.of('expandedstorage:gold_to_diamond_conversion_kit', 1), 
              [
                'BBB',
                'BAB',
                'BBB'
              ], 
              {
                B: 'compressedblocks:c2_gold_block',
                A: 'compressedblocks:c2_diamond_block'
              });
            
            event.remove({ output: 'expandedstorage:diamond_to_obsidian_conversion_kit' })
            event.shaped(
                Item.of('expandedstorage:diamond_to_obsidian_conversion_kit', 1), 
              [
                'BBB',
                'BAB',
                'BBB'
              ], 
              {
                B: 'compressedblocks:c3_diamond_block',
                A: 'compressedblocks:c3_obsidian'
              });
            
            event.remove({ output: 'expandedstorage:obsidian_to_netherite_conversion_kit' })
            event.shaped(
                Item.of('expandedstorage:obsidian_to_netherite_conversion_kit', 1), 
              [
                'BBB',
                'BAB',
                'BBB'
              ], 
              {
                B: 'compressedblocks:c4_obsidian',
                A: 'compressedblocks:c4_netherite_block'
              });
            


})
