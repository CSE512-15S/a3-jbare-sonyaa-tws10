# Supreme Court Jukebox

Link to the webpage:

http://cse512-15s.github.io/a3-jbare-sonyaa-tws10/

#Storyboard:

Our app will enable users to study patterns in Supreme Court voting, centered on individual justices.

### Dataset
The dataset we're using can be found [here](http://supremecourtdatabase.org/data.php). It contains every vote by a Supreme Court justice in all argued cases from 1946 to 2014. Each vote is classified as conservative or liberal (or unspecifiable). There is also information about the decision on the case (and whether it was conservative or liberal). 

There is a number of interesting things to explore here: which justices are overall conservative or liberal, which ones vote mainly with majority and which ones stand out with their minority votes, whether there are justices that were conservative at some point but switched to liberal, whether there are periods when the Supreme Court was conservative and periods where it was liberal, whether there are similarities between voting patterns of certain justices. It would be also interesting to explore which cases produced a split vote (i.e. a 5:4 voting pattern) - and there are many more questions one could ask based on this dataset. 

However, how do you visualize it? There are thousands of cases, and for each case there are 9 votes (for each individual judge) and one decision, as well as a direction (conservative/liberal) and a majority parameter associated with each vote. The dataset spans almost 60 years and 36 different judges. Obviously, without interaction it is impossible to visualize. 

### Techniques
Here are the main ideas for our visualization:
* Color can effectively convey the direction of the votes. There is a traditional color scheme associated with the conservative/liberal split: red/blue. The patterns can be grasped quickly just by glancing at a colored matrix.
* Panning across time periods allows the user to explore the data. 
* Selecting a case brings up details about it.
* Selecting a justice brings up details about him or her, as well as a justice-centered view: a running total of their votes based on either vote direction or majority parameter. This allows to quickly see how conservative a justice was, or how much they voted with majority - as well as any interesting patterns over time.

### App

Sample "snapshot" of our proposed app:

![](https://github.com/CSE512-15S/a3-jbare-sonyaa-tws10/blob/master/images/storyboard_example.jpg)

Overview:

![](https://github.com/CSE512-15S/a3-jbare-sonyaa-tws10/blob/master/images/storyboard_overview.jpg)

Main view (4) shows the voting results for a given case/justice. Each vote is denoted by a small square. The color of the square represents if the vote was conservative or liberal (see Legend (5)). On the left of the main view is the case information bar (3), which allows to view the name of each case by clicking on the "info" icon. The cases are sorted chronologically. The header of the main view (2) shows justice names (sorted by seniority), which are clickable. Clicking on a name will show the justice-centered view (7): the running total of each justice's votes, based on conservative/liberal or majority/minority (changeable with (8)). The x-axis of the justice-centered view spans the length of the service for that particular judge. The justice-centered view also shows the selected judge's name, which is a link that takes the user to the justice's Wikipedia page. 

The main view shows 100 cases. The data shown in the main view can be filtered by vote configurations (6), and paged by time (1). In the event that in the selected time period one of the justices was replaced by another, the main view changes slightly, allowing the user to see the replacement:

![](https://github.com/CSE512-15S/a3-jbare-sonyaa-tws10/blob/master/images/storyboard_justice_change.jpg)

## Description of the final interactive visualization application
TODO

## Explanation of changes between the storyboard and the final implementation
* Addition of the conservative/liberal overview. By providing a high-level overview, we enable the user to quickly locate interesting patterns and navigate to them using the time brush.
* Coupling of the two views: the time period shown in the main view is also shown on the overview and on the justice-centered view. This allows the user to explore patterns seen on the justice-centered view in more detail in the main view.
* TODO

# The development process
TODO
### Breakdown of work split 
* Tanner
 * Dataset 
 * TODO
* Justin
 * TODO
* Sonya
 * Storyboard write-up
 * Justice-centered view

### Commentary on the development process 
* **Roughly how much time did you spend developing your application (in man-hour)?** 
 * Tanner: TODO
 * Justin: TODO
 * Sonya: 10

* **What aspects took the most time?** 
 * Tanner: TODO
 * Justin: TODO
 * Sonya: D3 fundamentals. Making unorthodox axis tick labels (i.e. if the axis is based on cases, make the ticks display years). Styling (I have almost zero experience with CSS).
