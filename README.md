# random-password-generator

[Deployment Link](https://khsieh95.github.io/random-password-generator/)

<img width="720" alt="Screen Shot 2021-01-07 at 7 18 32 PM" src="https://user-images.githubusercontent.com/74025123/103959298-2b1d6d80-5104-11eb-8a53-237509ee25c1.png">

<img width="720" alt="Screen Shot 2020-12-10 at 4 45 59 PM" src="https://user-images.githubusercontent.com/74025123/101847306-cae8db00-3b07-11eb-84f2-3862dab70f7f.png">

For this homework assignment, I did my best to layout the structure of the javascript in my head. Here's how it went.

1. I created the initial function that would generate the entire password.
2. Assigned variables with appropriate strings and arrays
3. Created 2 empty arrays
   - One will will populate all possible/chosen characters that the user wants to choose.
   - And the other will generate the actual password from the randomly chosen characters
4. Then set the initial password length = 0, and then a while loop
   - I used a while loop to make sure that if the user input is outside of the 8 to 128 character range, that the prompt would alert them, and stay on the same prompt until the input was valid.
5. Created multiple confirms, asking the user to confirm which type of variables/characters they would like to include in their password.
6. Added if/else statements to all confirms, so that if the user DID NOT, want a specific variable included (special characters), then that array would not populate the empty array mentioned in 3\*.
7. Created a new function that would select the random character within the length of the total array.
8. Added for loop to address user input on the LENGTH of the password that they would like (8-128).
   - Made new variable (randomChar) to reference the new function (mentioned in 7) to populate the userPassword randomly
9. Final return to show the password on the site that has been generated

#### Contact

- khsieh95@gmail.com
- [Github](https://github.com/khsieh95)
- [LinkedIn](https://www.linkedin.com/in/kevinwjhsieh/)
