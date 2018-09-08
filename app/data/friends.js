// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        Name: "Kohaku",
        PicURL: "https://scontent-dfw5-2.cdninstagram.com/vp/30c138afe7e048df7baed6c289846674/5C2CC5A8/t51.2885-15/sh0.08/e35/s640x640/39763917_472570096485602_2504166177828241408_n.jpg",
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
    },
    {
        Name: "Tommy",
        PicURL: "http://i0.wp.com/www.wallpaperfool.com/wp-content/uploads/Movie-0002/Up%20movie%20kid%20Boy%20Scout%20Russell-800x600.jpg",
        Scores: [
            "5",
            "4",
            "4",
            "4",
            "3",
            "5",
            "3",
            "4",
            "5",
            "5"
        ]
    },
    {
        Name: "Brock Samson",
        PicURL: "https://i.kym-cdn.com/photos/images/original/000/408/943/bdd.jpg",
        Scores: [
            "2",
            "3",
            "5",
            "3",
            "5",
            "1",
            "1",
            "1",
            "5",
            "3"
        ]
    },
    {
        Name: "Dr. Venture",
        PicURL: "https://vokrug.tv/pic/person/4/2/5/c/425cab4f04261acbfaee2048157f6c7a.jpeg",
        Scores: [
            "5",
            "4",
            "5",
            "6",
            "3",
            "3",
            "3",
            "3",
            "5",
            "5"
        ]
    },
    {
        Name: "The Monarch",
        PicURL: "http://is2.4chan.org/v/1534930240163.jpg",
        Scores: [
            "2",
            "4",
            "3",
            "3",
            "5",
            "1",
            "1",
            "2",
            "3",
            "1"
        ]
    },
    {
        Name: "Skeletor",
        PicURL: "https://i.ytimg.com/vi/rh6r3trNK54/maxresdefault.jpg",
        Scores: [
            "1",
            "5",
            "5",
            "1",
            "5",
            "1",
            "1",
            "1",
            "3",
            "1"
        ]
    }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
