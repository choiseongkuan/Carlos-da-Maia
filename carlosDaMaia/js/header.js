$(document).ready(()=>{
  $("#menu-icon").on("click", ()=>{
    $("#menu-icon div").toggleClass((n)=>{
      return 'close_' + n;
    });
    $("nav").toggleClass("nav_slide");
    $(".header").toggleClass("header_slide");
    $("body").toggleClass("cancel_scroll");
    });
  });


/*
  header部分代碼

      <div class="header">
        <div class="menu">
            <div id="menu-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <nav>
            <ul>
                <li class="li"><a>主頁</a></li>
                <li><a>周邊商戶</a></li>
                <li><a>巴士資訊</a></li>
                <li><a>綫上地圖</a></li>
                <li><a>照相</a></li>
            </ul>
        </nav>
    </div>


*/