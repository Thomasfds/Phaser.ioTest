
// You can write more code here

/* START OF COMPILED CODE */

class Component {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Component"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Component} */
	static getComponent(gameObject) {
		return gameObject["__Component"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {{key:string,frame?:string|number}} */
	BaseSprite = { "key": "ship105" };

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
