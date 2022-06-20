# react-library-automation-shola

## Prerequisites
* Stable internet connection
* Download "Git" (https://git-scm.com/downloads) for your operating system and install it
* Download the latest version of "Nodejs" and install it 
* Download the latest version of "Visual Studio Code" ad install it 

## How to run this project
* Open "Git Bash" in a folder where you wish to store this project
* Type
```
git clone "this_repository_url"
```
* Press ENTER
* Now, open the folder with Visual Studio Code
* From top menu, click on Terminal->New Terminal
* Input the following command
```
npm install
```
```
npx cypress run --spec ./cypress/e2e/* --headed --browser=chrome
```
