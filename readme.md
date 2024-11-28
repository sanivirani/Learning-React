# //--------- Road Map ------------// #

# why to learn react

- build ul
- makes easy to manage & build complex front end

# interview que.. - create complex front end

# when should i learn react ?

- after mastering JS
- most project don't need react in initial phase

# why react was creacted ?

- (fantom)Ghost message problem
- no conssistency in ui

state (variable) -> JS & UI -> DOM

# first time use react in website

- khan acedemy
- unsplash

# don't learn react if

- you don't know how JS works OR DOM works [browser inner working video]

# react learning procees

2 type

[1] go in depth

babel,fiber,virtual DOM, diff algo, hydration

[2] by making projects (one topic at a time)

Todo,calculator,Github API

# react is a libaray

framework VS library

react is library

web on - react

build mobile app - react native

## react utility is famous but bulkey big bunddle size not usefull

alterneative famous utility is [ vite @ parsle ]

## topic to learn

- core of react [state,or UI manipulation,JSK]
- component Re-usability
- reusing of component (props)[propeties- key or values]
- how to propagate change (hooks)

# additional addon to react

- Router (react don't have router)
- state managemet (react don't have state mangement)
  => Redux,Reduc toolkit,Zustand,context API

- class based component
  => legacy code

BAAS apps [Backend As A Service] (appwrite,firebase,superbase)

- social media clone, e-commerce app....

# open source

-free product api [freeApi.app]

### After React

- react is not a comolete solution in most case
  => no seo , browser render of JS , no routing
- Framework
  => Next JS, Gatsby , Remix

- next js provide frontend and backend

## UI updation is react control

react fiber algoridham (vrtual dom update)

## react most interview question on counter

const addValue = () => {
// counter = counter + 1;
setCounter((precounter) => precounter + 1);
setCounter((precounter) => precounter + 1);
setCounter((precounter) => precounter + 1);
setCounter((precounter) => precounter + 1);
}

## context API is only stand for => react

# ---------- Redux --------------/

## outside => stateManagement => Redux

## Redux use in react => react-Redux

## new Redux-toolkit(rtk)

# Redux is indepentent state mangement library

main problem is a stateManagment

both of an Redux and Rtk

store , reducers are object
useSelector , useDispatch

# ----------- use Redux ----------------- /

# ---- path is own way to create ---/

src -> app -> store.js

first configure store : import {configureStore} from '@reduxjs/toolkit'

use this method to use
export const store = configureStore({});

new folder to create slice file whatwerr name to but remeber to use redux that way
import { createSlice,nanoid } from "@reduxjs/toolkit";

\_ nanoid is create uniqe ids

create instialState basically you can create array or objects

## ----- remember two value acsess

redusers : {
name : (state,action) => {}
}

## never muted your state

-- Redux -- steps.

start {

create store
add reducer
create slice
exoprt reducer

}

## features call Slice whatever you called -- /

# ------ forwardref hook -----/

ex . creating login form in input field is diffrent and same input field use in username and password so hear is --- login page and his state refrence --- is needed so useful forward hook .
