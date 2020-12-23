class MyGameMove {
    constructor(scene, gamestate, piece, tile) {
        this.scene = scene;
        this.gamestate = new MyGameBoard(scene); //gameboard state before the move
        Object.assign(this.gamestate, gamestate);
        this.piece = piece;
        this.tile = tile;

        var keyframes = this.getKeyframes();

        this.piece.animation = new KeyframeAnimation(scene, 0, keyframes);
    }

    getKeyframes() {
        var keyframes = [];

        if(this.piece.colour == "purple") 
            keyframes[0] = new Keyframe(0.1, ["t", 0, 3.0, 0], [0, 0, 0], ["s", 1.0, 1.0, 1.0]);
        else if(this.piece.colour == "orange") 
            keyframes[0] = new Keyframe(0.1, ["t", 4.5, 3.0, 0], [0, 0, 0], ["s", 1.0, 1.0, 1.0]);
        else 
            keyframes[0] = new Keyframe(0.1, ["t", 9.0, 3.0, 0], [0, 0, 0], ["s", 1.0, 1.0, 1.0]);


        var tilePosition = ["t"];
        tilePosition.push(...this.tile.position);

        keyframes[1] = new Keyframe(1, tilePosition, [0, 0, 0], ["s", 1.0, 1.0, 1.0]);

        keyframes[0].setNext(keyframes[1]);

        return keyframes;
    }

    animate(t) {
        this.piece.animation.update(t);
    }
}