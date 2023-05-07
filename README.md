
# 1 Create project 
![](img/new-angular-project.png)
![](img/new-angular-project2.png)
Create new branch  'jwt-mami-ui' from master 
![](img/new-branch-jwt-ui.png)

# 2 NPM Install bootstrap anf jquery
![](img/install-bootstrap-jquery-1.png)
![](img/install-bootstrap-jquery-2.png)
Once this installation is done we have to configure angular.json file
![](img/add-config-angular-json-file.png)
Now we have to open app.component.html file and remove everything,
and inside it write our simple implementation;
![](img/app-component-html-1.png)
![](img/app-component-html-2.png)
![](img/ng-serve.png)
![](img/app-running.png)

# 3 Create components
Home component
![](img/ng-g-c-home-1.png)
![](img/ng-g-c-home-2.png)
As well we have to create admin , user , header , login ...
![](img/created-components.png)
Now we have created our required components 

# 4 Create services and auth folders

Inside app folder we will create __services_ folder
and __auth_ folder 
![](img/services-and-auth-new-folders.png)

# 5 Insert into header.component.hml code from bootstrap
![](img/nav-bar-from-bootstarp.png)
- go to header.component.ts file and copy 'app-header' selector
![](img/header-component-ts-file.png)
- go to app.component.html file
- ![](img/app-component-html-file.png)
And now after running the app we have 
![](img/app-running-nav-bar.png)
- Edit header.component.html file . Remove and rename some elements

# 6 Configure the paths  and editing home , admin and user html files
File app-module-ts
![](img/app-module-ts.png)
Make changes in the header-component-html file
![](img/header-component-html-1.png)
![](img/header-component-html-2.png)

Now when we click, we have appropriate component in the view 
![](img/user-works.png)

# 7 Create form for login 
![](img/login-component-html.png)
![](img/app-module-ts-2.png)
![](img/login-component-ts.png)
![](img/login-component-ts-2.png)
![](img/form-submitted-1.png)

# 8 Communication with the backend
For this we have to create the services
Back to the terminal , inside __services_ folder
![](img/create-services-user.png)
![](img/create-services-user-2.png)
After creating the service , we open app.module.ts file
![](img/app-module-ts-import-http.png)
Now we have to open user.service.ts
And edit it
![](img/user-service-ts.png)

Now we have to inject user-service in login-component
![](img/inject-user-service-login-comp.png)

We have back end spring boot running . 
Remember when we run spring boot application we have 
a default admin-role-user is created by default 
login  - admin77
password - admin@password77
![](img/response-from-ui-1.png)

# 9 Using Local Storage
[Article](https://blog.jscrambler.com/working-with-angular-local-storage)

We generate a new service 
![](img/generate-user-auth-service.png)
This service will be responsible to communicate
with local storage

Inside app.module.ts we have to import RouterModule
![](img/app-module-import-router-module.png)

Editing user-auth.service.ts 
We have to save the roles and save the token as well ...
![](img/user-auth-service.ts.png)

Inject new service in login.component.ts file
![](img/login-component-ts-inject-user-auth.png)
When we run the app with the backend
![](img/running-app-1.png)

Make changes to login() function in login.component.ts file
![](img/running-app-2.png)
Abd so on 
![](img/running-app-3.png)
Write some logic , if when the logger is admin, then 
route to admin , else to user;
![](img/login-component-ts-1.png)

# 10 Write logic for Login and Logout
We open the header.component.ts file 
![](img/header-component-ts-1.png)
File header.component.html, using directive *ngIf 
![](img/header-component-html-3.png)
Add logOut()
![](img/header-component-ts-2.png)
Edit header.component.html file -> add logOut() call
to click event 
![](img/header-component-html-4.png)

