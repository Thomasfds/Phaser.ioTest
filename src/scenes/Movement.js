class Movement extends Phaser.GameObjects.Image {

	constructor(scene, player, object) {
		super(scene);
		this.keys = this.scene.input.keyboard.addKeys({
			'up': Phaser.Input.Keyboard.KeyCodes.Z,
			'down': Phaser.Input.Keyboard.KeyCodes.S,
			'left': Phaser.Input.Keyboard.KeyCodes.Q,
			'right': Phaser.Input.Keyboard.KeyCodes.D,
			'speedUp': Phaser.Input.Keyboard.KeyCodes.SHIFT
		});
		this.player = player;
		this.object = object;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	// getKeys() {
	// 	return this.keys = this.scene.input.keyboard.addKeys({
	// 		'up': Phaser.Input.Keyboard.KeyCodes.Z,
	// 		'down': Phaser.Input.Keyboard.KeyCodes.S,
	// 		'left': Phaser.Input.Keyboard.KeyCodes.Q,
	// 		'right': Phaser.Input.Keyboard.KeyCodes.D,
	// 		'speedUp': Phaser.Input.Keyboard.KeyCodes.SHIFT
	// 	});
	// 	this.keys = keys;
	// 	return this.keys;
	// }


	movement() {

		if (this.keys.left.isDown) {
			this.object.setAngularVelocity(-0.02);
		}
		else if (this.keys.right.isDown) {
			this.object.setAngularVelocity(0.02);
		}

		if (this.keys.up.isDown) {
			console.log('Down')
			console.log(this.player.getActualSpeed())
			if (this.player.getActualSpeed() == 0) {
				this.player.setActualSpeed(this.player.getSpeedMin())
			}
			this.object.thrust(this.player.getActualSpeed());
		} else {
			this.player.setActualSpeed(0);
		}

		if (this.keys.speedUp.isDown) {
			let newSpeed = this.player.getActualSpeed() + this.player.getBooster();
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
	}
}