
// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(-297, 297, "background");

		// dino
		const dino = this.add.image(400, 218, "dino");

		// text_1
		const text_1 = this.add.text(590, 34, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Phaser 3 + Phaser Editor 2D";
		text_1.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// ship105
		const ship105 = new Player(this, 60, 57);
		this.add.existing(ship105);

		// text_1_1
		const text_1_1 = this.add.text(590, 76, "", {});
		text_1_1.setOrigin(0.5, 0.5);
		text_1_1.text = "Phaser 3 + Phaser Editor 2D";
		text_1_1.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// dino (components)
		new PushOnClick(dino);

		this.background = background;
		this.text_1 = text_1;
		this.ship105 = ship105;
		this.text_1_1 = text_1_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Player} */
	ship105;
	/** @type {Phaser.GameObjects.Text} */
	text_1_1;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		console.log(this.physics.world.enable(this.ship105, Phaser.Physics.ARCADE))

	}

	update() {
		this.ship105.initKeys();
		this.ship105.movement();
		this.updateSpeedUI(this.text_1);

		// this.ship105.rotation = this.physics.arcade.angleToPointer(this.ship105);
		// 		    var pointer = this.input.activePointer;
		// this.ship105.

		// if (this.input.mousePointer.isDown) {
		// 	console.log()
		// 	var p = this.input.activePointer;
		// 	console.log()
		// 	// this.ship105.ActualSpeed = this.ship105.speedMin;
		// 	// this.text_1.text = `Vitesse actuel ${this.ship105.ActualSpeed}`
		// 	this.physics.moveToObject(this.ship105, p, this.ship105.ActualSpeed);
		// 	this.updateSpeedUI(this.text_1)
		// 	this.physics.resume()

		// } else {
		// 	this.physics.pause()
		// 	this.updateSpeedUI(this.text_1)

		// }










		// console.log('ici');
		// this.baseMovement(this.ship);

		// this.input.keyboard.on('keydown-E', () => {
		// 	this.text_1.text = "E";
		// });

		// this.ship105.x += this.ship105.VitesseMove;
	}


	updateSpeedUI(object) {
		object.text = this.ship105.updateSpeedUI();
		console.log('Update', this.ship105.updateSpeedUI())
	}


	// baseMovement(object) {

	// 	if (this.keysTest.up.isDown) {
	// 		object.y -= 1.5;
	// 	}

	// 	if (this.keysTest.down.isDown) {
	// 		object.y += 1.5;
	// 	}

	// 	if (this.keysTest.left.isDown) {
	// 		object.x -= 1.5;
	// 	}

	// 	if (this.keysTest.right.isDown) {
	// 		object.x += 1.5;
	// 	}
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here