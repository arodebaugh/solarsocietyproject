# Documentation for CCI Site template

Eventually wouldn't be a bad idea to make video tutorials.

## Tools used:

1. React (https://reactjs.org/): Component based web UI library.
2. Gatsby (https://gatsbyjs.com/): Generates static sites from React.
3. TailwindCSS (https://tailwindcss.com/): CSS in HTML library

## Why use those tools?

1. Reusable: We can create a bunch of reusable components which make editing the site and changing things around fast/easy.
2. Speed: I am not loosing any noticable speed compared to normal HTML5. Does a lot of optiizations and removes any unused code/variables automatically.
3. Accesibility/SEO: Forces usage of Accesibility/SEO standards and gives hints to improve.
4. Live reload: Output automatically generates as code is updated. Which is super handy.
5. Easier to standardize: I rarely have to worry about something not working/looking different on other browsers.

## How to build:

1. Make sure Node.js is installed on device. Learn more at: https://nodejs.org/en/
2. Install Gatsby by running `npm install -g gatsby-cli` (does not really matter what directory you run this in)
3. Run `npm install` inside the main directory.
4. Run `gatsby build` inside the main directory. The website will generate in /public move those files wherever your site will be hosted.
5. OPTIONAL To run a live updating test at any time run `gatsby develop` inside the main directory.

More detailed tutorial (ignore the part where you generate a new project): https://www.gatsbyjs.com/docs/tutorial/part-zero/ 

Official Gatsby deploy guide: https://www.gatsbyjs.com/docs/deploying-and-hosting/

## Components

### Header

Located: src/components/header.js

```
import Header from "../components/header"
<Header></Header>
```

Shows a defualt Drexel CCI header. No customization updates yet.

### Footer

Located: src/components/footer.js

```
import Footer from "../components/footer"
<Footer></Footer>
```

Shows a defualt Drexel CCI footer. No customization updates yet.

### Profile

Located: src/components/profile.js

```
import Profile from "../components/profile"
<Profile 
  profileImage
  professorName
  occupation
  college
  collegeLink
  addressLink
  addressLine1
  addressLine2 
  office
  phoneLink
  phone
  fax
  emailLink
  email>
</Profile>
```

Shows a simple profile with the information provided in properties.

### Information

Located: src/components/information.js

```
import Information from "../components/information"
<Information></Information>
```

Displays page slider for professor information. Includes a header with the ability to change views (that saves as a parameter in URL for easy sharing) and the content areas.
Each view is represented in a seperate component file.

Creating a new view:

1. Create a seperate component with it's own file. Import that component in information.js
2. In the `Constructer` make a new line abouve the `this.state` line in this format `this.handle[view name one word]Click = this.handle[view name one word]Click.bind(this);`.
3. In the function `componentDidMount` add this `else if` statement in the chain of `else if`s:

```
else if (page === "[view name one word]") {
  this.setState({page: "[view name one word]"});
}
```

4. After the `setPage` function create a new function in this format:

```
handle[view name one word]Click() {
    this.setPage("[view name one word]");
  }
```

5. In the function `render` create an `else if` statement in the chain of `else if`s.

```
 else if (page === "[view name one word]") {
      header = (
        // See step 6 for what to put here
      );
      
      body = <[view name one word]></[view name one word]>
    }
```

6. This part for maaking the header is based on all your views and you will need to change this based on all views:

A selected header button looks like this:

`<button class="border-b-4 border-drexel-yellow mx-4 text-drexel-blue focus:outline-none">[view name]</button>`

An unselected header button looks like this:

`<button class="hover:underline mx-4 text-drexel-blue focus:outline-none" onClick={this.handle[view name one word]Click}>[view name]</button>`

Make sure for every view that is not the view you are creating you are butting an unselected header button in the same place. For the view make sure it has the same
Header code but with the selected header button in it.

Todo: Make this a little more clear or a visual representastion.

### PeopleCard

Located: src/components/people-card.js

```
import PeopleCard from "../components/people-card"
<PeopleCard
  profileImage
  professorName
  professorDescription
  description
  mailLink
  websiteLink
  twitterLink>
</PeopleCard>
```

This is a responsive card for displaying people and basic information for them.

## Views

These are the one's I created specifically for Ellen Bass but may be found useful.

### ResearchInterests

Located: src/views/research-interestsjs

```
import ResearchInterests from "../views/research-interests"
<ResearchInterests></ResearchInterests>
```

This view contains paragraphs talking about Research Interests.

### Classes

Located: src/views/classes.js

```
import Classes from "../views/classes"
<Classes></Classes>
```

Shows and link's to classes the professor teaches.

### People

Located: src/views/people.js

```
import People from "../views/people"
<People></People>
```

Contains `PeopleCard`s to show people that the professor has worked with.

### Projects

Located: src/views/projects.js

```
import Projects from "../views/projects"
<Projects></Projects>
```

Shows information and links for projects the professor has worked with.

### Publications

Located: src/views/publications.js

```
import Projects from "../views/publications"
<Publications></Publications>
```

Shows downloads and links for publications the professor has worked on.

# Conclusion

Hopefully this is comprehensive enough to be able to set up your own site.

Contact information if further help is requested:

Name: Andrew Rodebaugh

Email: ajr439@drexel.edu
