
var connection = require("../config/connection");

function printQuestionMarks(num){
    var  arr = [];

    for (var i= 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}
   


function objToSql(ob){
    var arr = [];

    for (var key in ob){
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob,key)){
            if (typeof value === "string" && value.indexOf(" ")>= 0 {
                value = " ' " + value + "'";
            }
            arr.push(key + "=" + value);        
        }
    }
    return arr.toString();
}

const orm= {
    all:function(tableInput, callback){
        let queryString= "INSERT INTO" + table;

        queryString += "(";
        queryString += clos.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            callback(result);
        });
        },

        update: function(table, objCalVals, condition, callback){
            let queryString = "UPDATE" + table;
            queryString += " SET ";
            queryString +="WHERE";
            queryString += condition;

            console.log(queryString)
            connection.query(queryString, function(err, result){
                if (err) throw err;
                callback(results);
            });

        },
        delete: function(table, condoiton, callback){

            let: queryString = "DELETE FROM + table ",
            queryString += "WHERE",
            queryString += condition;

            connecction.query(queryString, function(err,result){
                if (err) throw err;
                callback(result);
            });
        }
};

moduel.export = orm;

