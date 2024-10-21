$(document).ready(function () {
  // Varsayılan olarak ilk sekmeyi aktif hale getir
  $(".tab-menu a").first().addClass("active text-white bg-gray-900 bg-white");

  // Sekme tıklama işlemi
  $(".tab-menu a").click(function (event) {
    event.preventDefault();

    // Aktif sekme sınıfı
    $(".tab-menu a.active").removeClass("active text-white bg-gray-900");
    $(this).addClass("active text-white bg-gray-900 bg-white");

    // Gösterilecek içerik
    const target = $(this).attr("href");
    $(".tab-content > div").addClass("hidden");
    $(target).removeClass("hidden");
  });

  // Alt menüdeki butonlar için tıklama işlemi
  $("footer a").click(function (event) {
    event.preventDefault();
    const targetPage = $(this).attr("href");

    if (targetPage) {
      window.location.href = targetPage;
    }
  });
});

$(document).ready(function () {
  // Modal açma kapama işlemleri
  $(".openModal2").click(function () {
    $(".modal2").addClass("show");
  });

  $(".closeModal2").click(function () {
    $(".modal2").removeClass("show");
  });
});

// Swiper JS kurulumu
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Ürün miktarını değiştiren fonksiyon
function degistir(btn) {
  var parent = btn.parentElement;
  var sonuc = parent.querySelector(".sonuc");
  var currentValue = Number(sonuc.value);

  if (btn.classList.contains("arttir")) {
    sonuc.value = currentValue < 1 ? 1 : currentValue + 1;
  } else if (btn.classList.contains("azalt")) {
    sonuc.value = currentValue <= 1 ? 1 : currentValue - 1;
  }
}
