Triangulum.Load = function (game) {
  this.game = game
  Triangulum.WIDTH = 800;
  Triangulum.HEIGHT = 400;
};

Triangulum.Load.prototype = {

  preload: function () {
    // set background color and preload image
    this.game.stage.backgroundColor = '#000000';
    this._preloadBar = this.game.add.sprite((Triangulum.WIDTH - 311) / 2, (Triangulum.HEIGHT - 27) / 2, 'preloaderBar');

    this.game.load.setPreloadSprite(this._preloadBar);

    // load images
    this.game.load.image('TNSlogo', 'assets/TNS_logo.png');
    this.game.load.image('background', 'assets/bg.png');
    this.game.load.image('basic_green_bullet', 'assets/basic_green_shoot.png');

    // load sprite sheets
    this.game.load.spritesheet('ship', 'assets/ship.png', 32, 32, 13);
    this.game.load.spritesheet('basic_asteroid', 'assets/basic_asteroid.png', 32, 32, 4);
    this.game.load.spritesheet('enemy1', 'assets/enemy1.png', 32, 32, 4);
    this.game.load.spritesheet('mine', 'assets/mine.png', 32, 32, 4);
    this.game.load.spritesheet('flagship', 'assets/flagship.png', 128, 256, 1);

    this.game.load.spritesheet('turretHub', 'assets/turretHub.png', 32, 32, 1);
    this.game.load.spritesheet('turretPipe', 'assets/turretPipe.png', 32, 32, 1);

    // load audio
    this.game.load.audio('basic_weapon', 'assets/audio/basic_gun.wav');
    this.game.load.audio('explosion1', 'assets/audio/explosion1.wav');
    this.game.load.audio('hit1', 'assets/audio/hit1.wav');
  },

  create: function () {
    // start the MainMenu state
    this.game.state.start('Splash');
  }
};
