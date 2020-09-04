# EzBuild


## What it Is

EZBuild is a specialized marketplace for custom-built computers. Rather than go deep with the options, we’ll provide targeted builds with some room for flexible customization.


## Who It’s For



*   Serious gamers with an interest in the hardware that doesn’t extend beyond results
*   Creative professionals who just need something that can run specialized editing software
*   Streamers and other social media professionals
*   Consumers looking for an alternative to Mac that’s not as spec heavy or overwhelming as conventional PC builds.


## Who It’s Not For

PC super nerds, dudes who call themselves the “PC Master Race” without any sense of irony. There are better sites out there already that can help you compare your builds to esports pros, battle builds, and more. EZBuild is not for the hardware enthusiast but opens up the world of custom computers to the average consumer.


## Routes

GET

	Gaming Section



*   /builds/gaming/all - gets all builds specific for gaming PC’s
*   /builds/gaming/:id - shows a single product under the gaming section

	Streaming Section



*   /builds/streaming/all - gets all builds specific for streaming prioritized PC’s
*   /builds/streaming/:id - shows a single product under the streaming section

	Creators Section



*   /builds/creators/all - gets all builds specific for content creation PC’s
*   /builds/creators/:id - shows a single product under the creators section

	Users Section



*   /user/:id - shows user page with personal build

	User Login



*   Renders user login page

	User Register



*   /user/new - Renders user register page

POST 

Users Section



*   /user/:id - Posts to user page with personal build

	User Login



*   /auth/login - Allows user to login 

PUT

Users Section



*   /user/:id/edit - Updates users personal build

DELETE

	Users Section



*   /user/:id - Deletes personal build from user page


## Wireframes:



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")




<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")




<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")




<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")




<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")



# How It Will Work: Data

EZBuild will essentially be a storefront, albeit one that’s wide but shallow. Our catalog will (at least initially) consist of just nine builds: budget, mid-range, and luxury builds for creators, gamers, and streamers. How this data is portrayed is similarly wide but shallow, and we’ll likely need to add parallel tables further on in development. For that reason, we’ll discuss each of the four data layers though we’re also attaching some schema mockups for the more visually oriented.



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.jpg "image_tooltip")


<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.jpg "image_tooltip")



## Where Our Data Comes From

Given the limited timeframe for deployment, our curated approach to build design, and the relatively small size of our catalog, we’ll be populating our tables ourselves. If every part for every build is unique (and they won’t be), we need to generate nine entries per parts table.

Let’s get into our layers of data, how they interact with each other, and how they’ll be represented. Assume the tables below are subject to change. 


### User Layer

The user layer consists solely of a User table. Each entry will contain the information for each user. For our initial MVP, a user entry serves two main purposes, one of which leads to the other:

requiring authentication so a build receipt is tied to their profile

AND

allowing the user to only store one build.

We have two options here: either assigning a foreign key to the user when they choose a build

OR

Using a join table for the user and build layers. We’ll have to weigh the strengths and weaknesses of each.

Post-MVP additions to the user table can include address, email, etc. but probably not payment information.


<table>
  <tr>
   <td><strong>user</strong>
   </td>
   <td><strong>datatype</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>UNIQUE KEY VALUE
   </td>
  </tr>
  <tr>
   <td>username
   </td>
   <td>VARCHAR NOT NULL
   </td>
  </tr>
  <tr>
   <td>password
   </td>
   <td>VARCHAR NOT NULL
   </td>
  </tr>
  <tr>
   <td>user_build_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
</table>



### User Build Layer

The user build will link together the user table and the build table. It’s essentially the container that holds the itemized receipt for the user’s current build, and it will be displayed when the user clicks the button to checkout. It accepts a user key as well as the key for whatever PC build they’re trying to buy. It may also have to take information on specs that users can change (RAM, storage) so we aren’t altering the base build model.


<table>
  <tr>
   <td><strong>user-build-model</strong>
   </td>
   <td><strong>datatype</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>UNIQUE KEY VALUE
   </td>
  </tr>
  <tr>
   <td>user-id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>build_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
</table>



### Build Layer

The build will serve as our catalog and hold (at least initially) nine different builds. Each build will contain a foreign ID for one of each necessary component. The information derived from each build will populate the product pages.


<table>
  <tr>
   <td><strong>user-model</strong>
   </td>
   <td><strong>datatype</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>UNIQUE KEY VALUE
   </td>
  </tr>
  <tr>
   <td>cpu_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>gpu_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>ram_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>hard_drive_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>case_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>psu_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>motherboard_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
  <tr>
   <td>networking_card_id
   </td>
   <td>FOREIGN KEY
   </td>
  </tr>
</table>



### Specs Layer

The deepest layer in our MVP build is also the widest (and the most mutable). Every build will require one and only one of each spec, but we can rate these in order of their priority and their relationship with the user. All of our specs will come with an id and a price. The more important ones will come with an image and one or more key for descriptive text.


#### Showcase Specs

These are the defining components of each build. Their individual specs will determine performance, and  so a decent amount of properties here will be reformatted for display in the view for each build.These include (but aren’t necessarily limited to) the GPU and CPU.

**Example:**


<table>
  <tr>
   <td><strong>gpu</strong>
   </td>
   <td><strong>datatype</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>UNIQUE KEY VALUE
   </td>
  </tr>
  <tr>
   <td>make
   </td>
   <td>VARCHAR NOT NULL
   </td>
  </tr>
  <tr>
   <td>model
   </td>
   <td>VARCHAR NOT NULL
   </td>
  </tr>
  <tr>
   <td>generation
   </td>
   <td>VARCHAR NOT NULL
   </td>
  </tr>
  <tr>
   <td>cores
   </td>
   <td>INTEGER
   </td>
  </tr>
  <tr>
   <td>base_clock
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
  <tr>
   <td>max_clock
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
  <tr>
   <td>price
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
  <tr>
   <td>image
   </td>
   <td>URL
   </td>
  </tr>
  <tr>
   <td>description
   </td>
   <td>TEXT
   </td>
  </tr>
</table>



#### Variable Specs

Variable specs aren’t fundamentally different from showcase specs. They might be used to derive performance benchmarks, but the user will be able to change them in the build view. Variable specs include memory, storage, and case (purely cosmetic).

**Example:**


<table>
  <tr>
   <td><strong>ram</strong>
   </td>
   <td><strong>datatype</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>UNIQUE KEY VALUE
   </td>
  </tr>
  <tr>
   <td>capacity
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
  <tr>
   <td>speed
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
  <tr>
   <td>ddr-generation
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
  <tr>
   <td>price
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
</table>



#### Background Specs

These specs will largely be hidden to the user, but they will affect pricing. They’re necessary for a build to work, but the specifics won’t be salient to our demographic.

**Example:**


<table>
  <tr>
   <td><strong>psu</strong>
   </td>
   <td><strong>datatype</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>UNIQUE KEY VALUE
   </td>
  </tr>
  <tr>
   <td>name
   </td>
   <td>VARCHAR NOT NULL
   </td>
  </tr>
  <tr>
   <td>price
   </td>
   <td>INTEGER NOT NULL
   </td>
  </tr>
</table>



## Beyond MVP

The elephant in the room! So, we have a storefront, but how does it handle the actual transaction with the customer? The right answer is maybe “Stripe, probably”, but the most accurate might be “That’s a problem for the next guy”. We’ll be looking at external APIs so we can actually get a full front-to-back store up and running, but that’s less MOS and more COW.


# Styling, UI, UX

If there are two aesthetics that define the market for specialty computer builders, they’re “an Advanced Auto Parts out in the suburbs” or “high pressure arms dealer from a 90s action movie”. Those niches are covered, and they don’t really suit our audience. Instead, we’ll be looking more at the bespoke model, the “quirky Brooklyn neighbor” that sells handcrafted computers. 

Having a more guided experience, in the model of something like Hubble (for contact eye lenses) or Blue Apron won’t be functionally different, but it will create a distinct experience and also give us more room to display all the information we need to display. We’re less interested in providing the numerically dense specs and benchmarks and more interested in delivering narratives to the readers. Our general objective with user design is to convey the advantages of an item or a build in actionable terms, and making the avalanche of specs and jargon accessible but in the background.

Presumably, this means a more muted design scheme - minimalistic even. I haven’t started mocking up color schemes yet, but we can mock up something, maybe with thematic cues for our three price tiers and our three use categories. That will be reflected in names as well. Think less _Tiburon Romulus XXGuns of WarXX Edition THX-82371-XL _and something more iconic, maybe bordering on pretentious.
