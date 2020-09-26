import 'phaser';

const gameState = {
  score: 0
};

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 33 },
			enableBody: true,
		}
	}
};