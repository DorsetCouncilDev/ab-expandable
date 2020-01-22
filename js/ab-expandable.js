const initialiseExpandables =  function expandElement () {

    const expandables = document.getElementsByClassName('ab-exapndable-button');
  for (var i = 0; i < expandables.length; i++) {
    // PROGRESSIVE ENHANCEMENT
    // Hiding with js and not css, ensures users without js see the content.
    expandables[i].nextElementSibling.style.display = 'none';

    expandables[i].addEventListener('click', function (evt) {
      var btn = evt.target;
      var content = btn.nextElementSibling;
      if (btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', false);
        content.style.display = 'none';
      } else {
        btn.setAttribute('aria-expanded', true);
        content.style.display = 'block';
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {
    initialiseExpandables();
  });

module.exports = initialiseExpandables;