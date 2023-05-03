"use strict";
// enum - > menyimpan data constan
// numeric enums
var Monts;
(function (Monts) {
    Monts[Monts["JAN"] = 1] = "JAN";
    Monts[Monts["FEB"] = 2] = "FEB";
    Monts[Monts["MAR"] = 3] = "MAR";
    Monts[Monts["APR"] = 4] = "APR";
    Monts[Monts["MEI"] = 5] = "MEI";
    Monts[Monts["JUN"] = 6] = "JUN";
    Monts[Monts["JUL"] = 7] = "JUL";
    Monts[Monts["AUG"] = 8] = "AUG";
    Monts[Monts["SEP"] = 9] = "SEP";
    Monts[Monts["OKT"] = 10] = "OKT";
    Monts[Monts["NOV"] = 11] = "NOV";
    Monts[Monts["DES"] = 12] = "DES";
})(Monts || (Monts = {}));
console.log(Monts.FEB);
// string enums
var Days;
(function (Days) {
    Days["SEN"] = "SENIN";
    Days["SEL"] = "SELASA";
    Days["RAB"] = "RABU";
})(Days || (Days = {}));
console.log(Days.SEN);
