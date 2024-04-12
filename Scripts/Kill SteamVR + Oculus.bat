@echo off
echo RUN THIS AS ADMINISTRATOR!

taskkill /F /IM "vrmonitor.exe"
taskkill /F /IM "OculusDash.exe"
net stop OVRService

timeout /t 1