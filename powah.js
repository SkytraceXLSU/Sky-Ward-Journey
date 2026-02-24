ServerEvents.recipes(event => {
    event.remove({ output: 'powah:steel_energized' })
    // .energizing([inputs, ...], output, energy)
	/*event.recipes.powah.energizing(["immersiveengineering:ingot_steel",
									  "energizedpower:energized_copper_ingot"], 
									  "powah:steel_energized", 10000)*/





event.recipes.powah.energizing(["minecraft:copper_ingot",
							    "extendedcrafting:luminessence",
							    "minecraft:enchanted_golden_apple",
								"mysticalagriculture:fertilized_essence"],
								"powah:steel_energized", 100000)















	event.remove({ output: 'powah:energizing_rod_hardened' })
	event.recipes.extendedcrafting.shaped_table(
		 Item.of('powah:energizing_rod_hardened', 2),
		[ 
		  'ABA', 
		  'DDD',
		  'ODO',
		  'ODO', 
		  'DLD'   
		],
		{
			A: 'powah:dielectric_casing',
			B: 'powah:energizing_orb',
			O: 'powah:capacitor_hardened',
			D: '#forge:storage_blocks/quartz',
			L: 'powah:energizing_rod_basic'
		}
	  )

	event.remove({ output: 'powah:thermo_generator_hardened' })
	event.recipes.extendedcrafting.shaped_table(
		Item.of('powah:thermo_generator_hardened', 2),
		[ 
		  'DDDDD', 
		  'DDBDD',
		  'DDCDD',
		  'DBDBD', 
		  'AAAAA'   
		],
		{
			A: 'minecraft:iron_ingot',
			C: 'powah:dielectric_casing',
			B: 'powah:capacitor_hardened',
			D: '#forge:storage_blocks/quartz'
		}
	  )














    event.shaped(
		Item.of('powah:steel_energized', 1), 
	  [
		'AAA',
		'A A',
		'AAA'
	  ], 
	  {
		A: 'mysticalagriculture:energized_steel_essence'
	  });
      event.shaped(
		Item.of('powah:steel_energized', 9), 
	  [
		'   ',
		' A ',
		'   '
	  ], 
	  {
		A: 'powah:energized_steel_block'
	  });

      event.remove({ output: 'powah:dielectric_casing' })
      event.shaped(
		Item.of('powah:dielectric_casing', 1), 
	  [
		'ACA',
		'DBD',
		'ACA'
	  ], 
	  {
		A: 'compressedblocks:c0_copper_block',
        B: 'undergarden:catalyst',
        C: 'powah:dielectric_rod_horizontal',
        D: 'powah:dielectric_rod'
	  });      

      event.remove({ output: 'powah:capacitor_blazing' })
      event.shaped(
		Item.of('powah:capacitor_blazing', 1), 
	  [
		'ACA',
		'CBC',
		'ACA'
	  ], 
	  {
		A: 'powah:dielectric_paste',
        B: 'powah:capacitor_hardened',
        C: 'powah:crystal_blazing',
	  });
	  
	  
      event.remove({ output: 'powah:capacitor_niotic' })
      event.recipes.extendedcrafting.shaped_table(
		Item.of('powah:capacitor_niotic', 1), 
	  [
		'ADDDA',
		'ECCCE',
		'ECBCE',
		'ECCCE',
		'ADDDA'
	  ], 
	  {
		A: 'powah:dielectric_paste',
        B: 'powah:capacitor_blazing',
        C: 'powah:crystal_niotic',
		D: 'powah:dielectric_rod_horizontal',
		E: 'powah:dielectric_rod'
	  }); 

      event.remove({ output: 'powah:capacitor_spirited' })
      event.recipes.extendedcrafting.shaped_table(
		Item.of('powah:capacitor_spirited', 1), 
	  [
		'ADDDDDA',
		'ECCCCCE',
		'ECCCCCE',
		'ECCBCCE',
		'ECCCCCE',
		'ECCCCCE',
		'ADDDDDA'
	  ], 
	  {
		A: 'powah:dielectric_paste',
        B: 'powah:capacitor_niotic',
        C: 'powah:crystal_spirited',
		D: 'powah:dielectric_rod_horizontal',
		E: 'powah:dielectric_rod'
	  });	 
	  
	  
      event.remove({ output: 'powah:capacitor_nitro' })
      event.recipes.extendedcrafting.shaped_table(
		Item.of('powah:capacitor_nitro', 1), 
	  [
		'ADDDDDDDA',
		'ECCCCCCCE',
		'ECCCCCCCE',
		'ECCCCCCCE',
		'ECCCBCCCE',
		'ECCCCCCCE',
		'ECCCCCCCE',
		'ECCCCCCCE',
		'ADDDDDDDA'
	  ], 
	  {
		A: 'powah:dielectric_paste',
        B: 'powah:capacitor_spirited',
        C: 'powah:crystal_nitro',
		D: 'powah:dielectric_rod_horizontal',
		E: 'powah:dielectric_rod'
	  });
	  
	  
      event.remove({ output: 'powah:dielectric_paste' })
      event.shaped(
		Item.of('powah:dielectric_paste', 6), 
	  [
		'ADA',
		'CBC',
		'ADA'
	  ], 
	  {
		A: 'minecraft:glowstone_dust',
        B: 'minecraft:lava_bucket',
        C: 'extendedcrafting:luminessence',
		D: 'minecraft:clay_ball'
	  });


    event.remove({ output: 'powah:capacitor_basic' })
      event.shaped(
		Item.of('powah:capacitor_basic', 6), 
	  [
		' AB',
		'ACA',
		'BA '
	  ], 
	  {
		A: 'mysticalagriculture:prosperity_shard',
        B: 'powah:dielectric_paste',
        C: 'extendedcrafting:luminessence'
	  });








})