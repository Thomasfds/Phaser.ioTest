
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "ship105", frame);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	speedMin = 50;
	/** @type {number} */
	SpeedInit = 50;
	/** @type {number} */
	Booster = 30;
	/** @type {number} */
	SpeedMax = 100;
	/** @type {number} */
	ActualSpeed = 0;

	/* START-USER-CODE */
	ROTATION_SPEED = 1 * Math.PI; // 0.5 turn per sec, 2 sec per turn
	ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(this.ROTATION_SPEED);
	TOLERANCE = 0.02 * this.ROTATION_SPEED;

	velocityFromRotation = Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;

	// Write your code here.
	initKeys() {
		const keys = this.scene.input.keyboard.addKeys({
			'up': Phaser.Input.Keyboard.KeyCodes.Z,
			'down': Phaser.Input.Keyboard.KeyCodes.S,
			'left': Phaser.Input.Keyboard.KeyCodes.Q,
			'right': Phaser.Input.Keyboard.KeyCodes.D,
			'speedUp': Phaser.Input.Keyboard.KeyCodes.SHIFT
		});
		this.keys = keys;
	}

	movement() {
		// if (this.keys.up.isDown) {
		// 	this.y -= this.speedMin;
		// 	this.setTexture('ship106')
		// 	this.setAngle(0)
		// }

		// if (this.keys.down.isDown) {
		// 	this.y += this.speedMin;
		// 	this.setTexture('ship108')
		// 	this.setAngle(0)

		// }

		// if (this.keys.down.isDown && this.keys.right.isDown) {
		// 	this.y += this.speedMin;
		// 	this.setTexture('ship108')
		// 	this.setAngle(390)
		// }

		// if (this.keys.down.isDown && this.keys.right.isDown) {
		// 	this.y += this.speedMin;
		// 	this.setTexture('ship108')

		// 	let max = 50;
		// 	console.log('angle', this.angle)

		// 	if (this.angle != max) {
		// 		this.angle += 1
		// 	}
		// 	// this.animateAngleRight()
		// }

		// this.scene.input.on('pointerdown', (pointer) => {
		// 	console.log('ici')
		// 	var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
		// 	this.setAngle(angle);
		// })

		// if (this.keys.left.isDown) {
		// 	// this.x -= this.speedMin;
		// 	// this.setTexture('ship107')
		// 	// this.setAngle(0)
		// 	let max = 50;
		// 	console.log('angle', this.angle)

		// 	if (this.angle != max) {
		// 		this.angle += 1
		// 	}
		// }

		// if (this.keys.speedUp.isDown) {
		// 	console.log('ici')
		// 	this.speedMin = +3
		// }

		// if (this.keys.speedUp.isUp) {
		// 	this.speedMin = 1
		// }

		// if (this.keys.right.isDown) {
		// 	this.x += this.speedMin;
		// 	this.setTexture('ship110')
		// 	this.setAngle(0)
		// }

		// Permet de faire bouger le vaisseau ainsi que son angle quand on reste appuyé sur clique gauche.
		var pointer = this.scene.input.activePointer;

		if (pointer.isDown) {
			var angle = Math.round(Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(Math.round(this.x), Math.round(this.y), Math.round(pointer.x), Math.round(pointer.y)));
			this.setAngle(angle);

			console.log('This', Math.round(this.y))
			console.log('Pointer', Math.round(pointer.y))

			var p = this.scene.input.activePointer;

			if (this.ActualSpeed === 0) {
				this.ActualSpeed = this.speedMin;
			}
			this.scene.physics.moveToObject(this, p, this.ActualSpeed);
			this.scene.physics.resume()
		} else {
			this.scene.physics.pause()
			this.ActualSpeed = 0;
			// this.scene.physics.moveToObject(this, p, this.ActualSpeed);

		}

		this.on('gameobjectover', function (event) {
			this.scene.physics.pause();
			console.log('hover')
		});


		// console.log(this.input.cursor.)


		if (this.keys.speedUp.isDown) {
			if (this.ActualSpeed < this.SpeedMax) {
				console.log('New', this.ActualSpeed + this.Booster)
				console.log('Max', this.SpeedMax)
				this.ActualSpeed = this.ActualSpeed + this.Booster
				console.log(this.ActualSpeed)
			}
		}

		// Fin bouger vaisseau

		// this

		// this.scene.input.keyboard.on('keydown-SHIFT', () => {
		// 	console.log(this.speedMin)

		// 	if (this.ActualSpeed < this.SpeedMax) {
		// 		console.log('New', this.ActualSpeed + this.Booster)
		// 		console.log('Max', this.SpeedMax)
		// 		this.ActualSpeed = this.ActualSpeed + this.Booster
		// 		console.log(this.ActualSpeed)
		// 	}
		// });

		this.scene.input.keyboard.on('keyup-SHIFT', () => {
			this.ActualSpeed = this.speedMin;
		});
	}

	animate() {
		this.x += this.speedMin;
	}

	updateSpeedUI() {
		return `Actual Speed : ${this.ActualSpeed}`;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
