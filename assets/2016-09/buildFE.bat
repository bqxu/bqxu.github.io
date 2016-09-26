@echo off
set nowpath=%cd%

set webapp=%nowpath%\src\main\webapp


cd "%webapp%"

call npm run build

echo "gulp build success"

if exist "%webapp%\resources\scripts" ( rd /S /Q "%webapp%\resources\scripts")

if exist "%webapp%\resources\styles" ( rd /S /Q "%webapp%\resources\styles")


move  "%webapp%\dist\resources\scripts" "%webapp%\resources\"


move  "%webapp%\dist\resources\styles" "%webapp%\resources\"

copy /y  "%webapp%\dist\index.html" "%webapp%\index1.html"

cd %nowpath%

