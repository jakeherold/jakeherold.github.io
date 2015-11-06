#donut
Donut Shop Project

Contributors:
Alex Anderson
Connor Cumming
Hugh Devore (debugging assistance)

11/6/15
Added animatons, and removed lorum ipsum paragraphs for the sake of cleanliness.
This seem to look good, and are ready to turn in.

to-do (in the future)
------------------------
0. Get hash working for duplicate inhibition
1. Actually eat a doughnut. (not optional)

====================================================================================

11/5/15
Worked on getting the form-clear function going. Finally got it to go.
added RickRoll easteregg.
Solved header issues, and have table running perfectly.

To-do:
-------------
0. Add hash-based duplicate inhibitor
1. Clean and do some restyling

========================================================================================================

11/4/15
10:13pm
Worked all day on getting the table right again. Didn't go as well as hoped. So, with a little assistance, I feel like i fully understand the intricacies of adding table elements to the dom(and as a result, can probably add pretty much any needed element, with a little practice.). To this end, now i'm tweaking the constructed elements so that the header doesn't go away upon adding  a row.

Added a table head section, worked like a charm. Header no longer gets deleted.

Added some basic CSS Style. Not finished yet, but is a helluva lot better than when it started.

To-do:
-------------
0. figure out why the donutHeader is being surrounded by brown. Maybe need to put it in a new element?
1. Finish CSS style
2. Add rickRoll easterEgg
3. Add donut of XKCD-dom
4. have a beer and possibly a donut in celebration (optional, but not really)


______________________________________________________________________________________
11/3/15
10:30pm
Got the counter-total system working, though it prints to the n-1th spot, rather than its prpoper location.
Also, got the form-fillable system kind of working. Still have to debugg that little booger, too.

To-do:
-------------
0. debug appendChild DOM issue, so that the totals print in the proper location.
1. find ways to shrink code//make more efficient.
2. figure out where in the world the location name is being thrown away to.
3. put some styling on it. IT looks like trash still.

______________________________________________________________________________________

11/2/15 - 11/3/15
12:21 AM
Well, I got the code to do what it needed to. Loops aren't working right, and kept trying to re-title my index.html file to "medford" for some bizzare reason. Decided on the brute force method.

Bug fixes include:
1.0 - Created basic functionality using brute force coding with known methodology.
1.1 - De-buggered the decimal points cluttering my beautiful numbers. Error occured because the "this.donutsThisHour" function lacked a math.floor() cleanup. Perhaps the first quick fix of the project so far.
To-do:
--------------
0. Figure out how to set table lines using loops and DOM mods
Status: DONE
1. Get arrays set with useful values
Status: DONE
2. figure out how to pull from those arrays using loops
Status: DONE
3. find donuts and either eat them or set them ablaze. [optional]
Status: TO DO

