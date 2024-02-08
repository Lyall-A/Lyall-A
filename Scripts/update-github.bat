@echo off
set /p m=Commit message: 
if not defined m set "m=Commit"
git add *
git commit -m "%m%"
git push -u origin main
