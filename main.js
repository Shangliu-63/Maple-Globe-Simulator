$(function(){
    $("#characterAppear").on("click",function(){
        $("#characterImg").show();
        $("#emotionImg").show();
    });
    $("#characterHide").on("click",function(){
        $("#characterImg").hide();
        $("#emotionImg").hide();
    });
    /*$("#downloadImg").on("click",function(){
        html2canvas($("#mainview"),{
            onrendered:function(canvas){
            varlink=document.createElement('a');
            link.download='my-image-name.png';
            link.href=canvas.toDataURL();
            link.click();
            }
        });
    });*/

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
                $("#baseImg").attr("style","margin: 75.5% 23.5%");
                break;
            case 5:
                $("#baseImg").attr("src","base/simpleYellowBase.png");
                $("#baseImg").attr("style","margin: 75.5% 23.5%");
                break;
            case 6:
                $("#baseImg").attr("src","base/simpleSkyblueBase.png");
                $("#baseImg").attr("style","margin: 75.5% 23.5%");
                break;
            case 7:
                $("#baseImg").attr("src","base/FluffyCloudBase.png");
                $("#baseImg").attr("style","margin: 75% auto");
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
        let treeValue = parseInt($(this).val());
        switch(treeValue){
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

    $("#poseSelect").on("change", function(){
        let figure2Value = parseInt($(this).val());
        switch(figure2Value){
            case 0:
                $("#characterImg").attr("src","character/stand.png");
                $("#characterImg").attr("style","margin: 24.5% auto auto 11%");
                $("#emotionImg").attr("style","margin: 24.5% auto auto 11%");
                break;
            case 1:
                $("#characterImg").attr("src","character/catch breath.png");
                $("#characterImg").attr("style","margin: 24.5% auto auto 11%");
                $("#emotionImg").attr("style","margin: 25.25% auto auto 11%");
                break;
            case 2:
                if($("#chairImg").attr("src")==""){
                    alert("請先選擇椅子/please select a chair first");
                    $("#poseSelect").val(0);
                    $("#characterImg").attr("src","character/stand.png");
                    $("#characterImg").attr("style","margin: 24.5% auto auto 11%");
                    $("#emotionImg").attr("style","margin: 24.5% auto auto 11%");
                    break;
                }
                $("#characterImg").attr("src","character/sit.png");
                $("#characterImg").attr("style","margin: 24.5% auto auto 16%");
                $("#emotionImg").attr("style","margin: 25.5% auto auto 16.75%");
                break;
            case 3:
                $("#characterImg").attr("src","character/jump.png");
                $("#characterImg").attr("style","margin: 20% auto auto 11%");
                $("#emotionImg").attr("style","margin: 20.5% auto auto 11%");
                break;
            case 4:
                $("#characterImg").attr("src","character/fly.png");
                $("#characterImg").attr("style","margin: 18% auto auto 11%");
                $("#emotionImg").attr("style","margin: 16.75% auto auto 11%");
                break;
            case 5:
                $("#characterImg").attr("src","character/ghost.png");
                $("#characterImg").attr("style","margin: 24.5% auto auto 11%");
                $("#emotionImg").attr("style","margin: 25.5% auto auto 11.75%");
                break;
            default:
                alert("none of this character name");
                break;
        };
    });

    $("#ExpressionSelect").on("change", function(){
        let chairValue = parseInt($(this).val());
        switch(chairValue){
            case 0:
                $("#emotionImg").attr("src","");
                break;
            case 1:
                $("#emotionImg").attr("src","character/emotion/smile.png");
                break;
            case 2:
                $("#emotionImg").attr("src","character/emotion/cry.png");
                break;
            case 3:
                $("#emotionImg").attr("src","character/emotion/angry.png");
                break;
            case 4:
                $("#emotionImg").attr("src","character/emotion/stunned.png");
                break;
            case 5:
                $("#emotionImg").attr("src","character/emotion/troubled.png");
                break;
            case 6:
                $("#emotionImg").attr("src","character/emotion/googly.png");
                break;
            case 7:
                $("#emotionImg").attr("src","character/emotion/sparkling.png");
                break;
            case 8:
                $("#emotionImg").attr("src","character/emotion/excited.png");
                break;
            case 9:
                $("#emotionImg").attr("src","character/emotion/smooch.png");
                break;
            case 10:
                $("#emotionImg").attr("src","character/emotion/goo goo.png");
                break;
            case 11:
                $("#emotionImg").attr("src","character/emotion/wink.png");
                break;
            case 12:
                $("#emotionImg").attr("src","character/emotion/zzz.png");
                break;
            default:
                alert("none of this chair name");
                break;
        };
    });

    $("#chairSelect").on("change", function(){
        let chairValue = parseInt($(this).val());
        switch(chairValue){
            case 0:
                $("#chairImg").attr("src","");
                $("#chairImg").hide();
                break;
            case 1:
                $("#chairImg").attr("src","chair/smallrock.png");
                $("#chairImg").attr("style","margin: 68.5% auto auto 47%");
                break;
            case 2:
                $("#chairImg").attr("src","chair/smallmushroom.png");
                $("#chairImg").attr("style","margin: 66.5% auto auto 46%");
                break;
            case 3:
                $("#chairImg").attr("src","chair/smallbench.png");
                $("#chairImg").attr("style","margin: 63% auto auto 43%");
                break;
            case 4:
                $("#chairImg").attr("src","chair/smallstump.png");
                $("#chairImg").attr("style","margin: 63.5% auto auto 44%");
                break;
            case 5:
                $("#chairImg").attr("src","chair/campingchair.png");
                $("#chairImg").attr("style","margin: 61% auto auto 48%");
                break;
            case 6:
                $("#chairImg").attr("src","chair/smallmat.png");
                $("#chairImg").attr("style","margin: 64% auto auto 38%; z-index: 5");
                break;
            case 7:
                $("#chairImg").attr("src","chair/cushion.png");
                $("#chairImg").attr("style","margin: 63% auto auto 47%");
                break;
            case 8:
                $("#chairImg").attr("src","chair/softcloud.png");
                $("#chairImg").attr("style","margin: 64.5% auto auto 47%");
                break;
            case 9:
                $("#chairImg").attr("src","chair/toycar.png");
                $("#chairImg").attr("style","margin: 66% auto auto 45%; z-index: 5");
                break;
            case 10:
                $("#chairImg").attr("src","chair/swingchair.png");
                $("#chairImg").attr("style","margin: 48% auto auto 46%");
                break;
            default:
                alert("none of this chair name");
                break;
        };
    });

    $("#figure1Select").on("change", function(){
        let figure1Value = parseInt($(this).val());
        switch(figure1Value){
            case 0:
                $("#figure1Img").attr("src","");
                $("#figure1Img").attr("style","margin: auto");
                break;
            case 1:
                $("#figure1Img").attr("src","figure1/orangemushroom.png");
                $("#figure1Img").attr("style","margin: 63.5% auto auto 30%");
                break;
            case 2:
                $("#figure1Img").attr("src","figure1/ribbonpig.png");
                $("#figure1Img").attr("style","margin: 64.5% auto auto 30%");
                break;
            case 3:
                $("#figure1Img").attr("src","figure1/pepe.png");
                $("#figure1Img").attr("style","margin: 63% auto auto 31%");
                break;
            case 4:
                $("#figure1Img").attr("src","figure1/neinheart.png");
                $("#figure1Img").attr("style","margin: 61.75% auto auto 31%");
                break;
            case 5:
                $("#figure1Img").attr("src","figure1/aran.png");
                $("#figure1Img").attr("style","margin: 59.75% auto auto 30.5%");
                break;
            case 6:
                $("#figure1Img").attr("src","figure1/evan.png");
                $("#figure1Img").attr("style","margin: 60.75% auto auto 30.25%");
                break;
            case 7:
                $("#figure1Img").attr("src","figure1/alicia.png");
                $("#figure1Img").attr("style","margin: 61% auto auto 27.5%");
                break;
            case 8:
                $("#figure1Img").attr("src","figure1/hilla.png");
                $("#figure1Img").attr("style","margin: 61.5% auto auto 30%");
                break;
            case 9:
                $("#figure1Img").attr("src","figure1/phantom.png");
                $("#figure1Img").attr("style","margin: 60.5% auto auto 29.25%");
                break;
            case 10:
                $("#figure1Img").attr("src","figure1/lotus.png");
                $("#figure1Img").attr("style","margin: 61.25% auto auto 30.5%");
                break;
            case 11:
                $("#figure1Img").attr("src","figure1/lucid.png");
                $("#figure1Img").attr("style","margin: 60.25% auto auto 29.25%");
                break;
            default:
                alert("none of this figure1 name");
                break;
        };
    });

    $("#figure2Select").on("change", function(){
        let figure2Value = parseInt($(this).val());
        switch(figure2Value){
            case 0:
                $("#figure2Img").attr("src","");
                $("#figure2Img").attr("style","margin: auto");
                break;
            case 1:
                $("#figure2Img").attr("src","figure2/slime.png");
                $("#figure2Img").attr("style","margin: 65.5% auto auto 58%");
                break;
            case 2:
                $("#figure2Img").attr("src","figure2/veti.png");
                $("#figure2Img").attr("style","margin: 60% auto auto 56%");
                break;
            case 3:
                $("#figure2Img").attr("src","figure2/pk.png");
                $("#figure2Img").attr("style","margin: 63.5% auto auto 58%");
                break;
            case 4:
                $("#figure2Img").attr("src","figure2/von.png");
                $("#figure2Img").attr("style","margin: 59.5% auto auto 56%");
                break;
            case 5:
                $("#figure2Img").attr("src","figure2/mercedes.png");
                $("#figure2Img").attr("style","margin: 61.25% auto auto 57%");
                break;
            case 6:
                $("#figure2Img").attr("src","figure2/lumi.png");
                $("#figure2Img").attr("style","margin: 60.5% auto auto 56.25%");
                break;
            case 7:
                $("#figure2Img").attr("src","figure2/shade.png");
                $("#figure2Img").attr("style","margin: 60.5% auto auto 56.5%");
                break;
            case 8:
                $("#figure2Img").attr("src","figure2/magnus.png");
                $("#figure2Img").attr("style","margin: 59.75% auto auto 54.75%");
                break;
            case 9:
                $("#figure2Img").attr("src","figure2/cygnus.png");
                $("#figure2Img").attr("style","margin: 61.5% auto auto 56.5%");
                break;
            case 10:
                $("#figure2Img").attr("src","figure2/orchid.png");
                $("#figure2Img").attr("style","margin: 61% auto auto 55.5%");
                break;
            case 11:
                $("#figure2Img").attr("src","figure2/damien.png");
                $("#figure2Img").attr("style","margin: 59.5% auto auto 57%");
                break;
            default:
                alert("none of this figure1 name");
                break;
        };
    });

    $("#effectSelect").on("change", function(){
        let effectValue = parseInt($(this).val());
        switch(effectValue){
            case 0:
                $("#effectImg").attr("src","");
                break;
            case 1:
                $("#effectImg").attr("src","effect/maple.png");
                break;
            case 2:
                $("#effectImg").attr("src","effect/cherry.png");
                break;
            case 3:
                $("#effectImg").attr("src","effect/leaf.png");
                break;
            case 4:
                $("#effectImg").attr("src","effect/yellowdust.png");
                break;
            case 5:
                $("#effectImg").attr("src","effect/snowflake.png");
                break;
            case 6:
                $("#effectImg").attr("src","effect/bubble.png");
                break;
            case 7:
                $("#effectImg").attr("src","effect/whitedust.png");
                break;
            case 8:
                $("#effectImg").attr("src","effect/bluedust.png");
                break;
            case 9:
                $("#effectImg").attr("src","effect/mote.png");
                break;
            case 10:
                $("#effectImg").attr("src","effect/fragment.png");
                break;
            default:
                alert("none of this figure1 name");
                break;
        };
    });

    $("#bgmSelect").on("change", function(){
        let bgmValue = parseInt($(this).val());
        switch(bgmValue){
            case 0:
                $("#bgm").attr("src","");
                break;
            case 1:
                $("#bgm").attr("src","music/FloralLife.mp3");
                break;
            case 2:
                $("#bgm").attr("src","music/WhenTheMorningComes.mp3");
                break;
            case 3:
                $("#bgm").attr("src","music/SecretElodin.mp3");
                break;
            case 4:
                $("#bgm").attr("src","music/WindAndFlower.mp3");
                break;
            case 5:
                $("#bgm").attr("src","music/QueensGarden.mp3");
                break;
            case 6:
                $("#bgm").attr("src","music/RaindropFlower.mp3");
                break;
            case 7:
                $("#bgm").attr("src","music/Shinin'Harbor.mp3");
                break;
            case 8:
                $("#bgm").attr("src","music/Title.mp3");
                break;
            case 9:
                $("#bgm").attr("src","music/CygnusGarden.mp3");
                break;
            case 10:
                $("#bgm").attr("src","music/Asylum.mp3");
                break;
            case 11:
                $("#bgm").attr("src","music/RabbitsDream.mp3");
                break;
            case 12:
                $("#bgm").attr("src","music/TimeTemple.mp3");
                break;
            case 13:
                $("#bgm").attr("src","music/SwampOfMemoryMoras.mp3");
                break;
            case 14:
                $("#bgm").attr("src","music/LegendOfZipang_Silence.mp3");
                break;
            case 15:
                $("#bgm").attr("src","music/TheWaytoHope_MR.mp3");
                break;
            case 16:
                $("#bgm").attr("src","music/ForgottenNames.mp3");
                break;
            case 17:
                $("#bgm").attr("src","music/EveningPrimrose.mp3");
                break;
            case 18:
                $("#bgm").attr("src","music/Lake Of Oblivion.mp3");
                break;
            case 19:
                $("#bgm").attr("src","music/TheTuneOfAzureLight.mp3");
                break;
            case 20:
                $("#bgm").attr("src","music/SoupOfLife.mp3");
                break;
            default:
                alert("none of this bgm name");
                break;
        };
        let bgmVol = $("#volSlider").slider("value");
        $("#bgm")[0].volume = (bgmVol/100);
        $("#bgm")[0].loop = true;
        $("#bgm")[0].play();
        $("#controlPlay").attr("value","▷");
    });
    let musicOp = $("#bgm")[0];
    $("#controlPlay").on("click",function(){
        if($(this)[0].value=="▷"){
            musicOp.pause();
            $(this).attr("value","▶");
        }
        else if($(this)[0].value=="▶"){
            musicOp.play();
            $(this).attr("value","▷");
        }
    });
    $("#stop").on("click",function(){
        musicOp.pause();
        musicOp.currentTime = 0;
        $("#controlPlay").attr("value","▶");
    });

    $("#volSlider").slider({
        min: 0, 
        max: 100,
        step: 1,
        value: 30,
        create: function(e, ui) {
          var style={"width":"30px","text-align":"center"};
          $(this).find(".ui-slider-handle").css(style);
          css();
          },
        slide: function(e, ui) {
          $("#hslider_value").html(ui.value);
          $(this).find(".ui-slider-handle").html(ui.value);
          let bgmVol = $("#volSlider").slider("value");
          musicOp.volume = (bgmVol/100);
        }
    });
});