## Hyperlink Gallery

Work on this after you have completed the Coding Foundation Exercise.

![gallery](hg.gif)

ABC maintains its own gallery, the Hyperlink Gallery; this is its [front door](https://abc.leoneckert.com/hyperlink-gallery). This week, you will move into one of the gallery's rooms and prepare it to share your work there throughout the semester.

#### How to move in?
First, you need to create a room on the web. You should do this within your repository. Your repository is already online using GitHub Pages, so all it takes to create a room (a webpage, I mean), is to create a new folder and populate it with a `index.html` file. I suggest this structure:

```
abc-student-repo
├── projects
│   ├── coding-foundation
│   ├── test-page   
│   └── ...
│
├── your-name-room   <---- create this folder with a better name :)   
│   ├── index.html   <---- and this file   
│   └── ...          <---- and more   
│
└── ...
```

Once you push these changes to your remote GitHub repository, you can find the new page online, copy the link, and  use it to fill out this [spreadsheet](TBD), in the name column, put any name you want to appear on the [Hyperlink Gallery](https://abc.leoneckert.com/hyperlink-gallery) page.

#### What to put into my room?
It's your room! Your main task is to personalize it and make it your own; make it unique and represent you as a creative being.

##### Must-have content
You will work on 10 projects this semester. They don't exist yet, but we already know they will; in your room, create placeholders with empty links. As you produce the work this semester, you can fix those links one by one. Your need placeholders for:
- three larger projects (e.g. "Project A", "Project B", "Project C")
- seven smaller projects (e.g. "Mini Project #1", "Mini Project #2", ...)
- Once you are done coding (or before you start, your choice), please include the following code-snippet at the very top of your page:
  ```
  <!-- Hyperlink Gallery Banner -->
  <div style="position:fixed;width:100%;top:0;left:0;z-index:5;background-color:white;font-family:sans-serif;border:5px solid black;display:flex;justify-content:space-between;align-items:center;padding:0 20px;box-sizing:border-box;font-weight:bold;"><p style="margin:4px 0;margin-right:10px;font-weight:normal"><a style="color:black;font-size:0.9em;" href="https://abc.leoneckert.com/hyperlink-gallery"><< Lobby</a></p><span>H</span><span>y</span><span>p</span><span>e</span><span>r</span><span>l</span><span>i</span><span>n</span><span>k</span><span> </span><span>G</span><span>a</span><span>l</span><span>l</span><span>e</span><span>r</span><span>y</span><p style="margin:4px 0;margin-left:10px;font-weight:normal"><a style="color:black;font-size:0.9em;" href="https://abc.leoneckert.com/random-artist">random >></a></p></div>
  ```
  I recommend to place it at the very top of you `<body>` tag, right here:
  ```
  <html>
    <head>
      [...]
    </head>
    <body>
      ... <-----ADD THE SNIPPET RIGHT HERE!

      [your html code is here]
    </body>
  </html>
  ```
  The snippet will add a slim, unobtrusive banner to your page from where a visitor can choose to go back to the Hyperlink Gallery starting page ("Lobby") or get to a random other room (one by your classmates). 👍 Let me know if this does not work for some reason :)

Aside this, you can include anyth̨ing you want. Your name, of course, a bio? a poem? something visual? Think of it as your room in an online gallery.

##### Words of advice
Your room will change throughout the semester, you will learn new tricks and want to tweak, add, remove parts of your design of the room. That is fine, even expected. It is necessary (and relevant to grading) however that you think about your choices at this point already. The focus should be primarily on the visual design, then on the technical execution. The room itself must not be an artwork. It is a platform on which to present your art.

##### An example

Here is [my room](https://leoneckert.github.io/abc-f20/hyperlink-gallery/leon-room/)*, it's very boring. Visitors will turn around on the doorstep and head for your room instead :) Make them feel welcome, and enjoy their stay. My room uses HTML and CSS only, I encourage you to include some JavaScript in yours for a more interesting experience.

*note that the "3D" effect in my room is achieved by just a single image in the background. It's not real. Feel free to experiment with similar tricks and illusions :)
