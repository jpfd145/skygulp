$.ajax({url:"https://sky-frontend.herokuapp.com/movies"}).done(function(e){console.log(e),$(".teste").append('<img style="max-width: 100%; and height: auto;" class="img-responsive center-block" src="'+e[0].items[0].images[0].url+'"/>'),$(".teste2").append('<p style="color: yellow">Title: '+e[0].items[0].title+"</p>"),$(".teste3").append('<p style="color: yellow">Year: '+e[0].items[0].year+"</p>"),$(".teste4").append('<p style="color: yellow">Description: '+e[0].items[0].description+"</p>")});