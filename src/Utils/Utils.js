class Utils extends Phaser.GameObjects.Image {
    constructor(scene) {
        super(scene);
        this.config = null;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    async readConfig() {
        try {
            const resp = await fetch("src/config/config.json");
            return await resp.json();
        } catch (error) {
            console.log(error);
        }

    }

     setConfig(data) {
        this.config = data;
    }

    async getConfig() {
        console.log('r', await this.readConfig())
        return await this.readConfig();
        // return data;
    }
}