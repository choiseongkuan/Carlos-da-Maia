//巴士資料
let busdata = [
    {
        "name": "N2",
        "station": ["筷子基北灣", "氹仔客運碼頭"]
    }, {
        "name": "5",
        "station": ["旅游塔", "華大新村"]
    }, {
        "name": "5X",
        "station": ["筷子基北灣", "皇朝"]
    }, {
        "name": "6A",
        "station": ["永寧廣場", "山頂醫院"]
    }, {
        "name": "7",
        "station": ["東方明珠", "城市日前地"]
    }, {
        "name": "8",
        "station": ["青州", "回力"]
    }, {
        "name": "8A",
        "station": ["青州", "亞馬喇前地"]
    }, {
        "name": "9",
        "station": ["牧場街", "媽閣"]
    }, {
        "name": "9A",
        "station": ["牧場街", "旅游塔"]
    }, {
        "name": "12",
        "station": ["永寧廣場", "外港碼頭"]
    }, {
        "name": "17",
        "station": ["白鴿巢", "文化中心"]
    }, {
        "name": "18B",
        "station": ["永定街", "媽閣"]
    }, {
        "name": "18",
        "station": ["牧場街", "媽閣"]
    }, {
        "name": "18A",
        "station": ["東方明珠", "新馬路"]
    }, {
        "name": "19",
        "station": ["永寧廣場", "新馬路"]
    }, {
        "name": "22",
        "station": ["佑漢", "氹仔"]
    }, {
        "name": "25",
        "station": ["關閘", "路環街市"]
    }, {
        "name": "25B",
        "station": ["關閘", "蓮花圓形地"]
    }, {
        "name": "28C",
        "station": ["回力", "看台街/騎士馬路"]
    }, {
        "name": "32",
        "station": ["筷子基", "旅游塔"]
    }, {
        "name": "56",
        "station": ["蝴蝶谷大馬路", "高士德"]
    }
];
let busdata_en = [
    {
        "name": "N2",
        "station": ["Bacia Norte do Patane", "Terminal Marítimo da Taipa"]
    }, {
        "name": "5",
        "station": ["Torre de Macau", "Bairro Vá Tai"]
    }, {
        "name": "5X",
        "station": ["Bacia Norte do Patane", "N.A.P.E"]
    }, {
        "name": "6A",
        "station": ["Al. Tranquilidade", "Hospital S.Januario"]
    }, {
        "name": "7",
        "station": ["ORIENTAL PEARL", "Praceta 24 de Junho"]
    }, {
        "name": "8",
        "station": ["Est. Ilha Verde", "Jai Alai"]
    }, {
        "name": "8A",
        "station": ["Est. Ilha Verde", "Praca Ferreira Amaral"]
    }, {
        "name": "9",
        "station": ["Rua dos Currais", "Barra"]
    }, {
        "name": "9A",
        "station": ["Rua dos Currais", "Torre de Macau"]
    }, {
        "name": "12",
        "station": ["Al. Tranquilidade", "Terminal Marítimo"]
    }, {
        "name": "17",
        "station": ["JARDIM CAMOES", "Centro Cultural"]
    }, {
        "name": "18B",
        "station": ["Rua DA SERNIDADE", "Barra"]
    }, {
        "name": "18",
        "station": ["Rua dos Currais", "Barra"]
    }, {
        "name": "18A",
        "station": ["PEROLA ORIENTAL", "Almeida Ribeiro"]
    }, {
        "name": "19",
        "station": ["Al. Tranquilidade", "Almeida Ribeiro"]
    }, {
        "name": "22",
        "station": ["Iao Hon", "Taipa"]
    }, {
        "name": "25",
        "station": ["Portas do Cerco", "Mercado M. de Coloane"]
    }, {
        "name": "25B",
        "station": ["Portas do Cerco", "Rotunda Flor de Lotus"]
    }, {
        "name": "28C",
        "station": ["Jai Alai", "R. da Tribuna/Est. dos Acvaleiros"]
    }, {
        "name": "32",
        "station": ["Fai Chi Kei", "Torre de Macau"]
    }, {
        "name": "56",
        "station": ["Av. Vale das Borboletas", "Horta e Costa"]
    }
];
let x = "", this_bus_num, y = "";
$(document).ready(()=>{
    for(i in busdata){
        x += `
        <li class="bus" id="bus-route-${busdata[i].name}" style="transition-delay: ${ 0.1 * i }s;">
            <span class="bus_name">${busdata[i].name}</span>
            <span class="bus-destination start">${busdata[i].station[0]}</span>
            <div class="line"></div>
            <span class="bus-destination end">${busdata[i].station[1]}</span>
        </li>
        `;
        y += `
        <li class="bus en" id="bus-route-${busdata_en[i].name}" style="transition-delay: ${ 0.1 * i }s;">
            <span class="bus_name en">${busdata_en[i].name}</span>
            <span class="bus-destination start">${busdata_en[i].station[0]}</span>
            <div class="line en"></div>
            <span class="bus-destination end">${busdata_en[i].station[1]}</span>
        </li>
        `
    };
    //顯示巴士資料
    $("#buslist").append(x);
    $("#buslist_en").append(y);
    console.log(y);
    setTimeout(()=>{
        $('.bus').css("transform", "rotateX(0)");
    }, 2);

    //顯示巴士信息
    $("body").on("click", ".bus", (e)=>{
        this_bus_num = $(e.target).attr("id").replace("bus-route-", "");
        // console.log(this_bus_num);
        $("body").addClass("locked");
        $("#bus-info").html(`
            <iframe class="content" src="https://bis.dsat.gov.mo:37812/macauweb/routeLine.html?routeName=${this_bus_num}"></iframe>
            <div class="background"></div>
        `)
        $("#bus-info_en").html(`
            <iframe class="content" src="https://bis.dsat.gov.mo:37812/macauweb/routeLine.html?routeName=${this_bus_num}&direction=0&language=en&ver=3.4.2"></iframe>
            <div class="background"></div>
        `)
    });
    //鎖定畫面
    $("body").on("click", "#bus-info .background", ()=>{
        $("body").removeClass("locked");
    });
    $("body").on("click", "#bus-info_en .background", ()=>{
        $("body").removeClass("locked");
    });

});

