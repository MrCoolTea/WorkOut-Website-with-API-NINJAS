document.addEventListener('DOMContentLoaded', function() {

  var buttons = document.querySelectorAll('.tab-list button');
  

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {

      var muscle = this.getAttribute('data-muscle');
      

      updateImages(muscle);
    });
  });
  updateImages('biceps');
});


function updateImages(muscle) {

  var imageContainers = document.querySelectorAll('.grid-list .image-container');

  var imageSources = {
    'biceps': [
      'images/incline-hammer-curl.jpg',
      'images/barbell biceps curl.jpg',
      'images/ez-bar-spider-curl.JPG',
      'images/hammer-curl.jpg',
      'images/ez-bar-curl.JPG',
      'images/Zottman-Curl.JPG',
      'images/Biceps-curl-to-shoulder-press.JPG',
      'images/barbell biceps curl.jpg',
      'images/Concentration-curl.JPG',
      'images/Flexor-Incline-Dumbbell-Curls.JPG'
    ],
    'chest': [
      'images/dumbell-bench-press.JPG',
      'images/push-up.jpeg',
      'images/close-grip-bench-press.jpg', 
      'images/Dumbbell-Flyes.JPG', 
      'images/dumbell-bench-press.JPG',
      'images/Low-cable-cross-over.JPG',
      'images/Barbell Bench Press - Medium Grip.jpg',
      'images/Chest dip.JPG',
      'images/Dumbbell-Flyes.JPG',
      'images/Bodyweight Flyes.jpg',
    ],
    'abdominals': [
      'images/Landmine-twist.png',
      'images/elbow-plank.png',
      'images/Bottoms-Up.JPG',
      'images/Suspended ab fall-out.JPG', 
      'images/Dumbbell V-Sit Cross Jab.JPG',
      'images/Standing cable low-to-high twist.JPG',
      'images/Dumbbell spell caster.JPG',
      'images/Decline+Reverse+Crunch.jpg',
      'images/Spider crawl.JPG', 
      'images/Cocoons.JPG' 
    ],
    'quadriceps': [
      'images/Single-Leg Press.JPG', 
      'images/Clean from Blocks.JPG', 
      'images/Barbell Full Squat.JPG', 
      'images/tire-flip.png', 
      'images/Barbell back squat to box.JPG',
      'images/push-press.jpg',
      'images/power-snatch.jpg',
      'images/hang-clean.jpg',
      'images/Reverse Band Box Squat.JPG', 
      'images/jumping-rope.png' 
    ],
    'lower_back': [
      'images/Atlas Stones.JPG', 
      'images/Barbell deficit deadlift.jpg', 
      'images/back-extension.jpg', 
      'images/StrongMan-Apollons-Axle.png', 
      'images/Hyperextensions With No Hyperextension Bench.JPG',
      'images/band-deadlift.JPG',
      'images/band-deadlift.JPG',
      'images/deadlift-with-chains.webp',
      'images/Rack_Pull.webp', 
      'images/superman.jpg' 
    ]
  };
  
  imageContainers.forEach(function(container, index) {
 
    var img = container.querySelector('img.workout-images');

    img.src = imageSources[muscle][index];
  });

  
}



