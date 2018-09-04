'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

exports.handler = function(e, ctx, callback) {

    let parameters = {
        TableName: 'drivers',
        Key: {
            "id": "2"
        }
    };

    // Define the object that will hold the data values returned
    var response = {
        statusCode: 200,
        body: ''
    };

    docClient.get(parameters, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            response["body"] = JSON.stringify(data);
            callback(null, response);
        }
    });
}


// To SCAN REPLACE CODE ABOVE WITH
// let scanningParameters = {
// TableName: 'drivers',
// Limit: 100
// };
// docClient.scan(parameters, function(err, data) {
//     if (err) {
//         callback(err, null);
//     } else {
//         callback(null, data);
//     }
// });