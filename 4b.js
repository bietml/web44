function revs(num)
{
	rev=0;
	temp=num;
	if(isNaN(num))
	return "invalid input";
	while(num!=0)
	{
		rev = rev * 10;
		rev = rev + num%10;
		num = Math.floor(num/10);
	}
	return "Reverse of a Number "+temp+ " is "+rev;
}