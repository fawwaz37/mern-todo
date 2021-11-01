# Installation

Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [VS Code](https://code.visualstudio.com/download) or Any Text Editor

## Cloning this repo
```cmd
> git clone https://github.com/fawwaz37/nodejs-restapi.git
> cd nodejs-restapi
```
Use `code .` to open file in VS Code
```cmd
> code .
```

## Editing the file
Change `.env.example` to `.env` and paste your connection string (Mongodb)

```js
// ex Mongodb Atlas : mongodb+srv:/xxx
mongoDB=
```

## How to Get Mongodb String
You can see in [repo nodejs-restapi](https://github.com/fawwaz37/nodejs-restapi/blob/main/README.md)

## Installing the dependencies

Split your Terminal, Then

<img src="https://i.postimg.cc/Qxftrrbz/split.png" width="700">

```cmd
> cd client
> npm install
```
and
```cmd
> cd server
> npm install
```

## Running App
npm start for both
```cmd
> npm start
```