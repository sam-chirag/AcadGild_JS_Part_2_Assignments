var a=[5, 2,3,5,7,8,20];
var min=a[0];
var max=a[0];
for (i=0;i<a.length;i++)
{
	if (a[i]>max)
	{
		max=a[i];
		
	}
	if(a[i]<min)
	{
		min=a[i];
	}
}
document.write ("Max number is" + max);
document.write("\n\n\n");
document.write("Min number is" + min);
