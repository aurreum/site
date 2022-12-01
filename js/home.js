let settings = {
  //Blob main settings
  BLOB_SIZE: 210,
  BLOB_DISTANCE: 1000,
  DETALISATION: 60,
  PERSPECTIVE_DISTORTION: 1,
  ROTATION_SPEED: 5,

  //Dot settins
  DOT_SIZE: 3,
  DOT_COLOR: "#41faa4",

  //Mouse settings
  MOUSE_DISTANCE_MIN: 20,
  MOUSE_DISTANCE_MAX: 400,
  MOUSE_SENSITIVITY: 1,
  INERTIAL_TIME: 2,

  //Shape settins
  //Shape main settings
  INITIAL_SHAPE: {
    wave1: { amplitude: 30.769, frequency: 4.231, phase: 0 },
    wave2: { amplitude: 9, frequency: 10, phase: 0 },
    wave3: { amplitude: 70, frequency: 1.868, phase: 0 }
  },
  USE_MORPHING: false,
  USE_WAVE_MOTION: true,
  USE_WAVE_SWING: false,

  //Wave motion settings
  WAVE_1_MOTION_SPEED: 0,
  WAVE_2_MOTION_SPEED: 8,
  WAVE_3_MOTION_SPEED: 4
}

//create BLOB instance, indicating the DIV ID and settings:
let blob = new BlobAnimation("canvas-wrapper", settings)
