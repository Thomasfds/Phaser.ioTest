class Interface extends Phaser.GameObjects.Image {
    constructor(scene) {
        super(scene);
        this.playerBox = document.querySelector('#playerBox');
        this.menu = document.querySelector('#escMenu');
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    initInterface() {
        // Display PlayerBox
        this.playerBox.classList.remove('d-none');

        // When ESC pressed displayed Esc Menu
        this.scene.input.keyboard.on('keydown-' + 'ESC', function (event) {
            this.menu.classList.toggle('d-none');
        }, this);

    }
}