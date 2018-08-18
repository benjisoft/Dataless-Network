const codes = require("./trainCodes.json")

function StationToCode(language){
    codes.forEach(function(code){
        if (station == code["Station Name"]){
            return code["CRS Code"]
        }
    })
}

StationToCode("Bracknell")