# DCC-LMS
Deployment On Firebase 

### Steps

1.Run `npm install -g firebase-tools` .

2.Run `firebase login` .

3.Create a folder named public and make sure all files are in public folder.

4.Run `firebase init` .

    Then you need to select,

    ? Are you ready to proceed? `Yes`
    ? Which Firebase CLI features do you want to set up for this folder? 
    
    Press Space to select features, then Enter to confirm your choices. 
    
    `Hosting: Configure and deploy Firebase Hosting sites`

    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll just set up a default project.

    ? Please select an option: Use an existing project
    ? Select a default Firebase project for this directory: `library-management-syste-6114 (Library Management System)`
    i  Using project library-management-syste-6114 (Library Management System)

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to be uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? `public`
    ? Configure as a single-page app (rewrite all urls to /index.html)? `No`
    +  Wrote public/404.html
    ? File public/index.html already exists. Overwrite? `No`
    i  Skipping write of public/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...
    i  Writing gitignore file to .gitignore...

    +  Firebase initialization complete!

5.Run `firebase deploy` to deploy on firebase.

Hosting URL: https://library-management-syste-61174.web.app

#### For Login use

Email address : `dcc@gmail.com`

Password : `123456 `
