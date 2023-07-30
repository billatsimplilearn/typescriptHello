//"function" <functionName> (<functionParams>) ( : <return type> )
function printState(v) {
    if (v.issuedState !== undefined) {
        console.log(v.issuedState);
    }
    else if (v.state !== undefined) {
        console.log(v.state);
    }
    else if (v.startte !== undefined) {
        console.log(v.startte);
    }
}
var dl = {
    "issuedState": "Pennsylvania",
    "driversLicenseNumber": "99 999 999",
    "lastName": "Sample",
    "firstName": "Andrew Jason",
    "address": {
        "street1": "123 Main Street",
        "street2": "Apt. 1",
        "city": "Harrisburg",
        "state": "PA",
        "zip": "17101-0000"
    },
    "organDonor": true,
    "dups": "00"
};
var dl2 = {
    "state": "Ohio",
    "dlNumber": "121234 434",
    "LastName": "Smith",
    "first_name": "Anna",
    "addr": {
        "s1": "123 Easy  St",
        "s2": "Apt. 2",
        "s3": "all wrong",
        "city": "Columbus",
        "state": "Ohio",
        "zip": 90210
    }
};
