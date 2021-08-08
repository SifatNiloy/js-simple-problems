function bestFriend(myFriends) {
    let longName = myFriends[0];
    for (var friend of myFriends) {
        if (friend.length > longName.length) {
            longName = friend;

        }
    }
    console.log(longName);
}

bestFriend(["shamim", "pritom", "fahim faisal", "noyon", "numan", "sojibur"]);