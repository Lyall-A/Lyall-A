@echo off

rem Ask for GitHub username
set /p user=Enter your GitHub username: 
rem Close if no input
if not defined user (
    echo You must enter your GitHub username, exitting
    timeout /t 5
    exit 0
)

rem Ask for repository name
set /p repo=Enter the name of your repository: 
rem Close if no input
if not defined repo (
    echo You must enter the name of your repository
    timeout /t 5
    exit 0
)

rem Setup
echo Git initializing
git init
echo Adding branch main
git branch -m main
echo Adding remote
git remote add origin git@github.com:%user%/%repo%.git

rem Ask for commit message, exit if none
set /p commit=Enter commit message (leave blank to exit) 
if not defined commit exit 0

rem Add, commit and push
echo Adding all files
git add *
echo Committing
git commit -m "%commit%"
echo Pushing
git push -u origin main