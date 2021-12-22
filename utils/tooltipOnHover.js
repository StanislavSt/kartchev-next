var $target;
var offset;
var tipDist = 55;

export const tooltipOnHover = (e) => {
  if (e.target.classList && e.target.classList.contains("dot")) {
    //	Content of dot which is hovered
    $target =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.nextElementSibling;
    if (!$target.classList.contains("content-large")) {
      $target = e.target.nextElementSibling;
    }
    //	Only work with hovered target
    //	Add visible class hovered elem to distinguish
    if ($target) {
      if (!$target.classList.contains("visible")) {
        clearTooltips();
        $target.classList.add("visible");
      } else {
        //	Get viewport offset of tooltip element
        offset = $target.parentElement.getBoundingClientRect();
        //	Tooltip distance from mouse(px)
        //	Calc and set new tooltip location
        $target.style.top = e.clientY - offset.top + tipDist + "px";
        $target.style.left = e.clientX - offset.left + tipDist + "px";
      }
    }
  } else {
    //	Remove visible class
    clearTooltips();
  }
};

export const onMouseEnter = (e) => {
  if (e.target.classList && e.target.classList.contains("dot")) {
    $target =
      e.target.parentElement.parentElement.parentElement.parentElement
        .nextElementSibling;
    if ($target) {
      if (!$target.classList.contains("visible")) {
        clearTooltips();
        $target.classList.add("visible");
      } else {
        //	Get viewport offset of tooltip element
        offset = $target.parentElement.getBoundingClientRect();
        //	Tooltip distance from mouse(px)
        //	Calc and set new tooltip location
        $target.style.top = e.clientY - offset.top + tipDist + "px";
        $target.style.left = e.clientX - offset.left + tipDist + "px";
      }
    }
  } else {
    //	Remove visible class
    clearTooltips();
  }
};

const clearTooltips = () => {
  var content = document.getElementsByClassName("content-large");
  for (var i = 0; i < content.length; i++) {
    content[i].classList.remove("visible");
  }
};
