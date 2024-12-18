@echo off
setlocal enableextensions enabledelayedexpansion

:: Navigate to the server folder and run the server
cd server
if exist package.json (
    echo Starting server...
    npm run server
    if %errorlevel% neq 0 (
        echo Error running server. Exiting...
        exit /b %errorlevel%
    )
) else (
    echo package.json not found in server folder. Exiting...
    exit /b 1
)

:: Navigate to the client folder and run the client
cd ..\client
if exist package.json (
    echo Starting client...
    npm run dev
    if %errorlevel% neq 0 (
        echo Error running client. Exiting...
        exit /b %errorlevel%
    )
) else (
    echo package.json not found in client folder. Exiting...
    exit /b 1
)

echo Both server and client started successfully.
