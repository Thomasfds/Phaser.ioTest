
// You can write more code here

/* START OF COMPILED CODE */

class PlayerBox {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PlayerBox"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PlayerBox} */
	static getComponent(gameObject) {
		return gameObject["__PlayerBox"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	PlayerActualSpeed = 0;

	/* START-USER-CODE */

	// Write your code here.

	initGUI(){
		const button = document.createElement('button');
		let position = {
			'x':300,
			'y':200
		};

		button.ClassName ="btn btn-primary";
		button.innerText ="Click Here";

		this.scene.add.dom(position.x, position.y, button);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
