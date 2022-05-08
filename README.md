# Tauri template with Sveltejs, Typescript, and Tailwindcss  

Everything you need to know to get started.  

---

## Cloning the Template

<br>

Use npx degit to get the template files.
```bash
$ npx degit https://github.com/FearlessIIX/Tauri-Svelte-Typescript-Tailwind%ProjectName
```

---

## Setting up the Project: 

### Getting necessary dependencies

<br>

Now the Template has been cloned, next navigate into your project directory.

From here, run npm install
```bash
$ npm install
```

---

## Setting up the Project: 

### Creating Tauri Project


<br>

After this finshes, all that is left is to initialize your Tauri App. Your previous step should have installed all the necessary dependencies

```bash
$ npm run tauri init
```

It will ask you for a few things, the first two can be whatever you want, since they define only the name of the Project and the Name of the Application that Tauri will create.

However you must keep the default options for the last two.
```
What is your app name?

This can be whatever


What should the window title be?

This can be whatever


Where are your web assets (HTML/CSS/JS) located, relative to the "<current-dir>/src-tauri/tauri-conf.json" file that will be created

Keep the default which will be '../public'


What is the url of your dev server?

Keep the default which will be 'http://localhost:8080'
```

---

## Last step: Linking Tauri to your frontend application

<br>

After this you should have a src-tauri folder in your project files. Navigate into it and open your tauri.conf.json file.

Located in the 'build' property, you will need to change the 'beforeBuildCommand', and 'beforeDevCommand'
```json
{
  "build": {
    "beforeBuildCommand": "npm run build",
    "beforeDevCommand": "npm run dev"
  }
}
```

This tells tauri how to run your frontend application framework, which it needs to do in order to create your Application

---

# Running the Project

For smaller development runs, you can always just use the command

```bash
$ npm run dev
```

This will run Svelte as a Web Application without invoking Tauri to do anything

<br>

When you want to run the Project with Tauri, you can use  

```bash
$ npm run tauri MODE
```
Where MODE is either 'dev' or 'build'

---
# Things to remember
Your first time running both tauri dev and tauri build will be very slow since they have to build and compile all the necessary dependencies. However all subsequent runs will only need to compile your Application.
