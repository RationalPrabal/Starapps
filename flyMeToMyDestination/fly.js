//! This particular problem can be solved using DP which can solve the problem in O(n) time.

//! So in this problem we have multiple options at every airport to fly and stop at the airpot within its fuel capacity.
//! Also we can not always take the maximum possible stop because that may not always result in the optimal solution.

//! So here I am going to to run a loop over the provided array and from each element(fuel capacity) we will try to see how many steps we can take.





function minimumPlanes(a){
//! Initializing 3 variables


    let farthest=0 //! location of the farthest airport till which we went
    let current=0 //! max airport till which we can go in a single jump from any particular point
    let jumps=0 //! total number of jumps

    //! all of them are zero initially because we are starting from first airport 

    for(var i=0;i<a.length-1;i++) {

        //! farthest point we can get by taking max between the current farthest and by jumping the max from the current point
        farthest=Math.max(farthest,a[i]+i);

        //! when we have exhausted all the possible jumps from any particular point then change the current to the farthest point and increace the jump counter
        if(i==current){
            current=farthest;
            jumps++
        }
    }
    //! exit the loop and print the jumps

    //! if current is not equal to last point then we are not able to travel to the last airport, in this case print -1.
    if(current!==a.length-1){
        console.log(-1)
    }
    //! otherwise print minimum number of jumps
 else   console.log(jumps)
}

//! calling the function through the a sample test case.

minimumPlanes([1,1,2,0,0])

//! Time complexity of the solution is O(n) as we are iterating over the loop once.
//! Space complexity if 0(1) as we  are not using any extra space