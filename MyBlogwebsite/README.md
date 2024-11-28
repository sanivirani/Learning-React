# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ----------------- MyOwn Project ----------------- //

Functionalitiy : basic blog website  
{
sign up / sign in / log in / log out

}

# react is a - front end library

-- most of time react uses is API handling time back end send request

## ----- issues (complex ) -----

how to handle image , upload , preview , optimization , text editor, bold , italic etc.. , create list , how to save back end and back end to data how to display

## sensetive database url database id how to save value

## -- use services --

# appwrite - complete back end services ( open source )

# use react components : Tiny MCE

- use to reach text editor

# article data store in html

- React hook form . use manage error

slug is no spaces

# ------ dependencies ------/

- redux/toolkit , redux
- react-router-dom
- appwrite for backend support
- tinymce - react for rich formating tool
- html-react-parser for html
- react-hook-form

## ------- create app diffrence react / vite / next.js

## ---- set up Environments variables ------//

- system variable

- REACT_APP_APPWRITE_URL ="test environments"

create .env file and put environments variables
.env file is a ignore meance dont't send enviroments variables in send in server

- in .env file called sample file personal values

# ------- React through --------------/

- React setup environments variables

- .env file
  REACT_APP_NOT_APPWRITE_URL="test environments" ,"any value"

# consol.log(process.env.REACT_APP_NOT_APPWRITE)

# ------- Vite though ---------------/

prevent accidenentally leaking env variables to the clint so prefixed with

- .env file
  --- VITE_APPWRITE_URL ----

# consol.log(import.meta.env.VITE_SOME_KEY) // 123

- consol.log(impoet.meta.env.DB_PASSWORD) // undefined no access

## ------------------ imporntant files in .env file ------------- //

VITE_APPWRITE-URL
VITE-APPWRITE-PROJECT-ID
VITE-APPWRITE-DATABASE-ID
VITE-APPWRITE-COLLECTION-ID
VITE-APPWRITE-BUCKET-ID

# -------------- production grade -------------------- //

## --- every time not export in console.log so... ---- //

make a new folder in src name whatever -- conf -> conf.js -----

const conf = {
appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), // appwriteUrl always string value
appwrieProjectId: String(import.meta.env.PROJECT_ID),
appwriteDataBaseId: String(import.meta.env.DATABASE_ID),
appwriteCollectionId: String(import.meta.env.COLLECTION_ID),
appwriteBuketId: String(import.meta.env.BUCKET_ID),
};

export default conf;

# ---------------------------------------------------------//
