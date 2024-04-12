@echo off
echo RUN THIS AS ADMINISTRATOR!

net stop OVRService

ren "C:\Program Files\Oculus\Support\oculus-dash\dash\bin\OculusDash.exe" "OculusDash.exe.bak"
curl -o "C:\Program Files\Oculus\Support\oculus-dash\dash\bin\OculusDash.exe" -L https://github.com/BunniKaitlyn/OculusKiller/releases/download/v1.2.0/OculusDash.exe

net start OVRService

timeout /t 1