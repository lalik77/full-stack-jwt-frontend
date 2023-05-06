
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
