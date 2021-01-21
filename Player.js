class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val()})
    }
    update(name){
        var playerIndex = "player"+ playerCount
        database.ref(playerIndex).update({
           name:name
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
}