# 10 Object-Oriented Programming: Team Profile Generator

## Task

To build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

Tests were also written as a way of showing how test-driven coding works.For each class, a test was written.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number



WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu


WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu


WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Submission:

To initiate the program, open the Develop folder on terminal (the folder containing the "index.js" file). Run "node index.js" and the program will start.

Link to walkthrough video: https://drive.google.com/file/d/1UWmVDKKuuqvk_JPxsyaPwb-mX74bS1zF/view?usp=sharing

Link to Sample HTML created (could also be found in the repo): https://github.com/anaeem23/Homework-08--Team-Profile-Generator/blob/master/SAMPLE.html