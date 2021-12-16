
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

		// background_1_1
		const background_1_1 = this.add.image(1500, 1500, "background_1");

		// background_1
		const background_1 = this.add.image(4500, 1500, "background_1");

		// background_1_2
		const background_1_2 = this.add.image(4500, 4500, "background_1");

		// background_1_2_1
		const background_1_2_1 = this.add.image(1500, 4500, "background_1");

		// text_1
		const text_1 = this.add.text(996, 21, "", {});
		text_1.text = "Actual Speed : 0";
		text_1.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// planet_1
		const planet_1 = this.add.image(149, 408, "planet_1");
		planet_1.scaleX = 1.5;
		planet_1.scaleY = 1.5;
		planet_1.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1
		const planet_1_1 = this.add.image(5541, 434, "planet_1");
		planet_1_1.scaleX = 1.5;
		planet_1_1.scaleY = 1.5;
		planet_1_1.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_1
		const planet_1_1_1 = this.add.image(706, 2088, "planet_1");
		planet_1_1_1.scaleX = 1.5;
		planet_1_1_1.scaleY = 1.5;
		planet_1_1_1.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_2
		const planet_1_1_2 = this.add.image(4257.929018236395, 2469.665202291562, "planet_1");
		planet_1_1_2.scaleX = 1.5;
		planet_1_1_2.scaleY = 1.5;
		planet_1_1_2.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_3
		const planet_1_1_3 = this.add.image(2656.8441158232195, 1313.9151733972824, "planet_1");
		planet_1_1_3.scaleX = 1.5;
		planet_1_1_3.scaleY = 1.5;
		planet_1_1_3.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_4
		const planet_1_1_4 = this.add.image(1012.2360897639236, 3436.8734570659617, "planet_1");
		planet_1_1_4.scaleX = 1.5;
		planet_1_1_4.scaleY = 1.5;
		planet_1_1_4.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_5
		const planet_1_1_5 = this.add.image(4374.205398214034, 4763.364748835393, "planet_1");
		planet_1_1_5.scaleX = 1.5;
		planet_1_1_5.scaleY = 1.5;
		planet_1_1_5.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_6
		const planet_1_1_6 = this.add.image(1298.1178336797493, 5300.8224273971455, "planet_1");
		planet_1_1_6.scaleX = 1.5;
		planet_1_1_6.scaleY = 1.5;
		planet_1_1_6.setOrigin(0.48033742283128683, 0.45575920137039533);

		// planet_1_1_7
		const planet_1_1_7 = this.add.image(2716.0912835022446, 3322.5207594996314, "planet_1");
		planet_1_1_7.scaleX = 1.5;
		planet_1_1_7.scaleY = 1.5;
		planet_1_1_7.setOrigin(0.48033742283128683, 0.45575920137039533);

		this.background_1_1 = background_1_1;
		this.background_1 = background_1;
		this.background_1_2 = background_1_2;
		this.background_1_2_1 = background_1_2_1;
		this.text_1 = text_1;
		this.planet_1 = planet_1;
		this.planet_1_1 = planet_1_1;
		this.planet_1_1_1 = planet_1_1_1;
		this.planet_1_1_2 = planet_1_1_2;
		this.planet_1_1_3 = planet_1_1_3;
		this.planet_1_1_4 = planet_1_1_4;
		this.planet_1_1_5 = planet_1_1_5;
		this.planet_1_1_6 = planet_1_1_6;
		this.planet_1_1_7 = planet_1_1_7;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background_1_1;
	/** @type {Phaser.GameObjects.Image} */
	background_1;
	/** @type {Phaser.GameObjects.Image} */
	background_1_2;
	/** @type {Phaser.GameObjects.Image} */
	background_1_2_1;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Image} */
	planet_1;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_1;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_2;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_3;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_4;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_5;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_6;
	/** @type {Phaser.GameObjects.Image} */
	planet_1_1_7;

	/* START-USER-CODE */

	// Write more your code here


	create() {
		this.editorCreate();
		this.initPlayers();
		this.matter.world.setBounds(0, 0, 6000, 6000);
		this.cursors = this.input.keyboard.createCursorKeys();

		const keys = this.input.keyboard.addKeys({
			'up': Phaser.Input.Keyboard.KeyCodes.Z,
			'down': Phaser.Input.Keyboard.KeyCodes.S,
			'left': Phaser.Input.Keyboard.KeyCodes.Q,
			'right': Phaser.Input.Keyboard.KeyCodes.D,
			'speedUp': Phaser.Input.Keyboard.KeyCodes.SHIFT
		});
		this.keys = keys;

	}

	update() {
		this.updateSpeedUI(this.text_1);
		this.movement.movement();
	}


	initPlayers() {
		const playerInfo = new PlayersClass();
		this.player = playerInfo;
		// console.log('Oui',playerInfo.getTest());
		this.ship = this.matter.add.image(200, 200, 'ship105');
		this.ship.setFrictionAir(0.1);
		this.ship.setMass(playerInfo.getMassDefault());
		this.ship.setFixedRotation();
		this.myCam = this.cameras.main;
		this.myCam.setBounds(0, 0, this.sys.game.config.width * 10, this.sys.game.config.height * 10);
		this.myCam.startFollow(this.ship);

		// Interface
		const actualSpeedText = document.querySelector("#actualSpeed");
		this.actualSpeedText = actualSpeedText;
		const movement = new Movement(this, this.player, this.ship);
		this.movement = movement;

		console.log();

	}

	initGUI() {
		console.log('gui')
		const button = document.createElement('div');
		let position = {
			'x': 0,
			'y': 0
		};

		button.ClassName = "btn btn-primary";
		button.innerText = "Click Here";

		this.add.dom(100, 100, button);

	}

	initMovement(){
		
	}

	updateSpeedUI(object) {
		object.text = this.player.getActualSpeed();
		this.actualSpeedText.innerHTML = `Speed : ${this.player.getActualSpeed()}`;
		// console.log('Update', this.ship105.updateSpeedUI())
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here