
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// guapen
		const guapen = this.add.image(400, 219, "guapen");
		guapen.scaleX = 0.5915891440784282;
		guapen.scaleY = 0.5915891440784282;

		// progress
		const progress = this.add.text(400, 349, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// text_1
		const text_1 = this.add.text(433, 39, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Use your mouse for moving the ship (Right click)";
		text_1.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		this.text_1 = text_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	text_1;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
