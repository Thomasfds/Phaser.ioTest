class Movement extends Phaser.GameObjects.Image {

	constructor(scene, player, object) {
		super(scene);
		this.keys = null;
		this.keys = this.scene.input.keyboard.addKeys({
			'up': Phaser.Input.Keyboard.KeyCodes.Z,
			'down': Phaser.Input.Keyboard.KeyCodes.S,
			'left': Phaser.Input.Keyboard.KeyCodes.Q,
			'right': Phaser.Input.Keyboard.KeyCodes.D,
			'speedUp': Phaser.Input.Keyboard.KeyCodes.SHIFT,
			'menu': Phaser.Input.Keyboard.KeyCodes.ESC,
		});
		this.player = player;
		this.object = object;
		this.target = 0;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.input.on('pointermove', function (pointer) {
			this.target = Phaser.Math.Angle.BetweenPoints(this.object, pointer);
		}, this);
		/* END-USER-CTR-CODE */
	}

	movement() {
		var pointer = this.scene.input.activePointer;

	

		if (this.keys.left.isDown) {
			this.object.setAngularVelocity(-0.02);
		}
		else if (this.keys.right.isDown) {
			this.object.setAngularVelocity(0.02);
		}

		if (this.keys.up.isDown) {
			if (this.player.getActualSpeed() == 0) {
				this.player.setActualSpeed(this.player.getSpeedMin())
			}
			this.object.thrust(this.player.getActualSpeed());
		} else {
			this.player.setActualSpeed(0);
		}

		if (this.keys.speedUp.isDown) {
			console.log(this.player.getActualSpeed())

			let newSpeed = this.player.getActualSpeed() + this.player.getBooster();
			console.log(this.player.getBooster())
			if (newSpeed <= this.player.getSpeedMax()) {
				this.player.setActualSpeed(newSpeed);
				this.object.thrust(newSpeed)
			}
		} else {
			if (this.keys.up.isDown && !this.keys.speedUp.isDown) {
				let newSpeed = this.player.getActualSpeed() - this.player.getBooster();
				if (this.player.getSpeedMin() <= newSpeed) {
					console.log('new', newSpeed)
					this.player.setActualSpeed(newSpeed);
					this.object.thrust(newSpeed)
				}
			}
		}

		if (this.keys.speedUp.isDown && pointer.isDown) {
			let newSpeed = this.player.getActualSpeed() + this.player.getBooster();
			console.log('Speed', newSpeed)
			if (newSpeed <= this.player.getSpeedMax()) {
				this.player.setActualSpeed(newSpeed);
				this.object.thrust(newSpeed)
			}
		} else {
			if (this.keys.up.isDown && !this.keys.speedUp.isDown) {
				let newSpeed = this.player.getActualSpeed() - this.player.getBooster();
				if (this.player.getSpeedMin() <= newSpeed) {
					console.log('new', newSpeed)
					this.player.setActualSpeed(newSpeed);
					this.object.thrust(newSpeed)
				}
			}
		}


		// Début souris
		// if (pointer.isDown) {
		// 	//   this.pointerMove(this.scene.input.activePointer);
		// 	var ROTATION_SPEED = 1 * Math.PI; // radians per second


		// 	this.object.rotation = Phaser.Math.Angle.RotateTo(
		// 		this.object.rotation,
		// 		this.target,
		// 		0.2 * 2
		// 	);


		// 	if (this.player.getActualSpeed() === 0) {
		// 		this.player.setActualSpeed(this.player.getSpeedMin());
		// 		console.log(this.player.getActualSpeed())
		// 		// this.player.setActualSpeed(newSpeed);
		// 		this.object.thrust((this.player.getActualSpeed()));
		// 	}
		// }
		// Fin SOuris
	}
}