/* Pronounce button — plays a pre-generated MP3 for a term.
   Usage: <button class="pronounce-btn" data-audio="/mini-mba-for-startups/audio/ikigai-pronunciation.mp3">
            <svg>...</svg> Pronounce
          </button>
*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pronounce-btn[data-audio]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var audio = new Audio(btn.dataset.audio);
            audio.play();
        });
    });
});
