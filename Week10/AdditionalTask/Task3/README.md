Enhance the login form submission process from last week by implementing a countdown timer that allows users to confirm their login action. Once the user clicks the "Login" button, a countdown timer should be displayed below the form, indicating when the session will start. When the countdown reaches zero, a callback function should be invoked to handle the form submission process. 

To achieve this:
1. Write a function startSubmissionCountdown that:
 ~ Accepts a duration (in seconds) and a callback function as parameters.
 ~ Uses setInterval to decrement the countdown every second and dynamically displays the remaining time on the form page.
2. On completion of the countdown:
 ~ Automatically invoke the provided callback function to proceed with login actions, such as showing session information or redirecting the user.
3. Display the session information in a modal (if applicable) and include a "Start Session" button to finalize the login process and redirect the user to the next page.