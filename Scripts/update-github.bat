@echo off

rem Ask for commit message, exit if none
set /p m=Commit message: 
if not defined commit exit 0

rem Add, commit and push
echo Adding all files
git add *
echo Committing
git commit -m "%commit%"
echo Pushing
git push