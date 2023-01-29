
# MEME HUB
This repository contains the MemeHub, an application that allows a user to view
a collection of memes, add their own memes, edit memes currently on the page or 
delete an existing meme. A user can also click on a meme to get a better view of 
it.

## Setup and usage
The application has been deployed on vercel, to use it, just click on this link:
 **https://group-four-meme-dgrlmk8ie-chris-wamae.vercel.app/**
Alternatively, clone this repository into your local machine, move into the repository folder and run  the following commands on your terminal
    **npm install**<br />
    **npm start**<br />

### Development
This application was created using the React library. The main packages used in creating the application are axios and  Browser Router. Context has also been used heavily in providing data to Components throughout the page.

The main components on the page are MemesCollection and MemesDataContext. The first component maps through the array of memes provided by MemesDataContext and passes it
to the other components on the page, allowing all the memes to be rendered on the page 
with the delete and update functionalities.

Adding memes invloves accepting user input, adding that input to an object and adding that object to the array of memes in MemesDataContext

The API used to fetch the original list of memes from the server is the ImageFlip API:
         https://imgflip.com/api

### Authors, Licence and Development Status
Status: Maintained, and is currently in development<br />
Version: v0.1.0<br />
Node Version: 14.17.4 and above<br />
Authors:<br />
Chris Wamae, Faith Kigen, Brian Wambua and Kennedy Maina<br />
License<br />
This project is licensed under the MIT License<br />
