document.addEventListener('DOMContentLoaded', function() {

  var aboutMeBtn = document.getElementById('about-me-btn');
  var iconsBtn = document.getElementById('icons-btn');
  var readingListBtn = document.getElementById('reading-list-btn');
  var hobbiesBtn = document.getElementById('hobbies-btn');

  aboutMeBtn.addEventListener('click', function(e) {
    handleContentSwitch(e, 'about-me');
  });
  iconsBtn.addEventListener('click', function(e) {
    handleContentSwitch(e, 'icons')
  });
  readingListBtn.addEventListener('click', function(e) {
    handleContentSwitch(e, 'reading-list')
  });
  hobbiesBtn.addEventListener('click', function(e) {
    handleContentSwitch(e, 'hobbies')
  });
});

function handleContentSwitch(event, tab) {
  var btn = tab+'-btn';
  var btns = document.getElementsByClassName('disabled');
  btns[0].classList.remove('disabled');
  var currentBtn = document.getElementById(btn);
  currentBtn.classList.add('disabled');

  var activeDiv = document.getElementsByClassName('active');
  console.log(activeDiv);
  Array.prototype.forEach.call(activeDiv, function(ele) {
    ele.classList.add('hide');
    ele.classList.remove('active');
  });

  var contentDiv = document.getElementById(tab);
  contentDiv.classList.remove('hide');
  contentDiv.classList.add('active');

  if (tab !== 'about-me') {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 300
    });
  }
}
