//==========================================================================//
//                   NAFANEEL.UK 2023 - POPUP                               //
//==========================================================================//

class popup {
  constructor(boxID, overlayID) {
    this.box = boxID;
    this.overlay = overlayID;

    var pageHeight = document.documentElement.scrollHeight;
    document.getElementById(this.overlay).style.height = `${pageHeight}px`;
  }
  open(pgTitle) {
    document.getElementById('viewBoxTitle').innerHTML = pgTitle;

    var overlay = document.getElementById(`${this.overlay}`);
    var viewbox = document.getElementById(`${this.box}`);


    overlay.classList.remove('viewBoxOverlay-close');
    viewbox.classList.remove('viewBox-close');


    overlay.classList.add('viewBoxOverlay');
    viewbox.classList.add('viewBox');

    overlay.style.display = "initial";
    viewbox.style.display = "initial";
  }
  close() {
    var overlay = document.getElementById(`${this.overlay}`);
    var viewbox = document.getElementById(`${this.box}`);


    overlay.classList.remove('viewBoxOverlay');
    viewbox.classList.remove('viewBox');

    overlay.classList.add('viewBoxOverlay-close');
    viewbox.classList.add('viewBox-close');

    setTimeout(function() {
      overlay.style.display = "none";
      viewbox.style.display = "none";

    }, 500);
  }
}