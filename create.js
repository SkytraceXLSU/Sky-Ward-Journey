//console.info('Recipe create : on')
ServerEvents.recipes(event => {
    
    //event.remove({ output: 'create:brass_ingot' })
    event.remove({ output: 'create:andesite_alloy' })
    event.shaped(Item.of('create:andesite_alloy', 2), 
	  [
		'CBC',
		'BAB',
		'CBC'
	  ], 
	  {
		C: 'create:zinc_ingot',
        B: 'botania:manasteel_ingot',
        A: 'minecraft:polished_andesite'
	  });
	  event.remove({ output: 'create:mechanical_crafter' })


// Oak Wood
event.shaped(Item.of('create:mechanical_crafter', 1), 
[
  'AA ',
  'AA ',
  '   '
], 
{
  A: '#minecraft:logs'
});




































      event.shaped(Item.of('energizedpower:iron_gear', 1), 
	  [
		'BAB',
		'AAA',
		'BAB'
	  ], 
	  {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:stick'
	  });
	  
      event.shaped(Item.of('create:cogwheel', 1), 
	  [
		'ABA',
		'BCB',
		'ABA'
	  ], 
	  {
		A: {tag:'minecraft:logs'},
		B: 'create:shaft',
		C: 'energizedpower:iron_gear'
	  });
	  event.recipes.create.mechanical_crafting('create:large_cogwheel', 
      [
        ' DDD ',
        'DABAD',
        'DBCBD',
        'DABAD',
        ' DDD '
      ], 
      {
		A: 'energizedpower:iron_gear',
		B: 'create:andesite_casing',
		C: 'create:cogwheel',
        D: {tag:'minecraft:logs'}
      });
	  event.remove({ id: 'create:crushing/netherrack' })
	  event.recipes.createCrushing([
		'create:cinder_flour',
		Item.of('create:cinder_flour').withChance(0.5),
		Item.of('minecraft:magma_cream').withChance(0.1),
		Item.of('minecraft:blaze_powder').withChance(0.1),
		Item.of('minecraft:glowstone_dust').withChance(0.2),
		Item.of('minecraft:redstone').withChance(0.3)
	  ], 'minecraft:netherrack')






})

//console.info('Recipe create : off')