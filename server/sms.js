  Meteor.methods({sendMessage: function (smsOptions) {
    this.unblock();
    try {
      var result = HTTP.call("GET", "https://api.smsgh.com/v3/messages/send?",
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


https://api.smsgh.com/v3/messages/send?From=500Apprentices&To=0261096308&Content=Sandy Beauty Salon wants to train interested youth in hair styling, hair braiding, Weave on , Weave Cap, Cutting Of Short Hair , Washing & Touch up, Pedicure , Manicure , Acrylic Nails Lashes and many more. Call Sandys Hair & Beauty Salon On 0546278629 for more info&ClientId=vradbyxu&ClientSecret=ypaolptq


