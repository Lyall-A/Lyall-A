# [Installing Windows (Lyall's way)](https://www.microsoft.com/software-download/windows11)

## These instructions are for the setup process
* Set name as `Lyall`
* Set computer name as `Lyalls-<device>` (eg. `Lyalls-PC`, `Lyalls-Laptop`)
* Set Microsoft email as `no@thankyou.com` and password as anything
* Reject all privacy/telemetry settings

## These instructions are for **after** you have installed Windows
* Activate Windows
* Download [this](https://github.com/Lyall-A/Lyall-A/archive/refs/heads/main.zip)
* Extract to Desktop
* Install [Chocolatey](https://chocolatey.org/install#individual)
  * Or run `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))` in PowerShell with administrator
* Open the extracted folder and go to `Lyall-A-main > Scripts`
* Run `Enable Windows highest mode(.bat)` as administrator
* Run `Chocolatey script(.bat)` as administrator
  * Wait for the script to finish installing everything. Manually install anything that failed
* Run `SpotX auto-install(.bat)` as administrator
* Set [settings](#settings)
* Set [application settings](#application-settings)
* Delete downloaded ZIP file and extracted folder

## Settings
* **System**:
  * **Clipboard**:
    * Clipboard history: `On`
  * **Notifications**:
    * **Turn on do not disturb automatically**:
      * When duplicating your display (priority notification banners are also hidden): `No`
      * When playing a game: `No`
      * When using an app in full-screen mode (priority notifaction banners are also hidden): `No`
      * For the first hour after a Windows feature update: `No`
  * **Sound**:
    * **Output**:
      * Choose where to play sound: `Voicemeeter VAIO3 Input`
    * **Input**:
      * Choose a device for speaking or recording: `Voicemeeter Out B1`
* **Mouse > Additional mouse settings**:
  * **Pointer Options (other window) > Motion**:
    * Enhance pointer precision: `Off`
* **Personalisation**:
  * **Colours**:
    * Choose your mode: `Dark`
  * **Start**:
    * Show recently added apps: `On`
    * Show the most used apps: `On`
    * Show recently opened items in Start, Jump Lists, and File Explorer: `Off`
    * Show recommendations for tips, shortcuts, new apps, and more: `Off`
    * **Folders**:
      * Settings: `On`
      * File Explorer: `On`
      * Documents: `On`
      * Downloads: `On`
      * Music: `On`
      * Pictures: `On`
      * Videos: `On`
      * Network: `Off`
      * Personal folder: `Off`
  * **Taskbar**:
    * **Taskbar items**:
      * Search: `Search box`
      * Copilot (preview): `Off`
      * Task view: `Off`
      * Widgets: `On`
    * **Taskbar behaviours**:
      * Taskbar alignment: `Left`
      * Select the far corner of the taskbar to show the desktop: `Checked`

## Application Settings
* **File Explorer**:
  * **View > Show**:
    * Item check boxes: `Unchecked`
    * File name extensions: `Checked`
    * Hidden items: `Checked`
  * **Options**:
    * **General**:
      * Open File Explorer to: `Home`
      * **Privacy**:
        * Show recently used files: `Unchecked`
        * Show frequently used folders: `Unchecked`
        * Show files from Office.com: `Unchecked`
    * **View**:
      * **Advanced settings**:
        * **Files and Folders**:
          * Hidden files and folders: `Show hidden files, folders and drives`
        * Hide empty drives: `Unchecked`
        * Hide extensions for known file types: `Unchecked`
* **Winaero Tweaker**:
  * **File > Import/Export Tweaks > Import tweaks from a file > Next > Browse**:
    * Select Winaero Tweaker config from extracted folder at `Lyall-A-main > Configs > Winaero Tweaker (<date>).ini`
  * Next > Finish
* **Voicemeeter**:
  * **Menu**:
    * Auto Restart Audio Engine (A1 Device): `Checked`
    * System Tray: `Checked`
    * Run on Windows Startup: `Checked`
    * Show Contextual Help In Caption: `Checked`
    * **Load Settings...**:
      * Select Voicemeeter config from extracted folder at `Lyall-A-main > Configs > Voicemeeter [<device>] (<date>).xml`
* **Macro Buttons**:
  * System Tray (Close = Hide): `Checked`
  * Run on Windows Startup: `Checked`
  * Store Last Buttons State: `Checked`
  * **Load Button Map**:
    * Select Macro Buttons config from extracted folder at `Lyall-A-main > Configs > Macro Buttons [<device>] (<date>).xml`
* **Brave**:
  * **Sync**:
    * **Start using sync > I have a Sync Code**:
      * Enter sync code
    * **Manage your synced devices**:
      * Sync Settings: `Sync everything`
  * **Get started**:
    * On start-up: `Open the New Tab page`
  * **Appearance > Toolbar**:
    * Show Home button: `Off`
    * Show bookmarks button: `On`
    * Show bookmarks bar: `Always`
    * Show Brave News button: `Off`
    * Show Brave Rewards button: `Off`
    * Show Brave Wallet button: `Off`
    * Show sidebar button: `Off`
    * Show VPN button: `Off`
    * Show autocomplete suggestions in address bar: `Off`
    * Use wide address bar: `On`
    * Always show full URLs: `On`
  * **Autofill and password**:
    * Allow auto-fill in private windows: `Off`
  * **Downloads**:
    * Ask where to save each file before downloading: `Off`
  * **Help tips**:
    * Show Wayback Machine prompt on 404 pages: `Off`
    * Warn me before closing window with multiple tabs: `Off`
  * **Customize (New Tab)**:
    * **Background Image**:
      * Show background images: `Off`
    * **Brave Stats**:
      * Show Brave Stats: `Off`
    * **Top Sites**:
      * Favourites: `Checked`
    * **Cards**:
      * Cards: `Off`
  * **Extensions**:
    * **Pinned**:
      * Shazam
      * SponsorBlock
      * Violentmonkey
      * uBlock Origin
    * **Violentmonkey**:
      * Import the `YouTube Player Controls` script from extracted folder at `Lyall-A main > Scripts > YouTube Player Controls.js`
* **Rainmeter**:
  * Copy the `Mond` folder from extracted folder at `Lyall-A main > Other > Rainmeter Skins` to `Documents\Rainmeter\Skins`
  * Replace `%appdata%\Roaming\Rainmeter\Rainmeter.ini` with the `Rainmeter (<date>).ini` file from extracted folder at `Lyall-A main > Configs` (rename to `Rainmeter.ini`)

## Other applications not yet added to [Application Settings](#application-settings):
* OBS Studio
* Discord (Vencord)
* Wallpaper Engine
* TranslucentTB
* ModernFlyouts
* ShareX
* Logitech G HUB
* OpenRGB
* The rest should be as simple as signing in (hopefully)