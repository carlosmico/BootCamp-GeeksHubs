var foot = {
    yelp: "ouch",
    kick: () => {
        // that.yelp = "Ouch!"
        console.log(this.yelp);
    }
};
foot.kick();