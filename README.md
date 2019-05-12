# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

This is a test for GitKracken... Y'all have a good day now
Yo... I think I understand this Kracken-Vibe


* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Dev branch
* ... 


# RAILS PROJECT APP - DevMarket

1. Link to [published app on Heroku](https://aqueous-atoll-23921.herokuapp.com/)
2. Link to [Github Repo](https://github.com/ABaulderstone/rails_assesment.git).
   
##1. What is the need (i.e. challenge) that you will be addressing in your project?

We would like to build an exclusive marketplace that sell vinyl records. 

Create a premium shopping experience that differentiate us from Amazon. As vinyl records are usually associated with high value and premium product., thus our website will offer functionality and user interface that offer the premium shopping experience.

Build a marketplace that differentiate us from Discoqs.com (exciting music marketplace). Differentiating points are:

Easy to upload and sell your own records
Remove unnecessarily information
Create a more community sense, exclusively for individual (no retailers)
Tail/Personalise information to the users (filter options)
Show records according to users’ past purchase records or likes
Sort by most wanted records
Sort by suggestions
Show relevant music news feed


##2. Identify the problem you’re trying to solve by building this particular marketplace App? Why is it a problem that needs solving?


##3.Describe the project will you be conducting and how. your App will address the needs.



**Describe the network infrastructure the App may be based on.**
Rails has its own webserver - Puma, which was built for speed and provides a concurrent HTTP 1.1 server. 

The network infrastructure for our app will be hosted on Heroku. We deployed into Heroku using Git. We are using Heroku Postgres which is a managed SQL database.

Heroku is a cloud based Platform-as-a-Service and is fully managed looking after aspects like server configuration, network management and database versioning. The service also manages DNS.

Heroku runs our app inside a dyno (i.e. a smart Linux container) by packaging our app's code and dependencies into this container. These containers are typically run on a shared host, but are completely isolated from each other. Dynos allow for scalability.

Heroku allows for multiple languages and ensures that the language stacks are monitored, and upgraded, so it's always up-to-date.

Static and user uploaded images will be hosted on Amazon S3. Amazon S3 is a cloud storage solution. It is used widely in industry, is highly reliable, and highly scalable to meet any feature demands.

**Identify and describe the software to be used in your App.**

Ruby on rails 
Ruby on Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages. The team embraced the concept of convention over configuration and leveraged the “rails magic” to the fullest extent of our knowledge. Only very small adjustments were made to the stock ruby on rails platform e.g. using the PostgresQL database.

Javascript
JavaScript, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. JavaScript was used for the interaction with the “Buy button” in order to redirect the user to Stripe checkout. JavaScript was also used for the hamburger menu in the navigation bar. 

SCSS
Sassy CSS or SCSS was used the style the application. An SCSS file was auto-generated when setting up the the initial ruby on rails application. Several other SCSS files were used to target different views (e.g. the show view for listings will have its own SCSS file).

Trello and Google sheets
Trello and google sheets were used concurrently for project management. Major features were tracked via Trello. Bug fixes and minor edits were logged on the google sheets log bog. Finally google sheets was used again for a project management gantt chart in order to track the projects progress. 

Slack
Slack is a messaging app used for communication. Slack was largely used after hours or to send updates when team members we out of the room. Communication for the most part was done face to face as the team members agreed to be present from 9:00-17:00 on weekdays. 

Amazon S3
Amazon Simple Storage Service is offered by Amazon Web Services which provides object storage through a web service interface. Amazon S3 was used In order to avoid storing images locally. Local storage has several shortcomings including the machine to be constantly running and the finite nature of the hard drive. Amazon S3 elegantly takes care of both problems by leveraging cloud storage. 
Amazon S3 was used because it is cost effective,  secure, always available, simple to use and easy to manage. 
Instead of the fixed price of physical local hard drive, you are only charged for the amount of space occupying the cloud storage. This makes the price of the storage dynamic and significantly more cost effective than local storage. The price is also cheaper than other cloud storage options. 
Amazon S3 is always available because of its incredible infrastructure and negates the problems associated with local storage. Local storage is

Heroku
Herko is a cloud server hosting platform. The reasons behind outsourcing the server side of our application are the same as reasons outlined above for cloud storage. In a nutshell using cloud servers is a far more practical solution than running your own servers locally. The cost of Heroku was justified becasue of its ease of use. 

Stripe
Stripes software allows individuals and businesses to make and receive payments over the Internet. Stripe provides the technical, fraud prevention, and banking infrastructure required to operate online payment systems.

VScode
Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. This text editor was selected because the team members were most familiar with it and it was fully operational on both Linux and macOS. The features which were leveraged the most during the development were support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.

MacOS & Ubuntu
The operating systems the application was developed onwere MacOS and Ubuntu. MacOS and Ubuntu share some similarities because they are both based on Unix. This helped with collaboration between team members because they then shared a similar terminal and Os behaviours. 

Cypress
Cypress was used for all of our automated testing. It provides the platform for easy and reliable testing for anything that runs in a browser. Cypress allowed the team to write our automated testing.  The simplicity of Cypress allowed the team to Install it in seconds and automate our front-end testing.

Git 
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git was selected for source control because it was most familiar with the team members and is regarded at the industry gold standard. It is also highly compatible with GitHub and Git Kracken.

Gitkraken
GitKraken is a application which provides a graphical user interface for Git. Although all the Git operations are available from within GitKracken the team elected not to use them and instead used the terminal for all git commands. GitKracken sole usage was to visualize the git repository.  

GitHub
GitHub is a web-based hosting service for version control using Git. Git-hub was selected because it was the application which was most familiar to the team members and is the industry standard. 


**Identify the database to be used in your App and provide a justification for your choice.**

Our database of choice was PostgreSQL. It was chosen primarily because it is open source and the project budget did not have any funds allocated for for software. PostgresQL also makes the claim of being “The world's most advanced open source database”. PostgresQL has the advantage of being object relational over MySQL, MariaDB and Firebird. This makes PostgresQL extremely flexible and robust, this allows for user-defined objects and their behaviours including data types, functions, operators, domains and indexes. We do not initially take full advantage of PostgresQLs features for the application, however the flexibility of the database leaves the door open for expansion and upscaling the project.

**Identify and describe the production database setup (i.e. postgres instance).**
Postgres is a client/server application and as a user, we only need access to the client portions of the installation. Once installed, Postgresql allows you to create, access and destroy databases.

Each Postgresql session consists of these 3 elements;
1. A supervisory Postmaster
2. the user's psql program (front-end), and
3. 1 or more backend database servers which is the postgres process itself
 
The fundamental aspect of Postgresql are tables, which in turn are a collection of rows. Each row has the same set of named columns, and each column is of a specific type. Each row also has an unique permanent object identifier.

**Describe the architecture of your App.**
 - We are using Ruby on Rails as our web application framework. It is an open source software. Ruby on Rails is a server side language.

*Benefits of Rails*
1. It has many ready made modules and it hence efficient.
2. As it’s open source, it’s cost effective
3. It’s scaleable
   
 - For client-side code, we are using HTML and CSS
 - Rails as an in-built web server, Puma and we are hosting our application on Heroku.
 - Our database is Postgresql which is a SQL database.
 - We are using the MVC (Model View Controller) method when building this application.

**Explain the different high-level components (abstractions) in your App.**
1. The app follows the MVC pattern decomposing functions into models, controllers, and views
2. We are also using various Ruby Gems like Faker, Devise, Carrierwave, Carrierwave-AWS and MiniMagick
3. For front end styling, we are using the Bootstrap CSS library
4. More complex logic was abstracted out of the controller into service objects.

**Detail any third party services that your App will use.**

Stripe was the third party application used to take payments from users. It was selected for its record of stability, commision transparency, storage of users sensitive information, useability due to its exception documentation and finally its universality because it accepts several different cards from several different countries. In terms of stability its track record speaks for itself. Stripe has been established for almost 8 years and is valued at over $20 Billion USD. It has not has a server outage or data leak in that time and continuously updates its security meaning that the storage of users sensitive information is assured. Stripes sizeable market share can be explained by its usability, its excellent documentation covers the transaction and commision fees meaning the user can correctly price their products to account for it. For the above mentioned reasons Stripe was selected over other third party payment apps. 

Amazon S3 was used In order to avoid storing images locally. Local storage has several shortcomings including the machine to be constantly running and the finite nature of the hard drive. Amazon S3 elegantly takes care of both problems by leveraging cloud storage. 
Amazon S3 was used because it is cost effective,  secure, always available, simple to use and easy to manage. 
Instead of the fixed price of physical local hard drive, you are only charged for the amount of space occupying the cloud storage. This makes the price of the storage dynamic and significantly more cost effective than local storage. The price is also cheaper than other cloud storage options. Amazon S3 is always available because of its incredible infrastructure and negates the problems associated with local storage. Local storage is dependent on power supply, internet connectivity and hardware lifespan.

Herko is a cloud server hosting platform. The reasons behind outsourcing the server side of our application are the same as reasons outlined above for cloud storage. In a nutshell using cloud servers is a far more practical solution than running your own servers locally. Heroku, Google cloud and AWS were considered for housing the app. Heroku was ultimately selected because of the additional software installation and maintenance required by AWS and Google cloud. Heroku was slightly more expensive but the convenience was considered to be worth the cost when considering the time frame of the project. Heroku has other acknowledged advantages. Like other cloud services, Herku us able to scale very quickly and easily. As mentioned previously, networking is already setup with Heroku - we don’t have to worry about how our application is going to be able to hook into the internet. Whereas other cloud services require additional software installation and setting up which will not be possible with the time constraints of the project. Heroku comes prepackaged with some networking security already in place such as protection from DDOS. An advantage that any cloud server has over a local server is that it negates the need to maintain the hardware. Ultimately the cost factor of cloud servers is lower than local servers.

Wikipedia is a free encyclopedia which is maintained and written by the greater community. Anybody is able to access and contribute to wikipedia for free. Wikipedia is leveraged in this application with a get request to access the artist pages and images of the artists. Because of the level of fame associated with producing a record it is is incredibly likely that a artist page will exist on wikipedia. Wikipedia was selected because it is free and it has an incredibly large database.
Specific web pages were accessed via a get request and there after the information was parased to access the summary of the artist and the appropriate main image. 


**Describe (in general terms) the data structure of marketplace apps that are similar to your own (e.g. eBay, Airbnb).** 
As defined by https://www.voucherify.io, a working definition of an online marketplace *“is a virtual place where sellers and buyers meet to exchange goods or services. The exchange usually takes the form of transactions managed by the marketplace operator.”*

*Examples of two sided marketplace apps similar to our own*
1. Airtasker
2. Expert360
3. Fiverr

*Here are some key elements of 2 sided marketplace apps*

1. Sign in process, authentication and authorisation. The main marketplace apps also offer flexible authentication systems
2. Order management
3. Error handling
4. Account pages for various user types (e.g. vendor and buyer) including aspects like image uploads
5. Payment gateway e.g. Stripe, Paypal or Braintree
6. Security like SSL certificates
7. Mail alerts and notifications
8. Features like reviews, testimonials etc.

*Data Structure*
As we are using a SQL database, data is stored in tables and columns, rows. The relationship between tables and field types is called a schema. In a relational database, the schema must be clearly defined before any information can be added.

It’s important that when organising data to;
1. Maximise efficiency in queries
2. Minimize data redundancy 
3. Prevent tables from becoming out-of-sync and allow for flexibility

**Discuss the database relations to be implemented.**


**Describe your project’s models in terms of the relationships (active record associations) they have with each other.**


**Provide your database schema design.**

![alt text]()

**Provide User stories for your App.**

![alt text]()

**Pictures of user stories from Trello Board**

*USER STORIES*
trello

![alt text]()

As alex I would like to buy vinyl records online so that I can continue to expand my collection. 

As Bruce I would like to list my vinyl collection online for sale so that I can sell the records I no longer want to keep in my collection

As Josephine I would like to trade vinyl with people instead of buying new records so that I can refine my collection without spending money 

As Leah I would like to message people without having to give out my personal contact details so that I can communicate safely

As Bryce I would like to be able to view all the listings from a particular user so that I can see if they have other albums I like


**Provide Wireframes for your App.**

*MOBILE MOCKUP*
![alt text]()
![alt text]()
![alt text]()


*DESKTOP MOCKUP*
![alt text]()
![alt text]()
![alt text]()

**Describe the way tasks are allocated and tracked in your project.**

Tasks were assigned by consulting the project timeline gantt chart and checking what needed to be done on that specific day. Thereafter team members volunteered to take on different tasks in pairs or alone. The time criteria for each task was dictated by the gantt chart. Because team members were always present during working hours, they were able to troubleshoot on problems that other team members had. 

*INITIAL PLANNING & BRAINSTORMING*
Insert drawings of frames
![alt text]()

*INITIAL PLANNING*

![alt text](1.png)
![alt text](3.png)
![alt text](4.png)


**Discuss how Agile methodology is being implemented in your project.**

Two daily meetings were held from Monday to Friday. Both meetings were conducted in a stand-up style format. The morning meeting was held at 9am and covered the sprints for the upcoming day, who gets assigned to which task and whether or not somebody will need help with a particular aspect of their task i.e. if they anticipate encountering any blockers in the future. Tasks were assigned by consulting the project timeline gantt chart and checking what needed to be done on that specific day, thereafter team members volunteered to take on different tasks in pairs or alone.

The evening  served as an opportunity to demo the days work. This often involved the completion of a particular feature (e.g. successfully incorporating stripe into the app) if the team agreed that the feature was solid and displayed no obvious bugs then the branch was merged into the dev branch. The last task completed during the meeting is to merge the dev branch into the master branch. 

Agile methodology was implemented by following the agile manifesto. The 12 principles were consulted in order to make sure the team was as efficient as possible and remaned agile. How each principle was interpreted and implemented is discussed below. 

Principle 1: “Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.”
Within the context of the assignment the team interpreted this principle to be focused on delivering a good product on the deadline. 

Principle 2: “Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.”
The team went through a rigorous wireframing and planning phase before the first line of code was ever written. That being said, no matter how well planned a project is, there will always be additional features which weren’t accounted for during planning. Our team was continuously prepared for a change in requirements. An example of this was to add in a “favorites” feature late in the development stages of the project. The team adapted to the new feature and incorporated it into the views of the homepage as well. 

Principle 3: “Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.”
Within the context of the assignment the team interpreted this principle to be concerned with meeting the timeline goals prescribed by the gantt chart. This meant that team members aimed to have the different features merged into the development branch by the deadline prescribed by the gantt chart. 

Principle 4: “Business people and developers must work together daily throughout the project.”
Because all three team members are developers, one team member role-played as a “business person” during the concept and wireframing phase of the project. This person was responsible for making sure that all business related concerns were addressed in the development of the app.

Principle 5: “Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.”
One of the goals of the ideation phase was to find a project which all members were excited about. This ensured that all three members would be motivated to work on the development of the app. The positive working environment and support was achieved by working in close proximity to each other enabling face to face questions. 

Principle 6: “The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.”
As mentioned in Principle 5, face-to-face time was essential for a positive work environment and maximising support of other group members. Face-to-face conversations were guaranteed throughout the day with two regular stand up meetings and a handful of impromptu meeting throughout the day. The in person communication was far more effective than remote communication. 

Principle 7: “Working software is the primary measure of progress.”
The team prioritised working code over fast code. This meant that it was considered preferable for a gantt chart deadline to be missed because the team member ran over time instead of pushing broken coode. 

Principle 8: “Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.”
The project planning and gantt chart accounted for working hours from 9:00-17:00 Monday to Friday for two weeks. This meant we collectively had 240h of working time. The team considered this ample time to complete the project without having to go into the weekend or after hours. This promoted sustainable development as the team members had enough time to rest in the evenings and on the weekends. 

Principle 9: “Continuous attention to technical excellence and good design enhances agility.”
Within the context of the project and timeline the 9th principle was interpreted to be continuously mindful of writing clean code to implement the design which was outlined by the wireframe. Making the code clean and DRY ensured that other team members could read and understand the code as well as making the code more scalable. 

Principle 10: “Simplicity--the art of maximizing the amount of work not done--is essential.”
The team interpreted the 10th principle to be: keeping the teams focus on the current sprint and narrowing the focus of the days work to what is in front of them. 

Principle 11: “The best architectures, requirements, and designs emerge from self-organizing teams.”
When a team member was assigned/volunteered a task they were left to their own devices to find their own solution. This provided a sense ownership to the team member which gave them extra motivation to see their solution through. 

Principle 12: “At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.”

**Provide an overview and description of your Source control process.**

*insert GIT Kraken images*
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)
![alt text](1.png)

The tech stack used for source control was GIT, GitHub and GitKracken. Git was used to push/pull code to GitHub and GitKracken was used to visualise the Git repository and everything associated with it.
Initially a dev branch was created off the master branch. The dev branch was used as the main working branch, where other “feature branches” branched off of e.g. Stripe. When the feature branch was complete then it was merged into the dev branch. At the end of the working day the dev branch was merged into the master branch. This extra layer of redundancy helped protect the master branch from bugs which were caused by unforeseen edge cases on the dev branch.


***Provide an overview and description of your Testing process.***

The testing process began with each individual feature on its own branch. Each team member responsible for that branch manually tested the feature as far as possible before merging it into the dev. This testing phase was not documented as it is still a part of the coding phase. 

The automated testing phase was conducted when all the features of the site were complete. Cypress was used for all automated tests and the team pair programmed each test. Because user stories were used as a basis for each feature, they were used again as a basis for testing each feature. The automated tests were written to go down the “happy-path” initially and then edited to test all other outcomes. 

**Discuss and analyse requirements related to information system security.**
*Common threats to web applications*
1. User account hijacking
2. Bypass of access control
3. Reading or modifying sensitive data, or
4. Presenting fraudulent content. 

Sessions are particularly vulnerable to security breaches and this is one the reasons that sensitive data should not be stored in sessions. We can also as a preventative security measure, auto expire sessions in a database table.

Rails has built-in security features that come with the framework including helper methods which prevent SQL injections. Another common attack vectors of web sites are forms. 
As of Rails 5.2 encrypted cookies and sessions are protected using AES GCM encryption.

Sensitive password is always encrypted before being saved in the database.

Credit card information is never stored on our application. Sensitive payment details is handled by the Stripe service.

**Discuss methods you will use to protect information and data.**
1. We used Rails form helper methods to protect against CSRF (Cross Site Request Forgery) attacks with authenticity tokens. 
2. For user inputs our controllers explicitly check the parameters attributes and our models validate the data before they are saved into the database.
3. The Devise gem we are using is built on top of Warden which is a separate module and executes before the Rails application is invoked. Warden provides cookie handling, verifies the logged in user and allows for restricted access. BCrypt encrypts passwords our database.
4. Credit card information is never stored on our application. Sensitive payment details is handled by the Stripe service.


Ruby on rails has several in built features to protect user information and data. The first and most obvious issue is the protection against sql injection and CSRF. 
User information and images are stored in the cloud in Heroku and Amazon S3 respectively. Both services have exceptional track records in terms of security with no notable data breaches since their inception. 
The user passwords are encrypted in the Heroku storage system. The encryption is a feature of devise, which is essential for the users information security. This makes the users personal content (e.g. messages) unavailable even to the team. The messages themselves will be encrypted in an upcoming release of the app.  


**Research what your legal obligations are in relation to handling user data.**
The Privacy Act 1988 defines what *personal information* is e.g. individual’s name, telephone etc. This Act has 13 Australian Privacy Principles (APPs). We need to abide by these APPs in the collection and storage of personal information by our app.
Were this app to grow (over $3million in revenue), in the event  of a privacy breach of personal information, we also are subject to the Notifiable Data Breaches Scheme

Stripe our third party payment processing system also has it owns Privacy Policy and all complaints in Australia for Stripe users have to be heard by Office of the Australian Information Commissioner

In short the company responsible for holding the data is responsible for it i.e. if there is a data breach of a users information that is stored on a local machine, then the owner of that machine is responsible for that breach. Because we have made the decision to store user information and images in the cloud the 3rd party services are then responsible for the security of that information. If there is a data breach with either of those services they are legally obligated to notify their clients whom are in turn obligated to notify their users. 

A data breach occurs when; a device containing customers’ personal information is lost or stolen, a database containing personal information is hacked, personal information is mistakenly provided to the wrong person. and personal information is mistakenly provided to the wrong person.