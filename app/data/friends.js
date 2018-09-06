// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        Name: "Ahmed",
        Email: "ahmed@example.com",
        Scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
