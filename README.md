# Supreme Court Jukebox

Link to the webpage:

http://cse512-15s.github.io/a3-jbare-sonyaa-tws10/

#Storyboard:

Our app will enable users to study patterns in Supreme Court voting, centered on individual justices.

### Dataset
The dataset we're using can be found [here](http://supremecourtdatabase.org/data.php). It contains every vote by a Supreme Court justice in all argued cases from 1946 to 2014. Each vote is classified as conservative or liberal (or unspecifiable). There is also information about the decision on the case (and whether it was conservative or liberal). 

There is a number of interesting things to explore here: which justices are overall conservative or liberal, which ones vote mainly with majority and which ones stand out with their minority votes, whether there are justices that were conservative at some point but switched to liberal, whether there are periods when the Supreme Court was conservative and periods where it was liberal, whether there are similarities between voting patterns of certain justices. It would be also interesting to explore which cases produced a split vote (i.e. a 5:4 voting pattern) - and there are many more questions one could ask based on this dataset. 

However, how do you visualize it? There are thousands of cases, and for each case there are 9 votes (for each individual judge) and one decision, as well as a direction (conservative/liberal) and a majority parameter associated with each vote. The dataset spans almost 50 years and 36 different judges. Obviously, without interaction it is impossible to visualize. 

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
This visualization shows ideological data about Supreme Court votes by justices between 1946 and 2014. 

"Liberal" decisions are shown as blue circles in the main chart, "conservative" decisions are shown as red circles, and abstentions or other non-decisions are shown as gray circles (circles are absent for absent data). The background of each row shows the majority ideological direction, which corresponds to the final decision on each case. Clicking the row opens up Google search results for that case in a new browser tab. Clicking and dragging in the main chart, or using the mouse wheel over it, scrolls through the cases.

The summary time series in the scroll brush area shows overall ideological trends by computing a moving average of the ideological direction of the majority rulings in each case, with liberal coded as +1 and conservative coded as -1. The brush (grey rectangle) shows the time period currently displayed in the main chart. The scroll brush area allows to scroll across time periods by clicking and dragging the brush, and to quickly navigate to a certain time period by clicking in the scroll brush area.

Clicking on the name of a justice brings up a graph showing a running total of their decisions. If the "Liberal/conservative" radio button is selected, this running total is again computed with the +/-1 encoding for liberal/conservative, whereas selecting "Majority/minority" uses the +/-1 enconding for voting with the majority or with the minority. The gray reference line in these graphs shows the running total with the same encodings for the final decisions of the full court on each case. The grey selection shows the time period currently displayed in the main chart. Clicking the name of the justice in the title of these graphs opens up a Wikipedia page for that justice. 

## Explanation of changes between the storyboard and the final implementation
* Addition of the conservative/liberal overview. By providing a high-level overview, we enable the user to quickly locate interesting patterns and navigate to them using the time brush.
* Coupling of the two views: the time period shown in the main view is also shown on the overview and on the justice-centered view. This allows the user to explore patterns seen on the justice-centered view in more detail in the main view.
* We decided not to implement the filter feature due to time constraints.

# The development process
### Breakdown of work split 
* Tanner
  * Column headers / proper positioning of circles by justice
  * Scrolling in the grid view
  * Tooltips
  * References from grid view to google search by case
* Justin
  * Scroll brush and axis
  * Moving average overview for scroll brush background
  * Row features on the main chart
  * General formatting and layout of the website
* Sonya
  * Additional data (human-readable justice names, Wiki links, appointment by president)
  * Storyboard write-up
  * Justice-centered view
  * Moving average line coloring

### Commentary on the development process 
* **Roughly how much time did you spend developing your application (in man-hour)?** 
 * Tanner: 15
 * Justin: 15
 * Sonya: 10 (+ about 7 hours spent on dataset selection, initial data exploration, additional data acquisition, storyboard and write-up)

* **What aspects took the most time?** 
 * Tanner: Learning how D3 works, especially binding nested data to nested elements! Also, this dataset is unique in that there are always at most 9 columns but the column headers change over time, so it was a bit tricky to deal with that.
 * Justin: Learning how D3 works. Reading and understanding other peoples' code. 
 * Sonya: D3 fundamentals. Making unorthodox axis tick labels (i.e. if the axis is based on cases, make the ticks display years). Making a line colored based on data values (especially if the domain is not symmetric). Styling (I have almost zero experience with CSS).
