function lg() {
    var lg_th = ["+", "๑", "๒", "๓", "๔", "ู", "฿", "๕", "๖", "๗", "๘", "๙", "ๅ", "/", "-", "ภ", "ถ", "ุ", "ึ", "ค", "ต", "จ", "ข", "ช", "๐", "\"", "ฎ", "ฑ", "ธ", "ํ", "๊", "ณ", "ฯ", "ญ", "ฐ", ",", "ฅ", "ๆ", "ไ", "ำ", "พ", "ะ", "ั", "ี", "ร", "น", "ย", "บ", "ล", "ฃ", "ฤ", "ฆ", "ฏ", "โ", "ฌ", "็", "๋", "ษ", "ศ", "ซ", ".", "ฟ", "ห", "ก", "ด", "เ", "้", "่", "า", "ส", "ว", "ง", "(", ")", "ฉ", "ฮ", "ฺ", "์", "?", "ฒ", "ฬ", "ฦ", "ผ", "ป", "แ", "อ", "ิ", "ื", "ท", "ม", "ใ", "ฝ"]
    lg_en = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
    var rawdata, lg_result1 = "",
        lg_result2 = "";
    rawdata = document.getElementById("rawdata").value;
    for (var i = 0; i < rawdata.length; i++) {
        for (var j = 0; j < 92; j++) {
            if (rawdata.charAt(i) == lg_th[j]) {
                lg_result1 += lg_en[j];
                j = 93;
            }
        }
        if (j == 92) {
            lg_result1 += " ";
        }
    }
    for (var i = 0; i < rawdata.length; i++) {
        for (var j = 0; j < 92; j++) {
            if (rawdata.charAt(i) == lg_en[j]) {
                lg_result2 += lg_th[j];
                j = 93;
            }
        }
        if (j == 92) {
            lg_result2 += " ";
        }
    }
    if (lg_result1 > lg_result2) {
        document.getElementById("lg_result").innerHTML = "ผลลัพธ์ : " + lg_result1;
    } else {
        document.getElementById("lg_result").innerHTML = "ผลลัพธ์ : " + lg_result2;
    }
}