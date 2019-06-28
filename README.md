# Dragndrop



## Functionality

There is a main fail call index.html that when it’s running we can get access to the app.

You can click one of four different games.

![games](img/games.png)

When you click there is a script that will be executed.

That script transform yml files in Json files and with this Json files the application extract the images, background, position and the right position that you need to put for ‘win’ the game.


## Yaml Files

In these files is the necessary information to create the game.

This file needs:
	
- Background image
- Name of the part of the aircraft
- Figures 
![figures](img/figures.png)
    - Figure
    - Img
    - Order

- Divs 
![divs](img/divs.png)
    - Div
    - Id
    - Top
    - Left
    - Order
    - Order2 (Optional)


## JavaScript Files

### Ymltojson.js

Its function is transform yml format in json format executed this command
    
- node ymltojson.js file.yml

### Main.js

This file content all the logic.

It has 2 functions:

- Reset game

	Clear all divs and remove all classes and then create new divs that it extracts from the json file.

- Score game

	First at all check if you have putted all the figures into the divs and if you have done this then 	check  which ones are right and which ones are wrong.

