let shop, container_id;
//獲取商鋪資料
$.ajax({
    url: "https://kimochii.club/data/shops.json",
    error: (data) =>{
        console.log("error!");
        alert("資料獲取失敗");
    },
    success: (data)=>{
        console.log("success!");
        for(i in data){
            shop = data[i]
            $("main").append(`
            <div class="container" id="container_${i}">
                <div class="shop front">
                    <img class="shop_p" src="${shop.photo_url}" alt="${shop.name}">
                    <h3 class="shop_name">${shop.name}</h3>
                    <img src="./svg/more.svg" alt="more" class="more"  id="${i}">
                </div>
                <div class="shop back">
                <iframe width="300" height="300" class="shop_p" frameborder="0" style="border:0" 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwUVrH16tZFkx247yZKV4eTLF1vuAx_qQ&q=${shop.latitude},${shop.longitude}&zoom=19" allowfullscreen>
                </iframe>
                    <h3 class="shop_name">${shop.address}</h3>
                    <img src="./svg/more.svg" alt="more" class="more"  id="${i}">
                </div>
            </div>
            `);
        };
    },
});

// 顯示地圖和地址
$(document).ready(()=>{
    $("main").on("click", ".more", function(){
        container_id = $(this).attr("id");
        // 檢查商鋪選項卡的狀態
        if ( !$("#container_" + container_id).hasClass("flipped") ){
            $(".container").removeClass("flipped");
            $("#container_" + container_id).addClass("flipped");
        } else {
            $(".container").removeClass("flipped");
        }
        
    });
});