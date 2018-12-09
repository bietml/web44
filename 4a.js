function leftv(str)  
{  
	for(i=0;i<str.length;i++)  
	{  
		if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' ||str.charAt(i)=='o' || str.charAt(i)=='u' )  
			return ("Left most vowel of " + str + " is at location " + (i+1) );  
	}  
	return ("No vowels found for string "+ str);  
} 