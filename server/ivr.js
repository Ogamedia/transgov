Meteor.methods({
    send_voice_message: function (ivr_options) {
        // ...
        this.unblock();

        try {
            var makeCall = HTTP.call("POST", "https://go.votomobile.org/api/v1/outgoing_calls", 
            {
            params:
            {
            // Temporary API key to showcase demo: belongs to the Ogamedia Foundation.
              api_key: "9338dd333cdef2c70eae6228a",
              tree_id: 1376,
              send_to_phones: ivr_options.phone_number,
              sms_sender_id: "transgov"
            }
          });
        } catch (e) {
            console.log(e)  
            return false
        }
    }

});