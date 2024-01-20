// Move Current Time Indicator Forward by 6 Frames

// Check if a composition is active and the current time indicator can be moved
if (app.project && app.project.activeItem && app.project.activeItem instanceof CompItem && app.project.activeItem.layer(1)) {
  var comp = app.project.activeItem;
  var frameDuration = 1 / comp.frameRate;
  var currentTime = comp.time;
  var newTime = currentTime + (6 * frameDuration);
  
  // Check if newTime is less than 0, if so, set it to 0
  if (newTime < 0) {
    newTime = 0;
  }

  comp.time = newTime;
} else {
  alert("Please open a composition with at least one layer.");
}