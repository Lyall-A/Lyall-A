set bitrate=64B
set filters=volume

set opusSave=%1.opus
set fuckedupSave=%1-fuckedup.mp3

ffmpeg -i %1 -c:a libopus -b:a %bitrate% -filter:a %filters% -map_metadata -1 %opusSave%
ffmpeg -i %1.opus %fuckedupSave% -y

del %opusSave%

call %fuckedupSave%
