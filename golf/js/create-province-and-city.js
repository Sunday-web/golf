$(document).on("pageinit", function() {
    // ���ʡ�����б�  
    var provincesOptionHtml = "";
    var provinces = [];
    for(var el in provinceAndCityArray) {
        provinces.push(provinceAndCityArray[el].name);
        provincesOptionHtml += "<option value=" + el + ">" + provinceAndCityArray[el].name + "</option>";
    }
    $("#selectProvince").append(provincesOptionHtml);

    // �����������б�  
    $("#selectProvince").bind("change", function() {
        var selectedProvince = $("#selectProvince :selected").val();
        if(selectedProvince != -1) {
            var citiesOptionHtml = "";
            var cities = [];
            cities = provinceAndCityArray[selectedProvince].cities;
            for(var elCity in cities) {
                citiesOptionHtml += "<option value=" + elCity + ">" + cities[elCity] + "</option>";
            }
            // ���֮ǰ�ĳ����б�  
            $("#selectCity option[value!=-1]").remove();
            $("#selectCity option[value=-1]").attr("selected", true);
            $("#selectCity").append(citiesOptionHtml);
            $("#selectCity").selectmenu("refresh");
        }
    });
});