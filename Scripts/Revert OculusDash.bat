@echo off
echo RUN THIS AS ADMINISTRATOR!

net stop OVRService

del "C:\Program Files\Oculus\Support\oculus-dash\dash\bin\OculusDash.exe"
ren "C:\Program Files\Oculus\Support\oculus-dash\dash\bin\OculusDash.exe.bak" "OculusDash.exe"

net start OVRService

timeout /t 1