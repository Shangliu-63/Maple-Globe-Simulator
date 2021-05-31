$(function(){
    $("#characterAppear").on("click",function(){
        $("#characterImg").attr("src","character/character.png");
    });
    $("#characterHide").on("click",function(){
        $("#characterImg").attr("src","");
    });

    $("#baseSelect").on("change", function(){
        let baseValue = parseInt($(this).val());
        switch(baseValue){
            case 0:
                $("#baseImg").attr("src","");
                break;
            case 1:
                $("#baseImg").attr("src","base/default.png");
                $("#baseImg").attr("style","margin: 77% auto");
                break;
            case 2:
                $("#baseImg").attr("src","base/modernBlackBase.png");
                $("#baseImg").attr("style","margin: 77% auto");
                break;
            case 3:
                $("#baseImg").attr("src","base/modernWhiteBase.png");
                $("#baseImg").attr("style","margin: 77% auto");
                break;
            case 4:
                $("#baseImg").attr("src","base/simplePinkBase.png");
                $("#baseImg").attr("style","margin: 77% auto");
                break;
            case 5:
                $("#baseImg").attr("src","base/simpleYellowBase.png");
                $("#baseImg").attr("style","margin: 77% auto");
                break;
            case 6:
                $("#baseImg").attr("src","base/simpleSkyblueBase.png");
                $("#baseImg").attr("style","margin: 77% auto");
                break;
            case 7:
                $("#baseImg").attr("src","base/FluffyCloudBase.png");
                $("#baseImg").attr("style","margin: 74% auto");
                break;
            case 8:
                $("#baseImg").attr("src","base/sweetMarshmallow.png");
                $("#baseImg").attr("style","margin: 73% auto");
                break;
            case 9:
                $("#baseImg").attr("src","base/FancyJewelBase.png");
                $("#baseImg").attr("style","margin: 75.5% auto");
                break;
            case 10:
                $("#baseImg").attr("src","base/classicElegantBase.png");
                $("#baseImg").attr("style","margin: 1% 18.5%");
                break;
            case 11:
                $("#baseImg").attr("src","base/musicboxBase.png");
                $("#baseImg").attr("style","margin: 72% 14.5%");
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
                $("#glassFrontImg").attr("style","margin: auto");
                break;
            case 2:
                $("#glassBackImg").attr("src","glass/red/redglass_b.png");
                $("#glassFrontImg").attr("src","glass/red/redglass_f.png");
                $("#glassFrontImg").attr("style","margin: auto");
                break;
            case 3:
                $("#glassBackImg").attr("src","glass/yellow/yellowglass_b.png");
                $("#glassFrontImg").attr("src","glass/yellow/yellowglass_f.png");
                $("#glassFrontImg").attr("style","margin: auto");
                break;
            case 4:
                $("#glassBackImg").attr("src","glass/skyblue/skyblue_b.png");
                $("#glassFrontImg").attr("src","glass/skyblue/skyblue_f.png");
                $("#glassFrontImg").attr("style","margin: auto");
                break;
            case 5:
                $("#glassBackImg").attr("src","glass/dark/dark_b.png");
                $("#glassFrontImg").attr("src","glass/dark/dark_f.png");
                $("#glassFrontImg").attr("style","margin: auto");
                break;
            case 6:
                $("#glassBackImg").attr("src","glass/sparkRed/sparkRed_b.png");
                $("#glassFrontImg").attr("src","glass/sparkRed/sparkRed_f.png");
                $("#glassFrontImg").attr("style","margin: 6% auto auto 6.5%");
                break;
            case 7:
                $("#glassBackImg").attr("src","glass/sparkYellow/sparkYellow_b.png");
                $("#glassFrontImg").attr("src","glass/sparkYellow/sparkYellow_f.png");
                $("#glassFrontImg").attr("style","margin: 6% auto auto 6.5%");
                break;
            case 8:
                $("#glassBackImg").attr("src","glass/sparkSkyblue/sparkSkyblue_b.png");
                $("#glassFrontImg").attr("src","glass/sparkSkyblue/sparkSkyblue_f.png");
                $("#glassFrontImg").attr("style","margin: 6% auto auto 6.5%");
                break;
            case 9:
                $("#glassBackImg").attr("src","glass/sparkTransparent/sparkTransparent_b.png");
                $("#glassFrontImg").attr("src","glass/sparkTransparent/sparkTransparent_f.png");
                $("#glassFrontImg").attr("style","margin: 6% auto auto 6.5%");
                break;
            case 10:
                $("#glassBackImg").attr("src","glass/sparkDark/sparkDark_b.png");
                $("#glassFrontImg").attr("src","glass/sparkDark/sparkDark_f.png");
                $("#glassFrontImg").attr("style","margin: 6% auto auto 6.5%");
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
                $("#treeImg").attr("style","margin: 33% auto auto 22.5%");
                break;
            case 4:
                $("#treeImg").attr("src","tree/baobab.png");
                $("#treeImg").attr("style","margin: 24.5% auto auto 24.5%");
                break;
            case 5:
                $("#treeImg").attr("src","tree/apple.png");
                $("#treeImg").attr("style","margin: 28% auto auto 26.5%");
                break;
            case 6:
                $("#treeImg").attr("src","tree/willow.png");
                $("#treeImg").attr("style","margin: 29% auto auto 26.5%");
                break;
            case 7:
                $("#treeImg").attr("src","tree/jacaranda.png");
                $("#treeImg").attr("style","margin: 24% auto auto 21.5%");
                break;
            case 8:
                $("#treeImg").attr("src","tree/maple.png");
                $("#treeImg").attr("style","margin: 24.5% auto auto 20%");
                break;
            case 9:
                $("#treeImg").attr("src","tree/cherry.png");
                $("#treeImg").attr("style","margin: 30.5% auto auto 19.5%");
                break;
            case 10:
                $("#treeImg").attr("src","tree/moonlight.png");
                $("#treeImg").attr("style","margin: 32% auto auto 24.5%");
                break;
            case 11:
                $("#treeImg").attr("src","tree/sprit.png");
                $("#treeImg").attr("style","margin: 25% auto auto 18.5%");
                break;

            default:
                alert("none of this tree name");
                break;
        };
    });

});
