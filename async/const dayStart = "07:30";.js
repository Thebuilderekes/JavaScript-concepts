const dayStart = "07:30";
      const dayEnd = "17:45";
      function scheduleMeeting(startTime,durationMinutes) {
          var [meetingEndHour , meetingStartHour, meetingStartMinutes, meetingEndMinutes ] =
              startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
          durationMinutes = Number(durationMinutes);
          if (
              typeof meetingStartHour == "string" &&
              typeof meetingStartMinutes == "string"
          ) {
              let durationHours =
                  Math.floor(durationMinutes / 60);
              durationMinutes =
                  durationMinutes - (durationHours * 60);
              let meetingEndHour =
                  Number(meetingStartHour) + durationHours;
              let meetingEndMinutes =
                  Number(meetingStartMinutes) +
                  durationMinutes;
              if (meetingEndMinutes >= 60) {
                  meetingEndHour = meetingEndHour + 1;
                  meetingEndMinutes =
                      meetingEndMinutes - 60;
              }
              
            }

              let meetingStart = `${
                meetingStartHour.padStart(2,"0")
            }:${
                meetingStartMinutes.padStart(2,"0")
            }`;
            let meetingEnd = `${
                String(meetingEndHour).padStart(2,"0")
            }:${
                String(meetingEndMinutes).padStart(2,"0")
            }`;
            
            
            
            
            return (
                meetingStart >= dayStart &&
                meetingEnd <= dayEnd
            );
            
        return false

            
        

        }
        scheduleMeeting("7:00",15);