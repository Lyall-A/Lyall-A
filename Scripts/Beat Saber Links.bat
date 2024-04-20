@echo off

set bsPath=C:\Program Files (x86)\Steam\steamapps\common\Beat Saber
set dataPath=C:\Beat Saber\Data

echo Beat Saber Path: %bsPath%
echo Data Path: %dataPath%

pause

mklink /J "%bsPath%\CustomAvatars" "%dataPath%\CustomAvatars"
mklink /J "%bsPath%\CustomMenuSongs" "%dataPath%\CustomMenuSongs"
mklink /J "%bsPath%\CustomNotes" "%dataPath%\CustomNotes"
mklink /J "%bsPath%\CustomPlatforms" "%dataPath%\CustomPlatforms"
mklink /J "%bsPath%\CustomSabers" "%dataPath%\CustomSabers"
mklink /J "%bsPath%\CustomSubRain" "%dataPath%\CustomSubRain"
mklink /J "%bsPath%\CustomWalls" "%dataPath%\CustomWalls"
mklink /J "%bsPath%\Playlists" "%dataPath%\Playlists"
mklink /J "%bsPath%\UserData" "%dataPath%\UserData"

mkdir ".\Beat Saber_Data"

rmdir /S /Q "%bsPath%\Beat Saber_Data\CustomLevels"
mklink /J "%bsPath%\Beat Saber_Data\CustomWIPLevels" "%dataPath%\CustomWIPLevels"
mklink /J "%bsPath%\Beat Saber_Data\CustomLevels" "%dataPath%\CustomLevels"
mklink /J "%bsPath%\Beat Saber_Data\CustomMultiplayerLevels" "%dataPath%\CustomMultiplayerLevels"

pause