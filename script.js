var i,n=10;
function getFood(){
    var myFood=document.getElementById("inputBox").value;
    console.log(myFood);
        const url='https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query='+myFood;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dd2ee85277msh7962e7d27dd7686p11ce3bjsn22871b0d33a9',
                'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
             console.log(data);
              for(i=0;i<n;i++)
              {
                document.getElementById("p1").innerHTML=data[i].title;
                document.getElementById("heading1").innerHTML="INGREDIENTS";
                document.getElementById("p2").innerHTML=data[i].ingredients;
                document.getElementById("heading2").innerHTML="INSTRUCTIONS";
                document.getElementById("p3").innerHTML=data[i].instructions;
                
              }
            })
            .catch((err) => 
            {
                console.error(err);
            });
}

