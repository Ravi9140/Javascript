function countLoneOnes(user_input)
{
    var remainder=0,previous_remainder=0,count=0,prev_prev_rem=0;
    while(user_input>0)
    {
      prev_prev_rem=previous_remainder;
      previous_remainder=remainder;
      remainder=user_input%10;
      user_input=Math.floor(user_input/10);

        //2nd Condition: For case where first digit is of Number is 1 and second digit is not 1
      if((previous_remainder==1 && remainder!=1 && prev_prev_rem!=1) || (user_input==0 && remainder==1 && previous_remainder!=1))
      {
            count++;
      }
    }
    return count;
}

var LoneOnes1=countLoneOnes(101);
console.log(`\n101 -> ${LoneOnes1}`);

var LoneOnes2=countLoneOnes(1191);
console.log(`\n1191 -> ${LoneOnes2}`);

var LoneOnes3=countLoneOnes(10101);
console.log(`\n10101 -> ${LoneOnes3}`);

var LoneOnes4=countLoneOnes(1011101011);
console.log(`\n1011101011 -> ${LoneOnes4}`);
