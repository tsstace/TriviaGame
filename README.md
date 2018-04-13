# TriviaGame

         * 2 actors:  computer and user
         * 4 options for user choice: buttons with answers (A-B-C-D)
         * Counter allows 30 seconds for answer selection; if counter reaches zero, display timeout message
         * OnClick event on buttons triggers validation and increments tallies
         * gameplay continues until user sees all 10 questions
         * display results screen, allow user option to restart

        1. load splash page
        2. wait for onClick event on start button
        3. display first question, begin timer
        4. if button pushed = true, validate selection
              if selection is correct
                      display success message, increment tally
                      continue to next question, reset timer
                      begin timer
              else selection is wrong
                      display fail message, increment tally
                      continue to next question, reset timer
                      begin timer
           else
              if timer counts down to 0
                  display timeout message, continue to next question
        5. check if user has reached the last question
            if question number < 10, repeat question loop
              else
                  display result screen, offer restart option. 
