@echo off
setlocal enableextensions

cls
echo "Help commands"
echo.
echo "USAGE: npm run <cmd>"
echo.
echo "List of commands"
echo.
echo "server: this will start nodejs api server"
echo "start: this will start project as development"
echo "start_prod: this will start project as production"
echo "build: this will build the project as production"
echo "start_all: this will start all full stack of project as development (api included)"
echo "start_all_p: this will start all full stack of project as production (api included)"
echo "build_all: this will start nodejs api server and building project as development"
echo "rem_dist: this will remove dist (distribution) folder generated by build cmd"
echo "rem_dist_n_do_build: this will remove dist (distribution) folder and generate a new one"
echo "rem_n_ins_nm: this will remove node_modules folder and package-lock file and it will installing the packages following through package.json"
echo "verify_cache: this will verify all cache in this project"
echo "clear_cache: this will clear all cache in this project"
echo "all_cache: this will verify and clear all cache in this project and also, it does remove node_modules folder and package-lock file"
echo "myinstall: this will remove all cache and installing packages providing by package.json"
echo "help: this will display all commands list"
echo "test: this shows testing message of project"
echo.

@REM pause
exit /b %errorlevel%
endlocal