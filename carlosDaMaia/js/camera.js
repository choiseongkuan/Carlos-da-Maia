var img_src, input_el, img_h, img_w, n_img_w, n_img_h, c_w, c_h, ratio, left, n_top, img_cover;

$("#image-submit").change(function () {
  // 上傳圖片後的操作
  input_el = this;
  if (input_el.files && input_el.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#processing-image").attr("src", e.target.result);
      img_src = e.target.result;
      $('#processing-image').on('load', () => {
        var ctx = document.getElementById("canvas").getContext("2d");
        c_w = $("canvas").width();
        c_h = $("canvas").height();
        img_w = $("#processing-image").width();
        img_h = $("#processing-image").height();
        ratio = img_w / img_h;
        // if ( 3 * img_w > 4 * img_h ){
          n_img_h = c_h;
          n_img_w = ratio * n_img_h;
          n_top = 0;
          left = -0.5 * (n_img_w - c_w);
          img_cover = document.getElementById("frame_h");
          // 繪製圖片
          ctx.drawImage($('#processing-image')[0], left, n_top, n_img_w, n_img_h);
          ctx.drawImage($('#frame_h')[0], 0, 0, 3265, 2448.75);
        // }
        $("#ready-screen").removeClass("active");
        $("#result-screen").addClass("active");
      });

    };
    reader.readAsDataURL(input_el.files[0]);
  }
});
// 點擊後顯示處理後的圖片
$("button").on("click", () => {
  $("#result-screen").append(`
      <img class="preview" alt="This's the picture you took with a frame" src="${document.getElementById("canvas").toDataURL('image/png')}">
  `);
  $("button").hide();
});