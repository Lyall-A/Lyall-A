@echo off
echo Checking if Chocolatey has been installed...
choco -v
if %errorlevel% equ 0 (
    echo Chocolatey is installed! Installing applications

    set attempted=0
    set successful=0

    for /f "tokens=*" %%x in (%0\..\Chocolatey.txt) do (
        echo Installing %%x...
        set /a attempted = attempted + 1
        choco install %%x -y --force
        if %errorlevel% equ 0 (
            set /a successful = successful + 1
            echo %%x: installed successfully
        ) else (
            echo %%x: failed to install
        )
    )

    echo Completed install. %successful% of %attempted% successful!
) else (
    echo Chocolatey not installed!
    start https://chocolatey.org/install#individual
)
pause