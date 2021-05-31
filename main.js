$(function(){
    
    $("#baseSelect").on("change", function(){
        let baseValue = parseInt($(this).val());
        switch(baseValue){
            case 1:
                $("#baseImg").attr("src","base/default.png");
                break;
            case 2:
                $("#baseImg").attr("src","base/modernBlackBase.png");
                break;
            default:
                alert("none of this base name");
                break;
        };
    });

    $("#glassSelect").on("change", function(){
        let glassValue = parseInt($(this).val());
        switch(glassValue){
            case 1:
                $("#glassBackImg").attr("src","glass/default/defaults_b.png");
                $("#glassFrontImg").attr("src","glass/default/defaults_f.png");
                break;
            case 2:
                $("#glassBackImg").attr("src","glass/red/redglass_b.png");
                $("#glassFrontImg").attr("src","glass/red/redglass_f.png");
                break;
            default:
                alert("none of this glass name");
                break;
        };
    });
    $("#treeSelect").on("change", function(){
        let glassValue = parseInt($(this).val());
        switch(glassValue){
            case 1:
                $("#treeImg").attr("src","tree/default.png");
                $("#treeImg").attr("style","margin: 69.5% auto");
                break;
            case 2:
                $("#treeImg").attr("src","tree/juniper.png");
                $("#treeImg").attr("style","margin: 24% auto auto 26.5%");
                break;
            case 3:
                $("#treeImg").attr("src","tree/MuLung.png");
                $("#treeImg").attr("style","margin: 30% auto auto 22%");
                break;
            case 4:
                $("#treeImg").attr("src","tree/baobab.png");
                $("#treeImg").attr("style","margin: 43px 0px 0px 55px");
                break;
            case 5:
                $("#treeImg").attr("src","tree/apple.png");
                $("#treeImg").attr("style","margin: 81px 0px 0px 38px");
                break;
            case 6:
                $("#treeImg").attr("src","tree/willow.png");
                $("#treeImg").attr("style","margin: 46px 0px 0px 46px");
                break;
            case 7:
                $("#treeImg").attr("src","tree/jacaranda.png");
                $("#treeImg").attr("style","margin: 44px 0px 0px 36px");
                break;
            case 8:
                $("#treeImg").attr("src","tree/maple.png");
                $("#treeImg").attr("style","margin: 59px 0px 0px 55px");
                break;
            case 9:
                $("#treeImg").attr("src","tree/cherry.png");
                $("#treeImg").attr("style","margin: 70px 0px 0px 26px");
                break;
            case 10:
                $("#treeImg").attr("src","tree/moonlight.png");
                $("#treeImg").attr("style","margin: 76px 0px 0px 48px");
                break;
            case 11:
                $("#treeImg").attr("src","tree/sprit.png");
                $("#treeImg").attr("style","margin: 47px 0px 0px 22px;");
                break;

            default:
                alert("none of this tree name");
                break;
        };
    });

});
