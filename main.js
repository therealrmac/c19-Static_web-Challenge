var blog=[{title: "About me", copy: "I was born in Cynthiana KY in August 6th, 1989 at Harrison Memorial Hospital in Harrison County. I am the youngest of two, I have an older Sister that was born in September 23rd, 1986. I played sports throughout most of my life growing up but once I got to High school I only stuck with Football since it was my favorite.  I graduated from grade school in 2008 under the last term of George W Bush, and went to Morehead State Univeristy for college.  I studied computer science while I was there and learned how to use Python, c++, and Java. I worked at a medical laboratory for 4 years from the time that I was 23 until 27, and in that time I also attendted classes online through ITT-Tech learning web development and front end programming.  You may have heard however, that ITT-Tech went under and thus I was unable to complete my training there.  So now I have come to NSS to seek that so desired field of study.", date: "4/28/2017"},
	{title: "Redoing my blog", copy: "I have had to personal web page because my original laptop had been stolen while I left it in my car overnight. So now I'm remaking the javascript, css and whatever else needs to be in it.  It is frustrating because I thought I had pushed my work that I had dont previously to github but I must have forgotten to.", date: "4/28/2017"}
];

var output= document.getElementById('bio');
	var post;
for (prop in blog){
	post= `<div class="blogContent">
			<h3 class="title ">${blog[prop].title}</h3>
			<span class="copy">${blog[prop].copy}</span>
			<p class="date">${blog[prop].date}</p>
			</div>`;
	output.innerHTML+= post;
};