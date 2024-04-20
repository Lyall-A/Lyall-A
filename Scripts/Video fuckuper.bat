set audioBitrate=16K
set videoBitrate=64K
set audioFilters=volume
set videoFilters=scale=-2:240

set fuckedupSave=%1-fuckedup.mp4

ffmpeg -i %1 -b:a %audioBitrate% -filter:a %audioFilters% -b:v %videoBitrate% -filter:v %videoFilters% -map_metadata -1 %fuckedupSave% -y

call %fuckedupSave%
