@echo off
set /p user=Enter your GitHub username: 
if not defined user (
  echo You must enter your GitHub username, exitting
  timeout /t 5
  exit 0
)
set /p repo=Enter the name of your repo: 
if not defined repo (
  echo You must enter the name of your repo
  timeout /t 5
  exit 0
)
echo Git initializing
git init
echo Adding branch main
git branch -m main
echo Adding remote
git remote add origin git@github.com:%user%/%repo%.git
set /p commit=Enter commit message (leave blank to exit) 
if not defined commit exit 0
echo Adding all files
git add *
echo Committing
git commit -m "%commit%"
echo Pushing
git push -u origin main