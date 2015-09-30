  Meteor.methods({sendMessage: function (smsOptions) {
    this.unblock();
    try {
      var result = HTTP.call("GET", "https://api.smsgh.com/v3/messages/send?",
        
    // Temporary API key to showcase demo: Code belongs to the Ogamedia Foundation.  
       {
        params:
        {
          From: smsOptions.From,
          To: smsOptions.phone,
          Content: smsOptions.contents,
          ClientId: "vradbyxu",
          ClientSecret: "ypaolptq",
          RegisteredDelivery: true,
        }
      }
      );
      return true;
    } catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
    console.log(e);
    return false;
  }
}
});

