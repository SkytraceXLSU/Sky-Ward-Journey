
  //Ces codes enregistres une commande / action personnalisée 
  //Assurez-vous de personnaliser le code selon vos besoins spécifiques.
///////////////////////////////////////
/////         /myCommand          /////
/////////////////////////////////////// 


// On serveur or local server ONLY , Not work in local( solo )
  /*ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event; 
    event.register(
        Commands.literal('chunkcreate')
        .executes(ctx => {
            const player = ctx.getSource().getPlayer();

            const minRange = -100; // Not too far mobs are more stronger    MAX can be 1000 
            const maxRange = 100; 

            const targetX = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
            const targetY = 300
            const targetZ = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
            player.server.runCommand(`/op ${player.profile.name}`)
            player.setPosition(targetX, targetY, targetZ);
            player.server.runCommand(`/effect give @p minecraft:resistance 25 255`);
            player.runCommand(`/chunkbychunk:spawnChunk ~ ~ ~`);
            player.server.runCommand(`/deop ${player.profile.name}`)
            return 1;
        })
    );
}); */

///////////////////////////////////////
/////         FARM LAND           /////
///////////////////////////////////////  
// Événement déclenché lorsqu'une farmland est piétinée
BlockEvents.farmlandTrampled(event => {
  // Annule l'événement pour empêcher la transformation en dirt
  event.cancel();

  //Affiche un message dans les logs pour le debug
  //console.log(`[Farmland Protection] Piétinement bloqué à X:${event.block.pos.x} Y:${event.block.pos.y} Z:${event.block.pos.z}`);
}); 

///////////////////////////////////////
/////   CRAFTING TABLE DISABLED   /////
/////////////////////////////////////// 
// Work for OP player
BlockEvents.rightClicked(event => {
  // Liste des blocs concernés
  const blockedCraftTables = [
      'twilightforest:uncrafting_table',
      'craftingstation:crafting_station',
      'minecraft:crafting_table'
  ];

  // Vérifier si le bloc cliqué fait partie des blocs interdits
  if (blockedCraftTables.includes(event.block.id)) {
      // Vérifier que l'entité qui interagit est un joueur et si n'est pas OP
      if (event.player && !event.player.isOp()) {
          // Envoyer un message au joueur
          event.player.tell("§cLa table de (un)craft est désactivée ! Vous ne pouvez pas l’utiliser.");
          event.player.tell("§cThe (un)crafting table is disabled! You can't use it. OP can use");
          // Annuler l'interaction avec la table
          event.cancel();
      }
  }
}); 
//
//
//
//
/////////////////////////////////////////
///////   Event Drop Spanwer     ////
///////////////////////////////////////// 

BlockEvents.broken('minecraft:spawner', event => {
  // Donne le spawner au joueur
  event.player.give('minecraft:spawner');
});


















//
//
//
//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////////////
///////   EVOLIF CRAFT PLANKS /2     ////
///////////////////////////////////////// 






//              'minecraft:wheat',
//              'minecraft:carrots',
//              'minecraft:potatoes',
//              'minecraft:beetroots',
//              'minecraft:melon_stem',
//              'minecraft:pumpkin_stem',
//              'minecraft:cocoa',
//              'minecraft:sweet_berry_bush',
//              'minecraft:nether_wart',
//              'minecraft:grass_block',
//              'minecraft:oak_sapling',
//              'minecraft:spruce_sapling',
//              'minecraft:birch_sapling',
//              'minecraft:jungle_sapling',
//              'minecraft:acacia_sapling',
//              'minecraft:dark_oak_sapling',
//              'minecraft:bamboo_sapling',
//              'minecraft:red_mushroom',
//              'minecraft:brown_mushroom',
//              'minecraft:warped_fungus',
//              'minecraft:crimson_fungus',
//              'minecraft:azalea',
//              'minecraft:flowering_azalea'
//
//
//
//
//
//










