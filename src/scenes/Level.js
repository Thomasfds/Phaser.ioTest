
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

		this.background_1_1 = background_1_1;
		this.background_1 = background_1;
		this.background_1_2 = background_1_2;
		this.background_1_2_1 = background_1_2_1;
		this.text_1 = text_1;

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

	/* START-USER-CODE */

	// Write more your code here

	preload() {
		// this.load.spritesheet('solar_1_1', 'assets/spritesheet.png', { frameWidth: 500, frameHeight: 500 });

	}

	create() {
		// this.physics.startSystem(Phaser.Physics.ARCADE);
		// this.physics.systems.start;
		// this.
		// this.physics.world.enable(this.ship, Phaser.Physics.ARCADE)

		this.initGUI();
		this.editorCreate();
		this.initPlayers();
		this.matter.world.setBounds(0, 0, 6000, 6000);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.planets = this.add.group();
		// this.add.image(0, 0, 'platAn', '__BASE').setOrigin(0, 0);

		this.anims.create({
			key: 'turnPlat',
			frames: this.anims.generateFrameNumbers('platAn', { start: 0, end: 9 }),
			frameRate: 3,
			repeat: -1,
			repeatDelay: -1
		});

		this.anims.create({
			key: 'turnSolar',
			frames: this.anims.generateFrameNumbers('solar_1_1', { start: 0, end: 8 }),
			frameRate: 5.7,
			repeat: -1,
			repeatDelay: -1
		});

		this.plat = this.add.sprite(150, 200, 'platAn');

		this.plat.setScale(2)
		this.plat.play('turnPlat')

		this.solar = this.add.sprite(150, 400, 'solar_1_1');
		this.solar.setScale(2)
		this.solar.play('turnSolar')




		for (var i = 0; i < 15; i++) {
			//  This creates a new Phaser.Sprite instance within the group
			//  It will be randomly placed within the world and use the 'baddie' image to display
			this.planets.create(Phaser.Math.RND.between(350, 3000), Phaser.Math.RND.between(350, 3000), 'planet_1');
		}

		// this.physics.world.enable(this.planet_1, Phaser.Physics.ARCADE);
		// this.planet_1.body.collideWorldBounds = true;
		// this.planet_1.body.collideWorldBounds = true;



		// const keys = this.input.keyboard.addKeys({
		// 	'up': Phaser.Input.Keyboard.KeyCodes.Z,
		// 	'down': Phaser.Input.Keyboard.KeyCodes.S,
		// 	'left': Phaser.Input.Keyboard.KeyCodes.Q,
		// 	'right': Phaser.Input.Keyboard.KeyCodes.D,
		// 	'speedUp': Phaser.Input.Keyboard.KeyCodes.SHIFT
		// });
		// this.keys = keys;
		// this.movement.initMovement();
		// this.planet_1.on('pointerdown', (pointer) => {
		// 	console.log('ici', pointer)
		// 	document.querySelector('playerBox').style = `left:${this.planet_1.x}`;
		// })


	}

	update() {
		this.updateSpeedUI(this.text_1);
		this.movement.movement();
	}


	initPlayers() {
		const playerInfo = new PlayersClass();
		this.player = playerInfo;
		// console.log('Oui',playerInfo.getTest());
		this.ship = this.matter.add.image(300, 200, 'ship105');
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
		const interfaceStart = new Interface(this);
		interfaceStart.initInterface();
	}

	updateSpeedUI(object) {
		object.text = this.player.getActualSpeed();
		this.actualSpeedText.innerHTML = `Speed : ${this.player.getActualSpeed()}`;
		// console.log('Update', this.ship105.updateSpeedUI())
	}

	randomIntFromInterval(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here