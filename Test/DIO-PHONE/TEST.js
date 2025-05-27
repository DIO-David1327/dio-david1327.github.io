(function() {
    'use strict';
    var uw = window, $ = uw.jQuery, DATA;
    let Home_url = "https://dio-david1327.github.io";
console.log(99999999999999999999999)

    setTimeout(() => { ajaxObserver(); }, 0);
    function ajaxObserver() {
        $(document).ajaxComplete(function (e, xhr, opt) {
            var url = opt.url.split("?"), action = "";
            console.log("0: ", url[0]);
            //console.log("1: ", url[1]);

            if (typeof (url[1]) !== "undefined" && typeof (url[1].split(/&/)[1]) !== "undefined") {
                action = url[0].substr(5) + "/" + url[1].split(/&/)[1].substr(7);
            }
            switch (action) {
                case "/town_info/trading":
                    addTradeMarks(15, 18, 15, "red");
                    TownTabHandler(action.split("/")[2]);
                    break;
            }
        });
    }

    var drop_over = new Image();
    drop_over.src = Home_url + "/img/dio/btn/drop-over.png";
    var drop_out = new Image();
    drop_out.src = Home_url + "/img/dio/btn/drop-out.png";
    var dio = {
        grepo_dropdown: (ID, Class, Options, sel) => {
            var str = '<div id="' + ID + '" class="' + Class + ' dropdown-list default"><div class="item-list">';
            $.each(Options, function (a, b, c) { //class, name, ><
                if (b[2]) { str += '<div class="' + b[0] + (sel == null ? "" : (sel == b[1] ? " sel" : "")) + '" name="' + b[1] + '">' + (b[2] == true ? b[1] : b[2]) + '</div>' }
                else if (b[1]) { str += '<div class="' + b[0] + (sel == null ? "" : (sel == b[1] ? " sel" : "")) + '" name="' + b[1] + '"></div>' }
                else { str += '<div class="' + (sel == null ? "" : (sel == b[0] ? " sel" : "")) + '" name="' + b[0] + '"></div>' }
            });
            str += '</div></div>';
            return str;
        },
        spinner(ID, Class, placeholder, type, style, name) {
            return '<div id="' + ID + '" class="' + (Class = null == Class ? "" : Class) + '" style="' + (style = null == style ? "" : style) + '">' +
                '<div class="border_l"></div>' +
                '<div class="border_r"></div>' +
                '<div class="body">' +
                '<input placeholder="' + placeholder + '" type="' + (type = null == type ? "text" : type) + '" name="' + (name = null == name ? "" : name) + '" tabindex="1">' +
                '</div>' +
                '<div class="button_increase"></div>' +
                '<div class="button_decrease"></div>' +
                '</div>'
        },
        drop_menus_open(open, remove) {
            if (!$($(open)).hasClass("open")) {
                $($(open)).addClass("open");
                $($(remove)).removeClass("open");
            } else {
                $($(open)).removeClass("open");
            }
        },
    };
    function addTradeMarks(woodmark, stonemark, ironmark, color) {
        var max_amount, limit, wndArray = uw.GPWindowMgr.getOpen(uw.Layout.wnd.TYPE_TOWN), wndID;
        for (var e in wndArray) {
            if (wndArray.hasOwnProperty(e)) {
                wndID = "#gpwnd_" + wndArray[e].getID() + " ";
                if ($(wndID + '.town-capacity-indicator').get(0)) {

                    max_amount = $(wndID + '.amounts .max').get(0).innerHTML;

                    $('#trade_tab .c_' + color).each(function () {
                        this.remove();
                    });

                    var progressBarList = $('#trade_tab .progress');
                    for (var i = 0; i < progressBarList.length; i++) {
                        var progressBar = progressBarList[i];
                        if ($("p", progressBar).length < 3) {
                            if ($(progressBar).parent().get(0).id != "big_progressbar") {
                                limit = 1000 * (242 / parseInt(max_amount, 10));

                                switch ($(progressBar).parent().get(0).id.split("_")[2]) {
                                    case "wood":
                                        limit = limit * woodmark;
                                        break;
                                    case "stone":
                                        limit = limit * stonemark;
                                        break;
                                    case "iron":
                                        limit = limit * ironmark;
                                        break;
                                }
                                $('<p class="c_' + color + '"style="position:absolute;left: ' + limit + 'px; background:' + color + ';width:2px;height:100%;margin:0px"></p>').appendTo(progressBar);
                            }
                        }
                    }
                }
            }
        }
    }
    /*******************************************************************************************************************************
     * ● Recruiting Trade
     * *****************************************************************************************************************************/
    try {
        var trade_count = 0, unit = "attack_ship", unit2 = "", percent = "0", trade_Opt = uw.DM.getl10n("market").capacity + " " + uw.DM.getl10n("heroes").overview.max; // Recruiting Trade
        if (typeof (uw.GameData.units.attack_ship) == "undefined") { unit2 = "Attack ship"; setTimeout(() => { unit2 = uw.GameData.units.attack_ship.name }, 200); } else unit2 = uw.GameData.units.attack_ship.name;
    } catch (error) { console.error(error, "RecruitingTrade 1"); }

    function TownTabHandler(action) {
        try {
            var wndArray, wndID, wndA, wnd;
            wndArray = uw.GPWindowMgr.getByType(uw.GPWindowMgr.TYPE_TOWN)
            for (var e in wndArray) {
                if (wndArray.hasOwnProperty(e)) {
                    wndID = "#gpwnd_" + wndArray[e].getID() + " ";
                    wnd = wndArray[e].getID();
                    if (!$(wndID).get(0)) {
                        wndID = "#gpwnd_" + (wndArray[e].getID() + 1) + " ";
                        wnd = wndArray[e].getID() + 1;
                    }
                    switch (action) {
                        case "trading":
                            if ($(wndID + '#trade_tab').get(0)) {
                                if (!$(wndID + '.dio_rec_trade').get(0)) {
                                    RecruitingTrade.add(wndID);
                                }
                            }
                            break;
                        case "rec_mark":
                            break;
                    }
                }
            }
        } catch (error) { console.error(error, "TownTabHandler"); }
    }

    var RecruitingTrade = {
        activate: () => {
            $('<style id="dio_style_recruiting_trade" type="text/css">' +
              '#dio_recruiting_trade .option_s { filter:grayscale(85%); -webkit-filter:grayscale(85%); margin:0px; cursor:pointer; } ' +
              '#dio_recruiting_trade .option_s:hover { filter:unset !important; -webkit-filter:unset !important; } ' +
              '#dio_recruiting_trade .select_rec_unit .sel { filter:sepia(100%); -webkit-filter:sepia(100%); } ' +

              '#dio_recruiting_trade .option {color:#000; background:#FFEEC7; } ' +
              '#dio_recruiting_trade .option:hover {color:#fff; background:#328BF1; } ' +

              '#dio_recruiting_trade .select_rec_unit { position:absolute; display:none; width: 462px; left: 6px; } ' +
              '#dio_recruiting_trade .select_rec_perc { display:none; margin: 22px 0 0 -55px; } ' +
              '#dio_recruiting_trade .select_rec_Opt { display:none; left:88px; } ' +

              '#dio_recruiting_trade .select_rec_unit.open { display:block !important; } ' +
              '#dio_recruiting_trade .select_rec_perc.open { display: initial !important; } ' +
              '#dio_recruiting_trade .select_rec_Opt.open { display:block !important; } ' +

              'div#trade_tab div.content { min-height: 340px; } ' +

              '#dio_recruiting_trade .item-list { max-height:237px; } ' +

              '#dio_recruiting_trade .arrow { width:18px; height:18px; background:url(' + drop_out.src + ') no-repeat -1px -1px; position:absolute; } ' +

              '#dio_recruiting_trade .dio_drop_rec_unit .caption { padding: 4px 20px 0 2px; } ' +
              '#dio_recruiting_trade .dio_drop_Opt .caption { padding: 4px 20px 0 2px; } ' +

              //'#dio_recruiting_trade .dio_drop_rec_unit { width: auto; left: 10px; } ' +
              '#dio_recruiting_trade .dio_drop_rec_perc { width: 90px; margin: 0 10px; } ' +

              '#dio_recruiting_trade .dio_rec_count { display: none; } ' +

              '</style>').appendTo('head');
        },
        deactivate: () => {
            $('#dio_style_recruiting_trade').remove();
            $('#dio_recruiting_trade').remove();
        },
        add: (wndID) => {
            try {
                let max_amount, percent_input, max = uw.DM.getl10n("market").capacity + " " + uw.DM.getl10n("heroes").overview.max, all = uw.DM.getl10n("market").capacity + " " + uw.DM.getl10n("market").visibility.all;
                var Opt_options = [["option", max, true], ["option", all, true],];

                $(wndID + "#duration_container").before('<div id="dio_recruiting_trade" class="dio_rec_trade">' +
                                                        // DropDown-Button for Opt
                                                        '<div class="dio_drop_Opt dropdown default">' +
                                                        '<div class="border-left"></div>' +
                                                        '<div class="border-right"></div>' +
                                                        '<div class="caption" name="' + trade_Opt + '">' + trade_Opt + '</div>' +
                                                        '<div class="arrow"></div>' +
                                                        '</div>' + dio.grepo_dropdown("dio_Select_boxes", "select_rec_Opt", Opt_options, trade_Opt) +
                                                        // DropDown-Button for perc
                                                        dio.spinner("", "dio_drop_rec_perc spinner_horizontal", "0", "text") +
                                                        // DropDown-Button for unit
                                                        '<div class="dio_drop_rec_unit dropdown default">' +
                                                        '<div class="border-left"></div>' +
                                                        '<div class="border-right"></div>' +
                                                        '<div class="caption" name="' + unit + '">' + unit2 + '</div>' +
                                                        '<div class="arrow"></div>' +
                                                        '</div><span class="dio_rec_count">(' + trade_count + ')</span></div>'); //<span class="dio_rec_count">(' + trade_count + ')</span></div>

                let options = [], ratio = {}
                let units_html = '<div id="dio_Select_boxes" class="select_rec_unit dropdown-list default active"><div class="item-list">';
                $.each(uw.GameData.units, function (value, unit) {
                    if (unit.speed > 0) {
                        options.push(value)
                        units_html += '<div class="option_s unit index_unit unit_icon40x40 ' + value + '" name="' + value + '"></div>'
                        ratio[value] = (RecruitingTrade.resources(value))
                    }
                })
                units_html += '' +
                    //Other
                    '<div id="diowall" 	class="option_s unit index_unit place_image wall_level" 	name="CitywallLv5"></div>' +		// City wall Lv 5
                    '<div id="diowall2" class="option_s unit index_unit place_image wall_level" 	name="CitywallLv15"></div>' +	// City wall Lv 15
                    '<div id="diohide" 	class="option_s unit index_unit building_icon40x40 hide" 	name="hideLv5"></div>' +		// City hide Lv 5
                    '<div id="diohide2" class="option_s unit index_unit building_icon40x40 hide" 	name="hideLv10"></div>' +		// City hide Lv 15
                    '<div id="diofestivals" class="option_s unit index_unit place_image morale" 	name="festival"></div>' + // festival
                    '</div></div>';

                $(units_html).appendTo(wndID + ".dio_rec_trade")

                ratio.CitywallLv5 = { w: 0.2286, s: 1, i: 0.6714, name: uw.GameData.buildings.wall.name + " Lv 5" };	 // City wall Lv 5
                ratio.CitywallLv15 = { w: 0.0762, s: 1, i: 0.7491, name: uw.GameData.buildings.wall.name + " Lv 15" }; // City wall Lv 15
                ratio.hideLv5 = RecruitingTrade.resources(false, 1621, 2000, 2980, uw.DM.getl10n("hide").index.hide + " Lv 5");	 // City hide Lv 5
                ratio.hideLv10 = RecruitingTrade.resources(false, 3991, 4000, 5560, uw.DM.getl10n("hide").index.hide + " Lv 10"); // City hide Lv 10
                ratio.festival = { w: 0.8333, s: 1, i: 0.8333, name: "cityfestivals" };	 // City festival

                $(wndID + ".dio_rec_trade [name='" + unit + "']").toggleClass("sel");

                // cliquez sur les événements du menu déroulant

                $(wndID + ".select_rec_Opt .option").each(function () {
                    $(this).click(function (e) {
                        $(wndID + ".select_rec_Opt .sel").toggleClass("sel");
                        $(wndID + "." + this.className.split(" ")[4]).toggleClass("sel");

                        trade_Opt = $(this).attr("name");
                        $(wndID + '.dio_drop_Opt .caption').attr("name", trade_Opt);
                        $(wndID + '.dio_drop_Opt .caption').each(function () {
                            this.innerHTML = trade_Opt;
                        });
                        $($(this).parent().parent().get(0)).removeClass("open");
                        $(wndID + '.dio_drop_Opt .caption').change();
                    });
                });

                $(wndID + ' .select_rec_unit .option_s').each(function () {
                    $(this).click(function (e) {
                        $(wndID + ".select_rec_unit .sel").toggleClass("sel");
                        $(wndID + "." + this.className.split(" ")[4]).toggleClass("sel");

                        unit = $(this).attr("name");
                        unit2 = ratio[unit].name;
                        $(wndID + '.dio_drop_rec_unit .caption').attr("name", unit);
                        $(wndID + '.dio_drop_rec_unit .caption').each(function () {
                            this.innerHTML = unit2;
                        });
                        $($(this).parent().parent().get(0)).removeClass("open");
                        $(wndID + '.dio_drop_rec_unit .caption').change();
                    });
                });
                $(wndID + ' .select_rec_perc .option').each(function () {
                    $(this).click(function (e) {
                        $(this).parent().find(".sel").toggleClass("sel");
                        $(this).toggleClass("sel");

                        percent = $(this).attr("name");
                        $(wndID + '.dio_drop_rec_perc .caption').attr("name", percent);
                        $(wndID + '.dio_drop_rec_perc .caption').each(function () {
                            this.innerHTML = Math.round(percent * 100) + "%";
                        });
                        $($(this).parent().parent().get(0)).removeClass("open")
                        $(wndID + '.dio_drop_rec_perc .caption').change();
                    });
                });

                // show & hide drop menus on click
                //$(wndID + '.dio_drop_rec_perc').click(function (e) { dio.drop_menus_open(wndID + '.select_rec_perc', wndID + '.select_rec_unit') });
                $(wndID + '.dio_drop_rec_unit').click(function (e) { dio.drop_menus_open(wndID + '.select_rec_unit', wndID + '.select_rec_Opt') });
                $(wndID + '.dio_drop_Opt').click(function (e) { dio.drop_menus_open('.select_rec_Opt', '.select_rec_unit') });

                $(wndID).click(function (e) {
                    var clicked = $(e.target), element = $('#' + this.id + ' .dropdown-list.open').get(0);
                    if ((clicked[0].parentNode.className.split(" ")[1] !== "dropdown") && element) {
                        $(element).removeClass("open");
                    }
                });

                $(wndID + " .dio_drop_rec_perc").spinnerHorizontal({
                    value: percent * 100,
                    step: 10,
                    max: 100,
                    min: 0,
                });

                // hover arrow change
                $(wndID + '.dropdown').hover(function (e) {
                    $(e.target)[0].parentNode.childNodes[3].style.background = "url('" + drop_over.src + "') no-repeat -1px -1px";
                }, function (e) {
                    $(e.target)[0].parentNode.childNodes[3].style.background = "url('" + drop_out.src + "') no-repeat -1px -1px";
                });

                $(wndID + ".dio_drop_rec_unit .caption").attr("name", unit);
                $(wndID + ".dio_drop_rec_perc .caption").attr("name", percent);

                $(wndID + '.dio_drop_rec_unit').tooltip("unit");
                $(wndID + '.dio_drop_rec_perc').tooltip("percent");
                $(wndID + '.dio_drop_Opt').tooltip('<div class="dio_icon b" style="margin-right: 0px;"></div>');

                if ($(wndID + '#town_capacity_wood .max').get(0)) { max_amount = parseInt($(wndID + '#town_capacity_wood .max').get(0).innerHTML, 10); }
                else { max_amount = 25500; }

                $(wndID + ".dio_drop_rec_perc").on("click", function () {
                    if (trade_Opt == all) trade_all($(wndID + ".dio_drop_rec_perc"));
                    else trade_max($(wndID + ".dio_drop_rec_perc"));
                });

                $(wndID + '.caption, ' + wndID + '.dio_drop_rec_perc').on("change", function (e) {
                    if (trade_Opt == all) trade_all($(wndID + ".dio_drop_rec_perc"));
                    else trade_max($(wndID + ".dio_drop_rec_perc"));
                });

                if (trade_Opt == all) trade_all($(wndID + ".dio_drop_rec_perc"));
                else trade_max($(wndID + ".dio_drop_rec_perc"));

                function trade_max(This) {

                    //if (!(($(This).attr('name') === unit) || ($(This).attr('name') === percent))) { $(wndID + '.dio_rec_count').get(0).innerHTML = "(" + trade_count + ")"; }

                    percent_input = $(This).parent().parent().find(".dio_drop_rec_perc input")
                    if (!percent_input.is(":visible")) return
                    unit = $(This).parent().parent().parent().find(".dio_drop_rec_unit .caption").attr('name');
                    percent = percent_input.val() / 100

                    var max = (max_amount - 100) / 1000;
                    //console.log(88, wndID, max * ratio[unit].w)
                    addTradeMarks(max * ratio[unit].w, max * ratio[unit].s, max * ratio[unit].i, "lime", wndID);

                    var part = (max_amount - 1000) * parseFloat(percent); // -1000 als Puffer (sonst Überlauf wegen Restressies, die nicht eingesetzt werden können, vorallem bei FS und Biremen)
                    var rArray = uw.ITowns.getTown(uw.Game.townId).getCurrentResources();
                    var tradeCapacity = uw.ITowns.getTown(uw.Game.townId).getAvailableTradeCapacity();

                    var wood = ratio[unit].w * part;
                    var stone = ratio[unit].s * part;
                    var iron = ratio[unit].i * part;
                    // added by maro
                    // wenn der 'tmp' == 1 dann wurde 100% ausgewählt
                    //if(tmp == 1) {
                    //alert('100% wurde ausgewählt');
                    var tmpgratio = ratio[unit].w + ratio[unit].s + ratio[unit].i
                    wood = tradeCapacity / tmpgratio * ratio[unit].w;
                    stone = tradeCapacity / tmpgratio * ratio[unit].s;
                    iron = tradeCapacity / tmpgratio * ratio[unit].i;
                    /*alert('folgende Daten sind vorhanden \n' +
                     'transportkapacität: ' + tradeCapacity + '\n' +
                     'name: ' + tmp + '\n' +
                     'ratio Holz ??: ' + ratio[unit].w + '\n' +
                     'ratio Stein: ' + ratio[unit].s + '\n' +
                     'ratio Silber: ' + ratio[unit].i + '\n' +
                    'rArray (Holz?): ' + rArray.wood);*/
                    //added by vookus - traded immer prozentual zur gewünschten einheit auch wenn nicht genügen resi für ein volles lager vorhanden sind
                    function addTEST(a, b, c) {
                        let A, B, C, tmps = percent * 100;
                        A = rArray[a] * percent;
                        B = A / (ratio[unit][a.substring(0, 1)] * tmps) * tmps * ratio[unit][b.substring(0, 1)];
                        C = A / (ratio[unit][a.substring(0, 1)] * tmps) * tmps * ratio[unit][c.substring(0, 1)];
                        if (A > getRess(a) || B > getRess(b) || C > getRess(c)) {
                            percent_input.css({ color: '#610fe5' });
                            //A = B = C = 0
                        }
                        $(wndID + "#trade_type_" + a + " [type='text']").select().val(A).blur();
                        $(wndID + "#trade_type_" + b + " [type='text']").select().val(B).blur();
                        $(wndID + "#trade_type_" + c + " [type='text']").select().val(C).blur();
                    }
                    function getRess(res_type) {
                        if (!$(wndID + "#town_capacity_" + res_type).get(0)) return
                        var res = {};
                        res.selector = $(wndID + "#town_capacity_" + res_type);
                        res.amounts = {
                            curr: parseInt(res.selector.find(".curr").html()) || 0,
                            curr2: parseInt(res.selector.find(".curr2").html().substring(3)) || 0,
                            curr3: parseInt(res.selector.find(".curr3").html().substring(3)) || 0,
                            max: parseInt(res.selector.find(".max").html()) || 0
                        }
                        res.needed = res.amounts.max - res.amounts.curr - res.amounts.curr2;
                        return res.needed;
                    }
                    percent_input.css({ color: '#000' });
                    if ((wood > rArray.wood) && (stone < rArray.stone) && (iron < rArray.iron)) {
                        addTEST("wood", "stone", "iron")
                    } else if ((wood < rArray.wood) && (stone > rArray.stone) && (iron < rArray.iron)) {
                        addTEST("stone", "wood", "iron")
                    } else if ((wood < rArray.wood) && (stone < rArray.stone) && (iron > rArray.iron)) {
                        addTEST("iron", "stone", "wood")
                    } else if ((wood > rArray.wood) && (stone < rArray.stone) && (iron > rArray.iron) && ((rArray.wood) * ratio[unit].w) < ((rArray.iron) * ratio[unit].i)) {
                        addTEST("wood", "stone", "iron")
                    } else if ((wood > rArray.wood) && (stone < rArray.stone) && (iron > rArray.iron) && ((rArray.wood) * ratio[unit].w) > ((rArray.iron) * ratio[unit].i)) {
                        addTEST("iron", "stone", "wood")
                    } else if ((wood < rArray.wood) && (stone > rArray.stone) && (iron > rArray.iron) && ((rArray.iron) * ratio[unit].i) < ((rArray.stone) * ratio[unit].s)) {
                        addTEST("iron", "stone", "wood")
                    } else if ((wood < rArray.wood) && (stone > rArray.stone) && (iron > rArray.iron) && ((rArray.iron) * ratio[unit].i) > ((rArray.stone) * ratio[unit].s)) {
                        addTEST("stone", "wood", "iron")
                    } else if ((wood > rArray.wood) && (stone > rArray.stone) && (iron < rArray.iron) && ((rArray.wood) * ratio[unit].w) > ((rArray.stone) * ratio[unit].s)) {
                        addTEST("stone", "wood", "iron")
                    } else if ((wood > rArray.wood) && (stone > rArray.stone) && (iron < rArray.iron) && ((rArray.wood) * ratio[unit].w) < ((rArray.stone) * ratio[unit].s)) {
                        addTEST("wood", "stone", "iron")
                    } else if ((wood > rArray.wood) && (stone > rArray.stone) && (iron > rArray.iron)) {
                        wood = stone = iron = 0;
                        percent_input.css({ color: '#f00' });
                    } else if ((wood < rArray.wood) && (stone < rArray.stone) && (iron < rArray.iron)) {
                        if (wood * percent > getRess("wood") || stone * percent > getRess("stone") || iron * percent > getRess("iron")) {
                            percent_input.css({ color: '#610fe5' });
                            //wood = stone = iron = 0;
                        }
                        $(wndID + "#trade_type_wood [type='text']").select().val(wood * percent).blur();
                        $(wndID + "#trade_type_stone [type='text']").select().val(stone * percent).blur();
                        $(wndID + "#trade_type_iron [type='text']").select().val(iron * percent).blur();
                    } else {
                        percent_input.css({ color: '#000' });
                        wood = stone = iron = 0;
                        $(wndID + "#trade_type_wood [type='text']").select().val(wood).blur();
                        $(wndID + "#trade_type_stone [type='text']").select().val(stone).blur();
                        $(wndID + "#trade_type_iron [type='text']").select().val(iron).blur();
                    }
                };
                function trade_all(This) {

                    //if (!(($(This).attr('name') === unit) || ($(This).attr('name') === percent))) { $(wndID + '.dio_rec_count').get(0).innerHTML = "(" + trade_count + ")"; }

                    percent_input = $(This).parent().parent().find(".dio_drop_rec_perc input")
                    if (!percent_input.is(":visible")) return
                    unit = $(This).parent().parent().parent().find(".dio_drop_rec_unit .caption").attr('name');
                    percent = percent_input.val() / 100

                    var max = (max_amount - 100) / 1000;
                    //console.log(88, wndID, max * ratio[unit].w)
                    addTradeMarks(max * ratio[unit].w, max * ratio[unit].s, max * ratio[unit].i, "lime", wndID);

                    var part = (max_amount - 1000) * parseFloat(percent); // -1000 als Puffer (sonst Überlauf wegen Restressies, die nicht eingesetzt werden können, vorallem bei FS und Biremen)
                    var rArray = uw.ITowns.getTown(uw.Game.townId).getCurrentResources();
                    var tradeCapacity = uw.ITowns.getTown(uw.Game.townId).getAvailableTradeCapacity();

                    var wood = ratio[unit].w * part;
                    var stone = ratio[unit].s * part;
                    var iron = ratio[unit].i * part;

                    if ((wood > rArray.wood) || (stone > rArray.stone) || (iron > rArray.iron) || ((wood + stone + iron) > tradeCapacity)) {
                        wood = stone = iron = 0;
                        percent_input.css({ color: '#f00' });
                    } else {
                        percent_input.css({ color: '#000' });
                    }
                    $("#trade_type_wood [type='text']").select().val(wood).blur();
                    $("#trade_type_stone [type='text']").select().val(stone).blur();
                    $("#trade_type_iron [type='text']").select().val(iron).blur();
                };

                $(wndID + '#trade_button').click(() => {
                    trade_count++;
                    $(wndID + '.dio_rec_count').get(0).innerHTML = "(" + trade_count + ")";
                });

                $(wndID + '.dio_drop_rec_perc .caption').change();

                // Tooltip
                $.each(options, function (i, o) { $('.option_s.unit.index_unit.unit_icon40x40.' + o).tooltip(uw.GameData.units[o].name) })
                //Other
                $('#diowall').tooltip(uw.GameData.buildings.wall.name + " Lv 5");
                $('#diowall2').tooltip(uw.GameData.buildings.wall.name + " Lv 15");
                $('#diohide').tooltip(uw.DM.getl10n("hide").index.hide + " Lv 5");
                $('#diohide2').tooltip(uw.DM.getl10n("hide").index.hide + " Lv 10");
                $('#diofestivals').tooltip("cityfestivals");

            } catch (error) { console.error(error, "RecruitingTrade"); }
        },
        resources: (res, W, S, I, name) => {
            let w, s, i, a;
            if (res) {
                a = uw.GameData.units[res].resources;
                w = a.wood; s = a.stone; i = a.iron;
                a = Math.max(w, s, i);
                name = uw.GameData.units[res].name;
            }
            else { w = W; s = S; i = I; a = w + s + i; }
            w = w / a; s = s / a; i = i / a;
            return ({ w: w, s: s, i: i, name: name });
        },
    };
    RecruitingTrade.activate()
})();