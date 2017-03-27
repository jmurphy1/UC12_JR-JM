function isANumber(number) {
    if (!isNaN(number) == true && (~number.indexOf("e")) == false) {
        return true
    }
    else {
        return false;
    }
}


function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = phoneNum.slice(1,4);
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && isANumber(areaCode) == true && phoneNum.slice(0,1) != 1 && phoneNum.slice(0,1) != 0) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone Number: " + error.message);
    }
}


function getLineCode(phoneNum) {
    var lineCode;

    try {
        lineCode = phoneNum.slice(9);
        if (lineCode.length == 4 && isANumber(lineCode) == true) {
            return lineCode
        } else {
            throw new Error("Invalid line code: " + lineCode);
        }
    } catch (error) {
        throw new Error("Invalid phone Number: " + error.message)
    }
}


function getCO(phoneNum) {
    var coCode;

    try {
        coCode = phoneNum.slice(5,8);
        coCode = coCode.trim();
        if (coCode.length == 3 && isANumber(coCode) && coCode.slice(0,1) != 1 && coCode.slice(0,1) != 0) {
            return coCode;
        } else {
            throw new Error("Invalid CO code: " + coCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}


function displayEverything(inputId, outputIdArea, outputIdLine, outputIdCO) {
    var outputTextArea = "";
    var outputTextLine = "";
    var outputTextCO = "";
    var phoneNum = document.getElementById(inputId).value;

    try {
        var areaCode = getAreaCode(phoneNum.replace(/ /g,""));
        outputTextArea = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputTextArea = error.message;
    }
        try {
        var lineCode = getLineCode(phoneNum.replace(/ /g,""));
        outputTextLine = "Your line code is " + lineCode;
    } catch (error) {
        console.log(error.message);
        outputTextLine = error.message;
    }
        try {
        var coCode = getCO(phoneNum.replace(/ /g, ""));
        outputTextCO = "Your CO code is " + coCode;
    } catch (error) {
        console.log(error.message);
        outputTextCO = error.message;
    }

    document.getElementById(outputIdArea).innerHTML = outputTextArea;
    document.getElementById(outputIdLine).innerHTML = outputTextLine;
    document.getElementById(outputIdCO).innerHTML = outputTextCO;
}
