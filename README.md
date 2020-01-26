<h2>Career portal</h2>

This is a simple software that makes job applications easy and and brings together companies and potential employees.

<h3>GUMP</h3>
I have included gump for validation. Just check gump on github to know how to use it for for all validations.

<h3>Notifyjs</h3>
I have included the notifyjs plugin for all our notifications.

<h3>Database</h3>

Create a database named 'career' and import the database in the database folder

<h3>extra info</h3>

Once a company signs up, they are sent a link to their email so that they can activate their account. I will implemented that because i have done it before. But for clarity, just know that to sign up, all you have to enter is the email and password and then once you activate your account, you will then have to fill your profile.

<h3>Task</h3>
You guys have to work on the company part for now.
  
<h3>Always create a new branch</h3>
Once you complete solving an issue or task, checkout and create a new branch and push to that branch. Never push to the master branch.

<h3>Datatables</h3>
for any tables, we will be using datatables. check out datatables.net

<h3>PrintArea for printing messages</h3>
here is a link to the PrintArea plugin https://github.com/RitsC/PrintArea
<h3>WYSIWYG Editor</h3>
for any textarea, we will be using CKEDITOR. Check out ckeditor.com

<h3>Validations</h3>
for all validations,we will be gump. check out https://github.com/Wixel/GUMP

<h3>CSS and JS</h3>
There is a custom.css and a custom.js files included in the css and js folders respectively. Dont edit the bootstrap css and js files. Never touch them. Incase we ever want to updagrade to a later version of bootstrap, we won't have issues

<h3>why using get.php and post.php</h3>
For all post methods or queries that involve inserting, creating, updating and deleting something on the database, direct all the URL's to the post.php and then reroute them to the correct controller and method. For all get methods or queries that involve retrieving something from the database, direct all the URL's to the get.php and then reroute them to the correct view and method. I know that all this is not neccessary if we were only interacting with the controllers and never with the views. But if we are to use the first MVC model, then there will be no need for views here since Jquery will handle everything involving viewing
