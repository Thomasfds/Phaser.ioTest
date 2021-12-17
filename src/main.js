
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.CANVAS,
		backgroundColor: "#242424",
		physics: {
			default: 'matter',
			arcade: {
				// gravity: { y: 0, x:0 },
				debug: true
			},
			matter: {
				debug:true,
				gravity: {
					x: 0,
					y: 0
				}
			}
		},
		scale: {
			mode: Phaser.Scale.ZOOM,
			autoCenter: Phaser.Scale.FIT
		},
		dom: {
			createContainer: true
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.htmlTexture('key', './assets/gui/gui.html', 250, 20);

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}